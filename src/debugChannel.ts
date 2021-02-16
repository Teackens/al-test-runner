import * as vscode from "vscode";

const debugChannel = vscode.window.createOutputChannel('al-test-runner-debug');

export function logDebugChannel(message: string) {
    debugChannel.appendLine(message);
}

export function clearDebugChannel() {
    debugChannel.clear();
}