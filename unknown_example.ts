async function fetchData(): Promise<unknown> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

async function processData() {
  const response = await fetchData();
  if (typeof response === 'object') {
    console.log(response);
  }
}

processData();
