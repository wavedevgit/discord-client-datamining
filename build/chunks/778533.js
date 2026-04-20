/** chunk id: 778533 params = (module,exports,require) **/
s.d(t, {
    A: () => v
});
var n = s(627968),
    l = s(64700),
    i = s(503698),
    a = s.n(i),
    o = s(435371),
    r = s(397927),
    u = s(713517),
    d = s(240248),
    c = s(341915),
    m = s(890687),
    x = s(590202),
    g = s(971649),
    h = s(781121),
    A = s(201257),
    p = s(985018),
    C = s(503820),
    S = s(834926);

function v() {
    let {
        quest: e,
        sourceQuestContent: t,
        isPortrait: s,
        onClose: i
    } = l.useContext(A.VideoQuestModalContext), v = (0, g.go)(), f = (0, m.LS)(e), j = l.useRef(null), {
        isHoveringOrFocusing: N
    } = (0, u.A)(j), O = (0, h.H)({
        quest: e,
        onClose: i,
        sourceQuestContent: t,
        impressionId: v
    }), E = e.config.ctaConfig.subtitle, M = void 0 !== E && !(0, d.uJ)(E);
    return (0, n.jsx)(o.m_, {
        text: p.intl.string(p.t.EuHF34),
        children: (0, n.jsx)(r.DUT, {
            onClick: () => O(c.uF.VIDEO_MODAL, x.Cy.OPEN_GAME_LINK),
            className: C._S,
            children: (0, n.jsxs)("div", {
                className: a()(S.hA, C.t8, {
                    [C.Mc]: f
                }),
                ref: j,
                children: [(0, n.jsx)("div", {
                    className: C.sB,
                    children: (0, n.jsx)(r.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        className: a()(C.xw, {
                            [C._L]: s
                        }),
                        lineClamp: s ? void 0 : 1,
                        children: p.intl.format(p.t.EQa7os, {
                            questName: e.config.messages.questName
                        })
                    })
                }), (0, n.jsxs)("div", {
                    className: a()(C.sB, {
                        [C.fi]: s
                    }),
                    children: [(0, n.jsx)("div", {
                        className: a()(C.PV, {
                            [C.WV]: s,
                            [C.mq]: s
                        }),
                        children: (0, n.jsx)(r.yr3, {
                            size: "xs",
                            color: N ? r.LU0.colors.ICON_STRONG.css : r.LU0.colors.ICON_MUTED.css
                        })
                    }), (0, n.jsx)(r.Heading, {
                        variant: "heading-sm/medium",
                        className: a()(C.PV, {
                            [C.WV]: s,
                            [C.mq]: s
                        }),
                        color: N ? "text-strong" : "text-subtle",
                        lineClamp: 1,
                        children: e.config.messages.gamePublisher
                    }), M ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            "aria-hidden": "true",
                            className: a()(C.SC, {
                                [C.b2]: s
                            })
                        }), (0, n.jsx)(r.Heading, {
                            className: a()(C.xw, {
                                [C._L]: s
                            }),
                            variant: "heading-sm/medium",
                            lineClamp: s ? void 0 : 1,
                            color: N ? "text-strong" : "text-subtle",
                            children: E
                        })]
                    }) : null]
                })]
            })
        })
    })
}