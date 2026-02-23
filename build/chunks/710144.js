/** chunk id: 710144, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
});
var s = n(627968),
    i = n(64700);
let r = e => t => {
    t?.stopPropagation(), e()
};

function l(e) {
    let {
        onClick: t,
        className: n,
        children: l
    } = e, o = i.useRef(null);
    return (0, s.jsx)("div", {
        onClick: t,
        ref: o,
        className: n,
        children: l({
            areaRef: o,
            handleStopPropagation: r
        })
    })
}