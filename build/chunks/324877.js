/** Chunk was on 49559 **/
/** chunk id: 324877, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(228524), n(938796), n(896048);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    o = n(665260),
    s = n(338717),
    c = n(731068),
    u = n(448381),
    d = n(564107),
    p = n(652176),
    m = n(302031),
    f = n(632656),
    O = n(838541),
    b = n(913941);

function y(e) {
    let {
        media: t,
        spoiler: n,
        description: a
    } = e, y = (0, u.wz)(t), h = (0, o.Lt)(t.flags, c.e5.IS_ANIMATED), {
        gifAutoPlay: j
    } = (0, d.X)(), [g, A] = l.useState(n), [v, E] = l.useState(n);
    n !== g && (A(n), E(n));
    let C = e => {
        var n, l;
        return "IMAGE" !== y ? (0, r.jsx)(f.m, {
            className: b.Dg,
            media: t,
            placeholderWidth: 85,
            placeholderHeight: 85,
            maxWidth: 85,
            maxHeight: 85,
            hiddenSpoilers: e
        }) : (0, r.jsx)(p.LL, {
            containerClassName: i()(b.Dg, {
                [b.rP]: e
            }),
            imageClassName: b._8,
            src: t.proxyUrl,
            alt: a,
            original: t.url,
            placeholder: t.placeholder,
            placeholderVersion: t.placeholderVersion,
            width: null != (n = t.width) ? n : 0,
            height: null != (l = t.height) ? l : 0,
            hiddenSpoilers: e,
            maxWidth: 170,
            maxHeight: 170,
            minWidth: 85,
            minHeight: 85,
            autoPlay: j && !e,
            mediaLayoutType: O.dG.MOSAIC,
            reducedSizeAltTextButton: !0,
            srcIsAnimated: h
        })
    };
    return n ? (0, r.jsx)(m.Ay, {
        type: m.Ay.Types.ATTACHMENT,
        reason: s.Oc.SPOILER,
        obscured: v,
        onToggleObscurity: () => E(e => !e),
        children: e => C(e)
    }) : C(!1)
}