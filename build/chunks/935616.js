/** chunk id: 935616 params = (module,exports,require) **/
l.d(t, {
    A: () => c
}), l(508300);
var r = l(627968),
    n = l(64700),
    i = l(607470),
    a = l(643612),
    s = l(652215),
    o = l(985018);

function d(e) {
    let {
        poster: t,
        src: l,
        width: a,
        height: o,
        naturalWidth: d,
        naturalHeight: c,
        play: u = !0,
        className: h,
        alt: m,
        responsive: p
    } = e, _ = n.useRef(null);
    return (n.useEffect(() => {
        let {
            current: e
        } = _;
        u ? e?.play()?.catch(e => {
            if (!(e instanceof DOMException) || "NotAllowedError" !== e.name) throw e
        }) : e?.pause()
    }, [u]), d <= s.AaC && c <= s.oJQ || d <= s.oJQ && c <= s.AaC) ? (0, r.jsx)(i.A, {
        ref: _,
        className: h,
        poster: t,
        src: l,
        width: a,
        height: o,
        responsive: p,
        muted: !0,
        loop: !0,
        autoPlay: u,
        playsInline: !0,
        preload: "none",
        "aria-label": m
    }) : (0, r.jsx)("img", {
        alt: "",
        src: t,
        width: a,
        height: o
    })
}

function c(e) {
    let {
        src: t,
        poster: l,
        naturalWidth: n,
        naturalHeight: i,
        responsive: s,
        autoPlay: c,
        className: u,
        playable: h = !0,
        renderImageComponent: m,
        alt: p = o.intl.string(o.t.I5gL2H),
        sourceMetadata: _,
        ...b
    } = e;
    return (0, r.jsx)(a.G.Consumer, {
        children: e => m({
            ...b,
            alt: p,
            src: l,
            containerClassName: u,
            autoPlay: c,
            animated: h,
            responsive: s,
            renderAccessory: e,
            tabIndex: h ? 0 : -1,
            dataSafeSrc: t,
            children(e) {
                let {
                    src: l,
                    size: a,
                    animating: o,
                    alt: c
                } = e;
                return (0, r.jsx)(d, {
                    alt: c,
                    className: u,
                    poster: l,
                    src: t,
                    width: a.width,
                    height: a.height,
                    naturalWidth: n,
                    naturalHeight: i,
                    responsive: s,
                    play: h && o
                })
            },
            sourceMetadata: _,
            analyticsSource: "LazyGIFV"
        })
    })
}