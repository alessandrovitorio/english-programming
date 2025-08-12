# 📝 Boas Práticas de Nomes em Variáveis e Funções

Este projeto foi criado para **ensinar e treinar boas práticas de nomenclatura** em variáveis e funções no JavaScript.
O foco é ajudar estudantes a **pensar em inglês** e ao mesmo tempo melhorar a legibilidade do código.

---

## 🎯 Objetivos

* Aprender a dar nomes claros e descritivos para variáveis e funções.
* Utilizar **inglês** na programação para facilitar o entendimento global.
* Melhorar a manutenção e leitura do código.
* Evitar nomes genéricos ou confusos.

---

## 📌 Regras de Ouro

1. **Use inglês** sempre que possível
   ❌ `nome` → ✅ `name`
   ❌ `idade` → ✅ `age`

2. **Seja específico**
   ❌ `data` → ✅ `userBirthDate`
   ❌ `valor` → ✅ `totalPrice`

3. **Funções começam com verbos**
   ❌ `price` → ✅ `calculatePrice()`
   ❌ `email` → ✅ `sendEmail()`

4. **Variáveis usam substantivos**
   ❌ `getName` → ✅ `userName`
   ❌ `doLogin` → ✅ `loginButton`

5. **Padrão camelCase**

   * Variáveis e funções → `userName`, `sendEmail`
   * Constantes → `MAX_USERS`, `API_URL`

---

## 📚 Exemplos no Código

```javascript
// ✅ Bom exemplo
let userName = "John Doe"; 
let userAge = 25;
let userEmail = "john.doe@example.com";

function sendWelcomeEmail(email) {
    console.log(`Welcome email sent to ${email}`);
}

function calculateUserDiscount(age) {
    return age > 60 ? 0.2 : 0.1;
}

console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);
console.log(`Discount: ${calculateUserDiscount(userAge) * 100}%`);
sendWelcomeEmail(userEmail);

// ❌ Mau exemplo
let n = "Maria";
let i = 30;
let e = "maria@email.com";

function a(x) {
    console.log("Email enviado para " + x);
}
```

---

## 🚀 Como testar no seu site

Você pode embutir este código em uma tag `<script>` dentro do seu HTML, como no exemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Boas Práticas de Nomes</title>
</head>
<body>
    <h1>Boas Práticas de Nomes em JavaScript</h1>
    <pre>
let userName = "John Doe"; 
let userAge = 25;
let userEmail = "john.doe@example.com";

function sendWelcomeEmail(email) {
    console.log(`Welcome email sent to ${email}`);
}

function calculateUserDiscount(age) {
    return age > 60 ? 0.2 : 0.1;
}

console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);
console.log(`Discount: ${calculateUserDiscount(userAge) * 100}%`);
sendWelcomeEmail(userEmail);
    </pre>
    <script>
        let userName = "John Doe"; 
        let userAge = 25;
        let userEmail = "john.doe@example.com";

        function sendWelcomeEmail(email) {
            console.log(`Welcome email sent to ${email}`);
        }

        function calculateUserDiscount(age) {
            return age > 60 ? 0.2 : 0.1;
        }

        console.log(`Name: ${userName}`);
        console.log(`Age: ${userAge}`);
        console.log(`Discount: ${calculateUserDiscount(userAge) * 100}%`);
        sendWelcomeEmail(userEmail);
    </script>
</body>
</html>
```

---

## 💡 Dicas finais

* Sempre pergunte: *"Se outra pessoa ler meu código, ela entenderá o que isso significa?"*
* Bons nomes ajudam a evitar comentários desnecessários no código.
* Pense no código como um **texto em inglês**, não como uma sequência de siglas e abreviações.

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Sinta-se à vontade para usar, modificar e distribuir este código, desde que mantenha os créditos ao autor original.
