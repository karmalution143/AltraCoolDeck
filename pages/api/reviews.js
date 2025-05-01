// /pages/api/reviews.js
export default async function handler(req, res) {
  const apiKey = 'AIzaSyC4h9NdXNVhIUwtzHLd6bKqvHBX7H_fjmM';
  const placeId = 'ChIJ_____z82KocRxCxD8hLmRc8';

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;


  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log('Google API response:', data);

    // Filter only 4-star and above
    const allReviews = data.result?.reviews || [];

    // Filter out reviews with less than 4 stars
    const filteredReviews = allReviews.filter((r) => r.rating >= 4);

    // Send back an array (important!)
    res.status(200).json(filteredReviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json([]);
  }
}
