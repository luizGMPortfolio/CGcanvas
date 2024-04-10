import React, { useRef, useEffect, useState } from 'react';
import './circulo.css'


const Circulo = ({ desenhar, setRange, range, setMoveX, MoveX, setMoveY, MoveY, setMove, Move, setAngulo, angulo }) => {

  const [Position1X, setPosition1X] = useState(20);
  const [Position1Y, setPosition1Y] = useState(20);
  const [raio, setRaio] = useState(100);


  useEffect(() => {
    desenhar(Position1X, Position1Y, raio)
  }, [Position1X, Position1Y, raio, range, MoveX, MoveY, Move, angulo]);

  return (
    <div className='selections'>

      <div className='circulo'>

        <div>

          <div>
            <label htmlFor="">CentroX:</label>
            <input type="number" placeholder='X' onChange={(e) => setPosition1X(parseInt(e.target.value))} />
          </div>
          <div>
            <label htmlFor="">CentroY:</label>
            <input type="number" placeholder='X' onChange={(e) => setPosition1Y(parseInt(e.target.value))} />
          </div>

        </div>
        <div>
          <div>
            <label htmlFor="">Raio:</label>
            <input type="number" placeholder='Raio' onChange={(e) => setRaio(parseInt(e.target.value))} />
          </div>
        </div>
      </div>



      <div className='ranges'>

        <h2>Redimencionar</h2>
        <input type="range" className='range-input' min="0" max="300" value={range} onChange={(e) => setRange(parseInt(e.target.value))} />

        <h2>Rotacionar</h2>
        <input type="range" className='range-input' min="0" max="360" value={angulo} onChange={(e) => setAngulo(parseInt(e.target.value))} />
        <div className='range-input-XY'>
          <div>
            <h2>Mover X</h2>
            <input type="range" className='range-input' min="0" max="300" value={MoveX} onChange={(e) => setMoveX(parseInt(e.target.value))} />
          </div>
          <div>
            <h2>Mover Y</h2>
            <input type="range" className='range-input' min="0" max="300" value={MoveY} onChange={(e) => setMoveY(parseInt(e.target.value))} />
          </div>

        </div>
        <h2>Mover XY</h2>
        <input type="range" className='range-input' min="0" max="300" value={Move} onChange={(e) => setMove(parseInt(e.target.value))} />
      </div>

    </div>
  )
}

export default Circulo