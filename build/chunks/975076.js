/** chunk id: 975076 params = (module,exports,require) **/
n.d(t, {
    I: () => o
});
var i = n(311907),
    l = n(576705),
    a = n(125022),
    r = n(558593),
    s = n(652215);

function o(e) {
    let t = (0, r.q)(e, "useCanShowGameClaimCoachmark");
    return (0, i.bG)([l.A, a.A], () => !!t && !!l.A.canWithPartialContext(s.xBc.ADMINISTRATOR, {
        guildId: e
    }) && a.A.hasUnclaimedGames(e), [e, t])
}