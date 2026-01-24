/** Chunk was on 31748 **/
/** chunk id: 804980, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => U,
    LN: () => L
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(311907),
    s = n(435371),
    c = n(397927),
    u = n(212245),
    d = n(933958),
    f = n(447031),
    p = n(878549),
    g = n(969151),
    m = n(550151),
    _ = n(902439),
    h = n(283488),
    y = n(732637),
    A = n(315206),
    b = n(104171),
    E = n(594007),
    v = n(227042),
    O = n(793574),
    x = n(688810),
    S = n(698141),
    C = n(429913),
    N = n(87001),
    I = n(961350),
    j = n(186111),
    T = n(287809),
    w = n(403362),
    P = n(562153),
    R = n(985018),
    D = n(677406);
let k = ["embedded_background"];

function L(e) {
    let {
        avatarSize: t,
        guildId: n,
        channelId: l,
        users: i
    } = e, a = null != t ? t : c._3J.SIZE_32, o = (0, c.FT9)(a);
    return (0, r.jsx)(b.Ay, {
        size: o,
        guildId: n,
        users: i,
        max: 4,
        renderUser: e => {
            if (null == e || e === b.mt) return null;
            let t = P.Ay.getName(n, l, e);
            return (0, r.jsx)(s.m_, {
                text: t,
                children: (0, r.jsx)("img", {
                    src: e.getAvatarURL(n, o),
                    alt: t,
                    className: D.my
                }, e.id)
            }, e.id)
        }
    })
}

function M(e) {
    var t, n;
    let {
        participants: i,
        application: s,
        channel: g,
        width: _
    } = e, h = _ > 400 ? 2 : +(_ > 300), [y] = _ > 400 ? [c._3J.SIZE_56, 56] : _ > 300 ? [c._3J.SIZE_32, 32] : [c._3J.SIZE_24, 24], A = (0, o.yK)([T.default, I.default], () => Array.from(i).map(e => (0, p.S)(e, I.default) ? null : T.default.getUser(e.userId)).filter(w.Vq)), b = (0, o.bG)([d.Ay], () => {
        var e;
        return null != (e = d.Ay.getEmbeddedActivitiesForChannel(g.id).find(e => e.applicationId === s.id)) ? e : d.Ay.getEmbeddedActivitiesForStartingChannel(g.id).find(e => e.applicationId === s.id)
    }), {
        analyticsLocations: E
    } = (0, x.Ay)(), v = (0, u.p)(), O = P.Ay.getName(g.getGuildId(), g.id, null == A ? void 0 : A[0]), C = (0, m.vG)({
        userId: null == (n = T.default.getCurrentUser()) ? void 0 : n.id,
        channelId: g.id,
        application: s
    }) === m.Gy.CAN_JOIN, N = null != (t = g.getGuildId()) ? t : void 0, j = l.useId(), k = s.id, M = l.useMemo(() => ({
        channel: g,
        type: "channel"
    }), [g]), {
        submitting: U
    } = (0, S.A)({
        applicationId: k,
        context: M,
        launchingComponentId: j
    });
    return (0, r.jsxs)("div", {
        className: D.Yi,
        children: [(0, r.jsx)(L, {
            avatarSize: y,
            guildId: N,
            channelId: g.id,
            users: A
        }), (0, r.jsx)(c.Text, {
            className: a()(D.m_, {
                [D.EX]: 0 === h,
                [D.Y]: 1 === h
            }),
            variant: "text-sm/normal",
            children: A.length > 1 ? R.intl.formatToPlainString(R.t.cpe6CK, {
                username: O,
                count: A.length - 1
            }) : R.intl.formatToPlainString(R.t["7Uuia2"], {
                username: O
            })
        }), (0, r.jsx)(c.Text, {
            className: a()(D.wx, {
                [D.EX]: 0 === h,
                [D.Y]: 1 === h
            }),
            variant: "text-sm/normal",
            children: s.name
        }), (0, r.jsx)("div", {
            className: D.Uo,
            children: C ? (0, r.jsx)(c.Button, {
                text: R.intl.string(R.t["4i2vj+"]),
                onClick: function(e) {
                    e.stopPropagation(), null != b && (0, f.A)({
                        applicationId: b.applicationId,
                        activityChannelId: g.id,
                        locationObject: v.location,
                        analyticsLocations: E,
                        componentId: j
                    })
                },
                loading: U,
                size: 2 === h ? "md" : "sm",
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
        channel: s
    } = e, {
        analyticsLocations: c
    } = (0, x.Ay)(O.A.ACTIVITY_TILE), {
        applicationId: u
    } = t, d = (0, _.A)(), f = null != d && (0, g.H)(d.location) === s.id && d.applicationId === u, [p] = (0, C.A)([u]), {
        url: m
    } = (0, h.A)({
        applicationId: u,
        names: k,
        size: 1024
    }), b = !i && f, S = !f, I = !f && !i, T = (0, o.bG)([j.A, N.A], () => (0, v.A)({
        LayerStore: j.A,
        PopoutWindowStore: N.A
    }));
    return l.useEffect(() => {
        if (b && null != d && !T) {
            let e = (0, E.A)(d.location.id, d.applicationId);
            (0, A.cK)(e)
        }
    }, [b, d, T]), (0, r.jsx)(x.f5, {
        value: c,
        children: (0, r.jsxs)("div", {
            className: D.kL,
            children: [b && null != d && (0, r.jsx)(y.A, {
                className: D.pU,
                embedId: (0, E.A)(d.location.id, u)
            }), S && null != p && null != m && "" !== m ? (0, r.jsx)("img", {
                className: D.j0,
                alt: p.name,
                src: m
            }) : null, I && null != p && (0, r.jsx)(M, {
                width: n,
                channel: s,
                participants: t.participants,
                application: p
            }), a || S ? null : (0, r.jsx)("div", {
                className: D.OB
            })]
        })
    })
}