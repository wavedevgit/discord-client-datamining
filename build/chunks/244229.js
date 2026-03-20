/** chunk id: 244229 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    a = n(64700),
    l = n(397927),
    r = n(517905),
    s = n(903915);
let o = function(e) {
    let {
        className: t,
        guildId: n
    } = e, o = a.useRef(null), d = a.useCallback((e, t) => {
        e.stopPropagation(), t.onClick(e)
    }, []);
    return (0, i.jsx)(r.A, {
        guildId: n,
        position: "left",
        targetElementRef: o,
        children: e => (0, i.jsx)(l.DUT, {
            ...e,
            innerRef: o,
            className: t,
            onClick: t => d(t, e),
            children: (0, i.jsx)("div", {
                className: s.K,
                children: (0, i.jsx)(l._Xm, {
                    size: "xs",
                    color: "currentColor"
                })
            })
        })
    })
}