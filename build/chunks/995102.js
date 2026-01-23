/** Chunk was on 98865 **/
/** chunk id: 995102, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => O,
    gv: () => g,
    pB: () => h
}), n(896048);
var r = n(627968);
n(64700);
var i = n(989349),
    l = n.n(i),
    a = n(311907),
    o = n(397927),
    s = n(914430),
    c = n(832712),
    u = n(392567),
    d = n(543465),
    f = n(477427),
    A = n(47167),
    b = n(652215),
    p = n(815968),
    v = n(985018);
let g = () => [{
        value: p.Xx.MINUTES_15,
        label: v.intl.string(v.t["8ot6gv"])
    }, {
        value: p.Xx.HOURS_1,
        label: v.intl.string(v.t.UMWBZr)
    }, {
        value: p.Xx.HOURS_3,
        label: v.intl.string(v.t.QmYWtu)
    }, {
        value: p.Xx.HOURS_8,
        label: v.intl.string(v.t.EpAXPC)
    }, {
        value: p.Xx.HOURS_24,
        label: v.intl.string(v.t["755t4q"])
    }, {
        value: p.Xx.ALWAYS,
        label: v.intl.string(v.t.r3LawO)
    }],
    h = e => {
        let t = e > 0 ? l()().add(e, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        }
    };

function O(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i, l] = (0, a.yK)([d.Ay], () => [d.Ay.isChannelMuted(e.guild_id, e.id), d.Ay.getChannelMuteConfig(e.guild_id, e.id)]),
        p = (0, u.M)(l),
        O = (0, A.Ay)(e, !0);

    function m(t) {
        t && e.type === b.rbe.GUILD_CATEGORY && (0, s.Gv)(e.id), c.A.updateChannelOverrideSettings(e.guild_id, e.id, {
            muted: t
        }, f.G_.muted(t))
    }
    let y = v.intl.string(v.t.tbeRRJ),
        _ = v.intl.string(v.t.OYefme);
    switch (e.type) {
        case b.rbe.GUILD_CATEGORY:
            y = v.intl.string(v.t.pNMCg2), _ = v.intl.string(v.t.olaBeG);
            break;
        case b.rbe.GROUP_DM:
            y = v.intl.string(v.t.LO3kaK), _ = v.intl.string(v.t["s5/5fm"]);
            break;
        case b.rbe.DM:
            y = n ? v.intl.format(v.t.byjuJm, {
                name: O
            }) : v.intl.string(v.t.LO3kaK), _ = n ? v.intl.format(v.t["eC+9rj"], {
                name: O
            }) : v.intl.string(v.t["s5/5fm"]);
            break;
        default:
            y = v.intl.string(v.t.tbeRRJ), _ = v.intl.string(v.t.OYefme)
    }
    return i ? (0, r.jsx)(o.Drp, {
        id: "unmute-channel",
        void_label: _,
        subtext: p,
        action: () => m(!1)
    }) : (0, r.jsx)(o.Drp, {
        id: "mute-channel",
        label: y,
        action: () => {
            m(!0)
        },
        children: g().map(n => {
            let {
                value: i,
                label: l
            } = n;
            return (0, r.jsx)(o.Drp, {
                id: "".concat(i),
                label: l,
                action: () => {
                    let n;
                    return e.type === b.rbe.GUILD_CATEGORY && (0, s.Gv)(e.id), n = h(i), void c.A.updateChannelOverrideSettings(e.guild_id, e.id, n, f.fd.Muted, t)
                }
            }, i)
        })
    })
}