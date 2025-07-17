// Store the tab IDs that have debugger attached
let attachedTabs = new Set();

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.command === 'heartbeat') {
        // Log heartbeat for debugging
        console.log(`[ StreamEase ] heartbeat`) 
        return;
    }
    if (request.command === "skip") {
        const tabId = sender.tab.id;
        // Validate tabId and coordinates
        if (!tabId || typeof request.x !== 'number' || typeof request.y !== 'number') {
            console.error('Invalid tabId or coordinates');
            return;
        }
        // Attach debugger if not already attached for this tab
        if (!attachedTabs.has(tabId)) {
            chrome.debugger.attach({tabId}, "1.3", () => {
                attachedTabs.add(tabId);
                // Simulate mouse click at the given coordinates
                simulateClick(tabId, request.x, request.y);
            });
        } else {
            // If already attached, just simulate the mouse click
            simulateClick(tabId, request.x, request.y);
        }
    }
});

/**
 * Simulate a mouse click at the specified coordinates on the given tab.
 * Uses Chrome Debugger Protocol to dispatch mouse events.
 * @param {number} tabId - The ID of the tab to interact with.
 * @param {number} x - The x-coordinate for the mouse event.
 * @param {number} y - The y-coordinate for the mouse event.
 */
function simulateClick(tabId, x, y) {
    // Dispatch mousePressed event
    chrome.debugger.sendCommand({tabId}, "Input.dispatchMouseEvent", {
        type: "mousePressed",
        x, y,
        button: "left",
        clickCount: 1
    }, () => {
        // Dispatch mouseReleased event after mousePressed
        chrome.debugger.sendCommand({tabId}, "Input.dispatchMouseEvent", {
            type: "mouseReleased",
            x, y,
            button: "left",
            clickCount: 1
        }, () => {
            // Detach debugger after the click is simulated
            chrome.debugger.detach({tabId}, () => {
                attachedTabs.delete(tabId);
            });
        });
    });
}