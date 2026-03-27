/** chunk id: 231265 params = (module,exports,require) **/
r.d(t, {
    C: () => o,
    _: () => c
});
var i = r(40185),
    n = r(478097),
    a = r(196042),
    s = r(412260),
    l = r(985018);
async function o() {
    let e = s.A.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        r = await (0, i.nq)(),
        l = (0, a.RK)("bogo announcement modal eligibility"),
        o = (0, n.BI)("bogo announcement modal marketing");
    return t && o && l && r
}

function c() {
    return l.intl.string(l.t.iQTfWx)
}