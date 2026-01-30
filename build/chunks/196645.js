/** chunk id: 196645, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => T
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
    A = n(192311),
    h = n(12105),
    g = n(327337),
    x = n(985018),
    p = n(286965);

function T(t) {
    let {
        senderId: e,
        channelId: n,
        hasReported: T,
        onReport: m,
        trackAnalyticsEvent: f
    } = t, S = (0, a.bG)([E.A], () => E.A.isBlocked(e)), [b, O] = i.useState(S), j = (0, d.N)(), N = (0, d.z)(), [C, v] = i.useState(!1), R = (0, A.W)(n), I = i.useMemo(() => j ? 0 : N ? 2 : 1, [j, N]), y = async () => {
        null != R && (v(!0), await (0, c.LF)(R, () => {
            u.A.showReportSuccessToast(e, n), m()
        }, () => {
            u.A.showFailedToast()
        }), v(!1), f(_.Wm.USER_TAKEOVER_MODAL_REPORT))
    }, w = i.useMemo(() => {
        switch (I) {
            case 0:
                return x.intl.string(x.t.sZf6cz);
            case 2:
                return x.intl.string(x.t.HQ2nKl);
            default:
                return x.intl.string(x.t["65XQar"])
        }
    }, [I]);
    return (0, r.jsx)(h.A, {
        header: x.intl.string(x.t["mWO+ys"]),
        description: x.intl.string(x.t.S0XtKF),
        children: (0, r.jsxs)("div", {
            className: p.UD,
            children: [(0, r.jsx)(s.Button, {
                text: b ? x.intl.string(x.t.XyHpKH) : x.intl.string(x.t.l4Emac),
                variant: "primary",
                fullWidth: !0,
                icon: s.aXh,
                onClick: () => {
                    b ? (O(!1), l.A.unblockUser(e, {
                        location: g.Ht
                    }), f(_.Wm.USER_TAKEOVER_MODAL_UNBLOCK), u.A.showUnblockSuccessToast(e, n)) : (O(!0), f(_.Wm.USER_TAKEOVER_MODAL_BLOCK), l.A.blockUser(e, {
                        location: g.Ht
                    }).then(() => {
                        u.A.showBlockSuccessToast(e, n)
                    }))
                }
            }), (0, r.jsx)(s.Button, {
                text: T ? x.intl.string(x.t.QvwOJ6) : x.intl.string(x.t["7fHyE6"]),
                variant: "secondary",
                fullWidth: !0,
                icon: s.iFK,
                onClick: y,
                loading: C,
                disabled: T
            }), (0, r.jsx)(s.Button, {
                text: w,
                variant: "secondary",
                fullWidth: !0,
                icon: s.oyn,
                onClick: () => {
                    0 === I ? ((0, o.A)(g.x7), f(_.Wm.USER_TAKEOVER_MODAL_CTL)) : 2 === I ? ((0, o.A)(g.CL), f(_.Wm.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, o.A)(g.jR), f(_.Wm.USER_TAKEOVER_MODAL_NO_FILTR))
                }
            })]
        })
    })
}