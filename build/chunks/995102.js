/** chunk id: 995102, original params: t,e,n (module,exports,require) **/
n.d(e, {
    Ay: () => v,
    gv: () => p,
    pB: () => T
}), n(896048);
var r = n(627968);
n(64700);
var i = n(989349),
    a = n.n(i),
    l = n(311907),
    o = n(397927),
    u = n(914430),
    d = n(832712),
    s = n(392567),
    c = n(543465),
    E = n(477427),
    A = n(47167),
    _ = n(652215),
    f = n(815968),
    h = n(985018);
let p = () => [{
        value: f.Xx.MINUTES_15,
        label: h.intl.string(h.t["8ot6gv"])
    }, {
        value: f.Xx.HOURS_1,
        label: h.intl.string(h.t.UMWBZr)
    }, {
        value: f.Xx.HOURS_3,
        label: h.intl.string(h.t.QmYWtu)
    }, {
        value: f.Xx.HOURS_8,
        label: h.intl.string(h.t.EpAXPC)
    }, {
        value: f.Xx.HOURS_24,
        label: h.intl.string(h.t["755t4q"])
    }, {
        value: f.Xx.ALWAYS,
        label: h.intl.string(h.t.r3LawO)
    }],
    T = t => {
        let e = t > 0 ? a()().add(t, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: t,
                end_time: e
            }
        }
    };

function v(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i, a] = (0, l.yK)([c.Ay], () => [c.Ay.isChannelMuted(t.guild_id, t.id), c.Ay.getChannelMuteConfig(t.guild_id, t.id)]),
        f = (0, s.M)(a),
        v = (0, A.Ay)(t, !0);

    function g(e) {
        e && t.type === _.rbe.GUILD_CATEGORY && (0, u.Gv)(t.id), d.A.updateChannelOverrideSettings(t.guild_id, t.id, {
            muted: e
        }, E.G_.muted(e))
    }
    let C = h.intl.string(h.t.tbeRRJ),
        R = h.intl.string(h.t.OYefme);
    switch (t.type) {
        case _.rbe.GUILD_CATEGORY:
            C = h.intl.string(h.t.pNMCg2), R = h.intl.string(h.t.olaBeG);
            break;
        case _.rbe.GROUP_DM:
            C = h.intl.string(h.t.LO3kaK), R = h.intl.string(h.t["s5/5fm"]);
            break;
        case _.rbe.DM:
            C = n ? h.intl.format(h.t.byjuJm, {
                name: v
            }) : h.intl.string(h.t.LO3kaK), R = n ? h.intl.format(h.t["eC+9rj"], {
                name: v
            }) : h.intl.string(h.t["s5/5fm"]);
            break;
        default:
            C = h.intl.string(h.t.tbeRRJ), R = h.intl.string(h.t.OYefme)
    }
    return i ? (0, r.jsx)(o.Drp, {
        id: "unmute-channel",
        label: R,
        subtext: f,
        action: () => g(!1)
    }) : (0, r.jsx)(o.Drp, {
        id: "mute-channel",
        label: C,
        action: () => {
            g(!0)
        },
        children: p().map(n => {
            let {
                value: i,
                label: a
            } = n;
            return (0, r.jsx)(o.Drp, {
                id: "".concat(i),
                label: a,
                action: () => {
                    let n;
                    return t.type === _.rbe.GUILD_CATEGORY && (0, u.Gv)(t.id), n = T(i), void d.A.updateChannelOverrideSettings(t.guild_id, t.id, n, E.fd.Muted, e)
                }
            }, i)
        })
    })
}