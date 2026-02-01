/** chunk id: 188180, original params: e,t,n (module,exports,require) **/
n.d(t, {
    X: () => f
});
var r = n(627968),
    o = n(64700),
    a = n(503698),
    i = n.n(a),
    l = n(837381),
    c = n(397927),
    s = n(963935),
    u = n(894858),
    _ = n(942596),
    d = n(362205),
    b = n(71862);

function p(e) {
    var t, n;
    let {
        tag: o,
        onClick: a,
        active: l,
        node: s,
        visibleContent: u,
        panelKey: d,
        listItemProps: p,
        children: f
    } = e, {
        icon: y,
        StronglyDiscouragedCustomComponent: g,
        trailing: m,
        useTitle: O
    } = s, h = null == O ? void 0 : O();
    return (0, r.jsxs)(o, {
        "data-settings-sidebar-item": d,
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
            className: i()(b.AS, {
                [b.vu]: l
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
                children: (0, r.jsx)(_.Z, {
                    trailing: m,
                    visibleContent: u,
                    isSelected: l
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
    } = e, i = o.useMemo(() => t.layout[0], [t]), c = u.A.useField("currentPanelKey"), _ = null != c && c === (null == i ? void 0 : i.key), b = o.useMemo(() => {
        if (null == i || !(0, s.Iu)(i.layout)) return null;
        let e = i.layout.filter(e => null != e.useTitle || null != e.useSubnavLabel);
        return e.length > 1 ? e : null
    }, [i]), f = null != i ? () => {
        let e = c === i.key && null != b ? b[0].key : i.key;
        u.A.setState({
            requestedTargetKey: e,
            showNavigationMobile: !1
        })
    } : t.onClick, y = o.useMemo(() => _ && null != b ? (0, r.jsx)(d.A, {
        categories: b
    }) : null, [_, b]), g = a ? "li" : "div";
    return a ? (0, r.jsx)(p, {
        tag: g,
        panelKey: null == i ? void 0 : i.key,
        onClick: f,
        active: _,
        node: t,
        visibleContent: n,
        children: y
    }) : (0, r.jsx)(l.tG, {
        id: t.key,
        children: e => (0, r.jsx)(p, {
            tag: g,
            panelKey: null == i ? void 0 : i.key,
            onClick: f,
            active: _,
            node: t,
            visibleContent: n,
            listItemProps: e,
            children: y
        })
    })
}