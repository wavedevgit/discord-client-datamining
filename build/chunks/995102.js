/** chunk id: 995102, original params: e,n,t (module,exports,require) **/
"use strict";
t.d(n, {
    Ay: () => f,
    gv: () => N,
    pB: () => I
});
var i = t(627968);
t(64700);
var l = t(989349),
    r = t.n(l),
    s = t(311907),
    u = t(397927),
    a = t(914430),
    c = t(832712),
    o = t(392567),
    _ = t(543465),
    d = t(477427),
    S = t(47167),
    E = t(652215),
    g = t(815968),
    A = t(985018);
let N = () => [{
        value: g.Xx.MINUTES_15,
        label: A.intl.string(A.t["8ot6gv"])
    }, {
        value: g.Xx.HOURS_1,
        label: A.intl.string(A.t.UMWBZr)
    }, {
        value: g.Xx.HOURS_3,
        label: A.intl.string(A.t.QmYWtu)
    }, {
        value: g.Xx.HOURS_8,
        label: A.intl.string(A.t.EpAXPC)
    }, {
        value: g.Xx.HOURS_24,
        label: A.intl.string(A.t["755t4q"])
    }, {
        value: g.Xx.ALWAYS,
        label: A.intl.string(A.t.r3LawO)
    }],
    I = e => {
        let n = e > 0 ? r()().add(e, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: n
            }
        }
    };

function f(e, n) {
    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [l, r] = (0, s.yK)([_.Ay], () => [_.Ay.isChannelMuted(e.guild_id, e.id), _.Ay.getChannelMuteConfig(e.guild_id, e.id)]),
        g = (0, o.M)(r),
        f = (0, S.Ay)(e, !0);

    function h(n) {
        n && e.type === E.rbe.GUILD_CATEGORY && (0, a.Gv)(e.id), c.A.updateChannelOverrideSettings(e.guild_id, e.id, {
            muted: n
        }, d.G_.muted(n))
    }
    let O = A.intl.string(A.t.tbeRRJ),
        C = A.intl.string(A.t.OYefme);
    switch (e.type) {
        case E.rbe.GUILD_CATEGORY:
            O = A.intl.string(A.t.pNMCg2), C = A.intl.string(A.t.olaBeG);
            break;
        case E.rbe.GROUP_DM:
            O = A.intl.string(A.t.LO3kaK), C = A.intl.string(A.t["s5/5fm"]);
            break;
        case E.rbe.DM:
            O = t ? A.intl.format(A.t.byjuJm, {
                name: f
            }) : A.intl.string(A.t.LO3kaK), C = t ? A.intl.format(A.t["eC+9rj"], {
                name: f
            }) : A.intl.string(A.t["s5/5fm"]);
            break;
        default:
            O = A.intl.string(A.t.tbeRRJ), C = A.intl.string(A.t.OYefme)
    }
    return l ? (0, i.jsx)(u.Drp, {
        id: "unmute-channel",
        label: C,
        subtext: g,
        action: () => h(!1)
    }) : (0, i.jsx)(u.Drp, {
        id: "mute-channel",
        label: O,
        action: () => {
            h(!0)
        },
        children: N().map(t => {
            let {
                value: l,
                label: r
            } = t;
            return (0, i.jsx)(u.Drp, {
                id: `${l}`,
                label: r,
                action: () => {
                    let t;
                    return e.type === E.rbe.GUILD_CATEGORY && (0, a.Gv)(e.id), t = I(l), void c.A.updateChannelOverrideSettings(e.guild_id, e.id, t, d.fd.Muted, n)
                }
            }, l)
        })
    })
}