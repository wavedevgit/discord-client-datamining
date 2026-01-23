/** Chunk was on 31748 **/
/** chunk id: 401901, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $: () => p,
    A: () => g
}), n(896048);
var r, l = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(397927),
    c = n(183325),
    u = n(778862),
    d = n(821589),
    f = n(463689),
    p = ((r = {}).CONTAIN = "contain", r.COVER = "cover", r);
let g = i.memo(function(e) {
    let {
        streamId: t,
        onResize: n,
        wrapperClassName: r,
        videoComponent: a,
        className: p,
        fit: g = "contain",
        mirror: m = !1,
        paused: _ = !1,
        streamPreviewURL: h,
        videoSpinnerContext: y,
        userId: A,
        streamKey: b
    } = e, [E, v] = i.useState(!0);
    (0, u.A)({
        location: "VideoStream",
        videoSpinnerContext: y,
        userId: A,
        streamId: t,
        loading: E,
        paused: _
    });
    let {
        onReady: O
    } = (0, c.A)({
        streamId: t,
        userId: A,
        loading: E,
        videoSpinnerContext: y,
        streamKey: b,
        paused: _
    }), x = i.useCallback(() => {
        v(!1), O()
    }, [O]);
    return (0, l.jsxs)("div", {
        className: o()(f.wrapper, r),
        children: [null != t && (0, l.jsx)(a, {
            className: o()(f.video, (0, d.t)(f, "video", g), {
                [f.mirror]: m
            }, p),
            streamId: t,
            onResize: n,
            onReady: x,
            paused: _
        }), _ ? null : (0, l.jsx)("div", {
            className: o()(f.previewWrapper, {
                [f.loading]: E
            }),
            children: E && (0, l.jsxs)(i.Fragment, {
                children: [null != h ? (0, l.jsx)("img", {
                    src: h,
                    alt: "",
                    className: f.previewImage
                }) : (0, l.jsx)("div", {
                    className: f.emptyPreviewWrapper,
                    children: (0, l.jsx)("div", {
                        className: f.emptyPreview
                    })
                }), (0, l.jsx)(s.y$y, {
                    className: f.spinner
                })]
            })
        })]
    })
})