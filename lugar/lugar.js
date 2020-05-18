const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': 'c23933950emsh1ef584608ff54cdp1b2269jsn5ed224a4638d' }
    });

    const respuesta = await instance.get();
    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${direccion}`);
    }

    const data = respuesta.data.Results[0];
    const nombre = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        nombre,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}