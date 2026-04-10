/** chunk id: 414967 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968);
n(64700);
var l = n(877624),
    r = n(397927),
    a = n(73153),
    s = n(272355),
    o = n(835095),
    d = n(287809),
    c = n(816733),
    u = n(536194),
    A = n(40185),
    h = n(881489),
    _ = n(412260),
    m = n(852218),
    g = n(231265),
    p = n(979080),
    E = n(652215);
let I = "PremiumServerDriveAnnouncementModal";
class f extends s.A {
    _initialize() {
        a.h.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), a.h.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview), a.h.subscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess), a.h.subscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess), a.h.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate)
    }
    _terminate() {
        a.h.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal), a.h.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview), a.h.unsubscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess), a.h.unsubscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess), a.h.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate)
    }
    maybeShowAnnouncementModalFromPromotions = e => {
        for (let t of e)
            if (null != t.marketingComponents) {
                if (null != t.trialId) {
                    let e = c.A.getUserTrialOffer(t.trialId);
                    if (null == e || null != e.expires_at && Date.parse(e.expires_at) < Date.now()) continue
                }
                for (let e of t.marketingComponents)
                    if (e.component_type === l.C.ANNOUNCEMENT_MODAL) return void this.maybeOpenServerDriveAnnouncementModal(e.id, e.promotion_id, e.properties, !1)
            }(0, h.al)(), (0, h.QM)()
    };
    handleActivePromotionsFetchSuccess = e => {
        let {
            promotions: t
        } = e;
        this.maybeShowAnnouncementModalFromPromotions(t.map(e => o.A.createFromServer(e)))
    };
    handleUserOfferFetchSuccess = e => {
        let {
            userTrialOffer: t
        } = e;
        null != t && this.maybeShowAnnouncementModalFromPromotions(Object.values(_.A.promotionsByType[m.pt.MARKETING_MOMENT]))
    };
    handleEntitlementCreate = e => {
        let {
            entitlement: t
        } = e;
        u.P.isDisallowPopupsSet() || t.source_type !== E.GD.REVERSE_TRIAL || (0, h.al)()
    };
    maybeOpenServerDriveAnnouncementModal = async (e, t, l, a) => {
        if ((0, r.kBI)(I)) return !1;
        let s = (0, p.H)({
            promotionId: t,
            content: l,
            isPreview: a
        });
        if (null != s) return (!1 !== a || s?.contentIdentifier !== "summer_bogo_content" || !!await (0, g.C)()) && ((0, r.mMO)(async () => {
            let {
                default: l
            } = await Promise.resolve().then(n.bind(n, 979080));
            return n => (0, i.jsx)(l, {
                renderModalProps: n,
                componentId: e,
                promotionId: t,
                properties: s
            })
        }, {
            modalKey: I
        }), !0)
    };
    handlePreview = e => {
        let {
            data: t
        } = e;
        this.maybeOpenServerDriveAnnouncementModal(t.id, t.promotion_id, t.properties, !0)
    };
    mayShowAnnouncementModal = async () => {
        if (await (0, A.hb)(), u.P.isDisallowPopupsSet()) return;
        let e = d.default.getCurrentUser();
        if (null != e && !e.verified) return
    }
}
let C = new f