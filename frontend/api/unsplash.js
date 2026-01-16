// api/unsplash.js

const UNSPLASH_KEY = process.env.EXPO_PUBLIC_UNSPLASH_KEY;

export const fetchDestinations = async (
  query = "travel",
  page = 1,
  perPage = 20
) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        query
      )}&page=${page}&per_page=${perPage}`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }

    const data = await response.json();

    return data.results.map((item) => {
      const location =
        item.location?.country ||
        item.location?.city ||
        item.location?.name ||
        query;

      return {
        id: item.id,
        name:
          item.alt_description ||
          item.description ||
          location ||
          "Popular Destination",
        image: item.urls.small || item.urls.regular,
        location,
        photographer: item.user?.name || "",
        photographerUrl: item.user?.links?.html || "",
      };
    });
  } catch (error) {
    console.error("Unsplash API error:", error);
    return [];
  }
};
