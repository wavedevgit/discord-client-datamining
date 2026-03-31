/** chunk id: 690953 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var l = n(417597),
    r = n(397927),
    a = n(882997),
    u = n(731474),
    d = n(383501),
    s = n(977997),
    o = n(458829),
    c = n(857253),
    A = n(694967),
    f = n(431516),
    E = n(652215),
    h = n(985018);

function _(e) {
    let t = (0, l.bG)([d.A], () => d.A.getChannelId() === e.id),
        _ = (0, c.A)(),
        g = _?.channelId === e.id,
        I = (0, u.J)(e) && !e.isPrivate(),
        v = (0, u.A)(e),
        C = !(0, l.bG)([s.A], () => s.A.isInChannel(e.id)) && v || I,
        p = (0, A.A)();
    if (!g && 0 === p.length) return null;
    let N = (0, f.A)(void 0);
    return g ? (0, i.jsx)(r.Drp, {
        label: h.intl.string(h.t.PlwgdU),
        id: "handoff",
        action: () => {
            (0, o.x)(_)
        },
        icon: N,
        leadingAccessory: {
            type: "icon",
            icon: N
        },
        disabled: C
    }) : p.map(l => {
        var u, d;
        let s = (0, f.A)(l.type);
        return (0, i.jsx)(r.Drp, {
            id: `transfer-${l.type}-${l.id}`,
            label: (u = l.type, d = t, u === E.fg2.XBOX ? d ? h.intl.string(h.t["qVE/VF"]) : h.intl.string(h.t.E8euSk) : u === E.fg2.PLAYSTATION ? d ? h.intl.string(h.t.vzfxmY) : h.intl.string(h.t.QxEYDj) : u === E.fg2.PLAYSTATION_STAGING ? d ? h.intl.string(h.t.BDiXtV) : h.intl.string(h.t["bhdB9+"]) : void 0),
            action: () => {
                !l.twoWayLink || l.revoked ? (0, a.A)({
                    platformType: l.type,
                    location: "Console Transfer Item"
                }) : l.type === E.fg2.XBOX ? (0, r.mMO)(async () => {
                    let {
                        default: t
                    } = await Promise.all([n.e("94201"), n.e("67670")]).then(n.bind(n, 188072));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        channel: e
                    })
                }) : (l.type === E.fg2.PLAYSTATION || l.type === E.fg2.PLAYSTATION_STAGING) && (0, r.mMO)(async () => {
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
            icon: s,
            leadingAccessory: {
                type: "icon",
                icon: s
            },
            disabled: C
        }, l.id)
    })
}