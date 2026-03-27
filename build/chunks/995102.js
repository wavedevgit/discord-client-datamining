/** chunk id: 995102 params = (module,exports,require) **/
n.d(e, {
    A: () => v,
    g: () => p
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    a = n(914430),
    u = n(832712),
    d = n(145408),
    s = n(543465),
    g = n(477427),
    c = n(812141),
    m = n(47167),
    o = n(652215),
    b = n(355097),
    _ = n(985018);
let p = () => [{
    value: b.Xx.MINUTES_15,
    label: _.intl.string(_.t["8ot6gv"])
}, {
    value: b.Xx.HOURS_1,
    label: _.intl.string(_.t.UMWBZr)
}, {
    value: b.Xx.HOURS_3,
    label: _.intl.string(_.t.QmYWtu)
}, {
    value: b.Xx.HOURS_8,
    label: _.intl.string(_.t.EpAXPC)
}, {
    value: b.Xx.HOURS_24,
    label: _.intl.string(_.t["755t4q"])
}, {
    value: b.Xx.ALWAYS,
    label: _.intl.string(_.t.r3LawO)
}];

function v(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [b, v] = (0, l.yK)([s.Ay], () => [s.Ay.isChannelMuted(t.guild_id, t.id), s.Ay.getChannelMuteConfig(t.guild_id, t.id)]),
        h = (0, d.M)(v),
        O = (0, m.Ay)(t, !0);

    function f(e) {
        e && t.type === o.rbe.GUILD_CATEGORY && (0, a.Gv)(t.id), u.A.updateChannelOverrideSettings(t.guild_id, t.id, {
            muted: e
        }, g.G_.muted(e))
    }
    let x = _.intl.string(_.t.tbeRRJ),
        A = _.intl.string(_.t.OYefme);
    switch (t.type) {
        case o.rbe.GUILD_CATEGORY:
            x = _.intl.string(_.t.pNMCg2), A = _.intl.string(_.t.olaBeG);
            break;
        case o.rbe.GROUP_DM:
            x = _.intl.string(_.t.LO3kaK), A = _.intl.string(_.t["s5/5fm"]);
            break;
        case o.rbe.DM:
            x = n ? _.intl.format(_.t.byjuJm, {
                name: O
            }) : _.intl.string(_.t.LO3kaK), A = n ? _.intl.format(_.t["eC+9rj"], {
                name: O
            }) : _.intl.string(_.t["s5/5fm"]);
            break;
        default:
            x = _.intl.string(_.t.tbeRRJ), A = _.intl.string(_.t.OYefme)
    }
    return b ? (0, i.jsx)(r.Drp, {
        id: "unmute-channel",
        label: A,
        subtext: h,
        action: () => f(!1)
    }) : (0, i.jsx)(r.Drp, {
        id: "mute-channel",
        label: x,
        action: () => {
            f(!0)
        },
        children: p().map(n => {
            let {
                value: l,
                label: d
            } = n;
            return (0, i.jsx)(r.Drp, {
                id: `${l}`,
                label: d,
                action: () => {
                    let n;
                    return t.type === o.rbe.GUILD_CATEGORY && (0, a.Gv)(t.id), n = c.p(l), void u.A.updateChannelOverrideSettings(t.guild_id, t.id, n, g.fd.Muted, e)
                }
            }, l)
        })
    })
}