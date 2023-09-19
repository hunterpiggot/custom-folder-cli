#!/usr/bin/env node
import { Command } from "commander";
import inquirer from "inquirer";
import { execSync } from "child_process";
// import { initCommand } from "./commands/init";
import initCommand from "./commands/init.ts";
const program = new Command();

program.version("0.1.0");

program
  .command("init")
  .description("initialize a new project")
  .action(initCommand);

program.parse(process.argv);
