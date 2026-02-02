/** chunk id: 188180, original params: e,t,n (module,exports,require) **/
n.d(t, {
    X: () => f
});
var r = n(627968),
    o = n(64700),
    a = n(503698),
    l = n.n(a),
    i = n(837381),
    c = n(397927),
    s = n(963935),
    u = n(894858),
    d = n(942596),
    _ = n(362205),
    b = n(71862);

function p(e) {
    var t, n;
    let {
        tag: o,
        onClick: a,
        active: i,
        node: s,
        visibleContent: u,
        panelKey: _,
        listItemProps: p,
        children: f
    } = e, {
        icon: y,
        StronglyDiscouragedCustomComponent: g,
        trailing: m,
        useTitle: O
    } = s, h = null == O ? void 0 : O();
    return (0, r.jsxs)(o, {
        "data-settings-sidebar-item": _,
        className: b.DB,
        children: [(0, r.jsxs)(c.DUT, (t = function(e) {
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
        }({}, p), n = n = {
            className: l()(b.AS, {
                [b.vu]: i
            }),
            onClick: a,
            children: [null != g ? (0, r.jsx)(g, {}) : (0, r.jsxs)("div", {
                className: b.Ly,
                children: [(0, r.jsx)(y, {
                    color: "currentColor",
                    size: "refresh_sm",
                    className: b.Kk
                }), (0, r.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "currentColor",
                    children: h
                })]
            }), null != m && (0, r.jsx)("div", {
                className: b.Ly,
                children: (0, r.jsx)(d.Z, {
                    trailing: m,
                    visibleContent: u,
                    isSelected: i
                })
            })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t)), f]
    })
}

function f(e) {
    let {
        node: t,
        visibleContent: n,
        hoisted: a = !1
    } = e, l = o.useMemo(() => t.layout[0], [t]), c = u.A.useField("currentPanelKey"), d = null != c && c === (null == l ? void 0 : l.key), b = o.useMemo(() => {
        if (null == l || !(0, s.Iu)(l.layout)) return null;
        let e = l.layout.filter(e => null != e.useTitle || null != e.useSubnavLabel);
        return e.length > 1 ? e : null
    }, [l]), f = null != l ? () => {
        let e = c === l.key && null != b ? b[0].key : l.key;
        u.A.setState({
            requestedTargetKey: e,
            showNavigationMobile: !1
        })
    } : t.onClick, y = o.useMemo(() => d && null != b ? (0, r.jsx)(_.A, {
        categories: b
    }) : null, [d, b]), g = a ? "li" : "div";
    return a ? (0, r.jsx)(p, {
        tag: g,
        panelKey: null == l ? void 0 : l.key,
        onClick: f,
        active: d,
        node: t,
        visibleContent: n,
        children: y
    }) : (0, r.jsx)(i.tG, {
        id: t.key,
        children: e => (0, r.jsx)(p, {
            tag: g,
            panelKey: null == l ? void 0 : l.key,
            onClick: f,
            active: d,
            node: t,
            visibleContent: n,
            listItemProps: e,
            children: y
        })
    })
}