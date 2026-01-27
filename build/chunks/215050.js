/** Chunk was on web.js **/
/** chunk id: 215050, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(397927),
    l = n(775602),
    c = n(930125),
    u = n(282108),
    d = n(619517),
    f = n(644447),
    p = n(608214),
    _ = n(838541),
    h = n(985018),
    m = n(142724);
let g = 40;

function E(e) {
    return "media-view-scroll-thumbnail-".concat(e)
}

function y(e) {
    return "IMAGE" === e.type ? (0, f.E)({
        proxyURL: e.proxyUrl,
        url: e.url
    }) : "VIDEO" === e.type && null != e.proxyUrl ? (0, p.VZ)(e.proxyUrl) : null
}

function b(e) {
    var t, n;
    let {
        item: i,
        enabledContentHarmTypeFlags: a = 0
    } = e, o = y(i);
    return null == o ? null : (0, u.qo)({
        type: c.D.GenericMedia,
        media: i
    }, a) ? (0, r.jsx)(s.BJc, {
        align: "center",
        justify: "center",
        className: m.cd,
        style: {
            width: g,
            height: g
        },
        children: (0, r.jsx)(s.DAq, {
            size: "sm",
            color: "white"
        })
    }) : (0, r.jsx)(d.Ay, {
        width: null != (t = i.width) ? t : g,
        height: null != (n = i.height) ? n : g,
        maxWidth: g,
        maxHeight: g,
        useFullWidth: !0,
        src: o,
        shouldAnimate: !1,
        shouldRenderAccessory: !1,
        srcIsAnimated: i.srcIsAnimated,
        alt: i.alt,
        mediaLayoutType: _.dG.MOSAIC
    })
}
let O = i.memo(b);

function v(e) {
    let {
        items: t,
        currentIndex: n,
        onGalleryItemClick: a,
        className: c,
        enabledContentHarmTypeFlags: u
    } = e, d = i.useRef(null);
    return i.useLayoutEffect(() => {
        let e = document.getElementById(E(n));
        null != d.current && null != e && d.current.scrollIntoViewNode({
            node: e,
            animate: !l.A.useReducedMotion,
            padding: g / 2
        })
    }, [n]), (0, r.jsx)("div", {
        className: o()(m.IL, c),
        children: (0, r.jsx)(s.ChK, {
            orientation: "horizontal",
            className: o()(m.nV, c),
            ref: d,
            onClick: e => e.stopPropagation(),
            children: t.map((e, i) => {
                let l = i === n,
                    c = l ? h.t["qv/U5V"] : h.t.zviMAG;
                return (0, r.jsx)(s.DUT, {
                    id: E(i),
                    className: o()(m.Qq, {
                        [m.AD]: !l,
                        [m.$1]: 0 === i,
                        [m.HV]: i === t.length - 1
                    }),
                    "aria-label": h.intl.formatToPlainString(c, {
                        pageNumber: i + 1,
                        totalPages: t.length
                    }),
                    onClick: () => a(i),
                    children: (0, r.jsx)(O, {
                        item: e,
                        enabledContentHarmTypeFlags: u
                    })
                }, i)
            })
        })
    })
}