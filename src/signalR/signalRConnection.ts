import * as signalR from "@microsoft/signalr";

const CHAT_HUB_URL = 'https://localhost:5001/chathub'; // Thay thế bằng URL Hub của bạn
const token = localStorage.getItem("access_token");


export const connection = new signalR.HubConnectionBuilder()
  .withUrl(CHAT_HUB_URL, { accessTokenFactory: () => token || "" }) // URL backend
  .withAutomaticReconnect()
  .build();
