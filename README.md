# Portal de Links do Biólogo Rangel

Este é um site simples estilo Linktree para compartilhar links importantes.

## Como editar o site sem conhecimento de programação

Abra o arquivo `index.html` em qualquer editor de texto (como Bloco de Notas, VS Code, etc.) e altere:
- Textos e nome do perfil
- Nome de usuário e biografia
- Links (URLs)
- Imagem de perfil (substitua o arquivo `profile.jpg`)

### Como adicionar ou alterar sua foto de perfil

1. Renomeie sua foto para `profile.jpg`
2. Substitua o arquivo existente na raiz do projeto

### Como adicionar um novo link

Para adicionar um novo link, você precisa editar o arquivo `index.html` e adicionar um novo bloco de código como este:

```html
<a href="https://seulink.com" class="link-card">
    <span>Nome do seu link</span>
    <!-- Escolha um dos ícones abaixo ou use o padrão -->
    <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
</a>
```

## Como publicar no GitHub Pages

1. Faça as alterações desejadas nos arquivos
2. Faça commit e push para o GitHub:
   ```
   git add .
   git commit -m "Atualização do site"
   git push
   ```
3. Vá até as configurações do seu repositório no GitHub
4. Na seção "GitHub Pages", selecione a branch principal e clique em Save
5. Seu site estará disponível em https://seu-usuario.github.io/nome-do-repositorio/
