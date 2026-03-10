/** chunk id: 995102 params = (module,exports,require) **/
n.d(t, {
    Ay: () => _,
    gv: () => h
});
var i = n(627968);
n(64700);
var a = n(989349),
    r = n.n(a),
    l = n(311907),
    o = n(397927),
    d = n(914430),
    u = n(832712),
    s = n(392567),
    f = n(543465),
    c = n(477427),
    v = n(47167),
    A = n(652215),
    p = n(815968),
    C = n(985018);
let h = () => [{
    value: p.Xx.MINUTES_15,
    label: C.intl.string(C.t["8ot6gv"])
}, {
    value: p.Xx.HOURS_1,
    label: C.intl.string(C.t.UMWBZr)
}, {
    value: p.Xx.HOURS_3,
    label: C.intl.string(C.t.QmYWtu)
}, {
    value: p.Xx.HOURS_8,
    label: C.intl.string(C.t.EpAXPC)
}, {
    value: p.Xx.HOURS_24,
    label: C.intl.string(C.t["755t4q"])
}, {
    value: p.Xx.ALWAYS,
    label: C.intl.string(C.t.r3LawO)
}];

function _(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [a, p] = (0, l.yK)([f.Ay], () => [f.Ay.isChannelMuted(e.guild_id, e.id), f.Ay.getChannelMuteConfig(e.guild_id, e.id)]),
        _ = (0, s.M)(p),
        E = (0, v.Ay)(e, !0);

    function m(t) {
        t && e.type === A.rbe.GUILD_CATEGORY && (0, d.Gv)(e.id), u.A.updateChannelOverrideSettings(e.guild_id, e.id, {
            muted: t
        }, c.G_.muted(t))
    }
    let g = C.intl.string(C.t.tbeRRJ),
        b = C.intl.string(C.t.OYefme);
    switch (e.type) {
        case A.rbe.GUILD_CATEGORY:
            g = C.intl.string(C.t.pNMCg2), b = C.intl.string(C.t.olaBeG);
            break;
        case A.rbe.GROUP_DM:
            g = C.intl.string(C.t.LO3kaK), b = C.intl.string(C.t["s5/5fm"]);
            break;
        case A.rbe.DM:
            g = n ? C.intl.format(C.t.byjuJm, {
                name: E
            }) : C.intl.string(C.t.LO3kaK), b = n ? C.intl.format(C.t["eC+9rj"], {
                name: E
            }) : C.intl.string(C.t["s5/5fm"]);
            break;
        default:
            g = C.intl.string(C.t.tbeRRJ), b = C.intl.string(C.t.OYefme)
    }
    return a ? (0, i.jsx)(o.Drp, {
        id: "unmute-channel",
        label: b,
        subtext: _,
        action: () => m(!1)
    }) : (0, i.jsx)(o.Drp, {
        id: "mute-channel",
        label: g,
        action: () => {
            m(!0)
        },
        children: h().map(n => {
            let {
                value: a,
                label: l
            } = n;
            return (0, i.jsx)(o.Drp, {
                id: `${a}`,
                label: l,
                action: () => {
                    let n, i;
                    return e.type === A.rbe.GUILD_CATEGORY && (0, d.Gv)(e.id), n = a > 0 ? r()().add(a, "second").toISOString() : null, i = {
                        muted: !0,
                        mute_config: {
                            selected_time_window: a,
                            end_time: n
                        }
                    }, void u.A.updateChannelOverrideSettings(e.guild_id, e.id, i, c.fd.Muted, t)
                }
            }, a)
        })
    })
}