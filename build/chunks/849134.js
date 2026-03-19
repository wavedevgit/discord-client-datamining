/** chunk id: 849134 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var i = n(627968),
    s = n(64700),
    l = n(342494),
    a = n(486318),
    r = n(985018),
    o = n(291102),
    c = n(585048);

function d(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: d,
        onActionClick: u,
        onActionMouseDown: h,
        position: A = "right",
        align: m = "top",
        caretConfig: g = {
            align: "start"
        },
        skuImageDetails: p,
        title: _,
        body: f,
        overlayImageUrl: x
    } = e;
    s.useEffect(() => {
        n?.()
    }, [n]);
    let C = s.useMemo(() => p?.imageUrl == null ? {
        type: "image",
        src: c.A,
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
    return (0, i.jsx)(l.AM, {
        size: "lg",
        shouldShow: !0,
        position: A,
        caretConfig: g,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: m,
        badge: {
            type: "new",
            variant: "default"
        },
        onRequestClose: d,
        actions: [{
            text: r.intl.string(r.t.RzWDqY),
            variant: "primary",
            onClick: u,
            onMouseDown: h
        }],
        targetElementRef: t,
        title: _ ?? r.intl.string(r.t.Ylu2JM),
        body: f ?? r.intl.string(r.t.vgylLQ),
        graphic: C
    })
}