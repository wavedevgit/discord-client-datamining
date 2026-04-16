/** chunk id: 240710 params = (module,exports,require) **/
n.d(e, {
    A: () => E
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
    m = n(971649),
    h = n(651892),
    x = n(901406),
    f = n(814793),
    g = n(241124),
    C = n(918338),
    b = n(201805),
    N = n(491145),
    p = n(654487),
    A = n(818348),
    j = n(985018),
    I = n(970197);

function v(t) {
    let {
        quest: e,
        sourceQuestContent: n,
        onLoadComplete: v,
        preCtaClick: E
    } = t, T = (0, d.Ay)(), y = (0, r.Mwr)(T) ? A.NJ.DARK : A.NJ.LIGHT, _ = (0, m.go)(), R = (0, f.E0)(e.config), k = async () => {
        await E?.(), (0, x.pu)(e, {
            content: o.uF.REWARD_MODAL,
            ctaContent: u.Cy.OPEN_GAME_LINK,
            impressionId: _,
            sourceQuestContent: n
        })
    }, M = s.useMemo(() => {
        let t = e.config.ctaConfig?.subtitle;
        return null != t ? t : (0, f.pv)(e.config) !== a.Z.GAMEPLAY || e.config.features.includes(p.Li.NON_GAMING_PLAY_QUEST) || (0, f.ui)(e) ? j.intl.string(j.t.y8Xf3k) : j.intl.string(j.t["wirwN+"])
    }, [e]), O = (0, N.A)(e, {
        impressionId: _,
        sourceQuestContent: n
    }, E) ?? {
        ctaText: (0, h.wr)(e),
        ctaIcon: r.We5,
        ctaVariant: "primary",
        onClickCta: k,
        title: j.intl.format(j.t.EAYZAr, {
            questName: e.config.messages.questName
        }),
        subtitle: M,
        ctaIconPosition: "end"
    }, {
        isLoading: L
    } = (0, g.Gk)();
    s.useEffect(() => {
        L || v()
    }, [L, v]);
    let D = (0, b.Lk)({
        isShareable: R,
        questId: e.id,
        trackingCtx: s.useMemo(() => ({
            content: o.uF.REWARD_MODAL,
            ctaContent: u.Cy.REWARD_MODAL_COPY_LINK,
            impressionId: _,
            sourceQuestContent: n
        }), [_, n])
    });
    return (0, i.jsxs)("div", {
        className: I.kL,
        children: [(0, i.jsx)(g.Sn, {
            id: "hero-display",
            children: t => (0, i.jsx)(C.A, {
                quest: e,
                imageSize: {
                    width: 908,
                    height: 380
                },
                containerClassName: I.WQ,
                isInteracting: !0,
                assetRef: t
            })
        }), (0, i.jsx)("div", {
            className: I.Lt,
            children: (0, i.jsx)(g.Sn, {
                id: "partner-logotype",
                children: t => (0, i.jsx)("img", {
                    ref: t,
                    className: I.a$,
                    alt: j.intl.formatToPlainString(j.t.rtm15P, {
                        name: e.config.messages.gameTitle
                    }),
                    src: (0, c.tW)(e, c.fY.LOGO_TYPE, y).url
                })
            })
        }), (0, i.jsxs)("div", {
            className: I.Th,
            children: [(0, i.jsxs)("div", {
                className: I.Ly,
                children: [(0, i.jsx)(r.DZT, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    className: I.fx,
                    children: O.title
                }), (0, i.jsx)(r.EYj, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: O.subtitle
                })]
            }), (0, i.jsx)(g.Sn, {
                id: "partner-game-tile",
                children: t => (0, i.jsx)("img", {
                    ref: t,
                    className: I.rw,
                    alt: j.intl.formatToPlainString(j.t.rtm15P, {
                        name: e.config.messages.gameTitle
                    }),
                    src: (0, c.tW)(e, c.fY.GAME_TILE, y).url
                })
            })]
        }), (0, i.jsx)("div", {
            className: I.tu,
            children: (0, i.jsxs)(r.e2v, {
                size: "sm",
                direction: "horizontal",
                fullWidth: !0,
                fullWidthContainer: !0,
                children: [R && (0, i.jsx)(l.m_, {
                    text: j.intl.string(j.t.WmfZHZ),
                    children: (0, i.jsx)(r.K0, {
                        icon: r.qYV,
                        onClick: D,
                        "aria-label": j.intl.string(j.t.WmfZHZ),
                        variant: "secondary"
                    })
                }), (0, i.jsx)(r.$nd, {
                    variant: O.ctaVariant,
                    text: O.ctaText,
                    onClick: O.onClickCta,
                    fullWidth: !0,
                    icon: O.ctaIcon,
                    iconPosition: O.ctaIconPosition
                })]
            })
        })]
    })
}

function E(t) {
    let {
        quest: e,
        location: n
    } = t;
    return (0, i.jsx)(g.jY, {
        source: n,
        questId: e.id,
        isPreview: e.preview,
        children: (0, i.jsx)(v, {
            ...t
        })
    })
}