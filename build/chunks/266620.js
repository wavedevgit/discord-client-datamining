/** chunk id: 266620 params = (module,exports,require) **/
a.d(t, {
    Cr: () => y,
    I1: () => S,
    Nj: () => A,
    R6: () => w,
    SX: () => B,
    UB: () => P,
    YE: () => T
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
    p = a(458517),
    u = a(713021),
    m = a(121489),
    b = a(734057),
    f = a(644447),
    C = a(998218),
    g = a(465856),
    h = a(652176),
    v = a(652215),
    x = a(985018),
    I = a(999169);

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
        srcIsAnimated: (0, o.Lt)(t.flags ?? 0, v.sbO.IS_ANIMATED),
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
        } = _.Q.useConfig({
            location: "VideoComponentForMessageAttachment"
        }),
        p = (0, o.Lt)(t.flags ?? 0, v.sbO.IS_CLIP),
        u = (0, i.bG)([b.A], () => b.A.getBasicChannel(e.message.channel_id)?.guild_id),
        m = r.useCallback(() => !p || a ? null : (0, n.jsx)(l.m, {
            text: x.intl.string(x.t["/fgfWh"]),
            children: (0, n.jsxs)("div", {
                className: I.M,
                children: [(0, n.jsx)(s.xgA, {
                    size: "xs",
                    color: "currentColor"
                }), (0, n.jsx)(c.E, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: x.intl.string(x.t.oA4afG)
                })]
            })
        }), [p, a]),
        f = C.A.toURLSafe(t.proxy_url);
    return null == f ? null : (f.searchParams.append("format", "webp"), p && a) ? (0, n.jsx)(d.A, {
        attachment: t,
        posterUrl: f.toString(),
        guildId: u,
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
        srcIsAnimated: (0, o.Lt)(t.flags ?? 0, v.sbO.IS_ANIMATED),
        renderOverlayContent: m,
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

function A(e) {
    let t = e.item.originalItem;
    return (0, h.gL)({
        ...e,
        fileSize: t.size,
        fileName: (0, g.A)(t),
        src: t.url
    })
}

function B(e) {
    let {
        message: t,
        item: a
    } = e, n = a.originalItem, o = (0, u.dx)(u.k0.VOICE_MESSAGE, n.id), i = r.useCallback((e, a, r) => {
        (0, m.wQ)(t.id, n.duration_secs ?? null, a, t.author.id)
    }, [t, n.duration_secs]), c = r.useCallback((e, a) => {
        (0, m.dP)(t.id, n.duration_secs ?? null, e, t.author.id, a)
    }, [t, n.duration_secs]), l = r.useCallback(e => {
        (0, m._O)(t.id, e?.message ?? null)
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
        onError: l,
        playbackCacheKey: o
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

function P(e) {
    let t = e.item.originalItem;
    return (0, h.Dk)({
        ...e,
        url: t.url,
        fileName: (0, g.A)(t),
        fileSize: t.size
    })
}

function T(e) {
    let {
        newEmbedUi: t
    } = _.Q.useConfig({
        location: "MosaicItemFooterForMessageAttachment"
    });
    return "CLIP" !== e.item.type || t ? null : (0, n.jsx)(j, {
        attachment: e.item.originalItem,
        message: e.message
    })
}

function j(e) {
    let {
        attachment: t,
        message: a
    } = e, r = a.channel_id, o = (0, i.bG)([b.A], () => b.A.getBasicChannel(r)?.guild_id), {
        clip_created_at: c,
        clip_participants: l,
        title: s,
        application: _
    } = t;
    return (0, n.jsx)(p.A, {
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