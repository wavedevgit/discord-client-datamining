/** chunk id: 995102, original params: t,e,n (module,exports,require) **/
n.d(e, {
    Ay: () => m,
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
    c = n(543465),
    f = n(477427),
    v = n(47167),
    A = n(652215),
    p = n(815968),
    _ = n(985018);
let C = () => [{
        value: p.Xx.MINUTES_15,
        label: _.intl.string(_.t["8ot6gv"])
    }, {
        value: p.Xx.HOURS_1,
        label: _.intl.string(_.t.UMWBZr)
    }, {
        value: p.Xx.HOURS_3,
        label: _.intl.string(_.t.QmYWtu)
    }, {
        value: p.Xx.HOURS_8,
        label: _.intl.string(_.t.EpAXPC)
    }, {
        value: p.Xx.HOURS_24,
        label: _.intl.string(_.t["755t4q"])
    }, {
        value: p.Xx.ALWAYS,
        label: _.intl.string(_.t.r3LawO)
    }],
    h = t => {
        let e = t > 0 ? l()().add(t, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: t,
                end_time: e
            }
        }
    };

function m(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [a, l] = (0, r.yK)([c.Ay], () => [c.Ay.isChannelMuted(t.guild_id, t.id), c.Ay.getChannelMuteConfig(t.guild_id, t.id)]),
        p = (0, s.M)(l),
        m = (0, v.Ay)(t, !0);

    function E(e) {
        e && t.type === A.rbe.GUILD_CATEGORY && (0, u.Gv)(t.id), d.A.updateChannelOverrideSettings(t.guild_id, t.id, {
            muted: e
        }, f.G_.muted(e))
    }
    let b = _.intl.string(_.t.tbeRRJ),
        g = _.intl.string(_.t.OYefme);
    switch (t.type) {
        case A.rbe.GUILD_CATEGORY:
            b = _.intl.string(_.t.pNMCg2), g = _.intl.string(_.t.olaBeG);
            break;
        case A.rbe.GROUP_DM:
            b = _.intl.string(_.t.LO3kaK), g = _.intl.string(_.t["s5/5fm"]);
            break;
        case A.rbe.DM:
            b = n ? _.intl.format(_.t.byjuJm, {
                name: m
            }) : _.intl.string(_.t.LO3kaK), g = n ? _.intl.format(_.t["eC+9rj"], {
                name: m
            }) : _.intl.string(_.t["s5/5fm"]);
            break;
        default:
            b = _.intl.string(_.t.tbeRRJ), g = _.intl.string(_.t.OYefme)
    }
    return a ? (0, i.jsx)(o.Drp, {
        id: "unmute-channel",
        label: g,
        subtext: p,
        action: () => E(!1)
    }) : (0, i.jsx)(o.Drp, {
        id: "mute-channel",
        label: b,
        action: () => {
            E(!0)
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
                    return t.type === A.rbe.GUILD_CATEGORY && (0, u.Gv)(t.id), n = h(a), void d.A.updateChannelOverrideSettings(t.guild_id, t.id, n, f.fd.Muted, e)
                }
            }, a)
        })
    })
}