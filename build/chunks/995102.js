/** chunk id: 995102 params = (module,exports,require) **/
i.d(n, {
    Ay: () => f,
    gv: () => p
});
var e = i(627968);
i(64700);
var l = i(989349),
    r = i.n(l),
    a = i(311907),
    s = i(397927),
    d = i(914430),
    o = i(832712),
    u = i(392567),
    c = i(543465),
    g = i(477427),
    A = i(47167),
    h = i(652215),
    m = i(815968),
    b = i(985018);
let p = () => [{
    value: m.Xx.MINUTES_15,
    label: b.intl.string(b.t["8ot6gv"])
}, {
    value: m.Xx.HOURS_1,
    label: b.intl.string(b.t.UMWBZr)
}, {
    value: m.Xx.HOURS_3,
    label: b.intl.string(b.t.QmYWtu)
}, {
    value: m.Xx.HOURS_8,
    label: b.intl.string(b.t.EpAXPC)
}, {
    value: m.Xx.HOURS_24,
    label: b.intl.string(b.t["755t4q"])
}, {
    value: m.Xx.ALWAYS,
    label: b.intl.string(b.t.r3LawO)
}];

function f(t, n) {
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [l, m] = (0, a.yK)([c.Ay], () => [c.Ay.isChannelMuted(t.guild_id, t.id), c.Ay.getChannelMuteConfig(t.guild_id, t.id)]),
        f = (0, u.M)(m),
        v = (0, A.Ay)(t, !0);

    function j(n) {
        n && t.type === h.rbe.GUILD_CATEGORY && (0, d.Gv)(t.id), o.A.updateChannelOverrideSettings(t.guild_id, t.id, {
            muted: n
        }, g.G_.muted(n))
    }
    let _ = b.intl.string(b.t.tbeRRJ),
        x = b.intl.string(b.t.OYefme);
    switch (t.type) {
        case h.rbe.GUILD_CATEGORY:
            _ = b.intl.string(b.t.pNMCg2), x = b.intl.string(b.t.olaBeG);
            break;
        case h.rbe.GROUP_DM:
            _ = b.intl.string(b.t.LO3kaK), x = b.intl.string(b.t["s5/5fm"]);
            break;
        case h.rbe.DM:
            _ = i ? b.intl.format(b.t.byjuJm, {
                name: v
            }) : b.intl.string(b.t.LO3kaK), x = i ? b.intl.format(b.t["eC+9rj"], {
                name: v
            }) : b.intl.string(b.t["s5/5fm"]);
            break;
        default:
            _ = b.intl.string(b.t.tbeRRJ), x = b.intl.string(b.t.OYefme)
    }
    return l ? (0, e.jsx)(s.Drp, {
        id: "unmute-channel",
        label: x,
        subtext: f,
        action: () => j(!1)
    }) : (0, e.jsx)(s.Drp, {
        id: "mute-channel",
        label: _,
        action: () => {
            j(!0)
        },
        children: p().map(i => {
            let {
                value: l,
                label: a
            } = i;
            return (0, e.jsx)(s.Drp, {
                id: `${l}`,
                label: a,
                action: () => {
                    let i, e;
                    return t.type === h.rbe.GUILD_CATEGORY && (0, d.Gv)(t.id), i = l > 0 ? r()().add(l, "second").toISOString() : null, e = {
                        muted: !0,
                        mute_config: {
                            selected_time_window: l,
                            end_time: i
                        }
                    }, void o.A.updateChannelOverrideSettings(t.guild_id, t.id, e, g.fd.Muted, n)
                }
            }, l)
        })
    })
}