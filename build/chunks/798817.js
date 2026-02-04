/** chunk id: 798817, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(342494),
    s = n(274372),
    o = n(372684),
    c = n(399925),
    u = n(665039),
    d = n(985018);

function p(e) {
    let {
        onOpenClipsGallery: t,
        clipIconRef: n,
        lastClipsSession: p
    } = e, h = (0, l.bG)([s.A], () => {
        var e;
        let t = null == (e = s.A.getLastClipsSession()) ? void 0 : e.newClipIds;
        return null == t ? null : s.A.getClips().filter(e => t.includes(e.id))[0]
    }), f = (0, u.j)(h), g = i.useCallback(() => {
        (0, c.jA)()
    }, []);
    return null == h ? null : h.type !== o.nQ.SCREENSHOT && h.type !== o.nQ.VOICE_CLIP && null != f ? (0, r.jsx)(a.HZ, {
        targetElementRef: {
            current: n
        },
        position: "bottom",
        title: d.intl.string(d.t.JugHO7),
        body: d.intl.format(d.t["+qxkzC"], {
            count: p.newClipIds.length
        }),
        assetUrl: f,
        disableMediaViewer: !0,
        caretConfig: {
            align: "center"
        },
        action: {
            text: d.intl.string(d.t.tQPBml),
            onClick: t
        },
        onRequestClose: g
    }) : (0, r.jsx)(a.AM, {
        targetElementRef: {
            current: n
        },
        position: "bottom",
        title: d.intl.string(d.t.JugHO7),
        body: d.intl.format(d.t["+qxkzC"], {
            count: p.newClipIds.length
        }),
        graphic: null != h.thumbnail ? {
            type: "image",
            src: h.thumbnail
        } : void 0,
        caretConfig: {
            align: "center"
        },
        actions: [{
            text: d.intl.string(d.t.tQPBml),
            onClick: t
        }],
        onRequestClose: g
    })
}