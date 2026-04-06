/** chunk id: 362205 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(284009),
    o = n.n(s),
    c = n(687498),
    u = n(942381),
    d = n(837381),
    h = n(935399),
    m = n(319354),
    f = n(397927),
    p = n(775602),
    _ = n(253932),
    v = n(894858),
    y = n(272053),
    g = n(397274),
    x = n(189857),
    E = n(674085),
    A = n(188180),
    S = n(890690),
    b = n(480270);

function N(e) {
    let {
        category: t,
        onClick: n,
        active: i,
        dismissibleBadge: l
    } = e, {
        useTitle: s,
        useSubnavLabel: c,
        key: u
    } = t, h = s?.(), m = c?.() ?? h;
    return o()(null != m, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(d.tG, {
        id: u,
        children: e => (0, r.jsxs)(f.DUT, {
            onClick: n,
            className: a()(b.AS, {
                [b.vu]: i
            }),
            ...e,
            children: [m, null != l && !i && (0, r.jsx)(E.A, {
                badge: l
            })]
        }, u)
    })
}

function C(e) {
    let {
        active: t,
        categories: n,
        visibleContent: l,
        dismissibleBadges: a
    } = e, [s, o] = i.useState(() => {
        let e = v.A.getField("currentCategoryKey"),
            t = n.find(t => t.key === e);
        return t?.key ?? n[0].key
    }), [c, d] = i.useState(t);
    i.useEffect(() => v.A.subscribe(e => {
        let {
            currentCategoryKey: t
        } = e;
        return t
    }, e => {
        let r = t ? n.find(t => t.key === e) : null;
        null != r && (d(!0), o(r.key))
    }, {
        equalityFn: u.x,
        fireImmediately: !0
    }), [n, t]);
    let h = i.useMemo(() => Math.max(n.findIndex(e => e.key === s), 0), [n, s]);
    i.useEffect(() => {
        if (!t) {
            let e = m.current;
            null != e && (e.style.height = `${e.scrollHeight}px`, window.getComputedStyle(e).height, e.style.height = "0", Promise.allSettled(e.getAnimations().map(e => e.finished)).then(() => {
                d(!1)
            }))
        }
    }, [t]);
    let m = i.useRef(null),
        [f, p] = i.useState(t ? "auto" : "0");
    return (0, S.u)(n, t), (0, r.jsx)("div", {
        className: b.lK,
        style: {
            height: f,
            opacity: +!!t
        },
        ref: m,
        children: c && (0, r.jsx)(j, {
            index: h,
            activeKey: s,
            categories: n,
            visibleContent: l,
            dismissibleBadges: a,
            onMount: function() {
                let e = m.current;
                null != e && (e.style.height = `${e.scrollHeight}px`, Promise.all(e.getAnimations().map(e => e.finished)).then(() => {
                    e.style.height = "auto", g.A.scrollSidebarNodeIntoView(e, {
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
        categories: l,
        visibleContent: a,
        dismissibleBadges: s,
        onMount: o
    } = e, {
        thumbRef: u,
        trackRef: d,
        thumbAnchorRef: v,
        springs: g
    } = function(e) {
        let t = _.Xi.useSetting(),
            n = i.useRef(null),
            r = i.useRef(null),
            l = i.useRef(null),
            a = i.useRef(!0),
            s = i.useRef(t),
            [o, c] = (0, f.zhh)(() => ({
                y: 0,
                height: 0,
                config: {
                    mass: .1,
                    friction: 20,
                    tension: 300
                }
            }));
        return i.useLayoutEffect(() => {
            let e = s.current !== t,
                i = () => {
                    if (null == n.current || null == r.current || null == l.current) return;
                    let [i, u] = [n.current.getBoundingClientRect(), l.current.getBoundingClientRect()], d = i.width / 2, h = (u.y - i.y) / d, m = u.height / d;
                    a.current || e || p.A.useReducedMotion ? (o.y.set(h), o.height.set(m)) : c({
                        y: h,
                        height: m
                    }), a.current = !1, s.current = t
                },
                u = null;
            return e ? u = requestAnimationFrame(() => {
                u = null, i()
            }) : i(), () => {
                null != u && cancelAnimationFrame(u)
            }
        }, [e, c, o.y, o.height, t]), {
            thumbRef: r,
            trackRef: n,
            thumbAnchorRef: l,
            springs: o
        }
    }(t);
    return (0, h.Ay)(o), (0, r.jsxs)("div", {
        className: b.o8,
        role: "list",
        style: {
            "--custom-nav-count": l.length,
            "--custom-nav-index": t,
            "--custom-nav-width": "2px",
            "--custom-icon-size": `${m.E[A.V]}px`
        },
        children: [(0, r.jsx)("div", {
            className: b.u4,
            "aria-hidden": "true",
            ref: d,
            children: (0, r.jsx)(c.animated.div, {
                className: b.FF,
                style: g,
                ref: u
            })
        }), (0, r.jsx)("div", {
            className: b.gu,
            "aria-hidden": "true",
            ref: v
        }), l.map(e => {
            let t = (0, x.H)(e.key, a, s);
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