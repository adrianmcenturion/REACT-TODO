import './home.css'
import DateTime from '../../components/Date/DateTime'
import Tasks from '../../components/Tasks/Tasks'
import Divider from '../../components/others/Divider/Divider'
import { v4 as uuid } from 'uuid';
import { useState } from 'react'

const Home = () => {

    const [titleValue, setTitleValue] = useState('')
    const [titleState, setTitleState] = useState(true)
    const [descriptionValue, setDescriptionValue] = useState('')
    const [tasksList, setTasksList] = useState([])
    const unique_id = uuid();
    let taskObj = {
        title: '',
        description: '',
        id: null,
        taskDone: false,
    }

    const handleTitleChange = (e) => {
        setTitleValue(e.target.value)
        setTitleState(true)
    }

    const handleDescriptionChange = (e) => {
        setDescriptionValue(e.target.value)
    }

    

    const addTask = () => {
        if(!titleValue){
            console.log('tiene que tener un titulo')
            setTitleState(false)
        }else {
            taskObj.title = titleValue
            taskObj.description = descriptionValue
            taskObj.id = unique_id
            taskObj.taskDone = false
            setTasksList(old => [...old, taskObj])
            setTitleValue('')

        }
    }

    const removeTask = (e) => {
        let id = e.target.value
        let filtered = tasksList.filter(e => id !== e.id)
        setTasksList(filtered)
    }


    return (
        <div className="container">
            <div className="wrapper">
                <h1>React To-Do List</h1>
                <div className="date-and-links">
                    <DateTime className='datetime' />
                    <ul>
                        <li><a href="https://www.linkedin.com/in/adrian-centurion/" target="_blank" rel="noreferrer"><img className="icons github" alt='Github'  src={require("../../assets/svg/linkedin-brands.svg").default}></img></a></li>
                        <li><a href="https://github.com/adrianmcenturion/REACT-TODO" target="_blank" rel="noreferrer"><img className="icons github" alt='LinkedIn' src={require("../../assets/svg/github-brands.svg").default}></img></a></li>
                    </ul>
                </div>
                <div className="bar">
                    <div className="bar-inputs">
                        <label className="inp" htmlFor="inp">
                            <input placeholder="" id="inp" className="input-title" onChange={handleTitleChange} type="text"  maxLength={50} value={titleValue} />
                            <span className="label">Title</span>
                            <span className="focus-bg"></span>
                            {titleState ? null : <p>Title is needed.</p>}
                        </label>
                        <label className="inp" htmlFor="inp">
                            <input placeholder="" id="inp" onChange={handleDescriptionChange} type="text" maxLength={150} value={descriptionValue} />
                            <span className="label">Description</span>
                            <span className="focus-bg"></span>
                        </label>
                        <button className='addButton' onClick={addTask} type="button">Add</button>
                    </div>
                </div>
                <Divider />
                <h2>List</h2>
                <div className="titles">
                    <h3>To Do</h3>
                    <h3>Done</h3>
                </div>
                <Divider />
                <div className="tasks-container" >
                    {tasksList.length > 0 ? tasksList.map((task) => {
                        return <Tasks key={task.id} title={task.title} description={task.description} id={task.id} deleteTask={removeTask} taskStatus={task.taskDone}/> 
                    }) : null}
                </div>
            </div>
        </div>
    )


}

export default Home