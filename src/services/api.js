import axios from 'axios';

// 10.0.2.2 Android Studio - Emulator
// 10.0.3.4 - Emulator Genymotion
const api = axios.create({
    baseURL: 'http://10.0.3.2:3000'
});

export default api;