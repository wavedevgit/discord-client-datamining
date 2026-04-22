/** chunk id: 479808 params = (module,exports,require) **/
r.r(_), r.d(_, {
    default: () => C
});
var t = r(627968),
    o = r(64700),
    n = r(503698),
    d = r.n(n),
    s = r(397927),
    i = r(409013),
    a = r(785330),
    c = r(856535),
    l = r(475073),
    b = r(611924),
    m = r(594832),
    g = r(621653),
    u = r(983545),
    p = r(599062),
    h = r(155486),
    I = r(938191),
    f = r(758836),
    x = r(652215),
    w = r(647685);
let C = e => {
    let {
        layoutId: _
    } = e;
    (0, b.P)(l.a), (0, g.g)(), (0, m.pE)();
    let r = o.useRef(null);
    o.useEffect(() => {
        r.current?.focus()
    }, []);
    let n = (0, I.yB)("CollectiblesShopLayout");
    (0, I.gB)();
    let {
        selectedTab: C,
        transitionToTab: v
    } = (0, u.o)(f.G2.LAYOUT), {
        layout: R,
        loading: j,
        error: k
    } = (0, c.A)(x.FYj, _);
    return (0, t.jsxs)("div", {
        className: d()(w.bx, {
            [I.jP]: n
        }),
        ref: r,
        tabIndex: -1,
        children: [(0, t.jsx)(h.G, {
            handleTransition: v,
            selectedTab: C
        }), (0, t.jsx)(s.HOs, {
            children: (0, t.jsx)("div", {
                className: w.Qs,
                children: j || null == _ ? (0, t.jsx)(s.y$y, {}) : null != k ? (0, t.jsx)(p.h, {
                    errorMessage: k.message,
                    errorOrigin: p.A.SHOP_PAGE,
                    onRetry: () => {
                        (0, i.v)({
                            tenantId: x.FYj,
                            layoutId: _
                        })
                    }
                }) : null != R ? (0, t.jsx)(a.Ay, {
                    layout: R
                }) : null
            })
        })]
    })
}