/** chunk id: 375855, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(435371),
    c = n(397927),
    d = n(933958),
    u = n(104171),
    h = n(297334),
    A = n(47167),
    p = n(392567),
    g = n(21119),
    m = n(907459),
    _ = n(616356),
    f = n(994500),
    x = n(543465),
    C = n(287809),
    E = n(607567),
    I = n(985018),
    N = n(770992);

function b(e) {
    let {
        icon: t,
        users: n
    } = e;
    return 0 === n.length ? null : (0, i.jsxs)("div", {
        className: N.nM,
        children: [(0, i.jsx)(t, {
            className: N.RI,
            color: "currentColor"
        }), (0, i.jsx)(u.Ay, {
            users: n,
            max: 6
        })]
    })
}

function S(e) {
    let {
        muteConfig: t,
        className: n
    } = e;
    return t?.end_time == null ? (0, i.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: n,
        children: I.intl.string(I.t.fpKdS1)
    }) : (0, i.jsx)(p.A, {
        muteConfig: t,
        className: n
    })
}

function T(e) {
    let t, n, l, o, u, A, p, I, T, y, v, j, R, {
            channel: O
        } = e,
        L = O.id,
        {
            activityUsers: M,
            streamUsers: D,
            voiceUsers: G
        } = (t = O.id, n = (0, a.yK)([f.A], () => f.A.getBlockedOrIgnoredIDs()), l = (0, a.bG)([g.A], () => g.A.getUserAffinitiesMap(), []), o = (0, a.yK)([d.Ay, C.default], () => d.Ay.getEmbeddedActivitiesForChannel(t).flatMap(e => Array.from(e.userIds)).map(e => C.default.getUser(e)), [t]), u = s.useMemo(() => (0, h.aw)(o, n), [o, n]), A = s.useMemo(() => (0, m.L)(u, l, "DirectMessageTooltip - activityUsers"), [u, l]), p = (0, a.yK)([_.A, C.default], () => {
            let e = _.A.getAllApplicationStreamsForChannel(t).map(e => e.ownerId).map(e => C.default.getUser(e));
            return (0, h.aw)(e, n)
        }, [t, n]), I = s.useMemo(() => (0, h.aw)(p, n), [p, n]), T = s.useMemo(() => (0, m.L)(I, l, "DirectMessageTooltip - activityUsers"), [I, l]), y = s.useMemo(() => T.filter(e => !A.some(t => t.id === e.id)), [T, A]), v = (0, a.yK)([E.Ay], () => {
            let e = E.Ay.getVoiceStatesForChannel(O).map(e => {
                let {
                    user: t
                } = e;
                return t
            });
            return (0, h.aw)(e, n)
        }, [O, n]), j = s.useMemo(() => (0, h.aw)(v, n), [v, n]), R = s.useMemo(() => (0, m.L)(j, l, "DirectMessageTooltip - voiceUsers"), [j, l]), {
            voiceUsers: s.useMemo(() => R.filter(e => !A.some(t => t.id === e.id) && !T.some(t => t.id === e.id)), [R, A, T]),
            streamUsers: y,
            activityUsers: A
        }),
        U = (0, i.jsx)(b, {
            icon: c.HKD,
            users: G
        }),
        P = (0, i.jsx)(b, {
            icon: c.Fzq,
            users: D
        }),
        w = (0, i.jsx)(b, {
            icon: c.k9F,
            users: M
        }),
        {
            isMuted: k,
            muteConfig: V
        } = (0, a.cf)([x.Ay], () => ({
            isMuted: x.Ay.isChannelMuted(null, L),
            muteConfig: x.Ay.getChannelMuteConfig(null, L)
        }), [L]);
    return (0, i.jsxs)(i.Fragment, {
        children: [U, P, w, k ? (0, i.jsx)(S, {
            muteConfig: V,
            className: r()(N.LM, {
                [N.Sx]: null != U || null != P
            })
        }) : null]
    })
}

function y(e) {
    let {
        channel: t
    } = e, n = (0, A.Ay)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: r()(N.nM, N.Dl),
            children: (0, i.jsx)("span", {
                className: r()(N.cN, N.NT),
                children: n
            })
        }), (0, i.jsx)(T, {
            channel: t
        })]
    })
}

function v(e) {
    let {
        channel: t,
        children: n
    } = e, l = (0, A.Ay)(t), r = s.useMemo(() => (0, i.jsx)("div", {
        className: N.A_,
        children: (0, i.jsx)(y, {
            channel: t
        })
    }), [t]);
    return (0, i.jsx)(o.m_, {
        __unsupportedReactNodeAsText: r,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": l ?? void 0,
        asContainer: !0,
        children: n
    })
}