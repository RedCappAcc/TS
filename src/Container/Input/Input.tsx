import './input.css'
const arrowImg = require('./img/arrow.png')

function Input(){
    return(
        <div className="inputSearch">
            <input type="text" placeholder='Введите задачу...' />
            <button><img src={arrowImg} alt="" /></button>
        </div>
    )
}

export default Input