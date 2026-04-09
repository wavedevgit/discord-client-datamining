/** chunk id: 188180 params = (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => g,
    X: () => x
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(837381),
    o = n(397927),
    u = n(199966),
    c = n(963935),
    d = n(894858),
    h = n(272053),
    m = n(189857),
    f = n(674085),
    p = n(215566),
    v = n(362205),
    y = n(640096);
let g = "refresh_sm";

function _(e) {
    let {
        tag: t,
        onClick: n,
        active: i,
        node: s,
        dismissibleBadge: u,
        panelKey: c,
        listItemProps: d,
        children: h
    } = e, {
        icon: m,
        StronglyDiscouragedCustomComponent: v,
        usePersistentBadge: _,
        useTitle: x,
        variant: E = "default"
    } = s, A = x?.(), S = function(e) {
        switch (e) {
            case "default":
                return "currentColor";
            case "destructive":
                return "text-feedback-critical"
        }
    }(E), b = function(e) {
        switch (e) {
            case "default":
                return "currentColor";
            case "destructive":
                return o.LU0.colors.ICON_FEEDBACK_CRITICAL
        }
    }(E), N = _?.(i), j = l.useMemo(() => null != u ? i ? null : (0, r.jsx)(f.A, {
        badge: u
    }) : null != N ? (0, r.jsx)(p.A, {
        badge: N
    }) : void 0, [i, u, N]);
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": c,
        className: y.DB,
        children: [(0, r.jsxs)(o.DUT, {
            ...d,
            className: a()(y.AS, {
                [y.vu]: i,
                [y.RD]: "destructive" === E
            }),
            onClick: n,
            children: [null != v ? (0, r.jsx)(v, {}) : (0, r.jsxs)("div", {
                className: y.Ly,
                children: [(0, r.jsx)(m, {
                    color: b,
                    size: g,
                    className: y.Kk
                }), (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: S,
                    children: A
                })]
            }), j]
        }), h]
    })
}

function x(e) {
    let {
        node: t,
        visibleContent: n,
        dismissibleBadges: i,
        hoisted: a = !1
    } = e, o = l.useMemo(() => t.layout[0], [t]), f = d.A.useField("currentPanelKey"), {
        accessibleDirectory: p
    } = (0, u._)(), y = l.useMemo(() => {
        if (null == f) return !1;
        let e = p.entry(f);
        return e?.parentSidebarItemKey === t.key
    }, [f, t.key, p]), g = l.useMemo(() => {
        if (null == o || !(0, c.Iu)(o.layout)) return null;
        let e = o.layout.filter(c.bJ);
        return e.length > 1 ? e : null
    }, [o]), x = null != o ? () => {
        let e = f === o.key && null != g ? g[0].key : o.key;
        h.A.navigate(e, {
            animateSidebarScroll: !0,
            showNavigationMobile: !1
        })
    } : t.onClick, E = null != f, A = l.useMemo(() => null != g && E ? (0, r.jsx)(v.A, {
        active: y,
        categories: g,
        visibleContent: n,
        dismissibleBadges: i
    }) : null, [y, g, n, i, E]), S = a ? "li" : "div", b = l.useMemo(() => (0, m.H)(t.key, n, i), [t.key, n, i]);
    return a ? (0, r.jsx)(_, {
        tag: S,
        panelKey: o?.key,
        onClick: x,
        active: y,
        node: t,
        dismissibleBadge: b,
        children: A
    }) : (0, r.jsx)(s.tG, {
        id: t.key,
        children: e => (0, r.jsx)(_, {
            tag: S,
            panelKey: o?.key,
            onClick: x,
            active: y,
            node: t,
            dismissibleBadge: b,
            listItemProps: e,
            children: A
        })
    })
}