/** chunk id: 690953 params = (module,exports,require) **/
n.d(t, {
    A: () => v
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
    g = n(985018);

function v(e) {
    let t = (0, l.bG)([d.A], () => d.A.getChannelId() === e.id),
        v = (0, c.A)(),
        _ = v?.channelId === e.id,
        h = (0, u.J)(e) && !e.isPrivate(),
        C = (0, u.A)(e),
        N = !(0, l.bG)([s.A], () => s.A.isInChannel(e.id)) && C || h,
        I = (0, A.A)();
    if (!_ && 0 === I.length) return null;
    let p = (0, f.A)(void 0);
    return _ ? (0, i.jsx)(r.Drp, {
        label: g.intl.string(g.t.PlwgdU),
        id: "handoff",
        action: () => {
            (0, o.x)(v)
        },
        icon: p,
        leadingAccessory: {
            type: "icon",
            icon: p
        },
        disabled: N
    }) : I.map(l => {
        var u, d;
        let s = (0, f.A)(l.type);
        return (0, i.jsx)(r.Drp, {
            id: `transfer-${l.type}-${l.id}`,
            label: (u = l.type, d = t, u === E.fg2.XBOX ? d ? g.intl.string(g.t["qVE/VF"]) : g.intl.string(g.t.E8euSk) : u === E.fg2.PLAYSTATION ? d ? g.intl.string(g.t.vzfxmY) : g.intl.string(g.t.QxEYDj) : u === E.fg2.PLAYSTATION_STAGING ? d ? g.intl.string(g.t.BDiXtV) : g.intl.string(g.t["bhdB9+"]) : void 0),
            action: () => {
                !l.twoWayLink || l.revoked ? (0, a.A)({
                    platformType: l.type,
                    location: "Console Transfer Item"
                }) : l.type === E.fg2.XBOX ? (0, r.mMO)(async () => {
                    let {
                        default: t
                    } = await Promise.all([n.e("93635"), n.e("67670")]).then(n.bind(n, 188072));
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
            disabled: N
        }, l.id)
    })
}