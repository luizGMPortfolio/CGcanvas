import React, { useRef, useEffect } from 'react';

const QuadradoRotativo = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const tamanho = 100; // Tamanho do quadrado
    const centroX = canvas.width / 2; // Coordenada x do centro do canvas
    const centroY = canvas.height / 2; // Coordenada y do centro do canvas
    const angulo = Math.PI / 4; // Ângulo de rotação em radianos

    // Definindo os pontos do quadrado
    const pontos = [
      { x: centroX - tamanho / 2, y: centroY - tamanho / 2 },
      { x: centroX + tamanho / 2, y: centroY - tamanho / 2 },
      { x: centroX + tamanho / 2, y: centroY + tamanho / 2 },
      { x: centroX - tamanho / 2, y: centroY + tamanho / 2 }
    ];

    // Função para rotacionar um ponto em torno de um ponto central
    const rotacionarPonto = (ponto, centro, angulo) => {
      const deltaX = ponto.x - centro.x;
      const deltaY = ponto.y - centro.y;
      const newX = deltaX * Math.cos(angulo) - deltaY * Math.sin(angulo) + centro.x;
      const newY = deltaX * Math.sin(angulo) + deltaY * Math.cos(angulo) + centro.y;
      return { x: newX, y: newY };
    };

    // Função para desenhar o quadrado
    const desenharQuadrado = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(pontos[0].x, pontos[0].y);
      pontos.forEach(ponto => {
        ctx.lineTo(ponto.x, ponto.y);
      });
      ctx.closePath();
      ctx.stroke();
    };

    // Rotacionando os pontos do quadrado
    const pontosRotacionados = pontos.map(ponto =>
      rotacionarPonto(ponto, { x: centroX, y: centroY }, angulo)
    );

    // Desenhando o quadrado rotacionado
    desenharQuadrado();

  }, []);

  return <canvas ref={canvasRef} width={400} height={400} />;
};

export default QuadradoRotativo;