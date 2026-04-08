/** chunk id: 540063 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968),
    a = n(64700),
    i = n(342494),
    l = n(793574),
    o = n(688810),
    s = n(979286),
    _ = n(758836),
    u = n(985018),
    d = n(166805);
let c = 21552 == n.j ? e => {
    let {
        targetElementRef: t,
        onRequestClose: n,
        onClick: c
    } = e, {
        analyticsLocations: A
    } = (0, o.Ay)(l.A.HOME_PAGE_SHOP_TAB), g = a.useRef(n);
    return g.current = n, a.useEffect(() => () => {
        g.current?.()
    }, []), (0, r.jsx)(i.AM, {
        targetElementRef: t,
        position: "right",
        size: "md",
        alignmentStrategy: "edge",
        align: "top",
        caretConfig: {
            align: "start"
        },
        title: u.intl.string(u.t.epBu6F),
        body: u.intl.string(u.t["o8+3AX"]),
        graphic: {
            type: "image",
            src: d.A
        },
        gradientColor: "blue",
        actions: [{
            text: u.intl.string(u.t.dp9qDi),
            variant: "primary",
            onClick: () => {
                c?.(), (0, s.Cz)({
                    analyticsLocations: A,
                    analyticsSource: l.A.HOME_PAGE_SHOP_TAB,
                    tab: _.G2.HOME
                })
            }
        }],
        onRequestClose: n
    })
} : null