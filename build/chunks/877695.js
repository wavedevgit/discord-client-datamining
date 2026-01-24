/** Chunk was on web.js **/
/** chunk id: 877695, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(846293),
    u = n(775602),
    d = n(793574),
    f = n(688810),
    p = n(9994),
    _ = n(461888),
    h = n(179283),
    m = n(123213),
    g = n(86376),
    E = n(42780),
    y = n(860689),
    b = n(897288),
    O = n(168428),
    v = n(652215),
    A = n(985018),
    I = n(875871);
let S = 292,
    T = 36,
    C = 48;

function N(e) {
    let {
        invite: t,
        isMemberOfGuild: n,
        message: a,
        onTransitionToInviteChannel: c,
        onAcceptInstantInvite: d
    } = e, f = i.useRef(null), [_, m] = i.useState(!0), [N, R] = i.useState(!1), P = t.state === v.elq.ACCEPTING, D = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        R((null != (e = null == (t = f.current) ? void 0 : t.clientHeight) ? e : 0) > S)
    }, [R]);
    let x = (0, p.oO)(t),
        L = i.useCallback(() => {
            !N || _ && m(!1)
        }, [_, N]),
        j = i.useCallback(() => {
            !N || _ || m(!0)
        }, [_, N]),
        M = i.useMemo(() => {
            var e;
            return N && (null == (e = f.current) ? void 0 : e.clientHeight) != null ? {
                height: _ ? S : f.current.clientHeight + T + C,
                transition: D ? void 0 : "height 0.2s ease"
            } : {}
        }, [_, N, D]);
    return null == x ? (0, r.jsx)(O.A, {}) : (0, r.jsxs)(l.sqX, {
        className: s()(I.Gg, {
            [I.vk]: N && _
        }),
        onClick: L,
        style: M,
        "aria-label": A.intl.string(A.t.dcl9MQ),
        children: [(0, r.jsxs)("div", {
            className: I.uY,
            ref: f,
            children: [(0, r.jsx)(E.J$, {
                profile: x,
                className: I.vK
            }), (0, r.jsx)(E.CG, {
                profile: x
            }), (0, r.jsx)(g.A, {
                profile: x
            }), (0, r.jsx)(h.P, {
                profile: x,
                className: I.rb
            }), (0, r.jsx)(b.A, {
                guild: null != t.guild ? (0, y.DY)(t.guild) : null,
                roles: t.roles,
                className: I.Ei
            })]
        }), N && !_ ? (0, r.jsx)("div", {
            className: I.Se,
            children: (0, r.jsx)(l.QWc, {
                textVariant: "text-xs/medium",
                variant: "secondary",
                size: "sm",
                onClick: j,
                text: A.intl.string(A.t.xdCLeM)
            })
        }) : null, (0, r.jsxs)("div", {
            className: s()(I.qr, {
                [I.iK]: N
            }),
            children: [N && _ ? (0, r.jsx)("div", {
                className: I.D7
            }) : null, (0, r.jsx)("div", {
                className: s()(I.z8, {
                    [I.it]: N && _
                }),
                children: (0, r.jsx)("div", {
                    className: I.UD,
                    children: (0, r.jsx)(w, {
                        invite: t,
                        profile: x,
                        isMemberOfGuild: n,
                        message: a,
                        submitting: P,
                        onTransitionToInviteChannel: c,
                        onAcceptInstantInvite: d
                    })
                })
            })]
        })]
    })
}

function w(e) {
    let {
        invite: t,
        profile: n,
        isMemberOfGuild: a,
        message: s,
        submitting: o,
        onTransitionToInviteChannel: l,
        onAcceptInstantInvite: u
    } = e, {
        guildId: p,
        ctaType: h
    } = (0, _.Ay)(n, _.cn.INVITE, t.code), {
        analyticsLocations: g
    } = (0, f.Ay)(d.A.INVITE_EMBED), E = i.useCallback(() => {
        let e = a ? "transition" : "accept";
        (0, c.he)({
            invite: t,
            action: e,
            inviter_id: s.author.id,
            invite_message_id: s.id
        }, g)
    }, [t, s, g, a]);
    return null == h ? null : (0, r.jsx)(m.Y, {
        guildId: p,
        ctaType: h,
        submitting: o,
        onGoToGuild: l,
        onAcceptInvite: u,
        onStartApplication: u,
        onComplete: E
    })
}