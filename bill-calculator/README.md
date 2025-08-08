# Bill Calculator

A robust JavaScript function for calculating restaurant/retail bills with support for discounts, taxes, and multiple items.

## 🧾 Features

- **Multiple Item Support**: Process bills with multiple menu items
- **Flexible Discounts**: Support for both percentage and fixed-rate discounts
- **Tax Calculation**: Apply taxes after discounts (percentage and fixed-rate)
- **Price Precision**: Automatic rounding for accurate financial calculations
- **Detailed Breakdown**: Returns both total amount and itemized bill details
- **Menu Integration**: Works with menu data structure for item lookup

## 📋 Function Signature

```javascript
calculateBill(bill) -> [totalBillAmount, billItems]
```

### Parameters

- `bill` (Object): Bill object containing:
  - `billItems` (Array): Array of bill items with:
    - `id`: Menu item ID
    - `quantity`: Number of items ordered
    - `discount`: Discount object with `rate` and `isInPercent` properties

### Returns

- `totalBillAmount` (String): Total bill amount formatted to 2 decimal places
- `billItems` (Array): Array of formatted strings showing item breakdown

## 🎯 Usage Example

```javascript
// Sample menu data structure
const menu = [
  {
    id: 1,
    itemName: "Burger",
    rate: 12.99,
    taxes: [
      { rate: 10, isInPercent: true }, // 10% tax
      { rate: 2, isInPercent: false }  // $2 fixed tax
    ]
  },
  {
    id: 2,
    itemName: "Pizza",
    rate: 18.50,
    taxes: [
      { rate: 8, isInPercent: true }   // 8% tax
    ]
  }
];

// Sample bill
const bill = {
  billItems: [
    {
      id: 1,
      quantity: 2,
      discount: { rate: 10, isInPercent: true } // 10% discount
    },
    {
      id: 2,
      quantity: 1,
      discount: { rate: 5, isInPercent: false } // $5 discount
    }
  ]
};

// Calculate the bill
const [total, items] = calculateBill(bill);

console.log('Total:', total);
console.log('Items:', items);
// Output:
// Total: 42.98
// Items: ["Burger@13 x 2 = 26.60", "Pizza@19 x 1 = 16.38"]
```

## 💰 Calculation Process

1. **Base Price**: Round menu item rate to nearest whole number
2. **Apply Discount**: Subtract discount from base price
3. **Apply Taxes**: Add taxes to discounted price
4. **Calculate Item Total**: Multiply by quantity
5. **Sum All Items**: Add all item totals for final bill

## 🔢 Calculation Formula

```
For each item:
discountedPrice = basePrice - discount
taxedPrice = discountedPrice + taxes
itemTotal = taxedPrice × quantity

totalBill = sum(all itemTotals)
```

## 📊 Data Structure Requirements

### Menu Item Structure
```javascript
{
  id: Number,           // Unique identifier
  itemName: String,     // Display name
  rate: Number,         // Base price
  taxes: [              // Array of tax objects
    {
      rate: Number,     // Tax amount or percentage
      isInPercent: Boolean  // true for %, false for fixed amount
    }
  ]
}
```

### Bill Item Structure
```javascript
{
  id: Number,           // Menu item ID reference
  quantity: Number,     // Number of items
  discount: {
    rate: Number,       // Discount amount or percentage
    isInPercent: Boolean    // true for %, false for fixed amount
  }
}
```

## 🚀 Integration

### Browser Usage
```html
<script src="calculateBill.js"></script>
<script>
  // Your menu and bill data
  const result = calculateBill(yourBill);
</script>
```

### Node.js Usage
```javascript
const calculateBill = require('./calculateBill');

// Your calculation logic
const result = calculateBill(yourBill);
```

## 🎨 Features

- **Precision Handling**: All monetary calculations rounded to 2 decimal places
- **Flexible Discounts**: Support for both percentage and fixed discounts
- **Tax After Discount**: Industry-standard tax calculation on discounted prices
- **Detailed Output**: Both summary total and itemized breakdown
- **Error Resilient**: Gracefully handles missing menu items

## 📝 Notes

- Base prices are rounded to whole numbers before calculations
- Taxes are applied to the discounted price (not the original price)
- Final amounts are formatted to exactly 2 decimal places
- Missing menu items are silently skipped

## 🔧 Requirements

- JavaScript ES6+ (for arrow functions and const/let)
- Access to `menu` array in global scope

## 📱 Use Cases

- Restaurant POS systems
- E-commerce checkout calculators
- Invoice generation systems
- Receipt printing applications
- Tax calculation tools

---

**Built for accurate financial calculations in JavaScript applications** 💼
