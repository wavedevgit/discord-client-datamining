/** chunk id: 995102, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => y,
    gv: () => g,
    pB: () => O
}), n(896048);
var r = n(627968);
n(64700);
var i = n(989349),
    a = n.n(i),
    l = n(311907),
    o = n(397927),
    d = n(914430),
    c = n(832712),
    u = n(392567),
    s = n(543465),
    f = n(477427),
    p = n(47167),
    b = n(652215),
    v = n(815968),
    A = n(985018);
let g = () => [{
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
    }],
    O = e => {
        let t = e > 0 ? a()().add(e, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        }
    };

function y(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i, a] = (0, l.yK)([s.Ay], () => [s.Ay.isChannelMuted(e.guild_id, e.id), s.Ay.getChannelMuteConfig(e.guild_id, e.id)]),
        v = (0, u.M)(a),
        y = (0, p.Ay)(e, !0);

    function m(t) {
        t && e.type === b.rbe.GUILD_CATEGORY && (0, d.Gv)(e.id), c.A.updateChannelOverrideSettings(e.guild_id, e.id, {
            muted: t
        }, f.G_.muted(t))
    }
    let _ = A.intl.string(A.t.tbeRRJ),
        E = A.intl.string(A.t.OYefme);
    switch (e.type) {
        case b.rbe.GUILD_CATEGORY:
            _ = A.intl.string(A.t.pNMCg2), E = A.intl.string(A.t.olaBeG);
            break;
        case b.rbe.GROUP_DM:
            _ = A.intl.string(A.t.LO3kaK), E = A.intl.string(A.t["s5/5fm"]);
            break;
        case b.rbe.DM:
            _ = n ? A.intl.format(A.t.byjuJm, {
                name: y
            }) : A.intl.string(A.t.LO3kaK), E = n ? A.intl.format(A.t["eC+9rj"], {
                name: y
            }) : A.intl.string(A.t["s5/5fm"]);
            break;
        default:
            _ = A.intl.string(A.t.tbeRRJ), E = A.intl.string(A.t.OYefme)
    }
    return i ? (0, r.jsx)(o.Drp, {
        id: "unmute-channel",
        label: E,
        subtext: v,
        action: () => m(!1)
    }) : (0, r.jsx)(o.Drp, {
        id: "mute-channel",
        label: _,
        action: () => {
            m(!0)
        },
        children: g().map(n => {
            let {
                value: i,
                label: a
            } = n;
            return (0, r.jsx)(o.Drp, {
                id: "".concat(i),
                label: a,
                action: () => {
                    let n;
                    return e.type === b.rbe.GUILD_CATEGORY && (0, d.Gv)(e.id), n = O(i), void c.A.updateChannelOverrideSettings(e.guild_id, e.id, n, f.fd.Muted, t)
                }
            }, i)
        })
    })
}