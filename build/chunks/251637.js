/** chunk id: 251637, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => d
}), l(134528), l(947204);
var n = l(627968);
l(64700);
var s = l(503698),
    a = l.n(s),
    i = l(827734),
    r = l(397927),
    u = l(890687),
    o = l(191065),
    c = l(753245);
let d = function(e) {
    let {
        className: t,
        color: l = i.A.colors.WHITE,
        quest: s,
        isInventory: d
    } = e, m = (0, u.aC)(e.quest), {
        percentComplete: A,
        completedRatioDisplay: p
    } = (0, u.O9)(s);
    return !d && m.length > 0 ? (0, n.jsx)(o.A, {
        children: m.at(0)
    }) : (0, n.jsxs)("div", {
        className: a()(c.iE, t),
        style: {
            color: l.css
        },
        children: [(0, n.jsxs)("div", {
            className: c.O,
            children: [(0, n.jsx)(r.Text, {
                variant: "text-xs/semibold",
                className: c.Df,
                color: "none",
                children: p
            }), (0, n.jsx)("div", {
                className: c.Cj,
                style: {
                    width: `${100-A}%`
                }
            })]
        }), (0, n.jsx)("div", {
            className: c.hr,
            role: "progressbar",
            "aria-valuenow": A,
            children: (0, n.jsx)("div", {
                className: c.SX,
                style: {
                    width: `${A}%`
                }
            })
        }), m.length > 0 && (0, n.jsx)(o.A, {
            isInventory: d,
            children: m.at(0)
        })]
    })
}