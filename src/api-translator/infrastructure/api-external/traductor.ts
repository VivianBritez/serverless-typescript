import { translate } from '@vitalets/google-translate-api';

export async function translatedData(objeto, idiomaDestino) {
    const objetoTraducido = {};

    for (const [key, value] of Object.entries(objeto)) {
        try {
            const resultado = await translate(key, { to: idiomaDestino });
            objetoTraducido[resultado.text] = value
        } catch (error) {
            console.error(`Error al traducir '${key}':`, error);
            objetoTraducido[key] = value; 
        }
    }
    
    return objetoTraducido;

}

