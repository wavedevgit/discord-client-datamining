/** chunk id: 720462 params = (module,exports,require) **/
r.d(t, {
    A: () => h
});
var n = r(627968),
    l = r(64700),
    i = r(503698),
    s = r.n(i),
    a = r(735438),
    u = r(311907),
    o = r(732955),
    c = r(770178),
    d = r(775602),
    f = r(985018),
    m = r(289752);
let h = e => {
    let {
        children: t,
        gap: r = 24,
        edgeFade: i = "xl",
        hideActionsWhenDisabled: h = !0,
        className: A,
        "aria-label": x
    } = e, p = l.useId(), C = l.useRef(0), g = l.useRef(0), v = l.useRef(0), I = l.useRef(!1), b = l.useRef(!1), k = l.useRef(null), E = (0, u.bG)([d.A], () => d.A.keyboardModeEnabled), j = (0, u.bG)([d.A], () => d.A.useReducedMotion), y = l.useMemo(() => l.Children.map(t, e => l.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : l.cloneElement(e, {
        tabIndex: -1
    }) : e), [t]), [T, R] = l.useState(!1), [_, L] = l.useState(!1), [N, O] = l.useState(!0), P = () => {
        R(g.current > C.current)
    }, S = l.useCallback(() => {
        if (b.current) return;
        let e = B.current;
        if (null == e) return;
        let t = Math.floor((v.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
        k.current = Math.max(0, Math.min(e.childElementCount - 1, t))
    }, []), V = l.useCallback(() => {
        let e = B.current;
        null != e && (L(v.current > 0), O(v.current + e.clientWidth < e.scrollWidth), S())
    }, [S]), w = l.useCallback(() => {
        let e = B.current;
        if (null == e) return;
        let t = k.current;
        Array.from(e.children).forEach((e, r) => {
            Array.from(e.children).forEach(e => {
                E && r !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert")
            })
        })
    }, [E]), M = (0, c.w)(e => {
        let {
            contentRect: t
        } = e;
        C.current = t.width, null != B.current && (v.current = B.current?.scrollLeft), P(), V(), w()
    }), B = l.useRef(null);
    l.useEffect(() => {
        let e = B.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            g.current = e.scrollWidth, e.scrollLeft !== v.current && (e.scrollLeft = v.current), P(), V()
        });
        Array.from(e.children).forEach(e => {
            t.observe(e)
        });
        let r = new MutationObserver(() => {
            t.disconnect(), Array.from(e.children).forEach(e => {
                t.observe(e)
            })
        });
        return r.observe(e, {
            childList: !0
        }), e.addEventListener("scrollend", V), () => {
            t.disconnect(), r.disconnect(), e.removeEventListener("scrollend", V)
        }
    }, [V]);
    let D = l.useMemo(() => (0, a.throttle)(() => {
            let e = B.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, r = Math.max(0, t - C.current);
            v.current = r, I.current = !0, e.scrollTo({
                left: r,
                behavior: j ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => I.current = !1, {
                once: !0
            }), V()
        }, 200), [C, V, j]),
        W = l.useMemo(() => (0, a.throttle)(() => {
            let e = B.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, r = t + C.current;
            v.current = r, I.current = !0, e.scrollTo({
                left: r,
                behavior: j ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => I.current = !1, {
                once: !0
            }), V()
        }, 200), [C, V, j]),
        U = l.useCallback(() => {
            let e = B.current;
            if (null == e) return !1;
            for (let t of e.children)
                if (t.contains(document.activeElement)) return !0;
            return !1
        }, []),
        H = l.useCallback(() => {
            setTimeout(() => {
                if (!U()) {
                    let e = B.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        w()
                    }
                }
            }, 10)
        }, [U, w]);
    l.useEffect(() => {
        w()
    }, [E, w]);
    let F = {
        "--custom-edge-fade-width": `var(--space-${i})`
    };
    return (0, n.jsxs)("div", {
        ref: M,
        role: null != x ? "region" : void 0,
        "aria-label": x,
        style: F,
        className: s()(m.kL, A),
        children: [T && (0, n.jsxs)("div", {
            className: m.o1,
            role: "group",
            children: [(0, n.jsx)("div", {
                className: s()(m.x6, {
                    [m.r9]: !_ && h
                }),
                children: (0, n.jsx)(o.K0, {
                    icon: o.Zge,
                    variant: "overlay-secondary",
                    onClick: D,
                    disabled: !_,
                    "aria-label": f.intl.string(f.t.FQx1Ru),
                    "aria-hidden": !_ && h,
                    "aria-controls": p
                })
            }), (0, n.jsx)("div", {
                className: s()(m.x6, {
                    [m.r9]: !N && h
                }),
                children: (0, n.jsx)(o.K0, {
                    icon: o.KS6,
                    variant: "overlay-secondary",
                    onClick: W,
                    disabled: !N,
                    "aria-label": f.intl.string(f.t.H4hwjn),
                    "aria-hidden": !N && h,
                    "aria-controls": p
                })
            })]
        }), (0, n.jsx)(o.BJc, {
            direction: "horizontal",
            gap: r,
            id: p,
            "aria-label": x,
            ref: B,
            className: s()(m.Y_, {
                [m.jL]: _,
                [m.w6]: N,
                [m.XG]: _ && N,
                [m.DY]: E
            }),
            tabIndex: 0,
            onFocus: e => {
                let t = B.current;
                if (null != t) {
                    if (e.preventDefault(), S(), -1 !== t.tabIndex) {
                        let e = k?.current ?? 0,
                            r = t.children[e];
                        null != r && (r.focus(), r.setAttribute("tabIndex", "0"), k.current = e, w())
                    }
                    t.setAttribute("tabIndex", "-1")
                }
            },
            onBlur: e => {
                e.preventDefault(), H()
            },
            onKeyDown: e => {
                let t = B.current;
                if (null == t) return;
                let r = t.children,
                    n = k.current ?? 0,
                    l = r[n];
                null != l && l.setAttribute("tabIndex", "-1");
                let i = ["ArrowLeft"],
                    s = ["ArrowRight"];
                if ([...i, ...s].includes(e.key))
                    if (e.preventDefault(), i.includes(e.key) && (n = Math.max(0, n - 1)), s.includes(e.key) && (n = Math.min(t.childElementCount - 1, n + 1)), null != (l = r[n])) {
                        l.setAttribute("tabIndex", "0"), t.setAttribute("tabIndex", "-1"), l.focus({
                            preventScroll: !0
                        });
                        let e = l.offsetLeft - t.clientWidth / 2 + l.offsetWidth / 2,
                            r = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                        v.current = r, r !== t.scrollLeft && (I.current = !0, b.current = !0, t.scrollTo({
                            left: r,
                            behavior: j ? "auto" : "smooth"
                        }), t.addEventListener("scrollend", () => {
                            I.current = !1, b.current = !1
                        }, {
                            once: !0
                        })), k.current = n, w()
                    } else t.setAttribute("tabIndex", "0"), S()
            },
            onScroll: e => {
                I.current || (v.current = e.target.scrollLeft, V())
            },
            children: y
        })]
    })
}