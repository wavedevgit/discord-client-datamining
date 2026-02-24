/** chunk id: 804980, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => U,
    LN: () => w
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(435371),
    c = n(397927),
    d = n(212245),
    u = n(933958),
    h = n(447031),
    m = n(878549),
    A = n(969151),
    g = n(550151),
    p = n(902439),
    f = n(283488),
    _ = n(732637),
    E = n(315206),
    x = n(104171),
    C = n(594007),
    S = n(227042),
    I = n(793574),
    T = n(688810),
    N = n(698141),
    y = n(429913),
    v = n(87001),
    b = n(961350),
    j = n(186111),
    R = n(287809),
    M = n(403362),
    D = n(562153),
    O = n(985018),
    L = n(677406);
let P = ["embedded_background"];

function w(e) {
    let {
        avatarSize: t,
        guildId: n,
        channelId: l,
        users: s
    } = e, a = t ?? c._3J.SIZE_32, r = (0, c.FT9)(a);
    return (0, i.jsx)(x.Ay, {
        size: r,
        guildId: n,
        users: s,
        max: 4,
        renderUser: e => {
            if (null == e || e === x.mt) return null;
            let t = D.Ay.getName(n, l, e);
            return (0, i.jsx)(o.m_, {
                text: t,
                children: (0, i.jsx)("img", {
                    src: e.getAvatarURL(n, r),
                    alt: t,
                    className: L.my
                }, e.id)
            }, e.id)
        }
    })
}

function k(e) {
    let {
        participants: t,
        application: n,
        channel: s,
        width: o
    } = e, A = o > 400 ? 2 : +(o > 300), [p] = o > 400 ? [c._3J.SIZE_56, 56] : o > 300 ? [c._3J.SIZE_32, 32] : [c._3J.SIZE_24, 24], f = (0, r.yK)([R.default, b.default], () => Array.from(t).map(e => (0, m.S)(e, b.default) ? null : R.default.getUser(e.userId)).filter(M.Vq)), _ = (0, r.bG)([u.Ay], () => u.Ay.getEmbeddedActivitiesForChannel(s.id).find(e => e.applicationId === n.id) ?? u.Ay.getEmbeddedActivitiesForStartingChannel(s.id).find(e => e.applicationId === n.id)), {
        analyticsLocations: E
    } = (0, T.Ay)(), x = (0, d.p)(), C = D.Ay.getName(s.getGuildId(), s.id, f?.[0]), S = (0, g.vG)({
        userId: R.default.getCurrentUser()?.id,
        channelId: s.id,
        application: n
    }) === g.Gy.CAN_JOIN, I = s.getGuildId() ?? void 0, y = l.useId(), v = n.id, j = l.useMemo(() => ({
        channel: s,
        type: "channel"
    }), [s]), {
        submitting: P
    } = (0, N.A)({
        applicationId: v,
        context: j,
        launchingComponentId: y
    });
    return (0, i.jsxs)("div", {
        className: L.Yi,
        children: [(0, i.jsx)(w, {
            avatarSize: p,
            guildId: I,
            channelId: s.id,
            users: f
        }), (0, i.jsx)(c.Text, {
            className: a()(L.m_, {
                [L.EX]: 0 === A,
                [L.Y]: 1 === A
            }),
            variant: "text-sm/normal",
            children: f.length > 1 ? O.intl.formatToPlainString(O.t.cpe6CK, {
                username: C,
                count: f.length - 1
            }) : O.intl.formatToPlainString(O.t["7Uuia2"], {
                username: C
            })
        }), (0, i.jsx)(c.Text, {
            className: a()(L.wx, {
                [L.EX]: 0 === A,
                [L.Y]: 1 === A
            }),
            variant: "text-sm/normal",
            children: n.name
        }), (0, i.jsx)("div", {
            className: L.Uo,
            children: S ? (0, i.jsx)(c.Button, {
                text: O.intl.string(O.t["4i2vj+"]),
                onClick: function(e) {
                    e.stopPropagation(), null != _ && (0, h.A)({
                        applicationId: _.applicationId,
                        activityChannelId: s.id,
                        locationObject: x.location,
                        analyticsLocations: E,
                        componentId: y
                    })
                },
                loading: P,
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
        selected: s,
        interactible: a,
        channel: o
    } = e, {
        analyticsLocations: c
    } = (0, T.Ay)(I.A.ACTIVITY_TILE), {
        applicationId: d
    } = t, u = (0, p.A)(), h = null != u && (0, A.H)(u.location) === o.id && u.applicationId === d, [m] = (0, y.A)([d]), {
        url: g
    } = (0, f.A)({
        applicationId: d,
        names: P,
        size: 1024
    }), x = !s && h, N = !h, b = !h && !s, R = (0, r.bG)([j.A, v.A], () => (0, S.A)({
        LayerStore: j.A,
        PopoutWindowStore: v.A
    }));
    return l.useEffect(() => {
        if (x && null != u && !R) {
            let e = (0, C.A)(u.location.id, u.applicationId);
            (0, E.cK)(e)
        }
    }, [x, u, R]), (0, i.jsx)(T.f5, {
        value: c,
        children: (0, i.jsxs)("div", {
            className: L.kL,
            children: [x && null != u && (0, i.jsx)(_.A, {
                className: L.pU,
                embedId: (0, C.A)(u.location.id, d)
            }), N && null != m && null != g && "" !== g ? (0, i.jsx)("img", {
                className: L.j0,
                alt: m.name,
                src: g
            }) : null, b && null != m && (0, i.jsx)(k, {
                width: n,
                channel: o,
                participants: t.participants,
                application: m
            }), a || N ? null : (0, i.jsx)("div", {
                className: L.OB
            })]
        })
    })
}