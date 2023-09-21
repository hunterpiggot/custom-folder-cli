#!/usr/bin/env node
import { Command } from "commander";
// import { initCommand } from "./commands/init";
import initCommand from "./commands/init.js";
const program = new Command();
program.version("0.1.0");
program
    .command("init")
    .description("initialize a new project")
    .action(initCommand);
program.parse(process.argv);
