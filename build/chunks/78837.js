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
    m = n(590089),
    _ = n(747625);

function g(e) {
    let {
        ref: t,
        title: n,
        collapsedSubtitle: l,
        isExpanded: g,
        onExpandedChange: x,
        children: A,
        animate: h = !0
    } = e, p = s.useRef(null), [f, T] = s.useState(null), S = g && null != f;
    return s.useLayoutEffect(() => {
        null != p.current && null == f && T(p.current.clientHeight)
    }, [f]), (0, i.jsxs)(r.EN, {
        ref: t,
        isExpanded: g,
        onExpandedChange: x,
        children: [(0, i.jsx)(m.U, {
            ref: p,
            style: null != f ? {
                minHeight: f
            } : void 0,
            title: n,
            description: S ? void 0 : l,
            trailingElement: (0, i.jsx)(u.vN3, {
                children: (0, i.jsx)(o.$, {
                    slot: "trigger",
                    className: _.bW,
                    children: (0, i.jsx)(d.ChevronLargeUpIcon, {
                        className: a()(_.Kk, {
                            [_.kX]: !g
                        }),
                        color: c.A.colors.ICON_STRONG
                    })
                })
            }),
            onClick: () => x(!g)
        }), (0, i.jsx)(r.kS, {
            className: a()(_.nd, {
                [_.t5]: !h
            }),
            children: (0, i.jsx)(u.BJc, {
                gap: 16,
                padding: {
                    top: 16
                },
                children: A
            })
        })]
    })
}