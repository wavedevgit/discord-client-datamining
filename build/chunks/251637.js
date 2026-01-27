/** Chunk was on 52390 **/
/** chunk id: 251637, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(134528), n(947204);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(827734),
    o = n(397927),
    s = n(890687),
    u = n(191065),
    c = n(753245);
let d = function(e) {
    let {
        className: t,
        color: n = a.A.colors.WHITE,
        quest: l,
        isInventory: d
    } = e, p = (0, s.aC)(e.quest), {
        percentComplete: m,
        completedRatioDisplay: f
    } = (0, s.O9)(l);
    return !d && p.length > 0 ? (0, r.jsx)(u.A, {
        children: p.at(0)
    }) : (0, r.jsxs)("div", {
        className: i()(c.iE, t),
        style: {
            color: n.css
        },
        children: [(0, r.jsxs)("div", {
            className: c.O,
            children: [(0, r.jsx)(o.Text, {
                variant: "text-xs/semibold",
                className: c.Df,
                color: "none",
                children: f
            }), (0, r.jsx)("div", {
                className: c.Cj,
                style: {
                    width: "".concat(100 - m, "%")
                }
            })]
        }), (0, r.jsx)("div", {
            className: c.hr,
            role: "progressbar",
            "aria-valuenow": m,
            children: (0, r.jsx)("div", {
                className: c.SX,
                style: {
                    width: "".concat(m, "%")
                }
            })
        }), p.length > 0 && (0, r.jsx)(u.A, {
            isInventory: d,
            children: p.at(0)
        })]
    })
}