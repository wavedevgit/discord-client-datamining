/** chunk id: 223344 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(627968),
    i = n(64700),
    l = n(317097),
    s = n(397927),
    r = n(549592);
let o = function(e) {
    let {
        colorKey: t,
        value: n,
        onChange: o,
        title: d
    } = e, c = i.useRef(null);
    return (0, a.jsx)(s.D0$, {
        label: d,
        children: (0, a.jsx)(s.YNO, {
            targetElementRef: c,
            renderPopout: e => (0, a.jsx)(s.VNw, {
                ...e,
                value: n,
                onChange: e => o(t, (0, l.Hl)(e))
            }),
            children: e => (0, a.jsx)(s.DUT, {
                ...e,
                innerRef: c,
                tag: "span",
                "aria-label": "Select a color",
                className: r.O6,
                style: {
                    backgroundColor: n
                },
                children: (0, a.jsx)(s.dDg, {
                    size: "xs",
                    color: "currentColor",
                    className: r.WY
                })
            })
        })
    })
}