/** chunk id: 825869 params = (module,exports,require) **/
n.d(t, {
    v: () => h
});
var i = n(627968),
    a = n(64700),
    r = n(397927),
    l = n(378570),
    s = n(138298),
    o = n(761640),
    d = n(336590),
    c = n(471271),
    u = n(629199),
    A = n(985018),
    _ = n(796218);

function h(e) {
    let {
        active: t,
        user: n,
        channel: h
    } = e, m = (0, d.k)(), g = a.useCallback(() => {
        (0, r.showToast)((0, r.createToast)(A.intl.string(A.t["EDYbS+"]), r.ToastType.FAILURE))
    }, []), p = a.useCallback(() => {
        s.A.closeChannelSidebar(o.fe)
    }, []), E = a.useCallback(() => {
        s.A.closeChannelSidebar(o.fe), m && (0, l.iN)(h.id)
    }, [h.id, m]), {
        acceptMessageRequest: I,
        rejectMessageRequest: f,
        isAcceptLoading: C,
        isRejectLoading: T,
        isUserProfileLoading: N,
        isOptimisticAccepted: S,
        isOptimisticRejected: x
    } = (0, c.t)({
        user: n,
        onAcceptSuccess: E,
        onRejectSuccess: p,
        onError: g
    }), v = C || T || N || S || x;
    return (0, i.jsxs)("div", {
        className: _.kL,
        children: [(0, i.jsx)(u.A, {
            channel: h,
            otherUser: n,
            active: t
        }), (0, i.jsxs)("div", {
            className: _.o1,
            children: [(0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: _.x6,
                children: (0, i.jsx)(r.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: A.intl.string(A.t.B2nygW),
                    onClick: e => {
                        e.stopPropagation(), f(h.id)
                    },
                    disabled: v,
                    loading: T || x
                })
            }), (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: _.x6,
                children: (0, i.jsx)(r.Button, {
                    variant: "primary",
                    size: "sm",
                    text: A.intl.string(A.t.Kz8Pwr),
                    onClick: e => {
                        e.stopPropagation(), I(h.id)
                    },
                    disabled: v,
                    loading: C || N || S
                })
            })]
        })]
    })
}