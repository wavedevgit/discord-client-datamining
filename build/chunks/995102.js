/** chunk id: 995102 params = (module,exports,require) **/
i.d(n, {
    A: () => p,
    g: () => m
});
var e = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    a = i(914430),
    s = i(832712),
    d = i(145408),
    o = i(543465),
    u = i(477427),
    c = i(812141),
    g = i(47167),
    A = i(652215),
    h = i(355097),
    b = i(985018);
let m = () => [{
    value: h.Xx.MINUTES_15,
    label: b.intl.string(b.t["8ot6gv"])
}, {
    value: h.Xx.HOURS_1,
    label: b.intl.string(b.t.UMWBZr)
}, {
    value: h.Xx.HOURS_3,
    label: b.intl.string(b.t.QmYWtu)
}, {
    value: h.Xx.HOURS_8,
    label: b.intl.string(b.t.EpAXPC)
}, {
    value: h.Xx.HOURS_24,
    label: b.intl.string(b.t["755t4q"])
}, {
    value: h.Xx.ALWAYS,
    label: b.intl.string(b.t.r3LawO)
}];

function p(t, n) {
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [h, p] = (0, l.yK)([o.Ay], () => [o.Ay.isChannelMuted(t.guild_id, t.id), o.Ay.getChannelMuteConfig(t.guild_id, t.id)]),
        f = (0, d.M)(p),
        v = (0, g.Ay)(t, !0);

    function j(n) {
        n && t.type === A.rbe.GUILD_CATEGORY && (0, a.Gv)(t.id), s.A.updateChannelOverrideSettings(t.guild_id, t.id, {
            muted: n
        }, u.G_.muted(n))
    }
    let x = b.intl.string(b.t.tbeRRJ),
        C = b.intl.string(b.t.OYefme);
    switch (t.type) {
        case A.rbe.GUILD_CATEGORY:
            x = b.intl.string(b.t.pNMCg2), C = b.intl.string(b.t.olaBeG);
            break;
        case A.rbe.GROUP_DM:
            x = b.intl.string(b.t.LO3kaK), C = b.intl.string(b.t["s5/5fm"]);
            break;
        case A.rbe.DM:
            x = i ? b.intl.format(b.t.byjuJm, {
                name: v
            }) : b.intl.string(b.t.LO3kaK), C = i ? b.intl.format(b.t["eC+9rj"], {
                name: v
            }) : b.intl.string(b.t["s5/5fm"]);
            break;
        default:
            x = b.intl.string(b.t.tbeRRJ), C = b.intl.string(b.t.OYefme)
    }
    return h ? (0, e.jsx)(r.Drp, {
        id: "unmute-channel",
        label: C,
        subtext: f,
        action: () => j(!1)
    }) : (0, e.jsx)(r.Drp, {
        id: "mute-channel",
        label: x,
        action: () => {
            j(!0)
        },
        children: m().map(i => {
            let {
                value: l,
                label: d
            } = i;
            return (0, e.jsx)(r.Drp, {
                id: `${l}`,
                label: d,
                action: () => {
                    let i;
                    return t.type === A.rbe.GUILD_CATEGORY && (0, a.Gv)(t.id), i = c.p(l), void s.A.updateChannelOverrideSettings(t.guild_id, t.id, i, u.fd.Muted, n)
                }
            }, l)
        })
    })
}