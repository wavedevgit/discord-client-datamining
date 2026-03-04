/** chunk id: 995102, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => m,
    gv: () => C,
    pB: () => h
});
var i = n(627968);
n(64700);
var a = n(989349),
    r = n.n(a),
    l = n(311907),
    u = n(397927),
    o = n(914430),
    d = n(832712),
    s = n(392567),
    c = n(543465),
    f = n(477427),
    A = n(47167),
    v = n(652215),
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
    h = e => {
        let t = e > 0 ? r()().add(e, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        }
    };

function m(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [a, r] = (0, l.yK)([c.Ay], () => [c.Ay.isChannelMuted(e.guild_id, e.id), c.Ay.getChannelMuteConfig(e.guild_id, e.id)]),
        p = (0, s.M)(r),
        m = (0, A.Ay)(e, !0);

    function E(t) {
        t && e.type === v.rbe.GUILD_CATEGORY && (0, o.Gv)(e.id), d.A.updateChannelOverrideSettings(e.guild_id, e.id, {
            muted: t
        }, f.G_.muted(t))
    }
    let g = _.intl.string(_.t.tbeRRJ),
        b = _.intl.string(_.t.OYefme);
    switch (e.type) {
        case v.rbe.GUILD_CATEGORY:
            g = _.intl.string(_.t.pNMCg2), b = _.intl.string(_.t.olaBeG);
            break;
        case v.rbe.GROUP_DM:
            g = _.intl.string(_.t.LO3kaK), b = _.intl.string(_.t["s5/5fm"]);
            break;
        case v.rbe.DM:
            g = n ? _.intl.format(_.t.byjuJm, {
                name: m
            }) : _.intl.string(_.t.LO3kaK), b = n ? _.intl.format(_.t["eC+9rj"], {
                name: m
            }) : _.intl.string(_.t["s5/5fm"]);
            break;
        default:
            g = _.intl.string(_.t.tbeRRJ), b = _.intl.string(_.t.OYefme)
    }
    return a ? (0, i.jsx)(u.Drp, {
        id: "unmute-channel",
        label: b,
        subtext: p,
        action: () => E(!1)
    }) : (0, i.jsx)(u.Drp, {
        id: "mute-channel",
        label: g,
        action: () => {
            E(!0)
        },
        children: C().map(n => {
            let {
                value: a,
                label: r
            } = n;
            return (0, i.jsx)(u.Drp, {
                id: `${a}`,
                label: r,
                action: () => {
                    let n;
                    return e.type === v.rbe.GUILD_CATEGORY && (0, o.Gv)(e.id), n = h(a), void d.A.updateChannelOverrideSettings(e.guild_id, e.id, n, f.fd.Muted, t)
                }
            }, a)
        })
    })
}