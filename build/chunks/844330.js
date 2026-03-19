/** chunk id: 844330 params = (module,exports,require) **/
t.d(a, {
    A: () => c
});
var n = t(627968),
    _ = t(64700),
    r = t(503698),
    i = t.n(r),
    o = t(397927),
    l = t(147925),
    s = t(463794);

function c(e) {
    let {
        icon: a,
        title: t,
        subtitle: r,
        children: c,
        className: p,
        isExpanded: d,
        onExpandedChange: u,
        defaultExpanded: f = !1,
        onOpen: x,
        maxHeight: m
    } = e, [b, g] = _.useState(f), h = _.useRef(null), [C, v] = _.useState(null), I = void 0 !== d, S = I ? d : b;
    _.useEffect(() => {
        S && null != h.current && v(h.current.scrollHeight)
    }, [S, c]);
    let j = _.useCallback(() => {
            let e = !S;
            I || g(e), u?.(e), e && null != x && x()
        }, [S, I, u, x]),
        k = _.useMemo(() => {
            if (S) {
                if (null != m) return {
                    maxHeight: "number" == typeof m ? `${m}px` : m
                };
                if (null != C) return {
                    maxHeight: `${C}px`
                }
            }
        }, [m, S, C]);
    return (0, n.jsxs)("div", {
        className: i()(s.Yt, p, {
            [s.Sg]: S
        }),
        children: [(0, n.jsxs)(o.DUT, {
            className: s.wx,
            onClick: j,
            children: [null != a && (0, n.jsx)("div", {
                className: s.Y5,
                children: a
            }), (0, n.jsxs)("div", {
                className: s.DD,
                children: [(0, n.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: t
                }), null != r && "" !== r && (0, n.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: r
                })]
            }), (0, n.jsx)("div", {
                className: i()(s.OW, {
                    [s.Sg]: S
                }),
                children: (0, n.jsx)(l.A, {
                    width: 20,
                    height: 20,
                    direction: l.A.Directions.RIGHT
                })
            })]
        }), (0, n.jsx)("div", {
            ref: h,
            className: i()(s.Qs, {
                [s.Sg]: S
            }),
            style: k,
            children: c
        })]
    })
}