/** chunk id: 266620, original params: e,t,i (module,exports,require) **/
i.d(t, {
    Cr: () => h,
    I1: () => T,
    Nj: () => A,
    R6: () => P,
    SX: () => v,
    UB: () => S,
    YE: () => N
}), i(228524), i(938796);
var n = i(627968),
    a = i(64700),
    r = i(665260),
    o = i(311907),
    l = i(571356),
    c = i(990078),
    s = i(397927),
    _ = i(458517),
    d = i(713021),
    u = i(121489),
    m = i(734057),
    f = i(644447),
    p = i(998218),
    O = i(465856),
    I = i(652176),
    E = i(652215),
    y = i(985018),
    g = i(928438);

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
            return Object.getOwnPropertyDescriptor(i, e).enumerable
        }))), n.forEach(function(t) {
            var n;
            n = i[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        })
    }
    return e
}

function b(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            i.push.apply(i, n)
        }
        return i
    })(Object(t)).forEach(function(i) {
        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i))
    }), e
}

function h(e) {
    var t;
    let i = e.item.originalItem;
    return (0, I.LL)(b(C({}, e), {
        alt: i.description,
        src: (0, f.E)({
            proxyURL: i.proxy_url,
            url: i.url
        }),
        original: i.url,
        placeholder: i.placeholder,
        placeholderVersion: i.placeholder_version,
        contentType: i.content_type,
        originalContentType: i.original_content_type,
        srcIsAnimated: (0, r.Lt)(null != (t = i.flags) ? t : 0, E.sbO.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: {
                type: "attachment",
                attachmentId: i.id,
                filename: i.filename,
                title: i.title,
                size: i.size
            }
        },
        analyticsSource: "ImageComponentForMessageAttachment"
    }))
}

function T(e) {
    var t;
    let i = e.item.originalItem,
        o = a.useCallback(() => {
            var e;
            return (0, r.Lt)(null != (e = i.flags) ? e : 0, E.sbO.IS_CLIP) ? (0, n.jsx)(c.m, {
                text: y.intl.string(y.t["/fgfWh"]),
                children: (0, n.jsxs)("div", {
                    className: g.M,
                    children: [(0, n.jsx)(s.xgA, {
                        size: "xs",
                        color: "currentColor"
                    }), (0, n.jsx)(l.E, {
                        variant: "text-xs/semibold",
                        color: "always-white",
                        children: y.intl.string(y.t.oA4afG)
                    })]
                })
            }) : null
        }, [i]),
        _ = p.A.toURLSafe(i.proxy_url);
    return null == _ ? null : (_.searchParams.append("format", "webp"), (0, I.$o)(b(C({}, e), {
        alt: i.description,
        poster: _.toString(),
        fileSize: i.size,
        fileName: (0, O.A)(i),
        src: i.url,
        placeholder: i.placeholder,
        placeholderVersion: i.placeholder_version,
        srcIsAnimated: (0, r.Lt)(null != (t = i.flags) ? t : 0, E.sbO.IS_ANIMATED),
        renderOverlayContent: o,
        sourceMetadata: {
            message: e.message,
            identifier: {
                type: "attachment",
                attachmentId: i.id,
                filename: i.filename,
                size: i.size
            }
        }
    })))
}

function A(e) {
    let t = e.item.originalItem;
    return (0, I.gL)(b(C({}, e), {
        fileSize: t.size,
        fileName: (0, O.A)(t),
        src: t.url
    }))
}

function v(e) {
    let {
        message: t,
        item: i
    } = e, n = i.originalItem, r = (0, d.dx)(d.k0.VOICE_MESSAGE, n.id), o = a.useCallback((e, i, a) => {
        var r;
        (0, u.wQ)(t.id, null != (r = n.duration_secs) ? r : null, i, t.author.id)
    }, [t, n.duration_secs]), l = a.useCallback((e, i) => {
        var a;
        (0, u.dP)(t.id, null != (a = n.duration_secs) ? a : null, e, t.author.id, i)
    }, [t, n.duration_secs]), c = a.useCallback(e => {
        var i;
        (0, u._O)(t.id, null != (i = null == e ? void 0 : e.message) ? i : null)
    }, [t]);
    return (0, I.P$)(b(C({}, e), {
        fileSize: n.size,
        fileName: (0, O.A)(n),
        src: n.url,
        durationSecs: n.duration_secs,
        waveform: n.waveform,
        onPlay: o,
        onPause: l,
        onError: c,
        playbackCacheKey: r
    }))
}

function P(e) {
    let t = e.item.originalItem;
    return (0, I._d)(b(C({}, e), {
        url: t.url,
        fileName: (0, O.A)(t),
        fileSize: t.size,
        contentType: t.content_type
    }))
}

function S(e) {
    let t = e.item.originalItem;
    return (0, I.Dk)(b(C({}, e), {
        url: t.url,
        fileName: (0, O.A)(t),
        fileSize: t.size
    }))
}

function N(e) {
    return "CLIP" === e.item.type ? (0, n.jsx)(L, {
        attachment: e.item.originalItem,
        message: e.message
    }) : null
}

function L(e) {
    var t;
    let {
        attachment: i,
        message: a
    } = e, r = a.channel_id, l = (0, o.bG)([m.A], () => {
        var e;
        return null == (e = m.A.getBasicChannel(r)) ? void 0 : e.guild_id
    }), {
        clip_created_at: c,
        clip_participants: s,
        title: d,
        application: u
    } = i;
    return (0, n.jsx)(_.A, {
        createdAt: null != c ? Date.parse(c) : void 0,
        participantIds: null != (t = null == s ? void 0 : s.map(e => {
            let {
                id: t
            } = e;
            return t
        })) ? t : [],
        applicationId: null == u ? void 0 : u.id,
        title: d,
        guildId: l
    })
}