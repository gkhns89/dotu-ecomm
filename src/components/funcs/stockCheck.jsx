export const StockCheck = (stock) => {
  if (stock === 0) {
    return <span>Out of stock</span>;
  }
  if (stock <= 5) {
    return <span>Low stock</span>;
  } else {
    return <span>In stock</span>;
  }
};
