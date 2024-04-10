import React, { useRef, useEffect, useState } from 'react';
import './Quadrado.css'

const Quadrado = ({desenhar, setRange, range, setMoveX, MoveX, setMoveY, MoveY, setMove, Move, setAngulo, angulo}) => {


  const [Position1X, setPosition1X] = useState(20);
  const [Position1Y, setPosition1Y] = useState(20);

  const [largura, setLargura] = useState(100);
  const [altura, setAltura] = useState(100);


  useEffect(() => {
    desenhar(Position1X, Position1Y, largura, altura)
  }, [Position1X, Position1Y, largura, altura, range, MoveX, MoveY, Move, angulo]);

  return (
    <div className='selections'>

      <div className='quadrado'>

        <div>

          <div>
            <label htmlFor="">Position X:</label>
            <input type="number" placeholder={Position1X} onChange={(e) => setPosition1X(parseInt(e.target.value))} />
          </div>

          <div>
            <label htmlFor="">position Y:</label>
            <input type="number" placeholder={Position1Y} onChange={(e) => setPosition1Y(parseInt(e.target.value))} />
          </div>

        </div>

        <div>

          <div>
            <label htmlFor="">Width</label>
            <input type="number" placeholder={largura} onChange={(e) => setLargura(parseInt(e.target.value))} />
          </div>

          <div>
            <label htmlFor="">Height</label>
            <input type="number" placeholder={altura} onChange={(e) => setAltura(parseInt(e.target.value))} />
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

export default Quadrado