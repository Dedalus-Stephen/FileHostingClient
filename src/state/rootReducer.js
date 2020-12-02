import { combineReducers } from "redux";

import imageContent from './reducers/imageContent'
import textContent from './reducers/textContent'
import authData from './reducers/authData'
import allFilesContent from './reducers/allFilesContent'
import messageContent from './reducers/messageContent'

const rootReducer = combineReducers({imageContent, textContent, authData, allFilesContent, messageContent});

export default rootReducer;