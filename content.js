setInterval(() => {
    // Send heartbeat to background script every second
    chrome.runtime.sendMessage({ command: "heartbeat" });
    // Try to click the skip ad button
    clickSkipButton();
}, 1000);

function clickSkipButton() {
    // Find all visible buttons whose id contains 'skip-button'
    document.querySelectorAll('button[id*="skip-button"]').forEach((button) => {
        const rect = button.getBoundingClientRect();
        // Calculate the center coordinates of the button
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        // Only send if coordinates are valid and button is visible
        if (rect.width > 0 && rect.height > 0 && x > 0 && y > 0) {
            // Send a message to background script to simulate a click at the coordinates
            chrome.runtime.sendMessage({ command: "skip", x, y });
        }
    });
}
