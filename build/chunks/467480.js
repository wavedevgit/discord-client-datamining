/** chunk id: 467480 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(192308),
    r = n(435371),
    o = n(397927),
    d = n(964486),
    c = n(544231),
    u = n(338510),
    h = n(151119),
    A = n(278941),
    _ = n(665909),
    m = n(186111),
    p = n(58736),
    g = n(327337),
    f = n(985018);
let E = l.memo(function(e) {
    let {
        channel: t
    } = e, E = (0, u.u)(t.id), x = (0, h.S)(t.id), I = (0, A.e)(t.id), C = (0, a.useHasAnyModalOpen)(), N = (0, s.bG)([m.A], () => m.A.hasLayers()), T = l.useCallback(() => x ? f.intl.string(f.t["16QyDv"]) : null != I ? f.intl.string(f.t.kCN9i0) : null, [x, I]), S = l.useMemo(() => (x || null != I) && !C && !N, [x, I, C, N]), [b, y] = l.useState(T());
    l.useEffect(() => {
        null != I && null != E && (o.ORC.announce(f.intl.string(f.t.acsXuG)), setTimeout(() => {
            (0, c.xi)(t.id, [I.id])
        }, 5e3), (0, _.QF)({
            channelId: t.id,
            senderId: t.getRecipientId(),
            warningId: I.id,
            warningType: I.type,
            isNudgeWarning: null != I,
            viewName: _.gN.SAFETY_TOOLS_NUDGE_TOOLTIP
        })), x && (o.ORC.announce(f.intl.string(f.t["1dxCqG"])), setTimeout(() => {
            (0, c.bg)(t.id)
        }, 5e3))
    }, [t, I, E, x]), (0, d.Ay)(() => {
        null != E && (0, _.QF)({
            channelId: t.id,
            senderId: t.getRecipientId(),
            warningId: E.id,
            warningType: E.type,
            isNudgeWarning: null != I,
            viewName: _.gN.SAFETY_TOOLS_BUTTON
        })
    }), l.useEffect(() => {
        let e = T();
        null != e && y(e)
    }, [x, I, T]);
    let v = l.useCallback(() => {
        null != I && (0, c.xi)(t.id, [I.id]), null != E && ((0, o.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("45033"), n.e("46717"), n.e("88331")]).then(n.bind(n, 788099));
            return n => {
                let {
                    onClose: l,
                    transitionState: s
                } = n;
                return (0, i.jsx)(e, {
                    otherUserId: t.getRecipientId(),
                    channelId: t.id,
                    warningId: E.id,
                    warningType: E.type,
                    onClose: l,
                    transitionState: s
                })
            }
        }, {
            modalKey: g.V
        }), (0, _._$)({
            channelId: t.id,
            senderId: t.getRecipientId(),
            warningId: E.id,
            warningType: E.type,
            cta: _.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
            isNudgeWarning: null != I
        }))
    }, [I, E, t]);
    return null == E ? null : (0, i.jsx)(r.m_, {
        forceOpen: S,
        text: b,
        position: "bottom",
        children: (0, i.jsx)(p.Ay.Icon, {
            icon: o.lmn,
            onClick: v,
            tooltip: f.intl.string(f.t.rpc2qv),
            tooltipDisabled: null != I
        })
    })
})