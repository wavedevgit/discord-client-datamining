/** chunk id: 94484 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(627968),
    s = n(64700),
    l = n(342494),
    a = n(985018),
    r = n(282222);

function o(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: o,
        onActionClick: c,
        onActionMouseDown: d,
        position: u = "right",
        align: h = "top",
        caretConfig: A = {
            align: "start"
        },
        applicationName: m
    } = e;
    s.useEffect(() => {
        n?.()
    }, [n]);
    let p = {
        type: "image",
        src: r.A,
        aspectRatio: "16/9"
    };
    return (0, i.jsx)(l.AM, {
        size: "lg",
        shouldShow: !0,
        position: u,
        caretConfig: A,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: h,
        onRequestClose: o,
        actions: [{
            text: a.intl.string(a.t.RzWDqY),
            variant: "primary",
            onClick: c,
            onMouseDown: d
        }],
        targetElementRef: t,
        title: a.intl.format(a.t.TpuAkN, {
            applicationName: m
        }),
        body: a.intl.format(a.t.TlwPZw, {
            applicationName: m
        }),
        graphic: p
    })
}