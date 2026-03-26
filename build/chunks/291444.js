/** chunk id: 291444 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => M
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(554146),
    d = n(421380),
    c = n(397927),
    u = n(83257),
    m = n(826673),
    g = n(532197),
    x = n(203982),
    h = n(555337),
    _ = n(155008),
    p = n(418448),
    A = n(527678),
    f = n(923121),
    j = n(199940),
    N = n(107795),
    E = n(655943),
    b = n(287479),
    C = n(400812),
    T = n(72533),
    I = n(729984),
    v = n(193477),
    S = n(692453),
    y = n(307209),
    R = n(360827),
    O = n(307879),
    L = n(652215),
    G = n(985018),
    D = n(217515);

function M() {
    let e = (0, a.bG)([h.A], () => h.A.getGuildId());
    return null == e ? null : (0, i.jsx)(k, {
        guildId: e
    })
}

function k(e) {
    let t, {
            guildId: n
        } = e,
        l = (0, a.bG)([b.A], () => b.A.getCurrentPage()),
        h = (0, a.bG)([b.A], () => {
            let e = (0, C.ql)(l);
            return null != e && !b.A.isEducationUpsellDismissed(e)
        }),
        E = (0, T.A)(n),
        M = !E && h;
    switch (s.useEffect(() => {
            (0, m.Dr)(o.M.COMMUNITY_ONBOARDING_NEW_BADGE)
        }, []), l) {
        case C.Hy.LANDING:
            t = E ? (0, i.jsx)(y.A, {
                completed: !0,
                guildId: n
            }) : (0, i.jsx)(O.A, {});
            break;
        case C.Hy.SAFETY_CHECK:
            t = (0, i.jsx)(_.A, {});
            break;
        case C.Hy.DEFAULT_CHANNELS:
            t = (0, i.jsx)(I.A, {
                saveOnClose: !E
            });
            break;
        case C.Hy.CUSTOMIZATION_QUESTIONS:
            t = (0, i.jsx)(R.Ay, {
                saveOnClose: !E
            });
            break;
        case C.Hy.HOME_SETTINGS:
            t = (0, i.jsx)(v.A, {
                saveOnClose: !E
            });
            break;
        case C.Hy.CONNECTIONS:
            t = (0, i.jsx)(S.A, {
                saveOnClose: !E
            });
            break;
        case C.Hy.REVIEW:
            t = (0, i.jsx)(y.A, {
                completed: E,
                guildId: n
            })
    }
    return (0, i.jsxs)("div", {
        className: r()(D.Jp, {
            [D.Q3]: M
        }),
        children: [!E && l !== C.Hy.LANDING && (0, i.jsx)(U, {
            setOnboardingStep: A.e_,
            page: l,
            homeSettingsEnabled: !0
        }), E && l !== C.Hy.LANDING && (0, i.jsx)("div", {
            children: (0, i.jsxs)(d.$n, {
                innerClassName: D.Gv,
                look: d.$n.Looks.BLANK,
                size: d.$n.Sizes.MIN,
                onClick: () => {
                    if (b.A.hasChanges() && !b.A.canCloseEarly()) {
                        x._.dispatch(L.jej.SHAKE_APP, {
                            duration: 300,
                            intensity: u.n3
                        }), x._.dispatch(L.jej.EMPHASIZE_NOTICE);
                        return
                    }(0, N.P3)(), (0, p.nx)(), (0, j.sk)(), (0, f.p2)(), (0, A.e_)(C.Hy.LANDING)
                },
                children: [(0, i.jsx)(g.A, {
                    className: D.UE,
                    direction: g.A.Directions.LEFT
                }), (0, i.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    color: "interactive-text-default",
                    children: G.intl.string(G.t["13/7kX"])
                })]
            })
        }), (0, i.jsx)("div", {
            children: t
        })]
    })
}

function U(e) {
    let {
        page: t,
        setOnboardingStep: n,
        homeSettingsEnabled: s
    } = e, l = (0, a.bG)([b.A], () => b.A.hasErrors()), o = e => {
        if (!l) return () => n(e)
    }, d = (0, a.bG)([E.A], () => E.A.advancedMode);
    return (0, i.jsxs)("div", {
        className: D.L$,
        children: [(0, i.jsxs)(c.DUT, {
            className: r()(D.G9, D.zp),
            onClick: o(C.Hy.SAFETY_CHECK),
            children: [(0, i.jsx)("div", {
                className: r()(D.hr, {
                    [D.Ou]: t === C.Hy.SAFETY_CHECK
                })
            }), (0, i.jsx)(c.Text, {
                color: t === C.Hy.SAFETY_CHECK ? "text-brand" : "text-muted",
                variant: "text-xs/medium",
                children: G.intl.format(G.t.Me5Mma, {
                    stepNumber: 1
                })
            })]
        }), (0, i.jsxs)(c.DUT, {
            className: r()(D.G9, D.zp),
            onClick: o(C.Hy.DEFAULT_CHANNELS),
            children: [(0, i.jsx)("div", {
                className: r()(D.hr, {
                    [D.Ou]: t === C.Hy.DEFAULT_CHANNELS
                })
            }), (0, i.jsx)(c.Text, {
                color: t === C.Hy.DEFAULT_CHANNELS ? "text-brand" : "text-muted",
                variant: "text-xs/medium",
                children: d ? G.intl.formatToPlainString(G.t["8mGhOy"], {
                    stepNumber: 2
                }) : G.intl.formatToPlainString(G.t.vxpuTd, {
                    stepNumber: 2
                })
            })]
        }), (0, i.jsxs)(c.DUT, {
            className: r()(D.G9, D.zp),
            onClick: o(C.Hy.CUSTOMIZATION_QUESTIONS),
            children: [(0, i.jsx)("div", {
                className: r()(D.hr, {
                    [D.Ou]: t === C.Hy.CUSTOMIZATION_QUESTIONS
                })
            }), (0, i.jsx)(c.Text, {
                color: t === C.Hy.CUSTOMIZATION_QUESTIONS ? "text-brand" : "text-muted",
                variant: "text-xs/medium",
                children: d ? G.intl.formatToPlainString(G.t.vb6J5g, {
                    stepNumber: 3
                }) : G.intl.formatToPlainString(G.t.ZpdQqK, {
                    stepNumber: 3
                })
            })]
        }), s && (0, i.jsxs)(c.DUT, {
            className: r()(D.G9, D.zp),
            onClick: o(C.Hy.HOME_SETTINGS),
            children: [(0, i.jsx)("div", {
                className: r()(D.hr, {
                    [D.Ou]: t === C.Hy.HOME_SETTINGS
                })
            }), (0, i.jsx)(c.Text, {
                color: t === C.Hy.HOME_SETTINGS ? "text-brand" : "text-muted",
                variant: "text-xs/medium",
                children: G.intl.format(G.t.KVOukh, {
                    stepNumber: 4
                })
            })]
        }), (0, i.jsxs)("div", {
            className: D.G9,
            children: [(0, i.jsx)("div", {
                className: r()(D.hr, {
                    [D.Ou]: t === C.Hy.REVIEW
                })
            }), (0, i.jsx)(c.Text, {
                color: t === C.Hy.REVIEW ? "text-brand" : "text-muted",
                variant: "text-xs/medium",
                children: G.intl.format(G.t.oVzkiA, {
                    stepNumber: 3 + +!!s + 1
                })
            })]
        })]
    })
}