/** Chunk was on 28979 **/
/** chunk id: 337313, original params: t,e,i (module,exports,require) **/
i.d(e, {
    S: () => S,
    T: () => E
});
var n = i(311907),
    l = i(233545),
    s = i(419954),
    r = i(430452),
    u = i(412780),
    a = i(287809),
    o = i(837921),
    T = i(780964),
    d = i(731854),
    A = i(985018);

function S() {
    return (0, n.bG)([a.default, r.A], () => {
        var t;
        let e = a.default.getCurrentUser(),
            i = null != (t = null == e ? void 0 : e.isStaff()) && t,
            n = "canary" === o.Ay.releaseChannel || "development" === o.Ay.releaseChannel,
            l = r.A.supports(d.O5.CONNECTION_REPLAY);
        return i && n && l
    })
}
let E = (0, s.zD)(T.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
    useTitle: () => A.intl.string(A.t.U4FgFK),
    useSubtitle: () => A.intl.string(A.t.Lm72RU),
    useValue: function() {
        return (0, n.bG)([u.Ay], () => u.Ay.shouldRecordNextConnection())
    },
    setValue: l.Et,
    usePredicate: S
})