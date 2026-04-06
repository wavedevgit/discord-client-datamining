/** chunk id: 951707 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(735438),
    o = n(311907),
    u = n(732955),
    c = n(770178),
    d = n(775602),
    h = n(985018),
    m = n(669046);
let f = e => {
    let {
        children: t,
        gap: n = 24,
        edgeFade: l = "xl",
        hideActionsWhenDisabled: f = !0,
        className: p,
        iconButtonSize: _,
        "aria-label": v
    } = e, y = i.useId(), g = i.useRef(0), x = i.useRef(0), E = i.useRef(0), A = i.useRef(!1), S = i.useRef(!1), b = i.useRef(null), N = (0, o.bG)([d.A], () => d.A.keyboardModeEnabled), C = (0, o.bG)([d.A], () => d.A.useReducedMotion), j = i.useMemo(() => i.Children.map(t, e => i.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : i.cloneElement(e, {
        tabIndex: -1
    }) : e), [t]), [R, I] = i.useState(!1), [T, w] = i.useState(!1), [k, L] = i.useState(!0), O = () => {
        I(x.current > g.current)
    }, D = i.useCallback(() => {
        if (S.current) return;
        let e = U.current;
        if (null == e) return;
        let t = Math.floor((E.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
        b.current = Math.max(0, Math.min(e.childElementCount - 1, t))
    }, []), M = i.useCallback(() => {
        let e = U.current;
        null != e && (w(E.current > 0), L(E.current + e.clientWidth < e.scrollWidth), D())
    }, [D]), F = i.useCallback(() => {
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
        g.current = t.width, null != U.current && (E.current = U.current?.scrollLeft), O(), M(), F()
    }), U = i.useRef(null);
    i.useEffect(() => {
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
    let G = i.useMemo(() => (0, s.throttle)(() => {
            let e = U.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, n = Math.max(0, t - g.current);
            E.current = n, A.current = !0, e.scrollTo({
                left: n,
                behavior: C ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => A.current = !1, {
                once: !0
            }), M()
        }, 200), [g, M, C]),
        B = i.useMemo(() => (0, s.throttle)(() => {
            let e = U.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, n = t + g.current;
            E.current = n, A.current = !0, e.scrollTo({
                left: n,
                behavior: C ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => A.current = !1, {
                once: !0
            }), M()
        }, 200), [g, M, C]),
        K = i.useCallback(() => {
            let e = U.current;
            if (null == e) return !1;
            for (let t of e.children)
                if (t.contains(document.activeElement)) return !0;
            return !1
        }, []),
        z = i.useCallback(() => {
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
    i.useEffect(() => {
        F()
    }, [N, F]);
    let W = {
        "--custom-edge-fade-width": `var(--space-${l})`
    };
    return (0, r.jsxs)("div", {
        ref: P,
        role: null != v ? "region" : void 0,
        "aria-label": v,
        style: W,
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
                    size: _,
                    variant: "overlay-secondary",
                    onClick: G,
                    disabled: !T,
                    "aria-label": h.intl.string(h.t.FQx1Ru),
                    "aria-hidden": !T && f,
                    "aria-controls": y
                })
            }), (0, r.jsx)("div", {
                className: a()(m.x6, {
                    [m.r9]: !k && f
                }),
                children: (0, r.jsx)(u.K0, {
                    icon: u.KS6,
                    size: _,
                    variant: "overlay-secondary",
                    onClick: B,
                    disabled: !k,
                    "aria-label": h.intl.string(h.t.H4hwjn),
                    "aria-hidden": !k && f,
                    "aria-controls": y
                })
            })]
        }), (0, r.jsx)(u.BJc, {
            direction: "horizontal",
            gap: n,
            id: y,
            "aria-label": v,
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
                e.preventDefault(), z()
            },
            onKeyDown: e => {
                let t = U.current;
                if (null == t) return;
                let n = t.children,
                    r = b.current ?? 0,
                    i = n[r];
                null != i && i.setAttribute("tabIndex", "-1");
                let l = ["ArrowLeft"],
                    a = ["ArrowRight"];
                if ([...l, ...a].includes(e.key))
                    if (e.preventDefault(), l.includes(e.key) && (r = Math.max(0, r - 1)), a.includes(e.key) && (r = Math.min(t.childElementCount - 1, r + 1)), null != (i = n[r])) {
                        i.setAttribute("tabIndex", "0"), t.setAttribute("tabIndex", "-1"), i.focus({
                            preventScroll: !0
                        });
                        let e = i.offsetLeft - t.clientWidth / 2 + i.offsetWidth / 2,
                            n = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                        E.current = n, n !== t.scrollLeft && (A.current = !0, S.current = !0, t.scrollTo({
                            left: n,
                            behavior: C ? "auto" : "smooth"
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
            children: j
        })]
    })
}