/** chunk id: 154325, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    t: () => l
});
var r = n(469993),
    i = n(836039),
    a = n(567305),
    o = n(555325),
    s = n(287809);

function l(e) {
    var t;
    let n = e.ownerId === (null == (t = s.default.getCurrentUser()) ? void 0 : t.id);
    return (0, o.V9)({
        guild: e,
        isOwner: n,
        canManageGuildRoleSubscriptions: (0, o.X9)(e),
        isMonetizationWaitlistEnabledForGuild: (0, r.Kw)(e.id),
        isGuildEligibleForRoleSubscriptions: (0, a.OV)(e.id),
        isExpeditedMonetizationOnboardingGuild: (0, r.Sm)(e),
        isUserInCreatorMonetizationEligibleCountry: (0, r.Z1)(),
        shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.mk)(e.id)
    })
}