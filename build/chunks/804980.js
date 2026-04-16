/** chunk id: 804980 params = (module,exports,require) **/
n.d(t, {
    Ay: () => k,
    LN: () => w
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(435371),
    c = n(397927),
    d = n(212245),
    u = n(933958),
    h = n(447031),
    m = n(878549),
    A = n(969151),
    g = n(550151),
    _ = n(902439),
    p = n(283488),
    f = n(732637),
    E = n(315206),
    C = n(104171),
    x = n(594007),
    S = n(227042),
    I = n(793574),
    T = n(688810),
    v = n(698141),
    N = n(429913),
    y = n(87001),
    b = n(961350),
    j = n(186111),
    R = n(287809),
    M = n(403362),
    L = n(562153),
    O = n(985018),
    D = n(301094);
let P = ["embedded_background"];

function w(e) {
    let {
        avatarSize: t,
        guildId: n,
        channelId: l,
        users: a
    } = e, s = t ?? c._3J.SIZE_32, r = (0, c.FT9)(s);
    return (0, i.jsx)(C.Ay, {
        size: r,
        guildId: n,
        users: a,
        max: 4,
        renderUser: e => {
            if (null == e || e === C.mt) return null;
            let t = L.Ay.getName(n, l, e);
            return (0, i.jsx)(o.m_, {
                text: t,
                children: (0, i.jsx)("img", {
                    src: e.getAvatarURL(n, r),
                    alt: t,
                    className: D.my
                }, e.id)
            }, e.id)
        }
    })
}

function U(e) {
    let {
        participants: t,
        application: n,
        channel: a,
        width: o
    } = e, A = o > 400 ? 2 : +(o > 300), [_] = o > 400 ? [c._3J.SIZE_56, 56] : o > 300 ? [c._3J.SIZE_32, 32] : [c._3J.SIZE_24, 24], p = (0, r.yK)([R.default, b.default], () => Array.from(t).map(e => (0, m.S)(e, b.default) ? null : R.default.getUser(e.userId)).filter(M.Vq)), f = (0, r.bG)([u.Ay], () => u.Ay.getEmbeddedActivitiesForChannel(a.id).find(e => e.applicationId === n.id) ?? u.Ay.getEmbeddedActivitiesForStartingChannel(a.id).find(e => e.applicationId === n.id)), {
        analyticsLocations: E
    } = (0, T.Ay)(), C = (0, d.p)(), x = L.Ay.getName(a.getGuildId(), a.id, p?.[0]), S = (0, g.vG)({
        userId: R.default.getCurrentUser()?.id,
        channelId: a.id,
        application: n
    }) === g.Gy.CAN_JOIN, I = a.getGuildId() ?? void 0, N = l.useId(), y = n.id, j = l.useMemo(() => ({
        channel: a,
        type: "channel"
    }), [a]), {
        submitting: P
    } = (0, v.A)({
        applicationId: y,
        context: j,
        launchingComponentId: N
    });
    return (0, i.jsxs)("div", {
        className: D.Yi,
        children: [(0, i.jsx)(w, {
            avatarSize: _,
            guildId: I,
            channelId: a.id,
            users: p
        }), (0, i.jsx)(c.Text, {
            className: s()(D.m_, {
                [D.EX]: 0 === A,
                [D.Y]: 1 === A
            }),
            variant: "text-sm/normal",
            children: p.length > 1 ? O.intl.formatToPlainString(O.t.cpe6CK, {
                username: x,
                count: p.length - 1
            }) : O.intl.formatToPlainString(O.t["7Uuia2"], {
                username: x
            })
        }), (0, i.jsx)(c.Text, {
            className: s()(D.wx, {
                [D.EX]: 0 === A,
                [D.Y]: 1 === A
            }),
            variant: "text-sm/normal",
            children: n.name
        }), (0, i.jsx)("div", {
            className: D.Uo,
            children: S ? (0, i.jsx)(c.Button, {
                text: O.intl.string(O.t["4i2vj+"]),
                onClick: function(e) {
                    e.stopPropagation(), null != f && (0, h.A)({
                        applicationId: f.applicationId,
                        activityChannelId: a.id,
                        locationObject: C.location,
                        analyticsLocations: E,
                        componentId: N
                    })
                },
                loading: P,
                size: 2 === A ? "md" : "sm",
                variant: "overlay-primary"
            }) : null
        })]
    })
}

function k(e) {
    let {
        participant: t,
        width: n,
        selected: a,
        interactible: s,
        channel: o
    } = e, {
        analyticsLocations: c
    } = (0, T.Ay)(I.A.ACTIVITY_TILE), {
        applicationId: d
    } = t, u = (0, _.A)(), h = null != u && (0, A.H)(u.location) === o.id && u.applicationId === d, [m] = (0, N.A)([d]), {
        url: g
    } = (0, p.A)({
        applicationId: d,
        names: P,
        size: 1024
    }), C = !a && h, v = !h, b = !h && !a, R = (0, r.bG)([j.A, y.A], () => (0, S.A)({
        LayerStore: j.A,
        PopoutWindowStore: y.A
    }));
    return l.useEffect(() => {
        if (C && null != u && !R) {
            let e = (0, x.A)(u.location.id, u.applicationId);
            (0, E.cK)(e)
        }
    }, [C, u, R]), (0, i.jsx)(T.f5, {
        value: c,
        children: (0, i.jsxs)("div", {
            className: D.kL,
            children: [C && null != u && (0, i.jsx)(f.A, {
                className: D.pU,
                embedId: (0, x.A)(u.location.id, d)
            }), v && null != m && null != g && "" !== g ? (0, i.jsx)("img", {
                className: D.j0,
                alt: m.name,
                src: g
            }) : null, b && null != m && (0, i.jsx)(U, {
                width: n,
                channel: o,
                participants: t.participants,
                application: m
            }), s || v ? null : (0, i.jsx)("div", {
                className: D.OB
            })]
        })
    })
}