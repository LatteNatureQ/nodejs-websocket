class Serve {
    constructor(x, y) {
        this.x = x
        this.y = y
    };
    linkServe() {
        const open = document.querySelector('.open_serve')
        const address = document.querySelector('.address')
        const user_name = document.querySelector('.user_name')
        open.onclick = () => {
            if (address.value === '' || user_name.value === '') {
                alert('请输入服务器地址及用户名')
            }
            this.websocketServe(address.value)
        }
    };
    websocketServe(address) {
        let ws = new WebSocket(address);
        ws.onopen = () => {
            ws.send('发送了')
            console.log('Connection OK')
        }
        ws.onmessage = res => {
            console.log(res.data)
        }
        ws.onclose = () => {
            console.log('Connection close')
        }
    }
}
var serve = new Serve()
serve.linkServe()