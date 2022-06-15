import express from 'express';

const app = express();
const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];
  const holidays2 = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/2/2022", name: "Carnaval" },
    { date: "17/4/2022", name: "Páscoa" },
    { date: "21/4/2022", name: "Tiradentes" },
    { date: "1/5/2022", name: "Dia do trabalho" },
    { date: "16/6/2022", name: "Corpus Christi" },
    { date: "7/9/2022", name: "Independência do Brasil" },
    { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
    { date: "2/11/2022", name: "Finados" },
    { date: "15/11/2022", name: "Proclamação da República" },
    { date: "25/12/2022", name: "Natal" }
  ];
  const hoje = new Date();
  console.log(hoje.toLocaleDateString()); // 1/1/2022

app.get('/holidays', (req, res) => {
  res.send({holidays});
});

function verificar () {
  for (let i = 0; i < holidays.length; i++) {
    if (holidays2[i].date === hoje.toLocaleDateString) {
      return (`Sim, hoje é ${holidays2[i].name}`)
    } else {
      return ("Não, hoje não é feriado")
    }
  }
}

app.get('/is-today-holiday', (req, res) => {
  res.send(verificar());
});

app.listen(5001);