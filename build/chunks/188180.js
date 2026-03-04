/** chunk id: 188180, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    X: () => p
});
var r = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(837381),
    o = n(397927),
    c = n(199966),
    u = n(963935),
    d = n(894858),
    _ = n(942596),
    m = n(362205),
    g = n(71862);

function b(e) {
    let {
        tag: t,
        onClick: n,
        active: a,
        node: i,
        visibleContent: l,
        panelKey: c,
        listItemProps: u,
        children: d
    } = e, {
        icon: m,
        StronglyDiscouragedCustomComponent: b,
        trailing: p,
        useTitle: h,
        variant: f = "default"
    } = i, x = h?.(), y = function(e) {
        switch (e) {
            case "default":
                return "currentColor";
            case "destructive":
                return "text-feedback-critical"
        }
    }(f), C = function(e) {
        switch (e) {
            case "default":
                return "currentColor";
            case "destructive":
                return o.LU0.colors.ICON_FEEDBACK_CRITICAL
        }
    }(f);
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": c,
        className: g.DB,
        children: [(0, r.jsxs)(o.DUT, {
            ...u,
            className: s()(g.AS, {
                [g.vu]: a,
                [g.RD]: "destructive" === f
            }),
            onClick: n,
            children: [null != b ? (0, r.jsx)(b, {}) : (0, r.jsxs)("div", {
                className: g.Ly,
                children: [(0, r.jsx)(m, {
                    color: C,
                    size: "refresh_sm",
                    className: g.Kk
                }), (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: y,
                    children: x
                })]
            }), null != p && (0, r.jsx)("div", {
                className: g.Ly,
                children: (0, r.jsx)(_.Z, {
                    trailing: p,
                    visibleContent: l,
                    isSelected: a
                })
            })]
        }), d]
    })
}

function p(e) {
    let {
        node: t,
        visibleContent: n,
        hoisted: i = !1
    } = e, s = a.useMemo(() => t.layout[0], [t]), o = d.A.useField("currentPanelKey"), {
        accessibleDirectory: _
    } = (0, c._)(), g = a.useMemo(() => {
        if (null == o) return !1;
        let e = _.entry(o);
        return e?.parentSidebarItemKey === t.key
    }, [o, t.key, _]), p = a.useMemo(() => {
        if (null == s || !(0, u.Iu)(s.layout)) return null;
        let e = s.layout.filter(e => null != e.useTitle || null != e.useSubnavLabel);
        return e.length > 1 ? e : null
    }, [s]), h = null != s ? () => {
        let e = o === s.key && null != p ? p[0].key : s.key;
        d.A.setState({
            requestedTargetKey: e,
            disableSidebarScrollAnimate: !1,
            showNavigationMobile: !1
        })
    } : t.onClick, f = a.useMemo(() => g && null != p ? (0, r.jsx)(m.A, {
        categories: p
    }) : null, [g, p]), x = i ? "li" : "div";
    return i ? (0, r.jsx)(b, {
        tag: x,
        panelKey: s?.key,
        onClick: h,
        active: g,
        node: t,
        visibleContent: n,
        children: f
    }) : (0, r.jsx)(l.tG, {
        id: t.key,
        children: e => (0, r.jsx)(b, {
            tag: x,
            panelKey: s?.key,
            onClick: h,
            active: g,
            node: t,
            visibleContent: n,
            listItemProps: e,
            children: f
        })
    })
}