/** chunk id: 187278, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => b
}), r(896048);
var n = r(627968),
    l = r(64700),
    o = r(284009),
    c = r.n(o),
    s = r(397927),
    i = r(10005),
    a = r(208993),
    d = r(842130),
    u = r(985018),
    p = r(528427);
let b = e => {
    let {
        currentUser: t,
        otherUser: r,
        transitionState: o,
        onClose: b
    } = e, [f, y] = l.useState(!1), j = l.useCallback(() => {
        y(!0)
    }, []), O = l.useCallback(() => {
        b()
    }, [b]), h = t.nsfwAllowed, {
        cancelLinkRequest: m,
        isCancelLoading: x
    } = (0, i.A)({
        onError: j,
        onSuccess: O
    });
    return c()(h, "FamilyCenterDeclineLinkModal should only be rendered for parents."), (0, n.jsxs)(s.dWK, {
        transitionState: o,
        onClose: b,
        children: [f && (0, n.jsx)(s.wx6, {
            type: "critical",
            children: u.intl.string(d.default["6gyAQZ"])
        }), (0, n.jsx)(s.cwr, {
            children: (0, n.jsx)(a.A.Header, {
                currentUser: t,
                otherUser: r,
                header: u.intl.string(d.default.HynllX),
                icon: (0, n.jsx)(s.PGe, {
                    size: "md",
                    color: "currentColor",
                    className: p.u
                })
            })
        }), (0, n.jsx)(s.H7u, {
            actionsFullWidth: !0,
            actions: [{
                variant: "secondary",
                text: u.intl.string(d.default.czincX),
                onClick: b,
                disabled: x
            }, {
                variant: "critical-primary",
                text: u.intl.string(d.default.mK40bk),
                onClick: () => {
                    y(!1), m(r.id)
                },
                disabled: x || f,
                loading: x
            }]
        })]
    })
}