/** chunk id: 752533 params = (module,exports,require) **/
n.d(t, {
    Bs: () => p,
    MT: () => x,
    U4: () => A,
    XN: () => T,
    YF: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(827734),
    o = n(397927),
    d = n(854627),
    c = n(427262),
    u = n(519412),
    m = n(985018),
    g = n(351334);
let _ = e => {
        let {
            user: t,
            isOwnUser: n,
            label: l,
            removeButton: r,
            isFaded: u
        } = e, {
            avatarSrc: _,
            eventHandlers: A
        } = (0, d.A)({
            userId: t?.id,
            size: o._3J.SIZE_24
        }), x = (0, c.$3)(t), [h, p] = s.useState(!1);
        return (0, i.jsxs)("div", {
            className: a()(g.kL, {
                [g.RE]: null != r
            }),
            onMouseEnter: () => p(!0),
            onMouseLeave: () => p(!1),
            children: [(0, i.jsxs)("div", {
                className: a()(g.TT, {
                    [g.zj]: u
                }),
                children: [(0, i.jsx)(o.euF, {
                    className: g.my,
                    src: _,
                    "aria-label": x,
                    size: o._3J.SIZE_24,
                    ...A
                }), (0, i.jsxs)(o.Text, {
                    className: g.Xh,
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: [x, !!n && ` (${m.intl.string(m.t.LuZzxn)})`]
                }), null != l && (0, i.jsxs)(o.Text, {
                    className: g.Pf,
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: [(0, i.jsx)("span", {
                        className: g.me,
                        children: "\xb7"
                    }), l]
                })]
            }), null != r && h && (0, i.jsx)("div", {
                className: g.dM,
                children: (0, i.jsx)(o.QWc, {
                    textVariant: "text-sm/medium",
                    variant: "secondary",
                    text: r.label,
                    onClick: r.onRemove
                })
            })]
        })
    },
    A = e => {
        let {
            user: t,
            isOwnUser: n
        } = e;
        return (0, i.jsx)(_, {
            user: t,
            isOwnUser: n,
            label: m.intl.string(u.default.vc2xys)
        })
    },
    x = e => {
        let {
            user: t,
            onRemove: n
        } = e;
        return (0, i.jsx)(_, {
            user: t,
            label: m.intl.string(u.default.mnt50A),
            removeButton: {
                onRemove: n,
                label: m.intl.string(m.t.N86XcP)
            }
        })
    },
    h = e => {
        let {
            user: t,
            isOwnUser: n
        } = e;
        return (0, i.jsx)(_, {
            user: t,
            isOwnUser: n,
            label: m.intl.string(u.default.mnt50A)
        })
    },
    p = e => {
        let {
            user: t,
            onRemove: n
        } = e;
        return (0, i.jsx)(_, {
            user: t,
            label: m.intl.string(u.default["1RH5t9"]),
            isFaded: !0,
            removeButton: {
                onRemove: n,
                label: m.intl.string(u.default["2blqtw"])
            }
        })
    },
    T = e => {
        let {
            onInvite: t,
            canInvite: n
        } = e, [l, d] = s.useState(!1);
        return (0, i.jsxs)("div", {
            className: a()(g.kL, {
                [g.RE]: n
            }),
            onMouseEnter: () => d(!0),
            onMouseLeave: () => d(!1),
            children: [(0, i.jsxs)("div", {
                className: g.TT,
                children: [(0, i.jsx)("div", {
                    className: a()(g.vG, g.my),
                    children: (0, i.jsx)(o.nys, {
                        size: "xxs",
                        color: r.A.colors.ICON_SUBTLE
                    })
                }), (0, i.jsx)(o.Text, {
                    className: g.Xh,
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: m.intl.string(u.default["/x7DVG"])
                })]
            }), l && n && (0, i.jsx)("div", {
                className: g.dM,
                children: (0, i.jsx)(o.QWc, {
                    textVariant: "text-sm/medium",
                    variant: "secondary",
                    text: m.intl.string(u.default.O15JWp),
                    onClick: t
                })
            })]
        })
    }