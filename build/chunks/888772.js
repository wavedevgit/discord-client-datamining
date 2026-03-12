/** chunk id: 888772 params = (module,exports,require) **/
n.d(t, {
    A: () => U
}), n(801541);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(889137),
    o = n(837381),
    d = n(397927),
    c = n(260762),
    u = n(485947),
    _ = n(294433),
    m = n(426190),
    g = n(438732),
    A = n(834981),
    h = n(469696),
    x = n(796497),
    p = n(148131),
    T = n(845197),
    E = n(442671),
    C = n(191627),
    S = n(327337),
    f = n(870236),
    N = n(985018),
    b = n(609132),
    I = n(664432),
    v = n(522759),
    j = n(525351);

function O(e) {
    let {
        header: t,
        description: n,
        stepNumber: s
    } = e;
    return (0, i.jsxs)("div", {
        className: I.PM,
        children: [(0, i.jsx)("div", {
            className: I.CD,
            children: (0, i.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                color: "text-brand",
                children: (0, i.jsx)(d.Fmo, {
                    children: s
                })
            })
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(d.Heading, {
                variant: "heading-sm/bold",
                children: (0, i.jsx)(d.Fmo, {
                    children: t
                })
            }), (0, i.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: n
            })]
        })]
    })
}

function y() {
    return (0, i.jsxs)("div", {
        className: r()(I.aP, b.a, I.dO, I.p2),
        children: [(0, i.jsxs)("div", {
            className: I.Np,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)(d.Heading, {
                    className: v.QB,
                    variant: "heading-xl/medium",
                    children: (0, i.jsx)(d.Fmo, {
                        children: N.intl.string(f.default.pHEnV5)
                    })
                }), (0, i.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: v.SX,
                    children: N.intl.string(f.default["1J/gZ4"])
                })]
            }), (0, i.jsx)("img", {
                className: I._u,
                src: j,
                alt: N.intl.string(f.default["r+PDmu"])
            })]
        }), (0, i.jsxs)("div", {
            className: I.Ci,
            children: [(0, i.jsx)(O, {
                header: N.intl.string(f.default["7xxAni"]),
                description: N.intl.string(f.default["1M9So2"]),
                stepNumber: 1
            }), (0, i.jsx)(O, {
                header: N.intl.string(f.default["AXgx+a"]),
                description: N.intl.string(f.default.GzMFnb),
                stepNumber: 2
            }), (0, i.jsx)(O, {
                header: N.intl.string(f.default.MZn1tG),
                description: N.intl.string(f.default["8rLBxD"]),
                stepNumber: 3
            })]
        })]
    })
}

function R() {
    let e = (0, A.xr)();
    return (0, i.jsxs)("div", {
        className: r()(I.aP, b.a, I.dO),
        children: [(0, i.jsxs)("div", {
            children: [(0, i.jsx)(d.Heading, {
                className: v.QB,
                variant: "heading-xl/medium",
                children: (0, i.jsx)(d.Fmo, {
                    children: N.intl.string(f.default.zUCWEL)
                })
            }), (0, i.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: v.SX,
                children: N.intl.format(f.default.yMnoDl, {
                    link: "https://support.discord.com/hc/articles/14155060633623"
                })
            }), e ? null : (0, i.jsx)(x.A, {})]
        }), (0, i.jsx)("img", {
            className: I._u,
            src: j,
            alt: N.intl.string(f.default["r+PDmu"])
        })]
    })
}

