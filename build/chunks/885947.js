/** chunk id: 885947, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(435371),
    o = n(397927),
    u = n(713517),
    c = n(240248),
    d = n(341915),
    m = n(890687),
    p = n(590202),
    E = n(971649),
    f = n(717415),
    h = n(583235),
    v = n(985018),
    x = n(407481),
    g = n(221190);

function S() {
    let {
        quest: e,
        sourceQuestContent: t,
        isPortrait: n,
        onClose: i
    } = l.useContext(f.VideoQuestModalContext), S = (0, E.go)(), A = (0, m.LS)(e), C = l.useRef(null), {
        isHoveringOrFocusing: _
    } = (0, u.A)(C), b = (0, h.H)({
        quest: e,
        onClose: i,
        sourceQuestContent: t,
        impressionId: S
    }), T = e.config.ctaConfig.subtitle, y = void 0 !== T && !(0, c.uJ)(T);
    return (0, r.jsx)(s.m_, {
        text: v.intl.string(v.t.EuHF34),
        children: (0, r.jsx)(o.DUT, {
            onClick: () => b(d.uF.VIDEO_MODAL, p.Cy.OPEN_GAME_LINK),
            className: x._S,
            children: (0, r.jsxs)("div", {
                className: a()(g.hA, x.t8, {
                    [x.Mc]: A
                }),
                ref: C,
                children: [(0, r.jsx)("div", {
                    className: x.sB,
                    children: (0, r.jsx)(o.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        className: a()(x.xw, {
                            [x._L]: n
                        }),
                        lineClamp: n ? void 0 : 1,
                        children: v.intl.format(v.t.EQa7os, {
                            questName: e.config.messages.questName
                        })
                    })
                }), (0, r.jsxs)("div", {
                    className: a()(x.sB, {
                        [x.fi]: n
                    }),
                    children: [(0, r.jsx)("div", {
                        className: a()(x.PV, {
                            [x.WV]: n,
                            [x.mq]: n
                        }),
                        children: (0, r.jsx)(o.yr3, {
                            size: "xs",
                            color: _ ? o.LU0.colors.ICON_STRONG.css : o.LU0.colors.ICON_MUTED.css
                        })
                    }), (0, r.jsx)(o.Heading, {
                        variant: "heading-sm/medium",
                        className: a()(x.PV, {
                            [x.WV]: n,
                            [x.mq]: n
                        }),
                        color: _ ? "text-strong" : "text-subtle",
                        lineClamp: 1,
                        children: e.config.messages.gamePublisher
                    }), y ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            "aria-hidden": "true",
                            className: a()(x.SC, {
                                [x.b2]: n
                            })
                        }), (0, r.jsx)(o.Heading, {
                            className: a()(x.xw, {
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