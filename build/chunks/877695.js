/** chunk id: 877695 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
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
    b = n(985018),
    v = n(105544);

function T(e) {
    let {
        invite: t,
        isMemberOfGuild: n,
        message: r,
        onTransitionToInviteChannel: d,
        onAcceptInstantInvite: u
    } = e, _ = a.useRef(null), [h, g] = a.useState(!0), [T, S] = a.useState(!1), N = t.state === E.elq.ACCEPTING, j = (0, s.bG)([c.A], () => c.A.useReducedMotion);
    a.useLayoutEffect(() => {
        S((_.current?.clientHeight ?? 0) > 292)
    }, [S]);
    let L = (0, m.oO)(t),
        R = a.useCallback(() => {
            !T || h && g(!1)
        }, [h, T]),
        P = a.useCallback(() => {
            !T || h || g(!0)
        }, [h, T]),
        w = a.useMemo(() => T && _.current?.clientHeight != null ? {
            height: h ? 292 : _.current.clientHeight + 36 + 48,
            transition: j ? void 0 : "height 0.2s ease"
        } : {}, [h, T, j]);
    return null == L ? (0, i.jsx)(I.A, {}) : (0, i.jsxs)(o.sqX, {
        className: l()(v.Gg, {
            [v.vk]: T && h
        }),
        onClick: R,
        style: w,
        "aria-label": b.intl.string(b.t.dcl9MQ),
        children: [(0, i.jsxs)("div", {
            className: v.uY,
            ref: _,
            children: [(0, i.jsx)(x.J$, {
                profile: L,
                className: v.vK
            }), (0, i.jsx)(x.CG, {
                profile: L
            }), (0, i.jsx)(A.A, {
                profile: L
            }), (0, i.jsx)(p.P, {
                profile: L,
                className: v.rb
            }), (0, i.jsx)(C.A, {
                guild: null != t.guild ? (0, f.DY)(t.guild) : null,
                roles: t.roles,
                className: v.Ei
            })]
        }), T && !h ? (0, i.jsx)("div", {
            className: v.Se,
            children: (0, i.jsx)(o.QWc, {
                textVariant: "text-xs/medium",
                variant: "secondary",
                size: "sm",
                onClick: P,
                text: b.intl.string(b.t.xdCLeM)
            })
        }) : null, (0, i.jsxs)("div", {
            className: l()(v.qr, {
                [v.iK]: T
            }),
            children: [T && h ? (0, i.jsx)("div", {
                className: v.D7
            }) : null, (0, i.jsx)("div", {
                className: l()(v.z8, {
                    [v.it]: T && h
                }),
                children: (0, i.jsx)("div", {
                    className: v.UD,
                    children: (0, i.jsx)(y, {
                        invite: t,
                        profile: L,
                        isMemberOfGuild: n,
                        message: r,
                        submitting: N,
                        onTransitionToInviteChannel: d,
                        onAcceptInstantInvite: u
                    })
                })
            })]
        })]
    })
}

function y(e) {
    let {
        invite: t,
        profile: n,
        isMemberOfGuild: r,
        message: l,
        submitting: s,
        onTransitionToInviteChannel: o,
        onAcceptInstantInvite: c
    } = e, {
        guildId: m,
        ctaType: p
    } = (0, h.Ay)(n, h.cn.INVITE, t.code), {
        analyticsLocations: A
    } = (0, _.Ay)(u.A.INVITE_EMBED), x = a.useCallback(() => {
        let e = r ? "transition" : "accept";
        (0, d.he)({
            invite: t,
            action: e,
            inviter_id: l.author.id,
            invite_message_id: l.id
        }, A)
    }, [t, l, A, r]);
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