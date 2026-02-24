/** chunk id: 885947, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
});
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(435371),
    o = n(397927),
    u = n(713517),
    c = n(240248),
    d = n(341915),
    m = n(890687),
    p = n(590202),
    E = n(971649),
    f = n(717415),
    v = n(583235),
    h = n(985018),
    x = n(407481),
    g = n(221190);

function S() {
    let {
        quest: e,
        sourceQuestContent: t,
        isPortrait: n,
        onClose: s
    } = i.useContext(f.VideoQuestModalContext), S = (0, E.go)(), C = (0, m.LS)(e), A = i.useRef(null), {
        isHoveringOrFocusing: _
    } = (0, u.A)(A), b = (0, v.H)({
        quest: e,
        onClose: s,
        sourceQuestContent: t,
        impressionId: S
    }), T = e.config.ctaConfig.subtitle, y = void 0 !== T && !(0, c.uJ)(T);
    return (0, r.jsx)(a.m_, {
        text: h.intl.string(h.t.EuHF34),
        children: (0, r.jsx)(o.DUT, {
            onClick: () => b(d.uF.VIDEO_MODAL, p.Cy.OPEN_GAME_LINK),
            className: x._S,
            children: (0, r.jsxs)("div", {
                className: l()(g.hA, x.t8, {
                    [x.Mc]: C
                }),
                ref: A,
                children: [(0, r.jsx)("div", {
                    className: x.sB,
                    children: (0, r.jsx)(o.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        className: l()(x.xw, {
                            [x._L]: n
                        }),
                        lineClamp: n ? void 0 : 1,
                        children: h.intl.format(h.t.EQa7os, {
                            questName: e.config.messages.questName
                        })
                    })
                }), (0, r.jsxs)("div", {
                    className: l()(x.sB, {
                        [x.fi]: n
                    }),
                    children: [(0, r.jsx)("div", {
                        className: l()(x.PV, {
                            [x.WV]: n,
                            [x.mq]: n
                        }),
                        children: (0, r.jsx)(o.yr3, {
                            size: "xs",
                            color: _ ? o.LU0.colors.ICON_STRONG.css : o.LU0.colors.ICON_MUTED.css
                        })
                    }), (0, r.jsx)(o.Heading, {
                        variant: "heading-sm/medium",
                        className: l()(x.PV, {
                            [x.WV]: n,
                            [x.mq]: n
                        }),
                        color: _ ? "text-strong" : "text-subtle",
                        lineClamp: 1,
                        children: e.config.messages.gamePublisher
                    }), y ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            "aria-hidden": "true",
                            className: l()(x.SC, {
                                [x.b2]: n
                            })
                        }), (0, r.jsx)(o.Heading, {
                            className: l()(x.xw, {
                                [x._L]: n
                            }),
                            variant: "heading-sm/medium",
                            lineClamp: n ? void 0 : 1,
                            color: _ ? "text-strong" : "text-subtle",
                            children: T
                        })]
                    }) : null]
                })]
            })
        })
    })
}