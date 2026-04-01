/** chunk id: 717607 params = (module,exports,require) **/
n.d(t, {
    A: () => u,
    R: () => c
});
var i = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(308528),
    r = n(607272),
    o = n(985018),
    d = n(174720);

function c(e) {
    let {
        userId: t
    } = e, n = l.useCallback(e => {
        e.stopPropagation(), a.A.openPrivateChannel({
            recipientIds: [t]
        })
    }, [t]);
    return (0, i.jsx)("div", {
        className: d.Ze,
        children: (0, i.jsx)(s.e2v, {
            size: "sm",
            children: (0, i.jsx)(s.$nd, {
                variant: "secondary",
                onClick: n,
                text: o.intl.string(o.t["g33r/P"])
            })
        })
    })
}

function u(e) {
    let {
        userId: t,
        applicationId: n
    } = e, [a, c] = l.useState(!1), [u, h] = l.useState(!1), A = l.useCallback(async e => {
        e.stopPropagation(), h(!0);
        try {
            await r.A.cancelFriendRequest({
                userId: t,
                applicationId: n,
                location: "ActionButtonFriendRequest"
            })
        } finally {
            h(!1)
        }
    }, [n, t]), _ = l.useCallback(async e => {
        e.stopPropagation(), c(!0);
        try {
            await r.A.maybeConfirmFriendRequestAccept({
                userId: t,
                applicationId: n,
                location: "ActionButtonFriendRequest"
            })
        } finally {
            c(!1)
        }
    }, [n, t]);
    return (0, i.jsx)("div", {
        className: d.Ze,
        children: (0, i.jsxs)(s.e2v, {
            size: "sm",
            children: [(0, i.jsx)(s.$nd, {
                variant: "active",
                onClick: _,
                text: o.intl.string(o.t.Zcibdf),
                loading: a,
                disabled: u
            }), (0, i.jsx)(s.$nd, {
                variant: "secondary",
                onClick: A,
                text: o.intl.string(o.t.xuio0C),
                loading: u,
                disabled: a
            })]
        })
    })
}