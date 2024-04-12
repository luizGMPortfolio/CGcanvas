import React, { useRef, useEffect, useState } from 'react';
import './Quadrado.css'

const Quadrado = ({desenhar, setRange, range, setMoveX, MoveX, setMoveY, MoveY, setMove, Move, setAngulo, angulo}) => {


  const [Position1X, setPosition1X] = useState(300);
  const [Position1Y, setPosition1Y] = useState(300);

  const [largura, setLargura] = useState(120);
  const [altura, setAltura] = useState(120);

  const [alterX, setAlterX] = useState(Position1X + (MoveX - 300) + (Move - 300));
  const [alterY, setAlterY] = useState(Position1Y + (MoveY - 300) + (Move - 300));
  const [alterW, setAlterW] = useState(largura + (range - 300));
  const [alterH, setAlterH] = useState(largura + (range - 300));


  useEffect(() => {
    setAlterX(Position1X + (MoveX - 300) + (Move - 300));
    setAlterY(Position1Y + (MoveY - 300) + (Move - 300));
    setAlterW(largura);
    setAlterH(altura);

    desenhar(alterX, alterY, alterW, alterH)
    
  }, [Position1X, Position1Y, largura, altura, range, MoveX, MoveY, Move, angulo]);



  return (
    <div className='selections'>

      <div className='quadrado'>

        <div>

          <div>
            <label htmlFor="">Position X:</label>
            <input type="number" value={alterX} onChange={(e) => setPosition1X(parseInt(e.target.value))} />
          </div>

          <div>
            <label htmlFor="">position Y:</label>
            <input type="number" value={alterY} onChange={(e) => setPosition1Y(parseInt(e.target.value))} />
          </div>

        </div>

        <div>

          <div>
            <label htmlFor="">Width</label>
            <input type="number" value={largura} onChange={(e) => setLargura(parseInt(e.target.value))} />
          </div>

          <div>
            <label htmlFor="">Height</label>
            <input type="number" value={altura} onChange={(e) => setAltura(parseInt(e.target.value))} />
          </div>

        </div>

      </div>

      <div className='ranges'>

        <h2>Redimencionar</h2>
        <input type="range" className='range-input' min="0" max="600" value={range} onChange={(e) => setRange(parseInt(e.target.value))} />

        <h2>Rotacionar</h2>
        <input type="range" className='range-input' min="0" max="360" value={angulo} onChange={(e) => setAngulo(parseInt(e.target.value))} />
        <div className='range-input-XY'>
          <div>
            <h2>Mover X</h2>
            <input type="range" className='range-input' min="0" max="600" value={MoveX} onChange={(e) => setMoveX(parseInt(e.target.value))} />
          </div>
          <div>
            <h2>Mover Y</h2>
            <input type="range" className='range-input' min="0" max="600" value={MoveY} onChange={(e) => setMoveY(parseInt(e.target.value))} />
          </div>

        </div>
        <h2>Mover XY</h2>
        <input type="range" className='range-input' min="0" max="600" value={Move} onChange={(e) => setMove(parseInt(e.target.value))} />
      </div>

    </div>
  )
}

export default Quadrado