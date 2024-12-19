export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=r82QcRvDlVHJFznTAXj8Q8nR9ZOD18wR&rating=g`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
    }));
    return gifs;
};
