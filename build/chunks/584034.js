/** chunk id: 584034, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => D
}), n(938796), n(896048), n(492834);
var r = n(627968),
    i = n(64700),
    o = n(735438),
    a = n(665260),
    l = n(311907),
    s = n(397927),
    c = n(922667),
    d = n(77350),
    u = n(294520),
    h = n(141468),
    m = n(448381),
    p = n(963852),
    f = n(763754),
    _ = n(491182),
    g = n(266620),
    y = n(652176),
    b = n(394839),
    v = n(538355),
    O = n(715628),
    w = n(752636),
    j = n(287809),
    x = n(515718),
    A = n(661191),
    C = n(207913),
    P = n(393033),
    E = n(239093),
    I = n(652215),
    S = n(838541),
    T = n(26896);

function k(e) {
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

function M(e, t) {
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
let L = e => {
    let {
        message: t
    } = e, {
        attachments: n
    } = t;
    if (0 === n.length) return null;
    let i = 1 === n.length;

    function l(e, t) {
        return (0, u.iW)(e.originalItem, t)
    }
    return (0, r.jsx)("div", {
        className: T.Y,
        children: (0, r.jsx)(b.A, {
            items: n.map(e => {
                var n;
                return {
                    item: {
                        uniqueId: e.id,
                        originalItem: e,
                        type: (0, m.NI)(e, !0),
                        downloadUrl: e.proxy_url,
                        height: e.height,
                        width: e.width,
                        spoiler: e.spoiler,
                        contentType: e.content_type,
                        srcIsAnimated: (0, a.Lt)(null != (n = e.flags) ? n : 0, I.sbO.IS_ANIMATED)
                    },
                    message: t,
                    mediaLayoutType: S.dG.MOSAIC,
                    autoPlayGif: !1,
                    canRemoveItem: !1,
                    isSingleMosaicItem: i,
                    onRemoveItem: o.noop,
                    renderVideoComponent: t => ((e, t, n) => {
                        let i = E.V5,
                            a = E.M8;
                        if (null != t.width && null != t.height) {
                            let e = (0, x.U8)({
                                width: t.width,
                                height: t.height,
                                maxWidth: E.V5,
                                maxHeight: E.M8
                            });
                            i = (0, o.clamp)(Math.round(t.width * e), 0, E.V5), a = (0, o.clamp)(Math.round(t.height * e), 0, E.M8)
                        }
                        return (0, r.jsx)("div", {
                            style: {
                                width: n ? i : "100%",
                                height: n ? a : "100%"
                            },
                            children: (0, r.jsx)(c.Ay, {
                                className: e.className,
                                forceExternal: !1,
                                src: t.url,
                                width: n ? i : "100%",
                                height: n ? a : "100%",
                                responsive: !0,
                                volume: e.volume,
                                autoPlay: !1,
                                autoMute: !1,
                                type: c.Ay.Types.VIDEO,
                                mediaLayoutType: e.mediaLayoutType,
                                fileName: t.filename,
                                fileSize: null == t.size ? void 0 : t.size.toString(),
                                playable: !0,
                                renderLinkComponent: y.bU,
                                onClick: e.onClick,
                                onPlay: e.onPlay,
                                onEnded: e.onEnded,
                                onVolumeChange: e.onVolumeChange,
                                onMute: e.onMute,
                                downloadable: !1
                            })
                        })
                    })(t, e, i),
                    renderImageComponent: e => (0, r.jsx)(g.Cr, M(k({}, e), {
                        hiddenSpoilers: !0,
                        shouldHideMediaOptions: !0,
                        shouldLink: !1
                    })),
                    renderAudioComponent: g.Nj,
                    renderPlaintextFilePreview: g.R6,
                    renderGenericFileComponent: g.UB,
                    renderMosaicItemFooter: g.YE,
                    getObscureReason: l,
                    gifFavoriteButton: () => null
                }
            })
        })
    })
};

function D(e) {
    var t;
    let n, {
            flaggedContent: o
        } = e,
        a = (0, l.bG)([j.default], () => j.default.getCurrentUser()),
        [c, u] = i.useState({}),
        [m, g] = i.useState(!0),
        y = (0, l.bG)([C.A], () => C.A.getUsername()),
        b = o[0],
        x = (n = b.attachments.map(e => {
            var t, n, r, i;
            let o = M(k({}, e), {
                filename: (0, P.tF)(e),
                size: 0,
                proxy_url: e.url
            });
            return (0, d.u)(e.filename) || (0, d.AE)(e.filename) ? M(k({}, o), {
                width: null != (t = null == (r = c[e.id]) ? void 0 : r.width) ? t : E.V5,
                height: null != (n = null == (i = c[e.id]) ? void 0 : i.height) ? n : E.M8
            }) : o
        }), (0, h.rh)(M(k({}, (0, p.Ay)({
            author: null != a ? a : {
                id: "",
                avatar: void 0,
                discriminator: "0000",
                username: y
            },
            nonce: b.id,
            content: b.content,
            type: I.lAJ.DEFAULT,
            channelId: I.dJq
        })), {
            timestamp: new Date(A.default.extractTimestamp(b.id)).toISOString(),
            attachments: n,
            state: I.cmJ.SENT
        }))),
        S = (0, f.Ay)(x),
        D = (0, v.A)(x, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1
        });
    return (i.useEffect(() => {
        Promise.all(b.attachments.filter(e => {
            let {
                filename: t
            } = e;
            return (0, d.u)(t) || (0, d.AE)(t)
        }).map(e => new Promise((t, n) => {
            if ((0, d.u)(e.filename)) {
                let r = new Image;
                r.src = e.url, r.onload = () => {
                    t(r)
                }, r.onerror = () => {
                    n()
                }
            } else if ((0, d.AE)(e.filename)) {
                let r = document.createElement("video");
                r.src = e.url, r.onloadedmetadata = () => {
                    t({
                        width: r.videoWidth,
                        height: r.videoHeight
                    })
                }, r.onerror = () => {
                    n()
                }
            } else t({
                width: 0,
                height: 0
            })
        }).then(t => u(n => M(k({}, n), {
            [e.id]: t
        }))))).finally(() => g(!1))
    }, [b.attachments]), "" === x.content && 0 === x.attachments.length) ? null : (0, r.jsx)("div", {
        className: T.O,
        children: m ? (0, r.jsx)(s.y$y, {}) : (0, r.jsx)(_.A, {
            compact: !1,
            childrenHeader: (0, w.A)({
                author: M(k({}, a), {
                    colorString: "",
                    colorStrings: null,
                    nick: null != (t = null == a ? void 0 : a.username) ? t : y
                }),
                message: x,
                channel: void 0,
                guildId: void 0,
                compact: !1,
                animateAvatar: !1,
                isGroupStart: !0,
                roleIcon: void 0,
                hideTimestamp: !1
            }),
            childrenAccessories: (0, r.jsx)(L, {
                message: x
            }),
            childrenMessageContent: (0, O.A)({
                message: x
            }, D.content),
            hasThread: !1,
            hasReply: !1,
            author: S
        })
    })
}