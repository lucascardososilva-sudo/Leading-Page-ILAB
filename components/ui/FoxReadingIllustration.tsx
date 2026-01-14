import React from 'react';

export const FoxReadingIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      {/* 
        Ilustração vetorial estática de alta fidelidade.
        Recriação detalhada da raposa na poltrona Chesterfield com cabos.
      */}
      <svg
        viewBox="0 0 800 800"
        className="w-full h-full max-w-[600px] drop-shadow-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Textura de Couro (Ruído Fractal) */}
          <filter id="leatherNoise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0" in="noise" result="coloredNoise" />
            <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" />
            <feBlend mode="multiply" in="composite" in2="SourceGraphic" />
          </filter>

          {/* Textura de Pelo (Deslocamento) */}
          <filter id="furFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>

          {/* Sombra Projetada */}
          <filter id="dropShadow">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000" floodOpacity="0.3" />
          </filter>
          
          {/* GRADIENTES */}
          <linearGradient id="chairDark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3E2723" />
            <stop offset="50%" stopColor="#2D1B18" />
            <stop offset="100%" stopColor="#1A0F0D" />
          </linearGradient>
          
          <linearGradient id="chairLight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5D4037" />
            <stop offset="100%" stopColor="#3E2723" />
          </linearGradient>

          <linearGradient id="foxFur" x1="0.3" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#E65100" /> {/* Laranja Vivo */}
            <stop offset="50%" stopColor="#D84315" /> {/* Laranja Médio */}
            <stop offset="100%" stopColor="#BF360C" /> {/* Laranja Escuro */}
          </linearGradient>

          <linearGradient id="foxWhite" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFECB3" />
          </linearGradient>
        </defs>

        {/* ==================== 1. POLTRONA CHESTERFIELD ==================== */}
        <g id="armchair" filter="url(#leatherNoise)">
          {/* Encosto Fundo */}
          <path d="M200 650 L200 220 C200 120, 600 120, 600 220 L600 650" fill="url(#chairDark)" />
          
          {/* Detalhes Capitonê (Botões e dobras) */}
          <g fill="#1A0F0D" opacity="0.5">
             <circle cx="300" cy="220" r="6" />
             <path d="M300 220 L350 270" stroke="#1A0F0D" strokeWidth="2" opacity="0.3" />
             <circle cx="400" cy="190" r="6" />
             <circle cx="500" cy="220" r="6" />
             <path d="M500 220 L450 270" stroke="#1A0F0D" strokeWidth="2" opacity="0.3" />
             
             <circle cx="350" cy="270" r="6" />
             <circle cx="450" cy="270" r="6" />
             
             <circle cx="300" cy="320" r="6" />
             <circle cx="400" cy="350" r="6" />
             <circle cx="500" cy="320" r="6" />
          </g>

          {/* Braços Enrolados */}
          {/* Esquerdo */}
          <path d="M180 700 L180 400 C100 400, 100 550, 180 700" fill="url(#chairDark)" />
          <path d="M180 400 C150 400, 130 420, 130 480 C130 530, 180 540, 180 540" fill="none" stroke="#2D1B18" strokeWidth="3" opacity="0.6" />
          {/* Direito */}
          <path d="M620 700 L620 400 C700 400, 700 550, 620 700" fill="url(#chairDark)" />
          <path d="M620 400 C650 400, 670 420, 670 480 C670 530, 620 540, 620 540" fill="none" stroke="#2D1B18" strokeWidth="3" opacity="0.6" />
          
          {/* Assento (Almofada) */}
          <path d="M220 600 L580 600 L580 700 L220 700 Z" fill="url(#chairLight)" />
          <path d="M220 600 L580 600" stroke="#3E2723" strokeWidth="2" />
        </g>

        {/* ==================== 2. RAPOSA (Estática, Pose Cruzada) ==================== */}
        <g id="fox-body" filter="url(#dropShadow)">
           {/* Cauda (Atrás à direita) */}
           <path 
             d="M580 520 C640 520, 680 420, 630 380 C620 370, 610 370, 600 380" 
             fill="url(#foxFur)" 
             filter="url(#furFilter)"
           />
           <path d="M630 380 C620 370, 610 370, 600 380" fill="#FFF" />

           {/* Pernas Cruzadas */}
           {/* Perna de Baixo (Direita anatômica) */}
           <path d="M300 580 Q400 600 500 580" fill="none" stroke="url(#foxFur)" strokeWidth="45" strokeLinecap="round" />
           {/* Perna de Cima (Esquerda anatômica cruzando) */}
           <path d="M300 560 Q350 480 520 560" fill="none" stroke="url(#foxFur)" strokeWidth="45" strokeLinecap="round" />
           {/* Pata Escura (Pé) */}
           <ellipse cx="530" cy="565" rx="22" ry="14" fill="#151515" transform="rotate(25 530 565)" />

           {/* Tronco */}
           <path d="M320 580 L340 380 L460 380 L480 580 Z" fill="url(#foxFur)" filter="url(#furFilter)" />
           {/* Peito Branco */}
           <path d="M360 380 C360 380, 400 500, 440 380" fill="url(#foxWhite)" filter="url(#furFilter)" />

           {/* Braço Direito (Mão no queixo) */}
           <path d="M480 480 Q520 460 500 400 L480 360" fill="none" stroke="url(#foxFur)" strokeWidth="30" strokeLinecap="round" />
           {/* Mão/Luva Preta */}
           <circle cx="470" cy="360" r="18" fill="#151515" />

           {/* Braço Esquerdo (Segurando livro) */}
           <path d="M320 480 Q280 460 300 530" fill="none" stroke="url(#foxFur)" strokeWidth="30" strokeLinecap="round" />
           <circle cx="300" cy="530" r="16" fill="#151515" />
        </g>

        {/* ==================== 3. CABEÇA (Detalhada) ==================== */}
        <g id="head" transform="translate(400, 300)">
           {/* Orelhas */}
           <path d="M-55 -80 L-85 -150 L-10 -110 Z" fill="#BF360C" />
           <path d="M-75 -130 L-25 -115 L-60 -90 Z" fill="#151515" /> {/* Ponta Preta */}
           <path d="M55 -80 L85 -150 L10 -110 Z" fill="#BF360C" />
           <path d="M75 -130 L25 -115 L60 -90 Z" fill="#151515" /> {/* Ponta Preta */}

           {/* Base da Cabeça */}
           <path 
             d="M-65 -40 C-85 20, -60 70, 0 90 C60 70, 85 20, 65 -40 C55 -80, -55 -80, -65 -40" 
             fill="url(#foxFur)" 
           />
           
           {/* Máscara Branca */}
           <path 
             d="M-60 -20 C-40 0, -20 60, 0 75 C20 60, 40 0, 60 -20 C45 -50, -45 -50, -60 -20" 
             fill="url(#foxWhite)" 
           />
           
           {/* Nariz */}
           <path d="M-10 70 Q0 80 10 70 L5 60 L-5 60 Z" fill="#151515" />
           <line x1="0" y1="80" x2="0" y2="85" stroke="#151515" strokeWidth="2" />

           {/* Olhos (Expressão focada/inteligente) */}
           <g transform="translate(0, -10)">
              {/* Esq */}
              <path d="M-40 0 Q-25 -10 -10 0 Q-25 10 -40 0" fill="#FFF" />
              <circle cx="-25" cy="0" r="3.5" fill="#151515" />
              <path d="M-45 -5 Q-25 -15 -5 -5" fill="none" stroke="#151515" strokeWidth="2" />
              {/* Dir */}
              <path d="M40 0 Q25 -10 10 0 Q25 10 40 0" fill="#FFF" />
              <circle cx="25" cy="0" r="3.5" fill="#151515" />
              <path d="M45 -5 Q25 -15 5 -5" fill="none" stroke="#151515" strokeWidth="2" />
           </g>
        </g>

        {/* ==================== 4. LIVRO & CABOS (Elementos Chave) ==================== */}
        <g id="book-complex" transform="translate(250, 500)">
           {/* Livro Aberto - Perspectiva */}
           <path d="M0 20 L150 40 L300 20 L300 120 L150 150 L0 120 Z" fill="#EEE" stroke="#D7CCC8" strokeWidth="1" />
           <path d="M0 120 L150 150 L300 120" fill="none" stroke="#3E2723" strokeWidth="6" /> {/* Capa grossa */}
           <line x1="150" y1="40" x2="150" y2="150" stroke="#D7CCC8" strokeWidth="2" /> {/* Dobra central */}
           
           {/* Texto Simulado */}
           <path d="M20 60 L130 70 M20 80 L130 90 M170 70 L280 60 M170 90 L280 80" stroke="#CCC" strokeWidth="2" />

           {/* === CABOS SAINDO (Estáticos e Curvos) === */}
           <g transform="translate(150, 100)">
             {/* Cabo 1: Azul com Dúvida (?) */}
             <path d="M0 0 C-20 -60, -110 -60, -130 -160" fill="none" stroke="#1976D2" strokeWidth="5" strokeLinecap="round" />
             <g transform="translate(-130, -160)">
                <rect x="-8" y="-12" width="16" height="20" fill="#1565C0" rx="2" />
                <rect x="-4" y="-15" width="8" height="5" fill="#FFF" />
                {/* Ícone */}
                <circle cx="-12" cy="-35" r="18" fill="#1565C0" stroke="white" strokeWidth="2" />
                <text x="-12" y="-28" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold" fontFamily="sans-serif">?</text>
             </g>

             {/* Cabo 2: Laranja com Alerta (!) */}
             <path d="M10 0 C50 -70, 110 -50, 150 -130" fill="none" stroke="#F57C00" strokeWidth="5" strokeLinecap="round" />
             <g transform="translate(150, -130)">
                <path d="M-8 0 L8 0 L0 -12 Z" fill="#E65100" />
                {/* Ícone */}
                <path d="M0 -55 L-22 -20 L22 -20 Z" fill="#E65100" stroke="white" strokeWidth="2" />
                <text x="0" y="-28" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" fontFamily="sans-serif">!</text>
             </g>

             {/* Cabo 3: Ethernet Cinza */}
             <path d="M-5 5 C-30 -40, -60 -90, -50 -130" fill="none" stroke="#757575" strokeWidth="4" strokeLinecap="round" />
             <g transform="translate(-50, -130) rotate(-15)">
                <rect x="-6" y="-10" width="12" height="15" fill="#616161" />
                <rect x="-3" y="-13" width="6" height="4" fill="#BDBDBD" />
             </g>
             
             {/* Cabo 4: Fios Vermelhos */}
             <path d="M5 5 C30 -20, 80 -20, 110 -70" fill="none" stroke="#D32F2F" strokeWidth="3" strokeLinecap="round" />
             <g transform="translate(110, -70)">
                <line x1="0" y1="0" x2="6" y2="-6" stroke="#E57373" strokeWidth="2" />
                <line x1="0" y1="0" x2="8" y2="0" stroke="#E57373" strokeWidth="2" />
                <line x1="0" y1="0" x2="6" y2="6" stroke="#E57373" strokeWidth="2" />
             </g>
           </g>
        </g>
      </svg>
    </div>
  );
};
