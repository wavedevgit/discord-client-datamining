/** chunk id: 430580 params = (module,exports,require) **/
l.d(t, {
    A: () => h
});
var n = l(627968),
    a = l(64700),
    s = l(310784),
    i = l.n(s),
    r = l(654107),
    o = l(871751),
    c = l(619517),
    d = l(652176),
    u = l(172079);
let _ = e => (0, d.$o)({
        ...e,
        className: u.tN,
        mediaPlayerClassName: u.yf
    }),
    m = e => (0, n.jsx)(c.Ay, {
        ...e
    });

function h(e) {
    let {
        item: t,
        isMuted: l,
        className: s
    } = e, c = function(e) {
        let t = null != e ? "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src : null,
            [l] = (0, r.rh)(t, "#000000");
        return a.useMemo(() => {
            if (null == t || "#000000" === l) return;
            let e = i()(l).darken(1);
            return `radial-gradient(circle, ${e.alpha(.2).hex()} 0%, transparent 100%)`
        }, [t, l])
    }(t);
    if (null == t) return null;
    let h = {
        background: c,
        backgroundImage: null != t.backgroundSrc ? `url(${t.backgroundSrc})` : void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    };
    return "video" === t.type ? (0, n.jsx)("div", {
        className: s ?? u.kL,
        children: (0, n.jsx)("div", {
            className: u.h4,
            style: h,
            children: (0, n.jsx)(o.rr, {
                href: null,
                thumbnail: {
                    url: t.videoThumbnailSrc,
                    width: 747,
                    height: 560
                },
                video: {
                    url: t.src,
                    proxyURL: t.src,
                    width: 747,
                    height: 560
                },
                provider: void 0,
                allowFullScreen: !0,
                maxHeight: 560,
                maxWidth: 747,
                playable: !0,
                className: u.Ki,
                volume: 1,
                autoMute: l,
                autoPlay: !0,
                renderVideoComponent: _,
                renderImageComponent: m,
                renderLinkComponent: d.bU
            }, `${t.src}-${l?"muted":"unmuted"}`)
        })
    }) : (0, n.jsx)("div", {
        className: s ?? u.kL,
        children: (0, n.jsx)("div", {
            className: u.h4,
            style: h,
            children: (0, n.jsx)("img", {
                src: t.src,
                alt: "",
                className: u.Sl
            })
        })
    })
}