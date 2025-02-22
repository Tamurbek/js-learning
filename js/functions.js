
export function sayHi(data) {
    data.forEach(item => {
        let p=document.createElement("p")
        let text=document.createTextNode(`${item.name}\n${item.username}\n${item.email}\n${item.email}`);
        p.appendChild(text);
        document.body.appendChild(p);
    });
}