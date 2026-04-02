/** chunk id: 266620 params = (module,exports,require) **/
a.d(t, {
    Cr: () => y,
    I1: () => S,
    Nj: () => B,
    R6: () => w,
    SX: () => A,
    UB: () => T,
    YE: () => P
}), a(938796);
var n = a(627968),
    o = a(64700),
    r = a(665260),
    i = a(311907),
    c = a(571356),
    _ = a(990078),
    l = a(397927),
    s = a(672477),
    d = a(982406),
    p = a(458517),
    m = a(713021),
    u = a(121489),
    b = a(734057),
    f = a(644447),
    C = a(998218),
    g = a(465856),
    h = a(652176),
    I = a(652215),
    v = a(985018),
    x = a(999169);

function y(e) {
    let t = e.item.originalItem;
    return (0, h.LL)({
        ...e,
        alt: t.description,
        src: (0, f.E)({
            proxyURL: t.proxy_url,
            url: t.url
        }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, r.Lt)(t.flags ?? 0, I.sbO.IS_ANIMATED),
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
        p = (0, r.Lt)(t.flags ?? 0, I.sbO.IS_CLIP),
        m = (0, i.bG)([b.A], () => b.A.getBasicChannel(e.message.channel_id)?.guild_id),
        u = o.useCallback(() => !p || a ? null : (0, n.jsx)(_.m, {
            text: v.intl.string(v.t["/fgfWh"]),
            children: (0, n.jsxs)("div", {
                className: x.M,
                children: [(0, n.jsx)(l.xgA, {
                    size: "xs",
                    color: "currentColor"
                }), (0, n.jsx)(c.E, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: v.intl.string(v.t.oA4afG)
                })]
            })
        }), [p, a]),
        f = C.A.toURLSafe(t.proxy_url);
    return null == f ? null : (f.searchParams.append("format", "webp"), p && a) ? (0, n.jsx)(d.A, {
        attachment: t,
        posterUrl: f.toString(),
        guildId: m,
        className: e.className
    }) : (0, h.$o)({
        ...e,
        alt: t.description,
        poster: f.toString(),
        fileSize: t.size,
        fileName: (0, g.A)(t),
        src: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        srcIsAnimated: (0, r.Lt)(t.flags ?? 0, I.sbO.IS_ANIMATED),
        renderOverlayContent: u,
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

function B(e) {
    let t = e.item.originalItem;
    return (0, h.gL)({
        ...e,
        fileSize: t.size,
        fileName: (0, g.A)(t),
        src: t.url
    })
}

function A(e) {
    let {
        message: t,
        item: a
    } = e, n = a.originalItem, r = (0, m.dx)(m.k0.VOICE_MESSAGE, n.id), i = o.useCallback((e, a, o) => {
        (0, u.wQ)(t.id, n.duration_secs ?? null, a, t.author.id)
    }, [t, n.duration_secs]), c = o.useCallback((e, a) => {
        (0, u.dP)(t.id, n.duration_secs ?? null, e, t.author.id, a)
    }, [t, n.duration_secs]), _ = o.useCallback(e => {
        (0, u._O)(t.id, e?.message ?? null)
    }, [t]);
    return (0, h.P$)({
        ...e,
        fileSize: n.size,
        fileName: (0, g.A)(n),
        src: n.url,
        durationSecs: n.duration_secs,
        waveform: n.waveform,
        onPlay: i,
        onPause: c,
        onError: _,
        playbackCacheKey: r
    })
}

function w(e) {
    let t = e.item.originalItem;
    return (0, h._d)({
        ...e,
        url: t.url,
        fileName: (0, g.A)(t),
        fileSize: t.size,
        contentType: t.content_type
    })
}

function T(e) {
    let t = e.item.originalItem;
    return (0, h.Dk)({
        ...e,
        url: t.url,
        fileName: (0, g.A)(t),
        fileSize: t.size
    })
}

function P(e) {
    let {
        newEmbedUi: t
    } = s.Q.useConfig({
        location: "MosaicItemFooterForMessageAttachment"
    });
    return "CLIP" !== e.item.type || t ? null : (0, n.jsx)(M, {
        attachment: e.item.originalItem,
        message: e.message
    })
}

function M(e) {
    let {
        attachment: t,
        message: a
    } = e, o = a.channel_id, r = (0, i.bG)([b.A], () => b.A.getBasicChannel(o)?.guild_id), {
        clip_created_at: c,
        clip_participants: _,
        title: l,
        application: s
    } = t;
    return (0, n.jsx)(p.A, {
        createdAt: null != c ? Date.parse(c) : void 0,
        participantIds: _?.map(e => {
            let {
                id: t
            } = e;
            return t
        }) ?? [],
        applicationId: s?.id,
        title: l,
        guildId: r
    })
}