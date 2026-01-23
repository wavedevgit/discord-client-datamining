/** Chunk was on 91699 **/
/** chunk id: 167084, original params: e,t,r (module,exports,require) **/
r.d(t, {
    e: () => d
}), r(228524);
var i = r(627968);
r(64700);
var n = r(503698),
    l = r.n(n),
    c = r(827734),
    o = r(397927);
r(748112);
var s = r(820193);
r(985018);
var a = r(975398);
r(950506), r(848887);
let d = e => {
    let {
        name: t,
        description: r,
        checked: n,
        actionLabel: d,
        actionHandler: u
    } = e, h = null;
    return h = n ? (0, i.jsx)(s.A, {
        width: 20,
        height: 20
    }) : (0, i.jsx)(o.aXh, {
        size: "custom",
        color: c.A.colors.ICON_FEEDBACK_CRITICAL,
        width: 20,
        height: 20
    }), (0, i.jsxs)("div", {
        className: a.gd,
        children: [(0, i.jsx)("div", {
            className: a.aV,
            children: h
        }), (0, i.jsxs)("div", {
            className: l()(a.__invalid_checklistText, n && a.lu),
            children: [(0, i.jsx)(o.Heading, {
                variant: "heading-md/semibold",
                className: a.LA,
                children: t
            }), (0, i.jsx)(o.Text, {
                color: "interactive-text-default",
                variant: "text-sm/normal",
                children: r
            })]
        }), null != d && (0, i.jsx)("div", {
            className: a.dT,
            children: (0, i.jsx)(o.Button, {
                variant: "primary",
                onClick: u,
                text: d,
                size: "sm"
            })
        })]
    })
}