
function textfunc(){
    var temp = (text.value);
    let newtext=temp;
    let see=temp;

    let sum=0;
    let digits=0;
    while (see > 0) {
        see = parseInt(see / 10);
        digits++;
    }
    while (temp > 0) {
            let remainder = temp % 10;
            sum += remainder ** digits;
            temp = parseInt(temp / 10);
        }
    if(sum==''){
        alert('Please enter a number');
        result.innerHTML = '';
    }
        else if (sum == newtext) {
            result.innerHTML = (`${newtext} is an Armstrong number`);
        }
        else{
            result.innerHTML = (`${newtext} is not an Armstrong number.`);
        }
    console.log(sum);
}
