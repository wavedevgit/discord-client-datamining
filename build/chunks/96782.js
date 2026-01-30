/** Chunk was on 92414 **/
/** chunk id: 96782, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => M,
    rC: () => N,
    zB: () => S
}), n(938796), n(896048), n(321073), n(747238), n(65821);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(665260),
    o = n(990078),
    u = n(397927),
    c = n(765671),
    d = n(384015),
    m = n(390248),
    h = n(338717),
    p = n(33358),
    f = n(643612),
    y = n(207133),
    g = n(302031),
    O = n(734057),
    j = n(954571),
    x = n(515718),
    b = n(448381),
    I = n(838541),
    v = n(652215),
    P = n(985018),
    A = n(422436),
    w = n(295260);

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function E(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function N(e, t) {
    var n;
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, b.NI)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type,
        srcIsAnimated: (0, a.Lt)(null != (n = e.flags) ? n : 0, v.sbO.IS_ANIMATED)
    }
}
let S = e => {
    let {
        mimeType: t,
        downloadURL: n,
        onRemoveItem: i,
        showDownload: a,
        isVisualMediaType: m
    } = e, h = l.useRef(null), [p, f] = l.useState(0);
    (0, c.i4)(h, e => {
        let {
            width: t
        } = e;
        null != t && f(Math.floor((t - 8) / 32))
    });
    let y = [];
    null != i && y.push((0, r.jsx)(o.m, {
        text: P.intl.string(P.t["/XT3ij"]),
        children: (0, r.jsx)(u.DUT, {
            className: s()(w.HF, A.GC),
            focusProps: {
                offset: 2
            },
            onClick: i,
            "aria-label": P.intl.string(P.t["0+xZH0"]),
            children: (0, r.jsx)(u.ucK, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20
            })
        })
    }, "remove")), a && y.push((0, r.jsx)(o.m, {
        text: P.intl.string(P.t["1WjMbC"]),
        children: (0, r.jsx)(d.A, {
            target: "_blank",
            rel: "noreferrer noopener",
            className: w.HF,
            iconClassName: A.qG,
            focusProps: {
                offset: 2
            },
            href: n,
            mimeType: t
        })
    }, "download"));
    let g = Math.max(0, y.length - p);
    return (0, r.jsxs)(r.Fragment, {
        children: [p > 0 && y.length > 0 && (0, r.jsx)("div", {
            className: s()(w.aq, {
                [w.XE]: !m
            }),
            children: y.slice(g)
        }), (0, r.jsx)("div", {
            ref: h,
            className: w.St
        })]
    })
};

function L(e) {
    let {
        message: t,
        item: n,
        autoPlayGif: i,
        canRemoveItem: a,
        onRemoveItem: o,
        onClick: c,
        handlePreloadImage: d,
        onContextMenu: m,
        onPlay: h,
        renderImageComponent: p,
        renderVideoComponent: g,
        renderAudioComponent: b,
        renderPlaintextFilePreview: w,
        renderGenericFileComponent: C,
        renderVisualPlaceholderComponent: E,
        className: N,
        imgContainerClassName: L,
        imgClassName: M,
        focusable: D,
        hiddenSpoilers: W,
        mediaLayoutType: T,
        maxWidth: _,
        maxHeight: k,
        hasFooter: F,
        useFullWidth: G,
        isVisualMediaType: H,
        onVideoControlsShow: V,
        onVideoControlsHide: R,
        forcePlaceholder: U
    } = e, {
        width: q,
        height: X,
        spoiler: z,
        type: K,
        contentType: B
    } = n, [Q, $] = l.useState(!1), Y = t.getChannelId(), Z = O.A.getChannel(Y), J = (0, y.A)(Y), ee = l.useMemo(() => null != B && -1 !== B.indexOf("/") ? B.split("/") : ["unknown", "unknown"], [B]), et = !1;
    if (H) {
        (null == q || null == X) && (et = !0);
        let e = (0, x.U8)({
            width: null != q ? q : 0,
            height: null != X ? X : 0,
            maxWidth: null != _ ? _ : I.k6,
            maxHeight: null != k ? k : I.Rk
        });
        !G && (e * (null != q ? q : 0) < I.ie || e * (null != X ? X : 0) < I.ie) && (et = !0)
    }
    let en = l.useCallback(() => {
            o(n)
        }, [n, o]),
        er = l.useCallback(() => {
            j.default.track(v.HAw.IMAGE_HOVERED, {
                guild_id: null == Z ? void 0 : Z.guild_id,
                channel_id: null == Z ? void 0 : Z.id,
                image_recommendations_shown: !1
            })
        }, [Z]),
        el = l.useCallback(() => {
            if (T === I.dG.MOSAIC) {
                let e = !J && ["VIDEO", "CLIP", "AUDIO"].includes(K) || "OTHER" === K;
                return et ? null : !Q && (0, r.jsx)(S, {
                    mimeType: ee,
                    downloadURL: n.downloadUrl,
                    showDownload: e,
                    onRemoveItem: a ? en : void 0,
                    isVisualMediaType: H
                })
            }
            return a && (0, r.jsx)(u.DUT, {
                className: z ? A.yR : A.Yg,
                focusProps: {
                    offset: {
                        bottom: 4
                    }
                },
                onClick: () => o(n),
                "aria-label": P.intl.string(P.t["0+xZH0"]),
                children: (0, r.jsx)(u.PGe, {
                    size: "xs",
                    color: "currentColor"
                })
            })
        }, [T, a, z, J, K, et, Q, ee, n, en, H, o]);
    if (U) return (0, r.jsx)(u._V3, {
        className: N,
        readyState: v.Rv1.READY,
        src: "",
        width: null != q ? q : 350,
        height: null != X ? X : 350,
        maxWidth: _,
        maxHeight: k,
        mediaLayoutType: T,
        useFullWidth: G,
        zoomable: !1
    });
    switch (K) {
        case "IMAGE":
            return (0, r.jsx)(f.G.Consumer, {
                children: e => (0, r.jsx)(p, {
                    item: n,
                    message: t,
                    width: q,
                    height: X,
                    autoPlay: i && !W,
                    onClick: c,
                    onContextMenu: m,
                    shouldHideMediaOptions: J,
                    renderAccessory: e,
                    renderAdjacentContent: el,
                    containerClassName: N,
                    className: L,
                    imageClassName: M,
                    shouldLink: D,
                    hiddenSpoilers: W,
                    responsive: !0,
                    mediaLayoutType: T,
                    maxWidth: _,
                    maxHeight: k,
                    useFullWidth: G,
                    handlePreloadImage: d,
                    onMouseEnter: er
                })
            });
        case "VIDEO":
        case "CLIP":
            return (0, r.jsx)(g, {
                item: n,
                message: t,
                width: q,
                height: X,
                onClick: c,
                onContextMenu: m,
                renderAdjacentContent: el,
                naturalWidth: q,
                naturalHeight: X,
                className: s()(N, {
                    [A.yq]: F
                }),
                playable: D,
                responsive: !0,
                mediaLayoutType: T,
                maxWidth: _,
                maxHeight: k,
                useFullWidth: G,
                mimeType: ee,
                onControlsShow: V,
                onControlsHide: R,
                downloadable: !J,
                mediaPlayerClassName: F ? A.yq : void 0
            });
        case "VISUAL_PLACEHOLDER":
            if (null == E) return null;
            return (0, r.jsx)(E, {
                item: n,
                message: t,
                className: L,
                imageClassName: M,
                maxWidth: _,
                maxHeight: k,
                mediaLayoutType: T,
                useFullWidth: G
            });
        case "AUDIO":
            return (0, r.jsx)(b, {
                item: n,
                message: t,
                className: N,
                playable: D,
                mimeType: ee,
                renderAdjacentContent: el,
                onVolumeShow: () => $(!0),
                onVolumeHide: () => $(!1),
                onPlay: h
            });
        case "PLAINTEXT_PREVIEW":
            return (0, r.jsx)(w, {
                item: n,
                message: t,
                className: N,
                onClick: c,
                onContextMenu: m,
                renderAdjacentContent: el
            });
        case "OTHER":
            return (0, r.jsx)(C, {
                item: n,
                message: t,
                className: N,
                onClick: c,
                onContextMenu: m,
                renderAdjacentContent: el
            });
        case "INVALID":
            return null
    }
}
let M = function(e) {
    let {
        className: t,
        item: n,
        message: i,
        getObscureReason: a,
        useFullWidth: o,
        mediaLayoutType: u,
        isSingleMosaicItem: c,
        footer: d,
        displayGridItem: f
    } = e, y = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                    i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }(e, ["className", "item", "message", "getObscureReason", "useFullWidth", "mediaLayoutType", "isSingleMosaicItem", "footer", "displayGridItem"]), {
        width: O,
        height: j,
        type: v
    } = n, P = a(n, (0, p.P)(i)), [w, N] = l.useState(null != P), S = (0, m.qZ)(P), M = u === I.dG.MOSAIC, D = !M && (null != O && O < 200 || null != j && j < 50), W = "IMAGE" === v || "VIDEO" === v, T = (0, b.Xg)(v), _ = c && null != P && (0, m.j8)(O, j), [k, F] = l.useState(!1), G = () => {
        F(!0)
    }, H = () => {
        F(!1)
    }, V = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (0, r.jsx)(L, E(C({}, y), {
            item: n,
            message: i,
            getObscureReason: a,
            hiddenSpoilers: e,
            className: s()(t, A.bq, {
                [A.cd]: w && !D,
                [A.rP]: w && P === h.Oc.SPOILER,
                [A.xu]: w && null != P && h._K.has(P),
                [A.sC]: w && e,
                [A.mG]: w && D
            }),
            focusable: !e,
            mediaLayoutType: u,
            hasFooter: null != d,
            useFullWidth: !!_ && !!e || o,
            isVisualMediaType: T,
            onVideoControlsShow: G,
            onVideoControlsHide: H,
            forcePlaceholder: S && w
        }))
    };
    return (0, r.jsxs)("div", {
        style: f ? {
            minWidth: 0,
            width: "".concat(y.maxWidth, "px")
        } : void 0,
        className: s()(A.wO, {
            [A.xV]: W,
            [A.D$]: o,
            [A.UI]: M,
            [A.JP]: M && T,
            [A.hU]: null != d
        }),
        children: [null != P ? (0, r.jsx)(g.Ay, {
            type: g.Ay.Types.ATTACHMENT,
            inline: D,
            reason: P,
            isSingleMosaicItem: c,
            obscured: w,
            containerStyles: function(e, t, n) {
                if (!t) return;
                let r = e.width;
                if (void 0 !== e.width && void 0 !== e.height) {
                    let {
                        width: t
                    } = (0, x.Uj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: 400,
                        maxHeight: 300
                    });
                    r = t
                }
                return E(C({}, n !== I.dG.MOSAIC && {
                    maxWidth: null != r ? r : "400px"
                }), {
                    width: "100%",
                    height: "100%",
                    justifySelf: "auto"
                })
            }(n, W, u),
            obscurityControlClassName: s()({
                [A.yi]: "VIDEO" === v && c && !w && k
            }),
            onToggleObscurity: () => N(e => !e),
            children: e => V(e)
        }) : V(), d]
    })
}