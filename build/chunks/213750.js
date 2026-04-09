/** chunk id: 213750 params = (module,exports,require) **/
n.d(t, {
    i: () => Y
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(837381),
    o = n(934551),
    d = n(158954),
    c = n(554146),
    u = n(827734),
    A = n(582754),
    h = n(397927),
    _ = n(565645),
    m = n(701363),
    g = n(736653),
    p = n(793574),
    E = n(688810),
    I = n(932001),
    f = n(7584),
    C = n(486164),
    T = n(821589),
    N = n(979286),
    S = n(335657),
    x = n(252362),
    v = n(540063),
    b = n(870308),
    y = n(998694),
    O = n(158216),
    L = n(758836),
    R = n(652215),
    P = n(49999),
    D = n(985018),
    j = n(848038);
let M = e => {
        let {
            badgeIcon: t,
            badgeText: n
        } = e, a = null != t && "" !== t ? o[t] : void 0;
        return (0, i.jsx)("div", {
            className: j.newBadge,
            children: (0, i.jsx)(d.Exy, {
                type: null != n && "" !== n ? {
                    text: n
                } : "new",
                variant: "expressive",
                icon: a
            })
        })
    },
    w = () => {
        let {
            noCache: e,
            includeUnpublished: t
        } = (0, y.A)();
        return (0, S.y)(L.G2.HOME, {
            noCache: e,
            includeUnpublished: t
        }, void 0, !0), null
    },
    U = e => {
        let {
            selected: t,
            locationState: n,
            icon: l,
            onClick: r,
            collectibleShopTab: o,
            onMouseEnter: d,
            onMouseLeave: c,
            children: u,
            showHoverGradient: A,
            hoverGradientStart: _,
            hoverGradientMiddle: g,
            hoverGradientEnd: I,
            ...f
        } = e, C = (0, s.rm)("shop"), T = p.A.HOME_PAGE_SHOP_TAB, {
            analyticsLocations: S
        } = (0, E.Ay)(T), [x, v] = a.useState(!1), b = a.useCallback(() => {
            void 0 !== r && r(), void 0 !== o && (0, N.Cz)({
                tab: o,
                analyticsLocations: S,
                analyticsSource: T
            }), v(!0), (0, N.Sw)({
                analyticsSource: T,
                analyticsLocations: S
            })
        }, [T, S, r, v, o]), y = R.BVt.COLLECTIBLES_SHOP;
        return (0, i.jsxs)(i.Fragment, {
            children: [x && (0, i.jsx)(w, {}), (0, i.jsx)(m.z9, {
                showHoverGradient: A ?? !1,
                selected: t,
                route: y,
                icon: l ?? h.U1X,
                text: D.intl.string(D.t.pWG4ze),
                locationState: n,
                ...C,
                ...f,
                hoverGradientStart: _,
                hoverGradientMiddle: g,
                hoverGradientEnd: I,
                onMouseEnter: d,
                onMouseLeave: c,
                onClick: b,
                children: u
            })]
        })
    },
    G = e => (0, i.jsx)(U, {
        ...e,
        children: (0, i.jsx)(M, {})
    }),
    k = e => {
        if (null == e.current || null == e.current.parentElement) return !1;
        let t = e.current.parentElement.offsetWidth;
        return t >= 175 && t <= 230
    },
    V = e => {
        let t, n, {
                displayOptions: l,
                ...s
            } = e,
            [o, d] = a.useState(!1),
            [c, h] = a.useState(!1),
            _ = a.useRef(null),
            m = a.useRef(null),
            p = (0, g.Ay)(),
            E = (0, A.Mw)(p);
        o ? (t = E ? l.entryPointBackgroundAssets?.srcDarkHovered : l.entryPointBackgroundAssets?.srcLightHovered, n = E ? l.entrypointBackgroundStyle?.hovered?.dark : l.entrypointBackgroundStyle?.hovered?.light) : (t = E ? l.entryPointBackgroundAssets?.srcDark : l.entryPointBackgroundAssets?.srcLight, n = E ? l.entrypointBackgroundStyle?.resting?.dark : l.entrypointBackgroundStyle?.resting?.light);
        let I = a.useCallback(() => {
                d(!0);
                let e = () => h(k(_));
                e(), m.current = requestAnimationFrame(e)
            }, []),
            f = a.useCallback(() => {
                d(!1), h(!1), null != m.current && (cancelAnimationFrame(m.current), m.current = null)
            }, []);
        return a.useEffect(() => () => {
            null != m.current && cancelAnimationFrame(m.current)
        }, []), (0, i.jsx)(C.A, {
            title: l.title(),
            body: l.body?.() ?? "",
            asset: (0, i.jsx)("img", {
                src: l.asset,
                alt: "",
                "aria-hidden": !0
            }),
            children: (0, i.jsxs)(U, {
                className: null != l.entryPointClassName ? (0, T.t)(j, l.entryPointClassName) : void 0,
                ...s,
                icon: l.entryPointIcon,
                onMouseEnter: I,
                onMouseLeave: f,
                ...!0 === l.showHoverGradient && {
                    showHoverGradient: !0,
                    hoverGradientStart: u.A.colors.COLLECTIBLES_TAB_GRADIENT_CENTER,
                    hoverGradientMiddle: u.A.colors.COLLECTIBLES_TAB_GRADIENT_INNER,
                    hoverGradientEnd: u.A.colors.COLLECTIBLES_TAB_GRADIENT_OUTER
                },
                children: [(0, i.jsx)("div", {
                    ref: _,
                    className: j.marketingButtonBackgroundNew,
                    style: {
                        background: n
                    },
                    children: null != t && (0, i.jsx)("img", {
                        src: t,
                        className: r()(j.marketingButtonBackgroundImage, c && j.marketingButtonBackgroundImageFaded),
                        alt: "",
                        "aria-hidden": !0
                    })
                }), (0, i.jsx)(M, {
                    badgeIcon: l.badgeIcon,
                    badgeText: l.badgeText
                })]
            })
        })
    },
    B = e => {
        let {
            displayOptions: t,
            ...n
        } = e, l = a.useMemo(() => {
            let e = null != t.emojiName ? f.Ay.getByName(t.emojiName)?.surrogates : null;
            return (0, i.jsxs)(h.Text, {
                variant: "text-sm/medium",
                className: j.marketingBadgeTooltipContent,
                children: [null != e && (0, i.jsx)(_.A, {
                    emojiName: e
                }), t.title()]
            })
        }, [t]);
        return (0, i.jsx)(h.STz, {
            "data-migration-pending": !0,
            text: l,
            tooltipClassName: j.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            hideOnClick: !1,
            "aria-label": t.title(),
            children: e => (0, i.jsx)(U, {
                ...n,
                ...e,
                children: (0, i.jsx)(M, {
                    badgeIcon: t.badgeIcon,
                    badgeText: t.badgeText
                })
            })
        })
    },
    H = e => {
        let {
            displayOptions: t,
            dismissContent: n,
            ...l
        } = e, s = a.useRef(null), o = a.useRef(null), [d, c] = a.useState(!1), u = (0, g.Ay)(), h = (0, A.Mw)(u), _ = t.entryPointBackgroundAssets, m = t.entrypointBackgroundStyle, p = h ? _?.srcDarkHovered : _?.srcLightHovered, E = h ? m?.hovered?.dark : m?.hovered?.light;
        return a.useEffect(() => {
            if (null == p || "" === p) return void c(!1);
            let e = () => {
                c(k(o))
            };
            e();
            let t = requestAnimationFrame(e);
            return () => {
                cancelAnimationFrame(t)
            }
        }, [p]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(U, {
                ...l,
                onClick: () => n(P.i.TAKE_ACTION),
                listItemRef: s,
                children: [(0, i.jsx)("div", {
                    ref: o,
                    className: j.marketingButtonBackgroundNew,
                    style: null != E ? {
                        background: E
                    } : void 0,
                    children: null != p && (0, i.jsx)("img", {
                        src: p,
                        className: r()(j.marketingButtonBackgroundImage, d && j.marketingButtonBackgroundImageFaded),
                        alt: "",
                        "aria-hidden": !0
                    })
                }), (0, i.jsx)(M, {
                    badgeIcon: t.badgeIcon,
                    badgeText: t.badgeText
                })]
            }), (0, i.jsx)(x.A, {
                displayOptions: t,
                targetElementRef: s,
                onClick: () => n(P.i.TAKE_ACTION),
                onRequestClose: () => n(P.i.USER_DISMISS)
            })]
        })
    },
    F = e => {
        let {
            dismissContent: t,
            ...n
        } = e, l = a.useRef(null);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(U, {
                ...n,
                onClick: () => t(P.i.TAKE_ACTION),
                listItemRef: l
            }), (0, i.jsx)(v.A, {
                targetElementRef: l,
                onClick: () => t(P.i.TAKE_ACTION),
                onRequestClose: () => t(P.i.USER_DISMISS)
            })]
        })
    },
    Y = e => {
        let {
            selected: t,
            onClick: n,
            locationState: a,
            listItemRef: l
        } = e, {
            shopButtonDisplayOptions: r,
            dismissShopButtonDC: s
        } = (0, b.A)(), o = !(0, h.ueM)(), [d, u] = (0, I.kn)(o ? [c.M.WISHLIST_SHOP_BUTTON_POPOVER] : []), A = {
            selected: t,
            locationState: a,
            onClick: () => {
                s(), n?.()
            },
            listItemRef: l
        };
        if (null != r) switch (r.type) {
            case O.FF.TOOLTIP:
                return (0, i.jsx)(B, {
                    ...A,
                    displayOptions: r
                });
            case O.FF.TAB_TOOLTIP:
                return (0, i.jsx)(V, {
                    ...A,
                    displayOptions: r
                });
            case O.FF.BADGE:
                return (0, i.jsx)(G, {
                    ...A
                });
            case O.FF.COACHMARK:
                return (0, i.jsx)(H, {
                    dismissContent: s,
                    ...A,
                    displayOptions: r
                })
        }
        return d === c.M.WISHLIST_SHOP_BUTTON_POPOVER ? (0, i.jsx)(F, {
            ...A,
            dismissContent: u
        }) : (0, i.jsx)(U, {
            ...A
        })
    }