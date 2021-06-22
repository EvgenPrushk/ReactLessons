import PropTypes from "prop-types";
import { forwardRef } from "react";

const TableCell = forwardRef((props, ref) => {
  const { children, onClick, style = {}, ...datum } = props;
  return (
    <td
      ref={ref}
      style={{
        border: "1px solid gray",
        padding: "10px",
        textAlign: "center",
        ...style,
      }}
      //распространие не раскрытых свойств onClick = {datum.onClick}
      {...datum}
      onClick={onClick}
    >
      {children}
    </td>
  );
});

TableCell.displayName = "TableCell";

export default TableCell;

TableCell.prototype = {
  onClick: PropTypes.func.isRequired,
};

TableCell.defaultProps = {
  onClick() {},
};
