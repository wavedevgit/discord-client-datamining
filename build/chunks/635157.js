/** Chunk was on 1113 **/
/** chunk id: 635157, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(732955),
    a = n(397927),
    o = n(775602),
    c = n(793574),
    u = n(571694),
    d = n(47167),
    h = n(922301),
    p = n(750112),
    g = n(598104),
    f = n(697122),
    m = n(73028),
    b = n(95550),
    A = n(854627),
    y = n(314307),
    O = n(985018),
    _ = n(82842);

function x(e) {
    var t;
    let n, {
            channel: x,
            children: j,
            user: v
        } = e,
        E = (0, i.bG)([o.A], () => o.A.useReducedMotion),
        C = null != (t = (0, d.Ay)(x)) ? t : "",
        {
            avatarDecorationSrc: S,
            eventHandlers: I,
            isAnimating: N
        } = (0, A.A)({
            userId: null == v ? void 0 : v.id,
            size: a._3J.SIZE_80,
            animateOnHover: !0
        }),
        [T, P] = l.useState(!1),
        w = l.useCallback(() => {
            I.onMouseEnter(), P(!0)
        }, [I]),
        R = l.useCallback(() => {
            I.onMouseLeave(), P(!1)
        }, [I]),
        D = !x.isMultiUserDM() && (null == v ? void 0 : v.displayNameStyles) != null;
    return (0, r.jsxs)(y.Ay, {
        channelId: x.id,
        onMouseEnter: w,
        onMouseLeave: R,
        children: [(n = !E && N, x.isMultiUserDM() ? (0, r.jsx)(f.Q, {
            channel: x,
            editable: !0,
            location: c.A.EMPTY_GROUP_DM,
            children: (0, r.jsx)(g.A, {
                channel: x,
                size: a._3J.SIZE_80,
                animated: n,
                "aria-label": C
            })
        }) : (0, r.jsx)(a.euF, {
            "aria-label": C,
            size: a._3J.SIZE_80,
            src: (0, u.Y)(x, 80, n),
            avatarDecoration: S
        })), (0, r.jsx)(y.cr, {
            children: D ? (0, r.jsx)(p.A, {
                userName: C,
                displayNameStyles: null == v ? void 0 : v.displayNameStyles,
                effectDisplayType: T ? h.G.ANIMATED : h.G.STATIC,
                loop: !0
            }) : C
        }), (0, r.jsx)(y.j1, {
            children: j
        }), x.isMultiUserDM() && (0, r.jsxs)(s.e2v, {
            className: _.U,
            children: [(0, r.jsx)(b.N, {
                channel: x,
                text: O.intl.string(O.t["6Qgrev"]),
                icon: a.DpX
            }), (0, r.jsx)(s.$nd, {
                icon: a.R2l,
                variant: "secondary",
                text: O.intl.string(O.t["5Q9+/L"]),
                "aria-label": O.intl.string(O.t["5Q9+/L"]),
                onClick: () => (0, m.U)(x.id, c.A.EMPTY_GROUP_DM)
            })]
        })]
    })
}