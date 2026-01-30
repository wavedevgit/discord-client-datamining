/** Chunk was on 1113 **/
/** chunk id: 329449, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(896048), n(142703);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(353709),
    o = n(311907),
    c = n(397927),
    u = n(765671),
    d = n(775602),
    h = n(961350),
    p = n(741961),
    g = n(682174),
    f = n(928830),
    m = n(3137),
    b = n(559908),
    A = n(103640),
    y = n(924177),
    O = n(985018),
    _ = n(733313);
let j = l.memo(function(e) {
        let {
            channelId: t,
            width: n
        } = e, i = (0, o.bG)([d.A], () => d.A.useReducedMotion), s = (0, o.bG)([b.Ay], () => b.Ay.getMostRecentMessageCombo(t), [t]), [u, h] = l.useState(!1);
        l.useEffect(() => {
            if (null == s ? void 0 : s.displayed) return;
            h(!1), setImmediate(() => {
                h((null != s ? (0, A.RL)(s.combo) : 0) > 0)
            });
            let e = setTimeout(() => {
                h(!1), null != s && (0, f.Nu)(s)
            }, 2e3);
            return () => clearTimeout(e)
        }, [s]);
        let p = null != s ? "100%" : "200%",
            g = (0, c.zhh)({
                opacity: +!!u,
                translateY: u ? "0" : p,
                pointerEvents: "none",
                width: n,
                config: i ? a.config.stiff : a.config.slow
            }, "animate-always");
        return null != s && (0, r.jsx)(a.animated.div, {
            className: _.Gi,
            style: g,
            children: (0, r.jsx)(c.Text, {
                className: _.fX,
                variant: "text-sm/bold",
                children: (0, A.RL)(s.combo)
            })
        })
    }),
    x = l.memo(function(e) {
        let {
            value: t,
            multiplier: n
        } = e, {
            color: i,
            square: a,
            flair: o
        } = l.useMemo(() => (0, A.HN)(n), [n]);
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(c.Text, {
                className: _.iR,
                variant: "text-sm/bold",
                children: t
            }), (0, r.jsxs)("div", {
                className: _._Z,
                style: {
                    color: i
                },
                children: [(0, r.jsx)(c.Text, {
                    className: _.On,
                    style: {
                        color: i
                    },
                    variant: "text-sm/bold",
                    children: O.intl.format(O.t["6bgVlq"], {
                        multiplier: n
                    })
                }), a && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: s()(_.QA, _.kb),
                        style: {
                            backgroundColor: i
                        }
                    }), (0, r.jsx)("div", {
                        className: s()(_.QA, _.pG),
                        style: {
                            backgroundColor: i
                        }
                    })]
                }), o && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: s()(_.ox, _.kb),
                        children: (0, r.jsx)(g.A, {
                            width: 24,
                            height: 24
                        })
                    }), (0, r.jsx)("div", {
                        className: s()(_.ox, _.pG),
                        children: (0, r.jsx)(g.A, {
                            width: 24,
                            height: 24
                        })
                    })]
                }), 1 === n && (0, r.jsx)(c.Text, {
                    className: _.uN,
                    variant: "text-sm/bold",
                    children: O.intl.string(O.t.b5Cpof)
                })]
            })]
        })
    }),
    v = l.memo(function(e) {
        let {
            channelId: t
        } = e, n = (0, o.bG)([h.default], () => h.default.getId()), i = (0, o.bG)([p.A], () => p.A.isTyping(t, n), [t, n]), s = (0, o.bG)([m.A], () => m.A.isEnabled()), d = (0, o.bG)([b.Ay], () => b.Ay.isComboing(n, t), [t, n]), {
            ref: g,
            width: f = 0
        } = (0, u.Ay)(), [A, O] = l.useState(!1), v = (0, y.A)(t), E = s && d && i;
        l.useEffect(() => {
            E && O(!0);
            let e = setTimeout(() => O(E), 1e3);
            return () => clearTimeout(e)
        }, [E]);
        let C = (0, c.zhh)({
                opacity: +!!A,
                transform: A ? "translateY(0)" : "translateY(100%)",
                pointerEvents: "none",
                config: a.config.stiff
            }),
            S = l.useMemo(() => null != v ? v : {
                value: 0,
                multiplier: 1
            }, [v]),
            I = l.useRef(S);
        l.useEffect(() => {
            (S.multiplier > 1 || S.value > 0) && (I.current = S)
        }, [S]);
        let {
            multiplier: N,
            value: T
        } = l.useMemo(() => ({
            value: E ? S.value : I.current.value,
            multiplier: E ? S.multiplier : I.current.multiplier
        }), [E, S, I]);
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(j, {
                channelId: t,
                width: f
            }), (0, r.jsx)(a.animated.div, {
                ref: g,
                className: _.p_,
                style: C,
                children: (0, r.jsx)(x, {
                    value: T,
                    multiplier: N
                })
            })]
        })
    })