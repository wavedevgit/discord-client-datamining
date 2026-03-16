/** chunk id: 196645 params = (module,exports,require) **/
n.d(e, {
    A: () => m
});
var i = n(627968),
    r = n(64700),
    s = n(397927),
    a = n(311907),
    l = n(49229),
    o = n(975807),
    c = n(928658),
    d = n(426190),
    E = n(662502),
    u = n(994500),
    _ = n(665909),
    A = n(192311),
    h = n(12105),
    x = n(327337),
    T = n(985018),
    g = n(286965);

function m(t) {
    let {
        senderId: e,
        channelId: n,
        hasReported: m,
        onReport: N,
        trackAnalyticsEvent: S
    } = t, C = (0, a.bG)([u.A], () => u.A.isBlocked(e)), [p, R] = r.useState(C), I = (0, d.N)(), f = (0, d.z)(), [v, j] = r.useState(!1), b = (0, A.W)(n), O = r.useMemo(() => I ? 0 : f ? 2 : 1, [I, f]), L = async () => {
        null != b && (j(!0), await (0, c.LF)(b, () => {
            E.A.showReportSuccessToast(e, n), N()
        }, () => {
            E.A.showFailedToast()
        }), j(!1), S(_.Wm.USER_TAKEOVER_MODAL_REPORT))
    }, w = r.useMemo(() => {
        switch (O) {
            case 0:
                return T.intl.string(T.t.sZf6cz);
            case 2:
                return T.intl.string(T.t.HQ2nKl);
            default:
                return T.intl.string(T.t["65XQar"])
        }
    }, [O]);
    return (0, i.jsx)(h.A, {
        header: T.intl.string(T.t["mWO+ys"]),
        description: T.intl.string(T.t.S0XtKF),
        children: (0, i.jsxs)("div", {
            className: g.UD,
            children: [(0, i.jsx)(s.Button, {
                text: p ? T.intl.string(T.t.XyHpKH) : T.intl.string(T.t.l4Emac),
                variant: "primary",
                fullWidth: !0,
                icon: s.aXh,
                onClick: () => {
                    p ? (R(!1), l.A.unblockUser(e, {
                        location: x.Ht
                    }), S(_.Wm.USER_TAKEOVER_MODAL_UNBLOCK), E.A.showUnblockSuccessToast(e, n)) : (R(!0), S(_.Wm.USER_TAKEOVER_MODAL_BLOCK), l.A.blockUser(e, {
                        location: x.Ht
                    }).then(() => {
                        E.A.showBlockSuccessToast(e, n)
                    }))
                }
            }), (0, i.jsx)(s.Button, {
                text: m ? T.intl.string(T.t.QvwOJ6) : T.intl.string(T.t["7fHyE6"]),
                variant: "secondary",
                fullWidth: !0,
                icon: s.iFK,
                onClick: L,
                loading: v,
                disabled: m
            }), (0, i.jsx)(s.Button, {
                text: w,
                variant: "secondary",
                fullWidth: !0,
                icon: s.oyn,
                onClick: () => {
                    0 === O ? ((0, o.A)(x.x7), S(_.Wm.USER_TAKEOVER_MODAL_CTL)) : 2 === O ? ((0, o.A)(x.CL), S(_.Wm.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, o.A)(x.jR), S(_.Wm.USER_TAKEOVER_MODAL_NO_FILTR))
                }
            })]
        })
    })
}