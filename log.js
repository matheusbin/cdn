const slots = [
  {
    "id": "7e0d791f-6099-4e2a-a9ed-ff8522908917",
    "position": 1,
    "status": "ATIVO",
    "session": {
      "id": "4be2a00a-3935-4ab3-aad0-0ee5ac6e7ddd",
      "title": "Bem Mais Premia",
      "position": 30,
      "status": "ATIVO",
      "subsessions": [
        {
          "id": "30019c6e-10e1-4b62-b4e8-7fe2cc869b03",
          "title": "",
          "position": 0,
          "type": "BANNER_CAROUSEL",
          "components": [
            {
              "id": "88ac2dcb-c1ea-4077-9740-c3921b95e553",
              "title": "",
              "position": 0,
              "type": "BANNER",
              "style": "IMAGEM",
              "text": "",
              "description": "",
              "button": "",
              "image": "https://bemmaismobile.s3.amazonaws.com/09c081fe-ca17-4f58-b91c-f2c232f196fe_3a971c8e-e357-4c51-ac70-219dc9cb96fe.jpg",
              "action": {
                "id": "d439bb90-4640-4d59-947e-4aed7a4be61f",
                "title": "",
                "type": "webview_clube_oferta",
                "target": "bem-mais-premia",
                "created": "2024-09-17T17:03:34.137Z",
                "updated": null
              }
            }
          ]
        }
      ]
    }
  },
  {
    "id": "31c4ab34-5347-45e9-92ce-f2c8224b48d8",
    "position": 2,
    "status": "DESATIVADO",
    "session": null
  },
  {
    "id": "0930211a-4aaf-4b08-a2a4-e785abcdc358",
    "position": 3,
    "status": "DESATIVADO",
    "session": null
  },
  {
    "id": "2dfa3c3d-d6cf-46a3-a0dc-24fa529d2bf6",
    "position": 4,
    "status": "DESATIVADO",
    "session": null
  }
]

// response
const res = {
  "statusCode": 400,
  "path": "/api/v1/pharmacygroup/webview?params=bem-mais-premia&cpf=43998658300",
  "timestamp": "2024-09-30T22:56:21.752Z",
  "message": "Bad Request Exception",
  "error": {
    "response": {"message": ["property params should not exist"], "error": "Bad Request", "statusCode": 400},
    "status": 400,
    "options": {},
    "message": "Bad Request Exception",
    "name": "BadRequestException"
  }
}

const url = 'https://api.bmmobileapp.net/api/v1/pharmacygroup/webview?params=bem-mais-premia&cpf=43998658300'

const campaign = [{
  "id": "01750aae-f169-4c37-9650-a54af26f8552",
  "title": "Bem mais premia - outubro",
  "image": "https://bemmaismobile.s3.amazonaws.com/f2febe35-edc7-4cab-9cf8-58b0781c1648_WhatsApp Image 2024-09-17 at 13.32.16.jpeg",
  "action": {"type": "webview_clube_index", "target": "new_parameter"}
}]
