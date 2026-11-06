/* =========================================================
   PRODUTOS DA VITRINE "ACHADINHOS DO DIA"
   Edite apenas este arquivo para atualizar as ofertas.

   Campos:
   - nome          (obrigatório) nome do produto
   - categoria     Eletrônicos | Casa e Cozinha | Moda | Beleza | Calçados | Infantil
   - preco         preço atual, número (ex.: 99.9)
   - precoAnterior (opcional) preço antigo; o % de desconto é calculado sozinho
   - loja          loja de origem (ex.: "Shopee")
   - imagem        (opcional) caminho/URL da foto, ex.: "assets/produtos/fone.jpg"
                   Sem imagem, um placeholder com emoji é exibido.
   - emoji         (opcional) emoji do placeholder
   - link          link de afiliado/oferta. Vazio = leva ao grupo VIP.
   - exemplo       true = mostra a etiqueta "EXEMPLO". Remova ao cadastrar ofertas reais.
   ========================================================= */
const PRODUTOS = [
  { nome: "Fone Bluetooth (produto de exemplo)", categoria: "Eletrônicos", preco: 79.9, precoAnterior: 129.9, loja: "Loja Exemplo", emoji: "🎧", link: "", exemplo: true },
  { nome: "Smartwatch (produto de exemplo)", categoria: "Eletrônicos", preco: 149.9, precoAnterior: 219.9, loja: "Loja Exemplo", emoji: "⌚", link: "", exemplo: true },
  { nome: "Air Fryer (produto de exemplo)", categoria: "Casa e Cozinha", preco: 299.9, precoAnterior: 399.9, loja: "Loja Exemplo", emoji: "🍟", link: "", exemplo: true },
  { nome: "Jogo de Panelas (produto de exemplo)", categoria: "Casa e Cozinha", preco: 189.9, loja: "Loja Exemplo", emoji: "🍲", link: "", exemplo: true },
  { nome: "Vestido Casual (produto de exemplo)", categoria: "Moda", preco: 69.9, precoAnterior: 99.9, loja: "Loja Exemplo", emoji: "👗", link: "", exemplo: true },
  { nome: "Kit Skincare (produto de exemplo)", categoria: "Beleza", preco: 59.9, precoAnterior: 89.9, loja: "Loja Exemplo", emoji: "🧴", link: "", exemplo: true },
  { nome: "Tênis Esportivo (produto de exemplo)", categoria: "Calçados", preco: 129.9, precoAnterior: 199.9, loja: "Loja Exemplo", emoji: "👟", link: "", exemplo: true },
  { nome: "Brinquedo Educativo (produto de exemplo)", categoria: "Infantil", preco: 49.9, loja: "Loja Exemplo", emoji: "🧸", link: "", exemplo: true }
];
