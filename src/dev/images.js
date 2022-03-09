export function getImages(query) {

    const ApiKey = 'OhxDgV1vkR8_Bg9mwpqwl5xMdZ7GGh8aObjGbzylrTo';
    const endPoint = 'https://api.unsplash.com/search/photos';

    fetch(endPoint + '?query=' + query + '&client_id=' + ApiKey)
        .then(response => response.json())
        .then(data => {
            console.log(data.results[1].urls.thumb)
            const result = data.results[1].urls.thumb; 
            return result
        })
}