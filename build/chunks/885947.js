/** chunk id: 885947, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968),
    l = n(64700),
    o = n(503698),
    i = n.n(o),
    s = n(435371),
    a = n(397927),
    c = n(713517),
    u = n(240248),
    d = n(341915),
    p = n(890687),
    f = n(590202),
    m = n(971649),
    v = n(717415),
    b = n(583235),
    E = n(985018),
    g = n(438655);

function h() {
    let {
        quest: e,
        sourceQuestContent: t,
        isPortrait: n,
        onClose: o
    } = l.useContext(v.VideoQuestModalContext), h = (0, m.go)(), y = (0, p.LS)(e), O = l.useRef(null), {
        isHoveringOrFocusing: S
    } = (0, c.A)(O), _ = (0, b.H)({
        quest: e,
        onClose: o,
        sourceQuestContent: t,
        impressionId: h
    }), C = e.config.ctaConfig.subtitle, x = void 0 !== C && !(0, u.uJ)(C);
    return (0, r.jsx)(s.m_, {
        text: E.intl.string(E.t.EuHF34),
        children: (0, r.jsx)(a.DUT, {
            onClick: () => _(d.uF.VIDEO_MODAL, f.Cy.OPEN_GAME_LINK),
            className: g._S,
            children: (0, r.jsxs)("div", {
                className: i()(g.hA, g.t8, {
                    [g.Mc]: y
                }),
                ref: O,
                children: [(0, r.jsx)("div", {
                    className: g.sB,
                    children: (0, r.jsx)(a.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        className: i()(g.xw, {
                            [g._L]: n
                        }),
                        lineClamp: n ? void 0 : 1,
                        children: E.intl.format(E.t.EQa7os, {
                            questName: e.config.messages.questName
                        })
                    })
                }), (0, r.jsxs)("div", {
                    className: i()(g.sB, {
                        [g.fi]: n
                    }),
                    children: [(0, r.jsx)("div", {
                        className: i()(g.PV, {
                            [g.WV]: n,
                            [g.mq]: n
                        }),
                        children: (0, r.jsx)(a.yr3, {
                            size: "xs",
                            color: S ? a.LU0.colors.ICON_STRONG.css : a.LU0.colors.ICON_MUTED.css
                        })
                    }), (0, r.jsx)(a.Heading, {
                        variant: "heading-sm/medium",
                        className: i()(g.PV, {
                            [g.WV]: n,
                            [g.mq]: n
                        }),
                        color: S ? "text-strong" : "text-subtle",
                        lineClamp: 1,
                        children: e.config.messages.gamePublisher
                    }), x ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            "aria-hidden": "true",
                            className: i()(g.SC, {
                                [g.b2]: n
                            })
                        }), (0, r.jsx)(a.Heading, {
                            className: i()(g.xw, {
                                [g._L]: n
                            }),
                            variant: "heading-sm/medium",
                            lineClamp: n ? void 0 : 1,
                            color: S ? "text-strong" : "text-subtle",
                            children: C
                        })]
                    }) : null]
                })]
            })
        })
    })
}