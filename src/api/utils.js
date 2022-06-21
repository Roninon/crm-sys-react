//  10.83.97.219:5000
export async function load(page) {
    let result = await fetch(page)
    return JSON.parse(
        await result.text()
    )
}

export function genArgs(args) {
    const encodeArgPair = key => 
        encodeURIComponent(key) + '=' + encodeURIComponent(args[key])

    return Object.keys(args)
        .map(encodeArgPair)
        .join('&')
}

export function genApiUrl(method, args) {
    return method + '?' + genArgs(args)
}




export function loadContextual(url, args = {}) {
    return load(
        genApiUrl('http://localhost:3000/' + url, { ...getContext(), ...args })
    )
}


export const getContext = () => {
    
    return {
        token: localStorage.getItem('token')
    }

}

