/** chunk id: 793683 params = (module,exports,require) **/
"use strict";
n.d(t, {
    v: () => c
});
var i = n(64700),
    s = n(793574),
    l = n(979286),
    r = n(92246),
    a = n(201805),
    o = n(758836);

function c(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: c,
        onCloseModal: d,
        shouldShowShopIfAlreadyClaimed: u
    } = e, h = (0, a.ix)({
        quest: t,
        questContent: n,
        sourceQuestContent: c
    });
    return i.useCallback(e => {
        (0, r.ks)(t.config) && t.userStatus?.claimedAt != null && u ? (d?.(e), (0, l.Cz)({
            tab: o.G2.ORBS,
            analyticsLocations: [],
            analyticsSource: s.A.QUEST_HOME_PAGE
        })) : ((0, r.K9)(t.config) && d?.(e), h())
    }, [t.config, t.userStatus?.claimedAt, h, u, d])
}