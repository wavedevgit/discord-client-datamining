/** chunk id: 995102, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => g,
    gv: () => C,
    pB: () => h
});
var i = n(627968);
n(64700);
var a = n(989349),
    l = n.n(a),
    r = n(311907),
    o = n(397927),
    u = n(914430),
    d = n(832712),
    s = n(392567),
    f = n(543465),
    c = n(477427),
    v = n(47167),
    p = n(652215),
    A = n(815968),
    _ = n(985018);
let C = () => [{
        value: A.Xx.MINUTES_15,
        label: _.intl.string(_.t["8ot6gv"])
    }, {
        value: A.Xx.HOURS_1,
        label: _.intl.string(_.t.UMWBZr)
    }, {
        value: A.Xx.HOURS_3,
        label: _.intl.string(_.t.QmYWtu)
    }, {
        value: A.Xx.HOURS_8,
        label: _.intl.string(_.t.EpAXPC)
    }, {
        value: A.Xx.HOURS_24,
        label: _.intl.string(_.t["755t4q"])
    }, {
        value: A.Xx.ALWAYS,
        label: _.intl.string(_.t.r3LawO)
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

function g(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [a, l] = (0, r.yK)([f.Ay], () => [f.Ay.isChannelMuted(e.guild_id, e.id), f.Ay.getChannelMuteConfig(e.guild_id, e.id)]),
        A = (0, s.M)(l),
        g = (0, v.Ay)(e, !0);

    function m(t) {
        t && e.type === p.rbe.GUILD_CATEGORY && (0, u.Gv)(e.id), d.A.updateChannelOverrideSettings(e.guild_id, e.id, {
            muted: t
        }, c.G_.muted(t))
    }
    let b = _.intl.string(_.t.tbeRRJ),
        E = _.intl.string(_.t.OYefme);
    switch (e.type) {
        case p.rbe.GUILD_CATEGORY:
            b = _.intl.string(_.t.pNMCg2), E = _.intl.string(_.t.olaBeG);
            break;
        case p.rbe.GROUP_DM:
            b = _.intl.string(_.t.LO3kaK), E = _.intl.string(_.t["s5/5fm"]);
            break;
        case p.rbe.DM:
            b = n ? _.intl.format(_.t.byjuJm, {
                name: g
            }) : _.intl.string(_.t.LO3kaK), E = n ? _.intl.format(_.t["eC+9rj"], {
                name: g
            }) : _.intl.string(_.t["s5/5fm"]);
            break;
        default:
            b = _.intl.string(_.t.tbeRRJ), E = _.intl.string(_.t.OYefme)
    }
    return a ? (0, i.jsx)(o.Drp, {
        id: "unmute-channel",
        label: E,
        subtext: A,
        action: () => m(!1)
    }) : (0, i.jsx)(o.Drp, {
        id: "mute-channel",
        label: b,
        action: () => {
            m(!0)
        },
        children: C().map(n => {
            let {
                value: a,
                label: l
            } = n;
            return (0, i.jsx)(o.Drp, {
                id: `${a}`,
                label: l,
                action: () => {
                    let n;
                    return e.type === p.rbe.GUILD_CATEGORY && (0, u.Gv)(e.id), n = h(a), void d.A.updateChannelOverrideSettings(e.guild_id, e.id, n, c.fd.Muted, t)
                }
            }, a)
        })
    })
}