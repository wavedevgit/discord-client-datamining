/** Chunk was on 20941 **/
/** chunk id: 632656, original params: e,t,n (module,exports,require) **/
n.d(t, {
    m: () => p
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(673698),
    o = n(990078),
    c = n(155718),
    u = n(891694),
    d = n(652215),
    m = n(985018),
    f = n(724870);

function p(e) {
    let t = l.useRef(null),
        n = e.media;
    if (n.loadingState === c.TD.LOADED_NOT_FOUND) return (0, r.jsx)(o.m, {
        text: m.intl.string(m.t.UvDfMz),
        position: "bottom",
        align: "center",
        targetElementRef: t,
        children: (0, r.jsx)("div", {
            className: i()(e.className, f.FN, {
                [f.gS]: e.hiddenSpoilers
            }),
            style: {
                width: e.placeholderWidth,
                height: e.placeholderHeight
            },
            role: "img",
            children: (0, r.jsx)(u.A, {
                ref: t,
                className: f.i4
            })
        })
    });
    let a = n.loadingState === c.TD.LOADING ? d.Rv1.LOADING : d.Rv1.ERROR;
    return (0, r.jsx)(s._, {
        className: i()(e.className, {
            [f.gS]: e.hiddenSpoilers
        }),
        readyState: a,
        src: "",
        width: e.placeholderWidth,
        height: e.placeholderHeight,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        mediaLayoutType: e.mediaLayoutType,
        useFullWidth: e.useFullWidth,
        zoomable: !1
    })
}