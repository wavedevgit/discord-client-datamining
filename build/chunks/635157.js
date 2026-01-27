/** Chunk was on 41727 **/
/** chunk id: 635157, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
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
    p = n(922301),
    h = n(750112),
    f = n(598104),
    g = n(697122),
    m = n(73028),
    b = n(95550),
    A = n(854627),
    y = n(314307),
    _ = n(985018),
    O = n(82842);

function j(e) {
    var t;
    let n, {
            channel: j,
            children: v,
            user: x
        } = e,
        E = (0, i.bG)([o.A], () => o.A.useReducedMotion),
        C = null != (t = (0, d.Ay)(j)) ? t : "",
        {
            avatarDecorationSrc: S,
            eventHandlers: I,
            isAnimating: N
        } = (0, A.A)({
            userId: null == x ? void 0 : x.id,
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
        D = !j.isMultiUserDM() && (null == x ? void 0 : x.displayNameStyles) != null;
    return (0, r.jsxs)(y.Ay, {
        channelId: j.id,
        onMouseEnter: w,
        onMouseLeave: R,
        children: [(n = !E && N, j.isMultiUserDM() ? (0, r.jsx)(g.Q, {
            channel: j,
            editable: !0,
            location: c.A.EMPTY_GROUP_DM,
            children: (0, r.jsx)(f.A, {
                channel: j,
                size: a._3J.SIZE_80,
                animated: n,
                "aria-label": C
            })
        }) : (0, r.jsx)(a.euF, {
            "aria-label": C,
            size: a._3J.SIZE_80,
            src: (0, u.Y)(j, 80, n),
            avatarDecoration: S
        })), (0, r.jsx)(y.cr, {
            children: D ? (0, r.jsx)(h.A, {
                userName: C,
                displayNameStyles: null == x ? void 0 : x.displayNameStyles,
                effectDisplayType: T ? p.G.ANIMATED : p.G.STATIC,
                loop: !0
            }) : C
        }), (0, r.jsx)(y.j1, {
            children: v
        }), j.isMultiUserDM() && (0, r.jsxs)(s.e2v, {
            className: O.U,
            children: [(0, r.jsx)(b.N, {
                channel: j,
                text: _.intl.string(_.t["6Qgrev"]),
                icon: a.DpX
            }), (0, r.jsx)(s.$nd, {
                icon: a.R2l,
                variant: "secondary",
                text: _.intl.string(_.t["5Q9+/L"]),
                "aria-label": _.intl.string(_.t["5Q9+/L"]),
                onClick: () => (0, m.U)(j.id, c.A.EMPTY_GROUP_DM)
            })]
        })]
    })
}