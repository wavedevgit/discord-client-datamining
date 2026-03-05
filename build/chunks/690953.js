/** chunk id: 690953, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var l = n(627968);
n(64700);
var i = n(417597),
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

function _(e) {
    let t = (0, i.bG)([d.A], () => d.A.getChannelId() === e.id),
        _ = (0, c.A)(),
        v = _?.channelId === e.id,
        h = (0, u.J)(e) && !e.isPrivate(),
        C = (0, u.A)(e),
        N = !(0, i.bG)([s.A], () => s.A.isInChannel(e.id)) && C || h,
        p = (0, A.A)();
    if (!v && 0 === p.length) return null;
    let I = (0, f.A)(void 0);
    return v ? (0, l.jsx)(r.Drp, {
        label: g.intl.string(g.t.PlwgdU),
        id: "handoff",
        action: () => {
            (0, o.x)(_)
        },
        icon: I,
        leadingAccessory: {
            type: "icon",
            icon: I
        },
        disabled: N
    }) : p.map(i => {
        var u, d;
        let s = (0, f.A)(i.type);
        return (0, l.jsx)(r.Drp, {
            id: `transfer-${i.type}-${i.id}`,
            label: (u = i.type, d = t, u === E.fg2.XBOX ? d ? g.intl.string(g.t["qVE/VF"]) : g.intl.string(g.t.E8euSk) : u === E.fg2.PLAYSTATION ? d ? g.intl.string(g.t.vzfxmY) : g.intl.string(g.t.QxEYDj) : u === E.fg2.PLAYSTATION_STAGING ? d ? g.intl.string(g.t.BDiXtV) : g.intl.string(g.t["bhdB9+"]) : void 0),
            action: () => {
                !i.twoWayLink || i.revoked ? (0, a.A)({
                    platformType: i.type,
                    location: "Console Transfer Item"
                }) : i.type === E.fg2.XBOX ? (0, r.mMO)(async () => {
                    let {
                        default: t
                    } = await Promise.all([n.e("93635"), n.e("67670")]).then(n.bind(n, 188072));
                    return n => (0, l.jsx)(t, {
                        ...n,
                        channel: e
                    })
                }) : (i.type === E.fg2.PLAYSTATION || i.type === E.fg2.PLAYSTATION_STAGING) && (0, r.mMO)(async () => {
                    let {
                        default: t
                    } = await n.e("71282").then(n.bind(n, 315337));
                    return n => (0, l.jsx)(t, {
                        ...n,
                        platform: i.type,
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
        }, i.id)
    })
}