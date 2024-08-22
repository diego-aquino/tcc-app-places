import filesystem from 'fs';

async function logRequest(request: Request, baseURL: string) {
  console.log('Requesting:\n');

  const content: Record<string, unknown> = {
    method: request.method,
    baseURL,
    path: request.url.replace(baseURL, ''),
  };

  const headersAsObject = Object.fromEntries(request.headers.entries());

  if (Object.keys(headersAsObject).length > 0) {
    content.headers = headersAsObject;
  }

  if (request.body !== null) {
    content.body = await request.clone().json();
  }

  console.log(content);
}

async function runExample(
  request: Request,
  baseURL: string,
  outputFilePath: string,
) {
  await logRequest(request, baseURL);

  const response = await fetch(request);

  if (!response.ok || response.body === null) {
    throw response;
  }

  const responseBody = await response.json();

  await filesystem.promises.writeFile(
    outputFilePath,
    JSON.stringify(responseBody, null, 2),
  );

  console.log(`\nJSON response saved to ./${outputFilePath}`);
}

const baseURL = 'https://places-googleapis-proxy-xkh80emjtn.vercel.app/current';

const searchParams = new URLSearchParams({
  query: 'restaurantes em Londres',
  type: 'restaurant',
  language: 'pt-BR',
  radius: '10000',
});

const request = new Request(`${baseURL}/textsearch/json?${searchParams}`, {
  method: 'GET',
});

const outputFilePath = 'example-text-search-current.json';

runExample(request, baseURL, outputFilePath).catch((error) => {
  console.error(error);
  process.exit(1);
});
