/** chunk id: 849134 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    l = n(64700),
    s = n(342494),
    a = n(486318),
    r = n(985018),
    o = n(766382),
    d = n(585048);

function c(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: c,
        onActionClick: u,
        onActionMouseDown: h,
        position: A = "right",
        align: _ = "top",
        caretConfig: m = {
            align: "start"
        },
        skuImageDetails: p,
        title: g,
        body: f,
        overlayImageUrl: x
    } = e;
    l.useEffect(() => {
        n?.()
    }, [n]);
    let E = l.useMemo(() => p?.imageUrl == null ? {
        type: "image",
        src: d.A,
        aspectRatio: "6/4"
    } : (0, a.e)({
        imageUrl: p?.imageUrl,
        backgroundImageUrl: p?.backgroundImageUrl,
        altText: r.intl.string(r.t["ulQB+t"]),
        overlayImageUrl: x,
        customClassNames: {
            containerClassName: o.z,
            foregroundImageClassName: o._
        }
    }), [p?.imageUrl, p?.backgroundImageUrl, x]);
    return (0, i.jsx)(s.AM, {
        size: "lg",
        shouldShow: !0,
        position: A,
        caretConfig: m,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: _,
        badge: {
            type: "new",
            variant: "default"
        },
        onRequestClose: c,
        actions: [{
            text: r.intl.string(r.t.RzWDqY),
            variant: "primary",
            onClick: u,
            onMouseDown: h
        }],
        targetElementRef: t,
        title: g ?? r.intl.string(r.t.Ylu2JM),
        body: f ?? r.intl.string(r.t.vgylLQ),
        graphic: E
    })
}