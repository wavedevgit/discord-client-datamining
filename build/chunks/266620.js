/** chunk id: 266620 params = (module,exports,require) **/
a.d(t, {
    Cr: () => v,
    I1: () => y,
    Nj: () => x,
    R6: () => E,
    SX: () => S,
    UB: () => N,
    YE: () => M
}), a(938796);
var n = a(627968),
    r = a(64700),
    o = a(665260),
    i = a(311907),
    c = a(571356),
    l = a(990078),
    s = a(397927),
    _ = a(672477),
    d = a(982406),
    u = a(458517),
    m = a(713021),
    p = a(121489),
    b = a(734057),
    C = a(644447),
    f = a(998218),
    g = a(465856),
    I = a(652176),
    h = a(652215),
    A = a(985018),
    T = a(541624);

function v(e) {
    let t = e.item.originalItem;
    return (0, I.LL)({
        ...e,
        alt: t.description,
        src: (0, C.E)({
            proxyURL: t.proxy_url,
            url: t.url
        }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, o.Lt)(t.flags ?? 0, h.sbO.IS_ANIMATED),
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

function y(e) {
    let t = e.item.originalItem,
        {
            newEmbedUi: a
        } = _.Q.useConfig({
            location: "VideoComponentForMessageAttachment"
        }),
        u = (0, o.Lt)(t.flags ?? 0, h.sbO.IS_CLIP),
        m = (0, i.bG)([b.A], () => b.A.getBasicChannel(e.message.channel_id)?.guild_id),
        p = r.useCallback(() => !u || a ? null : (0, n.jsx)(l.m, {
            text: A.intl.string(A.t["/fgfWh"]),
            children: (0, n.jsxs)("div", {
                className: T.M,
                children: [(0, n.jsx)(s.xgA, {
                    size: "xs",
                    color: "currentColor"
                }), (0, n.jsx)(c.E, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: A.intl.string(A.t.oA4afG)
                })]
            })
        }), [u, a]),
        C = f.A.toURLSafe(t.proxy_url);
    return null == C ? null : (C.searchParams.append("format", "webp"), u && a) ? (0, n.jsx)(d.A, {
        attachment: t,
        posterUrl: C.toString(),
        guildId: m,
        className: e.className
    }) : (0, I.$o)({
        ...e,
        alt: t.description,
        poster: C.toString(),
        fileSize: t.size,
        fileName: (0, g.A)(t),
        src: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        srcIsAnimated: (0, o.Lt)(t.flags ?? 0, h.sbO.IS_ANIMATED),
        renderOverlayContent: p,
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

function x(e) {
    let t = e.item.originalItem;
    return (0, I.gL)({
        ...e,
        fileSize: t.size,
        fileName: (0, g.A)(t),
        src: t.url
    })
}

function S(e) {
    let {
        message: t,
        item: a
    } = e, n = a.originalItem, o = (0, m.dx)(m.k0.VOICE_MESSAGE, n.id), i = r.useCallback((e, a, r) => {
        (0, p.wQ)(t.id, n.duration_secs ?? null, a, t.author.id)
    }, [t, n.duration_secs]), c = r.useCallback((e, a) => {
        (0, p.dP)(t.id, n.duration_secs ?? null, e, t.author.id, a)
    }, [t, n.duration_secs]), l = r.useCallback(e => {
        (0, p._O)(t.id, e?.message ?? null)
    }, [t]);
    return (0, I.P$)({
        ...e,
        fileSize: n.size,
        fileName: (0, g.A)(n),
        src: n.url,
        durationSecs: n.duration_secs,
        waveform: n.waveform,
        onPlay: i,
        onPause: c,
        onError: l,
        playbackCacheKey: o
    })
}

function E(e) {
    let t = e.item.originalItem;
    return (0, I._d)({
        ...e,
        url: t.url,
        fileName: (0, g.A)(t),
        fileSize: t.size,
        contentType: t.content_type
    })
}

function N(e) {
    let t = e.item.originalItem;
    return (0, I.Dk)({
        ...e,
        url: t.url,
        fileName: (0, g.A)(t),
        fileSize: t.size
    })
}

function M(e) {
    let {
        newEmbedUi: t
    } = _.Q.useConfig({
        location: "MosaicItemFooterForMessageAttachment"
    });
    return "CLIP" !== e.item.type || t ? null : (0, n.jsx)(O, {
        attachment: e.item.originalItem,
        message: e.message
    })
}

function O(e) {
    let {
        attachment: t,
        message: a
    } = e, r = a.channel_id, o = (0, i.bG)([b.A], () => b.A.getBasicChannel(r)?.guild_id), {
        clip_created_at: c,
        clip_participants: l,
        title: s,
        application: _
    } = t;
    return (0, n.jsx)(u.A, {
        createdAt: null != c ? Date.parse(c) : void 0,
        participantIds: l?.map(e => {
            let {
                id: t
            } = e;
            return t
        }) ?? [],
        applicationId: _?.id,
        title: s,
        guildId: o
    })
}