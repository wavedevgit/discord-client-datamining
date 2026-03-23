/** chunk id: 622697 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var a = n(627968),
    i = n(397927),
    l = n(736653),
    s = n(653523),
    r = n(270704),
    o = n(652215),
    d = n(566305);

function c(e) {
    let {
        selected: t,
        onSelect: n
    } = e, c = (0, l.Ay)();
    return (0, a.jsxs)("div", {
        className: d.N,
        children: [(0, a.jsx)(i.Text, {
            variant: "text-sm/semibold",
            children: "Preselected Gradient"
        }), (0, a.jsx)("div", {
            className: d.Z,
            children: r.Z6.map(e => {
                let i = c !== o.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                    l = t === e.name;
                return (0, a.jsx)(s.S4, {
                    onSelect: () => n(e),
                    style: {
                        background: i
                    },
                    name: e.name,
                    isSelected: l
                }, e.name)
            })
        })]
    })
}