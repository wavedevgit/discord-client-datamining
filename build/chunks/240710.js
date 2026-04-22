/** chunk id: 240710 params = (module,exports,require) **/
n.d(e, {
    A: () => j
});
var i = n(627968),
    s = n(64700),
    a = n(731355),
    r = n(158954),
    l = n(435371),
    d = n(736653),
    o = n(341915),
    c = n(579473),
    u = n(590202),
    h = n(971649),
    m = n(651892),
    b = n(901406),
    f = n(814793),
    g = n(241124),
    x = n(918338),
    C = n(201805),
    I = n(491145),
    N = n(654487),
    p = n(818348),
    A = n(985018),
    v = n(970197);

function T(t) {
    let {
        quest: e,
        sourceQuestContent: n,
        onLoadComplete: T,
        preCtaClick: j
    } = t, E = (0, d.Ay)(), _ = (0, r.Mwr)(E) ? p.NJ.DARK : p.NJ.LIGHT, y = (0, h.go)(), R = (0, f.E0)(e.config), O = async () => {
        await j?.(), (0, b.pu)(e, {
            content: o.uF.REWARD_MODAL,
            ctaContent: u.Cy.OPEN_GAME_LINK,
            impressionId: y,
            sourceQuestContent: n
        })
    }, k = s.useMemo(() => {
        let t = e.config.ctaConfig?.subtitle;
        return null != t ? t : (0, f.pv)(e.config) !== a.Z.GAMEPLAY || e.config.features.includes(N.Li.NON_GAMING_PLAY_QUEST) || (0, f.ui)(e) ? A.intl.string(A.t.y8Xf3k) : A.intl.string(A.t["wirwN+"])
    }, [e]), L = (0, I.A)(e, {
        impressionId: y,
        sourceQuestContent: n
    }, j) ?? {
        ctaText: (0, m.wr)(e),
        ctaIcon: r.We5,
        ctaVariant: "primary",
        onClickCta: O,
        title: A.intl.format(A.t.EAYZAr, {
            questName: e.config.messages.questName
        }),
        subtitle: k,
        ctaIconPosition: "end"
    }, {
        isLoading: M
    } = (0, g.Gk)();
    s.useEffect(() => {
        M || T()
    }, [M, T]);
    let D = (0, C.Lk)({
        isShareable: R,
        questId: e.id,
        trackingCtx: s.useMemo(() => ({
            content: o.uF.REWARD_MODAL,
            ctaContent: u.Cy.REWARD_MODAL_COPY_LINK,
            impressionId: y,
            sourceQuestContent: n
        }), [y, n])
    });
    return (0, i.jsxs)("div", {
        className: v.kL,
        children: [(0, i.jsx)(g.Sn, {
            id: "hero-display",
            children: t => (0, i.jsx)(x.A, {
                quest: e,
                imageSize: {
                    width: 908,
                    height: 380
                },
                containerClassName: v.WQ,
                isInteracting: !0,
                assetRef: t
            })
        }), (0, i.jsx)("div", {
            className: v.Lt,
            children: (0, i.jsx)(g.Sn, {
                id: "partner-logotype",
                children: t => (0, i.jsx)("img", {
                    ref: t,
                    className: v.a$,
                    alt: A.intl.formatToPlainString(A.t.rtm15P, {
                        name: e.config.messages.gameTitle
                    }),
                    src: (0, c.tW)(e, c.fY.LOGO_TYPE, _).url
                })
            })
        }), (0, i.jsxs)("div", {
            className: v.Th,
            children: [(0, i.jsxs)("div", {
                className: v.Ly,
                children: [(0, i.jsx)(r.DZT, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    className: v.fx,
                    children: L.title
                }), (0, i.jsx)(r.EYj, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: L.subtitle
                })]
            }), (0, i.jsx)(g.Sn, {
                id: "partner-game-tile",
                children: t => (0, i.jsx)("img", {
                    ref: t,
                    className: v.rw,
                    alt: A.intl.formatToPlainString(A.t.rtm15P, {
                        name: e.config.messages.gameTitle
                    }),
                    src: (0, c.tW)(e, c.fY.GAME_TILE, _).url
                })
            })]
        }), (0, i.jsx)("div", {
            className: v.tu,
            children: (0, i.jsxs)(r.e2v, {
                size: "sm",
                direction: "horizontal",
                fullWidth: !0,
                fullWidthContainer: !0,
                children: [R && (0, i.jsx)(l.m_, {
                    text: A.intl.string(A.t.WmfZHZ),
                    children: (0, i.jsx)(r.K0, {
                        icon: r.qYV,
                        onClick: D,
                        "aria-label": A.intl.string(A.t.WmfZHZ),
                        variant: "secondary"
                    })
                }), (0, i.jsx)(r.$nd, {
                    variant: L.ctaVariant,
                    text: L.ctaText,
                    onClick: L.onClickCta,
                    fullWidth: !0,
                    icon: L.ctaIcon,
                    iconPosition: L.ctaIconPosition
                })]
            })
        })]
    })
}

function j(t) {
    let {
        quest: e,
        location: n
    } = t;
    return (0, i.jsx)(g.jY, {
        source: n,
        questId: e.id,
        isPreview: e.preview,
        children: (0, i.jsx)(T, {
            ...t
        })
    })
}