# Cadastro de Usuário - Sistema de Validação

Equipe: Andressa Rodrigues, Jhessica Alves, Laíza Silva e Victor Moy

## Objetivo

Este sistema permite realizar o cadastro de um usuário com os seguintes campos:

- Nome
- Data de Nascimento
- E-mail
- CPF
- Telefone

O sistema valida esses campos antes de permitir o envio do formulário. Em caso de sucesso, as informações do usuário são exibidas no console, e uma mensagem de confirmação é apresentada na tela.

## Requisitos Funcionais

### Cadastro de Usuário

O usuário deve preencher os seguintes campos:

- **Nome**: O nome deve ter no mínimo 3 caracteres.
- **Data de Nascimento**: A data não pode ser maior que a data atual.
- **E-mail**: O e-mail deve estar no formato `exemplo@dominio.com`.
- **CPF**: O CPF deve ser válido, com os dois dígitos verificadores corretos.
- **Telefone**: O telefone deve estar no formato `(xx)xxxxx-xxxx` ou `(xx)xxxx-xxxx`.

### Validação de Campos

O sistema realiza a validação dos seguintes campos:

- **CPF**: O sistema verifica se o CPF inserido é válido, com cálculo dos dois dígitos verificadores.
- **Telefone**: O telefone deve estar no formato correto `(xx)xxxxx-xxxx` ou `(xx)xxxx-xxxx`.
- **Data de Nascimento**: A data não pode ser maior que a data atual.
- **Nome**: O nome precisa ter no mínimo 3 caracteres.

### Mensagens de Feedback

Após o envio do formulário, o sistema exibirá:

- **Mensagem de sucesso**: Se o cadastro for bem-sucedido, uma mensagem de sucesso será exibida na tela.
- **Mensagem de erro**: Se houver erro nas validações, uma mensagem de erro será exibida indicando o campo inválido.

### Armazenamento

Não há armazenamento de dados no backend. Os dados preenchidos são exibidos no console para visualização do usuário.

## Requisitos Não Funcionais

### Usabilidade

O formulário deve ser simples, claro e responsivo, garantindo uma boa experiência para o usuário em dispositivos móveis e desktop.

### Desempenho

O formulário e suas validações devem ser executados rapidamente, sem sobrecarregar a interface do usuário.

### Segurança

Os dados do usuário não são enviados para um servidor, portanto, não há riscos de exposição de dados sensíveis.

---

## Plano de Testes

### Caso de Teste 1: Cadastro Válido

- **Objetivo**: Testar o preenchimento completo e correto do formulário.
- **Passos**:
  1. Preencher o formulário com as seguintes informações:
     - Nome: "João Silva"
     - Data de Nascimento: "1990-05-15"
     - E-mail: "joao@exemplo.com"
     - CPF: "123.456.789-09"
     - Telefone: "(11)91234-5678"
  2. Submeter o formulário.
- **Resultado Esperado**: O sistema exibe uma mensagem de sucesso no console: "Cadastro realizado com sucesso!", e a mensagem de sucesso é mostrada na tela.

### Caso de Teste 2: CPF Inválido

- **Objetivo**: Validar se o sistema rejeita um CPF inválido.
- **Passos**:
  1. Preencher o formulário com as seguintes informações:
     - Nome: "Maria Souza"
     - Data de Nascimento: "1985-02-20"
     - E-mail: "maria@exemplo.com"
     - CPF: "123.456.789-00" (CPF inválido)
     - Telefone: "(21)98765-4321"
  2. Submeter o formulário.
- **Resultado Esperado**: O sistema exibe uma mensagem de erro: "CPF inválido" na tela e não envia os dados.

### Caso de Teste 3: Data de Nascimento Futura

- **Objetivo**: Validar se o sistema rejeita uma data de nascimento maior que a data atual.
- **Passos**:
  1. Preencher o formulário com as seguintes informações:
     - Nome: "Carlos Oliveira"
     - Data de Nascimento: "2025-01-01" (data futura)
     - E-mail: "carlos@exemplo.com"
     - CPF: "987.654.321-00"
     - Telefone: "(31)99654-3210"
  2. Submeter o formulário.
- **Resultado Esperado**: O sistema exibe uma mensagem de erro: "Data de nascimento inválida ou futura." na tela e não envia os dados.

---
