/** chunk id: 951707 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(735438),
    c = n(311907),
    o = n(732955),
    d = n(770178),
    u = n(775602),
    _ = n(985018),
    m = n(669046);
let p = e => {
    let {
        children: t,
        gap: n = 24,
        edgeFade: a = "xl",
        hideActionsWhenDisabled: p = !0,
        className: g,
        iconButtonSize: A,
        "aria-label": x
    } = e, h = r.useId(), f = r.useRef(0), b = r.useRef(0), N = r.useRef(0), C = r.useRef(!1), R = r.useRef(!1), v = r.useRef(null), E = (0, c.bG)([u.A], () => u.A.keyboardModeEnabled), j = (0, c.bG)([u.A], () => u.A.useReducedMotion), I = r.useMemo(() => r.Children.map(t, e => r.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : r.cloneElement(e, {
        tabIndex: -1
    }) : e), [t]), [T, y] = r.useState(!1), [P, S] = r.useState(!1), [M, O] = r.useState(!0), D = () => {
        y(b.current > f.current)
    }, L = r.useCallback(() => {
        if (R.current) return;
        let e = w.current;
        if (null == e) return;
        let t = Math.floor((N.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
        v.current = Math.max(0, Math.min(e.childElementCount - 1, t))
    }, []), U = r.useCallback(() => {
        let e = w.current;
        null != e && (S(N.current > 0), O(N.current + e.clientWidth < e.scrollWidth), L())
    }, [L]), k = r.useCallback(() => {
        let e = w.current;
        if (null == e) return;
        let t = v.current;
        Array.from(e.children).forEach((e, n) => {
            Array.from(e.children).forEach(e => {
                E && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert")
            })
        })
    }, [E]), B = (0, d.w)(e => {
        let {
            contentRect: t
        } = e;
        f.current = t.width, null != w.current && (N.current = w.current?.scrollLeft), D(), U(), k()
    }), w = r.useRef(null);
    r.useEffect(() => {
        let e = w.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            b.current = e.scrollWidth, e.scrollLeft !== N.current && (e.scrollLeft = N.current), D(), U()
        });
        Array.from(e.children).forEach(e => {
            t.observe(e)
        });
        let n = new MutationObserver(() => {
            t.disconnect(), Array.from(e.children).forEach(e => {
                t.observe(e)
            })
        });
        return n.observe(e, {
            childList: !0
        }), e.addEventListener("scrollend", U), () => {
            t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", U)
        }
    }, [U]);
    let G = r.useMemo(() => (0, l.throttle)(() => {
            let e = w.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, n = Math.max(0, t - f.current);
            N.current = n, C.current = !0, e.scrollTo({
                left: n,
                behavior: j ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => C.current = !1, {
                once: !0
            }), U()
        }, 200), [f, U, j]),
        H = r.useMemo(() => (0, l.throttle)(() => {
            let e = w.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, n = t + f.current;
            N.current = n, C.current = !0, e.scrollTo({
                left: n,
                behavior: j ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => C.current = !1, {
                once: !0
            }), U()
        }, 200), [f, U, j]),
        V = r.useCallback(() => {
            let e = w.current;
            if (null == e) return !1;
            for (let t of e.children)
                if (t.contains(document.activeElement)) return !0;
            return !1
        }, []),
        F = r.useCallback(() => {
            setTimeout(() => {
                if (!V()) {
                    let e = w.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        k()
                    }
                }
            }, 10)
        }, [V, k]);
    r.useEffect(() => {
        k()
    }, [E, k]);
    let W = {
        "--custom-edge-fade-width": `var(--space-${a})`
    };
    return (0, i.jsxs)("div", {
        ref: B,
        role: null != x ? "region" : void 0,
        "aria-label": x,
        style: W,
        className: s()(m.kL, g),
        children: [T && (0, i.jsxs)("div", {
            className: m.o1,
            role: "group",
            children: [(0, i.jsx)("div", {
                className: s()(m.x6, {
                    [m.r9]: !P && p
                }),
                children: (0, i.jsx)(o.K0, {
                    icon: o.Zge,
                    size: A,
                    variant: "overlay-secondary",
                    onClick: G,
                    disabled: !P,
                    "aria-label": _.intl.string(_.t.FQx1Ru),
                    "aria-hidden": !P && p,
                    "aria-controls": h
                })
            }), (0, i.jsx)("div", {
                className: s()(m.x6, {
                    [m.r9]: !M && p
                }),
                children: (0, i.jsx)(o.K0, {
                    icon: o.KS6,
                    size: A,
                    variant: "overlay-secondary",
                    onClick: H,
                    disabled: !M,
                    "aria-label": _.intl.string(_.t.H4hwjn),
                    "aria-hidden": !M && p,
                    "aria-controls": h
                })
            })]
        }), (0, i.jsx)(o.BJc, {
            direction: "horizontal",
            gap: n,
            id: h,
            "aria-label": x,
            ref: w,
            className: s()(m.Y_, {
                [m.jL]: P,
                [m.w6]: M,
                [m.XG]: P && M,
                [m.DY]: E
            }),
            tabIndex: 0,
            onFocus: e => {
                let t = w.current;
                if (null != t) {
                    if (e.preventDefault(), (null == v.current || v.current >= t.childElementCount) && L(), -1 !== t.tabIndex) {
                        let e = v?.current ?? 0,
                            n = t.children[e];
                        null != n && (n.focus(), n.setAttribute("tabIndex", "0"), v.current = e, k())
                    }
                    t.setAttribute("tabIndex", "-1")
                }
            },
            onBlur: e => {
                e.preventDefault(), F()
            },
            onKeyDown: e => {
                let t = w.current;
                if (null == t) return;
                let n = t.children,
                    i = v.current ?? 0,
                    r = n[i];
                null != r && r.setAttribute("tabIndex", "-1");
                let a = ["ArrowLeft"],
                    s = ["ArrowRight"];
                if ([...a, ...s].includes(e.key))
                    if (e.preventDefault(), a.includes(e.key) && (i = Math.max(0, i - 1)), s.includes(e.key) && (i = Math.min(t.childElementCount - 1, i + 1)), null != (r = n[i])) {
                        r.setAttribute("tabIndex", "0"), t.setAttribute("tabIndex", "-1"), r.focus({
                            preventScroll: !0
                        });
                        let e = r.offsetLeft - t.clientWidth / 2 + r.offsetWidth / 2,
                            n = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                        N.current = n, n !== t.scrollLeft && (C.current = !0, R.current = !0, t.scrollTo({
                            left: n,
                            behavior: j ? "auto" : "smooth"
                        }), t.addEventListener("scrollend", () => {
                            C.current = !1, R.current = !1
                        }, {
                            once: !0
                        })), v.current = i, k()
                    } else t.setAttribute("tabIndex", "0"), L()
            },
            onScroll: e => {
                C.current || (N.current = e.target.scrollLeft, U())
            },
            children: I
        })]
    })
}