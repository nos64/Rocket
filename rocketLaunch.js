export const speedRange = document.getElementById("ran3");
export const angileRange = document.getElementById("ran4");
export const launchBtn = document.querySelector(".launch-button");
export let rocket = document.querySelector(".rocket");

launchBtn.addEventListener('click', () => {
    if (speedRange.value <= 20 && angileRange.value <= 20){
        rocket.animate([
        { // current position of your rocket
           left: '-430px',
            top: '-450px'
            },
            { //  final position of your rocket
                left: '1000px',
                top: '-300px',
                transform: 'rotate(110deg)'
            }
            ], {
            // timing options
                duration: 8000,
                iterations: 1
            })
        }else if (speedRange.value <= 20 && angileRange.value > 20 && angileRange.value <= 50) {
            rocket.animate([
            { // current position of your rocket
                left: '-430px',
                top: '-450px'
            },
            { //  final position of your rocket
                left: '1200px',
                top: '-700px',
                transform: 'rotate(70deg)'
            }
            ], {
            // timing options
                duration: 8000,
                iterations: 1
            })        
        }else if (speedRange.value <= 20 && angileRange.value > 50 && angileRange.value <= 80) {
            rocket.animate([
            { // current position of your rocket
                left: '-430px',
                top: '-450px'
            },
            { //  final position of your rocket
                left: '300px',
                top: '-1300px',
                transform: 'rotate(60deg)'
            }
            ], {
            // timing options
                duration: 8000,
                iterations: 1
            })        
        }else if (speedRange.value <= 20 && angileRange.value > 80 && angileRange.value <= 100) {
            rocket.animate([
            { // current position of your rocket
                left: '-430px',
                top: '-450px'
            },
            { //  final position of your rocket
                left: '-100px',
                top: '-1200px',
            }
            ], {
            // timing options
                duration: 8000,
                iterations: 1
            })        
            // 
            // 
    }else if (speedRange.value > 20 && speedRange.value <= 50 && angileRange.value <= 20) {
        rocket.animate([
        { // current position of your rocket
            left: '-430px',
            top: '-450px'
        },
        { //  final position of your rocket
            left: '1000px',
            top: '-300px',
            transform: 'rotate(110deg)'
        }
        ], {
        // timing options
            duration: 5000,
            iterations: 1
        })
    }else if (speedRange.value > 20 && speedRange.value <= 50 && angileRange.value > 20 && angileRange.value <= 50) {
        rocket.animate([
        { // current position of your rocket
            left: '-430px',
            top: '-450px'
        },
        { //  final position of your rocket
            left: '1200px',
            top: '-700px',
            transform: 'rotate(70deg)'
        }
        ], {
        // timing options
        duration: 5000,
        iterations: 1
        })        
    }else if (speedRange.value > 20 && speedRange.value <= 50 && angileRange.value > 50 && angileRange.value <= 80) {
        rocket.animate([
        { // current position of your rocket
            left: '-430px',
            top: '-450px'
        },
        { //  final position of your rocket
            left: '300px',
            top: '-1300px',
            transform: 'rotate(60deg)'
        }
        ], {
        // timing options
        duration: 5000,
        iterations: 1
        })        
    }else if (speedRange.value > 20 && speedRange.value <= 50 && angileRange.value > 80 && angileRange.value <= 100) {
        rocket.animate([
        { // current position of your rocket
            left: '-430px',
            top: '-450px'
        },
        { //  final position of your rocket
            left: '-100px',
            top: '-1200px',
        }
        ], {
        // timing options
        duration: 5000,
        iterations: 1
        })      
        // 
        // 
    }else if (speedRange.value > 50 && speedRange.value <= 80 && angileRange.value <= 20) {
        rocket.animate([
            { // current position of your rocket
                left: '-430px',
                top: '-450px'
            },
            { //  final position of your rocket
                left: '1000px',
                top: '-300px',
                transform: 'rotate(110deg)'
            }
            ], {
        // timing options
            duration: 2000,
            iterations: 1
        })
    }else if (speedRange.value > 50 && speedRange.value <= 80 && angileRange.value > 20 && angileRange.value <= 50) {
        rocket.animate([
        { // current position of your rocket
            left: '-430px',
            top: '-450px'
        },
        { //  final position of your rocket
            left: '1200px',
            top: '-700px',
            transform: 'rotate(70deg)'
        }
        ], {
        // timing options
        duration: 2000,
        iterations: 1
        })        
    }else if (speedRange.value > 50 && speedRange.value <= 80 && angileRange.value > 50 && angileRange.value <= 80) {
        rocket.animate([
        { // current position of your rocket
            left: '-430px',
            top: '-450px'
        },
        { //  final position of your rocket
            left: '300px',
            top: '-1300px',
            transform: 'rotate(60deg)'
        }
        ], {
        // timing options
        duration: 2000,
        iterations: 1
        })        
    }else if (speedRange.value > 50 && speedRange.value <= 80 && angileRange.value > 80 && angileRange.value <= 100) {
        rocket.animate([
        { // current position of your rocket
            left: '-430px',
            top: '-450px'
        },
        { //  final position of your rocket
            left: '-100px',
            top: '-1200px',
        }
        ], {
        // timing options
        duration: 2000,
        iterations: 1
        })   
    // 
    // 
    }else if (speedRange.value > 80 && speedRange.value <= 100 && angileRange.value <= 20) {
        rocket.animate([
            { // current position of your rocket
                left: '-430px',
                top: '-450px'
            },
            { //  final position of your rocket
                left: '1000px',
                top: '-300px',
                transform: 'rotate(110deg)'
            }
            ], {
        // timing options
            duration: 800,
            iterations: 1
        })
    }else if (speedRange.value > 80 && speedRange.value <= 100 && angileRange.value > 20 && angileRange.value <= 50) {
        rocket.animate([
        { // current position of your rocket
            left: '-430px',
            top: '-450px'
        },
        { //  final position of your rocket
            left: '1200px',
            top: '-700px',
            transform: 'rotate(70deg)'
        }
        ], {
        // timing options
        duration: 800,
        iterations: 1
        })        
    }else if (speedRange.value > 80 && speedRange.value <= 100 && angileRange.value > 50 && angileRange.value <= 80) {
        rocket.animate([
        { // current position of your rocket
            left: '-430px',
            top: '-450px'
        },
        { //  final position of your rocket
            left: '300px',
            top: '-1300px',
            transform: 'rotate(60deg)'
        }
        ], {
        // timing options
        duration: 800,
        iterations: 1
        })        
    }else if (speedRange.value > 80 && speedRange.value <= 100 && angileRange.value > 80 && angileRange.value <= 100) {
        rocket.animate([
        { // current position of your rocket
            left: '-430px',
            top: '-450px'
        },
        { //  final position of your rocket
            left: '-100px',
            top: '-1200px',
        }
        ], {
        // timing options
        duration: 800,
        iterations: 1
        }) 
}
});
