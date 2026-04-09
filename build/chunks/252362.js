/** chunk id: 252362 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    a = n(64700),
    r = n(342494),
    l = n(582754),
    s = n(736653),
    o = n(793574),
    d = n(688810),
    c = n(976860),
    u = n(979286),
    A = n(652215),
    _ = n(985018);
let h = e => {
    let {
        displayOptions: t,
        targetElementRef: n,
        onRequestClose: h,
        onClick: m
    } = e, {
        analyticsLocations: g
    } = (0, d.Ay)(o.A.HOME_PAGE_SHOP_TAB), p = (0, s.Ay)(), E = (0, l.Mw)(p) ? t.assetDark : t.assetLight, I = a.useRef(h);
    return I.current = h, a.useEffect(() => () => {
        I.current?.()
    }, []), (0, i.jsx)(r.AM, {
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
            src: E
        },
        actions: [{
            text: _.intl.string(_.t.fYfGgK),
            variant: "primary",
            onClick: () => {
                m?.(), (0, c.pX)(A.BVt.COLLECTIBLES_SHOP), (0, u.Cz)({
                    analyticsLocations: g,
                    analyticsSource: o.A.HOME_PAGE_SHOP_TAB
                })
            }
        }],
        onRequestClose: h
    })
}