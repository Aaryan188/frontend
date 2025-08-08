// Example usage of calculateBill function

// Sample menu data
const menu = [
  {
    id: 1,
    itemName: "Classic Burger",
    rate: 12.99,
    taxes: [
      { rate: 10, isInPercent: true }, // 10% sales tax
      { rate: 2, isInPercent: false }  // $2 service charge
    ]
  },
  {
    id: 2,
    itemName: "Margherita Pizza",
    rate: 18.50,
    taxes: [
      { rate: 8, isInPercent: true }   // 8% sales tax
    ]
  },
  {
    id: 3,
    itemName: "Caesar Salad",
    rate: 9.75,
    taxes: [
      { rate: 5, isInPercent: true },  // 5% sales tax
      { rate: 1.5, isInPercent: false } // $1.50 health tax
    ]
  },
  {
    id: 4,
    itemName: "Chocolate Cake",
    rate: 6.25,
    taxes: [
      { rate: 12, isInPercent: true } // 12% luxury tax
    ]
  }
];

// Sample bills for testing

// Example 1: Simple bill with percentage discounts
const bill1 = {
  billItems: [
    {
      id: 1,
      quantity: 2,
      discount: { rate: 10, isInPercent: true } // 10% discount
    },
    {
      id: 2,
      quantity: 1,
      discount: { rate: 0, isInPercent: true } // No discount
    }
  ]
};

// Example 2: Bill with fixed amount discounts
const bill2 = {
  billItems: [
    {
      id: 3,
      quantity: 3,
      discount: { rate: 5, isInPercent: false } // $5 fixed discount
    },
    {
      id: 4,
      quantity: 2,
      discount: { rate: 15, isInPercent: true } // 15% discount
    }
  ]
};

// Example 3: Large order with mixed discounts
const bill3 = {
  billItems: [
    {
      id: 1,
      quantity: 4,
      discount: { rate: 20, isInPercent: true } // 20% bulk discount
    },
    {
      id: 2,
      quantity: 2,
      discount: { rate: 10, isInPercent: false } // $10 fixed discount
    },
    {
      id: 3,
      quantity: 5,
      discount: { rate: 0, isInPercent: true } // No discount
    },
    {
      id: 4,
      quantity: 1,
      discount: { rate: 25, isInPercent: true } // 25% dessert discount
    }
  ]
};

// Function to run examples
function runExamples() {
  console.log("=== Bill Calculator Examples ===\n");

  // Example 1
  console.log("Example 1: Simple Order");
  const [total1, items1] = calculateBill(bill1);
  console.log("Items ordered:");
  items1.forEach(item => console.log(`  ${item}`));
  console.log(`Total: $${total1}\n`);

  // Example 2
  console.log("Example 2: Fixed Discounts");
  const [total2, items2] = calculateBill(bill2);
  console.log("Items ordered:");
  items2.forEach(item => console.log(`  ${item}`));
  console.log(`Total: $${total2}\n`);

  // Example 3
  console.log("Example 3: Large Mixed Order");
  const [total3, items3] = calculateBill(bill3);
  console.log("Items ordered:");
  items3.forEach(item => console.log(`  ${item}`));
  console.log(`Total: $${total3}\n`);
}

// Run examples if this file is executed directly
if (typeof window !== 'undefined') {
  // Browser environment
  console.log("Bill Calculator loaded. Open browser console and run 'runExamples()' to see examples.");
} else if (typeof module !== 'undefined' && require.main === module) {
  // Node.js environment
  const calculateBill = require('./calculateBill');
  runExamples();
}
