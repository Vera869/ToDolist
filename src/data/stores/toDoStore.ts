import { create } from 'zustand'

interface Task{
   id: string;
   title: string;
   description: string;
}

interface ToDoStore{
   tasks: [];
   createTask: () => void;
   updateTask: (id: string, title: string, description: string) => void;
   deleteTask: (id: string) => void;
}

export const useToDoStore = create<ToDoStore>((set, get) => ({
   tasks: [
      // {
      //    id: '01',
      //    title: 'First task',
      //    description: 'I create a new task',
      // },
   ],
   createTask: (title:string, description: string) => {
      const { tasks } = get();
      const newId = () => Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
      const newTask = {
         id: newId,
         title, 
         description
      }
      set({
         tasks: [newTask].concat(tasks)
      })
   },
   updateTask: (id: string, title: string, description: string) => {
      const { tasks } = get();
      set({
         tasks: tasks.map((task) => ({
            ...tasks,
            title: task.id === id ? title: task.title,
            description: task.id === id ? description: task.description,
         }))
      })
   },
   deleteTask: (id: string) => {
      const { tasks } = get();
      set({
         tasks: tasks.filter((task) => task.id !== id)
      })
   },
}))