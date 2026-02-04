/** chunk id: 825869, original params: e,t,n (module,exports,require) **/
n.d(t, {
    v: () => f
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(378570),
    s = n(138298),
    o = n(761640),
    c = n(336590),
    u = n(471271),
    d = n(629199),
    p = n(985018),
    h = n(173801);

function f(e) {
    let {
        active: t,
        user: n,
        channel: f
    } = e, g = (0, c.k)(), m = i.useCallback(() => {
        (0, l.showToast)((0, l.createToast)(p.intl.string(p.t["EDYbS+"]), l.ToastType.FAILURE))
    }, []), A = i.useCallback(() => {
        s.A.closeChannelSidebar(o.fe)
    }, []), _ = i.useCallback(() => {
        s.A.closeChannelSidebar(o.fe), g && (0, a.iN)(f.id)
    }, [f.id, g]), {
        acceptMessageRequest: b,
        rejectMessageRequest: E,
        isAcceptLoading: O,
        isRejectLoading: y,
        isUserProfileLoading: I,
        isOptimisticAccepted: v,
        isOptimisticRejected: S
    } = (0, u.t)({
        user: n,
        onAcceptSuccess: _,
        onRejectSuccess: A,
        onError: m
    }), C = O || y || I || v || S;
    return (0, r.jsxs)("div", {
        className: h.kL,
        children: [(0, r.jsx)(d.A, {
            channel: f,
            otherUser: n,
            active: t
        }), (0, r.jsxs)("div", {
            className: h.o1,
            children: [(0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: h.x6,
                children: (0, r.jsx)(l.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: p.intl.string(p.t.B2nygW),
                    onClick: e => {
                        e.stopPropagation(), E(f.id)
                    },
                    disabled: C,
                    loading: y || S
                })
            }), (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: h.x6,
                children: (0, r.jsx)(l.Button, {
                    variant: "primary",
                    size: "sm",
                    text: p.intl.string(p.t.Kz8Pwr),
                    onClick: e => {
                        e.stopPropagation(), b(f.id)
                    },
                    disabled: C,
                    loading: O || I || v
                })
            })]
        })]
    })
}