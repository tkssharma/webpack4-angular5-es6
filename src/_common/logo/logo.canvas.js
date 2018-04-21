export default (ele = 'logo') => {
    const re = () => {
        const hc = () => (Math.pow(5, 1/2) - 1)/2;
        const logo = document.createElement('canvas');
        
        logo.width = 150;
        logo.height = 150*hc();
        
        const v = logo.getContext('2d');
        
        v.font="60px Georgia";
        
        const g = v.createLinearGradient(0,0,logo.width,0);
        
        g.addColorStop("0","magenta");
        g.addColorStop("0.5","blue");
        g.addColorStop("1.0","red");
        
        v.strokeStyle = g;
        v.strokeText('yuan', '11', '36');
        v.strokeText('clan', '19', '85');

        return logo;
    }
    const cls = document.getElementsByClassName(ele);
    Array.from([...cls], v => {
        v.append(re())
    })
}