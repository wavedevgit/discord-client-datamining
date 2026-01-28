/** Chunk was on 5606 **/
/** chunk id: 78837, original params: e,t,n (module,exports,require) **/
n.d(t, {
    f: () => f
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
    p = n(397927),
    _ = n(770178),
    m = n(590089),
    g = n(747625);

function f(e) {
    let {
        title: t,
        collapsedSubtitle: n,
        isExpanded: l,
        onExpandedChange: f,
        onExpandedChangeComplete: b,
        children: h,
        animate: A = !0
    } = e, E = i.useRef(null), [x, O] = i.useState(null), C = i.useRef(l), y = i.useRef(!1);
    i.useEffect(() => {
        C.current !== l && (y.current = !0, C.current = l)
    }, [l]);
    let j = i.useCallback(e => {
            null != e.target && y.current && (y.current = !1, null == b || b(l))
        }, [l, b]),
        T = i.useMemo(() => (0, a.debounce)(j, 50), [j]),
        v = (0, _.w)(T, [], {
            enabled: null != b
        }),
        S = l && null != x;
    return i.useLayoutEffect(() => {
        null != E.current && null == x && O(E.current.clientHeight)
    }, [x]), (0, r.jsxs)(o.EN, {
        ref: v,
        isExpanded: l,
        onExpandedChange: f,
        children: [(0, r.jsx)(m.U, {
            ref: E,
            style: null != x ? {
                minHeight: x
            } : void 0,
            title: t,
            description: S ? void 0 : n,
            secondaryTrailingElement: (0, r.jsx)(p.vN3, {
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
            onClick: () => f(!l)
        }), (0, r.jsx)(o.kS, {
            className: s()(g.nd, {
                [g.t5]: !A
            }),
            children: (0, r.jsx)(p.BJc, {
                gap: 16,
                padding: {
                    top: 16
                },
                children: h
            })
        })]
    })
}