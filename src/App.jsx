import React, { useRef, useEffect, useState } from 'react';

import './App.css'
import Quadrado from './Components/Quadrado';
import Matrix from './Components/Matrix';
import Triangulo from './Components/Triangulo'
import Circulo from './Components/Circulo'

function App() {


  const canvasRef = useRef(null);

  const [change, setChange] = useState()
  const [forms, setForms] = useState(
    [
      <Quadrado />,
      <Triangulo />,
      <Circulo />
    ]
  )

  const [x, setX] = useState(20);
  const [y, setY] = useState(20);
  const [largura, setLargura] = useState(100);
  const [altura, setAltura] = useState(100);
  const [range, setRange] = useState(150);
  const [MoveX, setMoveX] = useState(150);
  const [MoveY, setMoveY] = useState(150);
  const [Move, setMove] = useState(150);
  const [angulo, setAngulo] = useState(180);



  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const deltaX = largura / 2;
    const deltaY = altura / 2;
    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Rotacionar

    // Desenhar o quadrado
    ctx.fillStyle = '#1c1c1c';

    ctx.beginPath();

    ctx.moveTo(

      (x + (MoveX - 150) + (Move - 150) + (angulo - 180)),
      (y + (MoveY - 150) + (Move - 150) - (angulo - 180))
    );
    ctx.lineTo(
      (largura + (MoveX - 150) + (Move - 150) + (range - 150) + (angulo - 180)),
      (y + (MoveY - 150) + (Move - 150) + (angulo - 180))
    );
    ctx.lineTo(
      (largura + (MoveX - 150) + (Move - 150) + (range - 150) - (angulo - 180)),
      (altura + (MoveY - 150) + (Move - 150) + (range - 150) + (angulo - 180))
    );
    ctx.lineTo(
      (x + (MoveX - 150) + (Move - 150) - (angulo - 180)),
      (altura + (MoveY - 150) + (Move - 150) + (range - 150) - (angulo - 180))
    );
    ctx.fill();


  }, [x, y, altura, largura, range, MoveX, MoveY, Move, angulo]);


  const limparTela = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(largura, y);
    ctx.lineTo(largura, altura);
    ctx.lineTo(x, altura);
    ctx.fill();

  }


  return (
    <section className='app'>

      <div className='canvas'>
        <canvas ref={canvasRef} width={750} height={700} style={{ border: '2px solid black' }} />
      </div>
      <div className='inputs'>
        <div className='change'>

          <div className='left'>
            <i class="fa-solid fa-arrow-left fa-2xl"></i>
          </div>

          <h1>Quadrado</h1>

          <div className='right'>
            <i class="fa-solid fa-arrow-right fa-2xl"></i>
          </div>

        </div>
        <div className='container'>
          { }
          <Quadrado
            setX={setX}
            x={x}
            setY={setY}
            y={y}
            setAltura={setAltura}
            altura={altura}
            setLargura={setLargura}
            largura={largura}
            setRange={setRange}
            range={range}
            setMoveX={setMoveX}
            MoveX={MoveX}
            setMoveY={setMoveY}
            MoveY={MoveY}
            setMove={setMove}
            Move={Move}
            setAngulo={setAngulo}
            angulo={angulo}
          />
          <div className='button'>
            <button onClick={limparTela}>limpar</button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default App
