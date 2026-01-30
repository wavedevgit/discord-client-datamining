/** chunk id: 78837, original params: e,t,n (module,exports,require) **/
n.d(t, {
    f: () => A
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(735438),
    o = n(386181),
    c = n(650682),
    d = n(934551),
    u = n(827734),
    _ = n(397927),
    p = n(770178),
    m = n(590089),
    g = n(747625);

function A(e) {
    let {
        title: t,
        collapsedSubtitle: n,
        isExpanded: l,
        onExpandedChange: A,
        onExpandedChangeComplete: f,
        children: b,
        animate: h = !0
    } = e, E = i.useRef(null), [O, C] = i.useState(null), x = i.useRef(l), S = i.useRef(!1);
    i.useEffect(() => {
        x.current !== l && (S.current = !0, x.current = l)
    }, [l]);
    let T = i.useCallback(e => {
            null != e.target && S.current && (S.current = !1, null == f || f(l))
        }, [l, f]),
        I = i.useMemo(() => (0, a.debounce)(T, 50), [T]),
        y = (0, p.w)(I, [], {
            enabled: null != f
        }),
        N = l && null != O;
    return i.useLayoutEffect(() => {
        null != E.current && null == O && C(E.current.clientHeight)
    }, [O]), (0, r.jsxs)(o.EN, {
        ref: y,
        isExpanded: l,
        onExpandedChange: A,
        children: [(0, r.jsx)(m.U, {
            ref: E,
            style: null != O ? {
                minHeight: O
            } : void 0,
            title: t,
            description: N ? void 0 : n,
            secondaryTrailingElement: (0, r.jsx)(_.vN3, {
                children: (0, r.jsx)(c.$, {
                    slot: "trigger",
                    className: g.bW,
                    children: (0, r.jsx)(d.ChevronLargeUpIcon, {
                        className: s()(g.Kk, {
                            [g.kX]: !l
                        }),
                        color: u.A.colors.ICON_STRONG
                    })
                })
            }),
            onClick: () => A(!l)
        }), (0, r.jsx)(o.kS, {
            className: s()(g.nd, {
                [g.t5]: !h
            }),
            children: (0, r.jsx)(_.BJc, {
                gap: 16,
                padding: {
                    top: 16
                },
                children: b
            })
        })]
    })
}