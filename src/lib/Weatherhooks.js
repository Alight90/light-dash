import { useState, useEffect, useRef } from "react";
import { WeatherAPI } from "../lib/WeatherApiHelper";

export function useWeather(type = "current") {
    const LOCATION = "32084";
    const CACHE_KEY = `weather_${type}`;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const preloadRef = useRef(null);

    useEffect(() => {
        let ignore = false;
        let preloadTimer;
        let updateTimer;

        // --- CACHE HELPERS ---
        function getCached() {
            const raw = localStorage.getItem(CACHE_KEY);
            if (!raw) return null;

            try {
                return JSON.parse(raw);
            } catch {
                return null;
            }
        }

        function saveCache(json) {
            localStorage.setItem(
                CACHE_KEY,
                JSON.stringify({
                    data: json,
                    timestamp: Date.now()
                })
            );
        }

        // --- FETCH FUNCTION ---
        async function fetchWeather() {
            try {
                const url = WeatherAPI[type](LOCATION);
                const res = await fetch(url);
                const json = await res.json();
                return json;
            } catch (err) {
                if (!ignore) setError(err);
                return null;
            }
        }

        // --- INITIAL LOAD ---
        async function initialLoad() {
            const cached = getCached();

            if (cached) {
                const age = Date.now() - cached.timestamp;
                const fourteenMinutes = 14 * 60 * 1000;

                // Cache is fresh → use it instantly, no loading spinner
                if (age < fourteenMinutes) {
                    if (!ignore) {
                        setData(cached.data);
                        setLoading(false);
                    }
                    return;
                }

                // Cache is stale → still show it instantly, but fetch in background
                if (!ignore) {
                    setData(cached.data);
                    setLoading(false);
                }
            }

            // No cache or stale cache → fetch now
            const json = await fetchWeather();
            if (!ignore && json) {
                setData(json);
                saveCache(json);
                setLoading(false);
                setError(null);
            }
        }

        // --- PRELOAD NEXT UPDATE ---
        async function preloadNext() {
            const json = await fetchWeather();
            if (!ignore && json) {
                preloadRef.current = json;
            }
        }

        // --- APPLY PRELOADED UPDATE ---
        function scheduleRefresh() {
            // Preload at 14 minutes
            preloadTimer = setInterval(preloadNext, 14 * 60 * 1000);

            // Apply update at 15 minutes
            updateTimer = setInterval(() => {
                if (!ignore && preloadRef.current) {
                    setData(preloadRef.current);
                    saveCache(preloadRef.current);
                    preloadRef.current = null;
                    setError(null);
                }
            }, 15 * 60 * 1000);
        }

        initialLoad();
        scheduleRefresh();

        return () => {
            ignore = true;
            clearInterval(preloadTimer);
            clearInterval(updateTimer);
        };
    }, [type]);

    return { data, loading, error };
}