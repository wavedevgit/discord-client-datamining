/** chunk id: 825869 params = (module,exports,require) **/
n.d(t, {
    v: () => _
});
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(378570),
    s = n(138298),
    o = n(761640),
    d = n(336590),
    c = n(471271),
    u = n(629199),
    A = n(985018),
    h = n(171440);

function _(e) {
    let {
        active: t,
        user: n,
        channel: _
    } = e, m = (0, d.k)(), g = r.useCallback(() => {
        (0, l.showToast)((0, l.createToast)(A.intl.string(A.t["EDYbS+"]), l.ToastType.FAILURE))
    }, []), p = r.useCallback(() => {
        s.A.closeChannelSidebar(o.fe)
    }, []), E = r.useCallback(() => {
        s.A.closeChannelSidebar(o.fe), m && (0, a.iN)(_.id)
    }, [_.id, m]), {
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
        className: h.kL,
        children: [(0, i.jsx)(u.A, {
            channel: _,
            otherUser: n,
            active: t
        }), (0, i.jsxs)("div", {
            className: h.o1,
            children: [(0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: h.x6,
                children: (0, i.jsx)(l.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: A.intl.string(A.t.B2nygW),
                    onClick: e => {
                        e.stopPropagation(), f(_.id)
                    },
                    disabled: v,
                    loading: T || x
                })
            }), (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: h.x6,
                children: (0, i.jsx)(l.Button, {
                    variant: "primary",
                    size: "sm",
                    text: A.intl.string(A.t.Kz8Pwr),
                    onClick: e => {
                        e.stopPropagation(), I(_.id)
                    },
                    disabled: v,
                    loading: C || N || S
                })
            })]
        })]
    })
}