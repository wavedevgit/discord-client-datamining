/** chunk id: 995102 params = (module,exports,require) **/
"use strict";
t.d(n, {
    A: () => N,
    g: () => A
});
var i = t(627968);
t(64700);
var l = t(311907),
    r = t(397927),
    s = t(914430),
    a = t(832712),
    u = t(145408),
    c = t(543465),
    o = t(477427),
    _ = t(812141),
    d = t(47167),
    S = t(652215),
    E = t(355097),
    g = t(985018);
let A = () => [{
    value: E.Xx.MINUTES_15,
    label: g.intl.string(g.t["8ot6gv"])
}, {
    value: E.Xx.HOURS_1,
    label: g.intl.string(g.t.UMWBZr)
}, {
    value: E.Xx.HOURS_3,
    label: g.intl.string(g.t.QmYWtu)
}, {
    value: E.Xx.HOURS_8,
    label: g.intl.string(g.t.EpAXPC)
}, {
    value: E.Xx.HOURS_24,
    label: g.intl.string(g.t["755t4q"])
}, {
    value: E.Xx.ALWAYS,
    label: g.intl.string(g.t.r3LawO)
}];

function N(e, n) {
    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [E, N] = (0, l.yK)([c.Ay], () => [c.Ay.isChannelMuted(e.guild_id, e.id), c.Ay.getChannelMuteConfig(e.guild_id, e.id)]),
        I = (0, u.M)(N),
        f = (0, d.Ay)(e, !0);

    function h(n) {
        n && e.type === S.rbe.GUILD_CATEGORY && (0, s.Gv)(e.id), a.A.updateChannelOverrideSettings(e.guild_id, e.id, {
            muted: n
        }, o.G_.muted(n))
    }
    let C = g.intl.string(g.t.tbeRRJ),
        O = g.intl.string(g.t.OYefme);
    switch (e.type) {
        case S.rbe.GUILD_CATEGORY:
            C = g.intl.string(g.t.pNMCg2), O = g.intl.string(g.t.olaBeG);
            break;
        case S.rbe.GROUP_DM:
            C = g.intl.string(g.t.LO3kaK), O = g.intl.string(g.t["s5/5fm"]);
            break;
        case S.rbe.DM:
            C = t ? g.intl.format(g.t.byjuJm, {
                name: f
            }) : g.intl.string(g.t.LO3kaK), O = t ? g.intl.format(g.t["eC+9rj"], {
                name: f
            }) : g.intl.string(g.t["s5/5fm"]);
            break;
        default:
            C = g.intl.string(g.t.tbeRRJ), O = g.intl.string(g.t.OYefme)
    }
    return E ? (0, i.jsx)(r.Drp, {
        id: "unmute-channel",
        label: O,
        subtext: I,
        action: () => h(!1)
    }) : (0, i.jsx)(r.Drp, {
        id: "mute-channel",
        label: C,
        action: () => {
            h(!0)
        },
        children: A().map(t => {
            let {
                value: l,
                label: u
            } = t;
            return (0, i.jsx)(r.Drp, {
                id: `${l}`,
                label: u,
                action: () => {
                    let t;
                    return e.type === S.rbe.GUILD_CATEGORY && (0, s.Gv)(e.id), t = _.p(l), void a.A.updateChannelOverrideSettings(e.guild_id, e.id, t, o.fd.Muted, n)
                }
            }, l)
        })
    })
}