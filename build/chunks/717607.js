/** chunk id: 717607, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(158954),
    s = n(607272),
    a = n(985018),
    o = n(993169);

function c(e) {
    let {
        userId: t,
        applicationId: n
    } = e, [c, u] = l.useState(!1), [d, p] = l.useState(!1), h = l.useCallback(async e => {
        e.stopPropagation(), p(!0);
        try {
            await s.A.cancelFriendRequest({
                userId: t,
                applicationId: n,
                location: "ActionButtonFriendRequest"
            })
        } finally {
            p(!1)
        }
    }, [n, t]), g = l.useCallback(async e => {
        e.stopPropagation(), u(!0);
        try {
            await s.A.maybeConfirmFriendRequestAccept({
                userId: t,
                applicationId: n,
                location: "ActionButtonFriendRequest"
            })
        } finally {
            u(!1)
        }
    }, [n, t]);
    return (0, r.jsx)("div", {
        className: o.Ze,
        children: (0, r.jsxs)(i.e2v, {
            size: "sm",
            children: [(0, r.jsx)(i.$nd, {
                variant: "active",
                onClick: g,
                text: a.intl.string(a.t.Zcibdf),
                loading: c,
                disabled: d
            }), (0, r.jsx)(i.$nd, {
                variant: "secondary",
                onClick: h,
                text: a.intl.string(a.t.xuio0C),
                loading: d,
                disabled: c
            })]
        })
    })
}