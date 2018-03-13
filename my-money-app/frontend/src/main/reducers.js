import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCicleReducer from '../billingCycle/billingCyclesReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCicleReducer,
    form: formReducer
})

export default rootReducer