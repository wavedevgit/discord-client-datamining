/** chunk id: 720462, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => b
});
var n = r(627968),
    l = r(64700),
    i = r(503698),
    u = r.n(i),
    c = r(735438),
    s = r(311907),
    a = r(732955),
    o = r(770178),
    d = r(775602),
    f = r(985018),
    h = r(970206);
let b = e => {
    let {
        children: t,
        gap: r = 8,
        edgeFade: i = "xl",
        hideActionsWhenDisabled: b = !0,
        className: m,
        "aria-label": E
    } = e, v = l.useId(), x = l.useRef(0), A = l.useRef(0), g = l.useRef(0), p = l.useRef(!1), M = l.useRef(!1), L = l.useRef(null), k = (0, s.bG)([d.A], () => d.A.keyboardModeEnabled), w = (0, s.bG)([d.A], () => d.A.useReducedMotion), C = l.useMemo(() => l.Children.map(t, e => l.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : l.cloneElement(e, {
        tabIndex: -1
    }) : e), [t]), [S, y] = l.useState(!1), [R, I] = l.useState(!1), [j, D] = l.useState(!0), W = () => {
        y(A.current > x.current)
    }, N = l.useCallback(() => {
        if (M.current) return;
        let e = F.current;
        if (null == e) return;
        let t = Math.floor((g.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
        L.current = Math.max(0, Math.min(e.childElementCount - 1, t))
    }, []), T = l.useCallback(() => {
        let e = F.current;
        null != e && (I(g.current > 0), D(g.current + e.clientWidth < e.scrollWidth), N())
    }, [N]), K = l.useCallback(() => {
        let e = F.current;
        if (null == e) return;
        let t = L.current;
        Array.from(e.children).forEach((e, r) => {
            Array.from(e.children).forEach(e => {
                k && r !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert")
            })
        })
    }, [k]), O = (0, o.w)(e => {
        let {
            contentRect: t
        } = e;
        x.current = t.width, null != F.current && (g.current = F.current?.scrollLeft), W(), T(), K()
    }), F = l.useRef(null);
    l.useEffect(() => {
        let e = F.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            A.current = e.scrollWidth, e.scrollLeft !== g.current && (e.scrollLeft = g.current), W(), T()
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
        }), e.addEventListener("scrollend", T), () => {
            t.disconnect(), r.disconnect(), e.removeEventListener("scrollend", T)
        }
    }, [T]);
    let G = l.useMemo(() => (0, c.throttle)(() => {
            let e = F.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, r = Math.max(0, t - x.current);
            g.current = r, p.current = !0, e.scrollTo({
                left: r,
                behavior: w ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => p.current = !1, {
                once: !0
            }), T()
        }, 200), [x, T, w]),
        _ = l.useMemo(() => (0, c.throttle)(() => {
            let e = F.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, r = t + x.current;
            g.current = r, p.current = !0, e.scrollTo({
                left: r,
                behavior: w ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => p.current = !1, {
                once: !0
            }), T()
        }, 200), [x, T, w]),
        z = l.useCallback(() => {
            let e = F.current;
            if (null == e) return !1;
            for (let t of e.children)
                if (t.contains(document.activeElement)) return !0;
            return !1
        }, []),
        H = l.useCallback(() => {
            setTimeout(() => {
                if (!z()) {
                    let e = F.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        K()
                    }
                }
            }, 10)
        }, [z, K]);
    l.useEffect(() => {
        K()
    }, [k, K]);
    let P = {
        "--custom-edge-fade-width": `var(--space-${i})`
    };
    return (0, n.jsxs)("div", {
        ref: O,
        role: null != E ? "region" : void 0,
        "aria-label": E,
        style: P,
        className: u()(h.kL, m),
        children: [S && (0, n.jsxs)("div", {
            className: h.o1,
            role: "group",
            children: [(0, n.jsx)("div", {
                className: u()(h.x6, {
                    [h.r9]: !R && b
                }),
                children: (0, n.jsx)(a.K0, {
                    icon: a.Zge,
                    variant: "overlay-secondary",
                    onClick: G,
                    disabled: !R,
                    "aria-label": f.intl.string(f.t.FQx1Ru),
                    "aria-hidden": !R && b,
                    "aria-controls": v
                })
            }), (0, n.jsx)("div", {
                className: u()(h.x6, {
                    [h.r9]: !j && b
                }),
                children: (0, n.jsx)(a.K0, {
                    icon: a.KS6,
                    variant: "overlay-secondary",
                    onClick: _,
                    disabled: !j,
                    "aria-label": f.intl.string(f.t.H4hwjn),
                    "aria-hidden": !j && b,
                    "aria-controls": v
                })
            })]
        }), (0, n.jsx)(a.BJc, {
            direction: "horizontal",
            gap: r,
            id: v,
            "aria-label": E,
            ref: F,
            className: u()(h.Y_, {
                [h.jL]: R,
                [h.w6]: j,
                [h.XG]: R && j,
                [h.DY]: k
            }),
            tabIndex: 0,
            onFocus: e => {
                let t = F.current;
                if (null != t) {
                    if (e.preventDefault(), N(), -1 !== t.tabIndex) {
                        let e = L?.current ?? 0,
                            r = t.children[e];
                        null != r && (r.focus(), r.setAttribute("tabIndex", "0"), L.current = e, K())
                    }
                    t.setAttribute("tabIndex", "-1")
                }
            },
            onBlur: e => {
                e.preventDefault(), H()
            },
            onKeyDown: e => {
                let t = F.current;
                if (null == t) return;
                let r = t.children,
                    n = L.current ?? 0,
                    l = r[n];
                null != l && l.setAttribute("tabIndex", "-1");
                let i = ["ArrowLeft"],
                    u = ["ArrowRight"];
                if ([...i, ...u].includes(e.key))
                    if (e.preventDefault(), i.includes(e.key) && (n = Math.max(0, n - 1)), u.includes(e.key) && (n = Math.min(t.childElementCount - 1, n + 1)), null != (l = r[n])) {
                        l.setAttribute("tabIndex", "0"), t.setAttribute("tabIndex", "-1"), l.focus({
                            preventScroll: !0
                        });
                        let e = l.offsetLeft - t.clientWidth / 2 + l.offsetWidth / 2,
                            r = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                        g.current = r, r !== t.scrollLeft && (p.current = !0, M.current = !0, t.scrollTo({
                            left: r,
                            behavior: w ? "auto" : "smooth"
                        }), t.addEventListener("scrollend", () => {
                            p.current = !1, M.current = !1
                        }, {
                            once: !0
                        })), L.current = n, K()
                    } else t.setAttribute("tabIndex", "0"), N()
            },
            onScroll: e => {
                p.current || (g.current = e.target.scrollLeft, T())
            },
            children: C
        })]
    })
}