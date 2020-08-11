<!-- VARS -->

[logo-url]: https://camo.githubusercontent.com/74c8681f6d4521903b63e79173a72f0b849243be/68747470733a2f2f692e696d6775722e636f6d2f73356c546465502e706e67
[web-badge]: https://img.shields.io/badge/WEB-6842C2?logo=typescript&logoColor=47248F&label=Proffy&labelColor=6842C2&style=for-the-badge
[backend-badge]: https://img.shields.io/badge/BACKEND-04D361?logo=Node.js&logoColor=03A14A&label=Proffy&labelColor=04D361&style=for-the-badge
[mobile-badge]: https://img.shields.io/badge/MOBILE-494949?logo=react&logoColor=161616&label=Proffy&labelColor=494949&style=for-the-badge

<!-- VARS -->

<div align="center">

# ![Proffy][logo-url]

### Plataforma de estudos online, onde é possivel conectar alunos com professores.
[![web][web-badge]](#desktop_computer-web)
[![backend][backend-badge]](#globe_with_meridians-server)
[![mobile][mobile-badge]](#iphone-mobile)

![](https://raw.githubusercontent.com/lcassiol/reactjs-proffy/d2520a09b3918bf260cc8f44a731f6be24bf55e3/src/assets/images/landing.svg)

</div>

---
<div align="center">

# :desktop_computer: _**WEB**_
[![LAYOUT WEB](https://img.shields.io/badge/Layout%20Web-black?style=for-the-badge&logo=figma&logoColor=red)](https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web?node-id=27%3A1703)

</div>

### A versão web da aplicação fei desenvolvida usando a metodologia _mobile first_, em que a aplicação é pensada primeiramente para dispositivos mobile, e depois é adaptada para dispositivos desktops.

> Tecnologias 
- [**React**](https://reactjs.org/) 
- [**Typescript**](https://www.typescriptlang.org/)

<img src="https://github.com/lcassiol/reactjs-proffy/blob/master/src/assets/images/screenshots/proffy-web-home.png?raw=true" width="800" />

<img src="https://github.com/lcassiol/reactjs-proffy/blob/master/src/assets/images/screenshots/proffy-web-result-search.png?raw=true" width="400" height="500" /> <img src="https://github.com/lcassiol/reactjs-proffy/blob/master/src/assets/images/screenshots/proffy-web-form.png?raw=true" width="400" height="500" >

## :arrow_forward: **Para rodar o projeto**


```bash
# Clonar o projeto
$ git clone https://github.com/lcassiol/reactjs-proffy.git

# Instalar dependências
$ yarn

# Iniciar servidor de desenvolvimento
$ yarn start
```

> O servidor de desenvolvimento fica aberto por padrão em [`http://localhost:3000`](http://localhost:3000)
> Configurar no arquivo src/services/api.ts a url do backend

Gerar código de produção

```bash
$ yarn build
```

> O código fica salvo em [`build/`](web/build)
