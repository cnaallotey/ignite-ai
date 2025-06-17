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
        :data-cell-id="cell.id"
        @click="() => handleCellClick(cell)"
      ></div>
    </div>
</template>
  
<script setup>
  
  // Props if needed
  const props = defineProps({
    initialRows: {
      type: Number,
      default: 10
    },
    initialColumns: {
      type: Number,
      default: 20
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
  const visibleCells = ref([]);

  const activeCell = ref(1)
  const activeYellowCell = ref(0)
  
  // Computed styles
  const gridContainerStyle = computed(() => ({
    display: 'grid',
    gridTemplateRows: `repeat(${rows.value}, 1fr)`,
    gridTemplateColumns: `repeat(${columns.value}, 1fr)`,
    willChange: 'transform'
  }));
  
  // Methods
  const generateGrid = () => {
    cells.value = [];
    const totalCells = rows.value * columns.value;
    
    // Only generate visible cells
    for (let i = 0; i < totalCells; i++) {
      const row = Math.floor(i / columns.value) + 1;
      const col = (i % columns.value) + 1;
      
      cells.value.push({
        row,
        col,
        color: cellColor.value,
        id: i
      });
    }
  };
  
  const handleCellClick = (cell) => {
    if (!props.canHover) return;
    console.log(`Cell [${cell.row}, ${cell.col}] clicked!`);
  };
  
  // Use Intersection Observer to track visible cells
  const observeCells = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cellId = entry.target.dataset.cellId;
          if (!visibleCells.value.includes(cellId)) {
            visibleCells.value.push(cellId);
          }
        }
      });
    }, {
      threshold: 0.1
    });

    cells.value.forEach(cell => {
      const element = document.querySelector(`[data-cell-id="${cell.id}"]`);
      if (element) {
        observer.observe(element);
      }
    });
  };
  
  // Initialize grid on component mount
  onMounted(() => {
    generateGrid();
    observeCells();
  });
  
  // Clean up observer on unmount
  onUnmounted(() => {
    const observer = new IntersectionObserver(() => {});
    observer.disconnect();
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