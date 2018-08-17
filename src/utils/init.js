


export default (options) => {


    //禁止移动页面上下出现背景
    let touche_s_y = 0
    document.body.addEventListener('touchstart', (e) => {
        touche_s_y = e.touches[0].pageY
    }, { passive: false })
    document.body.addEventListener('touchmove', (e) => {
        let touche_m_y = e.touches[0].pageY
        // 部分样式上面可以实现 左右超出滚动
        if(touche_m_y - touche_s_y != 0 || !(e.target.nodeName == 'CODE' ||
            e.target.className.indexOf('hl') != -1 )){
            e.preventDefault()
        }
        touche_s_y = touche_m_y
    }, { passive: false })


}