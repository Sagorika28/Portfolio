# GitHub Pages Deployment Guide

## Prerequisites

1. A GitHub account
2. Your portfolio code pushed to a GitHub repository

## Steps to Deploy

### 1. Update the Homepage URL

In `package.json`, replace `yourusername` with your actual GitHub username:

```json
"homepage": "https://yourusername.github.io/masterPortfolio"
```

### 2. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
```

### 3. Add GitHub Remote

```bash
git remote add origin https://github.com/yourusername/masterPortfolio.git
```

### 4. Push to GitHub

```bash
git branch -M main
git push -u origin main
```

### 5. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:

- Build your React app
- Create a `gh-pages` branch
- Deploy the built files to GitHub Pages

### 6. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch and "/ (root)" folder
6. Click "Save"

Your portfolio will be available at: `https://yourusername.github.io/masterPortfolio`

## Troubleshooting

### If deployment fails:

1. Make sure you're logged into GitHub: `git config --global user.name "Your Name"`
2. Check if the repository exists and you have push access
3. Try: `npm run deploy` again

### If the site doesn't load:

1. Check the homepage URL in package.json matches your repository name
2. Wait a few minutes for GitHub Pages to update
3. Check the Actions tab in your repository for any errors
