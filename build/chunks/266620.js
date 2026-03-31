/** chunk id: 266620 params = (module,exports,require) **/
a.d(t, {
    Cr: () => x,
    I1: () => S,
    Nj: () => E,
    R6: () => M,
    SX: () => N,
    UB: () => O,
    YE: () => P
}), a(938796);
var n = a(627968),
    r = a(64700),
    i = a(665260),
    o = a(311907),
    l = a(571356),
    _ = a(990078),
    c = a(397927),
    s = a(672477),
    d = a(67281),
    u = a(458517),
    m = a(776231),
    p = a(713021),
    f = a(476066),
    b = a(121489),
    C = a(734057),
    g = a(644447),
    I = a(998218),
    h = a(465856),
    A = a(652176),
    T = a(652215),
    v = a(985018),
    y = a(541624);

function x(e) {
    let t = e.item.originalItem;
    return (0, A.LL)({
        ...e,
        alt: t.description,
        src: (0, g.E)({
            proxyURL: t.proxy_url,
            url: t.url
        }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, i.Lt)(t.flags ?? 0, T.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: {
                type: "attachment",
                attachmentId: t.id,
                filename: t.filename,
                title: t.title,
                size: t.size
            }
        },
        analyticsSource: "ImageComponentForMessageAttachment"
    })
}

function S(e) {
    let t = e.item.originalItem,
        {
            newEmbedUi: a
        } = s.Q.useConfig({
            location: "VideoComponentForMessageAttachment"
        }),
        u = (0, i.Lt)(t.flags ?? 0, T.sbO.IS_CLIP),
        p = (0, o.bG)([C.A], () => C.A.getBasicChannel(e.message.channel_id)?.guild_id),
        b = r.useCallback(() => !u || a ? null : (0, n.jsx)(_.m, {
            text: v.intl.string(v.t["/fgfWh"]),
            children: (0, n.jsxs)("div", {
                className: y.M,
                children: [(0, n.jsx)(c.xgA, {
                    size: "xs",
                    color: "currentColor"
                }), (0, n.jsx)(l.E, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: v.intl.string(v.t.oA4afG)
                })]
            })
        }), [u, a]),
        g = r.useCallback(e => {
            let {
                playerState: r,
                isControlBarExpanded: i
            } = e;
            return u && a ? (0, n.jsx)(d.A, {
                createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                participantIds: t.clip_participants?.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }) ?? [],
                applicationId: t.application?.id,
                title: t.title,
                guildId: p,
                playerState: r,
                isControlBarExpanded: i
            }) : null
        }, [t, u, a, p]),
        x = I.A.toURLSafe(t.proxy_url);
    if (null == x) return null;
    if (x.searchParams.append("format", "webp"), u && a) {
        let {
            width: a,
            height: r,
            naturalWidth: i,
            naturalHeight: o
        } = e, l = (0, m.AE)({
            src: x.toString(),
            width: a,
            height: r
        });
        return (0, n.jsx)("div", {
            style: {
                width: "100%",
                aspectRatio: `${a} / ${r}`
            },
            children: (0, n.jsx)(f.A, {
                src: t.url,
                downloadUrl: t.url,
                downloadContentType: t.content_type,
                poster: l,
                posterPlaceholder: t.placeholder,
                posterPlaceholderVersion: t.placeholder_version,
                active: !1,
                orientation: i >= o ? "landscape" : "portrait",
                renderPersistentOverlay: g,
                targetTimeSec: 1 / 0,
                parentTransitionState: null,
                onOptimisticProgressUpdate: () => {},
                performanceClockStartTime: 0
            })
        })
    }
    return (0, A.$o)({
        ...e,
        alt: t.description,
        poster: x.toString(),
        fileSize: t.size,
        fileName: (0, h.A)(t),
        src: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        srcIsAnimated: (0, i.Lt)(t.flags ?? 0, T.sbO.IS_ANIMATED),
        renderOverlayContent: b,
        sourceMetadata: {
            message: e.message,
            identifier: {
                type: "attachment",
                attachmentId: t.id,
                filename: t.filename,
                size: t.size
            }
        }
    })
}

function E(e) {
    let t = e.item.originalItem;
    return (0, A.gL)({
        ...e,
        fileSize: t.size,
        fileName: (0, h.A)(t),
        src: t.url
    })
}

function N(e) {
    let {
        message: t,
        item: a
    } = e, n = a.originalItem, i = (0, p.dx)(p.k0.VOICE_MESSAGE, n.id), o = r.useCallback((e, a, r) => {
        (0, b.wQ)(t.id, n.duration_secs ?? null, a, t.author.id)
    }, [t, n.duration_secs]), l = r.useCallback((e, a) => {
        (0, b.dP)(t.id, n.duration_secs ?? null, e, t.author.id, a)
    }, [t, n.duration_secs]), _ = r.useCallback(e => {
        (0, b._O)(t.id, e?.message ?? null)
    }, [t]);
    return (0, A.P$)({
        ...e,
        fileSize: n.size,
        fileName: (0, h.A)(n),
        src: n.url,
        durationSecs: n.duration_secs,
        waveform: n.waveform,
        onPlay: o,
        onPause: l,
        onError: _,
        playbackCacheKey: i
    })
}

function M(e) {
    let t = e.item.originalItem;
    return (0, A._d)({
        ...e,
        url: t.url,
        fileName: (0, h.A)(t),
        fileSize: t.size,
        contentType: t.content_type
    })
}

function O(e) {
    let t = e.item.originalItem;
    return (0, A.Dk)({
        ...e,
        url: t.url,
        fileName: (0, h.A)(t),
        fileSize: t.size
    })
}

function P(e) {
    let {
        newEmbedUi: t
    } = s.Q.useConfig({
        location: "MosaicItemFooterForMessageAttachment"
    });
    return "CLIP" !== e.item.type || t ? null : (0, n.jsx)(w, {
        attachment: e.item.originalItem,
        message: e.message
    })
}

function w(e) {
    let {
        attachment: t,
        message: a
    } = e, r = a.channel_id, i = (0, o.bG)([C.A], () => C.A.getBasicChannel(r)?.guild_id), {
        clip_created_at: l,
        clip_participants: _,
        title: c,
        application: s
    } = t;
    return (0, n.jsx)(u.A, {
        createdAt: null != l ? Date.parse(l) : void 0,
        participantIds: _?.map(e => {
            let {
                id: t
            } = e;
            return t
        }) ?? [],
        applicationId: s?.id,
        title: c,
        guildId: i
    })
}