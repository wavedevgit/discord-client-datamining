/** chunk id: 78837 params = (module,exports,require) **/
n.d(t, {
    f: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(386181),
    o = n(650682),
    d = n(934551),
    c = n(827734),
    u = n(397927),
    _ = n(590089),
    m = n(747625);

function g(e) {
    let {
        ref: t,
        title: n,
        collapsedSubtitle: l,
        isExpanded: g,
        onExpandedChange: A,
        children: h,
        animate: x = !0
    } = e, p = s.useRef(null), [T, E] = s.useState(null), S = g && null != T;
    return s.useLayoutEffect(() => {
        null != p.current && null == T && E(p.current.clientHeight)
    }, [T]), (0, i.jsxs)(r.EN, {
        ref: t,
        isExpanded: g,
        onExpandedChange: A,
        children: [(0, i.jsx)(_.U, {
            ref: p,
            style: null != T ? {
                minHeight: T
            } : void 0,
            title: n,
            description: S ? void 0 : l,
            trailingElement: (0, i.jsx)(u.vN3, {
                children: (0, i.jsx)(o.$, {
                    slot: "trigger",
                    className: m.bW,
                    children: (0, i.jsx)(d.ChevronLargeUpIcon, {
                        className: a()(m.Kk, {
                            [m.kX]: !g
                        }),
                        color: c.A.colors.ICON_STRONG
                    })
                })
            }),
            onClick: () => A(!g)
        }), (0, i.jsx)(r.kS, {
            className: a()(m.nd, {
                [m.t5]: !x
            }),
            children: (0, i.jsx)(u.BJc, {
                gap: 16,
                padding: {
                    top: 16
                },
                children: h
            })
        })]
    })
}