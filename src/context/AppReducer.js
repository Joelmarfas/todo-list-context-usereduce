
export default function appReducer(state, action) {
  console.log(state, action)

  switch (action.type) {
    case "ADD_TASK":

      return {

      tasks: [...state.tasks, action.payload]
    }
     case "DELETE_TASK":
       console.log(state)
       console.log(action.payload)
       return {
         tasks: state.tasks.filter((task) => task.id !== action.payload),
       };
      case "UPDATE_TASK":
        // console.log(action.payload.id)
        const updatedTask = action.playload;

        const updatedTasks = state.tasks.map((task) => {
          if (task.id === updatedTask.id) {
            task.title = updatedTask.title
            task.description = updatedTask.description

          }
            return task;
        });


       return {
         tasks: updatedTasks,
       };

       default:
         break;
}
}