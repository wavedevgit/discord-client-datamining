/** chunk id: 888772, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => U
}), n(801541);
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(889137),
    o = n(837381),
    c = n(397927),
    d = n(260762),
    u = n(485947),
    _ = n(294433),
    m = n(426190),
    A = n(438732),
    g = n(834981),
    h = n(469696),
    x = n(796497),
    p = n(148131),
    E = n(845197),
    C = n(442671),
    T = n(191627),
    S = n(327337),
    I = n(870236),
    f = n(985018),
    N = n(609132),
    b = n(664432),
    j = n(522759),
    v = n(525351);

function O(e) {
    let {
        header: t,
        description: n,
        stepNumber: s
    } = e;
    return (0, i.jsxs)("div", {
        className: b.PM,
        children: [(0, i.jsx)("div", {
            className: b.CD,
            children: (0, i.jsx)(c.Heading, {
                variant: "heading-md/semibold",
                color: "text-brand",
                children: (0, i.jsx)(c.Fmo, {
                    children: s
                })
            })
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(c.Heading, {
                variant: "heading-sm/bold",
                children: (0, i.jsx)(c.Fmo, {
                    children: t
                })
            }), (0, i.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: n
            })]
        })]
    })
}

function R() {
    return (0, i.jsxs)("div", {
        className: l()(b.aP, N.a, b.dO, b.p2),
        children: [(0, i.jsxs)("div", {
            className: b.Np,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)(c.Heading, {
                    className: j.QB,
                    variant: "heading-xl/medium",
                    children: (0, i.jsx)(c.Fmo, {
                        children: f.intl.string(I.default.pHEnV5)
                    })
                }), (0, i.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: j.SX,
                    children: f.intl.string(I.default["1J/gZ4"])
                })]
            }), (0, i.jsx)("img", {
                className: b._u,
                src: v,
                alt: f.intl.string(I.default["r+PDmu"])
            })]
        }), (0, i.jsxs)("div", {
            className: b.Ci,
            children: [(0, i.jsx)(O, {
                header: f.intl.string(I.default["7xxAni"]),
                description: f.intl.string(I.default["1M9So2"]),
                stepNumber: 1
            }), (0, i.jsx)(O, {
                header: f.intl.string(I.default["AXgx+a"]),
                description: f.intl.string(I.default.GzMFnb),
                stepNumber: 2
            }), (0, i.jsx)(O, {
                header: f.intl.string(I.default.MZn1tG),
                description: f.intl.string(I.default["8rLBxD"]),
                stepNumber: 3
            })]
        })]
    })
}

function y() {
    let e = (0, g.xr)();
    return (0, i.jsxs)("div", {
        className: l()(b.aP, N.a, b.dO),
        children: [(0, i.jsxs)("div", {
            children: [(0, i.jsx)(c.Heading, {
                className: j.QB,
                variant: "heading-xl/medium",
                children: (0, i.jsx)(c.Fmo, {
                    children: f.intl.string(I.default.zUCWEL)
                })
            }), (0, i.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: j.SX,
                children: f.intl.format(I.default.yMnoDl, {
                    link: "https://support.discord.com/hc/articles/14155060633623"
                })
            }), e ? null : (0, i.jsx)(x.A, {})]
        }), (0, i.jsx)("img", {
            className: b._u,
            src: v,
            alt: f.intl.string(I.default["r+PDmu"])
        })]
    })
}

function P(e) {
    let {
        sectionType: t,
        sectionTitle: n,
        requests: a
    } = e, l = s.useRef(null), r = `${t}-list`, _ = (0, d.A)(r), m = s.useCallback(e => {
        let {
            row: n,
            listIndex: s
        } = e, l = a[n], r = s === a.length;
        return null == l ? null : (0, i.jsx)(C.A, {
            userId: l.id,
            isLast: r,
            children: () => t === T.Ef.ACTIVE ? (0, i.jsx)(p.w, {
                user: l
            }) : (0, i.jsx)(E.M, {
                user: l
            })
        }, l.id)
    }, [a, t]), A = s.useCallback(() => (0, i.jsx)(u.A, {
        children: (0, i.jsx)(c.Text, {
            className: j.QB,
            variant: "eyebrow",
            color: "text-default",
            children: n
        })
    }, "title"), [n]);
    return (0, i.jsx)("div", {
        className: b.uW,
        children: (0, i.jsx)(o.hD, {
            navigator: _,
            children: (0, i.jsx)(o.PR, {
                children: e => {
                    let {
                        ref: t,
                        role: s,
                        ...o
                    } = e;
                    return (0, i.jsx)(c.B8B, {
                        innerRole: s,
                        innerAriaLabel: n,
                        ref: e => {
                            l.current = e, t.current = e?.getScrollerNode() ?? null
                        },
                        sectionHeight: T.h4,
                        rowHeight: T.Gg,
                        renderSection: A,
                        renderRow: m,
                        sections: [a.length],
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
        let e = (0, A.A)(),
            t = (0, g.GR)(),
            n = e ? T.Y7 : T.kp,
            s = {
                count: t.length,
                max: n
            },
            a = (0, _.y)(f.intl.formatToPlainString(I.default["+tnO34"], s), f.intl.formatToPlainString(I.default["pu6/U0"], s));
        return t.length > 0 ? (0, i.jsx)(P, {
            sectionType: T.Ef.ACTIVE,
            sectionTitle: a,
            requests: t
        }) : (0, i.jsxs)("div", {
            className: b.uW,
            children: [(0, i.jsx)(c.Text, {
                className: j.QB,
                variant: "eyebrow",
                color: "text-default",
                children: a
            }), (0, i.jsx)("div", {
                className: b.aP,
                children: (0, i.jsx)(h.A, {
                    text: f.intl.string(I.default.C4ScLD)
                })
            })]
        })
    },
    D = () => {
        let e = (0, g.xr)(),
            t = (0, A.A)() ? T.Y7 : T.kp,
            n = (0, _.y)(f.intl.formatToPlainString(I.default["1/PzIj"], {
                maxConnections: t
            }), f.intl.formatToPlainString(I.default.RcTgiE, {
                maxConnections: t
            }));
        return e ? (0, i.jsx)("div", {
            className: b.rv,
            children: (0, i.jsx)(c.Text, {
                variant: "text-xxs/medium",
                color: "text-muted",
                children: n
            })
        }) : null
    },
    G = () => {
        let e = (0, m.N)(),
            t = (0, m.z)(),
            n = (0, r.YW)({
                helpline: e,
                throughline: t
            }).with({
                helpline: !0
            }, () => f.intl.format(I.default["KOwsf/"], {
                helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
            })).with({
                throughline: !0
            }, () => f.intl.format(I.default["6tsC8u"], {
                helpLink: S.CL
            })).otherwise(() => null);
        return null == n ? null : (0, i.jsxs)("div", {
            className: j.QX,
            children: [(0, i.jsx)(c.Heading, {
                className: b.rH,
                variant: "heading-sm/semibold",
                children: (0, i.jsx)(c.Fmo, {
                    children: f.intl.string(I.default["7/tVhv"])
                })
            }), (0, i.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: n
            })]
        })
    },
    M = () => {
        let e = (0, g.xk)(T.Ef.PENDING),
            t = (0, _.y)(f.intl.formatToPlainString(I.default.IkAgkG, {
                count: e.length
            }), f.intl.formatToPlainString(I.default.Q8XnAa, {
                count: e.length
            }));
        return 0 === e.length ? null : (0, i.jsx)(P, {
            sectionType: T.Ef.PENDING,
            sectionTitle: t,
            requests: e
        })
    },
    U = () => {
        let e = (0, A.A)();
        return (0, i.jsxs)("div", {
            className: b.kL,
            children: [e ? (0, i.jsx)(R, {}) : (0, i.jsx)(y, {}), (0, i.jsx)(L, {}), (0, i.jsx)(M, {}), (0, i.jsx)(D, {}), (0, i.jsx)(G, {})]
        })
    }