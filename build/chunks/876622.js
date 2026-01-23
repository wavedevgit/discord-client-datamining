/** Chunk was on 28636 **/
/** chunk id: 876622, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(3666),
    o = n(397927),
    c = n(770178),
    d = n(124589),
    u = n(985018),
    p = n(55092);

function h(e) {
    let {
        onTabSelect: t,
        tabs: n,
        selectedTab: i
    } = e, s = l.useMemo(() => null != n.find(e => {
        let {
            id: t
        } = e;
        return t === i
    }), [i, n]), [c, h] = l.useState(!1), m = function(e) {
        let {
            selected: t,
            isHovered: n
        } = e;
        return n ? "text-strong" : t ? "text-brand" : "text-default"
    }({
        selected: s,
        isHovered: c
    }), g = function(e) {
        let {
            selected: t,
            isHovered: n
        } = e;
        return n ? o.LU0.colors.TEXT_STRONG : t ? o.LU0.colors.TEXT_BRAND : o.LU0.colors.INTERACTIVE_TEXT_DEFAULT
    }({
        selected: s,
        isHovered: c
    }), _ = l.useCallback(() => h(!0), []), b = l.useCallback(() => h(!1), []), f = l.useRef(null);
    return (0, r.jsx)(o.YNO, {
        targetElementRef: f,
        renderPopout: e => {
            let {
                closePopout: l
            } = e;
            return (0, r.jsx)(d.A, {
                selectedTab: i,
                onClose: l,
                tabs: n,
                onTabSelect: t
            })
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            var n, l;
            let {
                isShown: i
            } = t;
            return (0, r.jsx)(o.VQ0.Item, (n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }({}, e), l = l = {
                id: "more",
                look: "brand",
                selectedItem: s ? "more" : void 0,
                className: a()(p.Mf, {
                    [p.wH]: !1
                }),
                clickableRef: e => {
                    null != e && null != e.ref && (f.current = e.ref)
                },
                "aria-label": u.intl.string(u.t["UKOtz+"]),
                children: (0, r.jsxs)("div", {
                    className: p.OS,
                    onMouseEnter: _,
                    onMouseLeave: b,
                    children: [(0, r.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: m,
                        children: u.intl.string(u.t["UKOtz+"])
                    }), i ? (0, r.jsx)(o.tN5, {
                        size: "xs",
                        color: g
                    }) : (0, r.jsx)(o.abt, {
                        size: "xs",
                        color: g
                    })]
                })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(l)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
            }), n))
        }
    })
}

function m(e) {
    let {
        className: t,
        selectedTab: n,
        tabs: i,
        onTabSelect: d,
        onAvailableWidthChange: u
    } = e, [m, g] = l.useState(0), _ = l.useRef(m), {
        lastVisibleIndex: b,
        onItemLayout: f,
        overflowItemsRef: x,
        itemWidthsRef: v
    } = (0, s.Wv)({
        items: i,
        itemGapPx: 20,
        maxLines: 1,
        containerWidth: m
    }), j = l.useMemo(() => i.slice(0, b + 1), [b, i]), A = l.useMemo(() => i.slice(b + 1), [b, i]), y = l.useRef(null), C = l.useCallback(e => {
        let t = e.contentRect.width;
        if (null == t || _.current === t) return;
        g(t), _.current = t;
        let n = v.current.reduce((e, t, n) => e + t + 20 * (0 !== n));
        null == u || u(t - n)
    }, [v, u]);
    (0, c.g)(y, C);
    let O = 0 !== m;
    return (0, r.jsxs)("div", {
        className: a()(p.kL, t),
        ref: y,
        children: [(0, r.jsxs)("div", {
            className: p.Kk,
            children: [i.map((e, t) => (0, r.jsx)(s.Ae, {
                index: t,
                onItemLayout: f,
                children: (0, r.jsx)(o.VQ0.Item, {
                    id: e.id,
                    "aria-label": e.label,
                    className: p.Mf,
                    children: (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        children: e.label
                    })
                })
            }, e.id)), (0, r.jsx)("div", {
                ref: x,
                children: (0, r.jsx)(h, {
                    tabs: A,
                    onTabSelect: d,
                    selectedTab: n
                })
            })]
        }), O && (0, r.jsxs)(o.VQ0, {
            type: "top",
            look: "brand",
            selectedItem: n,
            onItemSelect: d,
            className: p.vR,
            children: [j.map(e => (0, r.jsx)(o.VQ0.Item, {
                id: e.id,
                look: "brand",
                "aria-label": e.label,
                className: p.Mf,
                children: e.label
            }, e.id)), 0 !== A.length ? (0, r.jsx)(h, {
                tabs: A,
                onTabSelect: d,
                selectedTab: n
            }) : null]
        })]
    })
}