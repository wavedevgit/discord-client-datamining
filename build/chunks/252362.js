/** Chunk was on 21738 **/
/** chunk id: 252362, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    i = n(64700),
    l = n(342494),
    a = n(582754),
    s = n(736653),
    o = n(793574),
    c = n(688810),
    u = n(976860),
    d = n(979286),
    p = n(652215),
    h = n(985018);
let g = e => {
    let {
        displayOptions: t,
        targetElementRef: n,
        onRequestClose: g,
        onClick: f
    } = e, {
        analyticsLocations: m
    } = (0, c.Ay)(o.A.HOME_PAGE_SHOP_TAB), A = (0, s.Ay)(), _ = (0, a.Mw)(A) ? t.assetDark : t.assetLight, b = i.useRef(g);
    return b.current = g, i.useEffect(() => () => {
        var e;
        null == (e = b.current) || e.call(b)
    }, []), (0, r.jsx)(l.AM, {
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
            src: _
        },
        actions: [{
            text: h.intl.string(h.t.fYfGgK),
            variant: "primary",
            onClick: () => {
                null == f || f(), (0, u.pX)(p.BVt.COLLECTIBLES_SHOP), (0, d.Cz)({
                    analyticsLocations: m,
                    analyticsSource: o.A.HOME_PAGE_SHOP_TAB
                })
            }
        }],
        onRequestClose: g
    })
}