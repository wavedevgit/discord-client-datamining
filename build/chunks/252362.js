/** chunk id: 252362 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    a = n(64700),
    i = n(342494),
    l = n(582754),
    o = n(736653),
    s = n(793574),
    _ = n(688810),
    u = n(976860),
    d = n(979286),
    c = n(652215),
    A = n(985018);
let g = 21552 == n.j ? e => {
    let {
        displayOptions: t,
        targetElementRef: n,
        onRequestClose: g,
        onClick: p
    } = e, {
        analyticsLocations: b
    } = (0, _.Ay)(s.A.HOME_PAGE_SHOP_TAB), m = (0, o.Ay)(), f = (0, l.Mw)(m) ? t.assetDark : t.assetLight, T = a.useRef(g);
    return T.current = g, a.useEffect(() => () => {
        T.current?.()
    }, []), (0, r.jsx)(i.AM, {
        targetElementRef: n,
        position: "right",
        align: "top",
        size: "md",
        caretConfig: {
            align: "start"
        },
        title: t.title(),
        body: t.body(),
        graphic: {
            type: "image",
            src: f
        },
        actions: [{
            text: A.intl.string(A.t.fYfGgK),
            variant: "primary",
            onClick: () => {
                p?.(), (0, u.pX)(c.BVt.COLLECTIBLES_SHOP), (0, d.Cz)({
                    analyticsLocations: b,
                    analyticsSource: s.A.HOME_PAGE_SHOP_TAB
                })
            }
        }],
        onRequestClose: g
    })
} : null