/** chunk id: 337117 params = (module,exports,require) **/
n.d(t, {
    p: () => c
});
var i = n(554146),
    a = n(192308),
    l = n(771781),
    r = n(932001),
    s = n(245853),
    o = n(654487),
    d = n(49999);

function c() {
    let e = (0, a.useHasAnyModalOpen)(),
        t = (0, l.Ay)(e => e.postConnectionOpen),
        {
            shouldShowBonusOrbsUX: n,
            multiplier: c
        } = (0, s.Dl)(o.rE.NITRO_HOME_TAB),
        [u, A] = (0, r.kn)(!e && n && t ? [i.M.NITRO_TAB_QUEST_ORB_MULTIPLIER_TOOLTIP] : [], d.m.PRIVATE_CHANNELS_LIST);
    return {
        shouldShowBonusOrbsUX: u === i.M.NITRO_TAB_QUEST_ORB_MULTIPLIER_TOOLTIP,
        dismissOrbMultiplierTabTooltip: A,
        orbMultiplier: c
    }
}