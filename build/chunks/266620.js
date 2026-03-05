/** chunk id: 266620, original params: e,a,t (module,exports,require) **/
t.d(a, {
    Cr: () => T,
    I1: () => b,
    Nj: () => y,
    R6: () => v,
    SX: () => E,
    UB: () => x,
    YE: () => S
}), t(938796);
var n = t(627968),
    i = t(64700),
    o = t(665260),
    r = t(311907),
    c = t(571356),
    l = t(990078),
    s = t(397927),
    _ = t(458517),
    d = t(713021),
    u = t(121489),
    m = t(734057),
    p = t(644447),
    f = t(998218),
    A = t(465856),
    I = t(652176),
    g = t(652215),
    C = t(985018),
    h = t(679464);

function T(e) {
    let a = e.item.originalItem;
    return (0, I.LL)({
        ...e,
        alt: a.description,
        src: (0, p.E)({
            proxyURL: a.proxy_url,
            url: a.url
        }),
        original: a.url,
        placeholder: a.placeholder,
        placeholderVersion: a.placeholder_version,
        contentType: a.content_type,
        originalContentType: a.original_content_type,
        srcIsAnimated: (0, o.Lt)(a.flags ?? 0, g.sbO.IS_ANIMATED),
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

function b(e) {
    let a = e.item.originalItem,
        t = i.useCallback(() => (0, o.Lt)(a.flags ?? 0, g.sbO.IS_CLIP) ? (0, n.jsx)(l.m, {
            text: C.intl.string(C.t["/fgfWh"]),
            children: (0, n.jsxs)("div", {
                className: h.M,
                children: [(0, n.jsx)(s.xgA, {
                    size: "xs",
                    color: "currentColor"
                }), (0, n.jsx)(c.E, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: C.intl.string(C.t.oA4afG)
                })]
            })
        }) : null, [a]),
        r = f.A.toURLSafe(a.proxy_url);
    return null == r ? null : (r.searchParams.append("format", "webp"), (0, I.$o)({
        ...e,
        alt: a.description,
        poster: r.toString(),
        fileSize: a.size,
        fileName: (0, A.A)(a),
        src: a.url,
        placeholder: a.placeholder,
        placeholderVersion: a.placeholder_version,
        srcIsAnimated: (0, o.Lt)(a.flags ?? 0, g.sbO.IS_ANIMATED),
        renderOverlayContent: t,
        sourceMetadata: {
            message: e.message,
            identifier: {
                type: "attachment",
                attachmentId: a.id,
                filename: a.filename,
                size: a.size
            }
        }
    }))
}

function y(e) {
    let a = e.item.originalItem;
    return (0, I.gL)({
        ...e,
        fileSize: a.size,
        fileName: (0, A.A)(a),
        src: a.url
    })
}

function E(e) {
    let {
        message: a,
        item: t
    } = e, n = t.originalItem, o = (0, d.dx)(d.k0.VOICE_MESSAGE, n.id), r = i.useCallback((e, t, i) => {
        (0, u.wQ)(a.id, n.duration_secs ?? null, t, a.author.id)
    }, [a, n.duration_secs]), c = i.useCallback((e, t) => {
        (0, u.dP)(a.id, n.duration_secs ?? null, e, a.author.id, t)
    }, [a, n.duration_secs]), l = i.useCallback(e => {
        (0, u._O)(a.id, e?.message ?? null)
    }, [a]);
    return (0, I.P$)({
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

function v(e) {
    let a = e.item.originalItem;
    return (0, I._d)({
        ...e,
        url: a.url,
        fileName: (0, A.A)(a),
        fileSize: a.size,
        contentType: a.content_type
    })
}

function x(e) {
    let a = e.item.originalItem;
    return (0, I.Dk)({
        ...e,
        url: a.url,
        fileName: (0, A.A)(a),
        fileSize: a.size
    })
}

function S(e) {
    return "CLIP" === e.item.type ? (0, n.jsx)(O, {
        attachment: e.item.originalItem,
        message: e.message
    }) : null
}

function O(e) {
    let {
        attachment: a,
        message: t
    } = e, i = t.channel_id, o = (0, r.bG)([m.A], () => m.A.getBasicChannel(i)?.guild_id), {
        clip_created_at: c,
        clip_participants: l,
        title: s,
        application: d
    } = a;
    return (0, n.jsx)(_.A, {
        createdAt: null != c ? Date.parse(c) : void 0,
        participantIds: l?.map(e => {
            let {
                id: a
            } = e;
            return a
        }) ?? [],
        applicationId: d?.id,
        title: s,
        guildId: o
    })
}