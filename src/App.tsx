import { Component } from "react"

import { Flex } from 'reflexbox';

import { Settings } from './components/settings/settings.component';
import { Sheet } from './components/sheet/sheet.component';

import { SheetWrapper } from './common/styled';
import { SettingsData } from "./types/view-settings-types";
import { LocalStateManager } from "./utils/LocalStateManager";
import { LocalManager } from "./types/local";
import { debounce } from "./utils/debounce";

type AppState = {
  text: string,
  settings: SettingsData
}

export default class App extends Component {
  private local: LocalManager = LocalStateManager.getInstance()

  state: AppState = {
    text: this.local.text,
    settings: this.local.settings
  }

  changeLocalSettings = debounce((settings: SettingsData) => {
    this.local.saveSettings(settings)
  }, 500)

  changeLocalText = debounce((text: string) => {
    this.local.saveText(text)
  }, 500)

  changeText = (text: string) => {
    this.setState({ text })
    this.changeLocalText(text)
  }

  changeSettings = (settings: SettingsData) => {
    this.setState({ settings })
    this.changeLocalSettings(settings)
  }

  render() {
    return (
      <Flex>
        <SheetWrapper>
          <Sheet 
            text={this.state.text} 
            settings={this.state.settings} 
            onChange={this.changeText} 
          />
        </SheetWrapper>
        <Settings 
          initial={this.state.settings} 
          onSubmit={this.changeSettings} 
        />
      </Flex>
    )
  }
}