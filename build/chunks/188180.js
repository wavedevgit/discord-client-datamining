/** chunk id: 188180 params = (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => y,
    X: () => x
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(397927),
    u = n(199966),
    c = n(963935),
    d = n(894858),
    h = n(272053),
    m = n(189857),
    p = n(674085),
    f = n(215566),
    _ = n(362205),
    g = n(710515);
let y = "refresh_sm";

function v(e) {
    let {
        tag: t,
        onClick: n,
        active: a,
        node: l,
        dismissibleBadge: u,
        panelKey: c,
        listItemProps: d,
        children: h
    } = e, {
        icon: m,
        StronglyDiscouragedCustomComponent: _,
        usePersistentBadge: v,
        useTitle: x,
        variant: S = "default"
    } = l, E = x?.(), A = function(e) {
        switch (e) {
            case "default":
                return "currentColor";
            case "destructive":
                return "text-feedback-critical"
        }
    }(S), N = function(e) {
        switch (e) {
            case "default":
                return "currentColor";
            case "destructive":
                return o.LU0.colors.ICON_FEEDBACK_CRITICAL
        }
    }(S), b = v?.(a), j = i.useMemo(() => null != u ? a ? null : (0, r.jsx)(p.A, {
        badge: u
    }) : null != b ? (0, r.jsx)(f.A, {
        badge: b
    }) : void 0, [a, u, b]);
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": c,
        className: g.DB,
        children: [(0, r.jsxs)(o.DUT, {
            ...d,
            className: s()(g.AS, {
                [g.vu]: a,
                [g.RD]: "destructive" === S
            }),
            onClick: n,
            children: [null != _ ? (0, r.jsx)(_, {}) : (0, r.jsxs)("div", {
                className: g.Ly,
                children: [(0, r.jsx)(m, {
                    color: N,
                    size: y,
                    className: g.Kk
                }), (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: A,
                    children: E
                })]
            }), j]
        }), h]
    })
}

function x(e) {
    let {
        node: t,
        visibleContent: n,
        dismissibleBadges: a,
        hoisted: s = !1
    } = e, o = i.useMemo(() => t.layout[0], [t]), p = d.A.useField("currentPanelKey"), {
        accessibleDirectory: f
    } = (0, u._)(), g = i.useMemo(() => {
        if (null == p) return !1;
        let e = f.entry(p);
        return e?.parentSidebarItemKey === t.key
    }, [p, t.key, f]), y = i.useMemo(() => {
        if (null == o || !(0, c.Iu)(o.layout)) return null;
        let e = o.layout.filter(c.bJ);
        return e.length > 1 ? e : null
    }, [o]), x = null != o ? () => {
        let e = p === o.key && null != y ? y[0].key : o.key;
        h.A.navigate(e, {
            animateSidebarScroll: !0,
            showNavigationMobile: !1
        })
    } : t.onClick, S = null != p, E = i.useMemo(() => null != y && S ? (0, r.jsx)(_.A, {
        active: g,
        categories: y,
        visibleContent: n,
        dismissibleBadges: a
    }) : null, [g, y, n, a, S]), A = s ? "li" : "div", N = i.useMemo(() => (0, m.H)(t.key, n, a), [t.key, n, a]);
    return s ? (0, r.jsx)(v, {
        tag: A,
        panelKey: o?.key,
        onClick: x,
        active: g,
        node: t,
        dismissibleBadge: N,
        children: E
    }) : (0, r.jsx)(l.tG, {
        id: t.key,
        children: e => (0, r.jsx)(v, {
            tag: A,
            panelKey: o?.key,
            onClick: x,
            active: g,
            node: t,
            dismissibleBadge: N,
            listItemProps: e,
            children: E
        })
    })
}