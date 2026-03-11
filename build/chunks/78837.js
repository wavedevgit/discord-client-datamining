/** chunk id: 78837 params = (module,exports,require) **/
n.d(t, {
    f: () => A
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
    g = n(747625);

function A(e) {
    let {
        ref: t,
        title: n,
        collapsedSubtitle: l,
        isExpanded: A,
        onExpandedChange: m,
        children: h,
        animate: p = !0
    } = e, x = s.useRef(null), [E, T] = s.useState(null), S = A && null != E;
    return s.useLayoutEffect(() => {
        null != x.current && null == E && T(x.current.clientHeight)
    }, [E]), (0, i.jsxs)(r.EN, {
        ref: t,
        isExpanded: A,
        onExpandedChange: m,
        children: [(0, i.jsx)(_.U, {
            ref: x,
            style: null != E ? {
                minHeight: E
            } : void 0,
            title: n,
            description: S ? void 0 : l,
            trailingElement: (0, i.jsx)(u.vN3, {
                children: (0, i.jsx)(o.$, {
                    slot: "trigger",
                    className: g.bW,
                    children: (0, i.jsx)(d.ChevronLargeUpIcon, {
                        className: a()(g.Kk, {
                            [g.kX]: !A
                        }),
                        color: c.A.colors.ICON_STRONG
                    })
                })
            }),
            onClick: () => m(!A)
        }), (0, i.jsx)(r.kS, {
            className: a()(g.nd, {
                [g.t5]: !p
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