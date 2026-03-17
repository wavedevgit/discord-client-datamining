/** chunk id: 479808 params = (module,exports,require) **/
r.r(_), r.d(_, {
    default: () => C
});
var s = r(627968),
    t = r(64700),
    o = r(503698),
    d = r.n(o),
    n = r(397927),
    i = r(409013),
    a = r(785330),
    l = r(856535),
    b = r(475073),
    c = r(611924),
    m = r(594832),
    g = r(621653),
    u = r(983545),
    p = r(599062),
    h = r(155486),
    I = r(938191),
    f = r(758836),
    w = r(652215),
    x = r(157884);
let C = e => {
    let {
        layoutId: _
    } = e;
    (0, c.P)(b.a), (0, g.g)(), (0, m.pE)();
    let r = t.useRef(null);
    t.useEffect(() => {
        r.current?.focus()
    }, []);
    let o = (0, I.yB)("CollectiblesShopLayout");
    (0, I.gB)();
    let {
        selectedTab: C,
        transitionToTab: R
    } = (0, u.o)(f.G2.LAYOUT), {
        layout: v,
        loading: j,
        error: k
    } = (0, l.A)(w.FYj, _);
    return (0, s.jsxs)("div", {
        className: d()(x.bx, {
            [I.jP]: o
        }),
        ref: r,
        tabIndex: -1,
        children: [(0, s.jsx)(h.G, {
            handleTransition: R,
            selectedTab: C
        }), (0, s.jsx)(n.HOs, {
            children: (0, s.jsx)("div", {
                className: x.Qs,
                children: j || null == _ ? (0, s.jsx)(n.y$y, {}) : null != k ? (0, s.jsx)(p.h, {
                    errorMessage: k.message,
                    errorOrigin: p.A.SHOP_PAGE,
                    onRetry: () => {
                        (0, i.v)({
                            tenantId: w.FYj,
                            layoutId: _
                        })
                    }
                }) : null != v ? (0, s.jsx)(a.Ay, {
                    layout: v
                }) : null
            })
        })]
    })
}