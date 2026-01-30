/** chunk id: 772577, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(567305),
    c = n(985018),
    u = n(801985);

function d(e) {
    let {
        text: t,
        hasScrolled: n
    } = e;
    return (0, r.jsxs)("div", {
        className: s()(u.kL, {
            [u.sz]: n
        }),
        children: [(0, r.jsx)("div", {
            className: u.lm,
            children: (0, r.jsx)(a.Text, {
                className: u.__invalid_label,
                variant: "text-md/medium",
                color: "text-strong",
                children: t
            })
        }), (0, r.jsx)("div", {
            className: u._p
        })]
    })
}

function h(e) {
    let [t, n] = l.useState(), [i, s] = l.useState(), [a, u] = l.useState(!1), [h, p] = l.useState(!1), {
        enabled: g
    } = (0, o.DN)(e);
    return l.useEffect(() => {
        g && null != t && null != i ? u(t < i) : u(!1)
    }, [g, t, i]), {
        horizontalScrollNotice: l.useMemo(() => a ? (0, r.jsx)(d, {
            text: c.intl.string(c.t.RfAAH9),
            hasScrolled: h
        }) : null, [a, h]),
        handleScroll: () => p(!0),
        handleSetScrollerRef: e => {
            var t;
            return s(null == e || null == (t = e.getScrollerState()) ? void 0 : t.scrollWidth)
        },
        handleSetContainerRef: e => n(null == e ? void 0 : e.clientWidth)
    }
}