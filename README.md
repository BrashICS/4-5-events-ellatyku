# 4.5 - Events in HTML/JS

###### ICS3U - Mr. Brash 🐿️

### Quick Recap:

- In order to connect HTML with JavaScript, we load the JS code through a `<script>` tag inside the `<head>` tag. (Yes, there are other ways to do it but we won't). We add the `defer` attribute so that the browser loads the script _after_ the HTML.
    ```HTML
    <script src="script.js" defer></script>
    ```
- JS can manipulate the HTML through the `document` object.
- We can find elements on the page with `document.getElementById("unique_id")`
- This allows us to manipuate the element through all sorts of properties and functions.
    ```JS
    let my_button = document.getElementById("add_btn");
    my_button.innerText = "Instructions";
    my_button.hidden = false;
    ```
- To make an element _react_ to user input, we need to register an _Event Listener_ which connects the event to a function.
    ```JS
    document.getElementById("add_btn").addEventListener("click", show_instructions);

    function show_instructions() {
        // Do a bunch of work 
    }
    ```