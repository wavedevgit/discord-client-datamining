/** chunk id: 188180 params = (module,exports,require) **/
"use strict";
n.d(t, {
    X: () => y
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(837381),
    o = n(397927),
    c = n(199966),
    u = n(963935),
    d = n(894858),
    h = n(272053),
    _ = n(189857),
    f = n(674085),
    m = n(215566),
    p = n(362205),
    b = n(825104);

function g(e) {
    let {
        tag: t,
        onClick: n,
        active: a,
        node: s,
        dismissibleBadge: c,
        panelKey: u,
        listItemProps: d,
        children: h
    } = e, {
        icon: _,
        StronglyDiscouragedCustomComponent: p,
        usePersistentBadge: g,
        useTitle: y,
        variant: v = "default"
    } = s, x = y?.(), E = function(e) {
        switch (e) {
            case "default":
                return "currentColor";
            case "destructive":
                return "text-feedback-critical"
        }
    }(v), A = function(e) {
        switch (e) {
            case "default":
                return "currentColor";
            case "destructive":
                return o.LU0.colors.ICON_FEEDBACK_CRITICAL
        }
    }(v), S = g?.(a), N = i.useMemo(() => null != c ? a ? null : (0, r.jsx)(f.A, {
        badge: c
    }) : null != S ? (0, r.jsx)(m.A, {
        badge: S
    }) : void 0, [a, c, S]);
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": u,
        className: b.DB,
        children: [(0, r.jsxs)(o.DUT, {
            ...d,
            className: l()(b.AS, {
                [b.vu]: a,
                [b.RD]: "destructive" === v
            }),
            onClick: n,
            children: [null != p ? (0, r.jsx)(p, {}) : (0, r.jsxs)("div", {
                className: b.Ly,
                children: [(0, r.jsx)(_, {
                    color: A,
                    size: "refresh_sm",
                    className: b.Kk
                }), (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: E,
                    children: x
                })]
            }), N]
        }), h]
    })
}

function y(e) {
    let {
        node: t,
        visibleContent: n,
        dismissibleBadges: a,
        hoisted: l = !1
    } = e, o = i.useMemo(() => t.layout[0], [t]), f = d.A.useField("currentPanelKey"), {
        accessibleDirectory: m
    } = (0, c._)(), b = i.useMemo(() => {
        if (null == f) return !1;
        let e = m.entry(f);
        return e?.parentSidebarItemKey === t.key
    }, [f, t.key, m]), y = i.useMemo(() => {
        if (null == o || !(0, u.Iu)(o.layout)) return null;
        let e = o.layout.filter(u.bJ);
        return e.length > 1 ? e : null
    }, [o]), v = null != o ? () => {
        let e = f === o.key && null != y ? y[0].key : o.key;
        h.A.navigate(e, {
            animateSidebarScroll: !0,
            showNavigationMobile: !1
        })
    } : t.onClick, x = i.useMemo(() => b && null != y ? (0, r.jsx)(p.A, {
        categories: y,
        visibleContent: n,
        dismissibleBadges: a
    }) : null, [b, y, n, a]), E = l ? "li" : "div", A = i.useMemo(() => (0, _.H)(t.key, n, a), [t.key, n, a]);
    return l ? (0, r.jsx)(g, {
        tag: E,
        panelKey: o?.key,
        onClick: v,
        active: b,
        node: t,
        dismissibleBadge: A,
        children: x
    }) : (0, r.jsx)(s.tG, {
        id: t.key,
        children: e => (0, r.jsx)(g, {
            tag: E,
            panelKey: o?.key,
            onClick: v,
            active: b,
            node: t,
            dismissibleBadge: A,
            listItemProps: e,
            children: x
        })
    })
}