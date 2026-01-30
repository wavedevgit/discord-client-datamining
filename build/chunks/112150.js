/** Chunk was on 64935 **/
/** chunk id: 112150, original params: e,t,n (module,exports,require) **/
n.d(t, {
    f: () => c
});
var r = n(64700),
    i = n(435582),
    l = n(283488),
    a = n(735991),
    s = n(486020),
    o = n(572211);

function c(e) {
    let {
        bot: t
    } = e, n = (0, a.Ag)(e), {
        url: c
    } = (0, l.A)({
        applicationId: n ? e.id : void 0,
        size: 600,
        names: ["embedded_cover"]
    });
    return r.useMemo(() => {
        let r, l, u = o.u.BOT;
        if (null != t) {
            let {
                banner: e
            } = t;
            r = (0, s.z)({
                id: t.id,
                banner: e,
                size: 512,
                canAnimate: !1
            }), (0, s.VI)(e) && null == c && (l = (0, s.z)({
                id: t.id,
                banner: e,
                size: 512,
                canAnimate: !0
            }))
        }
        if (n) {
            let t = (0, a.Cx)(e);
            null != c && (r = c, u = o.u.ACTIVITY);
            let n = null == t ? void 0 : t.activity_preview_video_asset_id;
            null != n && (l = (0, i.A)(e.id, n), u = o.u.ACTIVITY)
        }
        return {
            staticBannerSrc: r,
            videoBannerSrc: l,
            bannerAspectRatio: u
        }
    }, [c, t, n, e])
}