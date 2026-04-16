/** chunk id: 264580 params = (module,exports,require) **/
n.d(t, {
    A: () => d,
    q: () => o
});
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(915089),
    s = n(332733);

function o(e) {
    let {
        children: t,
        id: n
    } = e;
    return (0, i.jsx)(a.Text, {
        className: s.g,
        color: "text-subtle",
        id: n,
        variant: "text-sm/semibold",
        children: t
    })
}
let d = function(e) {
    let {
        children: t,
        renderPopout: n
    } = e, o = (0, r.GV)(), d = l.useRef(null);
    return (0, i.jsx)(a.YNO, {
        align: "right",
        position: "bottom",
        renderPopout: e => (0, i.jsx)(a.lGe, {
            className: s.S,
            "aria-labelledby": o,
            children: n(e, o)
        }),
        scrollBehavior: "close",
        targetElementRef: d,
        children: e => t(e, d)
    })
}