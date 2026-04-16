/** chunk id: 995102 params = (module,exports,require) **/
n.d(e, {
    A: () => p,
    g: () => v
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(914430),
    o = n(832712),
    d = n(145408),
    u = n(543465),
    s = n(477427),
    f = n(812141),
    c = n(47167),
    h = n(652215),
    A = n(355097),
    _ = n(985018);
let v = () => [{
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

function p(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [A, p] = (0, l.yK)([u.Ay], () => [u.Ay.isChannelMuted(t.guild_id, t.id), u.Ay.getChannelMuteConfig(t.guild_id, t.id)]),
        b = (0, d.M)(p),
        E = (0, c.Ay)(t, !0);

    function C(e) {
        e && t.type === h.rbe.GUILD_CATEGORY && (0, r.Gv)(t.id), o.A.updateChannelOverrideSettings(t.guild_id, t.id, {
            muted: e
        }, s.G_.muted(e))
    }
    let O = _.intl.string(_.t.tbeRRJ),
        g = _.intl.string(_.t.OYefme);
    switch (t.type) {
        case h.rbe.GUILD_CATEGORY:
            O = _.intl.string(_.t.pNMCg2), g = _.intl.string(_.t.olaBeG);
            break;
        case h.rbe.GROUP_DM:
            O = _.intl.string(_.t.LO3kaK), g = _.intl.string(_.t["s5/5fm"]);
            break;
        case h.rbe.DM:
            O = n ? _.intl.format(_.t.byjuJm, {
                name: E
            }) : _.intl.string(_.t.LO3kaK), g = n ? _.intl.format(_.t["eC+9rj"], {
                name: E
            }) : _.intl.string(_.t["s5/5fm"]);
            break;
        default:
            O = _.intl.string(_.t.tbeRRJ), g = _.intl.string(_.t.OYefme)
    }
    return A ? (0, i.jsx)(a.Drp, {
        id: "unmute-channel",
        label: g,
        subtext: b,
        action: () => C(!1)
    }) : (0, i.jsx)(a.Drp, {
        id: "mute-channel",
        label: O,
        action: () => {
            C(!0)
        },
        children: v().map(n => {
            let {
                value: l,
                label: d
            } = n;
            return (0, i.jsx)(a.Drp, {
                id: `${l}`,
                label: d,
                action: () => {
                    let n;
                    return t.type === h.rbe.GUILD_CATEGORY && (0, r.Gv)(t.id), n = f.p(l), void o.A.updateChannelOverrideSettings(t.guild_id, t.id, n, s.fd.Muted, e)
                }
            }, l)
        })
    })
}