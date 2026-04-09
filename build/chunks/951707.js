/** chunk id: 951707 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n(311907),
    u = n(732955),
    c = n(770178),
    d = n(775602),
    h = n(985018),
    m = n(911365);
let f = e => {
    let {
        children: t,
        gap: n = 24,
        edgeFade: i = "xl",
        hideActionsWhenDisabled: f = !0,
        className: p,
        iconButtonSize: v,
        "aria-label": y
    } = e, g = l.useId(), _ = l.useRef(0), x = l.useRef(0), E = l.useRef(0), A = l.useRef(!1), S = l.useRef(!1), b = l.useRef(null), N = (0, o.bG)([d.A], () => d.A.keyboardModeEnabled), j = (0, o.bG)([d.A], () => d.A.useReducedMotion), C = l.useMemo(() => l.Children.map(t, e => l.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : l.cloneElement(e, {
        tabIndex: -1
    }) : e), [t]), [R, I] = l.useState(!1), [T, w] = l.useState(!1), [k, L] = l.useState(!0), O = () => {
        I(x.current > _.current)
    }, D = l.useCallback(() => {
        if (S.current) return;
        let e = U.current;
        if (null == e) return;
        let t = Math.floor((E.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
        b.current = Math.max(0, Math.min(e.childElementCount - 1, t))
    }, []), M = l.useCallback(() => {
        let e = U.current;
        null != e && (w(E.current > 0), L(E.current + e.clientWidth < e.scrollWidth), D())
    }, [D]), F = l.useCallback(() => {
        let e = U.current;
        if (null == e) return;
        let t = b.current;
        Array.from(e.children).forEach((e, n) => {
            Array.from(e.children).forEach(e => {
                N && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert")
            })
        })
    }, [N]), P = (0, c.w)(e => {
        let {
            contentRect: t
        } = e;
        _.current = t.width, null != U.current && (E.current = U.current?.scrollLeft), O(), M(), F()
    }), U = l.useRef(null);
    l.useEffect(() => {
        let e = U.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            x.current = e.scrollWidth, e.scrollLeft !== E.current && (e.scrollLeft = E.current), O(), M()
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
        }), e.addEventListener("scrollend", M), () => {
            t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", M)
        }
    }, [M]);
    let G = l.useMemo(() => (0, s.throttle)(() => {
            let e = U.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, n = Math.max(0, t - _.current);
            E.current = n, A.current = !0, e.scrollTo({
                left: n,
                behavior: j ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => A.current = !1, {
                once: !0
            }), M()
        }, 200), [_, M, j]),
        B = l.useMemo(() => (0, s.throttle)(() => {
            let e = U.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, n = t + _.current;
            E.current = n, A.current = !0, e.scrollTo({
                left: n,
                behavior: j ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => A.current = !1, {
                once: !0
            }), M()
        }, 200), [_, M, j]),
        K = l.useCallback(() => {
            let e = U.current;
            if (null == e) return !1;
            for (let t of e.children)
                if (t.contains(document.activeElement)) return !0;
            return !1
        }, []),
        W = l.useCallback(() => {
            setTimeout(() => {
                if (!K()) {
                    let e = U.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        F()
                    }
                }
            }, 10)
        }, [K, F]);
    l.useEffect(() => {
        F()
    }, [N, F]);
    let z = {
        "--custom-edge-fade-width": `var(--space-${i})`
    };
    return (0, r.jsxs)("div", {
        ref: P,
        role: null != y ? "region" : void 0,
        "aria-label": y,
        style: z,
        className: a()(m.kL, p),
        children: [R && (0, r.jsxs)("div", {
            className: m.o1,
            role: "group",
            children: [(0, r.jsx)("div", {
                className: a()(m.x6, {
                    [m.r9]: !T && f
                }),
                children: (0, r.jsx)(u.K0, {
                    icon: u.Zge,
                    size: v,
                    variant: "overlay-secondary",
                    onClick: G,
                    disabled: !T,
                    "aria-label": h.intl.string(h.t.FQx1Ru),
                    "aria-hidden": !T && f,
                    "aria-controls": g
                })
            }), (0, r.jsx)("div", {
                className: a()(m.x6, {
                    [m.r9]: !k && f
                }),
                children: (0, r.jsx)(u.K0, {
                    icon: u.KS6,
                    size: v,
                    variant: "overlay-secondary",
                    onClick: B,
                    disabled: !k,
                    "aria-label": h.intl.string(h.t.H4hwjn),
                    "aria-hidden": !k && f,
                    "aria-controls": g
                })
            })]
        }), (0, r.jsx)(u.BJc, {
            direction: "horizontal",
            gap: n,
            id: g,
            "aria-label": y,
            ref: U,
            className: a()(m.Y_, {
                [m.jL]: T,
                [m.w6]: k,
                [m.XG]: T && k,
                [m.DY]: N
            }),
            tabIndex: 0,
            onFocus: e => {
                let t = U.current;
                if (null != t) {
                    if (e.preventDefault(), (null == b.current || b.current >= t.childElementCount) && D(), -1 !== t.tabIndex) {
                        let e = b?.current ?? 0,
                            n = t.children[e];
                        null != n && (n.focus(), n.setAttribute("tabIndex", "0"), b.current = e, F())
                    }
                    t.setAttribute("tabIndex", "-1")
                }
            },
            onBlur: e => {
                e.preventDefault(), W()
            },
            onKeyDown: e => {
                let t = U.current;
                if (null == t) return;
                let n = t.children,
                    r = b.current ?? 0,
                    l = n[r];
                null != l && l.setAttribute("tabIndex", "-1");
                let i = ["ArrowLeft"],
                    a = ["ArrowRight"];
                if ([...i, ...a].includes(e.key))
                    if (e.preventDefault(), i.includes(e.key) && (r = Math.max(0, r - 1)), a.includes(e.key) && (r = Math.min(t.childElementCount - 1, r + 1)), null != (l = n[r])) {
                        l.setAttribute("tabIndex", "0"), t.setAttribute("tabIndex", "-1"), l.focus({
                            preventScroll: !0
                        });
                        let e = l.offsetLeft - t.clientWidth / 2 + l.offsetWidth / 2,
                            n = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                        E.current = n, n !== t.scrollLeft && (A.current = !0, S.current = !0, t.scrollTo({
                            left: n,
                            behavior: j ? "auto" : "smooth"
                        }), t.addEventListener("scrollend", () => {
                            A.current = !1, S.current = !1
                        }, {
                            once: !0
                        })), b.current = r, F()
                    } else t.setAttribute("tabIndex", "0"), D()
            },
            onScroll: e => {
                A.current || (E.current = e.target.scrollLeft, M())
            },
            children: C
        })]
    })
}