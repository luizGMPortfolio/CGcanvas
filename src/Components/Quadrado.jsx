
import './Quadrado.css'

const Quadrado = ({ setX, x,setY, y, setAltura, altura, setLargura, largura, setRange, range, setMoveX, MoveX, setMoveY, MoveY, setMove, Move, setAngulo, angulo}) => {

  return (
    <div className='quadrado'>

      <div className='positions'>

        <div>

          <div>
            <label htmlFor="">Position X:</label>
            <input type="number" placeholder='X'  onChange={(e) => setX(parseInt(e.target.value))}/>
          </div>

          <div>
            <label htmlFor="">position Y:</label>
            <input type="number" placeholder='Y' onChange={(e) => setY(parseInt(e.target.value))}/>
          </div>

        </div>

        <div>

          <div>
            <label htmlFor="">Width</label>
            <input type="number" placeholder='Width' onChange={(e) => setLargura(parseInt(e.target.value))}/>
          </div>

          <div>
            <label htmlFor="">Height</label>
            <input type="number" placeholder='Height' onChange={(e) => setAltura(parseInt(e.target.value))}/>
          </div>

        </div>

      </div>

      <div className='ranges'>

        <h2>Redimencionar</h2>
        <input type="range" className='range-input' min="0" max="300"  value ={range} onChange={(e) => setRange(parseInt(e.target.value))}/>

        <h2>Rotacionar</h2>
        <input type="range" className='range-input' min="0" max="360" value ={angulo} onChange={(e) => setAngulo(parseInt(e.target.value))}/>
        <div className='range-input-XY'>
          <div>
            <h2>Mover X</h2>
            <input type="range" className='range-input' min="0" max="300"  value ={MoveX} onChange={(e) => setMoveX(parseInt(e.target.value))}/>
          </div>
          <div>
            <h2>Mover Y</h2>
            <input type="range" className='range-input' min="0" max="300"  value ={MoveY} onChange={(e) => setMoveY(parseInt(e.target.value))}/>
          </div>

        </div>
        <h2>Mover XY</h2>
        <input type="range" className='range-input' min="0" max="300"  value ={Move} onChange={(e) => setMove(parseInt(e.target.value))}/>
      </div>

    </div>
  )
}

export default Quadrado