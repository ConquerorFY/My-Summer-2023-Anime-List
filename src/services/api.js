export const getAnimeList = async (query) => {
    console.log(query);
    const page = query.queryKey[1];
    const response = await fetch(`https://api.jikan.moe/v4/seasons/2023/summer?page=${page}`);
    return response.json();
}