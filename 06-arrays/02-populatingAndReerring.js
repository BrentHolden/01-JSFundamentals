let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (f in food){
    console.log(food[f])
}

for (x of food){
    console.log(x)
}

food.push('Pizza');

food.splice(1,0, 'Bananas');

console.log(food);

//food.pop