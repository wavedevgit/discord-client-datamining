/** Chunk was on 49559 **/
/** chunk id: 145885, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(938796);
var r = n(627968);
n(64700);
var l = n(665260),
    a = n(311907),
    i = n(731068),
    o = n(608214),
    s = n(269849),
    c = n(294520),
    u = n(448381),
    d = n(718266),
    p = n(564107),
    m = n(394839),
    f = n(734057),
    O = n(644447),
    b = n(207963),
    y = n(652215);

function h(e) {
    let {
        message: t
    } = (0, b.jc)(), n = (0, a.bG)([f.A], () => f.A.getChannel(null == t ? void 0 : t.channel_id)), {
        shouldHideMediaOptions: h,
        enabledContentHarmTypeFlags: j,
        gifAutoPlay: g,
        getGifFavButton: A,
        getOnMediaItemContextMenu: v
    } = (0, p.X)();
    if (null == t || null == n) return null;
    let E = e.items.map(e => (0, o.FX)(e.media, t)).filter(e => "INVALID" !== e.type),
        {
            srcToOnClickOverride: C,
            srcToHandlePreloadImage: x
        } = E.length > 1 ? (0, s.o)(E, {
            shouldHideMediaOptions: h,
            enabledContentHarmTypeFlags: j
        }, "Media Mosaic") : {
            srcToOnClickOverride: {},
            srcToHandlePreloadImage: {}
        };

    function N(e, n) {
        var r;
        let l = e.originalItem;
        return (0, c.tt)(l.media, n, l.spoiler, null != (r = null == t ? void 0 : t.author.bot) && r)
    }
    let I = e.items.map((e, n) => {
        let r = e.media,
            a = null == v ? void 0 : v(r),
            o = {
                message: t,
                item: {
                    uniqueId: "".concat(r.proxyUrl, "--").concat(n),
                    originalItem: e,
                    type: (0, u.wz)(r),
                    downloadUrl: r.url,
                    height: r.height,
                    width: r.width,
                    spoiler: e.spoiler,
                    contentType: r.contentType,
                    srcIsAnimated: (0, l.Lt)(r.flags, i.e5.IS_ANIMATED)
                },
                onContextMenu: a,
                autoPlayGif: g,
                getObscureReason: N,
                renderImageComponent: d.Bu,
                renderVideoComponent: d.PI,
                renderVisualPlaceholderComponent: d.oo,
                renderAudioComponent: y.tEg,
                renderPlaintextFilePreview: y.tEg,
                renderGenericFileComponent: y.tEg,
                renderMosaicItemFooter: y.tEg,
                gifFavoriteButton: A(r),
                onPlay: (e, t, n) => {},
                canRemoveItem: !1,
                onRemoveItem: y.tEg
            },
            s = (0, O.E)({
                proxyURL: r.proxyUrl,
                url: r.url
            });
        return s in C && (o.onClick = C[s], o.handlePreloadImage = x[s]), o
    });
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(m.A, {
            items: I,
            isInAppComponentsV2: !0
        })
    })
}