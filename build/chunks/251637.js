/** chunk id: 251637, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => d
}), s(134528), s(947204);
var l = s(627968);
s(64700);
var n = s(503698),
    a = s.n(n),
    i = s(827734),
    r = s(397927),
    o = s(890687),
    u = s(191065),
    c = s(753245);
let d = function(e) {
    let {
        className: t,
        color: s = i.A.colors.WHITE,
        quest: n,
        isInventory: d
    } = e, m = (0, o.aC)(e.quest), {
        percentComplete: A,
        completedRatioDisplay: p
    } = (0, o.O9)(n);
    return !d && m.length > 0 ? (0, l.jsx)(u.A, {
        children: m.at(0)
    }) : (0, l.jsxs)("div", {
        className: a()(c.iE, t),
        style: {
            color: s.css
        },
        children: [(0, l.jsxs)("div", {
            className: c.O,
            children: [(0, l.jsx)(r.Text, {
                variant: "text-xs/semibold",
                className: c.Df,
                color: "none",
                children: p
            }), (0, l.jsx)("div", {
                className: c.Cj,
                style: {
                    width: `${100-A}%`
                }
            })]
        }), (0, l.jsx)("div", {
            className: c.hr,
            role: "progressbar",
            "aria-valuenow": A,
            children: (0, l.jsx)("div", {
                className: c.SX,
                style: {
                    width: `${A}%`
                }
            })
        }), m.length > 0 && (0, l.jsx)(u.A, {
            isInventory: d,
            children: m.at(0)
        })]
    })
}