# Portfólio de Alessandro Vinícius

Site pessoal em React e Vite, com CSS responsivo.

## Executar localmente

```bash
npm ci
npm run dev
```

## Gerar versão de produção

```bash
npm run build
npm run preview
```

## Atualizar o site na Vercel

1. Extraia este ZIP e copie os arquivos para a pasta do seu repositório, substituindo as versões anteriores. Preserve a pasta `.git` do repositório.
2. Confira as alterações e faça commit e push para a branch conectada à Vercel.
3. Se o deploy automático estiver configurado, a Vercel publicará a nova versão. O comando de build é `npm run build` e o diretório de saída é `dist`.

## Conteúdo e estilos

- Projetos: `src/data/projects.js`.
- Textos: componentes em `src/components/`.
- Estilos e ajustes para celular: `src/index.css`.
- Título, descrição e compartilhamento: `index.html`.
- Ícone: `public/favicon.svg`.

Os projetos abrem o código no GitHub em uma nova aba. O contato por e-mail usa `mailto:` e depende de um aplicativo de e-mail configurado no dispositivo.

## Melhorias desta versão

- Apresentação mais curta e foco em back-end.
- API de contatos em destaque e links explícitos para o código.
- Textos revisados, maior contraste e layout para celular.
- Navegação por teclado, link para pular ao conteúdo e compensação para o cabeçalho fixo.
- E-mail corrigido, metadados e favicon.
- CSS centralizado e conflito do README resolvido.
