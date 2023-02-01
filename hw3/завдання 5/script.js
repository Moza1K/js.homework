const visitorAge = prompt(`Скільки вам років?`)
const isWithParents = confirm(`Вам дали дозвіл старші?`)

console.log(isWithParents)
if ( 18 <= visitorAge){
    if (visitorAge <= 60){
        alert(`Доступ дозволено!`)
    } else if( (60 < visitorAge) ){
        if( (80 >= visitorAge) && isWithParents){
            alert( `Доступ дозволено!`)
        } else{
            alert(`Доступ заборонено!`)
        }
    }
}    else if( (12 <= visitorAge) ){
    if( (18 > visitorAge) && isWithParents){
        alert( `Доступ дозволено!`)
    } else{
        alert(`Доступ заборонено!`)
    } 
} else{
    alert(`Доступ заборонено!`)
}