/** chunk id: 320118 params = (module,exports,require) **/
n.d(t, {
    F: () => o
});
var s = n(311907),
    a = n(895944),
    l = n(649032),
    r = n(26508),
    i = n(673608),
    d = n(861495);

function o(e) {
    let t = e?.location ?? "useNitroProgramReward",
        n = (0, r.DK)(l.W.NITRO, t),
        {
            isReady: o,
            programReward: c,
            totalDays: u
        } = (0, s.cf)([a.A], () => ({
            isReady: a.A.isReady(),
            programReward: a.A.getRewardForProgram(l.W.NITRO),
            totalDays: a.A.getTotalDaysInDuration(l.W.NITRO)
        })),
        h = (0, i.q)(),
        m = (0, d.Q)(c, n),
        x = (0, d.Y)(c, u, n);
    return {
        isEligible: n,
        isReady: o,
        passesGeneralUIInvariant: m,
        passesProgressBarInvariant: x,
        programReward: c,
        shouldFetch: h,
        totalDays: u
    }
}