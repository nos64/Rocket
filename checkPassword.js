
export let passwordArea = document.querySelector('.password');

export function validate() {
    // let validPassword = "TrustNo1";
    let validPassword = "1";
    if (validPassword === passwordArea.value) {
        return true;
    }
}

