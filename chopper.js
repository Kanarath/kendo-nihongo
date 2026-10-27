// Tony Tony Chopper: recorte de la figura de referencia (chopper.png, fondo transparente) con animaciones por pose.
// chopperSVG(pose) devuelve el HTML del mascota (se conserva el nombre por compatibilidad).
// pose: 'wave' (saluda) | 'cheer' (celebra, con chispas) | 'think' (piensa, con «?») | 'dance' (baila, con corazones)
function chopperSVG(pose = 'wave') {
  const fx = {
    wave: '',
    cheer: '<i class="fx s1">✦</i><i class="fx s2">✦</i><i class="fx s3">✧</i><i class="fx s4">✦</i>',
    think: '<i class="fx q">?</i>',
    dance: '<i class="fx h1">♥</i><i class="fx h2">♥</i><i class="fx h3">♥</i>'
  }[pose] || '';
  return `<span class="chimg ${pose}"><img src="chopper.webp" alt="Chopper" draggable="false">${fx}</span>`;
}
