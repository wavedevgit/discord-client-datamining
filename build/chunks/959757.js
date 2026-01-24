/** Chunk was on 47841 **/
/** chunk id: 959757, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(284009),
    i = n.n(r),
    l = n(975807),
    s = n(997509),
    a = n(555325),
    o = n(652215),
    c = n(985018);

function d(e) {
    let t = (0, a.dp)(e);
    switch (t) {
        case a.qS.NEEDS_COMMUNITY:
            return {
                visibility: t, noticeText: c.intl.string(c.t["0Z2Qxt"]), ctaLabel: c.intl.string(c.t.BOJpl0), ctaClickable: null != e, onCtaClicked() {
                    var t;
                    i()(null != e, "Guild must be not null open COMMUNITY settings"), s.A.open(null != (t = null == e ? void 0 : e.id) ? t : "", o.BEX.COMMUNITY)
                }
            };
        case a.qS.WAITLIST_ONLY:
            return {
                visibility: t, noticeText: c.intl.string(c.t["5vz88G"]), ctaLabel: c.intl.string(c.t["6yjvmg"]), ctaClickable: !0, onCtaClicked() {
                    (0, l.A)("https://dis.gd/creators-waitlist")
                }
            };
        default:
            return
    }
}