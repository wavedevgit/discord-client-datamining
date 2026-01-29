/** Chunk was on 1113 **/
/** chunk id: 467480, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(192308),
    a = n(435371),
    o = n(397927),
    c = n(964486),
    u = n(544231),
    d = n(338510),
    h = n(151119),
    p = n(278941),
    g = n(665909),
    f = n(186111),
    m = n(58736),
    b = n(327337),
    A = n(985018);
let y = l.memo(function(e) {
    let {
        channel: t
    } = e, y = (0, d.u)(t.id), O = (0, h.S)(t.id), _ = (0, p.e)(t.id), x = (0, s.useHasAnyModalOpen)(), j = (0, i.bG)([f.A], () => f.A.hasLayers()), v = l.useCallback(() => O ? A.intl.string(A.t["16QyDv"]) : null != _ ? A.intl.string(A.t.kCN9i0) : null, [O, _]), E = l.useMemo(() => (O || null != _) && !x && !j, [O, _, x, j]), [C, S] = l.useState(v());
    l.useEffect(() => {
        null != _ && null != y && (o.ORC.announce(A.intl.string(A.t.acsXuG)), setTimeout(() => {
            (0, u.xi)(t.id, [_.id])
        }, 5e3), (0, g.QF)({
            channelId: t.id,
            senderId: t.getRecipientId(),
            warningId: _.id,
            warningType: _.type,
            isNudgeWarning: null != _,
            viewName: g.gN.SAFETY_TOOLS_NUDGE_TOOLTIP
        })), O && (o.ORC.announce(A.intl.string(A.t["1dxCqG"])), setTimeout(() => {
            (0, u.bg)(t.id)
        }, 5e3))
    }, [t, _, y, O]), (0, c.Ay)(() => {
        null != y && (0, g.QF)({
            channelId: t.id,
            senderId: t.getRecipientId(),
            warningId: y.id,
            warningType: y.type,
            isNudgeWarning: null != _,
            viewName: g.gN.SAFETY_TOOLS_BUTTON
        })
    }), l.useEffect(() => {
        let e = v();
        null != e && S(e)
    }, [O, _, v]);
    let I = l.useCallback(() => {
        null != _ && (0, u.xi)(t.id, [_.id]), null != y && ((0, o.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("45033"), n.e("46717"), n.e("13693")]).then(n.bind(n, 788099));
            return n => {
                let {
                    onClose: l,
                    transitionState: i
                } = n;
                return (0, r.jsx)(e, {
                    otherUserId: t.getRecipientId(),
                    channelId: t.id,
                    warningId: y.id,
                    warningType: y.type,
                    onClose: l,
                    transitionState: i
                })
            }
        }, {
            modalKey: b.V
        }), (0, g._$)({
            channelId: t.id,
            senderId: t.getRecipientId(),
            warningId: y.id,
            warningType: y.type,
            cta: g.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
            isNudgeWarning: null != _
        }))
    }, [_, y, t]);
    return null == y ? null : (0, r.jsx)(a.m_, {
        forceOpen: E,
        text: C,
        position: "bottom",
        children: (0, r.jsx)(m.Ay.Icon, {
            icon: o.lmn,
            onClick: I,
            tooltip: A.intl.string(A.t.rpc2qv),
            tooltipDisabled: null != _
        })
    })
})