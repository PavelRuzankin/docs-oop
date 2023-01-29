import { Component, FC, PureComponent, ReactNode } from "react"
import { ControlWrapper } from "../../common/styled"
import { StyledLabel, StyledRadio } from "./align-text-control.styled"
import { AlignText } from "./align-text-control.types"

import { ReactComponent as AlignCenterIcon } from "./assets/align-center.svg"
import { ReactComponent as AlignJustifyIcon } from "./assets/align-justify.svg"
import { ReactComponent as AlignLeftIcon } from "./assets/align-left.svg"
import { ReactComponent as AlignRightIcon } from "./assets/align-right.svg"

type AlignTextControlProps = {
  onChange: (id: AlignText) => void
  value: AlignText
}

type RadioProps = {
  id: AlignText,
  activeId: AlignText
  children: ReactNode
  onChange: (id: AlignText) => void
}

export class Radio extends Component<RadioProps> {
  render() {
    return (
      <>
        <StyledRadio 
          onChange={() => this.props.onChange(this.props.id)} 
          type="radio" 
          value={this.props.id} 
          id={this.props.id}
          checked={this.props.activeId === this.props.id}
        />
        <StyledLabel htmlFor={this.props.id}>
          {this.props.children}
        </StyledLabel>
      </>
    )
  }
}

export class AlignTextControl extends PureComponent<AlignTextControlProps> {
  render() {
    return (
      <ControlWrapper>
        <Radio 
          id={AlignText.Start} 
          activeId={this.props.value}
          onChange={this.props.onChange}
          >
          <AlignLeftIcon />
        </Radio>
        <Radio 
          id={AlignText.Center} 
          activeId={this.props.value}
          onChange={this.props.onChange}
          >
          <AlignCenterIcon />
        </Radio>
        <Radio 
          id={AlignText.End} 
          activeId={this.props.value}
          onChange={this.props.onChange}
          >
          <AlignRightIcon />
        </Radio>
        <Radio 
          id={AlignText.Justify} 
          activeId={this.props.value}
          onChange={this.props.onChange}
          >
          <AlignJustifyIcon />
        </Radio>
      </ControlWrapper>
    )
  }
}