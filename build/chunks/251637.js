/** chunk id: 251637 params = (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(134528), n(947204);
var s = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    i = n(827734),
    r = n(397927),
    o = n(890687),
    u = n(191065),
    c = n(753245);
let d = function(e) {
    let {
        className: t,
        color: n = i.A.colors.WHITE,
        quest: l,
        isInventory: d
    } = e, m = (0, o.aC)(e.quest), {
        percentComplete: A,
        completedRatioDisplay: E
    } = (0, o.O9)(l);
    return !d && m.length > 0 ? (0, s.jsx)(u.A, {
        children: m.at(0)
    }) : (0, s.jsxs)("div", {
        className: a()(c.iE, t),
        style: {
            color: n.css
        },
        children: [(0, s.jsxs)("div", {
            className: c.O,
            children: [(0, s.jsx)(r.Text, {
                variant: "text-xs/semibold",
                className: c.Df,
                color: "none",
                children: E
            }), (0, s.jsx)("div", {
                className: c.Cj,
                style: {
                    width: `${100-A}%`
                }
            })]
        }), (0, s.jsx)("div", {
            className: c.hr,
            role: "progressbar",
            "aria-valuenow": A,
            children: (0, s.jsx)("div", {
                className: c.SX,
                style: {
                    width: `${A}%`
                }
            })
        }), m.length > 0 && (0, s.jsx)(u.A, {
            isInventory: d,
            children: m.at(0)
        })]
    })
}