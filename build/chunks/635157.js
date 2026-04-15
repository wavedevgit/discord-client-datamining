/** chunk id: 635157 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(732955),
    r = n(397927),
    o = n(775602),
    c = n(793574),
    d = n(571694),
    u = n(47167),
    h = n(922301),
    m = n(750112),
    A = n(598104),
    g = n(697122),
    _ = n(73028),
    p = n(95550),
    f = n(854627),
    E = n(314307),
    C = n(985018),
    x = n(563003);

function S(e) {
    let t, {
            channel: n,
            children: S,
            user: I
        } = e,
        T = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        v = (0, u.Ay)(n) ?? "",
        {
            avatarDecorationSrc: N,
            eventHandlers: y,
            isAnimating: b
        } = (0, f.A)({
            userId: I?.id,
            size: r._3J.SIZE_80,
            animateOnHover: !0
        }),
        [j, R] = l.useState(!1),
        M = l.useCallback(() => {
            y.onMouseEnter(), R(!0)
        }, [y]),
        L = l.useCallback(() => {
            y.onMouseLeave(), R(!1)
        }, [y]),
        O = !n.isMultiUserDM() && I?.displayNameStyles != null;
    return (0, i.jsxs)(E.Ay, {
        channelId: n.id,
        onMouseEnter: M,
        onMouseLeave: L,
        children: [(t = !T && b, n.isMultiUserDM() ? (0, i.jsx)(g.Q, {
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
        }), n.isMultiUserDM() && (0, i.jsxs)(s.e2v, {
            className: x.U,
            children: [(0, i.jsx)(p.NE, {
                channel: n,
                text: C.intl.string(C.t["6Qgrev"]),
                icon: r.DpX
            }), (0, i.jsx)(s.$nd, {
                icon: r.R2l,
                variant: "secondary",
                text: C.intl.string(C.t["5Q9+/L"]),
                "aria-label": C.intl.string(C.t["5Q9+/L"]),
                onClick: () => (0, _.U)(n.id, c.A.EMPTY_GROUP_DM)
            })]
        })]
    })
}