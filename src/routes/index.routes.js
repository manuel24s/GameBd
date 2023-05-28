import { Router } from "express"

import {renderTasks, createTask, renderTasksEdit, editTask, deleteTask, doneTask} from "../controllers/tasks.controllers"

const router = Router()

router.get("/", renderTasks)

router.post("/tasks/add", createTask)

router.get("/tasks/:id/done", doneTask)

router.get("/tasks/:id/edit", renderTasksEdit)

router.post("/tasks/:id/edit", editTask)

router.get("/tasks/:id/borrar", deleteTask)



export default router;