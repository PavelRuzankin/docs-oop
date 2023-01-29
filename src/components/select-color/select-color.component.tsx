import { PureComponent } from "react"
import { SelectWrapper, StyledSelect } from "../../common/styled"
import { Marker } from './select-color.styled'
import { Color } from "./select-color.types"

export type SelectColorProps = {
  onChange: (value: Color) => void
  value: Color
}

export class SelectColor extends PureComponent<SelectColorProps> {
  onColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.onChange(event.target.value as Color)
  }

  render() {
    return (
      <SelectWrapper>
        <Marker color={this.props.value} />
        <StyledSelect onChange={this.onColorChange} value={this.props.value}>
          <option>{Color.Black}</option>
          <option>{Color.Green}</option>
          <option>{Color.Red}</option>
          <option>{Color.Violet}</option>
          <option>{Color.Yellow}</option>
        </StyledSelect>
      </SelectWrapper>
    )
  }
}