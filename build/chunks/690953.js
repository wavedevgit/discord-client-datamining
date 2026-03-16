/** chunk id: 690953 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var l = n(417597),
    r = n(397927),
    a = n(882997),
    d = n(731474),
    u = n(383501),
    s = n(977997),
    o = n(458829),
    c = n(857253),
    A = n(694967),
    f = n(431516),
    E = n(652215),
    h = n(985018);

function g(e) {
    let t = (0, l.bG)([u.A], () => u.A.getChannelId() === e.id),
        g = (0, c.A)(),
        v = g?.channelId === e.id,
        _ = (0, d.J)(e) && !e.isPrivate(),
        C = (0, d.A)(e),
        p = !(0, l.bG)([s.A], () => s.A.isInChannel(e.id)) && C || _,
        N = (0, A.A)();
    if (!v && 0 === N.length) return null;
    let I = (0, f.A)(void 0);
    return v ? (0, i.jsx)(r.Drp, {
        label: h.intl.string(h.t.PlwgdU),
        id: "handoff",
        action: () => {
            (0, o.x)(g)
        },
        icon: I,
        leadingAccessory: {
            type: "icon",
            icon: I
        },
        disabled: p
    }) : N.map(l => {
        var d, u;
        let s = (0, f.A)(l.type);
        return (0, i.jsx)(r.Drp, {
            id: `transfer-${l.type}-${l.id}`,
            label: (d = l.type, u = t, d === E.fg2.XBOX ? u ? h.intl.string(h.t["qVE/VF"]) : h.intl.string(h.t.E8euSk) : d === E.fg2.PLAYSTATION ? u ? h.intl.string(h.t.vzfxmY) : h.intl.string(h.t.QxEYDj) : d === E.fg2.PLAYSTATION_STAGING ? u ? h.intl.string(h.t.BDiXtV) : h.intl.string(h.t["bhdB9+"]) : void 0),
            action: () => {
                !l.twoWayLink || l.revoked ? (0, a.A)({
                    platformType: l.type,
                    location: "Console Transfer Item"
                }) : l.type === E.fg2.XBOX ? (0, r.mMO)(async () => {
                    let {
                        default: t
                    } = await Promise.all([n.e("66211"), n.e("67670")]).then(n.bind(n, 188072));
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
            disabled: p
        }, l.id)
    })
}