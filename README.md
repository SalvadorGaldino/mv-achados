# MV Achados & Descontos — Site oficial

Site estático (HTML5 + CSS3 + JavaScript puro). Sem backend, sem build, sem dependências.

## Estrutura

```
mv-achados/
├── index.html
├── vercel.json
├── robots.txt
├── sitemap.xml
├── README.md
├── css/style.css
├── js/produtos.js     <- lista de ofertas (edite aqui)
├── js/script.js       <- links, menu, vitrine, animações
└── assets/
    ├── logo.svg       <- logo provisória (troque pela oficial)
    ├── favicon.svg
    └── og.jpg         <- imagem de compartilhamento 1200x630
```

## Antes de publicar

1. **Logo oficial:** substitua `assets/logo.svg` (ou use PNG e ajuste o `src` em `index.html`).
2. **Instagram:** já configurado em `js/script.js` (`INSTAGRAM_URL`). Se o perfil mudar, altere apenas essa linha.
3. **Domínio:** em `index.html`, `robots.txt` e `sitemap.xml`, troque `SEU-DOMINIO.vercel.app` pelo endereço real.
4. **Imagem de compartilhamento:** troque `assets/og.jpg` por uma arte com a logo (1200x630).

## Como atualizar as ofertas

Abra `js/produtos.js` e edite a lista `PRODUTOS`. Cada produto tem nome, categoria, preço, preço anterior (opcional), loja, imagem (opcional), link e a etiqueta `exemplo`.
- O percentual de desconto é calculado automaticamente quando há `precoAnterior`.
- Sem `link`, o botão "VER OFERTA" leva ao grupo VIP.
- Os produtos atuais são **demonstrativos**. Apague-os e remova `exemplo: true` ao cadastrar ofertas reais.
- Fotos: coloque em `assets/produtos/` (prefira `.webp` ou `.jpg`, até 800 px, abaixo de 150 KB) e use `imagem: "assets/produtos/nome.jpg"`.

## Publicar na Vercel

**Opção A: pelo GitHub (recomendada)**
1. Crie um repositório e envie esta pasta (`git init`, `git add .`, `git commit`, `git push`).
2. Em vercel.com, clique em **Add New → Project** e importe o repositório.
3. Em *Framework Preset*, deixe **Other**. Não precisa de Build Command nem Output Directory.
4. Clique em **Deploy**.

**Opção B: pela CLI**
```
npm i -g vercel
cd mv-achados
vercel --prod
```

**Domínio próprio:** Project → Settings → Domains.

## Link do grupo VIP

Fica em `js/script.js`, na constante `WHATSAPP_URL`. Todos os botões (cabeçalho, banner, categoria Cupons, vitrine, rodapé e botão flutuante) usam essa constante.

## Acessibilidade e desempenho

Menu mobile com `aria-expanded` e tecla Esc, link "Ir para o conteúdo", foco visível, `prefers-reduced-motion` respeitado, imagens com `loading="lazy"`, sem bibliotecas externas além da fonte Poppins.
