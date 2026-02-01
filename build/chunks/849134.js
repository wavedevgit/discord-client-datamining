/** chunk id: 849134, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968),
    l = n(64700),
    i = n(342494),
    s = n(486318),
    a = n(985018),
    o = n(549724),
    c = n(585048);

function u(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: u,
        onActionClick: d,
        onActionMouseDown: p,
        position: h = "right",
        align: g = "top",
        caretConfig: f = {
            align: "start"
        },
        skuImageDetails: m,
        title: b,
        body: A
    } = e;
    l.useEffect(() => {
        null == n || n()
    }, [n]);
    let y = l.useMemo(() => (null == m ? void 0 : m.imageUrl) == null ? {
        type: "image",
        src: c.A,
        aspectRatio: "6/4"
    } : (0, s.e)({
        imageUrl: null == m ? void 0 : m.imageUrl,
        backgroundImageUrl: null == m ? void 0 : m.backgroundImageUrl,
        altText: a.intl.string(a.t["ulQB+t"]),
        customClassNames: {
            containerClassName: o.z,
            foregroundImageClassName: o._
        }
    }), [null == m ? void 0 : m.imageUrl, null == m ? void 0 : m.backgroundImageUrl]);
    return (0, r.jsx)(i.AM, {
        size: "lg",
        shouldShow: !0,
        position: h,
        caretConfig: f,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: g,
        badge: {
            type: "new",
            variant: "default"
        },
        onRequestClose: u,
        actions: [{
            text: a.intl.string(a.t.RzWDqY),
            variant: "primary",
            onClick: d,
            onMouseDown: p
        }],
        targetElementRef: t,
        title: null != b ? b : a.intl.string(a.t.Ylu2JM),
        body: null != A ? A : a.intl.string(a.t.vgylLQ),
        graphic: y
    })
}