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

		let command: string = path.join(this.context.extensionPath, "bin");
		command = path.join(command, os.platform());
		command = path.join(command, "sldb-dap-server")
		if (os.platform() === "win32") {
			command = command + ".exe";
		}

		return new vscode.DebugAdapterExecutable(command, []);
    }
}


export function activate(context: vscode.ExtensionContext) {
	vscode.debug.registerDebugAdapterDescriptorFactory("sldb", new SldbDebugAdapterDescriptorFactory(context));
}


export function deactivate() {
}
