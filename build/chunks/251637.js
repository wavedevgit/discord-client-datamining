/** chunk id: 251637 params = (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(134528), n(947204);
var l = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    a = n(827734),
    r = n(397927),
    o = n(890687),
    u = n(191065),
    c = n(333028);
let d = function(e) {
    let {
        className: t,
        color: n = a.A.colors.WHITE,
        quest: s,
        isInventory: d
    } = e, A = (0, o.aC)(e.quest), {
        percentComplete: m,
        completedRatioDisplay: E
    } = (0, o.O9)(s);
    return !d && A.length > 0 ? (0, l.jsx)(u.A, {
        children: A.at(0)
    }) : (0, l.jsxs)("div", {
        className: i()(c.iE, t),
        style: {
            color: n.css
        },
        children: [(0, l.jsxs)("div", {
            className: c.O,
            children: [(0, l.jsx)(r.Text, {
                variant: "text-xs/semibold",
                className: c.Df,
                color: "none",
                children: E
            }), (0, l.jsx)("div", {
                className: c.Cj,
                style: {
                    width: `${100-m}%`
                }
            })]
        }), (0, l.jsx)("div", {
            className: c.hr,
            role: "progressbar",
            "aria-valuenow": m,
            children: (0, l.jsx)("div", {
                className: c.SX,
                style: {
                    width: `${m}%`
                }
            })
        }), A.length > 0 && (0, l.jsx)(u.A, {
            isInventory: d,
            children: A.at(0)
        })]
    })
}