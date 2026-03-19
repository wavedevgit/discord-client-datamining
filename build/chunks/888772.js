/** chunk id: 888772 params = (module,exports,require) **/
n.d(t, {
    A: () => U
}), n(801541);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(889137),
    o = n(837381),
    d = n(397927),
    c = n(260762),
    u = n(485947),
    _ = n(294433),
    m = n(426190),
    g = n(438732),
    A = n(834981),
    x = n(469696),
    h = n(796497),
    p = n(148131),
    T = n(845197),
    E = n(442671),
    S = n(191627),
    f = n(327337),
    C = n(870236),
    b = n(985018),
    N = n(609132),
    I = n(664432),
    v = n(522759),
    j = n(525351);

function y(e) {
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

function R() {
    return (0, i.jsxs)("div", {
        className: a()(I.aP, N.a, I.dO, I.p2),
        children: [(0, i.jsxs)("div", {
            className: I.Np,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)(d.Heading, {
                    className: v.QB,
                    variant: "heading-xl/medium",
                    children: (0, i.jsx)(d.Fmo, {
                        children: b.intl.string(C.default.pHEnV5)
                    })
                }), (0, i.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: v.SX,
                    children: b.intl.string(C.default["1J/gZ4"])
                })]
            }), (0, i.jsx)("img", {
                className: I._u,
                src: j,
                alt: b.intl.string(C.default["r+PDmu"])
            })]
        }), (0, i.jsxs)("div", {
            className: I.Ci,
            children: [(0, i.jsx)(y, {
                header: b.intl.string(C.default["7xxAni"]),
                description: b.intl.string(C.default["1M9So2"]),
                stepNumber: 1
            }), (0, i.jsx)(y, {
                header: b.intl.string(C.default["AXgx+a"]),
                description: b.intl.string(C.default.GzMFnb),
                stepNumber: 2
            }), (0, i.jsx)(y, {
                header: b.intl.string(C.default.MZn1tG),
                description: b.intl.string(C.default["8rLBxD"]),
                stepNumber: 3
            })]
        })]
    })
}

function O() {
    let e = (0, A.xr)();
    return (0, i.jsxs)("div", {
        className: a()(I.aP, N.a, I.dO),
        children: [(0, i.jsxs)("div", {
            children: [(0, i.jsx)(d.Heading, {
                className: v.QB,
                variant: "heading-xl/medium",
                children: (0, i.jsx)(d.Fmo, {
                    children: b.intl.string(C.default.zUCWEL)
                })
            }), (0, i.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: v.SX,
                children: b.intl.format(C.default.yMnoDl, {
                    link: "https://support.discord.com/hc/articles/14155060633623"
                })
            }), e ? null : (0, i.jsx)(h.A, {})]
        }), (0, i.jsx)("img", {
            className: I._u,
            src: j,
            alt: b.intl.string(C.default["r+PDmu"])
        })]
    })
}

function L(e) {
    let {
        sectionType: t,
        sectionTitle: n,
        requests: l
    } = e, a = s.useRef(null), r = `${t}-list`, _ = (0, c.A)(r), m = s.useCallback(e => {
        let {
            row: n,
            listIndex: s
        } = e, a = l[n], r = s === l.length;
        return null == a ? null : (0, i.jsx)(E.A, {
            userId: a.id,
            isLast: r,
            children: () => t === S.Ef.ACTIVE ? (0, i.jsx)(p.w, {
                user: a
            }) : (0, i.jsx)(T.M, {
                user: a
            })
        }, a.id)
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
                            a.current = e, t.current = e?.getScrollerNode() ?? null
                        },
                        sectionHeight: S.h4,
                        rowHeight: S.Gg,
                        renderSection: g,
                        renderRow: m,
                        sections: [l.length],
                        chunkSize: 30,
                        fade: !0,
                        ...o
                    }, r)
                }
            })
        })
    })
}
let D = () => {
        let e = (0, g.A)(),
            t = (0, A.GR)(),
            n = e ? S.Y7 : S.kp,
            s = {
                count: t.length,
                max: n
            },
            l = (0, _.y)(b.intl.formatToPlainString(C.default["+tnO34"], s), b.intl.formatToPlainString(C.default["pu6/U0"], s));
        return t.length > 0 ? (0, i.jsx)(L, {
            sectionType: S.Ef.ACTIVE,
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
                children: (0, i.jsx)(x.A, {
                    text: b.intl.string(C.default.C4ScLD)
                })
            })]
        })
    },
    P = () => {
        let e = (0, A.xr)(),
            t = (0, g.A)() ? S.Y7 : S.kp,
            n = (0, _.y)(b.intl.formatToPlainString(C.default["1/PzIj"], {
                maxConnections: t
            }), b.intl.formatToPlainString(C.default.RcTgiE, {
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
            n = (0, r.YW)({
                helpline: e,
                throughline: t
            }).with({
                helpline: !0
            }, () => b.intl.format(C.default["KOwsf/"], {
                helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
            })).with({
                throughline: !0
            }, () => b.intl.format(C.default["6tsC8u"], {
                helpLink: f.CL
            })).otherwise(() => null);
        return null == n ? null : (0, i.jsxs)("div", {
            className: v.QX,
            children: [(0, i.jsx)(d.Heading, {
                className: I.rH,
                variant: "heading-sm/semibold",
                children: (0, i.jsx)(d.Fmo, {
                    children: b.intl.string(C.default["7/tVhv"])
                })
            }), (0, i.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: n
            })]
        })
    },
    G = () => {
        let e = (0, A.xk)(S.Ef.PENDING),
            t = (0, _.y)(b.intl.formatToPlainString(C.default.IkAgkG, {
                count: e.length
            }), b.intl.formatToPlainString(C.default.Q8XnAa, {
                count: e.length
            }));
        return 0 === e.length ? null : (0, i.jsx)(L, {
            sectionType: S.Ef.PENDING,
            sectionTitle: t,
            requests: e
        })
    },
    U = () => {
        let e = (0, g.A)();
        return (0, i.jsxs)("div", {
            className: I.kL,
            children: [e ? (0, i.jsx)(R, {}) : (0, i.jsx)(O, {}), (0, i.jsx)(D, {}), (0, i.jsx)(G, {}), (0, i.jsx)(P, {}), (0, i.jsx)(M, {})]
        })
    }