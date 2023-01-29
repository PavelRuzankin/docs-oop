import { PureComponent } from "react"

import { Box } from "reflexbox/styled-components"

import { SettingsData } from "../../types/view-settings-types"

import { SideBar, Title } from "./settings.styled"
import { Color, SelectColor } from "../select-color" 
import { AlignText, AlignTextControl } from "../align-text-control"
import { FontFamily, SelectFont } from "../select-font"
import { TextFormatControl } from "../text-format-control/text-format-control.component"
import { FontParametersControl, FontWeight } from "../font-parameters-control"
import { Button } from "../button"

type SettingsProps = {
  initial: SettingsData,
  onSubmit: (data: SettingsData) => void
}

export class Settings extends PureComponent<SettingsProps> {
  state: SettingsData

  constructor(props: SettingsProps) {
    super(props)
    this.state = props.initial
  }

  setFontFamily = (fontFamily: FontFamily) => this.setState({ fontFamily })
  setFontWeight = (fontWeight: FontWeight) => this.setState({ fontWeight })
  setFontSize = (fontSize: number) => this.setState({ fontSize })
  setColor = (color: Color) => this.setState({ color })
  setLetterSpacing = (letterSpacing: number) => this.setState({ letterSpacing })
  setLineHeight = (lineHeight: number) => this.setState({ lineHeight })
  setAlignText = (alignText: AlignText) => this.setState({ alignText })
  handleSubmit = () => this.props.onSubmit(this.state)
  
  render() {
    return (
      <SideBar>
        <Title>TEXT</Title>
        <Box mt={10}>
          <SelectFont value={this.state.fontFamily} onChange={this.setFontFamily} />
        </Box>
        <Box mt={10}>
          <FontParametersControl 
            fontWeight={this.state.fontWeight}
            fontSize={this.state.fontSize}
            onFontWeightChange={this.setFontWeight}
            onFontSizeChange={this.setFontSize}
          />
        </Box>
        <Box mt={10}>
          <SelectColor value={this.state.color} onChange={this.setColor} />
        </Box>
        <Box mt={10}>
          <TextFormatControl 
            onLineHeightChange={this.setLineHeight}
            onLetterSpacingChange={this.setLetterSpacing}
            letterSpacing={this.state.letterSpacing}
            lineHeight={this.state.lineHeight}
          />
        </Box>
        <Box mt={10}>
          <AlignTextControl value={this.state.alignText} onChange={this.setAlignText} />
        </Box>
        <Box mt={10}>
          <Button onClick={this.handleSubmit}>Apply Changes</Button>
        </Box>
      </SideBar>
    )
  }
}