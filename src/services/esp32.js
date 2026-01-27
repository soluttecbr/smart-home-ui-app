const ESP32_BASE_URL = "http://192.168.0.111";

export async function setRelay({ id, state }) {
  const url = `${ESP32_BASE_URL}/relay?id=${id}&state=${state}`;
  console.log("➡️ Enviando para ESP32:", url);

  try {
    const response = await fetch(url);

    console.log("⬅️ Status HTTP:", response.status);

    if (!response.ok) {
      throw new Error("Resposta inválida do ESP32");
    }

    const text = await response.text();
    console.log("⬅️ Resposta ESP32:", text);

    return true;
  } catch (error) {
    console.error("❌ Erro comunicação ESP32:", error);
    return false;
  }
}
