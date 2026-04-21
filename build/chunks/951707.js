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
    } = e, x = r.useId(), h = r.useRef(0), b = r.useRef(0), R = r.useRef(0), C = r.useRef(!1), N = r.useRef(!1), v = r.useRef(null), E = r.useRef(null), T = (0, o.bG)([u.A], () => u.A.keyboardModeEnabled), j = (0, o.bG)([u.A], () => u.A.useReducedMotion), I = r.useMemo(() => r.Children.map(t, e => r.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : r.cloneElement(e, {
        tabIndex: -1
    }) : e), [t]), [S, y] = r.useState(!1), [M, O] = r.useState(!1), [P, D] = r.useState(!0), L = () => {
        y(b.current > h.current)
    }, U = r.useCallback(() => {
        if (N.current) return null;
        let e = G.current;
        if (null == e) return null;
        let t = Math.floor((R.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)),
            n = Math.max(0, Math.min(e.childElementCount - 1, t));
        return v.current = n, n
    }, []), k = r.useCallback(() => {
        let e = G.current;
        null != e && (O(R.current > 0), D(R.current + e.clientWidth < e.scrollWidth), U())
    }, [U]), w = r.useCallback(() => {
        let e = G.current;
        if (null == e) return;
        let t = v.current;
        Array.from(e.children).forEach((e, n) => {
            Array.from(e.children).forEach(e => {
                T && n !== t ? e.setAttribute("inert", "true") : e.removeAttribute("inert")
            })
        })
    }, [T]), B = (0, d.w)(e => {
        let {
            contentRect: t
        } = e;
        h.current = t.width, null != G.current && (R.current = G.current?.scrollLeft), L(), k(), w()
    }), G = r.useRef(null);
    r.useEffect(() => {
        let e = G.current;
        if (null == e) return;
        let t = new ResizeObserver(() => {
            b.current = e.scrollWidth, e.scrollLeft !== R.current && (e.scrollLeft = R.current), L(), k()
        });
        Array.from(e.children).forEach(e => {
            t.observe(e)
        });
        let n = new MutationObserver(() => {
            t.disconnect(), Array.from(e.children).forEach(e => {
                t.observe(e)
            }), null != E.current && E.current >= e.childElementCount && (E.current = null)
        });
        return n.observe(e, {
            childList: !0
        }), e.addEventListener("scrollend", k), () => {
            t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", k)
        }
    }, [k]);
    let V = r.useMemo(() => (0, l.throttle)(() => {
            let e = G.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, n = Math.max(0, t - h.current);
            R.current = n, C.current = !0, e.scrollTo({
                left: n,
                behavior: j ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => C.current = !1, {
                once: !0
            }), k();
            let i = U();
            null != i && (E.current = i)
        }, 200), [h, k, U, j]),
        H = r.useMemo(() => (0, l.throttle)(() => {
            let e = G.current;
            if (null == e) return;
            let {
                scrollLeft: t
            } = e, n = t + h.current;
            R.current = n, C.current = !0, e.scrollTo({
                left: n,
                behavior: j ? "auto" : "smooth"
            }), e.addEventListener("scrollend", () => C.current = !1, {
                once: !0
            }), k();
            let i = U();
            null != i && (E.current = i)
        }, 200), [h, k, U, j]),
        F = r.useCallback(() => {
            let e = G.current;
            if (null == e) return !1;
            for (let t of e.children)
                if (t.contains(document.activeElement)) return !0;
            return !1
        }, []),
        z = r.useCallback(() => {
            setTimeout(() => {
                if (!F()) {
                    let e = G.current;
                    if (null != e) {
                        for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
                        w()
                    }
                }
            }, 10)
        }, [F, w]);
    r.useEffect(() => {
        w()
    }, [T, w]);
    let W = {
        "--custom-edge-fade-width": `var(--space-${a})`
    };
    return (0, i.jsxs)("div", {
        ref: B,
        role: null != f ? "region" : void 0,
        "aria-label": f,
        style: W,
        className: s()(m.kL, A),
        children: [S && (0, i.jsxs)("div", {
            className: m.o1,
            role: "group",
            children: [(0, i.jsx)("div", {
                className: s()(m.x6, {
                    [m.r9]: !M && p
                }),
                children: (0, i.jsx)(c.K0, {
                    icon: c.Zge,
                    size: g,
                    variant: "overlay-secondary",
                    onClick: V,
                    disabled: !M,
                    "aria-label": _.intl.string(_.t.FQx1Ru),
                    "aria-hidden": !M && p,
                    "aria-controls": x
                })
            }), (0, i.jsx)("div", {
                className: s()(m.x6, {
                    [m.r9]: !P && p
                }),
                children: (0, i.jsx)(c.K0, {
                    icon: c.KS6,
                    size: g,
                    variant: "overlay-secondary",
                    onClick: H,
                    disabled: !P,
                    "aria-label": _.intl.string(_.t.H4hwjn),
                    "aria-hidden": !P && p,
                    "aria-controls": x
                })
            })]
        }), (0, i.jsx)(c.BJc, {
            direction: "horizontal",
            gap: n,
            id: x,
            "aria-label": f,
            ref: G,
            className: s()(m.Y_, {
                [m.jL]: M,
                [m.w6]: P,
                [m.XG]: M && P,
                [m.DY]: T
            }),
            tabIndex: 0,
            onFocus: e => {
                let t = G.current;
                if (null != t) {
                    if (e.preventDefault(), (null == v.current || v.current >= t.childElementCount) && U(), -1 !== t.tabIndex) {
                        let e = E.current,
                            n = (null != e && e < t.childElementCount ? e : null) ?? 0,
                            i = t.children[n];
                        null != i && (i.focus(), i.setAttribute("tabIndex", "0"), v.current = n, w())
                    }
                    t.setAttribute("tabIndex", "-1")
                }
            },
            onBlur: e => {
                e.preventDefault(), z()
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
                        R.current = n, n !== t.scrollLeft && (C.current = !0, N.current = !0, t.scrollTo({
                            left: n,
                            behavior: j ? "auto" : "smooth"
                        }), t.addEventListener("scrollend", () => {
                            C.current = !1, N.current = !1
                        }, {
                            once: !0
                        })), v.current = i, E.current = i, w()
                    } else t.setAttribute("tabIndex", "0"), U()
            },
            onScroll: e => {
                C.current || (R.current = e.target.scrollLeft, k())
            },
            children: I
        })]
    })
}