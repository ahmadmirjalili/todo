import {
  delete_fetcher,
  get_fetcher,
  post_fetcher,
  put_fetcher,
} from "../config/fetchers";

export const getAllTasks = async (): Promise<Global.Task[]> => {
  return (await get_fetcher(`tasks`)).json();
};

export const createTask = async (params: Global.Task): Promise<any> => {
  return (
    await post_fetcher(`tasks`, {
      method: "POST",
      body: JSON.stringify(params),
    })
  ).json();
};

export const updateTask = async (
  id: Global.Task["id"],
  params: Global.Task
): Promise<any> => {
  return (
    await put_fetcher(`tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify(params),
    })
  ).json();
};

export const deleteTask = async (id: Global.Task["id"]): Promise<any> => {
  return await delete_fetcher(`tasks/${id}`);
};
