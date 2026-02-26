/** chunk id: 479808, original params: e,_,r (module,exports,require) **/
r.r(_), r.d(_, {
    default: () => x
});
var s = r(627968),
    t = r(64700),
    d = r(503698),
    o = r.n(d),
    n = r(397927),
    i = r(409013),
    a = r(785330),
    l = r(856535),
    b = r(697454),
    c = r(611924),
    m = r(594832),
    g = r(621653),
    u = r(983545),
    p = r(599062),
    h = r(155486),
    I = r(938191),
    w = r(758836),
    C = r(652215),
    f = r(892766);
let x = e => {
    let {
        layoutId: _
    } = e;
    (0, c.P)(b.a), (0, g.g)(), (0, m.pE)();
    let r = t.useRef(null);
    t.useEffect(() => {
        r.current?.focus()
    }, []);
    let d = (0, I.yB)("CollectiblesShopLayout");
    (0, I.gB)();
    let {
        selectedTab: x,
        transitionToTab: R
    } = (0, u.o)(w.G2.LAYOUT), {
        layout: j,
        loading: v,
        error: k
    } = (0, l.A)(C.FYj, _);
    return (0, s.jsxs)("div", {
        className: o()(f.bx, {
            [I.jP]: d
        }),
        ref: r,
        tabIndex: -1,
        children: [(0, s.jsx)(h.G, {
            handleTransition: R,
            selectedTab: x
        }), (0, s.jsx)(n.HOs, {
            children: (0, s.jsx)("div", {
                className: f.Qs,
                children: v || null == _ ? (0, s.jsx)(n.y$y, {}) : null != k ? (0, s.jsx)(p.h, {
                    errorMessage: k.message,
                    errorOrigin: p.A.SHOP_PAGE,
                    onRetry: () => {
                        (0, i.v)({
                            tenantId: C.FYj,
                            layoutId: _
                        })
                    }
                }) : null != j ? (0, s.jsx)(a.Ay, {
                    layout: j
                }) : null
            })
        })]
    })
}