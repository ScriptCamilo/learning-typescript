enum Colors {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
}
// Ele junta os dois
enum Colors {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA, //Quando não especificado ele pega o valor anterior e soma +1
}

export function colorChoice(color: Colors): void {
  console.log(Colors[color]);
}

colorChoice(10);
