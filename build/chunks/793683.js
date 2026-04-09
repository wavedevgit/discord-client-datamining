/** chunk id: 793683 params = (module,exports,require) **/
s.d(t, {
    v: () => u
});
var n = s(64700),
    l = s(793574),
    i = s(979286),
    a = s(92246),
    o = s(201805),
    r = s(758836);

function u(e) {
    let {
        quest: t,
        questContent: s,
        sourceQuestContent: u,
        onCloseModal: d,
        shouldShowShopIfAlreadyClaimed: c
    } = e, m = (0, o.ix)({
        quest: t,
        questContent: s,
        sourceQuestContent: u
    });
    return n.useCallback(e => {
        (0, a.ks)(t.config) && t.userStatus?.claimedAt != null && c ? (d?.(e), (0, i.Cz)({
            tab: r.G2.ORBS,
            analyticsLocations: [],
            analyticsSource: l.A.QUEST_HOME_PAGE
        })) : ((0, a.K9)(t.config) && d?.(e), m())
    }, [t.config, t.userStatus?.claimedAt, m, c, d])
}