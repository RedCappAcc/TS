import './Buttons.css'
const upImg = require('./img/up.png')
const downImg = require('./img/down.png')


function Buttons(){
    return(
        <div className="buttons">
            <div className='buttons__container'>
                <div className="uparrow"><img src={upImg} alt="" /></div>
                <div className="downarrow"><img src={downImg} alt="" /></div>
            </div>
        </div>
    )
}

export default Buttons