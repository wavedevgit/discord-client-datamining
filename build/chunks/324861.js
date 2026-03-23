/** chunk id: 324861 params = (module,exports,require) **/
l.d(t, {
    A: () => c
});
var a = l(64700),
    n = l(554146),
    r = l(73153),
    i = l(20439),
    o = l(890687),
    s = l(654487);
let c = () => {
    let e = (0, i.A)(n.M.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
        t = (0, i.A)(n.M.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
        l = (0, i.A)(n.M.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK),
        c = a.useCallback(() => {
            e.isDismissed && e.handleToggleDismissState(), t.isDismissed && t.handleToggleDismissState(), l.isDismissed && l.handleToggleDismissState(), r.h.dispatch({
                type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET"
            })
        }, [t, l, e]),
        {
            handleResetStatusClick: u
        } = (0, o.j$)(s.Fw);
    return {
        resetOnboardingExperience: c,
        resetQuestStatus: u
    }
}