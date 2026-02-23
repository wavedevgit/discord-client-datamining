/** chunk id: 303612, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => o,
    y: () => c
});
var a = s(627968);
s(64700);
var n = s(23339),
    i = s(319060),
    l = s(492749),
    r = s(234914);
let d = (0, n.xI)(i.A.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function o(e) {
    let {
        listing: t,
        imageSize: s,
        alt: n,
        ...i
    } = e, r = (0, l.R)(t, s);
    return (0, a.jsx)("img", {
        src: r,
        alt: n,
        ...i
    })
}

function c(e) {
    let {
        listing: t,
        aspectRatio: s = 16 / 9,
        height: n,
        ...i
    } = e, o = (n - 2 * d) * s, c = (0, l.R)(t, o), x = (0, l.R)(t, o, {
        shouldAnimate: !1
    });
    return (0, a.jsx)(r.A, {
        src: c,
        backgroundSrc: x,
        aspectRatio: s,
        ...i
    })
}