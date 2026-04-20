/** chunk id: 179917 params = (module,exports,require) **/
n.d(t, {
    I: () => o
});
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(485947),
    s = n(483392),
    a = n(894564);

function o(e) {
    let {
        title: t,
        count: n,
        isCollapsed: o,
        canCollapse: u,
        onToggle: d,
        rightAccessory: c
    } = e, h = o && null != n ? `${t} (${n})` : t, g = u ? (0, i.jsx)(s.C, {
        isCollapsed: o,
        size: "md",
        className: a.t4
    }) : null;
    return (0, i.jsx)(r.A, {
        className: a.uW,
        children: (0, i.jsxs)("div", {
            className: a.bV,
            children: [(0, i.jsxs)(l.DUT, {
                onClick: () => u && d(),
                "aria-hidden": !0,
                className: u ? a.Ws : void 0,
                children: [h, g]
            }), c]
        })
    })
}