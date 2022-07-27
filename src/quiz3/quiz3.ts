export function ingredientsCal(recipe:string,base:number):void{
    const SPANISH_FUDGE = 2
    const FRENCH_FUDGE = 2
    const ENGLISH_FUDGE = 2

      if(recipe === 'SPANISH'){
        const fudge = SPANISH_FUDGE
        const amt = base * SPANISH_FUDGE
        const sugar = 2 * bottom(amt) * top(amt) * 1.17
      }else if(recipe === 'FRENCH'){
        const fudge = FRENCH_FUDGE
        const amt = base * SPANISH_FUDGE
        const sugar = 2 * bottom(amt) * top(amt) * 1.17
        const chocolate = 7
      }else if(recipe === 'ENGLISH'){
        const fudge = ENGLISH_FUDGE
        const amt = base * SPANISH_FUDGE
        const sugar = 2 * bottom(amt) * top(amt) * 1.17
      }else{
        const fudge = 1
        const amt = base
        const sugar = 2 * bottom(amt) * top(amt) * 1.17
      }

}


function bottom(amt:number):number{
    return amt
}



function top(amt:number):number{
    return amt
}