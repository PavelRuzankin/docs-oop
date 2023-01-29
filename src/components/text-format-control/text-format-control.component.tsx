import { Component, PureComponent } from "react";

import { ReactComponent as LineHeightIcon } from "./assets/line-height.svg"
import { ReactComponent as LetterSpacingIcon } from "./assets/letter-spacing.svg"

import { ControlWrapper } from "../../common/styled";
import { StyledInput, StyledLabel, StyledUnit } from "./text-format-control.styled";
import { Box } from "reflexbox/styled-components";

type TextFormatControlProps = {
  lineHeight: number
  letterSpacing: number
  onLineHeightChange: (value: number) => void
  onLetterSpacingChange: (value: number) => void
}

type UnitProps = {
  onChange: (value: number) => void 
  icon: React.ReactNode
  value: number
  label?: string
}

class Unit extends Component<UnitProps> {
  onNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(Number(event.target.value))
  }

  render() {
    return (
      <StyledUnit>
        <Box mr={10}>
        {this.props.icon}
        </Box>
        <StyledInput 
          type="number" 
          value={this.props.value} 
          onChange={this.onNumberChange} 
        />
        {!!this.props.label && <StyledLabel>{this.props.label}</StyledLabel>}
      </StyledUnit>
    )
  }
}

export class TextFormatControl extends PureComponent<TextFormatControlProps> {
  render() {
    return (
      <ControlWrapper>
        <Unit 
          value={this.props.lineHeight}
          onChange={this.props.onLineHeightChange}
          icon={<LineHeightIcon/>}
          label={'%'}
        />
        <Unit 
          value={this.props.letterSpacing}
          onChange={this.props.onLetterSpacingChange}
          icon={<LetterSpacingIcon/>}
          label={'px'}
        />    
      </ControlWrapper>
    )
  }
}