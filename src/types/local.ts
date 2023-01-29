import { SettingsData } from "./view-settings-types";

export interface LocalManager {
  settings: SettingsData,
  text: string
  saveSettings: (data: SettingsData) => void
  saveText: (text: string) => void
}