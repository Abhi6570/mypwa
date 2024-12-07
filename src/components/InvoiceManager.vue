<template>
  <div>
    <!-- Header with Search Bar -->
    <header
      class="search-bar"
      style="
        max-width: 90%;
        background: white;
        padding: 20px;
        justify-content: center;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      "
    >
      <!-- Search Button -->
      <button @click="onSearch" class="search-btn">🔍</button>

      <!-- Search Input -->
      <input type="text" placeholder="Search... " v-model="searchQuery" />

      <!-- Refresh Button -->
      <button @click="onRefresh">⟳</button>
    </header>

    <!-- Data Display Form -->
    <div v-if="formData.items.length > 0">
      <div
        v-for="(item, index) in formData.items"
        :key="index"
        class="item-form"
      >
        <!-- Item Fields -->
        <div class="form-field">
          <label for="item-code">Item Code:</label>
          <input type="text" id="item-code" v-model="item.name" />
        </div>
        <div class="form-field">
          <label for="item-name">Item Name:</label>
          <input type="text" id="item-name" v-model="item.item_name" />
        </div>
        <div class="form-field">
          <label for="description">Description:</label>
          <textarea id="description" v-model="item.description"></textarea>
        </div>
        <div class="form-field">
          <label for="brand">Brand:</label>
          <input type="text" id="brand" v-model="item.brand" />
        </div>
        <div class="form-field">
          <label for="mrp">MRP:</label>
          <input type="text" id="mrp" v-model="item.rate" />
        </div>
        <div
          class="form-field"
          style="display: flex; justify-content: space-between"
        >
          <div>
            <label for="received-qty">Received QTY:</label>
            <input type="number" id="received-qty" v-model="item.received_qty" />
          </div>
          <div>
            <label for="accepted-qty">Accepted QTY:</label>
            <input type="number" id="accepted-qty" v-model="item.qty" />
          </div>
        </div>
        <div class="form-field">
          <label for="qc-pass">QC Pass:</label>
          <input type="checkbox" id="qc-pass" v-model="item.qc_pass" />
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div
      style="
        text-align: center;
        margin-top: 20px;
        max-width: 90%;
        background-color: white;
        padding: 20px;
        justify-content: center;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      "
    >
      <button
        @click="onSaveData"
        class="action-btn"
        style="height: 35px; width: 150px; background-color: green"
      >
        Save Data
      </button>
      <br />
      <button
        @click="onPrintBarcode"
        class="action-btn"
        style="height: 35px; width: 100%; background-color: green"
      >
        Print Barcode
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      searchQuery: "",
      formData: {
        name: "",
        items: [
          {
            name: "",
            item_name: "",
            description: "",
            brand: "",
            rate: "",
            received_qty: "",
            qty: "",
            qc_pass: false,
          },
        ],
      },
    };
  },
  methods: {
    // Fetch data based on searchQuery
    async onSearch() {
      try {
        if (this.searchQuery.trim()) {
          const response = await axios.get(
            `https://yash.tranqwality.com/api/resource/Purchase Invoice/${this.searchQuery}`,
            {
              headers: {
                Authorization: "token b73c5b96959aa53:1d8250a9d955d9b",
              },
            }
          );

          const fetched = response.data.data;

          this.formData.name = fetched.name || "";
          this.formData.items = fetched.items || [];
        } else {
          console.log("Please enter a valid ID to search.");
        }
      } catch (error) {
        console.error("Error fetching data from Frappe:", error);
      }
    },

    // Save updated data back to the server
    async onSaveData() {
      try {
        if (!this.formData.name) {
          console.error("No Purchase Invoice to update.");
          return;
        }

        const response = await axios.put(
          `https://yash.tranqwality.com/api/resource/Purchase Invoice/${this.formData.name}`,
          { items: this.formData.items },
          {
            headers: {
              Authorization: "token b73c5b96959aa53:1d8250a9d955d9b",
            },
          }
        );

        console.log("Data saved successfully:", response.data);
        alert("Data has been saved successfully.");
      } catch (error) {
        console.error("Error saving data to Frappe:", error);
        alert("Failed to save data. Please try again.");
      }
    },

    // Placeholder for print functionality
    onPrintBarcode() {
      alert("Print Barcode functionality is not yet implemented.");
    },

    // Reset form
    onRefresh() {
      this.formData = {
        name: "",
        items: [
          {
            name: "",
            item_name: "",
            description: "",
            brand: "",
            rate: "",
            received_qty: "",
            qty: "",
            qc_pass: false,
          },
        ],
      };
      this.searchQuery = "";
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.search-bar input {
  width: 85%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-bar button {
  padding: 8px 12px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.data-display {
  max-width: 90%;
  background: white;
  padding: 20px;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.form-field {
  margin-bottom: 15px;
}

.form-field label {
  padding-right: 22px;
  font-size: 14px;
  color: #333;
}

.form-field input,
.form-field textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #555;
}

.item-form {
  margin-top: 20px;
}
</style>
