/** chunk id: 995102 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S,
    g: () => m
});
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(397927),
    o = n(914430),
    l = n(832712),
    s = n(145408),
    c = n(543465),
    _ = n(477427),
    u = n(812141),
    d = n(47167),
    b = n(652215),
    g = n(355097),
    f = n(985018);
let m = () => [{
    value: g.Xx.MINUTES_15,
    label: f.intl.string(f.t["8ot6gv"])
}, {
    value: g.Xx.HOURS_1,
    label: f.intl.string(f.t.UMWBZr)
}, {
    value: g.Xx.HOURS_3,
    label: f.intl.string(f.t.QmYWtu)
}, {
    value: g.Xx.HOURS_8,
    label: f.intl.string(f.t.EpAXPC)
}, {
    value: g.Xx.HOURS_24,
    label: f.intl.string(f.t["755t4q"])
}, {
    value: g.Xx.ALWAYS,
    label: f.intl.string(f.t.r3LawO)
}];

function S(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [g, S] = (0, r.yK)([c.Ay], () => [c.Ay.isChannelMuted(e.guild_id, e.id), c.Ay.getChannelMuteConfig(e.guild_id, e.id)]),
        A = (0, s.M)(S),
        E = (0, d.Ay)(e, !0);

    function h(t) {
        t && e.type === b.rbe.GUILD_CATEGORY && (0, o.Gv)(e.id), l.A.updateChannelOverrideSettings(e.guild_id, e.id, {
            muted: t
        }, _.G_.muted(t))
    }
    let C = f.intl.string(f.t.tbeRRJ),
        I = f.intl.string(f.t.OYefme);
    switch (e.type) {
        case b.rbe.GUILD_CATEGORY:
            C = f.intl.string(f.t.pNMCg2), I = f.intl.string(f.t.olaBeG);
            break;
        case b.rbe.GROUP_DM:
            C = f.intl.string(f.t.LO3kaK), I = f.intl.string(f.t["s5/5fm"]);
            break;
        case b.rbe.DM:
            C = n ? f.intl.format(f.t.byjuJm, {
                name: E
            }) : f.intl.string(f.t.LO3kaK), I = n ? f.intl.format(f.t["eC+9rj"], {
                name: E
            }) : f.intl.string(f.t["s5/5fm"]);
            break;
        default:
            C = f.intl.string(f.t.tbeRRJ), I = f.intl.string(f.t.OYefme)
    }
    return g ? (0, i.jsx)(a.Drp, {
        id: "unmute-channel",
        label: I,
        subtext: A,
        action: () => h(!1)
    }) : (0, i.jsx)(a.Drp, {
        id: "mute-channel",
        label: C,
        action: () => {
            h(!0)
        },
        children: m().map(n => {
            let {
                value: r,
                label: s
            } = n;
            return (0, i.jsx)(a.Drp, {
                id: `${r}`,
                label: s,
                action: () => {
                    let n;
                    return e.type === b.rbe.GUILD_CATEGORY && (0, o.Gv)(e.id), n = u.p(r), void l.A.updateChannelOverrideSettings(e.guild_id, e.id, n, _.fd.Muted, t)
                }
            }, r)
        })
    })
}