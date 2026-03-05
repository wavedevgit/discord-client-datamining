/** chunk id: 816288 params = (module,exports,require) **/
i.d(t, {
    A: () => P,
    n: () => O
});
var r = i(627968),
    s = i(64700),
    n = i(503698),
    a = i.n(n),
    o = i(380278),
    l = i(158954),
    u = i(311907),
    c = i(397927),
    d = i(442433),
    _ = i(793574),
    p = i(230135),
    m = i(552836),
    A = i(147925),
    S = i(363487),
    R = i(267771),
    C = i(828162),
    g = i(259568),
    h = i(136708),
    f = i(985018),
    E = i(545981);
let O = s.forwardRef((e, t) => {
    let {
        appliedBoostCount: i,
        maxBoostCount: n,
        premiumSubscriberCount: u,
        className: d
    } = e, _ = i >= n, p = Math.min(i / n * 100, 100), [m, S] = (0, c.zhh)(() => ({
        width: i === u ? `calc(${p}% - 4px)` : "0%",
        config: {
            tension: 250,
            damping: 5,
            mass: 1
        }
    }), "respect-motion-settings", [i, u]);
    return s.useEffect(() => {
        S({
            width: `calc(${p}% - 4px)`
        })
    }, [p, S]), (0, r.jsxs)("div", {
        ref: t,
        className: E.hQ,
        children: [(0, r.jsx)("div", {
            className: a()(E.L$, d)
        }), (0, r.jsx)(o.animated.div, {
            className: a()(E.qB, {
                [E.mu]: p <= 5
            }),
            style: m
        }), (0, r.jsxs)("div", {
            className: E.FS,
            children: [(0, r.jsxs)("div", {
                className: E.Ui,
                children: [(0, r.jsx)(l.EYj, {
                    className: E.Qq,
                    variant: "text-xs/semibold",
                    children: f.intl.string(h.default.NI6Ihe)
                }), u >= n && (0, r.jsx)(l.EYj, {
                    className: E.Qq,
                    variant: "text-xs/semibold",
                    children: "\uD83C\uDF89"
                })]
            }), (0, r.jsxs)("div", {
                className: E.Ui,
                children: [(0, r.jsx)(l.EYj, {
                    className: a()(E.Qq, E.ue),
                    variant: "text-xs/semibold",
                    children: _ ? f.intl.formatToPlainString(h.default["Ehpq+7"], {
                        appliedBoostCount: i
                    }) : f.intl.formatToPlainString(h.default["/rbPDs"], {
                        appliedBoostCount: i,
                        maxBoostCount: n
                    })
                }), (0, r.jsx)(A.A, {
                    width: 12,
                    height: 12,
                    direction: A.A.Directions.RIGHT,
                    className: a()(E.Qq, E.ue)
                })]
            })]
        })]
    })
});

function x(e) {
    let {
        guild: t,
        withMargin: n
    } = e, o = s.useRef(null), l = (0, R.A)(t), A = (0, S.A)(t.id), h = s.useCallback(() => {
        (0, C.A)(t.id, _.A.GUILD_BOOSTING_SIDEBAR_DISPLAY)
    }, [t.id]), f = (0, u.bG)([m.A], () => m.A.getCountForGuild(t.id) ?? 0);
    s.useEffect(() => {
        f !== t.premiumSubscriberCount && (0, p.u)(t.id, t.premiumSubscriberCount)
    }, [t.id, f, t.premiumSubscriberCount]);
    let x = s.useCallback(e => {
        A && (0, d.L3)(e, async () => {
            let {
                default: e
            } = await i.e("71728").then(i.bind(i, 709843));
            return i => (0, r.jsx)(e, {
                ...i,
                guild: t
            })
        })
    }, [A, t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.DUT, {
            "aria-label": void 0,
            role: "button",
            focusProps: {
                offset: {
                    left: 10,
                    right: 4
                }
            },
            onClick: h,
            className: a()(E.kL, {
                [E.aF]: n
            }),
            onContextMenu: x,
            children: (0, r.jsx)(O, {
                ref: o,
                appliedBoostCount: f,
                maxBoostCount: l,
                premiumSubscriberCount: t.premiumSubscriberCount
            })
        }), (0, r.jsx)(g.a, {
            guild: t,
            targetElementRef: o
        })]
    })
}

function P(e) {
    let {
        guild: t,
        withMargin: i
    } = e;
    return (0, r.jsx)(x, {
        guild: t,
        withMargin: i
    })
}
O.displayName = "GuildPowerupsProgressBarUI"