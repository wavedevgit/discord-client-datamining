/** chunk id: 804980, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => U,
    LN: () => k
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(435371),
    c = n(397927),
    u = n(212245),
    d = n(933958),
    h = n(447031),
    p = n(878549),
    f = n(969151),
    m = n(550151),
    g = n(902439),
    A = n(283488),
    b = n(732637),
    _ = n(315206),
    y = n(104171),
    v = n(594007),
    E = n(227042),
    O = n(793574),
    C = n(688810),
    S = n(698141),
    x = n(429913),
    j = n(87001),
    I = n(961350),
    T = n(186111),
    N = n(287809),
    P = n(403362),
    w = n(562153),
    R = n(985018),
    D = n(677406);
let M = ["embedded_background"];

function k(e) {
    let {
        avatarSize: t,
        guildId: n,
        channelId: r,
        users: i
    } = e, a = null != t ? t : c._3J.SIZE_32, s = (0, c.FT9)(a);
    return (0, l.jsx)(y.Ay, {
        size: s,
        guildId: n,
        users: i,
        max: 4,
        renderUser: e => {
            if (null == e || e === y.mt) return null;
            let t = w.Ay.getName(n, r, e);
            return (0, l.jsx)(o.m_, {
                text: t,
                children: (0, l.jsx)("img", {
                    src: e.getAvatarURL(n, s),
                    alt: t,
                    className: D.my
                }, e.id)
            }, e.id)
        }
    })
}

function L(e) {
    var t, n;
    let {
        participants: i,
        application: o,
        channel: f,
        width: g
    } = e, A = g > 400 ? 2 : +(g > 300), [b] = g > 400 ? [c._3J.SIZE_56, 56] : g > 300 ? [c._3J.SIZE_32, 32] : [c._3J.SIZE_24, 24], _ = (0, s.yK)([N.default, I.default], () => Array.from(i).map(e => (0, p.S)(e, I.default) ? null : N.default.getUser(e.userId)).filter(P.Vq)), y = (0, s.bG)([d.Ay], () => {
        var e;
        return null != (e = d.Ay.getEmbeddedActivitiesForChannel(f.id).find(e => e.applicationId === o.id)) ? e : d.Ay.getEmbeddedActivitiesForStartingChannel(f.id).find(e => e.applicationId === o.id)
    }), {
        analyticsLocations: v
    } = (0, C.Ay)(), E = (0, u.p)(), O = w.Ay.getName(f.getGuildId(), f.id, null == _ ? void 0 : _[0]), x = (0, m.vG)({
        userId: null == (n = N.default.getCurrentUser()) ? void 0 : n.id,
        channelId: f.id,
        application: o
    }) === m.Gy.CAN_JOIN, j = null != (t = f.getGuildId()) ? t : void 0, T = r.useId(), M = o.id, L = r.useMemo(() => ({
        channel: f,
        type: "channel"
    }), [f]), {
        submitting: U
    } = (0, S.A)({
        applicationId: M,
        context: L,
        launchingComponentId: T
    });
    return (0, l.jsxs)("div", {
        className: D.Yi,
        children: [(0, l.jsx)(k, {
            avatarSize: b,
            guildId: j,
            channelId: f.id,
            users: _
        }), (0, l.jsx)(c.Text, {
            className: a()(D.m_, {
                [D.EX]: 0 === A,
                [D.Y]: 1 === A
            }),
            variant: "text-sm/normal",
            children: _.length > 1 ? R.intl.formatToPlainString(R.t.cpe6CK, {
                username: O,
                count: _.length - 1
            }) : R.intl.formatToPlainString(R.t["7Uuia2"], {
                username: O
            })
        }), (0, l.jsx)(c.Text, {
            className: a()(D.wx, {
                [D.EX]: 0 === A,
                [D.Y]: 1 === A
            }),
            variant: "text-sm/normal",
            children: o.name
        }), (0, l.jsx)("div", {
            className: D.Uo,
            children: x ? (0, l.jsx)(c.Button, {
                text: R.intl.string(R.t["4i2vj+"]),
                onClick: function(e) {
                    e.stopPropagation(), null != y && (0, h.A)({
                        applicationId: y.applicationId,
                        activityChannelId: f.id,
                        locationObject: E.location,
                        analyticsLocations: v,
                        componentId: T
                    })
                },
                loading: U,
                size: 2 === A ? "md" : "sm",
                variant: "overlay-primary"
            }) : null
        })]
    })
}

function U(e) {
    let {
        participant: t,
        width: n,
        selected: i,
        interactible: a,
        channel: o
    } = e, {
        analyticsLocations: c
    } = (0, C.Ay)(O.A.ACTIVITY_TILE), {
        applicationId: u
    } = t, d = (0, g.A)(), h = null != d && (0, f.H)(d.location) === o.id && d.applicationId === u, [p] = (0, x.A)([u]), {
        url: m
    } = (0, A.A)({
        applicationId: u,
        names: M,
        size: 1024
    }), y = !i && h, S = !h, I = !h && !i, N = (0, s.bG)([T.A, j.A], () => (0, E.A)({
        LayerStore: T.A,
        PopoutWindowStore: j.A
    }));
    return r.useEffect(() => {
        if (y && null != d && !N) {
            let e = (0, v.A)(d.location.id, d.applicationId);
            (0, _.cK)(e)
        }
    }, [y, d, N]), (0, l.jsx)(C.f5, {
        value: c,
        children: (0, l.jsxs)("div", {
            className: D.kL,
            children: [y && null != d && (0, l.jsx)(b.A, {
                className: D.pU,
                embedId: (0, v.A)(d.location.id, u)
            }), S && null != p && null != m && "" !== m ? (0, l.jsx)("img", {
                className: D.j0,
                alt: p.name,
                src: m
            }) : null, I && null != p && (0, l.jsx)(L, {
                width: n,
                channel: o,
                participants: t.participants,
                application: p
            }), a || S ? null : (0, l.jsx)("div", {
                className: D.OB
            })]
        })
    })
}