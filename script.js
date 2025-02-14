const button = document.querySelector("button")
const boxOne = document.getElementsByClassName("box1")[0]
const boxTwo = document.getElementsByClassName("box2")[0]
const container = document.getElementsByClassName("container")[0]
const content = document.getElementsByClassName("content")[0]

button.addEventListener("click", () => {
    boxOne.style.transform = 'translateX(-90%)';
    boxTwo.style.transform = 'translateX(90%)';
    container.classList.add("active");

    if (container.classList.contains("active")) {
        button.style.display = "none"; // Hide the button

        content.classList.add("content-active")

        // Create a new <i> element for the cross button
        const crossButton = document.createElement("div");
        crossButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        crossButton.classList.add("button-active")

        // Append the cross button to the container
        container.appendChild(crossButton);

        // Add event listener to remove active class when clicked
        crossButton.addEventListener("click", () => {
            container.classList.remove("active");
            button.style.display = "block";
            boxOne.style.transform = 'translateX(0%)';
            boxTwo.style.transform = 'translateX(0%)'; // Show button again
            crossButton.remove(); // Remove the cross button
            content.classList.remove("content-active")
        });
    }
});
