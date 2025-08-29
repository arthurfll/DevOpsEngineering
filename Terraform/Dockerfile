FROM ubuntu:24.04

RUN apt-get update && apt-get install -y \
    curl bash unzip wget gnupg lsb-release software-properties-common \
    && rm -rf /var/lib/apt/lists/*

RUN wget https://releases.hashicorp.com/terraform/1.7.0/terraform_1.7.0_linux_amd64.zip \
    && unzip terraform_1.7.0_linux_amd64.zip \
    && mv terraform /usr/local/bin/ \
    && rm terraform_1.7.0_linux_amd64.zip

RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash

WORKDIR /workspace

# Mantém o container rodando
ENTRYPOINT ["tail", "-f", "/dev/null"]
