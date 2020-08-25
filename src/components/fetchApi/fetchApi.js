const ApiKey = '17360273-855f6091d1678ed63207bb8c2';

const fetchApi = (searchquery, page = 1) => {
  const link = `https://pixabay.com/api/?q=${searchquery}&page=${page}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(link).then(res => res.json());
};
export default fetchApi;
