import React, { useRef, useEffect, useState } from 'react';

import './App.css'
import Quadrado from './Components/Quadrado';
import Matrix from './Components/Matrix';
import Triangulo from './Components/Triangulo'
import Circulo from './Components/Circulo'

function App() {

  const canvasRef = useRef(null);

  const [change_forms, setChange_forms] = useState(0)

  const [range, setRange] = useState(150);
  const [MoveX, setMoveX] = useState(150);
  const [MoveY, setMoveY] = useState(150);
  const [Move, setMove] = useState(150);

  const [angulo, setAngulo] = useState(180);

  function DesenharQuadrado(x, y, width, height) {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

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
      (width + (MoveX - 150) + (Move - 150) + (range - 150) + (angulo - 180)),
      (y + (MoveY - 150) + (Move - 150) + (angulo - 180))
    );
    ctx.lineTo(
      (width + (MoveX - 150) + (Move - 150) + (range - 150) - (angulo - 180)),
      (height + (MoveY - 150) + (Move - 150) + (range - 150) + (angulo - 180))
    );
    ctx.lineTo(
      (x + (MoveX - 150) + (Move - 150) - (angulo - 180)),
      (height + (MoveY - 150) + (Move - 150) + (range - 150) - (angulo - 180))
    );
    ctx.fill();
  }
  function DesenharTriangulo(px1, py1, px2, py2, px3, py3) {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Rotacionar

    // Desenhar o quadrado
    ctx.fillStyle = '#1c1c1c';

    ctx.beginPath();

    ctx.moveTo(
      (px1 + (MoveX - 150) + (Move - 150) + (angulo - 180)),
      (py1 + (MoveY - 150) + (Move - 150) - (angulo - 180))
    );
    ctx.lineTo(
      (px2 + (MoveX - 150) + (Move - 150) + (range - 150) + (angulo - 180)),
      (py2 + (MoveY - 150) + (Move - 150) + (angulo - 180))
    );
    ctx.lineTo(
      (px3 + (MoveX - 150) + (Move - 150) + (range - 150) - (angulo - 180)),
      (py3 + (MoveY - 150) + (Move - 150) + (range - 150) + (angulo - 180))
    );
    ctx.fill();
  }
  function DesenharCirculo(x, y, raio) {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Rotacionar

    // Desenhar o quadrado
    ctx.fillStyle = '#1c1c1c';

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI);
    ctx.fill();

  }

  const forms = (
    [
      <Quadrado
        desenhar={DesenharQuadrado}
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
      />,
      <Triangulo
        desenhar={DesenharTriangulo}

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
      />,
      <Circulo
        desenhar={DesenharCirculo}

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
    ]
  )





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
  const PraEsquerda = () => {
    const sla = change_forms - 1
    setChange_forms(sla < 0 ? 2 : sla)

  }
  const PraDireita = () => {
    const sla = change_forms + 1
    setChange_forms(sla > 2 ? 0 : sla)
  }


  return (
    <section className='app'>

      <div className='canvas'>
        <canvas ref={canvasRef} width={750} height={700} style={{ border: '2px solid black' }} />
      </div>
      <div className='inputs'>
        <div className='change'>

          <div className='left'>
            <i class="fa-solid fa-arrow-left fa-2xl" onClick={PraEsquerda}></i>
          </div>

          <h1>
            {change_forms === 0 && 'Quadrado'}
            {change_forms === 1 && 'Triangulo'}
            {change_forms === 2 && 'Circulo'}
          </h1>

          <div className='right'>
            <i class="fa-solid fa-arrow-right fa-2xl" onClick={PraDireita}></i>
          </div>

        </div>
        <div className='container'>
          {forms[change_forms]}

          <div className='button'>
            <button onClick={limparTela}>limpar</button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default App
