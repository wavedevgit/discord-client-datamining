/** chunk id: 291444, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => G
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(554146),
    c = n(421380),
    d = n(397927),
    u = n(83257),
    g = n(826673),
    m = n(532197),
    p = n(203982),
    f = n(555337),
    h = n(155008),
    b = n(418448),
    x = n(527678),
    j = n(923121),
    _ = n(199940),
    O = n(107795),
    v = n(655943),
    y = n(287479),
    A = n(400812),
    E = n(72533),
    N = n(729984),
    S = n(193477),
    I = n(692453),
    T = n(307209),
    C = n(360827),
    P = n(307879),
    w = n(652215),
    R = n(985018),
    D = n(361870);

function G() {
    let e = (0, a.bG)([f.A], () => f.A.getGuildId());
    return null == e ? null : (0, r.jsx)(L, {
        guildId: e
    })
}

function L(e) {
    let t, {
            guildId: n
        } = e,
        l = (0, a.bG)([y.A], () => y.A.getCurrentPage()),
        f = (0, a.bG)([y.A], () => {
            let e = (0, A.ql)(l);
            return null != e && !y.A.isEducationUpsellDismissed(e)
        }),
        v = (0, E.A)(n),
        G = !v && f;
    switch (i.useEffect(() => {
            (0, g.Dr)(o.M.COMMUNITY_ONBOARDING_NEW_BADGE)
        }, []), l) {
        case A.Hy.LANDING:
            t = v ? (0, r.jsx)(T.A, {
                completed: !0,
                guildId: n
            }) : (0, r.jsx)(P.A, {});
            break;
        case A.Hy.SAFETY_CHECK:
            t = (0, r.jsx)(h.A, {});
            break;
        case A.Hy.DEFAULT_CHANNELS:
            t = (0, r.jsx)(N.A, {
                saveOnClose: !v
            });
            break;
        case A.Hy.CUSTOMIZATION_QUESTIONS:
            t = (0, r.jsx)(C.Ay, {
                saveOnClose: !v
            });
            break;
        case A.Hy.HOME_SETTINGS:
            t = (0, r.jsx)(S.A, {
                saveOnClose: !v
            });
            break;
        case A.Hy.CONNECTIONS:
            t = (0, r.jsx)(I.A, {
                saveOnClose: !v
            });
            break;
        case A.Hy.REVIEW:
            t = (0, r.jsx)(T.A, {
                completed: v,
                guildId: n
            })
    }
    return (0, r.jsxs)("div", {
        className: s()(D.Jp, {
            [D.Q3]: G
        }),
        children: [!v && l !== A.Hy.LANDING && (0, r.jsx)(k, {
            setOnboardingStep: x.e_,
            page: l,
            homeSettingsEnabled: !0
        }), v && l !== A.Hy.LANDING && (0, r.jsx)("div", {
            children: (0, r.jsxs)(c.$n, {
                innerClassName: D.Gv,
                look: c.$n.Looks.BLANK,
                size: c.$n.Sizes.MIN,
                onClick: () => {
                    if (y.A.hasChanges() && !y.A.canCloseEarly()) {
                        p._.dispatch(w.jej.SHAKE_APP, {
                            duration: 300,
                            intensity: u.n3
                        }), p._.dispatch(w.jej.EMPHASIZE_NOTICE);
                        return
                    }(0, O.P3)(), (0, b.nx)(), (0, _.sk)(), (0, j.p2)(), (0, x.e_)(A.Hy.LANDING)
                },
                children: [(0, r.jsx)(m.A, {
                    className: D.UE,
                    direction: m.A.Directions.LEFT
                }), (0, r.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    color: "interactive-text-default",
                    children: R.intl.string(R.t["13/7kX"])
                })]
            })
        }), (0, r.jsx)("div", {
            children: t
        })]
    })
}

function k(e) {
    let {
        page: t,
        setOnboardingStep: n,
        homeSettingsEnabled: i
    } = e, l = (0, a.bG)([y.A], () => y.A.hasErrors()), o = e => {
        if (!l) return () => n(e)
    }, c = (0, a.bG)([v.A], () => v.A.advancedMode);
    return (0, r.jsxs)("div", {
        className: D.L$,
        children: [(0, r.jsxs)(d.DUT, {
            className: s()(D.G9, D.zp),
            onClick: o(A.Hy.SAFETY_CHECK),
            children: [(0, r.jsx)("div", {
                className: s()(D.hr, {
                    [D.Ou]: t === A.Hy.SAFETY_CHECK
                })
            }), (0, r.jsx)(d.Text, {
                color: t === A.Hy.SAFETY_CHECK ? "text-brand" : "text-muted",
                variant: "text-xs/medium",
                children: R.intl.format(R.t.Me5Mma, {
                    stepNumber: 1
                })
            })]
        }), (0, r.jsxs)(d.DUT, {
            className: s()(D.G9, D.zp),
            onClick: o(A.Hy.DEFAULT_CHANNELS),
            children: [(0, r.jsx)("div", {
                className: s()(D.hr, {
                    [D.Ou]: t === A.Hy.DEFAULT_CHANNELS
                })
            }), (0, r.jsx)(d.Text, {
                color: t === A.Hy.DEFAULT_CHANNELS ? "text-brand" : "text-muted",
                variant: "text-xs/medium",
                children: c ? R.intl.formatToPlainString(R.t["8mGhOy"], {
                    stepNumber: 2
                }) : R.intl.formatToPlainString(R.t.vxpuTd, {
                    stepNumber: 2
                })
            })]
        }), (0, r.jsxs)(d.DUT, {
            className: s()(D.G9, D.zp),
            onClick: o(A.Hy.CUSTOMIZATION_QUESTIONS),
            children: [(0, r.jsx)("div", {
                className: s()(D.hr, {
                    [D.Ou]: t === A.Hy.CUSTOMIZATION_QUESTIONS
                })
            }), (0, r.jsx)(d.Text, {
                color: t === A.Hy.CUSTOMIZATION_QUESTIONS ? "text-brand" : "text-muted",
                variant: "text-xs/medium",
                children: c ? R.intl.formatToPlainString(R.t.vb6J5g, {
                    stepNumber: 3
                }) : R.intl.formatToPlainString(R.t.ZpdQqK, {
                    stepNumber: 3
                })
            })]
        }), i && (0, r.jsxs)(d.DUT, {
            className: s()(D.G9, D.zp),
            onClick: o(A.Hy.HOME_SETTINGS),
            children: [(0, r.jsx)("div", {
                className: s()(D.hr, {
                    [D.Ou]: t === A.Hy.HOME_SETTINGS
                })
            }), (0, r.jsx)(d.Text, {
                color: t === A.Hy.HOME_SETTINGS ? "text-brand" : "text-muted",
                variant: "text-xs/medium",
                children: R.intl.format(R.t.KVOukh, {
                    stepNumber: 4
                })
            })]
        }), (0, r.jsxs)("div", {
            className: D.G9,
            children: [(0, r.jsx)("div", {
                className: s()(D.hr, {
                    [D.Ou]: t === A.Hy.REVIEW
                })
            }), (0, r.jsx)(d.Text, {
                color: t === A.Hy.REVIEW ? "text-brand" : "text-muted",
                variant: "text-xs/medium",
                children: R.intl.format(R.t.oVzkiA, {
                    stepNumber: 3 + +!!i + 1
                })
            })]
        })]
    })
}