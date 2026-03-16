/** chunk id: 995102 params = (module,exports,require) **/
e.d(n, {
    A: () => g,
    g: () => p
});
var i = e(627968);
e(64700);
var l = e(311907),
    a = e(397927),
    r = e(914430),
    d = e(832712),
    s = e(392567),
    o = e(543465),
    u = e(477427),
    c = e(812141),
    f = e(47167),
    h = e(652215),
    A = e(815968),
    b = e(985018);
let p = () => [{
    value: A.Xx.MINUTES_15,
    label: b.intl.string(b.t["8ot6gv"])
}, {
    value: A.Xx.HOURS_1,
    label: b.intl.string(b.t.UMWBZr)
}, {
    value: A.Xx.HOURS_3,
    label: b.intl.string(b.t.QmYWtu)
}, {
    value: A.Xx.HOURS_8,
    label: b.intl.string(b.t.EpAXPC)
}, {
    value: A.Xx.HOURS_24,
    label: b.intl.string(b.t["755t4q"])
}, {
    value: A.Xx.ALWAYS,
    label: b.intl.string(b.t.r3LawO)
}];

function g(t, n) {
    let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [A, g] = (0, l.yK)([o.Ay], () => [o.Ay.isChannelMuted(t.guild_id, t.id), o.Ay.getChannelMuteConfig(t.guild_id, t.id)]),
        v = (0, s.M)(g),
        C = (0, f.Ay)(t, !0);

    function _(n) {
        n && t.type === h.rbe.GUILD_CATEGORY && (0, r.Gv)(t.id), d.A.updateChannelOverrideSettings(t.guild_id, t.id, {
            muted: n
        }, u.G_.muted(n))
    }
    let E = b.intl.string(b.t.tbeRRJ),
        m = b.intl.string(b.t.OYefme);
    switch (t.type) {
        case h.rbe.GUILD_CATEGORY:
            E = b.intl.string(b.t.pNMCg2), m = b.intl.string(b.t.olaBeG);
            break;
        case h.rbe.GROUP_DM:
            E = b.intl.string(b.t.LO3kaK), m = b.intl.string(b.t["s5/5fm"]);
            break;
        case h.rbe.DM:
            E = e ? b.intl.format(b.t.byjuJm, {
                name: C
            }) : b.intl.string(b.t.LO3kaK), m = e ? b.intl.format(b.t["eC+9rj"], {
                name: C
            }) : b.intl.string(b.t["s5/5fm"]);
            break;
        default:
            E = b.intl.string(b.t.tbeRRJ), m = b.intl.string(b.t.OYefme)
    }
    return A ? (0, i.jsx)(a.Drp, {
        id: "unmute-channel",
        label: m,
        subtext: v,
        action: () => _(!1)
    }) : (0, i.jsx)(a.Drp, {
        id: "mute-channel",
        label: E,
        action: () => {
            _(!0)
        },
        children: p().map(e => {
            let {
                value: l,
                label: s
            } = e;
            return (0, i.jsx)(a.Drp, {
                id: `${l}`,
                label: s,
                action: () => {
                    let e;
                    return t.type === h.rbe.GUILD_CATEGORY && (0, r.Gv)(t.id), e = c.p(l), void d.A.updateChannelOverrideSettings(t.guild_id, t.id, e, u.fd.Muted, n)
                }
            }, l)
        })
    })
}