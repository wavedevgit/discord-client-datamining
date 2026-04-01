/** chunk id: 951707 params = (module,exports,require) **/
r.d(t, {
    A: () => p
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
    h = r(669046);
let p = e => {
    let {
        children: t,
        gap: r = 24,
        edgeFade: i = "xl",
        hideActionsWhenDisabled: p = !0,
        className: f,
        iconButtonSize: x,
        "aria-label": g
    } = e, v = l.useId(), A = l.useRef(0), C = l.useRef(0), I = l.useRef(0), k = l.useRef(!1), b = l.useRef(!1), y = l.useRef(null), E = (0, u.bG)([d.A], () => d.A.keyboardModeEnabled), j = (0, u.bG)([d.A], () => d.A.useReducedMotion), _ = l.useMemo(() => l.Children.map(t, e => l.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : l.cloneElement(e, {
        tabIndex: -1
    }) : e), [t]), [R, T] = l.useState(!1), [L, P] = l.useState(!1), [S, O] = l.useState(!0), V = () => {
        T(C.current > A.current)
    }, N = l.useCallback(() => {
        if (b.current) return;
        let e = H.current;
        if (null == e) return;
        let t = Math.floor((I.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
        y.current = Math.max(0, Math.min(e.childElementCount - 1, t))
    }, []), w = l.useCallback(() => {
        let e = H.current;
        null != e && (P(I.current > 0), O(I.current + e.clientWidth < e.scrollWidth), N())
    }, [N]), M = l.useCallback(() => {
        let e = H.current;
        if (null == e) return;
        let t = y.current;
        Array.from(e.children).forEach((e, r) => {
            Array.from(e.children).forEach(e => {
                E && r !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert")
            })
        })
    }, [E]), B = (0, c.w)(e => {
        let {
            contentRect: t
        } = e;
        A.current = t.width, null != H.current && (I.current = H.current?.scrollLeft), V(), w(), M()
    }), H = l.useRef(null);
    l.useEffect(() => {
        let e = H.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            C.current = e.scrollWidth, e.scrollLeft !== I.current && (e.scrollLeft = I.current), V(), w()
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
        }), e.addEventListener("scrollend", w), () => {
            t.disconnect(), r.disconnect(), e.removeEventListener("scrollend", w)
        }
    }, [w]);
    let W = l.useMemo(() => (0, a.throttle)(() => {
            let e = H.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, r = Math.max(0, t - A.current);
            I.current = r, k.current = !0, e.scrollTo({
                left: r,
                behavior: j ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => k.current = !1, {
                once: !0
            }), w()
        }, 200), [A, w, j]),
        U = l.useMemo(() => (0, a.throttle)(() => {
            let e = H.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, r = t + A.current;
            I.current = r, k.current = !0, e.scrollTo({
                left: r,
                behavior: j ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => k.current = !1, {
                once: !0
            }), w()
        }, 200), [A, w, j]),
        D = l.useCallback(() => {
            let e = H.current;
            if (null == e) return !1;
            for (let t of e.children)
                if (t.contains(document.activeElement)) return !0;
            return !1
        }, []),
        G = l.useCallback(() => {
            setTimeout(() => {
                if (!D()) {
                    let e = H.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        M()
                    }
                }
            }, 10)
        }, [D, M]);
    l.useEffect(() => {
        M()
    }, [E, M]);
    let F = {
        "--custom-edge-fade-width": `var(--space-${i})`
    };
    return (0, n.jsxs)("div", {
        ref: B,
        role: null != g ? "region" : void 0,
        "aria-label": g,
        style: F,
        className: s()(h.kL, f),
        children: [R && (0, n.jsxs)("div", {
            className: h.o1,
            role: "group",
            children: [(0, n.jsx)("div", {
                className: s()(h.x6, {
                    [h.r9]: !L && p
                }),
                children: (0, n.jsx)(o.K0, {
                    icon: o.Zge,
                    size: x,
                    variant: "overlay-secondary",
                    onClick: W,
                    disabled: !L,
                    "aria-label": m.intl.string(m.t.FQx1Ru),
                    "aria-hidden": !L && p,
                    "aria-controls": v
                })
            }), (0, n.jsx)("div", {
                className: s()(h.x6, {
                    [h.r9]: !S && p
                }),
                children: (0, n.jsx)(o.K0, {
                    icon: o.KS6,
                    size: x,
                    variant: "overlay-secondary",
                    onClick: U,
                    disabled: !S,
                    "aria-label": m.intl.string(m.t.H4hwjn),
                    "aria-hidden": !S && p,
                    "aria-controls": v
                })
            })]
        }), (0, n.jsx)(o.BJc, {
            direction: "horizontal",
            gap: r,
            id: v,
            "aria-label": g,
            ref: H,
            className: s()(h.Y_, {
                [h.jL]: L,
                [h.w6]: S,
                [h.XG]: L && S,
                [h.DY]: E
            }),
            tabIndex: 0,
            onFocus: e => {
                let t = H.current;
                if (null != t) {
                    if (e.preventDefault(), N(), -1 !== t.tabIndex) {
                        let e = y?.current ?? 0,
                            r = t.children[e];
                        null != r && (r.focus(), r.setAttribute("tabIndex", "0"), y.current = e, M())
                    }
                    t.setAttribute("tabIndex", "-1")
                }
            },
            onBlur: e => {
                e.preventDefault(), G()
            },
            onKeyDown: e => {
                let t = H.current;
                if (null == t) return;
                let r = t.children,
                    n = y.current ?? 0,
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
                        I.current = r, r !== t.scrollLeft && (k.current = !0, b.current = !0, t.scrollTo({
                            left: r,
                            behavior: j ? "auto" : "smooth"
                        }), t.addEventListener("scrollend", () => {
                            k.current = !1, b.current = !1
                        }, {
                            once: !0
                        })), y.current = n, M()
                    } else t.setAttribute("tabIndex", "0"), N()
            },
            onScroll: e => {
                k.current || (I.current = e.target.scrollLeft, w())
            },
            children: _
        })]
    })
}