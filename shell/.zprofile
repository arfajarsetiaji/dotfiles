# Fig pre block. Keep at the top of this file.
[[ -f "$HOME/.fig/shell/zprofile.pre.zsh" ]] && builtin source "$HOME/.fig/shell/zprofile.pre.zsh"

# Profile
source ~/.profile

# Homebrew
eval "$(/opt/homebrew/bin/brew shellenv)"

# Pkgx
eval "$(pkgx --shellcode)"  #docs.pkgx.sh/shellcode

# Fig post block. Keep at the bottom of this file.
[[ -f "$HOME/.fig/shell/zprofile.post.zsh" ]] && builtin source "$HOME/.fig/shell/zprofile.post.zsh"
