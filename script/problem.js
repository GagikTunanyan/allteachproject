//trvac e zuyg erger voronc jamanakain gumary petq e anmnacord bajanvi 60i
//petq e veradarcnenq te qani nman zuyg ka chkrknvox

let aray = [30,20,150,100,40];

let func = (time) => {
    let tmp;
    for (let i = 0; i < time.length; i++){
        for (let j = i+1; j < time.length; j++){
            tmp = time[i] + time[j];
            if (tmp % 60 === 0) {
                result++
            }
        }
    }
    return result
};
console.log(func(aray));
