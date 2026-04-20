/** chunk id: 767271 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    l = n(64700),
    a = n(397927),
    s = n(471271),
    r = n(138298),
    o = n(761640),
    c = n(287809),
    d = n(33364),
    u = n(985018);

function h(e) {
    let {
        channel: t,
        user: n
    } = e, h = l.useCallback(() => {
        (0, a.showToast)((0, a.createToast)(u.intl.string(u.t.a2j0hv), a.ToastType.FAILURE))
    }, []), m = l.useCallback(() => {
        r.A.closeChannelSidebar(o.fe)
    }, []), A = l.useCallback(() => {
        r.A.closeChannelSidebar(o.fe)
    }, []), {
        acceptMessageRequest: g,
        rejectMessageRequest: _,
        isAcceptLoading: p,
        isRejectLoading: f,
        isOptimisticAccepted: E,
        isOptimisticRejected: C
    } = (0, s.t)({
        user: c.default.getUser(n.id),
        onError: h,
        onAcceptSuccess: A,
        onRejectSuccess: m
    }), x = p || f || E || C;
    return (0, i.jsxs)(a.ButtonGroup, {
        size: "sm",
        children: [(0, i.jsx)(a.Button, {
            variant: "primary",
            disabled: x,
            onClick: () => g(t.id),
            loading: p,
            text: u.intl.string(u.t.Kz8Pwr)
        }), (0, i.jsx)(a.Button, {
            variant: "secondary",
            disabled: x,
            onClick: () => _(t.id),
            loading: f,
            text: u.intl.string(u.t.B2nygW)
        }), (0, i.jsx)(d.A, {
            channel: t,
            user: n
        })]
    })
}