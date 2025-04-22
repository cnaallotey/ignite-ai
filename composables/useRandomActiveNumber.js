/**
 * Randomly changes an active value within a specified range every second
 * @param {number} min - The minimum value (inclusive)
 * @param {number} max - The maximum value (inclusive)
 * @param {function} callback - A callback function that receives the new active value
 * @returns {object} - Control object with start and stop methods
 */
export function randomActiveValueGenerator(min, max, callback) {
    // Validate inputs
    if (typeof min !== 'number' || typeof max !== 'number') {
      throw new Error('Min and max must be numbers');
    }
    
    if (min > max) {
      throw new Error('Min must be less than or equal to max');
    }
    
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function');
    }
    
    let intervalId = null;
    
    // Function to generate a random integer between min and max (inclusive)
    const getRandomValue = () => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    // Function to update the active value
    const updateActiveValue = () => {
      const newValue = getRandomValue();
      callback(newValue);
    };
    
    // Return an object with methods to control the generator
    return {
      // Start the generator
      start: function() {
        if (intervalId === null) {
          // Immediately call once to set initial value
          updateActiveValue();
          // Then set up the interval
          intervalId = setInterval(updateActiveValue, 1000);
          console.log('Random active value generator started');
        } else {
          console.log('Random active value generator is already running');
        }
        return this;
      },
      
      // Stop the generator
      stop: function() {
        if (intervalId !== null) {
          clearInterval(intervalId);
          intervalId = null;
          console.log('Random active value generator stopped');
        } else {
          console.log('Random active value generator is not running');
        }
        return this;
      },
      
      // Check if generator is running
      isRunning: function() {
        return intervalId !== null;
      },
      
      // Get a current random value (without affecting the interval)
      getCurrentValue: function() {
        return getRandomValue();
      }
    };
  }
  
  // Example usage:
  // const generator = randomActiveValueGenerator(1, 10, (value) => {
  //   console.log('Active value changed to:', value);
  //   // You could update your UI or state here
  // });
  // 
  // // Start the generator
  // generator.start();
  // 
  // // Later, stop the generator
  // // setTimeout(() => generator.stop(), 5000);