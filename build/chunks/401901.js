/** chunk id: 401901, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $: () => p,
    A: () => f
}), n(896048);
var l, r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    c = n(183325),
    u = n(778862),
    d = n(821589),
    h = n(463689),
    p = ((l = {}).CONTAIN = "contain", l.COVER = "cover", l);
let f = i.memo(function(e) {
    let {
        streamId: t,
        onResize: n,
        wrapperClassName: l,
        videoComponent: a,
        className: p,
        fit: f = "contain",
        mirror: m = !1,
        paused: g = !1,
        streamPreviewURL: A,
        videoSpinnerContext: b,
        userId: _,
        streamKey: y
    } = e, [v, E] = i.useState(!0);
    (0, u.A)({
        location: "VideoStream",
        videoSpinnerContext: b,
        userId: _,
        streamId: t,
        loading: v,
        paused: g
    });
    let {
        onReady: O
    } = (0, c.A)({
        streamId: t,
        userId: _,
        loading: v,
        videoSpinnerContext: b,
        streamKey: y,
        paused: g
    }), C = i.useCallback(() => {
        E(!1), O()
    }, [O]);
    return (0, r.jsxs)("div", {
        className: s()(h.wrapper, l),
        children: [null != t && (0, r.jsx)(a, {
            className: s()(h.video, (0, d.t)(h, "video", f), {
                [h.mirror]: m
            }, p),
            streamId: t,
            onResize: n,
            onReady: C,
            paused: g
        }), g ? null : (0, r.jsx)("div", {
            className: s()(h.previewWrapper, {
                [h.loading]: v
            }),
            children: v && (0, r.jsxs)(i.Fragment, {
                children: [null != A ? (0, r.jsx)("img", {
                    src: A,
                    alt: "",
                    className: h.previewImage
                }) : (0, r.jsx)("div", {
                    className: h.emptyPreviewWrapper,
                    children: (0, r.jsx)("div", {
                        className: h.emptyPreview
                    })
                }), (0, r.jsx)(o.y$y, {
                    className: h.spinner
                })]
            })
        })]
    })
})