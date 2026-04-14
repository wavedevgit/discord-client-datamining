/** chunk id: 871751 params = (module,exports,require) **/
l.d(t, {
    Ay: () => U,
    rr: () => G
}), l(321073);
var r = l(627968),
    n = l(64700),
    i = l(503698),
    a = l.n(i),
    s = l(397927),
    o = l(775602),
    d = l(684290),
    c = l(478620),
    u = l(338717),
    h = l(643612),
    m = l(731068),
    p = l(124786),
    _ = l(935616),
    b = l(619517),
    g = l(893598),
    x = l(269849),
    f = l(114212),
    v = l(343552),
    y = l(302031),
    w = l(644119),
    C = l(780297),
    A = l(734057),
    I = l(644447),
    S = l(954571),
    j = l(203982),
    P = l(405269),
    E = l(659674),
    N = l(515718),
    T = l(240248),
    M = l(998218),
    R = l(259407),
    W = l(690595),
    L = l(692051),
    k = l(652215),
    B = l(838541),
    V = l(985018),
    D = l(560856),
    H = l(782691);

function F(e) {
    let t = M.A.toURLSafe(e);
    return null == t ? e : (t.searchParams.set("format", "png"), t.toString())
}

function G(e) {
    let {
        className: t,
        iframeWrapperClassName: l,
        maxWidth: i,
        maxHeight: s,
        thumbnail: o,
        video: d,
        provider: c,
        allowFullScreen: u = !0,
        responsive: h = !1,
        renderImageComponent: m,
        renderVideoComponent: p,
        renderLinkComponent: _,
        playable: b = !0,
        autoPlay: x = !1,
        autoMute: f,
        volume: v,
        onPlay: y,
        onPause: w,
        onEnded: C,
        onControlsHide: A,
        onControlsShow: S,
        onVolumeChange: P,
        onMute: E,
        href: T,
        placeholder: M,
        placeholderVersion: W,
        sourceMetadata: L
    } = e, [B, V] = n.useState(x), H = null != d && null == d.proxyURL, F = n.useCallback(() => V(!1), [V]), G = e => {
        e.preventDefault(), e.stopPropagation(), y?.(!1), V(!0), H && (j._.dispatch(k.jej.VIDEO_EMBED_PLAYBACK_STARTED), j._.subscribeOnce(k.jej.VIDEO_EMBED_PLAYBACK_STARTED, F))
    };
    n.useEffect(() => () => {
        H && j._.unsubscribe(k.jej.VIDEO_EMBED_PLAYBACK_STARTED, F)
    }, [H, F]);
    let {
        width: O,
        height: U
    } = o;
    null != d && (O = d.width, U = d.height);
    let $ = (0, N.Uj)({
        width: O,
        height: U,
        maxWidth: i,
        maxHeight: s
    });
    O = Math.max($.width, 150), U = Math.max($.height, 144);
    let K = (0, I.E)(o);
    if (null != d && null != d.proxyURL) return (0, r.jsx)("div", {
        className: a()(D.pu, t),
        children: p({
            poster: K,
            src: d.proxyURL,
            placeholder: M,
            placeholderVersion: W,
            width: O,
            height: U,
            responsive: h,
            autoPlay: x,
            onEnded: C,
            naturalWidth: d.width,
            naturalHeight: d.height,
            onVolumeChange: P,
            playable: b,
            autoMute: f,
            volume: v,
            onPlay: y,
            onPause: w,
            onMute: E,
            onControlsHide: A,
            onControlsShow: S,
            sourceMetadata: L
        })
    });
    if (B && null != d) {
        let e, n = !0 === f || "function" == typeof f && f(),
            o = {
                width: O,
                height: U
            },
            m = {
                width: O,
                height: U
            };
        if (h) {
            let t = 0 !== O ? U / O : 1;
            o = {
                maxWidth: i,
                maxHeight: s,
                width: void 0,
                height: void 0
            }, m = {
                paddingBottom: `${100*t}%`,
                maxWidth: O
            }, e = {
                position: "absolute",
                top: 0,
                left: 0,
                maxWidth: O,
                maxHeight: U
            }
        }
        return (0, r.jsx)("div", {
            className: t,
            style: o,
            children: (0, r.jsx)("div", {
                className: a()(D.pu, l),
                style: m,
                children: (0, r.jsx)(R.Ay, {
                    provider: c,
                    src: d.url,
                    style: e,
                    width: O,
                    height: U,
                    allowFullScreen: u,
                    autoMute: n
                })
            })
        })
    }
    return (0, r.jsxs)("div", {
        className: a()(D.pu, t),
        style: h ? {
            maxWidth: O
        } : {
            width: O,
            height: U
        },
        children: [m({
            src: K,
            width: O,
            height: U,
            maxWidth: O,
            maxHeight: U,
            responsive: h,
            containerClassName: D.tW,
            imageClassName: D.jq,
            placeholder: M,
            placeholderVersion: W,
            onClick: b && null != d ? G : null,
            sourceMetadata: L,
            analyticsSource: "EmbedVideo"
        }), (0, r.jsx)("div", {
            className: D._W,
            children: (0, r.jsx)("div", {
                className: D.Fo,
                children: b ? (0, r.jsx)(g.A, {
                    onPlay: null != d ? G : null,
                    externalURL: T,
                    renderLinkComponent: _,
                    messageId: L?.message?.id,
                    channelId: L?.message?.channel_id
                }) : null
            })
        })]
    })
}

