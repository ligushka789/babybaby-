const petrik = document.getElementById("petrik")
const kyoto = document.getElementById("kyoto")
const seattle = document.getElementById("seattle")

async function Api () {
    const respons_petrik = await fetch ('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current=temperature_2m&hourly=temperature_2m')
    const respons_kyoto = await fetch ('https://api.open-meteo.com/v1/forecast?latitude=35.0211&longitude=135.7538&current=temperature_2m&hourly=temperature_2m')
    const respons_seattle = await fetch ('https://api.open-meteo.com/v1/forecast?latitude=47.6062&longitude=-122.3321&current=temperature_2m&hourly=temperature_2m')
    const data_petrik = await respons_petrik.json()
    const data_kyoto = await respons_kyoto.json()
    const data_seattle = await respons_seattle.json()
    return [data_petrik, data_kyoto, data_seattle]
}

async function output () {
    try {
        let out = await Api()
        console.log(out)
        petrik.textContent = `Air Temperature: ${out [0].current.temperature_2m} \u00B0C `
        kyoto.textContent = `Air Temperature: ${out [1].current.temperature_2m} \u00B0C `
        seattle.textContent = `Air Temperature: ${out [2].current.temperature_2m} \u00B0C `
    }
    catch (error) {
        console.log(error)
    }
    finally {
        setTimeout(output,10000)
    }
}

output()
