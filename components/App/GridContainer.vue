<template>
    <div class="absolute opacity-10 inset-0 h-full" ref="gridContainer" :style="gridContainerStyle">
      <div
        v-for="(cell, index) in cells"
        :key="index"
        class="grid-cell"
        :class="{'!bg-pink-500': index === activeCell, '!bg-yellow-500': index === activeYellowCell, 'hover::!bg-white' : canHover}"
        :style="{
          backgroundColor: cell.color,
          borderColor: borderColor,
          border: `0.2px solid ${borderColor}`
        }"
        @click="() => handleCellClick(cell)"
      ></div>
    </div>
</template>
  
<script setup>
  
  // Props if needed
  const props = defineProps({
    initialRows: {
      type: Number,
      default: 20
    },
    initialColumns: {
      type: Number,
      default: 40
    },
    canHover: {
        type: Boolean,
        default: false
    }
  });
  
  // Reactive state
  const rows = ref(props.initialRows);
  const columns = ref(props.initialColumns);
  const cellColor = ref('transparent');
  const borderColor = ref('#fff');
  const cells = ref([]);

  const activeCell = ref(1)
  const activeYellowCell = ref(0)
  
  // Computed styles
  const gridContainerStyle = computed(() => ({
    display: 'grid',
    gridTemplateRows: `repeat(${rows.value}, 1fr)`,
    gridTemplateColumns: `repeat(${columns.value}, 1fr)`
  }));
  
  // Methods
  const generateGrid = () => {
    cells.value = [];
    
    for (let r = 0; r < rows.value; r++) {
      for (let c = 0; c < columns.value; c++) {
        cells.value.push({
          row: r + 1,
          col: c + 1,
          color: cellColor.value
        });
      }
    }
  };
  
  const handleCellClick = (cell) => {
    console.log(`Cell [${cell.row}, ${cell.col}] clicked!`);
    // Implement your cell click logic here
  };
  
  // Initialize grid on component mount
  onMounted(() => {
    generateGrid();
  });
  
  // Expose functions or values if needed
  defineExpose({
    generateGrid,
    rows,
    columns
  });

  onMounted(()=>{
    setInterval(()=>{
        activeCell.value = Math.floor(Math.random() * (cells.value.length) );
        activeYellowCell.value = Math.floor(Math.random() * (cells.value.length));
    }, 600)
  })
  </script>
  
  <style scoped>
  .grid-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
  }
  
  .grid-cell:hover {
    opacity: 0.8;
  }
  </style>