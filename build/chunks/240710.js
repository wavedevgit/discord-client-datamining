/** Chunk was on 90948 **/
/** chunk id: 240710, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    r = n(64700),
    a = n(731355),
    s = n(158954),
    l = n(435371),
    o = n(736653),
    d = n(216456),
    c = n(906822),
    u = n(341915),
    m = n(579473),
    x = n(651892),
    f = n(901406),
    _ = n(814793),
    g = n(241124),
    v = n(918338),
    h = n(201805),
    j = n(654487),
    p = n(818348),
    C = n(985018),
    y = n(861616);

function N(e) {
    let {
        quest: t,
        sourceQuestContent: n,
        onLoadComplete: N
    } = e, A = (0, o.Ay)(), b = (0, s.Mwr)(A) ? p.NJ.DARK : p.NJ.LIGHT, E = (0, x.wr)(t), w = (0, c.go)(), D = (0, _.E0)(t.config), L = r.useMemo(() => {
        var e;
        let n = null == (e = t.config.ctaConfig) ? void 0 : e.subtitle;
        return null != n ? n : (0, _.pv)(t.config) !== a.Z.GAMEPLAY || t.config.features.includes(j.Li.NON_GAMING_PLAY_QUEST) || (0, _.ui)(t) ? C.intl.string(C.t.y8Xf3k) : C.intl.string(C.t["wirwN+"])
    }, [t]), {
        isLoading: O
    } = (0, g.Gk)();
    r.useEffect(() => {
        O || N()
    }, [O, N]);
    let k = (0, h.Lk)({
        isShareable: D,
        questId: t.id,
        trackingCtx: r.useMemo(() => ({
            content: u.uF.REWARD_MODAL,
            ctaContent: d.Cy.REWARD_MODAL_COPY_LINK,
            impressionId: w,
            sourceQuestContent: n
        }), [w, n])
    });
    return (0, i.jsxs)("div", {
        className: y.kL,
        children: [(0, i.jsx)(g.Sn, {
            id: "hero-display",
            children: e => (0, i.jsx)(v.A, {
                quest: t,
                imageSize: {
                    width: 908,
                    height: 380
                },
                containerClassName: y.WQ,
                isInteracting: !0,
                assetRef: e
            })
        }), (0, i.jsx)("div", {
            className: y.Lt,
            children: (0, i.jsx)(g.Sn, {
                id: "partner-logotype",
                children: e => (0, i.jsx)("img", {
                    ref: e,
                    className: y.a$,
                    alt: C.intl.formatToPlainString(C.t.rtm15P, {
                        name: t.config.messages.gameTitle
                    }),
                    src: (0, m.tW)(t, m.fY.LOGO_TYPE, b).url
                })
            })
        }), (0, i.jsxs)("div", {
            className: y.Th,
            children: [(0, i.jsxs)("div", {
                className: y.Ly,
                children: [(0, i.jsx)(s.DZT, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    className: y.fx,
                    children: C.intl.format(C.t.EAYZAr, {
                        questName: t.config.messages.questName
                    })
                }), (0, i.jsx)(s.EYj, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: L
                })]
            }), (0, i.jsx)(g.Sn, {
                id: "partner-game-tile",
                children: e => (0, i.jsx)("img", {
                    ref: e,
                    className: y.rw,
                    alt: C.intl.formatToPlainString(C.t.rtm15P, {
                        name: t.config.messages.gameTitle
                    }),
                    src: (0, m.tW)(t, m.fY.GAME_TILE, b).url
                })
            })]
        }), (0, i.jsx)("div", {
            className: y.tu,
            children: (0, i.jsxs)(s.e2v, {
                size: "sm",
                direction: "horizontal",
                fullWidth: !0,
                fullWidthContainer: !0,
                children: [D && (0, i.jsx)(l.m_, {
                    text: C.intl.string(C.t.WmfZHZ),
                    children: (0, i.jsx)(s.K0, {
                        icon: s.qYV,
                        onClick: k,
                        "aria-label": C.intl.string(C.t.WmfZHZ),
                        variant: "secondary"
                    })
                }), (0, i.jsx)(s.$nd, {
                    variant: "primary",
                    text: E,
                    onClick: () => {
                        (0, f.pu)(t, {
                            content: u.uF.REWARD_MODAL,
                            ctaContent: d.Cy.OPEN_GAME_LINK,
                            impressionId: w,
                            sourceQuestContent: n
                        })
                    },
                    fullWidth: !0,
                    icon: s.We5,
                    iconPosition: "end"
                })]
            })
        })]
    })
}

function A(e) {
    let {
        quest: t,
        location: n
    } = e;
    return (0, i.jsx)(g.jY, {
        source: n,
        questId: t.id,
        isPreview: t.preview,
        children: (0, i.jsx)(N, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(t) {
                    var i;
                    i = n[t], t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i
                })
            }
            return e
        }({}, e))
    })
}