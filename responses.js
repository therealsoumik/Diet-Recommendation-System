var last;
var num;
function getBotResponse(input) {
    //rock paper scissors
    var k= input.toLowerCase();
    
    // Simple responses
    if (k == "hello") {
        return "Hello there!";
    }
    else if ( k == "help" ||  k == "queries"){
        return "How can I help you";
    }
    else if( k == "consult dietitian"){
        return "98-2556-6667";
    }
    else if ( k == "diabetes"){
        last = k;
        return "How old are you?(Tell by the category of 20 years gap)";
    }
    else if( k == "21-40" ||  k == "21 to 40" || k == "41-60" || k == "41 to " || k == "61-80" || k == "61 to 80" || k == "81-100" || k == "81 to 100"){
        return "What do you want to have?";
    }
    else if (k == "rice" && (last == "diabetes")) {
        return "White rice has a high glycemic index, that can cause spikes in blood sugar level. Eat atleast 30gms of rice.";
    }
    else if (k == "chapatti" && (last == "diabetes")) {
        return "Eating whole wheat chapati is a better alternative than white rice. Wheet is low glycemic index, better source of fiber, protein and also keeps one's stomach full for longer.  It is advised to eat 2 to 3 whole wheat chapatis in a day and preferably without oil. It should be eaten with vegetable curry or sabzi that is low in carbohydrates and rich in fiber.";
    }
    else if (k == "chicken"  && (last == "diabetes")) {
        return "Chicken is a perfect protein to make a fantastic low glycemic meal. Because it doesn’t contain any carbohydrates, it has little effect on blood sugar level. Have chicken meal 2-3 times a week, with each serving of 85gms.";
    }
    else if (k == "vegetable"  && (last == "diabetes")) {
        return "Vegetables are full of fibres and nutrients, and low in carbohydrates. Do avoid sweet potatoes and regular potatoes.";
    }
    else if (k == "nuts and seeds" || k=="nuts" || k=="seeds"  && (last == "diabetes")) {
        return "Flax seeds, almonds, peanuts, pumpkin seeds, chia seeds, pistachios, cashew nuts etc are suitable for you.";
    }
    else if (k == "fruits"  && (last == "diabetes")) {
        return "Fruits like banana, mango, and grapes, to name a few, have a high glycemic index, which leads to a spike in blood sugar levels, thus, they must not be a part of your diabetic diet plan. However you can prefer having less sugary fruits like watermelon, strawberries, mandarin oranges, blackberries, and peaches.";
    }
    else if (k == "breads"  && (last == "diabetes")) {
        return "White bread and pasta are high carb foods, which not only increase the glucose level in diabetic patients but also negatively impact their cognitive thinking.";
    }
    
    
    else if ( k == "heart disease") {
        last = k;
        return "How old are you?(Tell by the category of 20 years gap)";
    }
    else if (k == "rice" && (last == "heart disease")) {
        return "White rice can lead to many health issues including risk of heart diseases. Eating too much rice is a known risk factor for premature coronary artery disease (PCAD), a leading cause of death worldwide.";
    }
    else if (k == "chapatti" && (last == "heart disease")) {
        return "As it is typically made from whole wheat flour, it can be a good option for a heart disease patient to consume as part of a healthy diet. Whole wheat flour is high in fiber and nutrients, and has been shown to have a beneficial effect on heart health.";
    }
    else if (k == "chicken"  && (last == "heart disease")) {
        return "Choose lower fat options such as lean meat, skinless poultry and unprocessed meat instead of red meats.";
    }
    else if (k == "vegetable"  && (last == "heart disease")) {
        return "Eat vegetables such as asparagus, carrots, broccoli, spinach, garlic, green beans and squash. These anti-inflammatory veggies are a good source of soluble fibres and antioxidants. That help lower the risk of heart disease";
    }
    else if (k == "nuts and seeds" || k=="nuts" || k=="seeds"  && (last == "heart disease")) {
        return "Eating nuts as part of a healthy diet may be good for the heart. Nuts like dry-roasted almonds, cashews, chestnuts, hazelnuts, peanuts, pistachios and walnuts contain unsaturated fatty acids and other nutrients that is good for maintaining a healthy heart.";
    }
    else if (k == "fruits"  && (last == "heart disease")) {
        return "Fruits such as berries, apples, pears, citrus fruits, melons, and kiwi. These fruits are high in fiber, vitamins, and antioxidants and have been shown to have a beneficial effect on heart health. It is also important for a heart disease patient to limit their intake of fruits high in sugar such as bananas, mangoes, and pineapples";
    }
    else if (k == "breads"  && (last == "heart disease")) {
        return "You can eat bread that is made from whole grains such as whole wheat, oats, barley, and quinoa. These types of bread are high in fiber and nutrients, and have been shown to have a beneficial effect on heart health.";
    }
    
    else if ( k == "thyroid"){
        last = k;
        return "How old are you?(Tell by the category of 20 years gap)";
    }
    else if (k == "rice" && (last == "thyroid")) {
        return "Rice is a good source of carbohydrates, which provide energy to the body, but it's important to keep in mind that consuming too many carbohydrates can lead to weight gain, which can be a concern for some thyroid patients. In general, it is recommended to limit the consumption of white rice and opt for brown rice which is more nutritious and has a lower glycemic index.";
    }
    else if (k == "chapatti" && (last == "thyroid")) {
        return "It is typically made from whole wheat flour, which is high in fiber and nutrients, and can be beneficial for overall health. It is also recommended to avoid processed roti such as frozen roti, as they contain additives and preservatives which can be harmful to the health. In general, it is recommended to have roti in moderate amounts, 2-3 times a week, and to opt for whole wheat flour, and to pair them with a source of protein and vegetables or fruits.";
    }
    else if (k == "chicken"  && (last == "thyroid")) {
        return "Chicken is a good source of protein, which is important for maintaining muscle mass, and it is also a lean meat, which means that it is lower in fat compared to other meats. It is recommended to have chicken in moderate amounts, 2-3 times a week, and to opt for lean cuts of chicken such as chicken breast, and to prepare it in healthy ways such as grilling, baking or roasting.";
    }
    else if (k == "vegetable"  && (last == "thyroid")) {
        return "Patients can eat vegetables as part of a balanced diet and it is recommended to eat a variety of vegetables every day. Vegetables are an excellent source of essential vitamins, minerals, and antioxidants, which are important for overall health and can help support the functioning of the thyroid gland. Some examples of vegetables that are particularly beneficial for thyroid health include kale, spinach, broccoli, and Brussels sprouts. it is recommended to have a variety of vegetables in moderate amounts, every day, and to prepare them in healthy ways such as steaming, roasting, or sautéing with a minimal amount of healthy fats.";
    }
    else if (k == "nuts and seeds" || k=="nuts" || k=="seeds"  && (last == "thyroid")) {
        return "Nuts and seeds are a good source of healthy fats, protein, and various vitamins and minerals. They can also help in weight management, which is important for some thyroid patients.Examples of nuts and seeds that are particularly beneficial for thyroid health include walnuts, almonds, flaxseeds, pumpkin seeds, and sunflower seeds. It is also recommended to avoid processed nuts and seeds such as roasted nuts as they contain additives and preservatives";
    }
    else if (k == "fruits"  && (last == "thyroid")) {
        return "Fruits: Fruits are an excellent source of essential vitamins, minerals, and antioxidants, which are important for overall health and can help support the functioning of the thyroid gland. Some examples of fruits that are particularly beneficial for thyroid health include Berries, kiwi, papaya, and oranges. It is also recommended to avoid processed fruits such as canned fruits as they contain additives and preservatives. have a variety of fruits in moderate amounts, every day, and to opt for fruits that are low in sugar and high in fiber, vitamins and minerals.";
    }
    else if (k == "breads"  && (last == "thyroid")) {
        return "Bread: opt for whole grain breads such as whole wheat, oats, barley, quinoa, or rye, as they are high in fiber, vitamins, and minerals and provide more nutrition than refined breads. Avoid processed bread such as white bread, as it's made from refined flour and has less nutrients and a higher glycemic index compared to whole grain bread. It is recommended to have bread in moderate amounts, 2-3 times a week, and to opt for whole grain breads, and to pair them with a source of protein and vegetables or fruits.";
    }
    
    
    
    else if ( k == "obesity") {
        last = k;
        return "How old are you?(Tell by the category of 20 years gap)";
    }
    else if (k == "rice" && (last == "obesity")) {
        return "Rice is a good source of carbohydrates, but consuming too many carbohydrates can lead to weight gain, which can be a concern for some obese patients.It is recommended to limit the consumption of white rice and opt for brown rice, which is more nutritious and has a lower glycemic index. Brown rice is also higher in fiber, vitamins, and minerals than white rice, which can help to promote feelings of fullness and help to control weight. it is also important to monitor the portion sizes and to pair rice with a source of protein and vegetables to create a balanced meal.";
    }
    else if (k == "chapatti" && (last == "obesity")) {
        return "Whole wheat roti which are high in fiber and have fewer added sugars. Whole wheat roti can help with weight loss and maintaining a healthy weight, but consuming large amounts of refined flour roti, such as white flour roti, can contribute to weight gain. It's also important to consider portion control and to combine roti with other healthy foods such as lean protein, vegetables, and fruits";
    }
    else if (k == "chicken"  && (last == "obesity")) {
        return "Chicken: It is recommended to have chicken in moderate amounts, 2-3 times a week, and to opt for lean cuts of chicken such as chicken breast and to prepare it in healthy ways such as grilling, baking, or roasting. This can help to keep the calorie and fat content of the chicken low, which can be beneficial for weight management.Additionally, it is also important to monitor the portion sizes and to pair chicken with a source of vegetables or fruits to create a balanced meal.";
    }
    else if (k == "vegetable"  && (last == "obesity")) {
        return "Vegetables: it is recommended to eat a variety of vegetables every day. Vegetables are an excellent source of essential vitamins, minerals, and antioxidants, which are important for overall health and can help support weight management. Some examples of vegetables that are particularly beneficial for weight management include leafy greens, broccoli, cauliflower, bell peppers, and cucumbers. It is recommended to have a variety of vegetables in moderate amounts, every day, and to prepare them in healthy ways such as steaming, roasting, or sautéing with a minimal amount of healthy fats. This can help to keep the calorie and fat content of the vegetables low, which can be beneficial for weight management. They may also suggest alternative options such as zucchini noodles or cauliflower rice as a lower calorie option.";
    }
    else if (k == "nuts and seeds" || k=="nuts" || k=="seeds"  && (last == "obesity")) {
        return "Nuts & seeds: Obese patients can eat nuts and seeds as part of a healthy diet, as they are a good source of protein, healthy fats, and fiber. However, it's important to keep in mind that nuts and seeds are high in calories, so portion sizes should be kept small. It is generally recommended to have a moderate serving of nuts, about a handful or 1.5 ounces per day, and to spread them out throughout the day.";
    }
    else if (k == "fruits"  && (last == "obesity")) {
        return "Fruits are a good source of vitamins, minerals, and fiber and they are relatively low in calories. Eating a variety of fruits can help with weight loss and maintaining a healthy weight. However, it's important to keep in mind that some fruits are higher in natural sugars than others and consuming large amounts of these fruits can contribute to weight gain. It is generally recommended to have 2-3 servings of fruit per day, with a serving being about 1 cup of cut-up fruit or a medium-sized fruit.";
    }
    else if (k == "breads"  && (last == "obesity")) {
        return "Choose whole grain breads that are high in fiber and have fewer added sugars. Whole grain breads can help with weight loss and maintaining a healthy weight, but consuming large amounts of refined breads, such as white bread, can contribute to weight gain. It's also important to consider portion control and to combine bread with other healthy foods such as lean protein, vegetables and fruits.";
    }
    
    
    
    else if (k == "bmi") {
        
        return "Go to the BMI section for knowing it";
    }
    
    
    else if(k == "lol") {
        return "";
    }
    
    
    
    
    else if ( k == "goodbye" || input == "bye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}
