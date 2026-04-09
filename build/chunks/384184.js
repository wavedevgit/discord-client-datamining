/** chunk id: 384184 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    a = n(64700),
    r = n(731738),
    l = n(397927),
    s = n(831062),
    o = n(378570),
    d = n(138298),
    c = n(761640),
    u = n(336590),
    A = n(471271),
    _ = n(629199),
    h = n(772659),
    m = n(985018),
    g = n(849052);

function p(e) {
    let {
        active: t,
        user: n,
        channel: p
    } = e, E = (0, u.r)(), I = a.useCallback(() => {
        (0, l.showToast)((0, l.createToast)(m.intl.string(m.t.pIQ3h4), l.ToastType.FAILURE)), s.A.increment({
            name: r.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW
        })
    }, []), f = a.useCallback(() => {
        d.A.closeChannelSidebar(c.fe)
    }, []), C = a.useCallback(() => {
        d.A.closeChannelSidebar(c.fe), E && (0, o.iN)(p.id)
    }, [p.id, E]), {
        acceptMessageRequest: T,
        isAcceptLoading: N,
        isUserProfileLoading: S,
        isOptimisticAccepted: x
    } = (0, A.t)({
        user: n,
        onAcceptSuccess: C,
        onRejectSuccess: f,
        onError: I
    }), v = N || S, b = v || x;
    return (0, i.jsxs)("div", {
        className: g.kL,
        children: [(0, i.jsx)(_.A, {
            otherUser: n,
            channel: p,
            active: t
        }), (0, i.jsxs)("div", {
            className: g.o1,
            children: [(0, i.jsx)(l.Button, {
                variant: "secondary",
                size: "sm",
                text: m.intl.string(m.t.vicfl6),
                onClick: e => {
                    T(p.id), e.stopPropagation()
                },
                disabled: b,
                loading: v
            }), (0, i.jsx)(h.A, {
                channel: p
            })]
        })]
    })
}