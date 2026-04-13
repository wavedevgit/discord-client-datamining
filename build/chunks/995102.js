/** chunk id: 995102 params = (module,exports,require) **/
n.d(e, {
    A: () => p,
    g: () => v
});
var i = n(627968);
n(64700);
var a = n(311907),
    l = n(397927),
    r = n(914430),
    o = n(832712),
    d = n(145408),
    u = n(543465),
    s = n(477427),
    c = n(812141),
    f = n(47167),
    h = n(652215),
    _ = n(355097),
    A = n(985018);
let v = () => [{
    value: _.Xx.MINUTES_15,
    label: A.intl.string(A.t["8ot6gv"])
}, {
    value: _.Xx.HOURS_1,
    label: A.intl.string(A.t.UMWBZr)
}, {
    value: _.Xx.HOURS_3,
    label: A.intl.string(A.t.QmYWtu)
}, {
    value: _.Xx.HOURS_8,
    label: A.intl.string(A.t.EpAXPC)
}, {
    value: _.Xx.HOURS_24,
    label: A.intl.string(A.t["755t4q"])
}, {
    value: _.Xx.ALWAYS,
    label: A.intl.string(A.t.r3LawO)
}];

function p(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [_, p] = (0, a.yK)([u.Ay], () => [u.Ay.isChannelMuted(t.guild_id, t.id), u.Ay.getChannelMuteConfig(t.guild_id, t.id)]),
        b = (0, d.M)(p),
        E = (0, f.Ay)(t, !0);

    function C(e) {
        e && t.type === h.rbe.GUILD_CATEGORY && (0, r.Gv)(t.id), o.A.updateChannelOverrideSettings(t.guild_id, t.id, {
            muted: e
        }, s.G_.muted(e))
    }
    let g = A.intl.string(A.t.tbeRRJ),
        O = A.intl.string(A.t.OYefme);
    switch (t.type) {
        case h.rbe.GUILD_CATEGORY:
            g = A.intl.string(A.t.pNMCg2), O = A.intl.string(A.t.olaBeG);
            break;
        case h.rbe.GROUP_DM:
            g = A.intl.string(A.t.LO3kaK), O = A.intl.string(A.t["s5/5fm"]);
            break;
        case h.rbe.DM:
            g = n ? A.intl.format(A.t.byjuJm, {
                name: E
            }) : A.intl.string(A.t.LO3kaK), O = n ? A.intl.format(A.t["eC+9rj"], {
                name: E
            }) : A.intl.string(A.t["s5/5fm"]);
            break;
        default:
            g = A.intl.string(A.t.tbeRRJ), O = A.intl.string(A.t.OYefme)
    }
    return _ ? (0, i.jsx)(l.Drp, {
        id: "unmute-channel",
        label: O,
        subtext: b,
        action: () => C(!1)
    }) : (0, i.jsx)(l.Drp, {
        id: "mute-channel",
        label: g,
        action: () => {
            C(!0)
        },
        children: v().map(n => {
            let {
                value: a,
                label: d
            } = n;
            return (0, i.jsx)(l.Drp, {
                id: `${a}`,
                label: d,
                action: () => {
                    let n;
                    return t.type === h.rbe.GUILD_CATEGORY && (0, r.Gv)(t.id), n = c.p(a), void o.A.updateChannelOverrideSettings(t.guild_id, t.id, n, s.fd.Muted, e)
                }
            }, a)
        })
    })
}