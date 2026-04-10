/** chunk id: 995102 params = (module,exports,require) **/
n.d(e, {
    A: () => b,
    g: () => _
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(914430),
    d = n(832712),
    o = n(145408),
    u = n(543465),
    s = n(477427),
    c = n(812141),
    f = n(47167),
    A = n(652215),
    h = n(355097),
    v = n(985018);
let _ = () => [{
    value: h.Xx.MINUTES_15,
    label: v.intl.string(v.t["8ot6gv"])
}, {
    value: h.Xx.HOURS_1,
    label: v.intl.string(v.t.UMWBZr)
}, {
    value: h.Xx.HOURS_3,
    label: v.intl.string(v.t.QmYWtu)
}, {
    value: h.Xx.HOURS_8,
    label: v.intl.string(v.t.EpAXPC)
}, {
    value: h.Xx.HOURS_24,
    label: v.intl.string(v.t["755t4q"])
}, {
    value: h.Xx.ALWAYS,
    label: v.intl.string(v.t.r3LawO)
}];

function b(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [h, b] = (0, l.yK)([u.Ay], () => [u.Ay.isChannelMuted(t.guild_id, t.id), u.Ay.getChannelMuteConfig(t.guild_id, t.id)]),
        p = (0, o.M)(b),
        E = (0, f.Ay)(t, !0);

    function C(e) {
        e && t.type === A.rbe.GUILD_CATEGORY && (0, r.Gv)(t.id), d.A.updateChannelOverrideSettings(t.guild_id, t.id, {
            muted: e
        }, s.G_.muted(e))
    }
    let g = v.intl.string(v.t.tbeRRJ),
        O = v.intl.string(v.t.OYefme);
    switch (t.type) {
        case A.rbe.GUILD_CATEGORY:
            g = v.intl.string(v.t.pNMCg2), O = v.intl.string(v.t.olaBeG);
            break;
        case A.rbe.GROUP_DM:
            g = v.intl.string(v.t.LO3kaK), O = v.intl.string(v.t["s5/5fm"]);
            break;
        case A.rbe.DM:
            g = n ? v.intl.format(v.t.byjuJm, {
                name: E
            }) : v.intl.string(v.t.LO3kaK), O = n ? v.intl.format(v.t["eC+9rj"], {
                name: E
            }) : v.intl.string(v.t["s5/5fm"]);
            break;
        default:
            g = v.intl.string(v.t.tbeRRJ), O = v.intl.string(v.t.OYefme)
    }
    return h ? (0, i.jsx)(a.Drp, {
        id: "unmute-channel",
        label: O,
        subtext: p,
        action: () => C(!1)
    }) : (0, i.jsx)(a.Drp, {
        id: "mute-channel",
        label: g,
        action: () => {
            C(!0)
        },
        children: _().map(n => {
            let {
                value: l,
                label: o
            } = n;
            return (0, i.jsx)(a.Drp, {
                id: `${l}`,
                label: o,
                action: () => {
                    let n;
                    return t.type === A.rbe.GUILD_CATEGORY && (0, r.Gv)(t.id), n = c.p(l), void d.A.updateChannelOverrideSettings(t.guild_id, t.id, n, s.fd.Muted, e)
                }
            }, l)
        })
    })
}