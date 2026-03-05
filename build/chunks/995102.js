/** chunk id: 995102, original params: t,n,i (module,exports,require) **/
i.d(n, {
    Ay: () => v,
    gv: () => p,
    pB: () => f
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
    }],
    f = t => {
        let n = t > 0 ? r()().add(t, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: t,
                end_time: n
            }
        }
    };

function v(t, n) {
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [l, r] = (0, a.yK)([c.Ay], () => [c.Ay.isChannelMuted(t.guild_id, t.id), c.Ay.getChannelMuteConfig(t.guild_id, t.id)]),
        m = (0, u.M)(r),
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
        subtext: m,
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
                label: r
            } = i;
            return (0, e.jsx)(s.Drp, {
                id: `${l}`,
                label: r,
                action: () => {
                    let i;
                    return t.type === h.rbe.GUILD_CATEGORY && (0, d.Gv)(t.id), i = f(l), void o.A.updateChannelOverrideSettings(t.guild_id, t.id, i, g.fd.Muted, n)
                }
            }, l)
        })
    })
}