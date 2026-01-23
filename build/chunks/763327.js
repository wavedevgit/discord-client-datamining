/** Chunk was on 2824 **/
/** chunk id: 763327, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(552736),
    u = n(68545),
    c = n(218093),
    d = n(985018),
    p = n(150211);

function m(e) {
    var t, n, i, m;
    let {
        defaultCategory: g,
        onCategoryChange: f,
        className: y
    } = e, [j, b] = l.useState(g), [h, v] = l.useState(null), O = (0, o.A)(), P = l.useMemo(() => [{
        name: d.intl.string(d.t["6Zuivx"]),
        value: u.Sm.Trick,
        key: "Trick",
        icon: (0, r.jsx)(a.VPb, {
            size: "sm",
            color: "currentColor"
        }),
        onMouseEnter: () => v(u.Sm.Trick),
        onMouseLeave: () => v(null)
    }, {
        name: d.intl.string(d.t["2UeOlY"]),
        value: u.Sm.Treat,
        key: "Treat",
        icon: (0, r.jsx)(a.pZW, {
            size: "sm",
            color: "currentColor"
        }),
        onMouseEnter: () => v(u.Sm.Treat),
        onMouseLeave: () => v(null)
    }], []), E = l.useCallback(e => {
        b(e.value), f(e.value)
    }, [f]), x = null == O || null == (n = O.segmentedControlAnimations) || null == (t = n.trick) ? void 0 : t.getAnimationData, S = null == O || null == (m = O.segmentedControlAnimations) || null == (i = m.treat) ? void 0 : i.getAnimationData;
    return (0, r.jsxs)("div", {
        className: s()(p.kL, y),
        children: [(0, r.jsx)(c.R, {
            options: P,
            value: j,
            onChange: E
        }), h === u.Sm.Trick && null != x && (0, r.jsx)("div", {
            className: s()(p.Do, p.yf),
            children: (0, r.jsx)(a.akl, {
                shouldAnimate: !0,
                loop: !0,
                autoplay: !0,
                className: p.I3,
                importData: x,
                renderer: a.akl.Renderers.SVG,
                versionKey: +(h === u.Sm.Trick)
            })
        }), h === u.Sm.Treat && null != S && (0, r.jsx)("div", {
            className: s()(p.Do, p.vu),
            children: (0, r.jsx)(a.akl, {
                shouldAnimate: !0,
                loop: !0,
                autoplay: !0,
                className: p.I3,
                importData: S,
                renderer: a.akl.Renderers.SVG,
                versionKey: +(h === u.Sm.Treat)
            })
        })]
    })
}