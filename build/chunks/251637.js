/** chunk id: 251637, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(134528), n(947204);
var r = n(627968);
n(64700);
var l = n(503698),
    o = n.n(l),
    i = n(827734),
    a = n(397927),
    s = n(890687),
    u = n(191065),
    c = n(753245);
let d = function(e) {
    let {
        className: t,
        color: n = i.A.colors.WHITE,
        quest: l,
        isInventory: d
    } = e, _ = (0, s.aC)(e.quest), {
        percentComplete: p,
        completedRatioDisplay: b
    } = (0, s.O9)(l);
    return !d && _.length > 0 ? (0, r.jsx)(u.A, {
        children: _.at(0)
    }) : (0, r.jsxs)("div", {
        className: o()(c.iE, t),
        style: {
            color: n.css
        },
        children: [(0, r.jsxs)("div", {
            className: c.O,
            children: [(0, r.jsx)(a.Text, {
                variant: "text-xs/semibold",
                className: c.Df,
                color: "none",
                children: b
            }), (0, r.jsx)("div", {
                className: c.Cj,
                style: {
                    width: "".concat(100 - p, "%")
                }
            })]
        }), (0, r.jsx)("div", {
            className: c.hr,
            role: "progressbar",
            "aria-valuenow": p,
            children: (0, r.jsx)("div", {
                className: c.SX,
                style: {
                    width: "".concat(p, "%")
                }
            })
        }), _.length > 0 && (0, r.jsx)(u.A, {
            isInventory: d,
            children: _.at(0)
        })]
    })
}