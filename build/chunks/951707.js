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
    m = n(669046);
let p = e => {
    let {
        children: t,
        gap: n = 24,
        edgeFade: a = "xl",
        hideActionsWhenDisabled: p = !0,
        className: g,
        iconButtonSize: A,
        "aria-label": f
    } = e, h = r.useId(), b = r.useRef(0), x = r.useRef(0), C = r.useRef(0), N = r.useRef(!1), R = r.useRef(!1), v = r.useRef(null), E = (0, o.bG)([u.A], () => u.A.keyboardModeEnabled), I = (0, o.bG)([u.A], () => u.A.useReducedMotion), T = r.useMemo(() => r.Children.map(t, e => r.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : r.cloneElement(e, {
        tabIndex: -1
    }) : e), [t]), [j, S] = r.useState(!1), [M, P] = r.useState(!1), [y, O] = r.useState(!0), D = () => {
        S(x.current > b.current)
    }, L = r.useCallback(() => {
        if (R.current) return;
        let e = G.current;
        if (null == e) return;
        let t = Math.floor((C.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
        v.current = Math.max(0, Math.min(e.childElementCount - 1, t))
    }, []), U = r.useCallback(() => {
        let e = G.current;
        null != e && (P(C.current > 0), O(C.current + e.clientWidth < e.scrollWidth), L())
    }, [L]), k = r.useCallback(() => {
        let e = G.current;
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
        b.current = t.width, null != G.current && (C.current = G.current?.scrollLeft), D(), U(), k()
    }), G = r.useRef(null);
    r.useEffect(() => {
        let e = G.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            x.current = e.scrollWidth, e.scrollLeft !== C.current && (e.scrollLeft = C.current), D(), U()
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
    let w = r.useMemo(() => (0, l.throttle)(() => {
            let e = G.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, n = Math.max(0, t - b.current);
            C.current = n, N.current = !0, e.scrollTo({
                left: n,
                behavior: I ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => N.current = !1, {
                once: !0
            }), U()
        }, 200), [b, U, I]),
        V = r.useMemo(() => (0, l.throttle)(() => {
            let e = G.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, n = t + b.current;
            C.current = n, N.current = !0, e.scrollTo({
                left: n,
                behavior: I ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => N.current = !1, {
                once: !0
            }), U()
        }, 200), [b, U, I]),
        H = r.useCallback(() => {
            let e = G.current;
            if (null == e) return !1;
            for (let t of e.children)
                if (t.contains(document.activeElement)) return !0;
            return !1
        }, []),
        W = r.useCallback(() => {
            setTimeout(() => {
                if (!H()) {
                    let e = G.current;
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
        className: s()(m.kL, g),
        children: [j && (0, i.jsxs)("div", {
            className: m.o1,
            role: "group",
            children: [(0, i.jsx)("div", {
                className: s()(m.x6, {
                    [m.r9]: !M && p
                }),
                children: (0, i.jsx)(c.K0, {
                    icon: c.Zge,
                    size: A,
                    variant: "overlay-secondary",
                    onClick: w,
                    disabled: !M,
                    "aria-label": _.intl.string(_.t.FQx1Ru),
                    "aria-hidden": !M && p,
                    "aria-controls": h
                })
            }), (0, i.jsx)("div", {
                className: s()(m.x6, {
                    [m.r9]: !y && p
                }),
                children: (0, i.jsx)(c.K0, {
                    icon: c.KS6,
                    size: A,
                    variant: "overlay-secondary",
                    onClick: V,
                    disabled: !y,
                    "aria-label": _.intl.string(_.t.H4hwjn),
                    "aria-hidden": !y && p,
                    "aria-controls": h
                })
            })]
        }), (0, i.jsx)(c.BJc, {
            direction: "horizontal",
            gap: n,
            id: h,
            "aria-label": f,
            ref: G,
            className: s()(m.Y_, {
                [m.jL]: M,
                [m.w6]: y,
                [m.XG]: M && y,
                [m.DY]: E
            }),
            tabIndex: 0,
            onFocus: e => {
                let t = G.current;
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
                e.preventDefault(), W()
            },
            onKeyDown: e => {
                let t = G.current;
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
                        C.current = n, n !== t.scrollLeft && (N.current = !0, R.current = !0, t.scrollTo({
                            left: n,
                            behavior: I ? "auto" : "smooth"
                        }), t.addEventListener("scrollend", () => {
                            N.current = !1, R.current = !1
                        }, {
                            once: !0
                        })), v.current = i, k()
                    } else t.setAttribute("tabIndex", "0"), L()
            },
            onScroll: e => {
                N.current || (C.current = e.target.scrollLeft, U())
            },
            children: T
        })]
    })
}