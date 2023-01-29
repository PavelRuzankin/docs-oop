import { SETTINGS_LOCAL_STORAGE_KEY, TEXT_LOCAL_STORAGE_KEY } from "../constants/local"
import { DEFAULT_TEXT, INITIAL_VIEW_SETTINGS } from "../constants/settings"
import { LocalManager } from "../types/local"
import { SettingsData } from "../types/view-settings-types"

export class LocalStateManager implements LocalManager {

  static instance: LocalStateManager

  static getInstance() {
    if(!LocalStateManager.instance) {
      LocalStateManager.instance = new LocalStateManager()
    }

    return LocalStateManager.instance
  }

  public settings: SettingsData
  public text: string

  private constructor() {
    this.text = this.uploadText()
    this.settings = this.uploadSettings()
  }

  private uploadText() {
    const data = localStorage.getItem(TEXT_LOCAL_STORAGE_KEY)
  
    if(!data) {
      return DEFAULT_TEXT
    }
  
    try {
      const { text } = JSON.parse(data) as { text: string }
      return text
    } catch(e) {
      console.error(e);
      return DEFAULT_TEXT
    }
  }

  private uploadSettings() {
    const settings = localStorage.getItem(SETTINGS_LOCAL_STORAGE_KEY)
  
    if(!settings) { 
      return INITIAL_VIEW_SETTINGS
    }
  
    try {
      return JSON.parse(settings) as SettingsData
    } catch(e) {
      console.error(e);
      return INITIAL_VIEW_SETTINGS
    }
  }
  
  public saveSettings(settings: SettingsData) {
    localStorage.setItem(SETTINGS_LOCAL_STORAGE_KEY, JSON.stringify(settings))
  }
  
  public saveText(text: string) {
    localStorage.setItem(TEXT_LOCAL_STORAGE_KEY, JSON.stringify({ text }))
  }
}