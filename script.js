```javascript
function showMessage() {
    document.getElementById("message").textContent =
        "Great! Start with one healthy habit today. 💚";
}

function joinCampaign() {
    document.getElementById("campaignMessage").textContent =
        "Thank you for supporting our Health Awareness Campaign!";
}
```
```javascript
// Health information for each topic

const healthTopics = {

    food: {
        title: "🥗 Healthy Food and Nutrition",
        description:
            "Eat a balanced diet containing fruits, vegetables, " +
            "whole grains, pulses, and other nutritious foods. " +
            "Limit foods high in salt, sugar, and unhealthy fats."
    },

    exercise: {
        title: "🏃 Exercise and Fitness",
        description:
            "Regular physical activity supports your heart, " +
            "muscles, bones, and mental well-being. Choose " +
            "activities that suit your age and physical ability."
    },

    hygiene: {
        title: "🧼 Personal Hygiene",
        description:
            "Wash your hands with soap and water, maintain " +
            "personal cleanliness, keep your surroundings clean, " +
            "and practise good food hygiene."
    },

    water: {
        title: "💧 Drinking Water",
        description:
            "Drink safe water regularly throughout the day. " +
            "Your water needs can change with the weather, " +
            "physical activity, and your health."
    },

    mental: {
        title: "🧠 Mental Health",
        description:
            "Take time to rest, sleep regularly, stay connected " +
            "with supportive people, and talk to someone you " +
            "trust when you feel stressed or overwhelmed."
    },

    disease: {
        title: "🩺 Disease Prevention",
        description:
            "Practise good hygiene, keep vaccinations up to date " +
            "according to health guidance, eat nutritious food, " +
            "and seek professional medical advice when needed."
    }

};


// Function to display information

function showTopic(topic) {

    const information = healthTopics[topic];

    if (!information) {
        return;
    }

    document.getElementById("topicTitle").textContent =
        information.title;

    document.getElementById("topicDescription").textContent =
        information.description;

    document.getElementById("topicInformation")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
}
```
```javascript
// Health awareness quiz

document.getElementById("healthQuiz")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const answers = {
            q1: "b",
            q2: "a",
            q3: "c"
        };

        let score = 0;
        let unanswered = 0;

        for (const question in answers) {

            const selected = document.querySelector(
                'input[name="' + question + '"]:checked'
            );

            if (!selected) {
                unanswered++;
            } else if (selected.value === answers[question]) {
                score++;
            }
        }

        const result = document.getElementById("quizResult");

        if (unanswered > 0) {

            result.textContent =
                "Please answer all three questions before checking your score.";

            return;
        }

        result.textContent =
    "Your score is " + score + " out of 3. " +
    (score === 3
        ? "Excellent work! 🎉"
        : "Good try! Review the topics and try again.");
    });
```
```javascript
// Daily Health Tips

const healthTips = [
    "Wash your hands with soap before eating.",
    "Eat fruits and vegetables every day.",
    "Stay physically active in a way that suits you.",
    "Drink safe water regularly throughout the day.",
    "Maintain a regular sleep routine.",
    "Take breaks and make time to relax.",
    "Keep your surroundings clean."
];

let currentTip = -1;

function showHealthTip() {

    currentTip = (currentTip + 1) % healthTips.length;

    document.getElementById("dailyTip").textContent =
        healthTips[currentTip];

}
```

function showTopic(topic) {
    const topics = {
        food: "🥗 Healthy Food and Nutrition\n\nEat fruits, vegetables, pulses, and balanced meals. Choose a variety of nutritious foods to help your body stay healthy.",

        exercise: "🏃 Exercise and Fitness\n\nTry walking, cycling, dancing, or playing sports regularly. Choose activities that suit your ability.",

        hygiene: "🧼 Personal Hygiene\n\nWash your hands with soap, bathe regularly, brush your teeth, and keep your surroundings clean.",

        water: "💧 Drinking Water\n\nDrink safe water regularly throughout the day. Your water needs depend on your activity, weather, and health.",

        mental: "🧠 Mental Well-being\n\nTake time to relax, get enough sleep, talk to someone you trust, and ask for help when you need it."
    };

    if (topics[topic]) {
        alert(topics[topic]);
    } else {
        alert("Health information is not available yet.");
    }
}

function showHealthTip() {
    const tips = [
        "🥗 Eat fruits and vegetables every day.",
        "💧 Drink safe water regularly.",
        "🧼 Wash your hands with soap before eating.",
        "🏃 Stay physically active every day.",
        "😴 Maintain a regular sleep routine.",
        "🧠 Take breaks and care for your mental well-being.",
        "🪥 Brush your teeth twice a day."
    ];

    const tipElement = document.getElementById("dailyTip");

    if (tipElement) {
        const randomIndex = Math.floor(Math.random() * tips.length);
        tipElement.textContent = tips[randomIndex];
    } else {
        alert("Daily tip area was not found. Check the id dailyTip in index.html.");
    }
}

function joinCampaign() {
    const message = document.getElementById("campaignMessage");

    if (message) {
        message.textContent =
            "🎉 Thank you for joining our Health Awareness Campaign! " +
            "Let's build healthy habits together.";
    } else {
        alert(
            "🎉 Thank you for joining our Health Awareness Campaign!"
        );
    }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./service-worker.js")
      .then(function () {
        console.log("Health Awareness app is ready!");
      })
      .catch(function (error) {
        console.error("Service worker registration failed:", error);
      });
  });
}