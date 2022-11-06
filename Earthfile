VERSION 0.6
FROM --platform=linux/amd64 node:latest
WORKDIR /app

deps:
    # Install the Netlify CLI (global)
    RUN npm install netlify-cli -g
    # Copy package.json & package-lock.json for installing required packages
    COPY package.json package-lock.json ./
    # Install the Netlify CLI (local) and Netlify Next.js plugin and required packages
    RUN npm install netlify-cli --save-dev
    RUN npm install @netlify/plugin-nextjs --save-dev
    RUN npm install
    # Copy netlify.toml - required for building and deploying to Netlify
    COPY netlify.toml ./

build:
    FROM +deps
    # Copy files and directories required for building
    COPY .eslintrc.json postcss.config.js ./
    COPY --dir components content data lib pages public styles ./
    # Build site using NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID secrets
    RUN --secret NETLIFY_AUTH_TOKEN --secret NETLIFY_SITE_ID netlify build --context production
    SAVE ARTIFACT ./node_modules node_modules/ AS LOCAL ./
    SAVE ARTIFACT ./.next .next/ AS LOCAL ./
    SAVE ARTIFACT ./.netlify .netlify/ AS LOCAL ./

deploy:
    FROM +build
    # Deploy site
    RUN --push --secret NETLIFY_AUTH_TOKEN --secret NETLIFY_SITE_ID netlify deploy --prod
