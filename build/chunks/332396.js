/** Chunk was on 77870 **/
/** chunk id: 332396, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N
}), n(896048), n(114821), n(339614), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(735438),
    o = n.n(a),
    c = n(311907),
    u = n(435371),
    d = n(397927),
    p = n(933958),
    h = n(104171),
    f = n(63995),
    g = n(69407),
    m = n(616356),
    b = n(734057),
    A = n(287809),
    y = n(607567),
    _ = n(403362),
    O = n(661191),
    j = n(181079),
    v = n(652215),
    x = n(985018),
    E = n(653750);

function C(e, t) {
    return 0 === t.length ? null : (0, r.jsxs)("div", {
        className: E.nM,
        children: [(0, r.jsx)(e, {
            className: E.RI,
            color: "currentColor"
        }), (0, r.jsx)(h.Ay, {
            guildId: void 0,
            users: t,
            max: 6
        })]
    })
}

function S() {
    let e = (0, c.yK)([j.A, b.A], () => O.default.keys(j.A.getFavoriteChannels()).map(e => b.A.getChannel(e)).filter(_.Vq)),
        t = e.map(e => e.id),
        n = e.filter(e => e.type === v.rbe.GUILD_VOICE),
        l = e.filter(e => e.type === v.rbe.GUILD_STAGE_VOICE).map(e => e.id),
        i = (0, c.yK)([y.Ay], () => o().flatMap(n, e => y.Ay.getVoiceStatesForChannel(e).map(e => {
            let {
                user: t
            } = e;
            return t
        })), [n]),
        s = (0, c.yK)([f.A], () => o().flatMap(l, e => f.A.getMutableParticipants(e, g.ip.SPEAKER).filter(e => e.type === g.wY.VOICE).map(e => {
            let {
                user: t
            } = e;
            return t
        }))),
        a = (0, c.bG)([f.A], () => {
            let e = 0;
            for (let t of l) e += f.A.getParticipantCount(t, g.ip.AUDIENCE);
            return e
        }),
        u = (0, c.yK)([m.A], () => m.A.getAllApplicationStreams().filter(e => t.includes(e.channelId)).map(e => e.ownerId), [t]),
        x = (0, c.yK)([p.Ay], () => {
            let e = p.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) {
                var r, l;
                n.push(...null != (r = null == (l = e.get(i)) ? void 0 : l.flatMap(e => Array.from(e.userIds))) ? r : [])
            }
            return n
        }, [t]),
        S = (0, c.yK)([A.default], () => x.map(e => A.default.getUser(e)), [x]),
        I = (0, c.yK)([A.default], () => u.map(e => A.default.getUser(e)), [u]),
        N = C(d.HKD, i.filter(e => !u.includes(e.id) && !x.includes(e.id))),
        T = 0 === s.length ? null : (0, r.jsxs)("div", {
            className: E.nM,
            children: [(0, r.jsx)(d.qux, {
                size: "lg",
                color: "currentColor",
                className: E.RI
            }), (0, r.jsx)(h.Ay, {
                guildId: void 0,
                users: s,
                max: 3
            }), (0, r.jsxs)("div", {
                className: E.GZ,
                children: [(0, r.jsx)(d.LoC, {
                    size: "xs",
                    color: "currentColor"
                }), (0, r.jsx)(d.Text, {
                    className: E._I,
                    color: "text-default",
                    variant: "text-xs/medium",
                    children: a
                })]
            })]
        }),
        P = C(d.Fzq, I.filter(e => null != e && !x.includes(e.id))),
        w = C(d.bxf, S);
    return (0, r.jsxs)(r.Fragment, {
        children: [T, N, P, w]
    })
}

function I() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            className: s()(E.nM, E.Dl),
            children: (0, r.jsx)("span", {
                className: s()(E.cN, E.NT),
                children: x.intl.string(x.t.wMWyci)
            })
        }), (0, r.jsx)(S, {})]
    })
}

function N(e) {
    let {
        "aria-label": t = !1,
        onShow: n,
        children: i
    } = e, s = l.useMemo(() => (0, r.jsx)("div", {
        className: E.A_,
        children: (0, r.jsx)(I, {})
    }), []);
    return (0, r.jsx)(u.m_, {
        __unsupportedReactNodeAsText: s,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        onTooltipShow: n,
        asContainer: !0,
        children: i
    })
}