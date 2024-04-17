import React, { useEffect, useState } from 'react';
import './Triangulo.css'

const Triangulo = ({ desenhar, setRange, range, setMoveX, MoveX, setMoveY, MoveY, setMove, Move, setAngulo, angulo }) => {

  const [Position1X, setPosition1X] = useState(300);
  const [Position1Y, setPosition1Y] = useState(200);
  const [alterX1, setAlterX1] = useState(Position1X);
  const [alterY1, setAlterY1] = useState(Position1Y);

  const [Position2X, setPosition2X] = useState(450);
  const [Position2Y, setPosition2Y] = useState(500);
  const [alterX2, setAlterX2] = useState(Position2X);
  const [alterY2, setAlterY2] = useState(Position2Y);

  const [Position3X, setPosition3X] = useState(250);
  const [Position3Y, setPosition3Y] = useState(500);
  const [alterX3, setAlterX3] = useState(Position3X);
  const [alterY3, setAlterY3] = useState(Position3Y);

  useEffect(() => {
    setAlterX1(Position1X + (MoveX - 300) + (Move - 300));
    setAlterY1(Position1Y + (MoveY - 300) + (Move - 300));
    setAlterX2(Position2X + (MoveX - 300) + (Move - 300));
    setAlterY2(Position2Y + (MoveY - 300) + (Move - 300));
    setAlterX3(Position3X + (MoveX - 300) + (Move - 300));
    setAlterY3(Position3Y + (MoveY - 300) + (Move - 300));

    desenhar(alterX1, alterY1,alterX2, alterY2, alterX3, alterY3)
  }, [Position1X, Position1Y, Position2X, Position2Y, Position3X, Position3Y, range, MoveX, MoveY, Move, angulo]);

  return (
    <div className='selections'>

      <div className='triangulo'>

        <div>

          <div>
            <label htmlFor="">Position1 X:</label>
            <input type="number" placeholder='X1'  onChange={(e) => setPosition1X(parseInt(e.target.value))} />
          </div>
          <div>
            <label htmlFor="">position1 Y:</label>
            <input type="number" placeholder='Y1'  onChange={(e) => setPosition1Y(parseInt(e.target.value))} />
          </div>

        </div>

        <div>

          <div>
            <label htmlFor="">position2 X</label>
            <input type="number" placeholder='X2'onChange={(e) => setPosition2X(parseInt(e.target.value))} />
          </div>

          <div>
            <label htmlFor="">position2 Y</label>
            <input type="number" placeholder='Y2'  onChange={(e) => setPosition2Y(parseInt(e.target.value))} />
          </div>

        </div>

        <div>

          <div>
            <label htmlFor="">position3 X</label>
            <input type="number" placeholder='X3' onChange={(e) => setPosition3X(parseInt(e.target.value))} />
          </div>

          <div>
            <label htmlFor="">position3 Y</label>
            <input type="number" placeholder='Y3' onChange={(e) => setPosition3Y(parseInt(e.target.value))} />
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

export default Triangulo