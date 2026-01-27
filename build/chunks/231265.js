/** Chunk was on 2292 **/
/** chunk id: 231265, original params: e,t,r (module,exports,require) **/
r.d(t, {
    C: () => o,
    _: () => c
});
var n = r(40185),
    i = r(478097),
    l = r(196042),
    a = r(412260),
    s = r(985018);
async function o() {
    let e = a.A.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        r = await (0, n.nq)(),
        {
            enabled: s
        } = l.oy.getCurrentConfig({
            location: "153d31_6"
        }, {
            autoTrackExposure: !1
        }),
        {
            enabled: o
        } = i.A.getCurrentConfig({
            location: "153d31_7"
        }, {
            autoTrackExposure: t && s && r
        });
    return t && o && s && r
}

function c() {
    return s.intl.string(s.t.iQTfWx)
}