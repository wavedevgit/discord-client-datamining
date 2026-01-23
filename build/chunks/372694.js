/** Chunk was on 28636 **/
/** chunk id: 372694, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    l = n(64700),
    i = n(158954),
    a = n(311907),
    s = n(852860),
    o = n(644576),
    c = n(256905),
    d = n(531685),
    u = n(652215),
    p = n(985018),
    h = n(504724),
    m = n(500226);

function g(e) {
    let {
        application: t,
        carouselItems: n
    } = e, g = (0, a.bG)([d.A], () => d.A.isFocused()), _ = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("img", {
            className: h.M,
            src: m,
            "aria-hidden": !0,
            alt: ""
        }), (0, r.jsx)(i.DZT, {
            variant: "heading-xl/semibold",
            children: p.intl.string(p.t.UvDfMz)
        })]
    });
    n.forEach((e, r) => {
        e.alt = p.intl.formatToPlainString(p.t.sSEhHb, {
            index: r + 1,
            totalImages: n.length,
            name: t.name
        })
    });
    let b = l.useCallback((e, t) => {
        if (e.type === u.geh.IMG) {
            let t = n.filter(e => e.type === u.geh.IMG),
                r = t.findIndex(t => t === e);
            if (r < 0) return;
            let l = t.map(e => ({
                url: (0, s.o)(e.src),
                original: e.src,
                width: e.width,
                height: e.height,
                type: "IMAGE"
            }));
            (0, c.R)({
                items: l,
                startingIndex: r,
                shouldHideMediaOptions: !0,
                location: "GlobalDiscoveryAppsDetailCarousel"
            })
        }
    }, [n]);
    return 0 === n.length ? null : (0, r.jsx)(o.A, {
        className: h.D,
        themedPagination: !0,
        items: n,
        autoplayInterval: 8e3,
        paused: !g,
        videoAutoPlay: !0,
        onCurrentItemClick: b,
        errorComponent: _
    })
}