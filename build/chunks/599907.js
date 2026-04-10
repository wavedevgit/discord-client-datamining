/** chunk id: 599907 params = (module,exports,require) **/
n.d(t, {
    Ay: () => L,
    jO: () => O,
    nO: () => b
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(311907),
    o = n(230109),
    d = n(397927),
    c = n(442433),
    u = n(736653),
    A = n(573435),
    h = n(635350),
    _ = n(726187),
    m = n(542678),
    g = n(714991),
    p = n(776231),
    E = n(486020),
    I = n(351022),
    f = n(244229),
    C = n(652215),
    T = n(985018),
    S = n(80172),
    N = n(937495),
    x = n(517061),
    v = n(970890);

function b(e) {
    let {
        guild: t,
        onClick: r,
        onView: s
    } = e, [_, m] = l.useState(!1), [I, b] = l.useState(!1), [y, O] = l.useState(!1), L = l.useRef(null), R = l.useCallback(async () => {
        b(!0);
        try {
            await r(t.id)
        } finally {
            b(!1)
        }
    }, [t.id, r]), P = l.useCallback(e => {
        e && !_ && (m(!0), s?.(t.id))
    }, [t.id, _, s]), D = l.useCallback(e => {
        (0, c.L3)(e, async () => {
            let {
                default: e
            } = await n.e("39572").then(n.bind(n, 235327));
            return n => (0, i.jsx)(e, {
                ...n,
                guild: t
            })
        })
    }, [t]), j = (0, u.Ay)(), M = t.features.has(C.GuildFeatures.HUB), w = l.useMemo(() => {
        let e = E.Ay.getGuildDiscoverySplashURL({
            id: t.id,
            splash: t.discoverySplash,
            size: 300 * (0, p.mZ)()
        });
        if (null != e) return e;
        if (M) return v;
        switch (j) {
            case C.NJ8.DARK:
                return N;
            case C.NJ8.LIGHT:
                return x
        }
    }, [t.discoverySplash, t.id, M, j]), U = l.useMemo(() => E.Ay.getGuildIconURL({
        id: t.id,
        icon: t.icon,
        size: 48
    }), [t.icon, t.id]);
    return (0, i.jsxs)("div", {
        className: S.kL,
        children: [I && (0, i.jsx)("div", {
            className: S.dc,
            children: (0, i.jsx)(d.y$y, {
                type: d.y$y.Type.PULSING_ELLIPSIS,
                className: S.u1
            })
        }), (0, i.jsx)(o.L, {
            innerRef: L,
            onChange: P,
            active: !_,
            threshold: .55,
            children: (0, i.jsxs)(h.A, {
                ref: L,
                className: S.Nr,
                onClick: R,
                disabled: I,
                onContextMenu: D,
                "aria-label": T.intl.string(T.t["M9wQ+f"]),
                children: [(0, i.jsxs)("div", {
                    className: S.wx,
                    children: [(0, i.jsx)("div", {
                        className: a()(S.vK, {
                            [S.Kc]: y
                        }),
                        children: (0, i.jsx)("img", {
                            src: w,
                            alt: "",
                            className: S._e,
                            onLoad: () => O(!0)
                        })
                    }), (0, i.jsx)(f.A, {
                        className: S.gw,
                        guildId: t.id
                    }), (0, i.jsx)("div", {
                        className: S.Kk,
                        children: (0, i.jsx)(A.Ay, {
                            mask: A.Ay.Masks.SQUIRCLE,
                            width: 56,
                            height: 56,
                            children: (0, i.jsx)("div", {
                                className: S.SA,
                                children: (0, i.jsx)(A.Ay, {
                                    mask: A.Ay.Masks.SQUIRCLE,
                                    width: 48,
                                    height: 48,
                                    children: (0, i.jsx)("img", {
                                        src: U,
                                        alt: "",
                                        className: S.my
                                    })
                                })
                            })
                        })
                    })]
                }), (0, i.jsxs)("div", {
                    className: S.gI,
                    children: [(0, i.jsxs)("div", {
                        className: S.DD,
                        children: [(0, i.jsx)(g.A, {
                            className: S.n2,
                            guild: t,
                            tooltipColor: d.STz.Colors.PRIMARY
                        }), (0, i.jsx)(d.Heading, {
                            variant: "heading-md/semibold",
                            className: S.J5,
                            children: t.name
                        })]
                    }), (0, i.jsx)(d.Text, {
                        className: S.h_,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: t.description
                    }), (0, i.jsxs)("div", {
                        className: S.bu,
                        children: [null != t.presenceCount && (0, i.jsxs)("div", {
                            className: S.CV,
                            children: [(0, i.jsx)("div", {
                                className: S.SP
                            }), (0, i.jsx)(d.Text, {
                                className: S.ac,
                                variant: "text-xs/normal",
                                color: "text-default",
                                children: T.intl.format(T.t["LC+S+m"], {
                                    membersOnline: t.presenceCount
                                })
                            })]
                        }), null != t.memberCount && (0, i.jsxs)("div", {
                            className: S.CV,
                            children: [(0, i.jsx)("div", {
                                className: S.PB
                            }), (0, i.jsx)(d.Text, {
                                className: S.ac,
                                variant: "text-xs/normal",
                                color: "text-default",
                                children: T.intl.format(T.t.zRl6XR, {
                                    count: t.memberCount
                                })
                            })]
                        })]
                    })]
                })]
            })
        })]
    })
}

function y(e) {
    let {
        guildId: t,
        onClick: n,
        onView: l
    } = e, r = (0, s.bG)([I.A], () => I.A.getGuild(t));
    return null == r ? null : (0, i.jsx)(b, {
        guild: r,
        onClick: n,
        onView: l
    })
}

function O(e) {
    let {
        guildId: t,
        index: n,
        onClick: r,
        onView: a
    } = e, s = l.useRef(null == t), o = l.useCallback((e, t, n, l) => null == t.guildId ? (0, i.jsx)(m.A, {
        state: n,
        cleanUp: l,
        children: (0, i.jsx)(_.A, {
            className: S.qf
        })
    }, e) : (0, i.jsx)(m.A, {
        state: n,
        cleanUp: l,
        animate: s.current,
        children: (0, i.jsx)(y, {
            guildId: t.guildId,
            onClick: r,
            onView: a
        })
    }, e), [r, a]), c = l.useCallback(e => e.guildId ?? `${e.index}`, []), u = l.useMemo(() => [{
        guildId: t,
        index: n
    }], [t, n]);
    return (0, i.jsx)("div", {
        className: S.NK,
        children: (0, i.jsx)(d.Fai, {
            items: u,
            renderItem: o,
            getItemKey: c
        })
    })
}
let L = l.memo(y)