import Task from  "../models/task"

export const renderTasks = async (req, res)=>{
    const tasks = await Task.find().lean()
    res.render("index", {tasks: tasks})
}

export const createTask = async (req, res)=>
{
    try{
    const task = new Task(req.body)

    console.log("Task saved: ", task)

    await task.save()

    res.redirect("/")
    
    }catch (error) {
    console.error("Error saving task:", error);
    res.status(500).send("Error saving task");
  }
}

export const renderTasksEdit = async (req,res)=>
{
    try{
        const task = await Task.findById(req.params.id).lean()
    
        res.render("edit", { task })
    }catch(error){
        console.log(error.message)
    }
    
}

export const editTask = async  (req,res)=>
{
    const { id } = req.params
    await Task.findByIdAndUpdate(id, req.body)
    res.redirect("/")
    
}

export const deleteTask = async (req, res)=>{
    const { id } = req.params
    await Task.findByIdAndDelete(id)
    res.redirect("/")
}

export const doneTask = async (req, res)=>{
    const { id } = req.params
    const task = await Task.findById(id)
    console.log(task)
    task.done = !task.done
    await task.save()
    res.redirect("/")
}