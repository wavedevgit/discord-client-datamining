/** chunk id: 324861, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(64700),
    i = n(554146),
    a = n(73153),
    o = n(20439),
    s = n(890687),
    l = n(654487);
let c = () => {
    let e = (0, o.A)(i.M.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
        t = (0, o.A)(i.M.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
        n = (0, o.A)(i.M.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK),
        c = r.useCallback(() => {
            e.isDismissed && e.handleToggleDismissState(), t.isDismissed && t.handleToggleDismissState(), n.isDismissed && n.handleToggleDismissState(), a.h.dispatch({
                type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET"
            })
        }, [t, n, e]),
        {
            handleResetStatusClick: u
        } = (0, s.j$)(l.Fw);
    return {
        resetOnboardingExperience: c,
        resetQuestStatus: u
    }
}