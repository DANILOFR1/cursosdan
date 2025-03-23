# Portal de Links do Biólogo Rangel

Este é um site simples estilo Linktree para compartilhar links importantes.

## Como editar o site sem conhecimento de programação

Para fazer alterações simples, você só precisa editar o arquivo de configuração:

### 1. Editar o arquivo de configuração

O arquivo principal que você precisa editar está em:
`src/lib/config.tsx`

Neste arquivo, você pode:

- Alterar seu nome, usuário e biografia
- Adicionar, remover ou editar links
- Alterar o texto do rodapé

### 2. Como adicionar ou alterar sua foto de perfil

1. Renomeie sua foto para `profile.jpg`
2. Substitua o arquivo existente na pasta `public/`

### 3. Como adicionar um novo link

Para adicionar um novo link, edite o arquivo `src/lib/config.tsx` e adicione um novo item ao array `COURSES`:

```js
{
  title: "Nome do seu link",
  url: "https://seulink.com",
  icon: <LinkIcon size={20} />,
  delay: "bio-animation-delay-6"
}
```

Os ícones disponíveis são:
- `<GraduationCap />` - Chapéu de graduação
- `<Book />` - Livro
- `<LinkIcon />` - Link
- `<List />` - Lista
- `<Microscope />` - Microscópio
- `<Youtube />` - YouTube

## Tecnologias utilizadas

Este projeto é construído com:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Desenvolvimento

### Instalar dependências
```
npm install
```

### Iniciar servidor de desenvolvimento
```
npm run dev
```

### Construir para produção
```
npm run build
```
