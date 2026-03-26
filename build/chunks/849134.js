/** chunk id: 849134 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var i = n(627968),
    s = n(64700),
    l = n(342494),
    r = n(486318),
    a = n(985018),
    o = n(762683),
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
        caretConfig: _ = {
            align: "start"
        },
        skuImageDetails: p,
        title: g,
        body: f,
        overlayImageUrl: x
    } = e;
    s.useEffect(() => {
        n?.()
    }, [n]);
    let E = s.useMemo(() => p?.imageUrl == null ? {
        type: "image",
        src: c.A,
        aspectRatio: "6/4"
    } : (0, r.e)({
        imageUrl: p?.imageUrl,
        backgroundImageUrl: p?.backgroundImageUrl,
        altText: a.intl.string(a.t["ulQB+t"]),
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
        caretConfig: _,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: m,
        badge: {
            type: "new",
            variant: "default"
        },
        onRequestClose: d,
        actions: [{
            text: a.intl.string(a.t.RzWDqY),
            variant: "primary",
            onClick: u,
            onMouseDown: h
        }],
        targetElementRef: t,
        title: g ?? a.intl.string(a.t.Ylu2JM),
        body: f ?? a.intl.string(a.t.vgylLQ),
        graphic: E
    })
}