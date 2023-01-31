//Запросить все тренировки

async function getUsers() {
  const respons = await fetch("http://94.228.122.181:3000/wokrout", {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  if (respons.ok === true) {
    const workout = await respons.json();
    console.log(Object.entries(workout));
  }
}

// getUsers();

//Добавить тренировку

async function createWorkout(item) {
  const respons = await fetch("http://94.228.122.181:3000/wokrout", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (respons.ok === true) {
    // const workout = await respons.json();
    console.log("Тренировка успешно добавлена");
  }
}

//Получить все тренировки

async function GetUsers() {
  const response = await fetch("http://94.228.122.181:3000/wokrout", {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  // если запрос прошел нормально
  if (response.ok === true) {
    // получаем данные
    const exercise = await response.json();

    exercise.forEach((user) => {
      console.log("Тренировки из базы", user);
    });
  }
}
//---------------------------------------

//   <button onClick={() => createWorkout(nameTra)}>FETCH</button>
//   <button onClick={getUsers}>Получить тренировки</button>
