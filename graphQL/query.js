import ToDo from "../models/ToDoModel.js";

const resolvers = {
    Query: {
        ToDo: async () => {
            return await ToDo.find()
       }
    }
   };

export default resolvers;