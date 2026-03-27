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
    m = r(721473);
let h = e => {
    let {
        children: t,
        gap: r = 24,
        edgeFade: i = "xl",
        hideActionsWhenDisabled: h = !0,
        className: x,
        iconButtonSize: p,
        "aria-label": g
    } = e, A = l.useId(), C = l.useRef(0), I = l.useRef(0), b = l.useRef(0), v = l.useRef(!1), k = l.useRef(!1), E = l.useRef(null), j = (0, u.bG)([d.A], () => d.A.keyboardModeEnabled), y = (0, u.bG)([d.A], () => d.A.useReducedMotion), R = l.useMemo(() => l.Children.map(t, e => l.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : l.cloneElement(e, {
        tabIndex: -1
    }) : e), [t]), [T, _] = l.useState(!1), [L, P] = l.useState(!1), [S, N] = l.useState(!0), O = () => {
        _(I.current > C.current)
    }, V = l.useCallback(() => {
        if (k.current) return;
        let e = w.current;
        if (null == e) return;
        let t = Math.floor((b.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
        E.current = Math.max(0, Math.min(e.childElementCount - 1, t))
    }, []), B = l.useCallback(() => {
        let e = w.current;
        null != e && (P(b.current > 0), N(b.current + e.clientWidth < e.scrollWidth), V())
    }, [V]), M = l.useCallback(() => {
        let e = w.current;
        if (null == e) return;
        let t = E.current;
        Array.from(e.children).forEach((e, r) => {
            Array.from(e.children).forEach(e => {
                j && r !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert")
            })
        })
    }, [j]), W = (0, c.w)(e => {
        let {
            contentRect: t
        } = e;
        C.current = t.width, null != w.current && (b.current = w.current?.scrollLeft), O(), B(), M()
    }), w = l.useRef(null);
    l.useEffect(() => {
        let e = w.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            I.current = e.scrollWidth, e.scrollLeft !== b.current && (e.scrollLeft = b.current), O(), B()
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
        }), e.addEventListener("scrollend", B), () => {
            t.disconnect(), r.disconnect(), e.removeEventListener("scrollend", B)
        }
    }, [B]);
    let H = l.useMemo(() => (0, a.throttle)(() => {
            let e = w.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, r = Math.max(0, t - C.current);
            b.current = r, v.current = !0, e.scrollTo({
                left: r,
                behavior: y ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => v.current = !1, {
                once: !0
            }), B()
        }, 200), [C, B, y]),
        U = l.useMemo(() => (0, a.throttle)(() => {
            let e = w.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, r = t + C.current;
            b.current = r, v.current = !0, e.scrollTo({
                left: r,
                behavior: y ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => v.current = !1, {
                once: !0
            }), B()
        }, 200), [C, B, y]),
        G = l.useCallback(() => {
            let e = w.current;
            if (null == e) return !1;
            for (let t of e.children)
                if (t.contains(document.activeElement)) return !0;
            return !1
        }, []),
        D = l.useCallback(() => {
            setTimeout(() => {
                if (!G()) {
                    let e = w.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        M()
                    }
                }
            }, 10)
        }, [G, M]);
    l.useEffect(() => {
        M()
    }, [j, M]);
    let F = {
        "--custom-edge-fade-width": `var(--space-${i})`
    };
    return (0, n.jsxs)("div", {
        ref: W,
        role: null != g ? "region" : void 0,
        "aria-label": g,
        style: F,
        className: s()(m.kL, x),
        children: [T && (0, n.jsxs)("div", {
            className: m.o1,
            role: "group",
            children: [(0, n.jsx)("div", {
                className: s()(m.x6, {
                    [m.r9]: !L && h
                }),
                children: (0, n.jsx)(o.K0, {
                    icon: o.Zge,
                    size: p,
                    variant: "overlay-secondary",
                    onClick: H,
                    disabled: !L,
                    "aria-label": f.intl.string(f.t.FQx1Ru),
                    "aria-hidden": !L && h,
                    "aria-controls": A
                })
            }), (0, n.jsx)("div", {
                className: s()(m.x6, {
                    [m.r9]: !S && h
                }),
                children: (0, n.jsx)(o.K0, {
                    icon: o.KS6,
                    size: p,
                    variant: "overlay-secondary",
                    onClick: U,
                    disabled: !S,
                    "aria-label": f.intl.string(f.t.H4hwjn),
                    "aria-hidden": !S && h,
                    "aria-controls": A
                })
            })]
        }), (0, n.jsx)(o.BJc, {
            direction: "horizontal",
            gap: r,
            id: A,
            "aria-label": g,
            ref: w,
            className: s()(m.Y_, {
                [m.jL]: L,
                [m.w6]: S,
                [m.XG]: L && S,
                [m.DY]: j
            }),
            tabIndex: 0,
            onFocus: e => {
                let t = w.current;
                if (null != t) {
                    if (e.preventDefault(), V(), -1 !== t.tabIndex) {
                        let e = E?.current ?? 0,
                            r = t.children[e];
                        null != r && (r.focus(), r.setAttribute("tabIndex", "0"), E.current = e, M())
                    }
                    t.setAttribute("tabIndex", "-1")
                }
            },
            onBlur: e => {
                e.preventDefault(), D()
            },
            onKeyDown: e => {
                let t = w.current;
                if (null == t) return;
                let r = t.children,
                    n = E.current ?? 0,
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
                        b.current = r, r !== t.scrollLeft && (v.current = !0, k.current = !0, t.scrollTo({
                            left: r,
                            behavior: y ? "auto" : "smooth"
                        }), t.addEventListener("scrollend", () => {
                            v.current = !1, k.current = !1
                        }, {
                            once: !0
                        })), E.current = n, M()
                    } else t.setAttribute("tabIndex", "0"), V()
            },
            onScroll: e => {
                v.current || (b.current = e.target.scrollLeft, B())
            },
            children: R
        })]
    })
}