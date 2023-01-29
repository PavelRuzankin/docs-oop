import { PureComponent } from "react"
import { SelectWrapper, StyledSelect } from "../../common/styled"
import { FontFamily } from "./select-font.types"

export type SelectFontProps = {
  onChange: (value: FontFamily) => void 
  value: string
}

export class SelectFont extends PureComponent<SelectFontProps> {
  onFontChage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.onChange(event.target.value as FontFamily)
  }

  render() {
    return (
      <SelectWrapper>
        <StyledSelect onChange={this.onFontChage} value={this.props.value}>
          <option id={FontFamily.Roboto} >{FontFamily.Roboto}</option>
          <option id={FontFamily.Raleway} >{FontFamily.Raleway}</option>
          <option id={FontFamily.Oswald} >{FontFamily.Oswald}</option>
        </StyledSelect>
      </SelectWrapper>
    )
  }
}