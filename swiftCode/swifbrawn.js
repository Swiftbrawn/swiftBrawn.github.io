function estate() {
    var imgElement = document.getElementById("estate");

    // Check current image and switch it
    if (imgElement.src.includes("swiftCode/img/real.jpg")) {
        imgElement.src = "swiftCode/img/uio.jpg";  // Switch to the second image
    } else {
        imgElement.src = "swiftCode/img/real.jpg";  // Switch back to the first image
    }
}

// Gamming Gear Website
function gaming() {
    var imgElement = document.getElementById("gaming");

    // Check current image and switch it
    if (imgElement.src.includes("swiftCode/img/pro2.jpg")) {
        imgElement.src = "swiftCode/img/dio.jpg";  // Switch to the second image
    } else {
        imgElement.src = "swiftCode/img/pro2.jpg";  // Switch back to the first image
    }
}

// Food Vendor
function Food() {
    var imgElement = document.getElementById("Food");

    // Check current image and switch it
    if (imgElement.src.includes("swiftCode/img/pr3.jpg")) {
        imgElement.src = "swiftCode/img/dig.jpgswiftCode/img/uio.jpg";  // Switch to the second image
    } else {
        imgElement.src = "swiftCode/img/pr3.jpg";  // Switch back to the first image
    }
}
// Video Editor website
function Video() {
    var imgElement = document.getElementById("Video");

    // Check current image and switch it
    if (imgElement.src.includes("swiftCode/img/pr4.jpg")) {
        imgElement.src = "swiftCode/img/ins.jpg";  // Switch to the second image
    } else {
        imgElement.src = "swiftCode/img/pr4.jpg";  // Switch back to the first image
    }
}
// consult
function consult() {
    var imgElement = document.getElementById("consul");

    // Check current image and switch it
    if (imgElement.src.includes("swiftCode/img/pr4.jpg")) {
        imgElement.src = "swiftCode/img/ins.jpg";  // Switch to the second image
    } else {
        imgElement.src = "swiftCode/img/pr4.jpg";  // Switch back to the first image
    }
}

// Firm
function firm() {
    var imgElement = document.getElementById("firm");

    // Check current image and switch it
    if (imgElement.src.includes("swiftCode/img/pr4.jpg")) {
        imgElement.src = "swiftCode/img/ins.jpg";  // Switch to the second image
    } else {
        imgElement.src = "swiftCode/img/pr4.jpg";  // Switch back to the first image
    }
}
function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning!";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    return greeting;
}

    // Set the greeting text on page load
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('greeting').innerText = getGreeting('Welcome to SwiftBrawn, &quot; how can we help you?');
    });

    function getDayAndMessage() {
        const now = new Date();
        const dayIndex = now.getDay(); // 0 (Sunday) to 6 (Saturday)
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const messages = [
            "Enjoy your weekend!",
            "Start the week strong!",
            "Keep pushing through!",
            "Almost halfway there!",
            "The weekend is near!",
            "It's Friday! Time to celebrate!",
            "Relax, it's the weekend!"
        ];

        const dayName = daysOfWeek[dayIndex];
        const message = messages[dayIndex];

        return { dayName, message };
    }

    // Set the day and message text on page load
    document.addEventListener('DOMContentLoaded', function() {
        const { dayName, message } = getDayAndMessage();
        document.getElementById('day').innerText = dayName;
        document.getElementById('message').innerText = message;
    });
    function displayRoles() {
        const rolesHTML = `
            <h1>Software Engineering Roles</h1>
            <ul>
                <li><strong>Software Engineer:</strong> General software development roles focusing on designing, coding, testing, and maintaining software applications.</li>
                <li><strong>Frontend Developer:</strong> Specializes in building user interfaces and experiences using technologies like HTML, CSS, and JavaScript.</li>
                <li><strong>Backend Developer:</strong> Works on server-side logic, databases, and APIs using languages like Java, Python, Ruby, or Node.js.</li>
                <li><strong>Full Stack Developer:</strong> Combines both frontend and backend skills to build complete web applications.</li>
                <li><strong>DevOps Engineer:</strong> Focuses on the integration of development and operations, ensuring smooth deployment and scaling of applications.</li>
                <li><strong>Data Engineer:</strong> Specializes in managing and optimizing data pipelines and databases.</li>
                <li><strong>Machine Learning Engineer:</strong> Works on developing and deploying machine learning models and algorithms.</li>
                <li><strong>Quality Assurance (QA) Engineer:</strong> Focuses on testing software to ensure it meets quality standards.</li>
            </ul>
        `;
        document.getElementById("rolesContainer").innerHTML = rolesHTML;
    }