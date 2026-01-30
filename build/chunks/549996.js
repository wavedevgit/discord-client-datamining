/** chunk id: 549996, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    c: () => c
});
var r = n(64700),
    i = n(311907),
    a = n(816733),
    o = n(597758),
    s = n(412260),
    l = n(852218);

function c(e) {
    return r.useEffect(() => {
        (0, o.BE)()
    }, []), (0, i.bG)([s.A, a.A], () => {
        let t = s.A.getMarketingComponentByType(e);
        if (null == t) return null;
        let n = t.promotionId,
            r = s.A.getPromotionByTypeAndId(l.pt.MARKETING_MOMENT, n);
        if ((null == r ? void 0 : r.trialId) != null) {
            let e = a.A.getUserTrialOffer(r.trialId);
            if (null == e || null != e.expires_at && Date.parse(e.expires_at) < Date.now()) return null
        }
        return t
    })
}