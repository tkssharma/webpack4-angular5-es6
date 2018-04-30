export default (ele = 'logo') => {
    const re = () => {
					
        const hc = () => (Math.pow(5, 1/2) - 1)/2;		
        //	黄金比
        const logo = document.createElement('canvas');
        
        const lh = logo.height = 85;
        const lw = logo.width = lh / hc();
        //	logo样式
        const v = logo.getContext('2d');
        
        v.font="39px Georgia";
        
        const g = v.createLinearGradient(0, 0, lw, 0);
        
        g.addColorStop("0", "red");
        g.addColorStop("0.5", "green");
        g.addColorStop("1.0", "blue");
        //	渐变
        const osw = (lw - lh) / 2 + 1;
        v.strokeStyle = g;
        v.strokeText('yuan', osw, '36');
        v.strokeText('clan', osw + 8, '68');
        //	画字
        return logo;
    }
    const cls = document.getElementsByClassName(ele);
    Array.from([...cls], v => {
        v.append(re())
    })
}