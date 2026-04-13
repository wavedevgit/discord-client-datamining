/** chunk id: 362205 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    u = n(294426),
    c = n(942381),
    d = n(837381),
    h = n(935399),
    p = n(319354),
    _ = n(397927),
    m = n(775602),
    f = n(253932),
    g = n(894858),
    y = n(272053),
    v = n(397274),
    S = n(189857),
    E = n(674085),
    x = n(188180),
    A = n(890690),
    b = n(480270);

function N(e) {
    let {
        category: t,
        onClick: n,
        active: i,
        dismissibleBadge: a
    } = e, {
        useTitle: l,
        useSubnavLabel: u,
        key: c
    } = t, h = l?.(), p = u?.() ?? h;
    return o()(null != p, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(d.tG, {
        id: c,
        children: e => (0, r.jsxs)(_.DUT, {
            onClick: n,
            className: s()(b.AS, {
                [b.vu]: i
            }),
            ...e,
            children: [p, null != a && !i && (0, r.jsx)(E.A, {
                badge: a
            })]
        }, c)
    })
}

function C(e) {
    let {
        active: t,
        categories: n,
        visibleContent: a,
        dismissibleBadges: s
    } = e, [l, o] = i.useState(() => {
        let e = g.A.getField("currentCategoryKey"),
            t = n.find(t => t.key === e);
        return t?.key ?? n[0].key
    }), [u, d] = i.useState(t);
    i.useEffect(() => g.A.subscribe(e => {
        let {
            currentCategoryKey: t
        } = e;
        return t
    }, e => {
        let r = t ? n.find(t => t.key === e) : null;
        null != r && (d(!0), o(r.key))
    }, {
        equalityFn: c.x,
        fireImmediately: !0
    }), [n, t]);
    let h = i.useMemo(() => Math.max(n.findIndex(e => e.key === l), 0), [n, l]);
    i.useEffect(() => {
        if (!t) {
            let e = p.current;
            null != e && (e.style.height = `${e.scrollHeight}px`, window.getComputedStyle(e).height, e.style.height = "0", Promise.allSettled(e.getAnimations().map(e => e.finished)).then(() => {
                d(!1)
            }))
        }
    }, [t]);
    let p = i.useRef(null),
        [_, m] = i.useState(t ? "auto" : "0");
    return (0, A.u)(n, t), (0, r.jsx)("div", {
        className: b.lK,
        style: {
            height: _,
            opacity: +!!t
        },
        ref: p,
        children: u && (0, r.jsx)(j, {
            index: h,
            activeKey: l,
            categories: n,
            visibleContent: a,
            dismissibleBadges: s,
            onMount: function() {
                let e = p.current;
                null != e && (e.style.height = `${e.scrollHeight}px`, Promise.all(e.getAnimations().map(e => e.finished)).then(() => {
                    e.style.height = "auto", v.A.scrollSidebarNodeIntoView(e, {
                        animate: !0,
                        block: "nearest"
                    })
                }).catch(() => {}))
            }
        })
    })
}

function j(e) {
    let {
        index: t,
        activeKey: n,
        categories: a,
        visibleContent: s,
        dismissibleBadges: l,
        onMount: o
    } = e, {
        thumbRef: c,
        trackRef: d,
        thumbAnchorRef: g,
        springs: v
    } = function(e) {
        let t = f.Xi.useSetting(),
            n = i.useRef(null),
            r = i.useRef(null),
            a = i.useRef(null),
            s = i.useRef(!0),
            l = i.useRef(t),
            [o, u] = (0, _.zhh)(() => ({
                y: 0,
                height: 0,
                config: {
                    mass: .1,
                    friction: 20,
                    tension: 300
                }
            }));
        return i.useLayoutEffect(() => {
            let e = l.current !== t,
                i = () => {
                    if (null == n.current || null == r.current || null == a.current) return;
                    let [i, c] = [n.current.getBoundingClientRect(), a.current.getBoundingClientRect()], d = i.width / 2, h = (c.y - i.y) / d, p = c.height / d;
                    s.current || e || m.A.useReducedMotion ? (o.y.set(h), o.height.set(p)) : u({
                        y: h,
                        height: p
                    }), s.current = !1, l.current = t
                },
                c = null;
            return e ? c = requestAnimationFrame(() => {
                c = null, i()
            }) : i(), () => {
                null != c && cancelAnimationFrame(c)
            }
        }, [e, u, o.y, o.height, t]), {
            thumbRef: r,
            trackRef: n,
            thumbAnchorRef: a,
            springs: o
        }
    }(t);
    return (0, h.Ay)(o), (0, r.jsxs)("div", {
        className: b.o8,
        role: "list",
        style: {
            "--custom-nav-count": a.length,
            "--custom-nav-index": t,
            "--custom-nav-width": "2px",
            "--custom-icon-size": `${p.E[x.V]}px`
        },
        children: [(0, r.jsx)("div", {
            className: b.u4,
            "aria-hidden": "true",
            ref: d,
            children: (0, r.jsx)(u.animated.div, {
                className: b.FF,
                style: v,
                ref: c
            })
        }), (0, r.jsx)("div", {
            className: b.gu,
            "aria-hidden": "true",
            ref: g
        }), a.map(e => {
            let t = (0, S.H)(e.key, s, l);
            return (0, r.jsx)(N, {
                onClick: () => {
                    var t;
                    return t = e.key, void y.A.navigate(t, {
                        showNavigationMobile: !1
                    })
                },
                active: e.key === n,
                category: e,
                dismissibleBadge: t
            }, e.key)
        })]
    })
}