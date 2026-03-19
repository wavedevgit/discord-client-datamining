/** chunk id: 854514 params = (module,exports,require) **/
n.d(t, {
    A: () => v,
    H: () => b
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(323889),
    o = n(311907),
    d = n(397927),
    c = n(770178),
    u = n(975807),
    A = n(151252),
    h = n(859703),
    _ = n(341915),
    m = n(579473),
    g = n(561844),
    p = n(590202),
    E = n(415441),
    I = n(73473),
    f = n(139384),
    C = n(7832),
    T = n(654487),
    N = n(49999),
    S = n(985018),
    x = n(487866);

function y(e) {
    let {
        assetImage: t,
        assetVideo: n
    } = e, r = a.useRef(null);
    (0, f.A)(r, T.rE.QUEST_HOME_DESKTOP);
    let s = a.useMemo(() => (null != n ? (0, m.WV)(n.url) : null) ?? t.url, [n, t]);
    return null == n ? (0, i.jsxs)("div", {
        className: x.Tv,
        children: [(0, i.jsx)("div", {
            className: x.Np
        }), (0, i.jsx)("div", {
            className: x.LO,
            children: (0, i.jsx)("img", {
                className: x.LY,
                src: t.url,
                alt: t.altText
            })
        }), (0, i.jsx)("div", {
            className: l()(x.LO, x.jx, x.hw),
            children: (0, i.jsx)("img", {
                className: x.LY,
                src: t.url,
                alt: ""
            })
        }), (0, i.jsx)("div", {
            className: l()(x.LO, x.jx, x.Co),
            children: (0, i.jsx)("img", {
                className: x.LY,
                src: t.url,
                alt: ""
            })
        })]
    }) : (0, i.jsxs)("div", {
        className: x.Tv,
        children: [(0, i.jsx)("div", {
            className: x.Np
        }), (0, i.jsx)("div", {
            className: x.LO,
            children: (0, i.jsx)(E.N, {
                showImage: !1,
                showVideo: !0,
                assetRef: r,
                imageAsset: {
                    alt: n.altText,
                    className: x.LY,
                    asset: {
                        url: s,
                        mimetype: (0, m.vm)(s),
                        isAnimated: !1
                    },
                    assetId: s
                },
                videoAsset: {
                    alt: n.altText,
                    className: x.LY,
                    asset: {
                        url: n.url,
                        mimetype: (0, m.vm)(n.url),
                        isAnimated: !0
                    },
                    assetId: n.url
                }
            })
        })]
    })
}

function v(e) {
    let {
        config: t,
        onQuestCtaClick: n
    } = e, {
        enabled: r
    } = (0, A.Z)({
        location: T.rE.QUEST_HOME_DESKTOP
    }), [m, E] = a.useState("display-lg"), f = a.useCallback(e => {
        e.contentRect.width < 500 ? E("display-md") : E("display-lg")
    }, []), v = (0, c.w)(f, [], {
        fireOnMount: !0
    }), b = (0, o.bG)([h.A], () => h.A.quests), {
        dismissQuestHomeHeroContent: O
    } = (0, C.I)();
    return a.useEffect(() => {
        O(N.i.INDIRECT_ACTION)
    }, [O]), (0, i.jsx)(I.R, {
        adContentId: t.campaignId,
        adCreativeType: s.p.QUEST_HOME_HERO,
        questContent: _.uF.QUEST_HOME_HERO,
        sourceQuestContent: _.uF.QUEST_HOME_HERO,
        children: e => (0, i.jsx)("div", {
            className: l()(x.iE, "theme-midnight", {
                [x.Qx]: !r
            }),
            ref: t => {
                v.current = t, e.current = t
            },
            children: (0, i.jsxs)("div", {
                className: x.FG,
                children: [(0, i.jsxs)(d.BJc, {
                    className: x.Qs,
                    direction: "vertical",
                    justify: "space-between",
                    children: [(0, i.jsxs)(d.BJc, {
                        direction: "horizontal",
                        justify: "space-between",
                        align: "start",
                        children: [(0, i.jsx)("img", {
                            src: t.assetSponsorImage.url,
                            alt: t.assetSponsorImage.altText,
                            className: x.wm
                        }), (0, i.jsx)(d.Text, {
                            color: "text-strong",
                            variant: "text-sm/normal",
                            className: x.yu,
                            children: S.intl.string(S.t.OJjFi5)
                        })]
                    }), (0, i.jsxs)(d.BJc, {
                        className: x.yp,
                        gap: 16,
                        children: [(0, i.jsxs)(d.BJc, {
                            gap: 8,
                            children: [(0, i.jsx)(d.Heading, {
                                color: "text-strong",
                                variant: m,
                                className: x.DD,
                                children: t.labelTitle
                            }), (0, i.jsx)(d.Text, {
                                color: "text-strong",
                                variant: "text-md/normal",
                                className: x.VA,
                                children: t.labelSubtitle
                            })]
                        }), (0, i.jsxs)(d.ButtonGroup, {
                            children: [(0, i.jsx)(d.Button, {
                                onClick: () => {
                                    (0, u.A)(t.ctaSponsorUrl.url), (0, g.vK)({
                                        adContentId: t.campaignId,
                                        adCreativeType: s.p.QUEST_HOME_HERO,
                                        questContent: _.uF.QUEST_HOME_HERO,
                                        questContentCTA: p.Cy.OPEN_GAME_LINK,
                                        sourceQuestContent: _.uF.QUEST_HOME_HERO
                                    })
                                },
                                size: "md",
                                text: t.ctaSponsorUrl.title,
                                variant: "overlay-primary"
                            }), t.ctaQuests.map((e, a) => b.has(e.questId) ? (0, i.jsx)(d.Button, {
                                onClick: () => {
                                    n?.(e.questId), (0, g.vK)({
                                        adContentId: t.campaignId,
                                        adCreativeType: s.p.QUEST_HOME_HERO,
                                        questContent: _.uF.QUEST_HOME_HERO,
                                        questContentCTA: p.Cy.VIEW_QUESTS,
                                        sourceQuestContent: _.uF.QUEST_HOME_HERO
                                    })
                                },
                                size: "md",
                                text: e.title,
                                variant: "color-mix"
                            }, a) : null)]
                        })]
                    })]
                }), (0, i.jsx)(y, {
                    assetImage: t.assetHeroImage,
                    assetVideo: t.assetHeroVideo
                })]
            })
        })
    })
}

function b() {
    return (0, i.jsx)("div", {
        className: l()(x.iE, x.FG, x.B3),
        children: (0, i.jsx)(d.y$y, {})
    })
}