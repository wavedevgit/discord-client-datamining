/** chunk id: 690953 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968);
n(64700);
var l = n(417597),
    s = n(397927),
    a = n(882997),
    r = n(731474),
    o = n(383501),
    d = n(977997),
    c = n(458829),
    u = n(857253),
    h = n(694967),
    A = n(431516),
    _ = n(652215),
    m = n(985018);

function p(e) {
    let t = (0, l.bG)([o.A], () => o.A.getChannelId() === e.id),
        p = (0, u.A)(),
        g = p?.channelId === e.id,
        f = (0, r.J)(e) && !e.isPrivate(),
        E = (0, r.A)(e),
        x = !(0, l.bG)([d.A], () => d.A.isInChannel(e.id)) && E || f,
        I = (0, h.A)();
    if (!g && 0 === I.length) return null;
    let C = (0, A.A)(void 0);
    return g ? (0, i.jsx)(s.Drp, {
        label: m.intl.string(m.t.PlwgdU),
        id: "handoff",
        action: () => {
            (0, c.x)(p)
        },
        icon: C,
        leadingAccessory: {
            type: "icon",
            icon: C
        },
        disabled: x
    }) : I.map(l => {
        var r, o;
        let d = (0, A.A)(l.type);
        return (0, i.jsx)(s.Drp, {
            id: `transfer-${l.type}-${l.id}`,
            label: (r = l.type, o = t, r === _.fg2.XBOX ? o ? m.intl.string(m.t["qVE/VF"]) : m.intl.string(m.t.E8euSk) : r === _.fg2.PLAYSTATION ? o ? m.intl.string(m.t.vzfxmY) : m.intl.string(m.t.QxEYDj) : r === _.fg2.PLAYSTATION_STAGING ? o ? m.intl.string(m.t.BDiXtV) : m.intl.string(m.t["bhdB9+"]) : void 0),
            action: () => {
                !l.twoWayLink || l.revoked ? (0, a.A)({
                    platformType: l.type,
                    location: "Console Transfer Item"
                }) : l.type === _.fg2.XBOX ? (0, s.mMO)(async () => {
                    let {
                        default: t
                    } = await Promise.all([n.e("78598"), n.e("67670")]).then(n.bind(n, 188072));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        channel: e
                    })
                }) : (l.type === _.fg2.PLAYSTATION || l.type === _.fg2.PLAYSTATION_STAGING) && (0, s.mMO)(async () => {
                    let {
                        default: t
                    } = await n.e("71282").then(n.bind(n, 315337));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        platform: l.type,
                        channel: e
                    })
                })
            },
            icon: d,
            leadingAccessory: {
                type: "icon",
                icon: d
            },
            disabled: x
        }, l.id)
    })
}