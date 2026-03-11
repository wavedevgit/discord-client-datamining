/** chunk id: 995102 params = (module,exports,require) **/
n.d(t, {
    Ay: () => C,
    gv: () => p
});
var i = n(627968);
n(64700);
var r = n(989349),
    a = n.n(r),
    l = n(311907),
    d = n(397927),
    o = n(914430),
    u = n(832712),
    s = n(392567),
    f = n(543465),
    c = n(477427),
    h = n(47167),
    v = n(652215),
    A = n(815968),
    b = n(985018);
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

function C(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r, A] = (0, l.yK)([f.Ay], () => [f.Ay.isChannelMuted(e.guild_id, e.id), f.Ay.getChannelMuteConfig(e.guild_id, e.id)]),
        C = (0, s.M)(A),
        E = (0, h.Ay)(e, !0);

    function _(t) {
        t && e.type === v.rbe.GUILD_CATEGORY && (0, o.Gv)(e.id), u.A.updateChannelOverrideSettings(e.guild_id, e.id, {
            muted: t
        }, c.G_.muted(t))
    }
    let m = b.intl.string(b.t.tbeRRJ),
        g = b.intl.string(b.t.OYefme);
    switch (e.type) {
        case v.rbe.GUILD_CATEGORY:
            m = b.intl.string(b.t.pNMCg2), g = b.intl.string(b.t.olaBeG);
            break;
        case v.rbe.GROUP_DM:
            m = b.intl.string(b.t.LO3kaK), g = b.intl.string(b.t["s5/5fm"]);
            break;
        case v.rbe.DM:
            m = n ? b.intl.format(b.t.byjuJm, {
                name: E
            }) : b.intl.string(b.t.LO3kaK), g = n ? b.intl.format(b.t["eC+9rj"], {
                name: E
            }) : b.intl.string(b.t["s5/5fm"]);
            break;
        default:
            m = b.intl.string(b.t.tbeRRJ), g = b.intl.string(b.t.OYefme)
    }
    return r ? (0, i.jsx)(d.Drp, {
        id: "unmute-channel",
        label: g,
        subtext: C,
        action: () => _(!1)
    }) : (0, i.jsx)(d.Drp, {
        id: "mute-channel",
        label: m,
        action: () => {
            _(!0)
        },
        children: p().map(n => {
            let {
                value: r,
                label: l
            } = n;
            return (0, i.jsx)(d.Drp, {
                id: `${r}`,
                label: l,
                action: () => {
                    let n, i;
                    return e.type === v.rbe.GUILD_CATEGORY && (0, o.Gv)(e.id), n = r > 0 ? a()().add(r, "second").toISOString() : null, i = {
                        muted: !0,
                        mute_config: {
                            selected_time_window: r,
                            end_time: n
                        }
                    }, void u.A.updateChannelOverrideSettings(e.guild_id, e.id, i, c.fd.Muted, t)
                }
            }, r)
        })
    })
}