/** Chunk was on 41727 **/
/** chunk id: 375855, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
}), n(114821), n(339614);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(435371),
    c = n(397927),
    u = n(933958),
    d = n(104171),
    p = n(297334),
    h = n(47167),
    f = n(392567),
    g = n(21119),
    m = n(907459),
    b = n(616356),
    A = n(994500),
    y = n(543465),
    _ = n(287809),
    O = n(607567),
    j = n(985018),
    v = n(653750);

function x(e) {
    let {
        icon: t,
        users: n
    } = e;
    return 0 === n.length ? null : (0, r.jsxs)("div", {
        className: v.nM,
        children: [(0, r.jsx)(t, {
            className: v.RI,
            color: "currentColor"
        }), (0, r.jsx)(d.Ay, {
            users: n,
            max: 6
        })]
    })
}

function E(e) {
    let {
        muteConfig: t,
        className: n
    } = e;
    return (null == t ? void 0 : t.end_time) == null ? (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: n,
        children: j.intl.string(j.t.fpKdS1)
    }) : (0, r.jsx)(f.A, {
        muteConfig: t,
        className: n
    })
}

function C(e) {
    let t, n, i, o, d, h, f, j, C, S, I, N, T, {
            channel: P
        } = e,
        w = P.id,
        {
            activityUsers: R,
            streamUsers: D,
            voiceUsers: M
        } = (t = P.id, n = (0, a.yK)([A.A], () => A.A.getBlockedOrIgnoredIDs()), i = (0, a.bG)([g.A], () => g.A.getUserAffinitiesMap(), []), o = (0, a.yK)([u.Ay, _.default], () => u.Ay.getEmbeddedActivitiesForChannel(t).flatMap(e => Array.from(e.userIds)).map(e => _.default.getUser(e)), [t]), d = l.useMemo(() => (0, p.aw)(o, n), [o, n]), h = l.useMemo(() => (0, m.L)(d, i, "DirectMessageTooltip - activityUsers"), [d, i]), f = (0, a.yK)([b.A, _.default], () => {
            let e = b.A.getAllApplicationStreamsForChannel(t).map(e => e.ownerId).map(e => _.default.getUser(e));
            return (0, p.aw)(e, n)
        }, [t, n]), j = l.useMemo(() => (0, p.aw)(f, n), [f, n]), C = l.useMemo(() => (0, m.L)(j, i, "DirectMessageTooltip - activityUsers"), [j, i]), S = l.useMemo(() => C.filter(e => !h.some(t => t.id === e.id)), [C, h]), I = (0, a.yK)([O.Ay], () => {
            let e = O.Ay.getVoiceStatesForChannel(P).map(e => {
                let {
                    user: t
                } = e;
                return t
            });
            return (0, p.aw)(e, n)
        }, [P, n]), N = l.useMemo(() => (0, p.aw)(I, n), [I, n]), T = l.useMemo(() => (0, m.L)(N, i, "DirectMessageTooltip - voiceUsers"), [N, i]), {
            voiceUsers: l.useMemo(() => T.filter(e => !h.some(t => t.id === e.id) && !C.some(t => t.id === e.id)), [T, h, C]),
            streamUsers: S,
            activityUsers: h
        }),
        L = (0, r.jsx)(x, {
            icon: c.HKD,
            users: M
        }),
        k = (0, r.jsx)(x, {
            icon: c.Fzq,
            users: D
        }),
        G = (0, r.jsx)(x, {
            icon: c.bxf,
            users: R
        }),
        {
            isMuted: U,
            muteConfig: B
        } = (0, a.cf)([y.Ay], () => ({
            isMuted: y.Ay.isChannelMuted(null, w),
            muteConfig: y.Ay.getChannelMuteConfig(null, w)
        }), [w]);
    return (0, r.jsxs)(r.Fragment, {
        children: [L, k, G, U ? (0, r.jsx)(E, {
            muteConfig: B,
            className: s()(v.LM, {
                [v.Sx]: null != L || null != k
            })
        }) : null]
    })
}

function S(e) {
    let {
        channel: t
    } = e, n = (0, h.Ay)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            className: s()(v.nM, v.Dl),
            children: (0, r.jsx)("span", {
                className: s()(v.cN, v.NT),
                children: n
            })
        }), (0, r.jsx)(C, {
            channel: t
        })]
    })
}

function I(e) {
    let {
        channel: t,
        children: n
    } = e, i = (0, h.Ay)(t), s = l.useMemo(() => (0, r.jsx)("div", {
        className: v.A_,
        children: (0, r.jsx)(S, {
            channel: t
        })
    }), [t]);
    return (0, r.jsx)(o.m_, {
        __unsupportedReactNodeAsText: s,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": null != i ? i : void 0,
        asContainer: !0,
        children: n
    })
}