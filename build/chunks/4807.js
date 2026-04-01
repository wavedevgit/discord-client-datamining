/** chunk id: 4807 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var a = n(627968),
    i = n(64700),
    s = n(158954),
    l = n(554146),
    r = n(397927),
    o = n(367727),
    d = n(594061),
    c = n(318606);

function u() {
    return (0, a.jsx)(r.HOs, {
        className: c.kL,
        children: (0, a.jsx)(m, {})
    })
}

function m() {
    let e = i.useCallback(() => {
            (0, d._N)(l.M.NITRO_TENURE_BADGE_LEVEL_UP)
        }, []),
        {
            lastDismissedAtMs: t
        } = (0, o.FZ)(l.M.NITRO_TENURE_BADGE_LEVEL_UP),
        n = null != t ? new Date(t) : null;
    return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(s.DZT, {
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