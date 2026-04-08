/** chunk id: 4807 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var a = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(554146),
    r = n(397927),
    o = n(367727),
    d = n(594061),
    c = n(865657);

function u() {
    return (0, a.jsx)(r.HOs, {
        className: c.kL,
        children: (0, a.jsx)(m, {})
    })
}

function m() {
    let e = i.useCallback(() => {
            (0, d._N)(s.M.NITRO_TENURE_BADGE_LEVEL_UP)
        }, []),
        {
            lastDismissedAtMs: t
        } = (0, o.FZ)(s.M.NITRO_TENURE_BADGE_LEVEL_UP),
        n = null != t ? new Date(t) : null;
    return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(l.DZT, {
            className: c.wx,
            variant: "heading-lg/semibold",
            children: "Tenure Badges"
        }), (0, a.jsxs)("p", {
            children: ["Level Up DC:\xa0", null != n && (0, a.jsxs)("b", {
                children: ["Dismissed (", n.toLocaleDateString(), ")"]
            }), null == n && (0, a.jsx)("b", {
                children: "Not Dismissed"
            })]
        }), (0, a.jsx)("div", {
            className: c.PW,
            children: (0, a.jsx)(r.Button, {
                variant: "primary",
                text: "Reset Level Up DC",
                onClick: e
            })
        })]
    })
}