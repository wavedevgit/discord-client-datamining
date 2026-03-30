/** chunk id: 635157 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(732955),
    r = n(397927),
    o = n(775602),
    c = n(793574),
    d = n(571694),
    u = n(47167),
    h = n(922301),
    m = n(750112),
    A = n(598104),
    p = n(697122),
    g = n(73028),
    f = n(95550),
    _ = n(854627),
    E = n(314307),
    x = n(985018),
    C = n(563003);

function S(e) {
    let t, {
            channel: n,
            children: S,
            user: I
        } = e,
        T = (0, s.bG)([o.A], () => o.A.useReducedMotion),
        v = (0, u.Ay)(n) ?? "",
        {
            avatarDecorationSrc: N,
            eventHandlers: y,
            isAnimating: b
        } = (0, _.A)({
            userId: I?.id,
            size: r._3J.SIZE_80,
            animateOnHover: !0
        }),
        [j, R] = l.useState(!1),
        M = l.useCallback(() => {
            y.onMouseEnter(), R(!0)
        }, [y]),
        D = l.useCallback(() => {
            y.onMouseLeave(), R(!1)
        }, [y]),
        O = !n.isMultiUserDM() && I?.displayNameStyles != null;
    return (0, i.jsxs)(E.Ay, {
        channelId: n.id,
        onMouseEnter: M,
        onMouseLeave: D,
        children: [(t = !T && b, n.isMultiUserDM() ? (0, i.jsx)(p.Q, {
            channel: n,
            editable: !0,
            location: c.A.EMPTY_GROUP_DM,
            children: (0, i.jsx)(A.A, {
                channel: n,
                size: r._3J.SIZE_80,
                animated: t,
                "aria-label": v
            })
        }) : (0, i.jsx)(r.euF, {
            "aria-label": v,
            size: r._3J.SIZE_80,
            src: (0, d.Y)(n, 80, t),
            avatarDecoration: N
        })), (0, i.jsx)(E.cr, {
            children: O ? (0, i.jsx)(m.A, {
                userName: v,
                displayNameStyles: I?.displayNameStyles,
                effectDisplayType: j ? h.G.ANIMATED : h.G.STATIC,
                loop: !0
            }) : v
        }), (0, i.jsx)(E.j1, {
            children: S
        }), n.isMultiUserDM() && (0, i.jsxs)(a.e2v, {
            className: C.U,
            children: [(0, i.jsx)(f.NE, {
                channel: n,
                text: x.intl.string(x.t["6Qgrev"]),
                icon: r.DpX
            }), (0, i.jsx)(a.$nd, {
                icon: r.R2l,
                variant: "secondary",
                text: x.intl.string(x.t["5Q9+/L"]),
                "aria-label": x.intl.string(x.t["5Q9+/L"]),
                onClick: () => (0, g.U)(n.id, c.A.EMPTY_GROUP_DM)
            })]
        })]
    })
}