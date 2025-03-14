import { ICreateTask } from "../components/sidebar/taskArea/interfaces/ICreateTask";

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
function returnRequest(
  method: Method,
  data: unknown
): RequestInit {
  const request: RequestInit = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (method !== 'GET') {
    request.body = JSON.stringify(data);
  }

  return request;
}

export async function sendApiRequest<T>(
  url: string,
  method: Method,
  data: ICreateTask
): Promise<T> {
  const response = await fetch(
    url,
    returnRequest(method, data),
  );

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }

  return (await response.json()) as Promise<T>;
}
