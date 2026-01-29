/** Chunk was on 4670 **/
/** chunk id: 337313, original params: e,t,i (module,exports,require) **/
i.d(t, {
    S: () => A,
    T: () => S
});
var n = i(311907),
    l = i(233545),
    s = i(419954),
    r = i(430452),
    a = i(412780),
    u = i(287809),
    o = i(837921),
    d = i(780964),
    T = i(731854),
    c = i(985018);

function A() {
    return (0, n.bG)([u.default, r.A], () => {
        var e;
        let t = u.default.getCurrentUser(),
            i = null != (e = null == t ? void 0 : t.isStaff()) && e,
            n = "canary" === o.Ay.releaseChannel || "development" === o.Ay.releaseChannel,
            l = r.A.supports(T.O5.CONNECTION_REPLAY);
        return i && n && l
    })
}
let S = (0, s.zD)(d.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
    useTitle: () => c.intl.string(c.t.U4FgFK),
    useSubtitle: () => c.intl.string(c.t.Lm72RU),
    useValue: function() {
        return (0, n.bG)([a.Ay], () => a.Ay.shouldRecordNextConnection())
    },
    setValue: l.Et,
    usePredicate: A
})