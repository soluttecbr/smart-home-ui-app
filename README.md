# 🏠 Smart Home UI – React + ESP32

Interface web para **acionamento e monitoramento de dispositivos IoT**, desenvolvida em **React.js (Vite)** e integrada a um **ESP32** via **HTTP REST**, com foco em **automação residencial**.

Este projeto permite controlar relés (luzes, ventiladores, tomadas, etc.) por meio de uma interface moderna, responsiva e escalável, pensada para uso em rede local (LAN).

---

## ✨ Funcionalidades

* ✅ Interface web moderna (Mobile First)
* ✅ Acionamento de relés via ESP32
* ✅ Status visual de dispositivos (Ligado / Desligado)
* ✅ Arquitetura componentizada em React
* ✅ Comunicação HTTP REST
* ✅ Preparado para expansão (WebSocket, MQTT, PWA)
* ✅ Deploy no GitHub Pages (UI)

---

## 🧠 Arquitetura do Projeto

```
┌─────────────┐        HTTP        ┌──────────────┐
│  React App  │ ───────────────▶ │     ESP32     │
│ (Frontend)  │ ◀─────────────── │ (Relés / IoT) │
└─────────────┘                   └──────────────┘
```

> ⚠️ **Observação:**
> O GitHub Pages hospeda apenas a interface.
> A comunicação com o ESP32 funciona em **rede local (LAN)**.

---

## 🧩 Estrutura de Pastas

```txt
src/
├── components/
│   ├── Header.jsx        # Cabeçalho com nome do local e botão adicionar
│   ├── DeviceCard.jsx    # Card do dispositivo (liga/desliga)
│   └── Footer.jsx        # Menu de navegação
├── data/
│   └── devices.js        # Lista de dispositivos
├── pages/
│   └── Home.jsx          # Página principal
├── services/
│   └── esp32.js          # Comunicação com ESP32
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🔌 Comunicação com o ESP32

### Endpoint de acionamento

```http
GET /relay?id=2&state=1
```

### Parâmetros

| Parâmetro | Tipo   | Descrição                    |
| --------- | ------ | ---------------------------- |
| `id`      | number | ID do relé                   |
| `state`   | number | `1` = Ligar / `0` = Desligar |

### Resposta (JSON)

```json
{
  "id": 2,
  "state": true
}
```

---

## 🧪 Exemplo de Uso

Ligar o relé 2:

```
http://IPLOCALESP32/relay?id=2&state=1
```

Desligar o relé 2:

```
http://IPLOCALESP32/relay?id=2&state=0
```

---

## 🖥️ Frontend (React)

### Tecnologias utilizadas

* ⚛️ React.js
* ⚡ Vite
* 🎨 CSS puro (layout customizado)
* 🌐 Fetch API

### Executar localmente

```bash
npm install
npm run dev
```

Acesse:

```
http://localhost:5173
```

---

## 🌍 Deploy (GitHub Pages)

O projeto está configurado para deploy automático usando `gh-pages`.

```bash
npm run build
npm run deploy
```

URL do projeto:

```
https://soluttecbr.github.io/smart-home-ui-app/
```

> ⚠️ A comunicação com o ESP32 **não funciona diretamente no GitHub Pages** devido a:
>
> * HTTPS obrigatório
> * IP local (192.168.x.x)
> * Restrições de CORS / Mixed Content

---

## ⚠️ Limitações Atuais

* 🔒 Comunicação apenas em rede local
* 🔄 Estado inicial ainda não sincronizado automaticamente
* 📡 Sem WebSocket (atualização em tempo real)

---

## 🚀 Próximas Implementações (Roadmap)

* [ ] Endpoint `/status` no ESP32
* [ ] Sincronizar estado ao abrir o app
* [ ] Comunicação via WebSocket
* [ ] Detecção de dispositivo offline
* [ ] Dashboard por cômodos
* [ ] Transformar em PWA (App instalável)
* [ ] Integração MQTT

---

## 🔐 Segurança

Este projeto foi desenvolvido para **ambientes locais**.
Para uso em produção, recomenda-se:

* HTTPS no ESP32
* Autenticação
* Backend intermediário
* Firewall / VLAN IoT

---

## 👨‍💻 Autor

**SoluttecBR**
🔧 Automação Residencial • IoT • Smart Home
📺 Conteúdos técnicos e projetos práticos

---

## 📄 Licença

Este projeto está sob a licença **MIT**.
Sinta-se livre para usar, estudar e modificar.

