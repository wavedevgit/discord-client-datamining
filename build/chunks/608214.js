/** chunk id: 608214 params = (module,exports,require) **/
n.d(t, {
    Ay: () => E,
    FX: () => w,
    VZ: () => C
}), n(938796);
var i = n(627968),
    r = n(64700),
    a = n(665260),
    l = n(672477),
    o = n(275687),
    s = n(731068),
    d = n(619517),
    u = n(248643),
    h = n(803316),
    c = n(652176),
    m = n(644447),
    p = n(587481),
    g = n(998218),
    f = n(454290),
    x = n(504149),
    A = n(652215),
    y = n(176739);

function w(e, t) {
    return {
        ...e,
        type: (0, s.FE)(e),
        original: e.url,
        srcIsAnimated: (0, a.Lt)(e.flags, s.e5.IS_ANIMATED),
        sourceMetadata: {
            message: t
        }
    }
}

function C(e) {
    let t = g.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString())
}
let E = r.memo(function(e) {
    var t, n, r, s, w;
    let E, {
            media: v,
            obscured: I = !1,
            maxWidth: j,
            maxHeight: M,
            onContextMenu: S
        } = e,
        {
            width: N,
            height: O,
            url: P,
            proxyUrl: _,
            alt: T,
            type: U,
            maxWidth: V,
            maxHeight: b,
            ...D
        } = v,
        {
            zoomed: L
        } = (0, f.Q)(),
        {
            newEmbedUi: R
        } = l.Q.useConfig({
            location: "MediaViewerMedia"
        }),
        k = function(e) {
            if (e?.identifier?.type !== "attachment" || null == e.message) return null;
            let t = e.identifier.attachmentId,
                n = e.message.attachments.find(e => e.id === t);
            return null != n && (0, a.Lt)(n.flags ?? 0, A.sbO.IS_CLIP) ? n : null
        }(v.sourceMetadata),
        F = (t = L, n = P, r = _, s = v.contentType, w = v.originalContentType, t && g.A.isDiscordAssetUrl(n, s, w) ? (0, h.XW)(n, s, w) : (0, m.E)({
            proxyURL: r,
            url: n
        })),
        W = null != N && 0 !== N && null != O && 0 !== O;
    if ("VIDEO" === U && W && null != _) {
        let e = v.poster ?? C(_);
        if (null == e) return null;
        if (null != k && R) return (0, i.jsx)(o.A, {
            attachment: k,
            src: F,
            posterUrl: e,
            channelId: v.sourceMetadata?.message?.channel_id,
            maxWidth: j,
            maxHeight: M,
            active: !0,
            autoPlay: v.autoPlay ?? !I,
            autoMute: "function" == typeof v.autoMute ? v.autoMute() : v.autoMute ?? (0, p.uj)(),
            volume: (0, p.v1)(),
            onContextMenu: S,
            onVolumeChange: p.ls,
            onMutedChange: p.y5
        });
        let t = v.renderLinkComponent ?? c.bU;
        return (0, i.jsx)(u.A, {
            ...D,
            src: F,
            width: N,
            height: O,
            maxWidth: j,
            maxHeight: M,
            poster: e,
            naturalWidth: N,
            naturalHeight: O,
            volume: p.v1,
            autoMute: v.autoMute ?? p.uj,
            onVolumeChange: p.ls,
            onMute: p.y5,
            renderLinkComponent: t,
            autoPlay: v.autoPlay ?? !I,
            alt: T,
            onContextMenu: S,
            disableArrowKeySeek: !0
        })
    }
    return "IMAGE" === U && (E = W ? (0, i.jsx)(d.Ay, {
        ...D,
        src: F,
        width: N,
        height: O,
        maxWidth: j,
        maxHeight: M,
        useFullWidth: !0,
        shouldLink: !1,
        className: y.$_,
        animated: !I && v.animated,
        autoPlay: !I,
        alt: T,
        onContextMenu: S
    }) : (0, i.jsx)("img", {
        src: F,
        alt: T,
        onContextMenu: S,
        className: y.xx,
        style: {
            maxWidth: j,
            maxHeight: M
        }
    })), null != E ? (0, i.jsx)(x.A, {
        children: E
    }) : null
})