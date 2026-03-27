/** chunk id: 465736 params = (module,exports,require) **/
n.d(t, {
    A: () => i
});
var a = n(627968);

function i(e) {
    let {
        rating: t,
        strokeColor: n
    } = e, i = 2 * Math.PI * 16, l = Math.min(Math.max(t, 0), 100) / 100, r = l * i;
    return (0, a.jsx)("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 36 36",
        style: {
            transform: `rotate(${(1-l)*360/2}deg)`
        },
        children: (0, a.jsx)("circle", {
            r: 16,
            cx: 18,
            cy: 18,
            fill: "none",
            stroke: n,
            strokeWidth: 2.4,
            strokeDasharray: `${r} ${i-r}`
        })
    })
}