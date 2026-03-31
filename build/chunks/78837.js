/** chunk id: 78837 params = (module,exports,require) **/
n.d(t, {
    f: () => _
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
    g = n(147032);

function _(e) {
    let {
        ref: t,
        title: n,
        collapsedSubtitle: l,
        isExpanded: _,
        onExpandedChange: A,
        children: x,
        animate: h = !0
    } = e, p = s.useRef(null), [T, f] = s.useState(null), E = _ && null != T;
    return s.useLayoutEffect(() => {
        null != p.current && null == T && f(p.current.clientHeight)
    }, [T]), (0, i.jsxs)(r.EN, {
        ref: t,
        isExpanded: _,
        onExpandedChange: A,
        children: [(0, i.jsx)(m.U, {
            ref: p,
            style: null != T ? {
                minHeight: T
            } : void 0,
            title: n,
            description: E ? void 0 : l,
            trailingElement: (0, i.jsx)(u.vN3, {
                children: (0, i.jsx)(o.$, {
                    slot: "trigger",
                    className: g.bW,
                    children: (0, i.jsx)(d.ChevronLargeUpIcon, {
                        className: a()(g.Kk, {
                            [g.kX]: !_
                        }),
                        color: c.A.colors.ICON_STRONG
                    })
                })
            }),
            onClick: () => A(!_)
        }), (0, i.jsx)(r.kS, {
            className: a()(g.nd, {
                [g.t5]: !h
            }),
            children: (0, i.jsx)(u.BJc, {
                gap: 16,
                padding: {
                    top: 16
                },
                children: x
            })
        })]
    })
}