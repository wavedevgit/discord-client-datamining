/** chunk id: 213750 params = (module,exports,require) **/
n.d(t, {
    i: () => K
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(837381),
    o = n(934551),
    d = n(158954),
    c = n(311907),
    u = n(554146),
    A = n(582754),
    h = n(397927),
    _ = n(565645),
    m = n(701363),
    g = n(736653),
    p = n(775602),
    E = n(793574),
    I = n(688810),
    f = n(580314),
    C = n(932001),
    T = n(7584),
    N = n(821589),
    S = n(979286),
    x = n(335657),
    v = n(252362),
    y = n(540063),
    b = n(870308),
    O = n(998694),
    L = n(158216),
    R = n(758836),
    P = n(652215),
    D = n(49999),
    M = n(985018),
    j = n(134848);
let w = e => {
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
    U = () => {
        let {
            noCache: e,
            includeUnpublished: t
        } = (0, O.A)();
        return (0, x.y)(R.G2.HOME, {
            noCache: e,
            includeUnpublished: t
        }, void 0, !0), null
    },
    G = e => {
        let {
            selected: t,
            locationState: n,
            icon: r,
            onClick: l,
            collectibleShopTab: o,
            onMouseEnter: d,
            onMouseLeave: c,
            children: u,
            ...A
        } = e, _ = (0, s.rm)("shop"), g = E.A.HOME_PAGE_SHOP_TAB, {
            analyticsLocations: p
        } = (0, I.Ay)(g), [f, C] = a.useState(!1), T = a.useCallback(() => {
            void 0 !== l && l(), void 0 !== o && (0, S.Cz)({
                tab: o,
                analyticsLocations: p,
                analyticsSource: g
            }), C(!0), (0, S.Sw)({
                analyticsSource: g,
                analyticsLocations: p
            })
        }, [g, p, l, C, o]), N = P.BVt.COLLECTIBLES_SHOP;
        return (0, i.jsxs)(i.Fragment, {
            children: [f && (0, i.jsx)(U, {}), (0, i.jsx)(m.z9, {
                selected: t,
                route: N,
                icon: r ?? h.U1X,
                text: M.intl.string(M.t.pWG4ze),
                locationState: n,
                ..._,
                ...A,
                onMouseEnter: d,
                onMouseLeave: c,
                onClick: T,
                children: u
            })]
        })
    },
    k = e => (0, i.jsx)(G, {
        ...e,
        children: (0, i.jsx)(w, {})
    }),
    V = a.memo(function(e) {
        let {
            displayOptions: t,
            assetId: n,
            avatarDecorationSkuId: a,
            reducedMotion: r = !1
        } = e, l = null != n || null != a ? (0, f.A)({
            legacyAssetId: n,
            skuId: a,
            canAnimate: !r
        }) : null, s = t.title(), o = t.body?.(), d = null == o || "" === o;
        return (0, i.jsxs)("div", {
            className: j.shopMarketingTooltipContent,
            children: [(0, i.jsx)("div", {
                className: j.avatarContainer,
                children: (0, i.jsx)(h.euF, {
                    className: j.avatar,
                    src: t.imageSrc,
                    avatarDecoration: l,
                    size: h._3J.SIZE_80,
                    "aria-hidden": !0
                })
            }), (0, i.jsxs)("div", {
                className: j.shopMarketingTooltipText,
                children: [(0, i.jsx)(h.Heading, {
                    variant: d ? "heading-sm/medium" : "heading-sm/bold",
                    children: s
                }), !d && (0, i.jsx)(h.Text, {
                    variant: "text-xs/normal",
                    className: j.marketingBadgeTooltipContent,
                    children: o
                })]
            })]
        })
    }),
    B = e => {
        if (null == e.current || null == e.current.parentElement) return !1;
        let t = e.current.parentElement.offsetWidth;
        return t >= 175 && t <= 230
    },
    H = e => {
        let t, n, {
                displayOptions: r,
                ...s
            } = e,
            o = (0, c.bG)([p.A], () => p.A.useReducedMotion),
            [d, u] = a.useState(0),
            [_, m] = a.useState(0),
            [E, I] = a.useState(!1),
            [f, C] = a.useState(!1),
            T = a.useRef(null),
            S = a.useRef(null),
            x = (0, g.Ay)(),
            v = (0, A.Mw)(x);
        E ? v ? (t = r.entryPointBackgroundAssets?.srcDarkHovered, n = r.entrypointBackgroundStyle?.hovered?.dark) : (t = r.entryPointBackgroundAssets?.srcLightHovered, n = r.entrypointBackgroundStyle?.hovered?.light) : v ? (t = r.entryPointBackgroundAssets?.srcDark, n = r.entrypointBackgroundStyle?.resting?.dark) : (t = r.entryPointBackgroundAssets?.srcLight, n = r.entrypointBackgroundStyle?.resting?.light);
        let y = a.useCallback(e => {
                let t = r.assetIds;
                null != t && t.length > 0 && u(e => (e + 1) % t.length);
                let n = r.avatarDecorationSkuIds;
                null != n && n.length > 0 && m(e => (e + 1) % n.length), I(!0);
                let i = () => {
                    C(B(T))
                };
                i(), S.current = requestAnimationFrame(i), e?.()
            }, [r.assetIds, r.avatarDecorationSkuIds]),
            b = a.useCallback(e => {
                I(!1), C(!1), null != S.current && (cancelAnimationFrame(S.current), S.current = null), e?.()
            }, []);
        a.useEffect(() => () => {
            null != S.current && cancelAnimationFrame(S.current)
        }, []);
        let O = r.title();
        return (0, i.jsx)(h.STz, {
            "data-migration-pending": !0,
            text: (0, i.jsx)(V, {
                displayOptions: r,
                assetId: r.assetIds?.[d],
                avatarDecorationSkuId: r.avatarDecorationSkuIds?.[_],
                reducedMotion: o
            }),
            tooltipClassName: j.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            "aria-label": "string" == typeof O ? O : M.intl.string(M.t.rSXaxY),
            children: e => (0, i.jsxs)(G, {
                className: null != r.entryPointClassName ? (0, N.t)(j, r.entryPointClassName) : void 0,
                ...s,
                icon: r.entryPointIcon,
                ...e,
                onMouseEnter: () => y(e.onMouseEnter),
                onMouseLeave: () => b(e.onMouseLeave),
                children: [(0, i.jsx)("div", {
                    ref: T,
                    className: j.marketingButtonBackgroundNew,
                    style: {
                        background: n
                    },
                    children: null != t && (0, i.jsx)("img", {
                        src: t,
                        className: l()(j.marketingButtonBackgroundImage, f && j.marketingButtonBackgroundImageFaded),
                        alt: "",
                        "aria-hidden": !0
                    })
                }), (0, i.jsx)(w, {
                    badgeIcon: r.badgeIcon,
                    badgeText: r.badgeText
                })]
            })
        })
    },
    F = e => {
        let {
            displayOptions: t,
            ...n
        } = e, r = a.useMemo(() => {
            let e = null != t.emojiName ? T.Ay.getByName(t.emojiName)?.surrogates : null;
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
            text: r,
            tooltipClassName: j.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            hideOnClick: !1,
            "aria-label": t.title(),
            children: e => (0, i.jsx)(G, {
                ...n,
                ...e,
                children: (0, i.jsx)(w, {
                    badgeIcon: t.badgeIcon,
                    badgeText: t.badgeText
                })
            })
        })
    },
    Y = e => {
        let {
            displayOptions: t,
            dismissContent: n,
            ...r
        } = e, s = a.useRef(null), o = a.useRef(null), [d, c] = a.useState(!1), u = (0, g.Ay)(), h = (0, A.Mw)(u), _ = t.entryPointBackgroundAssets, m = t.entrypointBackgroundStyle, p = h ? _?.srcDarkHovered : _?.srcLightHovered, E = h ? m?.hovered?.dark : m?.hovered?.light;
        return a.useEffect(() => {
            if (null == p || "" === p) return void c(!1);
            let e = () => {
                c(B(o))
            };
            e();
            let t = requestAnimationFrame(e);
            return () => {
                cancelAnimationFrame(t)
            }
        }, [p]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(G, {
                ...r,
                onClick: () => n(D.i.TAKE_ACTION),
                listItemRef: s,
                children: [(0, i.jsx)("div", {
                    ref: o,
                    className: j.marketingButtonBackgroundNew,
                    style: null != E ? {
                        background: E
                    } : void 0,
                    children: null != p && (0, i.jsx)("img", {
                        src: p,
                        className: l()(j.marketingButtonBackgroundImage, d && j.marketingButtonBackgroundImageFaded),
                        alt: "",
                        "aria-hidden": !0
                    })
                }), (0, i.jsx)(w, {
                    badgeIcon: t.badgeIcon,
                    badgeText: t.badgeText
                })]
            }), (0, i.jsx)(v.A, {
                displayOptions: t,
                targetElementRef: s,
                onClick: () => n(D.i.TAKE_ACTION),
                onRequestClose: () => n(D.i.USER_DISMISS)
            })]
        })
    },
    W = e => {
        let {
            dismissContent: t,
            ...n
        } = e, r = a.useRef(null);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(G, {
                ...n,
                onClick: () => t(D.i.TAKE_ACTION),
                listItemRef: r
            }), (0, i.jsx)(y.A, {
                targetElementRef: r,
                onClick: () => t(D.i.TAKE_ACTION),
                onRequestClose: () => t(D.i.USER_DISMISS)
            })]
        })
    },
    K = e => {
        let {
            selected: t,
            onClick: n,
            locationState: a,
            listItemRef: r
        } = e, {
            shopButtonDisplayOptions: l,
            dismissShopButtonDC: s
        } = (0, b.A)(), o = !(0, h.ueM)(), [d, c] = (0, C.kn)(o ? [u.M.WISHLIST_SHOP_BUTTON_POPOVER] : []), A = {
            selected: t,
            locationState: a,
            onClick: () => {
                s(), n?.()
            },
            listItemRef: r
        };
        if (null != l) switch (l.type) {
            case L.FF.TOOLTIP:
                return (0, i.jsx)(F, {
                    ...A,
                    displayOptions: l
                });
            case L.FF.COACHTIP:
                return (0, i.jsx)(H, {
                    ...A,
                    displayOptions: l
                });
            case L.FF.BADGE:
                return (0, i.jsx)(k, {
                    ...A
                });
            case L.FF.COACHMARK:
                return (0, i.jsx)(Y, {
                    dismissContent: s,
                    ...A,
                    displayOptions: l
                })
        }
        return d === u.M.WISHLIST_SHOP_BUTTON_POPOVER ? (0, i.jsx)(W, {
            ...A,
            dismissContent: c
        }) : (0, i.jsx)(G, {
            ...A
        })
    }