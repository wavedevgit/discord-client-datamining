/** chunk id: 847807, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var a = n(627968),
    i = n(397927),
    s = n(817281),
    l = n(736653),
    r = n(653523),
    o = n(818348);
let d = function() {
    let e = (0, l.Ay)();
    return (0, a.jsx)(i.D0$, {
        label: "Theme",
        children: (0, a.jsxs)("div", {
            style: {
                display: "flex",
                justifyContent: "space-between"
            },
            children: [(0, a.jsx)(r.zy, {
                theme: o.NJ.LIGHT,
                isSelected: e === o.NJ.LIGHT,
                onSelect: () => (0, s.u_)({
                    theme: o.NJ.LIGHT
                })
            }), (0, a.jsx)(r.zy, {
                theme: o.NJ.DARK,
                isSelected: e === o.NJ.DARK,
                onSelect: () => (0, s.u_)({
                    theme: o.NJ.DARK
                })
            })]
        })
    })
}