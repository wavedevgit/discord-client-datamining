/** Chunk was on 39048 **/
/** chunk id: 477470, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(451988),
    o = n(397927),
    c = n(147925),
    d = n(863913),
    u = n(985018),
    g = n(209248);
let m = function(e) {
    let {
        items: t,
        carouselClassName: n,
        paginationCaretClassName: l,
        intervalBetweenAutomaticItemRotations: m,
        renderItem: p
    } = e, f = i.useMemo(() => new a.IX, []), [h, b] = i.useState(d.f.LEFT), [x, j] = i.useState(0), [_, O] = i.useState(!1), [v, y] = i.useState(!1), A = i.useCallback((e, t) => {
        j(n => {
            let r = n + t;
            return r < 0 ? r = e.length - 1 : r > e.length - 1 && (r = 0), r
        })
    }, [j]), E = i.useCallback(() => {
        v || A(t, 1)
    }, [A, t, v]), N = i.useCallback(() => {
        v || A(t, -1)
    }, [A, t, v]);
    return i.useEffect(() => {
        null != m && (_ ? _ && f.stop() : f.start(m, E))
    }, [_, f, m, E]), (0, r.jsxs)("div", {
        className: g.zr,
        onMouseEnter: () => O(!0),
        onMouseLeave: () => O(!1),
        children: [(0, r.jsx)(o.DUT, {
            className: s()(g.Sx, l),
            onClick: N,
            onMouseEnter: () => b(d.f.RIGHT),
            ignoreKeyPress: v,
            children: (0, r.jsx)(c.A, {
                direction: c.A.Directions.LEFT,
                height: 48,
                width: 48,
                "aria-label": u.intl.string(u.t.FAmEgm)
            })
        }), (0, r.jsx)(d.A, {
            step: x,
            direction: h,
            onAnimationStart: () => y(!0),
            onAnimationEnd: () => y(!1),
            className: s()(g.Dk, n),
            children: p(t[x])
        }), (0, r.jsx)(o.DUT, {
            className: s()(g.Sx, l),
            onClick: E,
            onMouseEnter: () => b(d.f.LEFT),
            ignoreKeyPress: v,
            children: (0, r.jsx)(c.A, {
                direction: c.A.Directions.RIGHT,
                height: 48,
                width: 48,
                "aria-label": u.intl.string(u.t.Fa8W1W)
            })
        })]
    })
}