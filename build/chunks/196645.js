/** chunk id: 196645, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => m
}), n(896048);
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(311907),
    l = n(49229),
    o = n(975807),
    c = n(928658),
    d = n(426190),
    u = n(662502),
    E = n(994500),
    _ = n(665909),
    h = n(192311),
    A = n(12105),
    x = n(327337),
    g = n(985018),
    T = n(286965);

function m(t) {
    let {
        senderId: e,
        channelId: n,
        hasReported: m,
        onReport: p,
        trackAnalyticsEvent: S
    } = t, f = (0, a.bG)([E.A], () => E.A.isBlocked(e)), [b, O] = i.useState(f), j = (0, d.N)(), N = (0, d.z)(), [C, v] = i.useState(!1), R = (0, h.W)(n), I = i.useMemo(() => j ? 0 : N ? 2 : 1, [j, N]), y = async () => {
        null != R && (v(!0), await (0, c.LF)(R, () => {
            u.A.showReportSuccessToast(e, n), p()
        }, () => {
            u.A.showFailedToast()
        }), v(!1), S(_.Wm.USER_TAKEOVER_MODAL_REPORT))
    }, w = i.useMemo(() => {
        switch (I) {
            case 0:
                return g.intl.string(g.t.sZf6cz);
            case 2:
                return g.intl.string(g.t.HQ2nKl);
            default:
                return g.intl.string(g.t["65XQar"])
        }
    }, [I]);
    return (0, r.jsx)(A.A, {
        header: g.intl.string(g.t["mWO+ys"]),
        description: g.intl.string(g.t.S0XtKF),
        children: (0, r.jsxs)("div", {
            className: T.UD,
            children: [(0, r.jsx)(s.Button, {
                text: b ? g.intl.string(g.t.XyHpKH) : g.intl.string(g.t.l4Emac),
                variant: "primary",
                fullWidth: !0,
                icon: s.aXh,
                onClick: () => {
                    b ? (O(!1), l.A.unblockUser(e, {
                        location: x.Ht
                    }), S(_.Wm.USER_TAKEOVER_MODAL_UNBLOCK), u.A.showUnblockSuccessToast(e, n)) : (O(!0), S(_.Wm.USER_TAKEOVER_MODAL_BLOCK), l.A.blockUser(e, {
                        location: x.Ht
                    }).then(() => {
                        u.A.showBlockSuccessToast(e, n)
                    }))
                }
            }), (0, r.jsx)(s.Button, {
                text: m ? g.intl.string(g.t.QvwOJ6) : g.intl.string(g.t["7fHyE6"]),
                variant: "secondary",
                fullWidth: !0,
                icon: s.iFK,
                onClick: y,
                loading: C,
                disabled: m
            }), (0, r.jsx)(s.Button, {
                text: w,
                variant: "secondary",
                fullWidth: !0,
                icon: s.oyn,
                onClick: () => {
                    0 === I ? ((0, o.A)(x.x7), S(_.Wm.USER_TAKEOVER_MODAL_CTL)) : 2 === I ? ((0, o.A)(x.CL), S(_.Wm.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, o.A)(x.jR), S(_.Wm.USER_TAKEOVER_MODAL_NO_FILTR))
                }
            })]
        })
    })
}