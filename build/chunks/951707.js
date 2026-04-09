/** chunk id: 951707 params = (module,exports,require) **/
a.d(t, {
    A: () => m
});
var l = a(627968),
    r = a(64700),
    n = a(503698),
    s = a.n(n),
    i = a(735438),
    o = a(311907),
    d = a(732955),
    c = a(770178),
    u = a(775602),
    x = a(985018),
    h = a(669046);
let m = e => {
    let {
        children: t,
        gap: a = 24,
        edgeFade: n = "xl",
        hideActionsWhenDisabled: m = !0,
        className: b,
        iconButtonSize: p,
        "aria-label": g
    } = e, f = r.useId(), j = r.useRef(0), v = r.useRef(0), y = r.useRef(0), k = r.useRef(!1), A = r.useRef(!1), _ = r.useRef(null), S = (0, o.bG)([u.A], () => u.A.keyboardModeEnabled), C = (0, o.bG)([u.A], () => u.A.useReducedMotion), I = r.useMemo(() => r.Children.map(t, e => r.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : r.cloneElement(e, {
        tabIndex: -1
    }) : e), [t]), [T, w] = r.useState(!1), [V, E] = r.useState(!1), [L, M] = r.useState(!0), R = () => {
        w(v.current > j.current)
    }, O = r.useCallback(() => {
        if (A.current) return;
        let e = F.current;
        if (null == e) return;
        let t = Math.floor((y.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount));
        _.current = Math.max(0, Math.min(e.childElementCount - 1, t))
    }, []), P = r.useCallback(() => {
        let e = F.current;
        null != e && (E(y.current > 0), M(y.current + e.clientWidth < e.scrollWidth), O())
    }, [O]), B = r.useCallback(() => {
        let e = F.current;
        if (null == e) return;
        let t = _.current;
        Array.from(e.children).forEach((e, a) => {
            Array.from(e.children).forEach(e => {
                S && a !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert")
            })
        })
    }, [S]), H = (0, c.w)(e => {
        let {
            contentRect: t
        } = e;
        j.current = t.width, null != F.current && (y.current = F.current?.scrollLeft), R(), P(), B()
    }), F = r.useRef(null);
    r.useEffect(() => {
        let e = F.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            v.current = e.scrollWidth, e.scrollLeft !== y.current && (e.scrollLeft = y.current), R(), P()
        });
        Array.from(e.children).forEach(e => {
            t.observe(e)
        });
        let a = new MutationObserver(() => {
            t.disconnect(), Array.from(e.children).forEach(e => {
                t.observe(e)
            })
        });
        return a.observe(e, {
            childList: !0
        }), e.addEventListener("scrollend", P), () => {
            t.disconnect(), a.disconnect(), e.removeEventListener("scrollend", P)
        }
    }, [P]);
    let N = r.useMemo(() => (0, i.throttle)(() => {
            let e = F.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, a = Math.max(0, t - j.current);
            y.current = a, k.current = !0, e.scrollTo({
                left: a,
                behavior: C ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => k.current = !1, {
                once: !0
            }), P()
        }, 200), [j, P, C]),
        D = r.useMemo(() => (0, i.throttle)(() => {
            let e = F.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, a = t + j.current;
            y.current = a, k.current = !0, e.scrollTo({
                left: a,
                behavior: C ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => k.current = !1, {
                once: !0
            }), P()
        }, 200), [j, P, C]),
        G = r.useCallback(() => {
            let e = F.current;
            if (null == e) return !1;
            for (let t of e.children)
                if (t.contains(document.activeElement)) return !0;
            return !1
        }, []),
        z = r.useCallback(() => {
            setTimeout(() => {
                if (!G()) {
                    let e = F.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        B()
                    }
                }
            }, 10)
        }, [G, B]);
    r.useEffect(() => {
        B()
    }, [S, B]);
    let W = {
        "--custom-edge-fade-width": `var(--space-${n})`
    };
    return (0, l.jsxs)("div", {
        ref: H,
        role: null != g ? "region" : void 0,
        "aria-label": g,
        style: W,
        className: s()(h.kL, b),
        children: [T && (0, l.jsxs)("div", {
            className: h.o1,
            role: "group",
            children: [(0, l.jsx)("div", {
                className: s()(h.x6, {
                    [h.r9]: !V && m
                }),
                children: (0, l.jsx)(d.K0, {
                    icon: d.Zge,
                    size: p,
                    variant: "overlay-secondary",
                    onClick: N,
                    disabled: !V,
                    "aria-label": x.intl.string(x.t.FQx1Ru),
                    "aria-hidden": !V && m,
                    "aria-controls": f
                })
            }), (0, l.jsx)("div", {
                className: s()(h.x6, {
                    [h.r9]: !L && m
                }),
                children: (0, l.jsx)(d.K0, {
                    icon: d.KS6,
                    size: p,
                    variant: "overlay-secondary",
                    onClick: D,
                    disabled: !L,
                    "aria-label": x.intl.string(x.t.H4hwjn),
                    "aria-hidden": !L && m,
                    "aria-controls": f
                })
            })]
        }), (0, l.jsx)(d.BJc, {
            direction: "horizontal",
            gap: a,
            id: f,
            "aria-label": g,
            ref: F,
            className: s()(h.Y_, {
                [h.jL]: V,
                [h.w6]: L,
                [h.XG]: V && L,
                [h.DY]: S
            }),
            tabIndex: 0,
            onFocus: e => {
                let t = F.current;
                if (null != t) {
                    if (e.preventDefault(), (null == _.current || _.current >= t.childElementCount) && O(), -1 !== t.tabIndex) {
                        let e = _?.current ?? 0,
                            a = t.children[e];
                        null != a && (a.focus(), a.setAttribute("tabIndex", "0"), _.current = e, B())
                    }
                    t.setAttribute("tabIndex", "-1")
                }
            },
            onBlur: e => {
                e.preventDefault(), z()
            },
            onKeyDown: e => {
                let t = F.current;
                if (null == t) return;
                let a = t.children,
                    l = _.current ?? 0,
                    r = a[l];
                null != r && r.setAttribute("tabIndex", "-1");
                let n = ["ArrowLeft"],
                    s = ["ArrowRight"];
                if ([...n, ...s].includes(e.key))
                    if (e.preventDefault(), n.includes(e.key) && (l = Math.max(0, l - 1)), s.includes(e.key) && (l = Math.min(t.childElementCount - 1, l + 1)), null != (r = a[l])) {
                        r.setAttribute("tabIndex", "0"), t.setAttribute("tabIndex", "-1"), r.focus({
                            preventScroll: !0
                        });
                        let e = r.offsetLeft - t.clientWidth / 2 + r.offsetWidth / 2,
                            a = Math.max(0, Math.min(t.scrollWidth - t.clientWidth, e));
                        y.current = a, a !== t.scrollLeft && (k.current = !0, A.current = !0, t.scrollTo({
                            left: a,
                            behavior: C ? "auto" : "smooth"
                        }), t.addEventListener("scrollend", () => {
                            k.current = !1, A.current = !1
                        }, {
                            once: !0
                        })), _.current = l, B()
                    } else t.setAttribute("tabIndex", "0"), O()
            },
            onScroll: e => {
                k.current || (y.current = e.target.scrollLeft, P())
            },
            children: I
        })]
    })
}