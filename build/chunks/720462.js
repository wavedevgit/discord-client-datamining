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
    m = r(985018),
    f = r(289752);
let h = e => {
    let {
        children: t,
        gap: r = 24,
        edgeFade: i = "xl",
        hideActionsWhenDisabled: h = !0,
        className: x,
        "aria-label": p
    } = e, g = l.useId(), C = l.useRef(0), A = l.useRef(0), I = l.useRef(0), b = l.useRef(!1), v = l.useRef(!1), k = l.useRef(null), E = (0, u.bG)([d.A], () => d.A.keyboardModeEnabled), j = (0, u.bG)([d.A], () => d.A.useReducedMotion), y = l.useMemo(() => l.Children.map(t, e => l.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : l.cloneElement(e, {
        tabIndex: -1
    }) : e), [t]), [R, T] = l.useState(!1), [_, L] = l.useState(!1), [P, S] = l.useState(!0), N = () => {
        T(A.current > C.current)
    }, O = l.useCallback(() => {
        if (v.current) return;
        let e = W.current;
        if (null == e) return;
        let t = Math.floor((I.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
        k.current = Math.max(0, Math.min(e.childElementCount - 1, t))
    }, []), V = l.useCallback(() => {
        let e = W.current;
        null != e && (L(I.current > 0), S(I.current + e.clientWidth < e.scrollWidth), O())
    }, [O]), B = l.useCallback(() => {
        let e = W.current;
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
        C.current = t.width, null != W.current && (I.current = W.current?.scrollLeft), N(), V(), B()
    }), W = l.useRef(null);
    l.useEffect(() => {
        let e = W.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            A.current = e.scrollWidth, e.scrollLeft !== I.current && (e.scrollLeft = I.current), N(), V()
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
    let w = l.useMemo(() => (0, a.throttle)(() => {
            let e = W.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, r = Math.max(0, t - C.current);
            I.current = r, b.current = !0, e.scrollTo({
                left: r,
                behavior: j ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => b.current = !1, {
                once: !0
            }), V()
        }, 200), [C, V, j]),
        H = l.useMemo(() => (0, a.throttle)(() => {
            let e = W.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, r = t + C.current;
            I.current = r, b.current = !0, e.scrollTo({
                left: r,
                behavior: j ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => b.current = !1, {
                once: !0
            }), V()
        }, 200), [C, V, j]),
        U = l.useCallback(() => {
            let e = W.current;
            if (null == e) return !1;
            for (let t of e.children)
                if (t.contains(document.activeElement)) return !0;
            return !1
        }, []),
        G = l.useCallback(() => {
            setTimeout(() => {
                if (!U()) {
                    let e = W.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        B()
                    }
                }
            }, 10)
        }, [U, B]);
    l.useEffect(() => {
        B()
    }, [E, B]);
    let D = {
        "--custom-edge-fade-width": `var(--space-${i})`
    };
    return (0, n.jsxs)("div", {
        ref: M,
        role: null != p ? "region" : void 0,
        "aria-label": p,
        style: D,
        className: s()(f.kL, x),
        children: [R && (0, n.jsxs)("div", {
            className: f.o1,
            role: "group",
            children: [(0, n.jsx)("div", {
                className: s()(f.x6, {
                    [f.r9]: !_ && h
                }),
                children: (0, n.jsx)(o.K0, {
                    icon: o.Zge,
                    variant: "overlay-secondary",
                    onClick: w,
                    disabled: !_,
                    "aria-label": m.intl.string(m.t.FQx1Ru),
                    "aria-hidden": !_ && h,
                    "aria-controls": g
                })
            }), (0, n.jsx)("div", {
                className: s()(f.x6, {
                    [f.r9]: !P && h
                }),
                children: (0, n.jsx)(o.K0, {
                    icon: o.KS6,
                    variant: "overlay-secondary",
                    onClick: H,
                    disabled: !P,
                    "aria-label": m.intl.string(m.t.H4hwjn),
                    "aria-hidden": !P && h,
                    "aria-controls": g
                })
            })]
        }), (0, n.jsx)(o.BJc, {
            direction: "horizontal",
            gap: r,
            id: g,
            "aria-label": p,
            ref: W,
            className: s()(f.Y_, {
                [f.jL]: _,
                [f.w6]: P,
                [f.XG]: _ && P,
                [f.DY]: E
            }),
            tabIndex: 0,
            onFocus: e => {
                let t = W.current;
                if (null != t) {
                    if (e.preventDefault(), O(), -1 !== t.tabIndex) {
                        let e = k?.current ?? 0,
                            r = t.children[e];
                        null != r && (r.focus(), r.setAttribute("tabIndex", "0"), k.current = e, B())
                    }
                    t.setAttribute("tabIndex", "-1")
                }
            },
            onBlur: e => {
                e.preventDefault(), G()
            },
            onKeyDown: e => {
                let t = W.current;
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
                        I.current = r, r !== t.scrollLeft && (b.current = !0, v.current = !0, t.scrollTo({
                            left: r,
                            behavior: j ? "auto" : "smooth"
                        }), t.addEventListener("scrollend", () => {
                            b.current = !1, v.current = !1
                        }, {
                            once: !0
                        })), k.current = n, B()
                    } else t.setAttribute("tabIndex", "0"), O()
            },
            onScroll: e => {
                b.current || (I.current = e.target.scrollLeft, V())
            },
            children: y
        })]
    })
}