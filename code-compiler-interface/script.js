const codeEditor = document.getElementById('code-editor');
const languageSelect = document.getElementById('language-select');
const outputConsole = document.getElementById('output-console');
const compileBtn = document.getElementById('compile-btn');

compileBtn.addEventListener('click', () => {
    const code = codeEditor.value;
    const language = languageSelect.value;
    
    outputConsole.textContent = 'Compiling...';

    // Send code to Piston API (Free, no auth required)
    fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            language: language,
            version: "*",
            files: [{
                content: code
            }]
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.run && data.run.output) {
            outputConsole.textContent = `Output:\n${data.run.output}`;
        } else if (data.run && data.run.stderr) {
            outputConsole.textContent = `Error:\n${data.run.stderr}`;
        } else if (data.message) {
            outputConsole.textContent = `Error: ${data.message}`;
        } else {
            outputConsole.textContent = 'No output received';
        }
    })
    .catch(error => {
        outputConsole.textContent = `Error: ${error.message}`;
    });
});
