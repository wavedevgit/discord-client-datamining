/** chunk id: 793683, original params: e,t,n (module,exports,require) **/
n.d(t, {
    v: () => u
});
var r = n(64700),
    i = n(793574),
    s = n(979286),
    l = n(92246),
    a = n(201805),
    o = n(758836);

function u(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: u,
        onCloseModal: c,
        shouldShowShopIfAlreadyClaimed: d
    } = e, m = (0, a.ix)({
        quest: t,
        questContent: n,
        sourceQuestContent: u
    });
    return r.useCallback(e => {
        (0, l.ks)(t.config) && t.userStatus?.claimedAt != null && d ? (c?.(e), (0, s.Cz)({
            tab: o.G2.ORBS,
            analyticsLocations: [],
            analyticsSource: i.A.QUEST_HOME_PAGE
        })) : ((0, l.K9)(t.config) && c?.(e), m())
    }, [t.config, t.userStatus?.claimedAt, m, d, c])
}