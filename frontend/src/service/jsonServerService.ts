export class JsonServerService {
  baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_JSON_SERVER_URL;
    if (!this.baseUrl) {
      throw new Error("VITE_JSON_SERVER_URL is not defined");
    }
  }

  execute = async (url: string, options: RequestInit) => {
    const { credentials, headers, ...rest } = options;
    return fetch(`${this.baseUrl}${url}`, {
      credentials,
      headers,
      ...rest,
    });
  };
}
