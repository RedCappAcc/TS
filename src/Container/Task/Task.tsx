import './Task.css'
const deleteImg = require('./img/delete.png')

function Task(){
    return(
        <div className='task'>
            <div className='task__content'>
                <div className='checkbox'>
                    <input type="checkbox" />
                </div>
                <span className='fake__ckeckbox'></span>
                <div className='task__test'>Hello world</div>
            </div>
            <div className='delete__task'>
                <img src={deleteImg} alt="" />
            </div>
        </div>
    )
}

export default Task