import React, { useRef, useEffect, useState } from 'react';
import './Triangulo.css'

const Triangulo = ({ desenhar, setRange, range, setMoveX, MoveX, setMoveY, MoveY, setMove, Move, setAngulo, angulo }) => {

  const [Position1X, setPosition1X] = useState(20);
  const [Position1Y, setPosition1Y] = useState(20);

  const [Position2X, setPosition2X] = useState(40);
  const [Position2Y, setPosition2Y] = useState(20);

  const [Position3X, setPosition3X] = useState(30);
  const [Position3Y, setPosition3Y] = useState(50);

  useEffect(() => {
    desenhar(Position1X, Position1Y,Position2X, Position2Y, Position3X, Position3Y)
  }, [Position1X, Position1Y, Position2X, Position2Y, Position3X, Position3Y, range, MoveX, MoveY, Move, angulo]);

  return (
    <div className='selections'>

      <div className='triangulo'>

        <div>

          <div>
            <label htmlFor="">Position1 X:</label>
            <input type="number" placeholder='X' onChange={(e) => setPosition1X(parseInt(e.target.value))} />
          </div>
          <div>
            <label htmlFor="">position1 Y:</label>
            <input type="number" placeholder='Y' onChange={(e) => setPosition1Y(parseInt(e.target.value))} />
          </div>

        </div>

        <div>

          <div>
            <label htmlFor="">position2 X</label>
            <input type="number" placeholder='Width' onChange={(e) => setPosition2X(parseInt(e.target.value))} />
          </div>

          <div>
            <label htmlFor="">position2 Y</label>
            <input type="number" placeholder='Height' onChange={(e) => setPosition2Y(parseInt(e.target.value))} />
          </div>

        </div>

        <div>

          <div>
            <label htmlFor="">position3 X</label>
            <input type="number" placeholder='Width' onChange={(e) => setPosition3X(parseInt(e.target.value))} />
          </div>

          <div>
            <label htmlFor="">position3 Y</label>
            <input type="number" placeholder='Height' onChange={(e) => setPosition3Y(parseInt(e.target.value))} />
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

export default Triangulo