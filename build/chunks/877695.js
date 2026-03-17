/** chunk id: 877695 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    d = n(846293),
    c = n(775602),
    u = n(793574),
    _ = n(688810),
    m = n(9994),
    h = n(461888),
    p = n(179283),
    g = n(123213),
    A = n(86376),
    x = n(42780),
    f = n(860689),
    C = n(897288),
    I = n(168428),
    E = n(652215),
    v = n(985018),
    b = n(875871);

function T(e) {
    let {
        invite: t,
        isMemberOfGuild: n,
        message: l,
        onTransitionToInviteChannel: d,
        onAcceptInstantInvite: u
    } = e, _ = r.useRef(null), [h, g] = r.useState(!0), [T, y] = r.useState(!1), N = t.state === E.elq.ACCEPTING, j = (0, s.bG)([c.A], () => c.A.useReducedMotion);
    r.useLayoutEffect(() => {
        y((_.current?.clientHeight ?? 0) > 292)
    }, [y]);
    let L = (0, m.oO)(t),
        R = r.useCallback(() => {
            !T || h && g(!1)
        }, [h, T]),
        P = r.useCallback(() => {
            !T || h || g(!0)
        }, [h, T]),
        M = r.useMemo(() => T && _.current?.clientHeight != null ? {
            height: h ? 292 : _.current.clientHeight + 36 + 48,
            transition: j ? void 0 : "height 0.2s ease"
        } : {}, [h, T, j]);
    return null == L ? (0, i.jsx)(I.A, {}) : (0, i.jsxs)(o.sqX, {
        className: a()(b.Gg, {
            [b.vk]: T && h
        }),
        onClick: R,
        style: M,
        "aria-label": v.intl.string(v.t.dcl9MQ),
        children: [(0, i.jsxs)("div", {
            className: b.uY,
            ref: _,
            children: [(0, i.jsx)(x.J$, {
                profile: L,
                className: b.vK
            }), (0, i.jsx)(x.CG, {
                profile: L
            }), (0, i.jsx)(A.A, {
                profile: L
            }), (0, i.jsx)(p.P, {
                profile: L,
                className: b.rb
            }), (0, i.jsx)(C.A, {
                guild: null != t.guild ? (0, f.DY)(t.guild) : null,
                roles: t.roles,
                className: b.Ei
            })]
        }), T && !h ? (0, i.jsx)("div", {
            className: b.Se,
            children: (0, i.jsx)(o.QWc, {
                textVariant: "text-xs/medium",
                variant: "secondary",
                size: "sm",
                onClick: P,
                text: v.intl.string(v.t.xdCLeM)
            })
        }) : null, (0, i.jsxs)("div", {
            className: a()(b.qr, {
                [b.iK]: T
            }),
            children: [T && h ? (0, i.jsx)("div", {
                className: b.D7
            }) : null, (0, i.jsx)("div", {
                className: a()(b.z8, {
                    [b.it]: T && h
                }),
                children: (0, i.jsx)("div", {
                    className: b.UD,
                    children: (0, i.jsx)(S, {
                        invite: t,
                        profile: L,
                        isMemberOfGuild: n,
                        message: l,
                        submitting: N,
                        onTransitionToInviteChannel: d,
                        onAcceptInstantInvite: u
                    })
                })
            })]
        })]
    })
}

function S(e) {
    let {
        invite: t,
        profile: n,
        isMemberOfGuild: l,
        message: a,
        submitting: s,
        onTransitionToInviteChannel: o,
        onAcceptInstantInvite: c
    } = e, {
        guildId: m,
        ctaType: p
    } = (0, h.Ay)(n, h.cn.INVITE, t.code), {
        analyticsLocations: A
    } = (0, _.Ay)(u.A.INVITE_EMBED), x = r.useCallback(() => {
        let e = l ? "transition" : "accept";
        (0, d.he)({
            invite: t,
            action: e,
            inviter_id: a.author.id,
            invite_message_id: a.id
        }, A)
    }, [t, a, A, l]);
    return null == p ? null : (0, i.jsx)(g.Y, {
        guildId: m,
        ctaType: p,
        submitting: s,
        onGoToGuild: o,
        onAcceptInvite: c,
        onStartApplication: c,
        onComplete: x
    })
}