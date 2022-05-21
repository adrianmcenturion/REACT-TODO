import Divider from '../others/Divider/Divider'
import './tasks.css'
import { useState } from 'react'
import { motion } from "framer-motion"

const Tasks = ({title, description, id, deleteTask, taskStatus}) => {

    const [isOn, setIsOn] = useState(false);


    const handleDoneButton = () => {
        if(isOn) {
            taskStatus = false
            setIsOn(!isOn)
        } else {
            taskStatus = true
            setIsOn(!isOn)
        }
    }

    const spring = {
        type: "spring",
        stiffness: 200,
        damping: 30
      };
    

    return (
        <div className="task-wrapper" data-isOn={isOn} >
            <motion.div className='tasks' data-isOn={isOn} layout transition={spring}>
                <div className="tasks-card">
                    <div className="tasks-container-inner" >
                        <div className="tasks-upperbar" >
                            <h3 className="tasks-upperbar-title" data-isOn={isOn}>{title}</h3>
                            <div className="tasks-upperbar-buttons">
                                {isOn === true ? 
                                <button onClick={handleDoneButton} type="button" className="" value={isOn}>Undone</button>
                                 : 
                                <button onClick={handleDoneButton} type="button" className="" value={isOn}>Done</button>}

                                <button onClick={deleteTask} value={id} type="button" className='deleteButton'>X</button>
                            </div>
                        </div>
                        <Divider />
                        <div className="tasks-description" data-isOn={isOn}>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Tasks