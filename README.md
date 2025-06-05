# Pokédex CLI Application

## Project Overview

This project implements a command-line interface (CLI) Pokédex application built with Node.js. The application provides an interactive REPL environment for exploring Pokémon data through the PokéAPI service.

## Core Concepts

### REPL Interface
A REPL (Read-Eval-Print-Loop) is an interactive programming environment that processes user input in real-time. Users can enter commands and immediately view results, creating a seamless command-line experience.

### PokéAPI Integration
The application uses PokéAPI, a comprehensive RESTful API providing structured access to Pokémon data. This free service offers detailed information about Pokémon species, locations, and game mechanics.

## Learning Objectives

- **CLI Development**: Build robust command-line applications using Node.js
- **HTTP Client Implementation**: Execute and manage HTTP requests using Node.js native modules
- **JSON Processing**: Parse and manipulate JSON data structures effectively
- **Performance Optimization**: Implement caching strategies to enhance application responsiveness

## Technology Stack

- **[Node.js](https://nodejs.org/)** - JavaScript runtime environment
- **[HTTP Module](https://nodejs.org/api/http.html)** - Native Node.js HTTP client
- **[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)** - Data interchange format
- **[PokéAPI](https://pokeapi.co/docs/v2)** - Pokémon data service



## Installation

### Prerequisites
- **Node Version Manager (NVM)** - Recommended for Node.js version management
- **Node.js** (version 14.0 or higher)
- **npm** (Node Package Manager)

### Node.js Setup with NVM

#### Installing NVM

**On macOS/Linux:**
```bash
# Install NVM using curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Or using wget
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

**On Windows:**
```powershell
# Install nvm-windows from GitHub releases
# Download and install from: https://github.com/coreybutler/nvm-windows/releases
```

#### Installing and Using Node.js

```bash
# Restart your terminal or source your profile
source ~/.bashrc  # or ~/.zshrc

# Install the latest LTS version of Node.js
nvm install --lts

# Use the installed Node.js version
nvm use --lts

# Verify installation
node --version
npm --version
```

### Project Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahm4dd/pkdex.git
   cd pkdex
   ```

2. **Use the correct Node.js version**
   ```bash
   # Use the Node version in .nvmrc
   nvm use
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Build the application**
   ```bash
   npm run build
   ```

5. **Start the application**
   ```bash
   npm run start
   ```

## Command Reference

### Navigation Commands
- **`help`** - Display available commands and usage information
- **`exit`** - Terminate the CLI application

### Location Commands
- **`map`** - Retrieve and display the next 20 location areas in the Pokémon world
- **`mapb`** - Navigate backward to display the previous 20 location areas

### Exploration Commands
- **`explore [area-name]`** - List all Pokémon species found in the specified location area
- **`catch [pokemon-name]`** - Attempt to catch the specified Pokémon
- **`inspect [pokemon-name]`** - Display detailed statistics and information for a caught Pokémon
- **`pokedex`** - Displays all caught Pokémons

## Usage Examples

```bash
# Start the application
npm run start

# This should start the REPL interface

# View available commands
> help

# Explore location areas
> map
> explore pallet-town-area

# Catch and inspect Pokémon
> catch pikachu
> inspect pikachu

# Displaying the caught Pokémons
> pokedex
```

## Implementation Features

- **Interactive Command Processing**: Real-time command interpretation and execution
- **Data Caching**: Optimized performance through intelligent data storage
- **Error Handling**: Comprehensive error management for network and user input issues
- **Pagination Support**: Efficient navigation through large datasets
