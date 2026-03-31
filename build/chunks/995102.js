/** chunk id: 995102 params = (module,exports,require) **/
e.d(t, {
    A: () => E,
    g: () => b
});
var i = e(627968);
e(64700);
var l = e(311907),
    a = e(397927),
    r = e(914430),
    s = e(832712),
    o = e(145408),
    d = e(543465),
    u = e(477427),
    c = e(812141),
    h = e(47167),
    A = e(652215),
    f = e(355097),
    _ = e(985018);
let b = () => [{
    value: f.Xx.MINUTES_15,
    label: _.intl.string(_.t["8ot6gv"])
}, {
    value: f.Xx.HOURS_1,
    label: _.intl.string(_.t.UMWBZr)
}, {
    value: f.Xx.HOURS_3,
    label: _.intl.string(_.t.QmYWtu)
}, {
    value: f.Xx.HOURS_8,
    label: _.intl.string(_.t.EpAXPC)
}, {
    value: f.Xx.HOURS_24,
    label: _.intl.string(_.t["755t4q"])
}, {
    value: f.Xx.ALWAYS,
    label: _.intl.string(_.t.r3LawO)
}];

function E(n, t) {
    let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [f, E] = (0, l.yK)([d.Ay], () => [d.Ay.isChannelMuted(n.guild_id, n.id), d.Ay.getChannelMuteConfig(n.guild_id, n.id)]),
        g = (0, o.M)(E),
        p = (0, h.Ay)(n, !0);

    function v(t) {
        t && n.type === A.rbe.GUILD_CATEGORY && (0, r.Gv)(n.id), s.A.updateChannelOverrideSettings(n.guild_id, n.id, {
            muted: t
        }, u.G_.muted(t))
    }
    let C = _.intl.string(_.t.tbeRRJ),
        O = _.intl.string(_.t.OYefme);
    switch (n.type) {
        case A.rbe.GUILD_CATEGORY:
            C = _.intl.string(_.t.pNMCg2), O = _.intl.string(_.t.olaBeG);
            break;
        case A.rbe.GROUP_DM:
            C = _.intl.string(_.t.LO3kaK), O = _.intl.string(_.t["s5/5fm"]);
            break;
        case A.rbe.DM:
            C = e ? _.intl.format(_.t.byjuJm, {
                name: p
            }) : _.intl.string(_.t.LO3kaK), O = e ? _.intl.format(_.t["eC+9rj"], {
                name: p
            }) : _.intl.string(_.t["s5/5fm"]);
            break;
        default:
            C = _.intl.string(_.t.tbeRRJ), O = _.intl.string(_.t.OYefme)
    }
    return f ? (0, i.jsx)(a.Drp, {
        id: "unmute-channel",
        label: O,
        subtext: g,
        action: () => v(!1)
    }) : (0, i.jsx)(a.Drp, {
        id: "mute-channel",
        label: C,
        action: () => {
            v(!0)
        },
        children: b().map(e => {
            let {
                value: l,
                label: o
            } = e;
            return (0, i.jsx)(a.Drp, {
                id: `${l}`,
                label: o,
                action: () => {
                    let e;
                    return n.type === A.rbe.GUILD_CATEGORY && (0, r.Gv)(n.id), e = c.p(l), void s.A.updateChannelOverrideSettings(n.guild_id, n.id, e, u.fd.Muted, t)
                }
            }, l)
        })
    })
}