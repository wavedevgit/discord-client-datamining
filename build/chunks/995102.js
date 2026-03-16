/** chunk id: 995102 params = (module,exports,require) **/
n.d(t, {
    A: () => p,
    g: () => b
});
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(397927),
    l = n(914430),
    d = n(832712),
    o = n(392567),
    u = n(543465),
    s = n(477427),
    f = n(812141),
    c = n(47167),
    h = n(652215),
    v = n(815968),
    A = n(985018);
let b = () => [{
    value: v.Xx.MINUTES_15,
    label: A.intl.string(A.t["8ot6gv"])
}, {
    value: v.Xx.HOURS_1,
    label: A.intl.string(A.t.UMWBZr)
}, {
    value: v.Xx.HOURS_3,
    label: A.intl.string(A.t.QmYWtu)
}, {
    value: v.Xx.HOURS_8,
    label: A.intl.string(A.t.EpAXPC)
}, {
    value: v.Xx.HOURS_24,
    label: A.intl.string(A.t["755t4q"])
}, {
    value: v.Xx.ALWAYS,
    label: A.intl.string(A.t.r3LawO)
}];

function p(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [v, p] = (0, r.yK)([u.Ay], () => [u.Ay.isChannelMuted(e.guild_id, e.id), u.Ay.getChannelMuteConfig(e.guild_id, e.id)]),
        C = (0, o.M)(p),
        E = (0, c.Ay)(e, !0);

    function _(t) {
        t && e.type === h.rbe.GUILD_CATEGORY && (0, l.Gv)(e.id), d.A.updateChannelOverrideSettings(e.guild_id, e.id, {
            muted: t
        }, s.G_.muted(t))
    }
    let m = A.intl.string(A.t.tbeRRJ),
        g = A.intl.string(A.t.OYefme);
    switch (e.type) {
        case h.rbe.GUILD_CATEGORY:
            m = A.intl.string(A.t.pNMCg2), g = A.intl.string(A.t.olaBeG);
            break;
        case h.rbe.GROUP_DM:
            m = A.intl.string(A.t.LO3kaK), g = A.intl.string(A.t["s5/5fm"]);
            break;
        case h.rbe.DM:
            m = n ? A.intl.format(A.t.byjuJm, {
                name: E
            }) : A.intl.string(A.t.LO3kaK), g = n ? A.intl.format(A.t["eC+9rj"], {
                name: E
            }) : A.intl.string(A.t["s5/5fm"]);
            break;
        default:
            m = A.intl.string(A.t.tbeRRJ), g = A.intl.string(A.t.OYefme)
    }
    return v ? (0, i.jsx)(a.Drp, {
        id: "unmute-channel",
        label: g,
        subtext: C,
        action: () => _(!1)
    }) : (0, i.jsx)(a.Drp, {
        id: "mute-channel",
        label: m,
        action: () => {
            _(!0)
        },
        children: b().map(n => {
            let {
                value: r,
                label: o
            } = n;
            return (0, i.jsx)(a.Drp, {
                id: `${r}`,
                label: o,
                action: () => {
                    let n;
                    return e.type === h.rbe.GUILD_CATEGORY && (0, l.Gv)(e.id), n = f.p(r), void d.A.updateChannelOverrideSettings(e.guild_id, e.id, n, s.fd.Muted, t)
                }
            }, r)
        })
    })
}