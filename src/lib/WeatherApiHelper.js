const weatherBase = "http://api.weatherapi.com/v1/"
const apiKey = import.meta.env.VITE_WEATHER_API_KEY

export const WeatherAPI = {
    current: (q) =>
        `${weatherBase}current.json?key=${apiKey}&q=${q}`,
    forecast: (q, days = 3) =>
        `${weatherBase}forecast.json?key=${apiKey}&q=${q}&days=${days}`


}

export const formatLocalTime = (localtime) => {
    const date = new Date(localtime.replace(" ", "T")); // convert to valid ISO
    return new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    }).format(date);
};

export const getUvClass = (uv) => {
    if (uv <= 2) return "uv-low";
    if (uv <= 5) return "uv-moderate";
    if (uv <= 7) return "uv-high";
    if (uv <= 10) return "uv-very-high";
    return "uv-extreme"; // 11+
}

export const getDayName = (offset) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const todayIndex = new Date().getDay()
  return days[(todayIndex + offset) % 7]
}


