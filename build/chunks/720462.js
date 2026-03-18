/** chunk id: 720462 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(735438),
    c = n(311907),
    o = n(732955),
    d = n(770178),
    u = n(775602),
    m = n(985018),
    x = n(289752);
let h = e => {
    let {
        children: t,
        gap: n = 24,
        edgeFade: i = "xl",
        hideActionsWhenDisabled: h = !0,
        className: f,
        "aria-label": g
    } = e, p = a.useId(), _ = a.useRef(0), v = a.useRef(0), j = a.useRef(0), A = a.useRef(!1), I = a.useRef(!1), E = a.useRef(null), N = (0, c.bG)([u.A], () => u.A.keyboardModeEnabled), b = (0, c.bG)([u.A], () => u.A.useReducedMotion), C = a.useMemo(() => a.Children.map(t, e => a.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : a.cloneElement(e, {
        tabIndex: -1
    }) : e), [t]), [T, S] = a.useState(!1), [L, k] = a.useState(!1), [y, G] = a.useState(!0), R = () => {
        S(v.current > _.current)
    }, O = a.useCallback(() => {
        if (I.current) return;
        let e = P.current;
        if (null == e) return;
        let t = Math.floor((j.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
        E.current = Math.max(0, Math.min(e.childElementCount - 1, t))
    }, []), M = a.useCallback(() => {
        let e = P.current;
        null != e && (k(j.current > 0), G(j.current + e.clientWidth < e.scrollWidth), O())
    }, [O]), w = a.useCallback(() => {
        let e = P.current;
        if (null == e) return;
        let t = E.current;
        Array.from(e.children).forEach((e, n) => {
            Array.from(e.children).forEach(e => {
                N && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert")
            })
        })
    }, [N]), D = (0, d.w)(e => {
        let {
            contentRect: t
        } = e;
        _.current = t.width, null != P.current && (j.current = P.current?.scrollLeft), R(), M(), w()
    }), P = a.useRef(null);
    a.useEffect(() => {
        let e = P.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            v.current = e.scrollWidth, e.scrollLeft !== j.current && (e.scrollLeft = j.current), R(), M()
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
    let V = a.useMemo(() => (0, s.throttle)(() => {
            let e = P.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, n = Math.max(0, t - _.current);
            j.current = n, A.current = !0, e.scrollTo({
                left: n,
                behavior: b ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => A.current = !1, {
                once: !0
            }), M()
        }, 200), [_, M, b]),
        Y = a.useMemo(() => (0, s.throttle)(() => {
            let e = P.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, n = t + _.current;
            j.current = n, A.current = !0, e.scrollTo({
                left: n,
                behavior: b ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => A.current = !1, {
                once: !0
            }), M()
        }, 200), [_, M, b]),
        W = a.useCallback(() => {
            let e = P.current;
            if (null == e) return !1;
            for (let t of e.children)
                if (t.contains(document.activeElement)) return !0;
            return !1
        }, []),
        U = a.useCallback(() => {
            setTimeout(() => {
                if (!W()) {
                    let e = P.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        w()
                    }
                }
            }, 10)
        }, [W, w]);
    a.useEffect(() => {
        w()
    }, [N, w]);
    let F = {
        "--custom-edge-fade-width": `var(--space-${i})`
    };
    return (0, l.jsxs)("div", {
        ref: D,
        role: null != g ? "region" : void 0,
        "aria-label": g,
        style: F,
        className: r()(x.kL, f),
        children: [T && (0, l.jsxs)("div", {
            className: x.o1,
            role: "group",
            children: [(0, l.jsx)("div", {
                className: r()(x.x6, {
                    [x.r9]: !L && h
                }),
                children: (0, l.jsx)(o.K0, {
                    icon: o.Zge,
                    variant: "overlay-secondary",
                    onClick: V,
                    disabled: !L,
                    "aria-label": m.intl.string(m.t.FQx1Ru),
                    "aria-hidden": !L && h,
                    "aria-controls": p
                })
            }), (0, l.jsx)("div", {
                className: r()(x.x6, {
                    [x.r9]: !y && h
                }),
                children: (0, l.jsx)(o.K0, {
                    icon: o.KS6,
                    variant: "overlay-secondary",
                    onClick: Y,
                    disabled: !y,
                    "aria-label": m.intl.string(m.t.H4hwjn),
                    "aria-hidden": !y && h,
                    "aria-controls": p
                })
            })]
        }), (0, l.jsx)(o.BJc, {
            direction: "horizontal",
            gap: n,
            id: p,
            "aria-label": g,
            ref: P,
            className: r()(x.Y_, {
                [x.jL]: L,
                [x.w6]: y,
                [x.XG]: L && y,
                [x.DY]: N
            }),
            tabIndex: 0,
            onFocus: e => {
                let t = P.current;
                if (null != t) {
                    if (e.preventDefault(), O(), -1 !== t.tabIndex) {
                        let e = E?.current ?? 0,
                            n = t.children[e];
                        null != n && (n.focus(), n.setAttribute("tabIndex", "0"), E.current = e, w())
                    }
                    t.setAttribute("tabIndex", "-1")
                }
            },
            onBlur: e => {
                e.preventDefault(), U()
            },
            onKeyDown: e => {
                let t = P.current;
                if (null == t) return;
                let n = t.children,
                    l = E.current ?? 0,
                    a = n[l];
                null != a && a.setAttribute("tabIndex", "-1");
                let i = ["ArrowLeft"],
                    r = ["ArrowRight"];
                if ([...i, ...r].includes(e.key))
                    if (e.preventDefault(), i.includes(e.key) && (l = Math.max(0, l - 1)), r.includes(e.key) && (l = Math.min(t.childElementCount - 1, l + 1)), null != (a = n[l])) {
                        a.setAttribute("tabIndex", "0"), t.setAttribute("tabIndex", "-1"), a.focus({
                            preventScroll: !0
                        });
                        let e = a.offsetLeft - t.clientWidth / 2 + a.offsetWidth / 2,
                            n = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                        j.current = n, n !== t.scrollLeft && (A.current = !0, I.current = !0, t.scrollTo({
                            left: n,
                            behavior: b ? "auto" : "smooth"
                        }), t.addEventListener("scrollend", () => {
                            A.current = !1, I.current = !1
                        }, {
                            once: !0
                        })), E.current = l, w()
                    } else t.setAttribute("tabIndex", "0"), O()
            },
            onScroll: e => {
                A.current || (j.current = e.target.scrollLeft, M())
            },
            children: C
        })]
    })
}