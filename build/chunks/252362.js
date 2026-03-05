/** chunk id: 252362, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    r = n(64700),
    l = n(342494),
    a = n(582754),
    s = n(736653),
    o = n(793574),
    d = n(688810),
    c = n(976860),
    u = n(979286),
    A = n(652215),
    h = n(985018);
let _ = e => {
    let {
        displayOptions: t,
        targetElementRef: n,
        onRequestClose: _,
        onClick: m
    } = e, {
        analyticsLocations: g
    } = (0, d.Ay)(o.A.HOME_PAGE_SHOP_TAB), p = (0, s.Ay)(), E = (0, a.Mw)(p) ? t.assetDark : t.assetLight, I = r.useRef(_);
    return I.current = _, r.useEffect(() => () => {
        I.current?.()
    }, []), (0, i.jsx)(l.AM, {
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
            text: h.intl.string(h.t.fYfGgK),
            variant: "primary",
            onClick: () => {
                m?.(), (0, c.pX)(A.BVt.COLLECTIBLES_SHOP), (0, u.Cz)({
                    analyticsLocations: g,
                    analyticsSource: o.A.HOME_PAGE_SHOP_TAB
                })
            }
        }],
        onRequestClose: _
    })
}