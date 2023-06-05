# GuardiaPessoal2.0
Este é um projeto em React Native que demonstra o conceito de componentização, utiliza propriedades nos componentes, divide o aplicativo em várias telas e se conecta a um banco de dados. Ele também implementa as funções de CREATE, READ e DELETE com o banco de dados.

## Sobre o objetivo do app
Um Aplicativo móvel de segurança pessoal da mulher que tem como objetivo diminuir taxas de agressões contra as mulheres,fazendo com que elas se sintam seguras ao andar na rua com o app em execusão com o uso dos recursos disponíveis. o app tem como objetivo de ser de fácil usuabilidade permitindo que os usuários utilizem de forma segura.


- Componentização
O aplicativo está estruturado seguindo o princípio de componentização do React Native. Cada funcionalidade ou elemento da interface é encapsulado em um componente reutilizável. Isso facilita a manutenção e o desenvolvimento do aplicativo, além de torná-lo mais modular e escalável.

Propriedades
As propriedades são utilizadas nos componentes para passar dados de um componente pai para um componente filho. Isso permite a comunicação entre os componentes e a reutilização de lógica e interface.

Divisão em várias telas
O aplicativo é dividido em várias telas para melhor organização e fluxo de navegação. Cada tela representa uma funcionalidade ou exibição específica e pode ser acessada através de navegação entre as telas.

Conexão com o banco de dados
O aplicativo se conecta a um banco de dados para persistência dos dados. A conexão com o banco de dados é estabelecida utilizando uma biblioteca apropriada, como o Axios, e as solicitações são feitas através de APIs para realizar operações de CREATE, READ e DELETE.

Função de CREATE
O aplicativo implementa a função de CREATE, que permite a criação de novos registros no banco de dados. Ao preencher um formulário ou fornecer os dados necessários, o usuário pode acionar a função de CREATE, que enviará uma solicitação para o backend para salvar os dados no banco de dados.

Função de READ
O aplicativo implementa a função de READ, que permite a leitura dos registros existentes no banco de dados. Ao solicitar a exibição de uma lista de registros ou detalhes de um registro específico, o aplicativo envia uma solicitação ao backend para obter os dados correspondentes no banco de dados.

Função de DELETE
O aplicativo implementa a função de DELETE, que permite a exclusão de registros do banco de dados. Ao selecionar um registro específico para exclusão, o usuário pode acionar a função de DELETE, que enviará uma solicitação para o backend para remover os dados correspondentes do banco de dados.

Instalação e Execução
Siga as etapas abaixo para instalar e executar o aplicativo:

Clone o repositório para o seu ambiente local.
Instale as dependências do projeto executando o comando npm install ou yarn install.
Inicie o aplicativo executando o comando npm start ou yarn start.
Abra o aplicativo em um emulador ou dispositivo físico para visualizá-lo.
Certifique-se de configurar corretamente o ambiente de desenvolvimento do React Native e o banco de dados antes de executar o aplicativo.
