/** Chunk was on 1113 **/
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
    h = n(297334),
    p = n(47167),
    g = n(392567),
    f = n(21119),
    m = n(907459),
    b = n(616356),
    A = n(994500),
    y = n(543465),
    O = n(287809),
    _ = n(607567),
    j = n(985018),
    x = n(653750);

function v(e) {
    let {
        icon: t,
        users: n
    } = e;
    return 0 === n.length ? null : (0, r.jsxs)("div", {
        className: x.nM,
        children: [(0, r.jsx)(t, {
            className: x.RI,
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
    }) : (0, r.jsx)(g.A, {
        muteConfig: t,
        className: n
    })
}

function C(e) {
    let t, n, i, o, d, p, g, j, C, S, I, N, T, {
            channel: P
        } = e,
        w = P.id,
        {
            activityUsers: R,
            streamUsers: D,
            voiceUsers: L
        } = (t = P.id, n = (0, a.yK)([A.A], () => A.A.getBlockedOrIgnoredIDs()), i = (0, a.bG)([f.A], () => f.A.getUserAffinitiesMap(), []), o = (0, a.yK)([u.Ay, O.default], () => u.Ay.getEmbeddedActivitiesForChannel(t).flatMap(e => Array.from(e.userIds)).map(e => O.default.getUser(e)), [t]), d = l.useMemo(() => (0, h.aw)(o, n), [o, n]), p = l.useMemo(() => (0, m.L)(d, i, "DirectMessageTooltip - activityUsers"), [d, i]), g = (0, a.yK)([b.A, O.default], () => {
            let e = b.A.getAllApplicationStreamsForChannel(t).map(e => e.ownerId).map(e => O.default.getUser(e));
            return (0, h.aw)(e, n)
        }, [t, n]), j = l.useMemo(() => (0, h.aw)(g, n), [g, n]), C = l.useMemo(() => (0, m.L)(j, i, "DirectMessageTooltip - activityUsers"), [j, i]), S = l.useMemo(() => C.filter(e => !p.some(t => t.id === e.id)), [C, p]), I = (0, a.yK)([_.Ay], () => {
            let e = _.Ay.getVoiceStatesForChannel(P).map(e => {
                let {
                    user: t
                } = e;
                return t
            });
            return (0, h.aw)(e, n)
        }, [P, n]), N = l.useMemo(() => (0, h.aw)(I, n), [I, n]), T = l.useMemo(() => (0, m.L)(N, i, "DirectMessageTooltip - voiceUsers"), [N, i]), {
            voiceUsers: l.useMemo(() => T.filter(e => !p.some(t => t.id === e.id) && !C.some(t => t.id === e.id)), [T, p, C]),
            streamUsers: S,
            activityUsers: p
        }),
        M = (0, r.jsx)(v, {
            icon: c.HKD,
            users: L
        }),
        G = (0, r.jsx)(v, {
            icon: c.Fzq,
            users: D
        }),
        k = (0, r.jsx)(v, {
            icon: c.k9F,
            users: R
        }),
        {
            isMuted: U,
            muteConfig: V
        } = (0, a.cf)([y.Ay], () => ({
            isMuted: y.Ay.isChannelMuted(null, w),
            muteConfig: y.Ay.getChannelMuteConfig(null, w)
        }), [w]);
    return (0, r.jsxs)(r.Fragment, {
        children: [M, G, k, U ? (0, r.jsx)(E, {
            muteConfig: V,
            className: s()(x.LM, {
                [x.Sx]: null != M || null != G
            })
        }) : null]
    })
}

function S(e) {
    let {
        channel: t
    } = e, n = (0, p.Ay)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            className: s()(x.nM, x.Dl),
            children: (0, r.jsx)("span", {
                className: s()(x.cN, x.NT),
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
    } = e, i = (0, p.Ay)(t), s = l.useMemo(() => (0, r.jsx)("div", {
        className: x.A_,
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