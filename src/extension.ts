/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

'use strict';

import * as vscode from 'vscode';
import * as path from 'path';
import * as os from 'os';


class SldbDebugAdapterDescriptorFactory implements vscode.DebugAdapterDescriptorFactory {

	private context: vscode.ExtensionContext;

	constructor(context: vscode.ExtensionContext) {
		this.context = context;
	}

	createDebugAdapterDescriptor(session: vscode.DebugSession,
		                         executable: vscode.DebugAdapterExecutable | undefined): vscode.ProviderResult<vscode.DebugAdapterDescriptor> {

		let command: string = ""
		if ("debugServerExecutable" in session.configuration) {
			command = session.configuration.debugServerExecutable
		} else {
			command = path.join(this.context.extensionPath, os.platform());
			command = path.join(command, "bin");
			command = path.join(command, "sldb-dap-server")
			if (os.platform() === "win32") {
				command = command + ".exe";
			}
		}

		let args: string[] = []
		if ("logLevel" in session.configuration) {
			args = ["--log-level=" + session.configuration.logLevel];
		}

		return new vscode.DebugAdapterExecutable(command, args);
    }
}


export function activate(context: vscode.ExtensionContext) {
	vscode.debug.registerDebugAdapterDescriptorFactory("sldb", new SldbDebugAdapterDescriptorFactory(context));

	// vscode.debug.registerDebugAdapterTrackerFactory('sldb', {
	// 	createDebugAdapterTracker(session: vscode.DebugSession) {
	// 	  	return {
	// 			onWillReceiveMessage: m =>
	// 				console.log(`> ${JSON.stringify(m, undefined, 2)}`),
	// 			onDidSendMessage: m =>
	// 				console.log(`< ${JSON.stringify(m, undefined, 2)}`)
	// 	  	};
	// 	}
	// });
}


export function deactivate() {
}
