import axios from 'axios'

const url = 'https://enterlot-parking-app-backend.herokuapp.com/carparks'

const getAll = () => {
    const req = axios.get(url)
    return req.then((res) => res.data)
}

export default { getAll }