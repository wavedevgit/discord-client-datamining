/** chunk id: 995102 params = (module,exports,require) **/
e.d(n, {
    A: () => p,
    g: () => b
});
var i = e(627968);
e(64700);
var l = e(311907),
    a = e(397927),
    r = e(914430),
    o = e(832712),
    u = e(145408),
    d = e(543465),
    s = e(477427),
    c = e(812141),
    f = e(47167),
    h = e(652215),
    A = e(355097),
    _ = e(985018);
let b = () => [{
    value: A.Xx.MINUTES_15,
    label: _.intl.string(_.t["8ot6gv"])
}, {
    value: A.Xx.HOURS_1,
    label: _.intl.string(_.t.UMWBZr)
}, {
    value: A.Xx.HOURS_3,
    label: _.intl.string(_.t.QmYWtu)
}, {
    value: A.Xx.HOURS_8,
    label: _.intl.string(_.t.EpAXPC)
}, {
    value: A.Xx.HOURS_24,
    label: _.intl.string(_.t["755t4q"])
}, {
    value: A.Xx.ALWAYS,
    label: _.intl.string(_.t.r3LawO)
}];

function p(t, n) {
    let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [A, p] = (0, l.yK)([d.Ay], () => [d.Ay.isChannelMuted(t.guild_id, t.id), d.Ay.getChannelMuteConfig(t.guild_id, t.id)]),
        E = (0, u.M)(p),
        g = (0, f.Ay)(t, !0);

    function v(n) {
        n && t.type === h.rbe.GUILD_CATEGORY && (0, r.Gv)(t.id), o.A.updateChannelOverrideSettings(t.guild_id, t.id, {
            muted: n
        }, s.G_.muted(n))
    }
    let C = _.intl.string(_.t.tbeRRJ),
        O = _.intl.string(_.t.OYefme);
    switch (t.type) {
        case h.rbe.GUILD_CATEGORY:
            C = _.intl.string(_.t.pNMCg2), O = _.intl.string(_.t.olaBeG);
            break;
        case h.rbe.GROUP_DM:
            C = _.intl.string(_.t.LO3kaK), O = _.intl.string(_.t["s5/5fm"]);
            break;
        case h.rbe.DM:
            C = e ? _.intl.format(_.t.byjuJm, {
                name: g
            }) : _.intl.string(_.t.LO3kaK), O = e ? _.intl.format(_.t["eC+9rj"], {
                name: g
            }) : _.intl.string(_.t["s5/5fm"]);
            break;
        default:
            C = _.intl.string(_.t.tbeRRJ), O = _.intl.string(_.t.OYefme)
    }
    return A ? (0, i.jsx)(a.Drp, {
        id: "unmute-channel",
        label: O,
        subtext: E,
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
                label: u
            } = e;
            return (0, i.jsx)(a.Drp, {
                id: `${l}`,
                label: u,
                action: () => {
                    let e;
                    return t.type === h.rbe.GUILD_CATEGORY && (0, r.Gv)(t.id), e = c.p(l), void o.A.updateChannelOverrideSettings(t.guild_id, t.id, e, s.fd.Muted, n)
                }
            }, l)
        })
    })
}