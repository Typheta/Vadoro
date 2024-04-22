const apiKey = 'aef0b8efc2b54d76965342b2aa662332'
const apiUrl = 'https://newsapi.org/v2/everything'
const pageSize = 3;

// Function to fetch news articles with a random page
async function fetchArticles() {
    const randomPage = Math.floor(Math.random() * 10) + 1; // Random page between 1 and 10
    const query = 'software engineering'; // search query
    const url = `${apiUrl}?q=${query}&pageSize=${pageSize}&page=${randomPage}&apiKey=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      // Map over articles and fetch images
      const articlesWithImages = await Promise.all(data.articles.map(async article => {
        const imageUrl = await fetchImage(article.urlToImage);
        return { ...article, imageUrl };
      }));
  
      // Return the articles data with images
      return { ...data, articles: articlesWithImages };
    } catch (error) {
      console.error('Error fetching articles:', error);
      return { articles: [] }; // Return an empty array if there's an error
    }
  }
  
  // Function to fetch image from URL
  async function fetchImage(url) {
    if (!url) return null;
  
    try {
      const response = await fetch(url);
      if (response.ok) {
        const blob = await response.blob();
        return URL.createObjectURL(blob);
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  }
  
  export default fetchArticles;