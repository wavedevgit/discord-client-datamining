/** chunk id: 951707 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(735438),
    o = n(311907),
    c = n(732955),
    d = n(770178),
    u = n(775602),
    _ = n(985018),
    m = n(576998);
let p = e => {
    let {
        children: t,
        gap: n = 24,
        edgeFade: a = "xl",
        hideActionsWhenDisabled: p = !0,
        className: A,
        iconButtonSize: g,
        "aria-label": f
    } = e, h = r.useId(), b = r.useRef(0), x = r.useRef(0), R = r.useRef(0), C = r.useRef(!1), N = r.useRef(!1), v = r.useRef(null), E = (0, o.bG)([u.A], () => u.A.keyboardModeEnabled), T = (0, o.bG)([u.A], () => u.A.useReducedMotion), j = r.useMemo(() => r.Children.map(t, e => r.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : r.cloneElement(e, {
        tabIndex: -1
    }) : e), [t]), [I, S] = r.useState(!1), [y, M] = r.useState(!1), [O, P] = r.useState(!0), D = () => {
        S(x.current > b.current)
    }, L = r.useCallback(() => {
        if (N.current) return;
        let e = w.current;
        if (null == e) return;
        let t = Math.floor((R.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
        v.current = Math.max(0, Math.min(e.childElementCount - 1, t))
    }, []), U = r.useCallback(() => {
        let e = w.current;
        null != e && (M(R.current > 0), P(R.current + e.clientWidth < e.scrollWidth), L())
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
        b.current = t.width, null != w.current && (R.current = w.current?.scrollLeft), D(), U(), k()
    }), w = r.useRef(null);
    r.useEffect(() => {
        let e = w.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            x.current = e.scrollWidth, e.scrollLeft !== R.current && (e.scrollLeft = R.current), D(), U()
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
            } = e, n = Math.max(0, t - b.current);
            R.current = n, C.current = !0, e.scrollTo({
                left: n,
                behavior: T ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => C.current = !1, {
                once: !0
            }), U()
        }, 200), [b, U, T]),
        V = r.useMemo(() => (0, l.throttle)(() => {
            let e = w.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, n = t + b.current;
            R.current = n, C.current = !0, e.scrollTo({
                left: n,
                behavior: T ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => C.current = !1, {
                once: !0
            }), U()
        }, 200), [b, U, T]),
        H = r.useCallback(() => {
            let e = w.current;
            if (null == e) return !1;
            for (let t of e.children)
                if (t.contains(document.activeElement)) return !0;
            return !1
        }, []),
        z = r.useCallback(() => {
            setTimeout(() => {
                if (!H()) {
                    let e = w.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        k()
                    }
                }
            }, 10)
        }, [H, k]);
    r.useEffect(() => {
        k()
    }, [E, k]);
    let F = {
        "--custom-edge-fade-width": `var(--space-${a})`
    };
    return (0, i.jsxs)("div", {
        ref: B,
        role: null != f ? "region" : void 0,
        "aria-label": f,
        style: F,
        className: s()(m.kL, A),
        children: [I && (0, i.jsxs)("div", {
            className: m.o1,
            role: "group",
            children: [(0, i.jsx)("div", {
                className: s()(m.x6, {
                    [m.r9]: !y && p
                }),
                children: (0, i.jsx)(c.K0, {
                    icon: c.Zge,
                    size: g,
                    variant: "overlay-secondary",
                    onClick: G,
                    disabled: !y,
                    "aria-label": _.intl.string(_.t.FQx1Ru),
                    "aria-hidden": !y && p,
                    "aria-controls": h
                })
            }), (0, i.jsx)("div", {
                className: s()(m.x6, {
                    [m.r9]: !O && p
                }),
                children: (0, i.jsx)(c.K0, {
                    icon: c.KS6,
                    size: g,
                    variant: "overlay-secondary",
                    onClick: V,
                    disabled: !O,
                    "aria-label": _.intl.string(_.t.H4hwjn),
                    "aria-hidden": !O && p,
                    "aria-controls": h
                })
            })]
        }), (0, i.jsx)(c.BJc, {
            direction: "horizontal",
            gap: n,
            id: h,
            "aria-label": f,
            ref: w,
            className: s()(m.Y_, {
                [m.jL]: y,
                [m.w6]: O,
                [m.XG]: y && O,
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
                e.preventDefault(), z()
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
                        R.current = n, n !== t.scrollLeft && (C.current = !0, N.current = !0, t.scrollTo({
                            left: n,
                            behavior: T ? "auto" : "smooth"
                        }), t.addEventListener("scrollend", () => {
                            C.current = !1, N.current = !1
                        }, {
                            once: !0
                        })), v.current = i, k()
                    } else t.setAttribute("tabIndex", "0"), L()
            },
            onScroll: e => {
                C.current || (R.current = e.target.scrollLeft, U())
            },
            children: j
        })]
    })
}