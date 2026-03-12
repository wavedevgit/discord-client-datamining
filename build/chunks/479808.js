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
    l = r(785330),
    a = r(856535),
    b = r(697454),
    c = r(611924),
    m = r(594832),
    u = r(621653),
    g = r(983545),
    p = r(599062),
    h = r(155486),
    I = r(938191),
    w = r(758836),
    f = r(652215),
    x = r(892766);
let C = e => {
    let {
        layoutId: _
    } = e;
    (0, c.P)(b.a), (0, u.g)(), (0, m.pE)();
    let r = t.useRef(null);
    t.useEffect(() => {
        r.current?.focus()
    }, []);
    let o = (0, I.yB)("CollectiblesShopLayout");
    (0, I.gB)();
    let {
        selectedTab: C,
        transitionToTab: R
    } = (0, g.o)(w.G2.LAYOUT), {
        layout: j,
        loading: v,
        error: k
    } = (0, a.A)(f.FYj, _);
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
                children: v || null == _ ? (0, s.jsx)(n.y$y, {}) : null != k ? (0, s.jsx)(p.h, {
                    errorMessage: k.message,
                    errorOrigin: p.A.SHOP_PAGE,
                    onRetry: () => {
                        (0, i.v)({
                            tenantId: f.FYj,
                            layoutId: _
                        })
                    }
                }) : null != j ? (0, s.jsx)(l.Ay, {
                    layout: j
                }) : null
            })
        })]
    })
}