/** chunk id: 251637, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(134528), n(947204);
var l = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    i = n(827734),
    a = n(397927),
    o = n(890687),
    u = n(191065),
    c = n(753245);
let d = function(e) {
    let {
        className: t,
        color: n = i.A.colors.WHITE,
        quest: r,
        isInventory: d
    } = e, p = (0, o.aC)(e.quest), {
        percentComplete: f,
        completedRatioDisplay: m
    } = (0, o.O9)(r);
    return !d && p.length > 0 ? (0, l.jsx)(u.A, {
        children: p.at(0)
    }) : (0, l.jsxs)("div", {
        className: s()(c.iE, t),
        style: {
            color: n.css
        },
        children: [(0, l.jsxs)("div", {
            className: c.O,
            children: [(0, l.jsx)(a.Text, {
                variant: "text-xs/semibold",
                className: c.Df,
                color: "none",
                children: m
            }), (0, l.jsx)("div", {
                className: c.Cj,
                style: {
                    width: "".concat(100 - f, "%")
                }
            })]
        }), (0, l.jsx)("div", {
            className: c.hr,
            role: "progressbar",
            "aria-valuenow": f,
            children: (0, l.jsx)("div", {
                className: c.SX,
                style: {
                    width: "".concat(f, "%")
                }
            })
        }), p.length > 0 && (0, l.jsx)(u.A, {
            isInventory: d,
            children: p.at(0)
        })]
    })
}