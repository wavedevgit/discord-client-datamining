/** chunk id: 778533 params = (module,exports,require) **/
s.d(t, {
    A: () => f
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
    h = s(971649),
    C = s(781121),
    g = s(201257),
    p = s(985018),
    A = s(597052),
    S = s(246878);

function f() {
    let {
        quest: e,
        sourceQuestContent: t,
        isPortrait: s,
        onClose: i
    } = l.useContext(g.VideoQuestModalContext), f = (0, h.go)(), v = (0, m.LS)(e), j = l.useRef(null), {
        isHoveringOrFocusing: N
    } = (0, u.A)(j), O = (0, C.H)({
        quest: e,
        onClose: i,
        sourceQuestContent: t,
        impressionId: f
    }), E = e.config.ctaConfig.subtitle, _ = void 0 !== E && !(0, d.uJ)(E);
    return (0, n.jsx)(o.m_, {
        text: p.intl.string(p.t.EuHF34),
        children: (0, n.jsx)(r.DUT, {
            onClick: () => O(c.uF.VIDEO_MODAL, x.Cy.OPEN_GAME_LINK),
            className: A._S,
            children: (0, n.jsxs)("div", {
                className: a()(S.hA, A.t8, {
                    [A.Mc]: v
                }),
                ref: j,
                children: [(0, n.jsx)("div", {
                    className: A.sB,
                    children: (0, n.jsx)(r.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        className: a()(A.xw, {
                            [A._L]: s
                        }),
                        lineClamp: s ? void 0 : 1,
                        children: p.intl.format(p.t.EQa7os, {
                            questName: e.config.messages.questName
                        })
                    })
                }), (0, n.jsxs)("div", {
                    className: a()(A.sB, {
                        [A.fi]: s
                    }),
                    children: [(0, n.jsx)("div", {
                        className: a()(A.PV, {
                            [A.WV]: s,
                            [A.mq]: s
                        }),
                        children: (0, n.jsx)(r.yr3, {
                            size: "xs",
                            color: N ? r.LU0.colors.ICON_STRONG.css : r.LU0.colors.ICON_MUTED.css
                        })
                    }), (0, n.jsx)(r.Heading, {
                        variant: "heading-sm/medium",
                        className: a()(A.PV, {
                            [A.WV]: s,
                            [A.mq]: s
                        }),
                        color: N ? "text-strong" : "text-subtle",
                        lineClamp: 1,
                        children: e.config.messages.gamePublisher
                    }), _ ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            "aria-hidden": "true",
                            className: a()(A.SC, {
                                [A.b2]: s
                            })
                        }), (0, n.jsx)(r.Heading, {
                            className: a()(A.xw, {
                                [A._L]: s
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