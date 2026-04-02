/** chunk id: 877695 params = (module,exports,require) **/
n.d(t, {
    A: () => N
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(397927),
    d = n(846293),
    c = n(775602),
    u = n(793574),
    m = n(688810),
    _ = n(9994),
    h = n(461888),
    p = n(179283),
    g = n(123213),
    A = n(86376),
    x = n(42780),
    f = n(21599),
    C = n(860689),
    E = n(897288),
    I = n(168428),
    v = n(652215),
    b = n(985018),
    T = n(105544);

function N(e) {
    let {
        invite: t,
        isMemberOfGuild: n,
        message: s,
        onTransitionToInviteChannel: d,
        onAcceptInstantInvite: u
    } = e, m = l.useRef(null), [h, g] = l.useState(!0), [f, N] = l.useState(!1), y = t.state === v.elq.ACCEPTING, j = (0, a.bG)([c.A], () => c.A.useReducedMotion);
    l.useLayoutEffect(() => {
        N((m.current?.clientHeight ?? 0) > 292)
    }, [N]);
    let L = (0, _.oO)(t),
        R = l.useCallback(() => {
            !f || h && g(!1)
        }, [h, f]),
        P = l.useCallback(() => {
            !f || h || g(!0)
        }, [h, f]),
        D = l.useMemo(() => f && m.current?.clientHeight != null ? {
            height: h ? 292 : m.current.clientHeight + 36 + 48,
            transition: j ? void 0 : "height 0.2s ease"
        } : {}, [h, f, j]);
    return null == L ? (0, i.jsx)(I.A, {}) : (0, i.jsxs)(o.sqX, {
        className: r()(T.Gg, {
            [T.vk]: f && h
        }),
        onClick: R,
        style: D,
        "aria-label": b.intl.string(b.t.dcl9MQ),
        children: [(0, i.jsxs)("div", {
            className: T.uY,
            ref: m,
            children: [(0, i.jsx)(x.J$, {
                profile: L,
                className: T.vK
            }), (0, i.jsx)(x.CG, {
                profile: L
            }), (0, i.jsx)(A.A, {
                profile: L
            }), (0, i.jsx)(p.P, {
                profile: L,
                className: T.rb
            }), (0, i.jsx)(E.A, {
                guild: null != t.guild ? (0, C.DY)(t.guild) : null,
                roles: t.roles,
                className: T.Ei
            })]
        }), f && !h ? (0, i.jsx)("div", {
            className: T.Se,
            children: (0, i.jsx)(o.QWc, {
                textVariant: "text-xs/medium",
                variant: "secondary",
                size: "sm",
                onClick: P,
                text: b.intl.string(b.t.xdCLeM)
            })
        }) : null, (0, i.jsxs)("div", {
            className: r()(T.qr, {
                [T.iK]: f
            }),
            children: [f && h ? (0, i.jsx)("div", {
                className: T.D7
            }) : null, (0, i.jsx)("div", {
                className: r()(T.z8, {
                    [T.it]: f && h
                }),
                children: (0, i.jsx)("div", {
                    className: T.UD,
                    children: (0, i.jsx)(S, {
                        invite: t,
                        profile: L,
                        isMemberOfGuild: n,
                        message: s,
                        submitting: y,
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
        isMemberOfGuild: s,
        message: r,
        submitting: a,
        onTransitionToInviteChannel: o,
        onAcceptInstantInvite: c
    } = e, {
        guildId: _,
        ctaType: p
    } = (0, h.Ay)(n, h.cn.INVITE, t.code), {
        analyticsLocations: A
    } = (0, m.Ay)(u.A.INVITE_EMBED), x = l.useCallback(() => {
        let e = s ? "transition" : "accept";
        (0, d.he)({
            invite: t,
            action: e,
            inviter_id: r.author.id,
            invite_message_id: r.id,
            invite_instance_id: (0, f._U)(t.code, r.id)
        }, A)
    }, [t, r, A, s]);
    return null == p ? null : (0, i.jsx)(g.Y, {
        guildId: _,
        ctaType: p,
        submitting: a,
        onGoToGuild: o,
        onAcceptInvite: c,
        onStartApplication: c,
        onComplete: x
    })
}