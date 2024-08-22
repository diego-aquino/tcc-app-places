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
  outputFile: string,
) {
  await logRequest(request, baseURL);

  const response = await fetch(request);

  if (!response.ok || response.body === null) {
    throw response;
  }

  const responseBody = await response.json();

  await filesystem.promises.writeFile(
    outputFile,
    JSON.stringify(responseBody, null, 2),
  );

  console.log(`\nJSON response saved to ./${outputFile}`);
}

const baseURL = 'https://places-googleapis-proxy-xkh80emjtn.vercel.app/new';

const request = new Request(`${baseURL}/places:autocomplete`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    input: 'pizza em l',
    includeQueryPredictions: true,
    languageCode: 'pt-BR',
  }),
});

const outputFilePath = 'example-autocomplete-new.json';

runExample(request, baseURL, outputFilePath).catch((error) => {
  console.error(error);
  process.exit(1);
});
