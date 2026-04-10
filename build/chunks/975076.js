/** chunk id: 975076 params = (module,exports,require) **/
n.d(t, {
    I: () => o
});
var i = n(311907),
    l = n(576705),
    r = n(125022),
    a = n(558593),
    s = n(652215);

function o(e) {
    let t = (0, a.q)(e, "useCanShowGameClaimCoachmark");
    return (0, i.bG)([l.A, r.A], () => !!t && !!l.A.canWithPartialContext(s.xBc.ADMINISTRATOR, {
        guildId: e
    }) && r.A.hasUnclaimedGames(e), [e, t])
}