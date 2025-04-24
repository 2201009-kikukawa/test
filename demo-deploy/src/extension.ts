import * as vscode from "vscode";
import * as os from "os";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("demo.showOSInfo", () => {
    const platform = os.platform();
    const release = os.release();
    vscode.window.showInformationMessage(
      `あなたのOSは: ${platform} ${release}です！`
    );
  });

  context.subscriptions.push(disposable);
}
