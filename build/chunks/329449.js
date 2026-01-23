/** Chunk was on 97492 **/
/** chunk id: 329449, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(896048), n(142703);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(108531),
    o = n(311907),
    c = n(397927),
    u = n(765671),
    d = n(775602),
    p = n(961350),
    h = n(741961),
    f = n(682174),
    g = n(928830),
    m = n(3137),
    b = n(559908),
    A = n(103640),
    y = n(924177),
    _ = n(985018),
    O = n(733313);
let j = l.memo(function(e) {
        let {
            channelId: t,
            width: n
        } = e, i = (0, o.bG)([d.A], () => d.A.useReducedMotion), s = (0, o.bG)([b.Ay], () => b.Ay.getMostRecentMessageCombo(t), [t]), [u, p] = l.useState(!1);
        l.useEffect(() => {
            if (null == s ? void 0 : s.displayed) return;
            p(!1), setImmediate(() => {
                p((null != s ? (0, A.RL)(s.combo) : 0) > 0)
            });
            let e = setTimeout(() => {
                p(!1), null != s && (0, g.Nu)(s)
            }, 2e3);
            return () => clearTimeout(e)
        }, [s]);
        let h = null != s ? "100%" : "200%",
            f = (0, c.zhh)({
                opacity: +!!u,
                translateY: u ? "0" : h,
                pointerEvents: "none",
                width: n,
                config: i ? a.config.stiff : a.config.slow
            }, "animate-always");
        return null != s && (0, r.jsx)(a.animated.div, {
            className: O.Gi,
            style: f,
            children: (0, r.jsx)(c.Text, {
                className: O.fX,
                variant: "text-sm/bold",
                children: (0, A.RL)(s.combo)
            })
        })
    }),
    v = l.memo(function(e) {
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
                className: O.iR,
                variant: "text-sm/bold",
                children: t
            }), (0, r.jsxs)("div", {
                className: O._Z,
                style: {
                    color: i
                },
                children: [(0, r.jsx)(c.Text, {
                    className: O.On,
                    style: {
                        color: i
                    },
                    variant: "text-sm/bold",
                    children: _.intl.format(_.t["6bgVlq"], {
                        multiplier: n
                    })
                }), a && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: s()(O.QA, O.kb),
                        style: {
                            backgroundColor: i
                        }
                    }), (0, r.jsx)("div", {
                        className: s()(O.QA, O.pG),
                        style: {
                            backgroundColor: i
                        }
                    })]
                }), o && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: s()(O.ox, O.kb),
                        children: (0, r.jsx)(f.A, {
                            width: 24,
                            height: 24
                        })
                    }), (0, r.jsx)("div", {
                        className: s()(O.ox, O.pG),
                        children: (0, r.jsx)(f.A, {
                            width: 24,
                            height: 24
                        })
                    })]
                }), 1 === n && (0, r.jsx)(c.Text, {
                    className: O.uN,
                    variant: "text-sm/bold",
                    children: _.intl.string(_.t.b5Cpof)
                })]
            })]
        })
    }),
    x = l.memo(function(e) {
        let {
            channelId: t
        } = e, n = (0, o.bG)([p.default], () => p.default.getId()), i = (0, o.bG)([h.A], () => h.A.isTyping(t, n), [t, n]), s = (0, o.bG)([m.A], () => m.A.isEnabled()), d = (0, o.bG)([b.Ay], () => b.Ay.isComboing(n, t), [t, n]), {
            ref: f,
            width: g = 0
        } = (0, u.Ay)(), [A, _] = l.useState(!1), x = (0, y.A)(t), E = s && d && i;
        l.useEffect(() => {
            E && _(!0);
            let e = setTimeout(() => _(E), 1e3);
            return () => clearTimeout(e)
        }, [E]);
        let C = (0, c.zhh)({
                opacity: +!!A,
                transform: A ? "translateY(0)" : "translateY(100%)",
                pointerEvents: "none",
                config: a.config.stiff
            }),
            S = l.useMemo(() => null != x ? x : {
                value: 0,
                multiplier: 1
            }, [x]),
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
                width: g
            }), (0, r.jsx)(a.animated.div, {
                ref: f,
                className: O.p_,
                style: C,
                children: (0, r.jsx)(v, {
                    value: T,
                    multiplier: N
                })
            })]
        })
    })