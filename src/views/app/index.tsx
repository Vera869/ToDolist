import React, { useEffect } from 'react'
import S from './index.module.scss'
import { useToDoStore } from '../../data/stores/toDoStore'

export const App: React.FC = () => {
   console.log({ useToDoStore });
   const [
      tasks,
      createTask,
      updateTask,
      deleteTask,
   ] = useToDoStore(state => [
      state.tasks,
      state.createTask,
      state.updateTask,
      state.deleteTask,
   ])
   // useEffect(()=> createTask('A new Task', 'Create new task'),[])
   // console.log(tasks);
   return(
      <article className={S.article}>
         <section className={S.articleSection}>
            <h1 className={S.articleSectionHeader}>My todo list</h1>
            <form className={S.articleSectionForm}>
               <input className={S.articleSectionFormInput} type='text'/>
               <input className={S.articleSectionFormInput} type='text'/>
            </form>
         </section>
         <section className={S.articleSectionTodos}>
            <input className={S.sectionTodosCheckbox} type='checkbox'/>
            <div className={S.sectionTodos}></div>
         todos here
         </section>
      </article>
     
      
   )
}