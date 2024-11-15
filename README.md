# Sky Cast - Pocket Forecast for Every Step

![Skycast Logo](asset/logo.png)

Welcome to **Skycast**, a weather forecast website designed to help users easily access reliable and up-to-date weather information. This project is automatically deployed and hosted via Netlify, making use of GitHub integration for seamless updates.

## Website Link
[Skycast Weather Forecast Website](http://www.skycast.site/)

## Project Overview

Skycast is a simple yet powerful tool for checking weather forecasts. It aims to provide users with accurate weather updates and insights to help them plan their day better. With an intuitive interface, users can find weather conditions such as temperature, humidity, wind speed, and more for their selected location.

# Skycast Deployment Guide

This guide explains how to deploy the **Skycast** weather forecast website using Netlify. Follow the steps below to set up an automated deployment from GitHub, connect a custom domain, and manage DNS.

## Step 1: Sign Up for Netlify & Connect to GitHub

1. Go to [Netlify](https://www.netlify.com/) and click **Sign Up**.
2. Choose to sign up with your email or directly link your GitHub account (recommended for easier setup).
3. Once signed up, log in to your Netlify dashboard.
4. In the dashboard, click **New site from Git** to start the deployment process.
5. Choose **GitHub** as your Git provider and authorize Netlify to access your GitHub repositories.
6. Select the repository for Skycast that you want to deploy and choose the correct branch (usually `main` or `master`).
7. Click **Deploy Site** to start the deployment process.

## Step 2: Set Up Auto Deployment from GitHub

Netlify allows automatic deployments from GitHub, meaning any changes you push to the connected branch will automatically rebuild and update your Skycast website. Here’s how it works:

1. After connecting the GitHub repository, every new commit or push to the selected branch will trigger a Netlify build.
2. You can view the deployment progress and logs under the **Deploys** tab in your Netlify dashboard.
3. If there are any errors or issues with the build, Netlify will display them in the logs for troubleshooting.

This setup ensures that Skycast is always up to date with the latest changes from your GitHub repository.

## Step 3: Connect a Custom Domain & Configure DNS

To give Skycast a personalized domain, follow these steps:

1. In your Netlify dashboard, navigate to **Domain settings**.
2. Click **Add custom domain** and enter the domain name you purchased.
3. Netlify will display the DNS records (usually CNAME and A records) required for the connection.
4. Go to your domain provider’s DNS settings and add the provided Netlify records to point your domain to Netlify.
5. Once the DNS records are configured, allow a few minutes for propagation. Netlify will automatically provide an SSL certificate to secure your custom domain.

With these steps completed, Skycast will be live on your custom domain with automatic SSL for secure access.

---

## Additional Resources
- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

# Skycast Lighthouse Performance
(asset/lighthouse.png)