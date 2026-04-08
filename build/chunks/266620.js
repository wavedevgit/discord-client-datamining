/** chunk id: 266620 params = (module,exports,require) **/
a.d(t, {
    Cr: () => y,
    I1: () => S,
    Nj: () => A,
    R6: () => P,
    SX: () => B,
    UB: () => w,
    YE: () => T
}), a(938796);
var n = a(627968),
    r = a(64700),
    o = a(665260),
    i = a(311907),
    l = a(571356),
    c = a(990078),
    s = a(397927),
    _ = a(672477),
    d = a(982406),
    u = a(458517),
    p = a(713021),
    m = a(121489),
    b = a(734057),
    f = a(644447),
    C = a(998218),
    g = a(465856),
    h = a(652176),
    v = a(652215),
    x = a(985018),
    I = a(541624);

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
        u = (0, o.Lt)(t.flags ?? 0, v.sbO.IS_CLIP),
        p = (0, i.bG)([b.A], () => b.A.getBasicChannel(e.message.channel_id)?.guild_id),
        m = r.useCallback(() => !u || a ? null : (0, n.jsx)(c.m, {
            text: x.intl.string(x.t["/fgfWh"]),
            children: (0, n.jsxs)("div", {
                className: I.M,
                children: [(0, n.jsx)(s.xgA, {
                    size: "xs",
                    color: "currentColor"
                }), (0, n.jsx)(l.E, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: x.intl.string(x.t.oA4afG)
                })]
            })
        }), [u, a]),
        f = C.A.toURLSafe(t.proxy_url);
    return null == f ? null : (f.searchParams.append("format", "webp"), u && a) ? (0, n.jsx)(d.A, {
        attachment: t,
        posterUrl: f.toString(),
        guildId: p,
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
    } = e, n = a.originalItem, o = (0, p.dx)(p.k0.VOICE_MESSAGE, n.id), i = r.useCallback((e, a, r) => {
        (0, m.wQ)(t.id, n.duration_secs ?? null, a, t.author.id)
    }, [t, n.duration_secs]), l = r.useCallback((e, a) => {
        (0, m.dP)(t.id, n.duration_secs ?? null, e, t.author.id, a)
    }, [t, n.duration_secs]), c = r.useCallback(e => {
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
        onPause: l,
        onError: c,
        playbackCacheKey: o
    })
}

function P(e) {
    let t = e.item.originalItem;
    return (0, h._d)({
        ...e,
        url: t.url,
        fileName: (0, g.A)(t),
        fileSize: t.size,
        contentType: t.content_type
    })
}

function w(e) {
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
        clip_created_at: l,
        clip_participants: c,
        title: s,
        application: _
    } = t;
    return (0, n.jsx)(u.A, {
        createdAt: null != l ? Date.parse(l) : void 0,
        participantIds: c?.map(e => {
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