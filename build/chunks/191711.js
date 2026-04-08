/** chunk id: 191711 params = (module,exports,require) **/
a.d(t, {
    A: () => h,
    H: () => m
});
var n, i = a(627968),
    l = a(64700),
    s = a(503698),
    r = a.n(s),
    o = a(397927),
    c = a(773669),
    d = a(212812);

function u(e) {
    let {
        items: t,
        onClose: a,
        onSelect: n,
        selected: l,
        ...s
    } = e;
    return (0, i.jsx)(o.W1t, {
        "data-menu-migrated-auto": !0,
        className: d.MK,
        navId: "global-discovery-search-filter-options",
        "aria-label": s["aria-label"],
        hideScroller: !0,
        onClose: a,
        onSelect: a,
        children: (0, i.jsx)(o.rXV, {
            children: t.map(e => {
                let {
                    id: t,
                    name: a,
                    count: s
                } = e;
                return (0, i.jsx)(o.Drp, {
                    id: t,
                    label: a,
                    subtext: s.toLocaleString(c.default.locale),
                    icon: t === l ? o.yr3 : void 0,
                    leadingAccessory: t === l ? {
                        type: "icon",
                        icon: o.yr3
                    } : void 0,
                    action: () => n(t)
                }, t)
            })
        }, "overflow-tabs")
    })
}
var m = ((n = {}).FILLED = "FILLED", n.TRANSPARENT = "TRANSPARENT", n);

function h(e) {
    let {
        items: t,
        title: a,
        onSelect: n,
        selected: s,
        variant: c = "TRANSPARENT",
        ...m
    } = e, h = l.useRef(null), p = l.useMemo(() => (function(e) {
        switch (e) {
            case "FILLED":
                return d.PC;
            case "TRANSPARENT":
                return
        }
    })(c), [c]);
    return (0, i.jsx)(o.YNO, {
        targetElementRef: h,
        renderPopout: e => {
            let {
                closePopout: a
            } = e;
            return (0, i.jsx)(u, {
                selected: s,
                onClose: a,
                items: t,
                onSelect: n,
                "aria-label": m["aria-label"]
            })
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let {
                isShown: n
            } = t;
            return (0, i.jsxs)("div", {
                ...e,
                ref: h,
                className: r()(d.pb, p),
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-text-default",
                    children: a
                }), n ? (0, i.jsx)(o.tN5, {
                    size: "xs",
                    color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT
                }) : (0, i.jsx)(o.abt, {
                    size: "xs",
                    color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT
                })]
            })
        }
    })
}