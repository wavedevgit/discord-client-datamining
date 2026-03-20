/** chunk id: 266620 params = (module,exports,require) **/
n.d(t, {
    Cr: () => I,
    I1: () => E,
    Nj: () => v,
    R6: () => T,
    SX: () => b,
    UB: () => y,
    YE: () => S
}), n(938796);
var i = n(627968),
    r = n(64700),
    a = n(665260),
    l = n(311907),
    s = n(571356),
    o = n(990078),
    d = n(397927),
    c = n(458517),
    u = n(713021),
    _ = n(121489),
    m = n(734057),
    h = n(644447),
    p = n(998218),
    g = n(465856),
    A = n(652176),
    x = n(652215),
    f = n(985018),
    C = n(679464);

function I(e) {
    let t = e.item.originalItem;
    return (0, A.LL)({
        ...e,
        alt: t.description,
        src: (0, h.E)({
            proxyURL: t.proxy_url,
            url: t.url
        }),
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        contentType: t.content_type,
        originalContentType: t.original_content_type,
        srcIsAnimated: (0, a.Lt)(t.flags ?? 0, x.sbO.IS_ANIMATED),
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

function E(e) {
    let t = e.item.originalItem,
        n = r.useCallback(() => (0, a.Lt)(t.flags ?? 0, x.sbO.IS_CLIP) ? (0, i.jsx)(o.m, {
            text: f.intl.string(f.t["/fgfWh"]),
            children: (0, i.jsxs)("div", {
                className: C.M,
                children: [(0, i.jsx)(d.xgA, {
                    size: "xs",
                    color: "currentColor"
                }), (0, i.jsx)(s.E, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: f.intl.string(f.t.oA4afG)
                })]
            })
        }) : null, [t]),
        l = p.A.toURLSafe(t.proxy_url);
    return null == l ? null : (l.searchParams.append("format", "webp"), (0, A.$o)({
        ...e,
        alt: t.description,
        poster: l.toString(),
        fileSize: t.size,
        fileName: (0, g.A)(t),
        src: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholder_version,
        srcIsAnimated: (0, a.Lt)(t.flags ?? 0, x.sbO.IS_ANIMATED),
        renderOverlayContent: n,
        sourceMetadata: {
            message: e.message,
            identifier: {
                type: "attachment",
                attachmentId: t.id,
                filename: t.filename,
                size: t.size
            }
        }
    }))
}

function v(e) {
    let t = e.item.originalItem;
    return (0, A.gL)({
        ...e,
        fileSize: t.size,
        fileName: (0, g.A)(t),
        src: t.url
    })
}

function b(e) {
    let {
        message: t,
        item: n
    } = e, i = n.originalItem, a = (0, u.dx)(u.k0.VOICE_MESSAGE, i.id), l = r.useCallback((e, n, r) => {
        (0, _.wQ)(t.id, i.duration_secs ?? null, n, t.author.id)
    }, [t, i.duration_secs]), s = r.useCallback((e, n) => {
        (0, _.dP)(t.id, i.duration_secs ?? null, e, t.author.id, n)
    }, [t, i.duration_secs]), o = r.useCallback(e => {
        (0, _._O)(t.id, e?.message ?? null)
    }, [t]);
    return (0, A.P$)({
        ...e,
        fileSize: i.size,
        fileName: (0, g.A)(i),
        src: i.url,
        durationSecs: i.duration_secs,
        waveform: i.waveform,
        onPlay: l,
        onPause: s,
        onError: o,
        playbackCacheKey: a
    })
}

function T(e) {
    let t = e.item.originalItem;
    return (0, A._d)({
        ...e,
        url: t.url,
        fileName: (0, g.A)(t),
        fileSize: t.size,
        contentType: t.content_type
    })
}

function y(e) {
    let t = e.item.originalItem;
    return (0, A.Dk)({
        ...e,
        url: t.url,
        fileName: (0, g.A)(t),
        fileSize: t.size
    })
}

function S(e) {
    return "CLIP" === e.item.type ? (0, i.jsx)(N, {
        attachment: e.item.originalItem,
        message: e.message
    }) : null
}

function N(e) {
    let {
        attachment: t,
        message: n
    } = e, r = n.channel_id, a = (0, l.bG)([m.A], () => m.A.getBasicChannel(r)?.guild_id), {
        clip_created_at: s,
        clip_participants: o,
        title: d,
        application: u
    } = t;
    return (0, i.jsx)(c.A, {
        createdAt: null != s ? Date.parse(s) : void 0,
        participantIds: o?.map(e => {
            let {
                id: t
            } = e;
            return t
        }) ?? [],
        applicationId: u?.id,
        title: d,
        guildId: a
    })
}