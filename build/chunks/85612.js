/** Chunk was on 31748 **/
/** chunk id: 85612, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a: () => W
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(353709),
    s = n(311907),
    c = n(397927),
    u = n(964486),
    d = n(761929),
    f = n(793574),
    p = n(688810),
    g = n(385318),
    m = n(480890),
    _ = n(267102),
    h = n(625841),
    y = n(202639),
    A = n(336060),
    b = n(430452),
    E = n(287809),
    v = n(954571),
    O = n(474090),
    x = n(927578),
    S = n(504292),
    C = n(253541),
    N = n(971778),
    I = n(494783),
    j = n(342887),
    T = n(606451),
    w = n(177392),
    P = n(185494),
    R = n(15910),
    D = n(599813),
    k = n(652215),
    L = n(806931),
    M = n(788868),
    U = n(731854),
    V = n(734317),
    F = n(985018),
    G = n(632998);

function B(e) {
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
}

function H(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function W(e) {
    let {
        onSettingsButtonClick: t,
        wide: n,
        showOutputDevices: i = !1,
        showSearchBar: W = !0
    } = e, [z, Y] = l.useState(""), {
        analyticsLocations: K,
        newestAnalyticsLocation: Z
    } = (0, p.Ay)(f.A.VOICE_FILTER_POPOUT), q = l.useRef(null), X = (0, d.A)({
        minDimension: 400,
        maxDimension: 600,
        resizableDomNodeRef: q,
        onElementResize: (e, t) => {},
        onElementResizeEnd: e => {},
        orientation: d.R.VERTICAL_TOP
    });
    (0, F.useSyncMessages)(V.messagesLoader);
    let J = (0, s.bG)([E.default], () => (0, O.ki)(E.default.getCurrentUser())),
        Q = (0, s.bG)([N.A], () => N.A.getCatalogUpdateTime()),
        [$, ee] = l.useState(!1),
        [et, en] = l.useState(!1),
        {
            activeVoice: er
        } = (0, I.f)(),
        el = (0, C.dz)({
            location: K[0],
            autoTrackExposure: !0
        }),
        ei = (0, c.zhh)({
            transform: $ ? "translateY(-8px) scale(".concat(.96, ")") : "translateY(0px) scale(1)",
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        ea = (0, c.zhh)({
            y: 50 * !$,
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40
            }
        }),
        eo = (0, c.zhh)({
            to: {
                bottom: "" !== z ? "translateY(75px)" : "translateY(50px)",
                opacity: +("" === z)
            },
            config: {
                tension: 280,
                friction: 24,
                duration: 200
            }
        }),
        es = l.useRef(null);
    (0, u.Ay)(() => {
        (0, j.md)(), el && (0, S.tB)(), v.default.track(k.HAw.VOICE_FILTER_PICKER_OPENED, {
            active_voice_filter_id: null != er ? er : null
        })
    });
    let ec = l.useCallback(() => Y(""), [Y]),
        eu = l.useRef(null),
        ed = (0, _.Us)() !== k.BRT.OVERLAY;
    return (0, r.jsx)(p.f5, {
        value: K,
        children: (0, r.jsxs)("div", {
            ref: q,
            className: a()(G.ZO, {
                [G.U]: n,
                [G.Fd]: !ed
            }),
            style: {
                height: 500
            },
            children: [ed && (0, r.jsx)("div", {
                className: G.Di,
                onMouseDown: X,
                children: (0, r.jsx)("div", {
                    className: G.YC
                })
            }), W && (0, r.jsx)(c.IWV, {
                placeholder: F.intl.string(F.t.hHCZJQ),
                autoFocus: !0,
                onChange: Y,
                query: z,
                onClear: ec
            }), (0, r.jsx)(D.c, {
                query: z,
                columns: n ? 5 : 4,
                handleScroll: e => {
                    let t = es.current;
                    if (null == t || (ee(e > 0), et)) return;
                    let {
                        height: n,
                        totalHeight: r
                    } = t.getListDimensions();
                    e < r - n || (en(!0), v.default.track(k.HAw.VOICE_FILTER_PICKER_SCROLLED))
                },
                voiceListRef: es
            }), !J && (0, r.jsxs)(o.animated.div, {
                style: H(B({}, eo), {
                    display: eo.opacity.to(e => 0 === e ? "none" : "block")
                }),
                className: G.Wv,
                children: [null != Q && (0, r.jsx)(o.animated.div, {
                    style: ei,
                    children: (0, r.jsx)(R.j, {
                        catalogUpdateTime: Q,
                        isScrolled: $
                    })
                }), (0, r.jsx)("div", {
                    className: G.Zj,
                    children: (0, r.jsx)(o.animated.div, {
                        style: {
                            y: ea.y,
                            opacity: ea.y.to(e => +(50 !== e))
                        },
                        children: (0, r.jsx)(y.d, {
                            showUpsell: !0,
                            text: F.intl.format(F.t.XMDm8z, {
                                nitroTierName: (0, x.Dd)(M.PremiumTypes.TIER_2),
                                onClick: () => (0, A.n)()
                            }),
                            button: F.intl.string(F.t.cRCCJ3),
                            buttonAnalyticsObject: {
                                section: k.JJy.VOICE_FILTERS_FLOATING_UPSELL
                            },
                            position: "inline",
                            className: G.UX
                        })
                    })
                })]
            }), (0, r.jsx)(w.H, {}), (0, r.jsx)(T.m, {}), (0, r.jsx)(P.l, {}), (0, r.jsxs)("div", {
                className: a()(G.N$, {
                    [G.rd]: null != er
                }),
                children: [(0, r.jsx)(h.U, {
                    deviceType: U.oh.AUDIO_INPUT,
                    location: "VoiceFiltersPopout",
                    onOpen: () => {
                        var e;
                        v.default.track(k.HAw.VOICE_FILTER_MIC_SELECTOR_OPENED, {
                            active_voice_filter_id: null != (e = b.A.getActiveVoiceFilter()) ? e : null
                        })
                    },
                    popoutPosition: "top"
                }), i && (0, r.jsx)(h.U, {
                    deviceType: U.oh.AUDIO_OUTPUT,
                    location: "VoiceFiltersPopout",
                    popoutPosition: "top"
                }), (0, r.jsx)(c.YNO, {
                    targetElementRef: eu,
                    position: "top",
                    align: "right",
                    renderPopout: () => (0, r.jsx)(g.default, {
                        renderInputModes: !0,
                        renderInputVolume: !0,
                        renderInputDevices: !0,
                        renderOutputDevices: i,
                        renderOutputVolume: i,
                        onClose: t,
                        onInteraction: (0, m.s)("AudioDeviceMenu", Z, {
                            entrypoint: L.GK.THREE_DOT
                        }),
                        minimal: !0
                    }),
                    children: e => (0, r.jsx)(c.K0, H(B({
                        variant: "secondary"
                    }, e), {
                        buttonRef: eu,
                        icon: c.FHP,
                        onClick: t => {
                            var n;
                            v.default.track(k.HAw.VOICE_FILTER_VOICE_SETTINGS_CLICKED, {
                                active_voice_filter_id: null != er ? er : null
                            }), null == (n = e.onClick) || n.call(e, t)
                        },
                        "aria-label": F.intl.string(F.t["ClGM/G"])
                    }))
                })]
            })]
        })
    })
}