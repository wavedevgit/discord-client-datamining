/** chunk id: 975076 params = (module,exports,require) **/
n.d(t, {
    I: () => o
});
var i = n(311907),
    a = n(576705),
    r = n(125022),
    l = n(558593),
    s = n(652215);

function o(e) {
    let t = (0, l.q)(e, "useCanShowGameClaimCoachmark");
    return (0, i.bG)([a.A, r.A], () => !!t && !!a.A.canWithPartialContext(s.xBc.ADMINISTRATOR, {
        guildId: e
    }) && r.A.hasUnclaimedGames(e), [e, t])
}