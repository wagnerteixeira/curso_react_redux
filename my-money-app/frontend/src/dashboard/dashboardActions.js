import axios from 'axios'

const BASE_URL = 'http://DESKTOP-D8G4ILP:3003/api'//'http://localhost:3003/api'

export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}