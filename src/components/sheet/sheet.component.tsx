import { PureComponent } from "react";
import { SettingsData } from "../../types/view-settings-types";
import { StyledSheet } from "./sheet.styled";

type SheetProps = {
  text: string
  settings: SettingsData
  onChange: (value: string) => void
}

export class Sheet extends PureComponent<SheetProps> {
  onSheetChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <StyledSheet 
        value={this.props.text} 
        settings={this.props.settings} 
        onChange={this.onSheetChange}
      />
    )
  }
}