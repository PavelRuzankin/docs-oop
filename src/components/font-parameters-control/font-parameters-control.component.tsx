import { FC, PureComponent } from "react";
import { Box } from "reflexbox/styled-components";

import { ReactComponent as FontSizeIcon } from "./assets/font-size.svg"

import { StyledInput, StyledUnit } from "./font-parameters-control.styled";
import { ControlWrapper, StyledSelect } from "../../common/styled";
import { FontWeight } from "./font-parameters-control.types";

type FontParametersControlProps = {
  fontWeight: FontWeight
  fontSize: number
  onFontWeightChange: (value: FontWeight) => void
  onFontSizeChange: (value: number) => void
}

export class FontParametersControl extends PureComponent<FontParametersControlProps> {
  onFontSizeNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onFontSizeChange(Number(event.target.value))
  }

  onSelectFontWeight = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.onFontWeightChange(event.target.value as FontWeight)
  }

  render() {
    return (
      <ControlWrapper>
        <StyledUnit width={63}>
          <StyledSelect onChange={this.onSelectFontWeight} value={this.props.fontWeight}>
            <option>{FontWeight.Bold}</option>
            <option>{FontWeight.Normal}</option>
            <option>{FontWeight.Italic}</option>
          </StyledSelect>
        </StyledUnit>
        <StyledUnit width={37}>
          <Box mr={10}>
          <FontSizeIcon />
          </Box>
          <StyledInput 
            type="number" 
            value={this.props.fontSize} 
            onChange={this.onFontSizeNumberChange} 
          />
        </StyledUnit>
      </ControlWrapper>
    )
  }
}