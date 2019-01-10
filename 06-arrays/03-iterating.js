let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

food.forEach(f => {console.log(f); })

food.forEach((food, number) => {console.log(number);
    console.log(food)
})

let movies = ['Nausicca of the Valley of the Wind', 'Shawshank Redemption', 'Moana']

movies.forEach(x => {console.log(x); })
movies.push('Fargo');
movies.splice(2,1, 'Miami Connection')

movies.forEach(x => {console.log(x); })