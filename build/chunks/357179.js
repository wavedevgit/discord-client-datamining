/** chunk id: 357179 params = (module,exports,require) **/
n.d(t, {
    _: () => g
});
var i = n(627968),
    l = n(64700),
    s = n(731738),
    a = n(311907),
    r = n(397927),
    o = n(831062),
    c = n(994500),
    d = n(544231),
    u = n(349435),
    h = n(665909),
    m = n(576045),
    A = n(327337),
    p = n(985018);

function g(e) {
    let {
        channelId: t,
        warningId: g,
        senderId: f
    } = e, _ = l.useCallback(() => {
        (0, d.xi)(t, [g])
    }, [t, g]), E = (0, a.bG)([c.A], () => c.A.isBlocked(f)), x = l.useMemo(() => ({
        channelId: t,
        warningId: g,
        senderId: f,
        warningType: u._j.INAPPROPRIATE_CONVERSATION_TIER_2
    }), [t, g, f]);
    l.useEffect(() => {
        (0, h.QF)({
            ...x,
            viewName: h.gN.SAFETY_WARNING_BANNER
        }), o.A.increment({
            name: s.K.SAFETY_WARNING_VIEW
        })
    }, [x]);
    let C = l.useCallback(e => {
            (0, h._$)({
                ...x,
                cta: e
            })
        }, [x]),
        S = l.useCallback(() => {
            (0, r.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("45033"), n.e("46717"), n.e("78464")]).then(n.bind(n, 788099));
                return n => {
                    let {
                        transitionState: l,
                        onClose: s
                    } = n;
                    return (0, i.jsx)(e, {
                        otherUserId: f,
                        channelId: t,
                        warningId: g,
                        warningType: u._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                        transitionState: l,
                        onClose: s
                    })
                }
            }, {
                modalKey: A.V
            }), C(h.Wm.USER_BANNER_OPEN_SAFETY_TOOLS)
        }, [t, f, g, C]),
        T = l.useCallback(() => {
            _(), C(h.Wm.USER_BANNER_BLOCK_CONFIRM)
        }, [_, C]),
        N = l.useCallback(() => {
            _(), C(h.Wm.USER_BANNER_BLOCK_AND_REPORT_CONFIRM)
        }, [_, C]),
        I = l.useCallback(() => {
            (0, r.mMO)(async () => {
                let {
                    default: e
                } = await n.e("84938").then(n.bind(n, 371185));
                return n => {
                    let {
                        transitionState: l,
                        onClose: s
                    } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onBlock: T,
                        onBlockAndReport: N,
                        onCancel: () => {
                            s?.(), C(h.Wm.USER_BANNER_BLOCK_CANCEL)
                        },
                        onClose: s,
                        userId: f,
                        channelId: t
                    })
                }
            })
        }, [T, N, f, t, C]);
    return (0, i.jsx)(m.N, {
        channelId: t,
        warningId: g,
        senderId: f,
        warningType: u._j.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: p.intl.string(p.t.ZzlB5p),
        description: p.intl.string(p.t["D1aU+h"]),
        onDismiss: _,
        buttons: [{
            text: p.intl.string(p.t.Qyu4UK),
            variant: "primary",
            onClick: S
        }, ...E ? [] : [{
            text: p.intl.string(p.t["7q0bNY"]),
            variant: "secondary",
            onClick: I
        }]]
    })
}