const bhaskara = (ax2, bx, c) => {
    let delta = bx**2 - 4*ax2*c
    if (delta > 0){
        let x1 = (-bx + delta**(1/2))/(2*ax2)
        let x2 = (-bx - delta**(1/2))/(2*ax2)
        const x = [x1, x2]
        console.log(`As raízes são: ${x}`)
    }
    else if (delta = 0){
        let x1 = (-bx + delta**(1/2))/(2*ax2)
        const x = [x1,x2]
        console.log(`As raízes são: ${x}`)
    }
    if (delta < 0){
        const x = []
        console.log('Delta é negativo.')
    }
}

bhaskara(3,5, -5)