function O(e) {
    let {
        className: t,
        href: l,
        autoPlay: n,
        maxWidth: i,
        maxHeight: s,
        thumbnail: o,
        video: d,
        renderImageComponent: c,
        responsive: u,
        alt: h,
        disableAltTextDisplay: m = !1,
        playable: p = !0,
        hiddenSpoilers: b,
        placeholder: g,
        placeholderVersion: x,
        sourceMetadata: f
    } = e;
    return (0, r.jsx)(_.A, {
        className: a()(D.pu, t),
        original: l,
        poster: (0, I.E)(o),
        src: (0, I.E)(d),
        alt: h,
        width: o.width,
        height: o.height,
        naturalHeight: d.height,
        naturalWidth: d.width,
        maxWidth: i,
        maxHeight: s,
        responsive: u,
        autoPlay: n,
        playable: p,
        renderImageComponent: c,
        hiddenSpoilers: b,
        disableAltTextDisplay: m,
        placeholder: g,
        placeholderVersion: x,
        sourceMetadata: f
    })
}
class U extends n.PureComponent {
    static defaultProps = {
        hideMedia: !1,
        allowFullScreen: !0,
        maxThumbnailWidth: 80,
        maxThumbnailHeight: 80,
        embedIndex: 0
    };
    state = {
        isVisible: null == this.props.obscureReason,
        videoControlsShown: !1,
        sourceMetadata: {
            message: this.props.message,
            identifier: {
                type: "embed",
                embedIndex: this.props.embedIndex
            }
        },
        ...(0, E.ds)(this.props.embed)
    };
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: {
                    provider: t
                },
                renderLinkComponent: l,
                message: n
            } = this.props;
        return null == t ? null : this.shouldShowStaticPlaceholder ? (0, r.jsx)("div", {
            className: a()(D.zC, D.aK),
            children: this.renderContentPlaceholder({
                width: 80,
                height: 18
            })
        }) : (0, r.jsx)("div", {
            className: a()(D.zC, D.aK),
            children: null != t.url ? l({
                className: D.Cj,
                href: t.url,
                tabIndex: e ? 0 : -1,
                children: t.name,
                target: "_blank",
                rel: "noreferrer noopener",
                messageId: n?.id,
                channelId: n?.channel_id
            }) : (0, r.jsx)("span", {
                children: t.name
            })
        })
    }
    renderAuthor() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: {
                    author: t
                },
                renderLinkComponent: l,
                message: n,
                autoPlayGif: i
            } = this.props;
        return null == t ? null : this.shouldShowStaticPlaceholder ? (0, r.jsx)("div", {
            className: a()(D.rN, D.aK),
            children: this.renderContentPlaceholder({
                width: 150,
                height: 18
            })
        }) : (0, r.jsx)(L.Y.Consumer, {
            children: s => {
                let {
                    disableAnimations: o
                } = s;
                return (0, r.jsxs)("div", {
                    className: a()(D.rN, D.aK),
                    children: [null != t.iconProxyURL ? (0, r.jsx)("img", {
                        alt: "",
                        className: D.SG,
                        src: i && !o ? t.iconProxyURL : F(t.iconProxyURL)
                    }) : null, null != t.url ? l({
                        className: D.av,
                        href: t.url,
                        tabIndex: e ? 0 : -1,
                        children: t.name,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        messageId: n?.id,
                        channelId: n?.channel_id
                    }) : (0, r.jsx)("span", {
                        className: D.QQ,
                        children: t.name
                    })]
                })
            }
        })
    }
    renderContentPlaceholder(e) {
        let {
            width: t,
            height: l
        } = e;
        return (0, r.jsx)(f.FQ, {
            className: D.Jl,
            width: t,
            height: l,
            opacity: .3
        })
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: t,
                renderLinkComponent: l,
                renderTitle: n,
                message: i
            } = this.props,
            {
                rawTitle: s,
                url: o
            } = t;
        return null == s ? null : this.shouldShowStaticPlaceholder ? (0, r.jsx)("div", {
            className: a()(D.gt, D.aK),
            children: this.renderContentPlaceholder({
                width: 400,
                height: 30
            })
        }) : (0, r.jsx)("div", {
            className: a()(D.gt, D.aK),
            children: null != o ? l({
                className: D.kv,
                href: o,
                tabIndex: e ? 0 : -1,
                children: n(t, s),
                target: "_blank",
                rel: "noreferrer noopener",
                messageId: i?.id,
                channelId: i?.channel_id
            }) : n(t, s)
        })
    }
    renderDescription() {
        let {
            embed: e,
            renderDescription: t
        } = this.props, {
            rawDescription: l
        } = e;
        return null == l ? null : (0, r.jsx)("div", {
            className: a()(D.cD, D.aK),
            children: this.shouldShowStaticPlaceholder ? this.renderContentPlaceholder({
                width: 400,
                height: 50
            }) : t(e, l, !1)
        })
    }
    renderThumbnail() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: {
                    thumbnail: t
                },
                maxThumbnailWidth: l,
                maxThumbnailHeight: n,
                renderImageComponent: i,
                autoPlayGif: a
            } = this.props,
            {
                sourceMetadata: s
            } = this.state;
        return null == t ? null : (0, r.jsx)(L.Y.Consumer, {
            children: r => {
                let {
                    disableAnimations: o
                } = r;
                return i({
                    containerClassName: D.ad,
                    src: (0, I.E)(t),
                    original: t.url,
                    width: t.width,
                    height: t.height,
                    maxWidth: l,
                    maxHeight: n,
                    shouldLink: e,
                    autoPlay: a && !o,
                    srcIsAnimated: t.srcIsAnimated,
                    placeholder: t.placeholder,
                    placeholderVersion: t.placeholderVersion,
                    sourceMetadata: s,
                    analyticsSource: "Embed"
                })
            }
        })
    }
    renderFields() {
        let {
            embed: e
        } = this.props, {
            fields: t
        } = e;
        if (null == t || 0 === t.length) return null;
        let l = [],
            n = null;
        return t.forEach(t => {
            let {
                rawName: r,
                rawValue: i,
                inline: a
            } = t;
            a || null == n || (l.push(n), n = null), null == n && (n = []), n.push([this.props.renderTitle(e, r), this.props.renderDescription(e, i, !0)]), 3 !== n.length && a || (l.push(n), n = null)
        }), null != n && l.push(n), (0, r.jsx)("div", {
            className: D.j0,
            children: l.map((e, t) => {
                let {
                    length: l
                } = e;
                return e.map((e, n) => {
                    let i, a, [s, o] = e;
                    return (0, r.jsxs)("div", {
                        className: D.Me,
                        style: {
                            gridColumn: (a = n * (i = 12 / l), `${a+1} / ${a+i+1}`)
                        },
                        children: [(0, r.jsx)("div", {
                            className: D.$L,
                            children: s
                        }), (0, r.jsx)("div", {
                            className: D.VN,
                            children: o
                        })]
                    }, `${t}-${n}`)
                })
            })
        })
    }
    renderImages() {
        let {
            hiddenSpoiler: e = !1,
            isVisible: t = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
            embed: l
        } = this.props, {
            maxMediaHeight: n
        } = this.state;
        if (null == l.images) return null;
        let [i, a, s, o] = l.images.map(r => this.renderImage({
            hiddenSpoiler: e,
            isVisible: t,
            image: r,
            isGalleryImage: !0,
            allImages: l.images
        }));
        return null == i && null == a && null == s && null == o ? null : (0, r.jsxs)("div", {
            className: D.$B,
            style: {
                height: n
            },
            children: [(0, r.jsxs)("div", {
                className: D.Zf,
                children: [(0, r.jsx)(h.G.Provider, {
                    value: (0, v.b)(l.images[0].url, l.images[0]),
                    children: i
                }, 0), null != o && (0, r.jsx)(h.G.Provider, {
                    value: (0, v.b)(l.images[2]?.url, l.images[2]),
                    children: s
                }, 2)]
            }), (0, r.jsxs)("div", {
                className: D.Zf,
                children: [(0, r.jsx)(h.G.Provider, {
                    value: (0, v.b)(l.images[1]?.url, l.images[1]),
                    children: a
                }, 1), null == o && null != s && (0, r.jsx)(h.G.Provider, {
                    value: (0, v.b)(l.images[2]?.url, l.images[2]),
                    children: s
                }, 2), null != o && (0, r.jsx)(h.G.Provider, {
                    value: (0, v.b)(l.images[3]?.url, l.images[3]),
                    children: o
                }, 3)]
            })]
        })
    }
    handleImageHover() {
        let e = A.A.getChannel(this.props.message?.channel_id);
        S.default.track(k.HAw.IMAGE_HOVERED, {
            guild_id: e?.guild_id,
            channel_id: e?.id,
            image_recommendations_shown: !1
        })
    }
    renderImage() {
        let {
            hiddenSpoiler: e = !1,
            isVisible: t = !0,
            image: l,
            isGalleryImage: n = !1,
            alt: i = V.intl.string(V.t.X4IxWL),
            allImages: s = null
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
            renderImageComponent: o,
            className: d,
            autoPlayGif: c
        } = this.props, {
            maxMediaWidth: u,
            maxMediaHeight: p,
            sourceMetadata: _
        } = this.state;
        if (null == l) return null;
        let g = (0, I.E)(l),
            {
                srcToOnClickOverride: f,
                srcToHandlePreloadImage: v
            } = null == s ? {
                srcToOnClickOverride: {},
                srcToHandlePreloadImage: {}
            } : (0, x.o)(s.map(e => ({
                ...(0, m.oU)(e, _, "IMAGE"),
                original: e.url,
                srcIsAnimated: e.srcIsAnimated
            })), {}, "Embed"),
            y = b.Ay.isAnimated({
                src: (0, I.E)(l),
                original: l.url,
                animated: !1,
                srcIsAnimated: l.srcIsAnimated
            }),
            w = {
                containerClassName: a()(d, {
                    [D.W$]: !n,
                    [D.Lw]: !n,
                    [D.I_]: n
                }),
                imageContainerClassName: n ? D.FM : void 0,
                imageClassName: n ? D.t3 : void 0,
                src: (0, I.E)(l),
                alt: null == l.description || "" === l.description ? i : l.description,
                responsive: !0,
                limitResponsiveWidth: !n,
                width: l.width,
                height: l.height,
                maxWidth: u,
                maxHeight: p,
                original: l.url,
                shouldLink: t,
                disableAltTextDisplay: null == l.description || "" === l.description,
                hiddenSpoilers: e,
                placeholder: l.placeholder,
                placeholderVersion: l.placeholderVersion,
                srcIsAnimated: l.srcIsAnimated,
                mosaicStyleAlt: !0
            },
            C = l.url.split(".").pop()?.split("?")[0] ?? "";
        return "jpg" === C && (C = "jpeg"), (0, r.jsx)(h.G.Consumer, {
            children: t => (0, r.jsx)(L.Y.Consumer, {
                children: l => {
                    let {
                        disableAnimations: r
                    } = l;
                    return o({
                        ...w,
                        autoPlay: c && !r && !e,
                        renderAccessory: y ? t : null,
                        handlePreloadImage: v[g],
                        onClick: f[g],
                        onMouseEnter: () => this.handleImageHover(),
                        sourceMetadata: _,
                        analyticsSource: "Embed"
                    })
                }
            }, l.url)
        })
    }
    renderVideo() {
        let {
            gifv: e = !1,
            isVisible: t = !0,
            hiddenSpoiler: l = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
            embed: {
                url: n,
                thumbnail: i,
                video: a,
                provider: s
            },
            renderVideoComponent: o,
            renderImageComponent: d,
            renderLinkComponent: c,
            allowFullScreen: u,
            autoPlayGif: h,
            obscureReason: m
        } = this.props, {
            maxMediaWidth: p,
            maxMediaHeight: _,
            sourceMetadata: b
        } = this.state;
        if (null == n || null == i) return null;
        if (e) return null == a ? null : (0, r.jsx)(L.Y.Consumer, {
            children: e => {
                let {
                    disableAnimations: s
                } = e;
                return (0, r.jsx)(O, {
                    className: D.W$,
                    href: n,
                    thumbnail: i,
                    video: a,
                    maxWidth: p,
                    maxHeight: _,
                    responsive: !0,
                    autoPlay: !l && h && !s && t,
                    renderImageComponent: d,
                    playable: t,
                    hiddenSpoilers: l,
                    disableAltTextDisplay: null != m,
                    placeholder: a.placeholder,
                    placeholderVersion: a.placeholderVersion,
                    sourceMetadata: b
                })
            }
        });
        let g = () => {
                this.setState({
                    videoControlsShown: !0
                })
            },
            x = () => {
                this.setState({
                    videoControlsShown: !1
                })
            };
        return (0, r.jsx)(G, {
            className: D.W$,
            href: n,
            allowFullScreen: u,
            thumbnail: i,
            video: a,
            provider: (0, E.QY)(s?.name, a?.url),
            maxWidth: p,
            maxHeight: _,
            responsive: !0,
            renderImageComponent: d,
            renderVideoComponent: o,
            renderLinkComponent: c,
            onControlsShow: g,
            onControlsHide: x,
            playable: t && !l,
            placeholder: a?.placeholder,
            placeholderVersion: a?.placeholderVersion,
            sourceMetadata: b
        })
    }
    renderFooter() {
        let {
            autoPlayGif: e
        } = this.props, {
            footer: t,
            timestamp: l
        } = this.props.embed;
        return null != t ? (0, r.jsx)(L.Y.Consumer, {
            children: n => {
                let {
                    disableAnimations: i
                } = n;
                return (0, r.jsxs)("div", {
                    className: a()(D.te, D.aK),
                    children: [null != t.iconProxyURL && "" !== t.iconProxyURL ? (0, r.jsx)("img", {
                        alt: "",
                        className: D.mG,
                        src: e && !i ? t.iconProxyURL : F(t.iconProxyURL)
                    }) : null, (0, r.jsxs)("span", {
                        className: D.oy,
                        children: [t.text, null != t.text && null != l ? (0, r.jsx)("span", {
                            className: D.i8,
                            children: "•"
                        }) : null, null != l ? (0, P.mk)(l) : null]
                    })]
                })
            }
        }) : null != l ? (0, r.jsx)("div", {
            className: a()(D.te, D.aK),
            children: (0, r.jsx)("span", {
                className: D.oy,
                children: (0, P.mk)(l)
            })
        }) : void 0
    }
    renderStaticPlaceholderMedia() {
        let {
            className: e,
            embed: t
        } = this.props, {
            maxMediaWidth: l,
            maxMediaHeight: n
        } = this.state, i = t.image ?? t.video;
        if (null == i) return null;
        let {
            width: a,
            height: o
        } = (0, N.Uj)({
            width: i.width,
            height: i.height,
            maxWidth: l,
            maxHeight: n
        });
        return (0, r.jsx)(s._V3, {
            className: e,
            readyState: k.Rv1.READY,
            src: "",
            width: a,
            height: o,
            maxWidth: l,
            maxHeight: n,
            mediaLayoutType: B.dG.STATIC,
            useFullWidth: !1,
            zoomable: !1
        })
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            {
                embed: t
            } = this.props,
            {
                isVisible: l
            } = this.state;
        if (this.shouldShowStaticPlaceholder) return this.renderStaticPlaceholderMedia();
        switch (t.type) {
            case k.Auw.GIFV:
                return this.renderVideo({
                    gifv: !0,
                    hiddenSpoiler: e,
                    isVisible: l
                });
            case k.Auw.VIDEO:
            default:
                if (null != t.video) return this.renderVideo({
                    gifv: !1,
                    hiddenSpoiler: e,
                    isVisible: l
                });
                if (null != t.images) return this.renderImages({
                    hiddenSpoiler: e,
                    isVisible: l
                });
                return this.renderImage({
                    hiddenSpoiler: e,
                    isVisible: l,
                    image: t.image,
                    alt: t.rawTitle
                })
        }
    }
    renderAll() {
        let e, t, {
                embed: l,
                hideMedia: r
            } = this.props,
            {
                isVisible: n
            } = this.state,
            i = this.renderProvider(n),
            a = this.renderAuthor(n),
            s = this.renderTitle(n);
        switch (l.type) {
            case k.Auw.IMAGE:
            case k.Auw.VIDEO:
            case k.Auw.GIFV:
                break;
            default:
                e = this.renderDescription()
        }
        let o = this.renderFields();
        r || (t = this.renderMedia(!n));
        let d = this.renderFooter(),
            c = null == t;
        return l.type === k.Auw.RICH && (c = null == l.video), {
            provider: i,
            author: a,
            title: s,
            description: e,
            thumbnail: !r && c ? this.renderThumbnail(n) : null,
            fields: o,
            media: t,
            footer: d
        }
    }
    onReveal = () => {
        this.setState({
            isVisible: !0
        })
    };
    onToggleObscurity = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    };
    getMaxWidth(e) {
        let {
            embed: {
                image: t,
                images: l,
                video: r,
                type: n,
                thumbnail: i
            }
        } = this.props, {
            maxMediaWidth: a,
            maxMediaHeight: s
        } = this.state, o = t ?? r;
        if (null == o) return;
        let {
            width: d
        } = (0, N.Uj)({
            width: o.width,
            height: o.height,
            maxWidth: a,
            maxHeight: s
        });
        if (!e && (n === k.Auw.VIDEO || d >= 300)) return d + 32;
        if (n === k.Auw.RICH && void 0 !== l) return 520;
        if (n === k.Auw.GIFV) {
            let {
                width: e
            } = (0, N.Uj)({
                width: r?.width ?? i?.width ?? 0,
                height: r?.height ?? i?.height ?? 0,
                maxWidth: a,
                maxHeight: s
            });
            return e
        }
    }
    getMinSize() {
        let {
            video: e
        } = this.props.embed;
        return null != e ? {
            minWidth: 150,
            minHeight: 144
        } : void 0
    }
    isInline() {
        let {
            hideMedia: e,
            embed: t
        } = this.props;
        return !e && (0, E.NV)(t)
    }
    renderSuppressButton(e) {
        return (0, r.jsx)(s.DUT, {
            focusProps: {
                offset: {
                    bottom: 4
                }
            },
            className: D.PP,
            onClick: e,
            "aria-label": V.intl.string(V.t.GT3fNz),
            children: (0, r.jsx)(s.PGe, {
                size: "xs",
                color: "currentColor"
            })
        })
    }
    renderInlineMediaEmbed = (() => {
        var e = this;
        return function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                {
                    obscureReason: l,
                    className: n
                } = e.props,
                i = e.getMaxWidth(!0);
            return (0, r.jsx)("div", {
                "aria-hidden": t,
                className: a()(D.JY, n, {
                    [D.gT]: l === u.Oc.SPOILER,
                    [D.We]: e.shouldObscure,
                    [D.dK]: t,
                    [D.qU]: e.usesJustifiedAutoStyle()
                }),
                style: {
                    maxWidth: i
                },
                children: e.renderMedia(t)
            })
        }
    })();
    usesJustifiedAutoStyle() {
        let {
            embed: e
        } = this.props;
        return e.type === k.Auw.IMAGE || e.type === k.Auw.VIDEO || e.type === k.Auw.GIFV || (e.type === k.Auw.RICH || e.type === k.Auw.ARTICLE) && (null != e.video || null != e.image)
    }
    renderEmbedContent = (() => {
        var e = this;
        return function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                {
                    className: l,
                    onSuppressEmbed: n,
                    obscureReason: i
                } = e.props,
                {
                    provider: s,
                    author: o,
                    title: d,
                    description: c,
                    fields: h,
                    thumbnail: m,
                    media: p,
                    footer: _
                } = e.renderAll();
            return (0, r.jsx)("article", {
                className: a()(l, D.vO, H.PT, {
                    [D.dK]: t,
                    [D.o4]: i === u.Oc.SPOILER,
                    [D.q$]: e.shouldObscure,
                    [D.qU]: e.usesJustifiedAutoStyle()
                }),
                "aria-hidden": t,
                style: {
                    borderLeftColor: e.getEmbedColor(t),
                    maxWidth: e.getMaxWidth(!1)
                },
                children: (0, r.jsx)("div", {
                    className: D.UT,
                    children: (0, r.jsxs)("div", {
                        className: a()({
                            [D.Vg]: !0,
                            [D.$H]: null != m
                        }),
                        children: [null != n ? e.renderSuppressButton(n) : null, s, o, d, c, h, p, m, _]
                    })
                })
            })
        }
    })();
    getEmbedColor(e) {
        let {
            color: t
        } = this.props.embed;
        return null != t && "#ffffff" === t.toLowerCase() || e ? void 0 : t
    }
    getSpoilerStyles(e) {
        let {
            embed: {
                image: t,
                images: l,
                video: r,
                type: n,
                rawDescription: i
            }
        } = this.props, {
            maxMediaWidth: a,
            maxMediaHeight: s
        } = this.state;
        if (!this.usesJustifiedAutoStyle()) return {
            justifySelf: "start",
            alignSelf: "start"
        };
        let d = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === d && void 0 === l && n !== k.Auw.RICH) {
            let e = t ?? r;
            if (void 0 !== e) {
                let {
                    minWidth: t,
                    minHeight: l
                } = this.getMinSize() ?? {}, {
                    width: r
                } = (0, N.Uj)({
                    width: e.width,
                    height: e.height,
                    maxWidth: a,
                    maxHeight: s,
                    minWidth: t,
                    minHeight: l
                });
                d = r
            }
        }
        let c = 150 / (o.A.fontScale / 100),
            u = null != i ? (0, T.W7)(i) : 0,
            h = (i?.split("\n").length ?? 0) >= 5;
        return {
            maxWidth: void 0 === d || u >= c || h ? "max-content" : d,
            justifySelf: "auto"
        }
    }
    get shouldObscure() {
        let {
            obscureReason: e
        } = this.props;
        return null != e && u._K.has(e)
    }
    get shouldShowStaticPlaceholder() {
        let {
            shouldAgeVerify: e = !1
        } = this.props;
        return this.shouldObscure && e
    }
    render() {
        let {
            embed: e,
            obscureReason: t,
            className: l
        } = this.props;
        return null != e.provider && W.o.includes(e.provider.name) ? (0, r.jsx)(W.A, {
            embed: e,
            className: l
        }) : (0, w.A)(e) ? (0, r.jsx)(C.A, {
            embed: e,
            className: l
        }) : e.provider?.name === "Amazon Music" && e.type === k.Auw.RICH ? (0, r.jsx)(p.A, {
            embed: e,
            className: l
        }) : (0, d.A)(e) ? (0, r.jsx)(c.A, {
            embed: e,
            className: l
        }) : this.isInline() ? null != t ? (0, r.jsx)(y.Ay, {
            type: y.Ay.Types.ATTACHMENT,
            reason: t,
            onReveal: this.onReveal,
            onToggleObscurity: this.onToggleObscurity,
            isSingleMosaicItem: !0,
            containerStyles: this.getSpoilerStyles(!0),
            obscurityControlClassName: a()({
                [D.yi]: this.state.isVisible && this.state.videoControlsShown
            }),
            children: this.renderInlineMediaEmbed
        }) : this.renderInlineMediaEmbed() : null != t ? (0, r.jsx)(y.Ay, {
            type: y.Ay.Types.EMBED,
            onReveal: this.onReveal,
            onToggleObscurity: this.onToggleObscurity,
            reason: t,
            isSingleMosaicItem: !0,
            containerStyles: this.getSpoilerStyles(!1),
            children: this.renderEmbedContent
        }) : this.renderEmbedContent()
    }
}