FROM rockylinux/rockylinux:9

RUN \
    dnf install -y \
        vim git sudo && \
    dnf clean all

# # Add non-root user
# ARG USERNAME=vscode
# ARG USER_UID=1000
# ARG USER_GID=$USER_UID

# RUN groupadd --gid $USER_GID $USERNAME \
#     && useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USERNAME \
#     && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME\
#     && chmod 0440 /etc/sudoers.d/$USERNAME 

RUN \
    dnf module install -y nodejs:22

# linux ジョークコマンドのインストール
RUN dnf install -y epel-release && \
    dnf install -y sl fortune-mod cowsay