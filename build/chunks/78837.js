/** Chunk was on web.js **/
/** chunk id: 78837, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    f: () => m
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n(386181),
    c = n(650682),
    u = n(934551),
    d = n(827734),
    f = n(397927),
    p = n(770178),
    _ = n(590089),
    h = n(747625);

function m(e) {
    let {
        title: t,
        collapsedSubtitle: n,
        isExpanded: a,
        onExpandedChange: m,
        onExpandedChangeComplete: g,
        children: E,
        animate: y = !0
    } = e, b = i.useRef(null), [O, v] = i.useState(null), A = i.useRef(a), I = i.useRef(!1);
    i.useEffect(() => {
        A.current !== a && (I.current = !0, A.current = a)
    }, [a]);
    let S = i.useCallback(e => {
            null != e.target && I.current && (I.current = !1, null == g || g(a))
        }, [a, g]),
        T = i.useMemo(() => (0, o.debounce)(S, 50), [S]),
        C = (0, p.w)(T, [], {
            enabled: null != g
        }),
        N = a && null != O;
    return i.useLayoutEffect(() => {
        null != b.current && null == O && v(b.current.clientHeight)
    }, [O]), (0, r.jsxs)(l.EN, {
        ref: C,
        isExpanded: a,
        onExpandedChange: m,
        children: [(0, r.jsx)(_.U, {
            ref: b,
            style: null != O ? {
                minHeight: O
            } : void 0,
            title: t,
            description: N ? void 0 : n,
            secondaryTrailingElement: (0, r.jsx)(f.vN3, {
                children: (0, r.jsx)(c.$, {
                    slot: "trigger",
                    className: h.bW,
                    children: (0, r.jsx)(u.ChevronLargeUpIcon, {
                        className: s()(h.Kk, {
                            [h.kX]: !a
                        }),
                        color: d.A.colors.ICON_LINK
                    })
                })
            }),
            onClick: () => m(!a),
            headingColor: "text-link"
        }), (0, r.jsx)(l.kS, {
            className: s()(h.nd, {
                [h.t5]: !y
            }),
            children: (0, r.jsx)(f.BJc, {
                gap: 16,
                padding: {
                    top: 16
                },
                children: E
            })
        })]
    })
}