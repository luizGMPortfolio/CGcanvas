import React, { useRef, useEffect, useState, lazy } from 'react';

import './App.css'
import Quadrado from './Components/Quadrado';
import Triangulo from './Components/Triangulo'
import Circulo from './Components/Circulo'

function App() {

  const canvasRef = useRef(null);

  const [change_forms, setChange_forms] = useState(0)

  const [range, setRange] = useState(300);
  const [MoveX, setMoveX] = useState(300);
  const [MoveY, setMoveY] = useState(300);
  const [Move, setMove] = useState(300);

  const [angulo, setAngulo] = useState(180);

  function DesenharQuadrado(x, y, width, height) {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');



    const centerX = width / 2 + x;
    const centerY = height / 2 + y;

    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenhar o quadrado
    ctx.fillStyle = '#1c1c1c';

    ctx.beginPath();

    ctx.moveTo(
      centerX + ((x - centerX) * ((range - 300) / 100 + 1)) * Math.cos(angulo * (Math.PI / 180)) - ((y - centerY) * ((range - 300) / 100 + 1)) * Math.sin(angulo * (Math.PI / 180)),
      centerY + ((x - centerX) * ((range - 300) / 100 + 1)) * Math.sin(angulo * (Math.PI / 180)) + ((y - centerY) * ((range - 300) / 100 + 1)) * Math.cos(angulo * (Math.PI / 180))
    );
    ctx.lineTo(
      centerX + ((x + width - centerX) * ((range - 300) / 100 + 1)) * Math.cos(angulo * (Math.PI / 180)) - ((y - centerY) * ((range - 300) / 100 + 1)) * Math.sin(angulo * (Math.PI / 180)),
      centerY + ((x + width - centerX) * ((range - 300) / 100 + 1)) * Math.sin(angulo * (Math.PI / 180)) + ((y - centerY) * ((range - 300) / 100 + 1)) * Math.cos(angulo * (Math.PI / 180))
    );
    ctx.lineTo(
      centerX + ((x + width - centerX) * ((range - 300) / 100 + 1)) * Math.cos(angulo * (Math.PI / 180)) - ((y + height - centerY) * ((range - 300) / 100 + 1)) * Math.sin(angulo * (Math.PI / 180)),
      centerY + ((x + width - centerX) * ((range - 300) / 100 + 1)) * Math.sin(angulo * (Math.PI / 180)) + ((y + height - centerY) * ((range - 300) / 100 + 1)) * Math.cos(angulo * (Math.PI / 180))
    );
    ctx.lineTo(
      centerX + ((x - centerX) * ((range - 300) / 100 + 1)) * Math.cos(angulo * (Math.PI / 180)) - ((y + height - centerY) * ((range - 300) / 100 + 1)) * Math.sin(angulo * (Math.PI / 180)),
      centerY + ((x - centerX) * ((range - 300) / 100 + 1)) * Math.sin(angulo * (Math.PI / 180)) + ((y + height - centerY) * ((range - 300) / 100 + 1)) * Math.cos(angulo * (Math.PI / 180))
    );
    ctx.fill();

    ctx.restore();
  }
  function DesenharTriangulo(px1, py1, px2, py2, px3, py3) {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const centerX = (px1 + px2 + px3) / 3
    const centerY = (py1 + py2 + py3) / 3

    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Rotacionar

    // Desenhar o quadrado
    ctx.fillStyle = '#1c1c1c';

    ctx.beginPath();

    ctx.moveTo(
      centerX + ((px1 - centerX) * ((range - 300) / 100 + 1)) * Math.cos(angulo * (Math.PI / 180)) - ((py1 - centerY) * ((range - 300) / 100 + 1)) * Math.sin(angulo * (Math.PI / 180)),
      centerY + ((px1 - centerX) * ((range - 300) / 100 + 1)) * Math.sin(angulo * (Math.PI / 180)) + ((py1 - centerY) * ((range - 300) / 100 + 1)) * Math.cos(angulo * (Math.PI / 180))
    );
    ctx.lineTo(
      centerX + ((px2 - centerX) * ((range - 300) / 100 + 1)) * Math.cos(angulo * (Math.PI / 180)) - ((py2 - centerY) * ((range - 300) / 100 + 1)) * Math.sin(angulo * (Math.PI / 180)),
      centerY + ((px2 - centerX) * ((range - 300) / 100 + 1)) * Math.sin(angulo * (Math.PI / 180)) + ((py2 - centerY) * ((range - 300) / 100 + 1)) * Math.cos(angulo * (Math.PI / 180))
    );
    ctx.lineTo(
      centerX + ((px3 - centerX) * ((range - 300) / 100 + 1)) * Math.cos(angulo * (Math.PI / 180)) - ((py3 - centerY) * ((range - 300) / 100 + 1)) * Math.sin(angulo * (Math.PI / 180)),
      centerY + ((px3 - centerX) * ((range - 300) / 100 + 1)) * Math.sin(angulo * (Math.PI / 180)) + ((py3 - centerY) * ((range - 300) / 100 + 1)) * Math.cos(angulo * (Math.PI / 180))
    );
    ctx.fill();

    ctx.restore();
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
    ctx.arc(
      x + (MoveX - 300) + (Move - 300),
      y + (MoveY - 300) + (Move - 300),
      raio + (range -300), 0, 2 * Math.PI);
    ctx.fill();

    ctx.restore();
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

    setMove(300);
    setMoveX(300);
    setMoveY(300);
    setRange(300);
    setAngulo(180);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

  }
  const PraEsquerda = () => {
    const sla = change_forms - 1
    setChange_forms(sla < 0 ? 2 : sla)
    limparTela();

  }
  const PraDireita = () => {
    const sla = change_forms + 1
    setChange_forms(sla > 2 ? 0 : sla)
    limparTela();
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
