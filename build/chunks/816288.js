/** Chunk was on 1113 **/
/** chunk id: 816288, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(353709),
    o = n(158954),
    c = n(311907),
    u = n(397927),
    d = n(442433),
    h = n(793574),
    p = n(230135),
    g = n(552836),
    f = n(147925),
    m = n(363487),
    b = n(267771),
    A = n(828162),
    y = n(333354),
    O = n(985018),
    _ = n(375395);

function j(e) {
    let {
        guild: t,
        withMargin: i
    } = e, j = (0, b.A)(t), x = (0, m.A)(t.id), v = l.useCallback(() => {
        (0, A.A)(t.id, h.A.GUILD_BOOSTING_SIDEBAR_DISPLAY)
    }, [t.id]), E = (0, c.bG)([g.A], () => {
        var e;
        return null != (e = g.A.getCountForGuild(t.id)) ? e : 0
    });
    l.useEffect(() => {
        E !== t.premiumSubscriberCount && (0, p.u)(t.id, t.premiumSubscriberCount)
    }, [t.id, E, t.premiumSubscriberCount]);
    let C = Math.min(E / j * 100, 100),
        [S, I] = (0, u.zhh)(() => ({
            width: E === t.premiumSubscriberCount ? "calc(".concat(C, "% - 4px)") : "0%",
            config: {
                tension: 250,
                damping: 5,
                mass: 1
            }
        }), "respect-motion-settings", [E, t.premiumSubscriberCount]);
    l.useEffect(() => {
        I({
            width: "calc(".concat(C, "% - 4px)")
        })
    }, [C, I]);
    let N = E >= j;
    return (0, r.jsx)(u.DUT, {
        "aria-label": void 0,
        role: "button",
        focusProps: {
            offset: {
                left: 10,
                right: 4
            }
        },
        onClick: () => {
            v()
        },
        className: s()(_.kL, {
            [_.aF]: i
        }),
        onContextMenu: e => {
            x && (0, d.L3)(e, async () => {
                let {
                    default: e
                } = await n.e("71728").then(n.bind(n, 709843));
                return n => {
                    var l, i;
                    return (0, r.jsx)(e, (l = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r;
                                r = n[t], t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r
                            })
                        }
                        return e
                    }({}, n), i = i = {
                        guild: t
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(i)).forEach(function(e) {
                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
                    }), l))
                }
            })
        },
        children: (0, r.jsxs)("div", {
            className: _.hQ,
            children: [(0, r.jsx)("div", {
                className: _.L$
            }), (0, r.jsx)(a.animated.div, {
                className: s()(_.qB, {
                    [_.mu]: C <= 5
                }),
                style: S
            }), (0, r.jsxs)("div", {
                className: _.FS,
                children: [(0, r.jsxs)("div", {
                    className: _.Ui,
                    children: [(0, r.jsx)(o.EYj, {
                        className: _.Qq,
                        variant: "text-xs/semibold",
                        children: O.intl.string(y.default.NI6Ihe)
                    }), t.premiumSubscriberCount >= j && (0, r.jsx)(o.EYj, {
                        className: _.Qq,
                        variant: "text-xs/semibold",
                        children: "\uD83C\uDF89"
                    })]
                }), (0, r.jsxs)("div", {
                    className: _.Ui,
                    children: [(0, r.jsx)(o.EYj, {
                        className: s()(_.Qq, _.ue),
                        variant: "text-xs/semibold",
                        children: N ? O.intl.formatToPlainString(y.default["Ehpq+7"], {
                            appliedBoostCount: E
                        }) : O.intl.formatToPlainString(y.default["/rbPDs"], {
                            appliedBoostCount: E,
                            maxBoostCount: j
                        })
                    }), (0, r.jsx)(f.A, {
                        width: 12,
                        height: 12,
                        direction: f.A.Directions.RIGHT,
                        className: s()(_.Qq, _.ue)
                    })]
                })]
            })]
        })
    })
}

function x(e) {
    let {
        guild: t,
        withMargin: n
    } = e;
    return (0, r.jsx)(j, {
        guild: t,
        withMargin: n
    })
}