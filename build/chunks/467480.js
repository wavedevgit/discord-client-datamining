/** chunk id: 467480 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(192308),
    a = n(435371),
    o = n(397927),
    c = n(964486),
    d = n(544231),
    u = n(338510),
    h = n(151119),
    A = n(278941),
    m = n(665909),
    _ = n(186111),
    p = n(58736),
    g = n(327337),
    f = n(985018);
let x = s.memo(function(e) {
    let {
        channel: t
    } = e, x = (0, u.u)(t.id), E = (0, h.S)(t.id), C = (0, A.e)(t.id), I = (0, r.useHasAnyModalOpen)(), N = (0, l.bG)([_.A], () => _.A.hasLayers()), b = s.useCallback(() => E ? f.intl.string(f.t["16QyDv"]) : null != C ? f.intl.string(f.t.kCN9i0) : null, [E, C]), S = s.useMemo(() => (E || null != C) && !I && !N, [E, C, I, N]), [T, v] = s.useState(b());
    s.useEffect(() => {
        null != C && null != x && (o.ORC.announce(f.intl.string(f.t.acsXuG)), setTimeout(() => {
            (0, d.xi)(t.id, [C.id])
        }, 5e3), (0, m.QF)({
            channelId: t.id,
            senderId: t.getRecipientId(),
            warningId: C.id,
            warningType: C.type,
            isNudgeWarning: null != C,
            viewName: m.gN.SAFETY_TOOLS_NUDGE_TOOLTIP
        })), E && (o.ORC.announce(f.intl.string(f.t["1dxCqG"])), setTimeout(() => {
            (0, d.bg)(t.id)
        }, 5e3))
    }, [t, C, x, E]), (0, c.Ay)(() => {
        null != x && (0, m.QF)({
            channelId: t.id,
            senderId: t.getRecipientId(),
            warningId: x.id,
            warningType: x.type,
            isNudgeWarning: null != C,
            viewName: m.gN.SAFETY_TOOLS_BUTTON
        })
    }), s.useEffect(() => {
        let e = b();
        null != e && v(e)
    }, [E, C, b]);
    let y = s.useCallback(() => {
        null != C && (0, d.xi)(t.id, [C.id]), null != x && ((0, o.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("45033"), n.e("46717"), n.e("88331")]).then(n.bind(n, 788099));
            return n => {
                let {
                    onClose: s,
                    transitionState: l
                } = n;
                return (0, i.jsx)(e, {
                    otherUserId: t.getRecipientId(),
                    channelId: t.id,
                    warningId: x.id,
                    warningType: x.type,
                    onClose: s,
                    transitionState: l
                })
            }
        }, {
            modalKey: g.V
        }), (0, m._$)({
            channelId: t.id,
            senderId: t.getRecipientId(),
            warningId: x.id,
            warningType: x.type,
            cta: m.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
            isNudgeWarning: null != C
        }))
    }, [C, x, t]);
    return null == x ? null : (0, i.jsx)(a.m_, {
        forceOpen: S,
        text: T,
        position: "bottom",
        children: (0, i.jsx)(p.Ay.Icon, {
            icon: o.lmn,
            onClick: y,
            tooltip: f.intl.string(f.t.rpc2qv),
            tooltipDisabled: null != C
        })
    })
})