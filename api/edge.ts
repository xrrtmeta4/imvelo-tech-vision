export const config = {
  runtime: 'edge',
};

let serverEntryPromise: Promise<any> | undefined;

async function getServerEntry() {
  if (!serverEntryPromise) {
    serverEntryPromise = import('@tanstack/react-start/server-entry').then(
      (m) => (m as { default?: any }).default ?? (m as any),
    );
  }
  return serverEntryPromise;
}

export default async function handler(request: Request) {
  try {
    const handlerModule = await getServerEntry();
    const response = await handlerModule.fetch(request, undefined, undefined);
    return response;
  } catch (error) {
    // Minimal branded error response
    console.error(error);
    return new Response('<h1>Internal Server Error</h1>', {
      status: 500,
      headers: { 'content-type': 'text/html; charset=utf-8' },
    });
  }
}
