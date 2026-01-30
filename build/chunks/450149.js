/** chunk id: 450149, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(64700),
    i = n(311907),
    a = n(401843),
    o = n(384200),
    s = n(734057),
    l = n(576705),
    c = n(309010),
    u = n(818348);

function d(e, t, n) {
    let d = null == t || null == n,
        f = (0, i.bG)([s.A], () => s.A.getChannel(t)),
        p = (0, i.bG)([l.A], () => null != f && l.A.canBasicChannel(u.hV.CONNECT, f)),
        _ = (0, i.bG)([c.A], () => c.A.getVoiceChannelId() === t),
        {
            shouldFetchPreview: h,
            previewUrl: m,
            isLoading: g
        } = (0, i.cf)([o.A], () => ({
            shouldFetchPreview: !d && o.A.shouldFetchPreview(e, t, n),
            previewUrl: d ? null : o.A.getPreviewURL(e, t, n),
            isLoading: !d && o.A.getIsPreviewLoading(e, t, n)
        })),
        E = p || _;
    return (r.useEffect(() => {
        h && !d && E && (0, a.Tp)(e, t, n)
    }, [h, t, e, n, d, E]), d || !E) ? {
        previewUrl: void 0,
        isLoading: !1
    } : {
        previewUrl: m,
        isLoading: g
    }
}