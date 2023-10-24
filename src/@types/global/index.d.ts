declare module "*.module.css";
declare module "*.css";

namespace Global {
  interface Task {
    id?: number;
    title: string;
    description: string;
    completed: boolean;
  }
}
