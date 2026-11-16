FROM mcr.microsoft.com/devcontainers/javascript-node:26-trixie

# Install Vim (update and install in the same layer to avoid stale package lists)
RUN apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends vim \
  && apt-get clean -y \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace

# Install deps from package.json including vitest
COPY package.json package-lock.json* ./
RUN npm install

# Install browsers to a shared, world-readable path (not /root/.cache) so the
# `node` user below can use them too. Must run as root: --with-deps installs
# system packages via apt.
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright
RUN npx playwright install chromium --with-deps \
  && chmod -R a+rX /ms-playwright

# node_modules was installed as root; the node user (and CI, which runs as a
# non-root user too) needs to read and write it (caches, lockfiles, etc).
RUN chown -R node:node /workspace

USER node
