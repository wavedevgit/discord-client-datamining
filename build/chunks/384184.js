/** Chunk was on 21738 **/
/** chunk id: 384184, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968),
    i = n(64700),
    l = n(731738),
    a = n(397927),
    s = n(831062),
    o = n(378570),
    c = n(138298),
    u = n(761640),
    d = n(336590),
    p = n(471271),
    h = n(629199),
    g = n(772659),
    f = n(985018),
    m = n(360830);

function A(e) {
    let {
        active: t,
        user: n,
        channel: A
    } = e, _ = (0, d.r)(), b = i.useCallback(() => {
        (0, a.showToast)((0, a.createToast)(f.intl.string(f.t.pIQ3h4), a.ToastType.FAILURE)), s.A.increment({
            name: l.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW
        })
    }, []), E = i.useCallback(() => {
        c.A.closeChannelSidebar(u.fe)
    }, []), O = i.useCallback(() => {
        c.A.closeChannelSidebar(u.fe), _ && (0, o.iN)(A.id)
    }, [A.id, _]), {
        acceptMessageRequest: y,
        isAcceptLoading: I,
        isUserProfileLoading: v,
        isOptimisticAccepted: S
    } = (0, p.t)({
        user: n,
        onAcceptSuccess: O,
        onRejectSuccess: E,
        onError: b
    }), C = I || v, N = C || S;
    return (0, r.jsxs)("div", {
        className: m.kL,
        children: [(0, r.jsx)(h.A, {
            otherUser: n,
            channel: A,
            active: t
        }), (0, r.jsxs)("div", {
            className: m.o1,
            children: [(0, r.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: f.intl.string(f.t.vicfl6),
                onClick: e => {
                    y(A.id), e.stopPropagation()
                },
                disabled: N,
                loading: C
            }), (0, r.jsx)(g.A, {
                channel: A
            })]
        })]
    })
}