/** chunk id: 266620 params = (module,exports,require) **/
t.d(a, {
    Cr: () => v,
    I1: () => S,
    Nj: () => M,
    R6: () => N,
    SX: () => O,
    UB: () => w,
    YE: () => R
}), t(938796);
var n = t(627968),
    i = t(64700),
    o = t(503698),
    r = t.n(o),
    c = t(665260),
    l = t(311907),
    s = t(571356),
    _ = t(990078),
    d = t(397927),
    u = t(672477),
    m = t(275687),
    p = t(458517),
    f = t(713021),
    C = t(121489),
    g = t(734057),
    I = t(644447),
    h = t(998218),
    A = t(465856),
    T = t(652176),
    b = t(838541),
    E = t(652215),
    y = t(985018),
    x = t(999169);

function v(e) {
    let a = e.item.originalItem;
    return (0, T.LL)({
        ...e,
        alt: a.description,
        src: (0, I.E)({
            proxyURL: a.proxy_url,
            url: a.url
        }),
        original: a.url,
        placeholder: a.placeholder,
        placeholderVersion: a.placeholder_version,
        contentType: a.content_type,
        originalContentType: a.original_content_type,
        srcIsAnimated: (0, c.Lt)(a.flags ?? 0, E.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: {
                type: "attachment",
                attachmentId: a.id,
                filename: a.filename,
                title: a.title,
                size: a.size
            }
        },
        analyticsSource: "ImageComponentForMessageAttachment"
    })
}

function S(e) {
    let a = e.item.originalItem,
        {
            newEmbedUi: t
        } = u.Q.useConfig({
            location: "VideoComponentForMessageAttachment"
        }),
        o = (0, c.Lt)(a.flags ?? 0, E.sbO.IS_CLIP),
        l = i.useCallback(() => !o || t ? null : (0, n.jsx)(_.m, {
            text: y.intl.string(y.t["/fgfWh"]),
            children: (0, n.jsxs)("div", {
                className: x.M,
                children: [(0, n.jsx)(d.xgA, {
                    size: "xs",
                    color: "currentColor"
                }), (0, n.jsx)(s.E, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: y.intl.string(y.t.oA4afG)
                })]
            })
        }), [o, t]),
        p = h.A.toURLSafe(a.proxy_url);
    return null == p ? null : (p.searchParams.append("format", "webp"), o && t) ? (0, n.jsx)(m.A, {
        attachment: a,
        src: a.url,
        posterUrl: p.toString(),
        channelId: e.message.channel_id,
        className: r()(x.m, e.className),
        embed: !0,
        onClick: e.onClick ?? void 0,
        onContextMenu: e.onContextMenu ?? void 0,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight ?? b.Rk,
        showParticipants: e.isSingleMosaicItem
    }) : (0, T.$o)({
        ...e,
        alt: a.description,
        poster: p.toString(),
        fileSize: a.size,
        fileName: (0, A.A)(a),
        src: a.url,
        placeholder: a.placeholder,
        placeholderVersion: a.placeholder_version,
        srcIsAnimated: (0, c.Lt)(a.flags ?? 0, E.sbO.IS_ANIMATED),
        renderOverlayContent: l,
        sourceMetadata: {
            message: e.message,
            identifier: {
                type: "attachment",
                attachmentId: a.id,
                filename: a.filename,
                size: a.size
            }
        }
    })
}

function M(e) {
    let a = e.item.originalItem;
    return (0, T.gL)({
        ...e,
        fileSize: a.size,
        fileName: (0, A.A)(a),
        src: a.url
    })
}

function O(e) {
    let {
        message: a,
        item: t
    } = e, n = t.originalItem, o = (0, f.dx)(f.k0.VOICE_MESSAGE, n.id), r = i.useCallback((e, t, i) => {
        (0, C.wQ)(a.id, n.duration_secs ?? null, t, a.author.id)
    }, [a, n.duration_secs]), c = i.useCallback((e, t) => {
        (0, C.dP)(a.id, n.duration_secs ?? null, e, a.author.id, t)
    }, [a, n.duration_secs]), l = i.useCallback(e => {
        (0, C._O)(a.id, e?.message ?? null)
    }, [a]);
    return (0, T.P$)({
        ...e,
        fileSize: n.size,
        fileName: (0, A.A)(n),
        src: n.url,
        durationSecs: n.duration_secs,
        waveform: n.waveform,
        onPlay: r,
        onPause: c,
        onError: l,
        playbackCacheKey: o
    })
}

function N(e) {
    let a = e.item.originalItem;
    return (0, T._d)({
        ...e,
        url: a.url,
        fileName: (0, A.A)(a),
        fileSize: a.size,
        contentType: a.content_type
    })
}

function w(e) {
    let a = e.item.originalItem;
    return (0, T.Dk)({
        ...e,
        url: a.url,
        fileName: (0, A.A)(a),
        fileSize: a.size
    })
}

function R(e) {
    let {
        newEmbedUi: a
    } = u.Q.useConfig({
        location: "MosaicItemFooterForMessageAttachment"
    });
    return "CLIP" !== e.item.type || a ? null : (0, n.jsx)(G, {
        attachment: e.item.originalItem,
        message: e.message
    })
}

function G(e) {
    let {
        attachment: a,
        message: t
    } = e, i = t.channel_id, o = (0, l.bG)([g.A], () => g.A.getBasicChannel(i)?.guild_id), {
        clip_created_at: r,
        clip_participants: c,
        title: s,
        application: _
    } = a;
    return (0, n.jsx)(p.A, {
        createdAt: null != r ? Date.parse(r) : void 0,
        participantIds: c?.map(e => {
            let {
                id: a
            } = e;
            return a
        }) ?? [],
        applicationId: _?.id,
        title: s,
        guildId: o
    })
}