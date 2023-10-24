import { fetchConfigVariable } from "./variable";

export const get_fetcher = (path: string, config?: RequestInit) =>
  fetch(
    `${fetchConfigVariable.url}${fetchConfigVariable.prefix}${path}`,
    config
  );

export const post_fetcher = (path: string, config?: RequestInit) =>
  fetch(`${fetchConfigVariable.url}${fetchConfigVariable.prefix}${path}`, {
    method: "POST",
    headers: fetchConfigVariable.headers,
    ...config,
  });

export const put_fetcher = (path: string, config?: RequestInit) =>
  fetch(`${fetchConfigVariable.url}${fetchConfigVariable.prefix}${path}`, {
    method: "PUT",
    headers: fetchConfigVariable.headers,
    ...config,
  });

export const delete_fetcher = (path: string, config?: RequestInit) =>
  fetch(`${fetchConfigVariable.url}${fetchConfigVariable.prefix}${path}`, {
    method: "DELETE",
    ...config,
  });
