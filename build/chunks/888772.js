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
    g = n(426190),
    m = n(438732),
    A = n(834981),
    h = n(469696),
    p = n(796497),
    x = n(148131),
    E = n(845197),
    T = n(442671),
    S = n(191627),
    C = n(327337),
    f = n(870236),
    I = n(985018),
    b = n(609132),
    N = n(664432),
    v = n(522759),
    j = n(525351);

function O(e) {
    let {
        header: t,
        description: n,
        stepNumber: s
    } = e;
    return (0, i.jsxs)("div", {
        className: N.PM,
        children: [(0, i.jsx)("div", {
            className: N.CD,
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
        className: a()(N.aP, b.a, N.dO, N.p2),
        children: [(0, i.jsxs)("div", {
            className: N.Np,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)(d.Heading, {
                    className: v.QB,
                    variant: "heading-xl/medium",
                    children: (0, i.jsx)(d.Fmo, {
                        children: I.intl.string(f.default.pHEnV5)
                    })
                }), (0, i.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: v.SX,
                    children: I.intl.string(f.default["1J/gZ4"])
                })]
            }), (0, i.jsx)("img", {
                className: N._u,
                src: j,
                alt: I.intl.string(f.default["r+PDmu"])
            })]
        }), (0, i.jsxs)("div", {
            className: N.Ci,
            children: [(0, i.jsx)(O, {
                header: I.intl.string(f.default["7xxAni"]),
                description: I.intl.string(f.default["1M9So2"]),
                stepNumber: 1
            }), (0, i.jsx)(O, {
                header: I.intl.string(f.default["AXgx+a"]),
                description: I.intl.string(f.default.GzMFnb),
                stepNumber: 2
            }), (0, i.jsx)(O, {
                header: I.intl.string(f.default.MZn1tG),
                description: I.intl.string(f.default["8rLBxD"]),
                stepNumber: 3
            })]
        })]
    })
}

function y() {
    let e = (0, A.xr)();
    return (0, i.jsxs)("div", {
        className: a()(N.aP, b.a, N.dO),
        children: [(0, i.jsxs)("div", {
            children: [(0, i.jsx)(d.Heading, {
                className: v.QB,
                variant: "heading-xl/medium",
                children: (0, i.jsx)(d.Fmo, {
                    children: I.intl.string(f.default.zUCWEL)
                })
            }), (0, i.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: v.SX,
                children: I.intl.format(f.default.yMnoDl, {
                    link: "https://support.discord.com/hc/articles/14155060633623"
                })
            }), e ? null : (0, i.jsx)(p.A, {})]
        }), (0, i.jsx)("img", {
            className: N._u,
            src: j,
            alt: I.intl.string(f.default["r+PDmu"])
        })]
    })
}

function P(e) {
    let {
        sectionType: t,
        sectionTitle: n,
        requests: l
    } = e, a = s.useRef(null), r = `${t}-list`, _ = (0, c.A)(r), g = s.useCallback(e => {
        let {
            row: n,
            listIndex: s
        } = e, a = l[n], r = s === l.length;
        return null == a ? null : (0, i.jsx)(T.A, {
            userId: a.id,
            isLast: r,
            children: () => t === S.Ef.ACTIVE ? (0, i.jsx)(x.w, {
                user: a
            }) : (0, i.jsx)(E.M, {
                user: a
            })
        }, a.id)
    }, [l, t]), m = s.useCallback(() => (0, i.jsx)(u.A, {
        children: (0, i.jsx)(d.Text, {
            className: v.QB,
            variant: "eyebrow",
            color: "text-default",
            children: n
        })
    }, "title"), [n]);
    return (0, i.jsx)("div", {
        className: N.uW,
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
                        renderSection: m,
                        renderRow: g,
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
let L = () => {
        let e = (0, m.A)(),
            t = (0, A.GR)(),
            n = e ? S.Y7 : S.kp,
            s = {
                count: t.length,
                max: n
            },
            l = (0, _.y)(I.intl.formatToPlainString(f.default["+tnO34"], s), I.intl.formatToPlainString(f.default["pu6/U0"], s));
        return t.length > 0 ? (0, i.jsx)(P, {
            sectionType: S.Ef.ACTIVE,
            sectionTitle: l,
            requests: t
        }) : (0, i.jsxs)("div", {
            className: N.uW,
            children: [(0, i.jsx)(d.Text, {
                className: v.QB,
                variant: "eyebrow",
                color: "text-default",
                children: l
            }), (0, i.jsx)("div", {
                className: N.aP,
                children: (0, i.jsx)(h.A, {
                    text: I.intl.string(f.default.C4ScLD)
                })
            })]
        })
    },
    D = () => {
        let e = (0, A.xr)(),
            t = (0, m.A)() ? S.Y7 : S.kp,
            n = (0, _.y)(I.intl.formatToPlainString(f.default["1/PzIj"], {
                maxConnections: t
            }), I.intl.formatToPlainString(f.default.RcTgiE, {
                maxConnections: t
            }));
        return e ? (0, i.jsx)("div", {
            className: N.rv,
            children: (0, i.jsx)(d.Text, {
                variant: "text-xxs/medium",
                color: "text-muted",
                children: n
            })
        }) : null
    },
    G = () => {
        let e = (0, g.N)(),
            t = (0, g.z)(),
            n = (0, r.YW)({
                helpline: e,
                throughline: t
            }).with({
                helpline: !0
            }, () => I.intl.format(f.default["KOwsf/"], {
                helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
            })).with({
                throughline: !0
            }, () => I.intl.format(f.default["6tsC8u"], {
                helpLink: C.CL
            })).otherwise(() => null);
        return null == n ? null : (0, i.jsxs)("div", {
            className: v.QX,
            children: [(0, i.jsx)(d.Heading, {
                className: N.rH,
                variant: "heading-sm/semibold",
                children: (0, i.jsx)(d.Fmo, {
                    children: I.intl.string(f.default["7/tVhv"])
                })
            }), (0, i.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: n
            })]
        })
    },
    M = () => {
        let e = (0, A.xk)(S.Ef.PENDING),
            t = (0, _.y)(I.intl.formatToPlainString(f.default.IkAgkG, {
                count: e.length
            }), I.intl.formatToPlainString(f.default.Q8XnAa, {
                count: e.length
            }));
        return 0 === e.length ? null : (0, i.jsx)(P, {
            sectionType: S.Ef.PENDING,
            sectionTitle: t,
            requests: e
        })
    },
    U = () => {
        let e = (0, m.A)();
        return (0, i.jsxs)("div", {
            className: N.kL,
            children: [e ? (0, i.jsx)(R, {}) : (0, i.jsx)(y, {}), (0, i.jsx)(L, {}), (0, i.jsx)(M, {}), (0, i.jsx)(D, {}), (0, i.jsx)(G, {})]
        })
    }