function P(e) {
    let {
        sectionType: t,
        sectionTitle: n,
        requests: l
    } = e, r = s.useRef(null), a = `${t}-list`, _ = (0, c.A)(a), m = s.useCallback(e => {
        let {
            row: n,
            listIndex: s
        } = e, r = l[n], a = s === l.length;
        return null == r ? null : (0, i.jsx)(E.A, {
            userId: r.id,
            isLast: a,
            children: () => t === C.Ef.ACTIVE ? (0, i.jsx)(p.w, {
                user: r
            }) : (0, i.jsx)(T.M, {
                user: r
            })
        }, r.id)
    }, [l, t]), g = s.useCallback(() => (0, i.jsx)(u.A, {
        children: (0, i.jsx)(d.Text, {
            className: v.QB,
            variant: "eyebrow",
            color: "text-default",
            children: n
        })
    }, "title"), [n]);
    return (0, i.jsx)("div", {
        className: I.uW,
        children: (0, i.jsx)(o.hD, {
            navigator: _,
            children: (0, i.jsx)(o.PR, {
                children: e => {
                    let {
                        ref: t,
                        role: s,
                        ...o
                    } = e;
                    return (0, i.jsx)(d.B8B, {
                        innerRole: s,
                        innerAriaLabel: n,
                        ref: e => {
                            r.current = e, t.current = e?.getScrollerNode() ?? null
                        },
                        sectionHeight: C.h4,
                        rowHeight: C.Gg,
                        renderSection: g,
                        renderRow: m,
                        sections: [l.length],
                        chunkSize: 30,
                        fade: !0,
                        ...o
                    }, a)
                }
            })
        })
    })
}
let D = () => {
        let e = (0, g.A)(),
            t = (0, A.GR)(),
            n = e ? C.Y7 : C.kp,
            s = {
                count: t.length,
                max: n
            },
            l = (0, _.y)(N.intl.formatToPlainString(f.default["+tnO34"], s), N.intl.formatToPlainString(f.default["pu6/U0"], s));
        return t.length > 0 ? (0, i.jsx)(P, {
            sectionType: C.Ef.ACTIVE,
            sectionTitle: l,
            requests: t
        }) : (0, i.jsxs)("div", {
            className: I.uW,
            children: [(0, i.jsx)(d.Text, {
                className: v.QB,
                variant: "eyebrow",
                color: "text-default",
                children: l
            }), (0, i.jsx)("div", {
                className: I.aP,
                children: (0, i.jsx)(h.A, {
                    text: N.intl.string(f.default.C4ScLD)
                })
            })]
        })
    },
    L = () => {
        let e = (0, A.xr)(),
            t = (0, g.A)() ? C.Y7 : C.kp,
            n = (0, _.y)(N.intl.formatToPlainString(f.default["1/PzIj"], {
                maxConnections: t
            }), N.intl.formatToPlainString(f.default.RcTgiE, {
                maxConnections: t
            }));
        return e ? (0, i.jsx)("div", {
            className: I.rv,
            children: (0, i.jsx)(d.Text, {
                variant: "text-xxs/medium",
                color: "text-muted",
                children: n
            })
        }) : null
    },
    M = () => {
        let e = (0, m.N)(),
            t = (0, m.z)(),
            n = (0, a.YW)({
                helpline: e,
                throughline: t
            }).with({
                helpline: !0
            }, () => N.intl.format(f.default["KOwsf/"], {
                helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
            })).with({
                throughline: !0
            }, () => N.intl.format(f.default["6tsC8u"], {
                helpLink: S.CL
            })).otherwise(() => null);
        return null == n ? null : (0, i.jsxs)("div", {
            className: v.QX,
            children: [(0, i.jsx)(d.Heading, {
                className: I.rH,
                variant: "heading-sm/semibold",
                children: (0, i.jsx)(d.Fmo, {
                    children: N.intl.string(f.default["7/tVhv"])
                })
            }), (0, i.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: n
            })]
        })
    },
    G = () => {
        let e = (0, A.xk)(C.Ef.PENDING),
            t = (0, _.y)(N.intl.formatToPlainString(f.default.IkAgkG, {
                count: e.length
            }), N.intl.formatToPlainString(f.default.Q8XnAa, {
                count: e.length
            }));
        return 0 === e.length ? null : (0, i.jsx)(P, {
            sectionType: C.Ef.PENDING,
            sectionTitle: t,
            requests: e
        })
    },
    U = () => {
        let e = (0, g.A)();
        return (0, i.jsxs)("div", {
            className: I.kL,
            children: [e ? (0, i.jsx)(y, {}) : (0, i.jsx)(R, {}), (0, i.jsx)(D, {}), (0, i.jsx)(G, {}), (0, i.jsx)(L, {}), (0, i.jsx)(M, {})]
        })
    }