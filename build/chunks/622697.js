/** Chunk was on 65298 **/
/** chunk id: 622697, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var a = n(627968),
    l = n(397927),
    r = n(736653),
    i = n(653523),
    s = n(270704),
    o = n(652215),
    c = n(566305);

function d(e) {
    let {
        selected: t,
        onSelect: n
    } = e, d = (0, r.Ay)();
    return (0, a.jsxs)("div", {
        className: c.N,
        children: [(0, a.jsx)(l.Text, {
            variant: "text-sm/semibold",
            children: "Preselected Gradient"
        }), (0, a.jsx)("div", {
            className: c.Z,
            children: s.Z6.map(e => {
                let l = d !== o.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                    r = t === e.name;
                return (0, a.jsx)(i.S4, {
                    onSelect: () => n(e),
                    style: {
                        background: l
                    },
                    name: e.name,
                    isSelected: r
                }, e.name)
            })
        })]
    })
}