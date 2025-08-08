# Code Compiler Interface

A web-based code compiler that allows you to write, compile, and execute code in multiple programming languages directly in your browser.

## Features

- **Multi-language support**: Python, JavaScript, C, C++, Java
- **Real-time compilation**: Execute code instantly with output display
- **Clean interface**: Simple and intuitive user interface
- **No backend required**: Uses Piston API for code execution

## Supported Languages

- Python
- JavaScript (Node.js)
- C
- C++
- Java

## How to Use

1. Open `index.html` in your web browser
2. Select your programming language from the dropdown
3. Write your code in the text area
4. Click "Compile" to execute your code
5. View the output in the console below

## API Used

This project uses the [Piston API](https://emkc.org/api/v2/piston) which is a free, public code execution engine that supports multiple programming languages.

## Files Structure

```
├── index.html      # Main HTML file
├── style.css       # Styling for the interface
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## Example Usage

**Python:**
```python
print("Hello, World!")
```

**JavaScript:**
```javascript
console.log("Hello, World!");
```

**C:**
```c
#include <stdio.h>
int main() {
    printf("Hello, World!");
    return 0;
}
```

## Local Development

Simply open `index.html` in any modern web browser. No server setup required!

## License

MIT License - feel free to use and modify as needed.
