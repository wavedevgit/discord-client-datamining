/** chunk id: 320118 params = (module,exports,require) **/
n.d(t, {
    F: () => o
});
var r = n(311907),
    l = n(895944),
    s = n(649032),
    a = n(26508),
    i = n(673608),
    d = n(861495);

function o(e) {
    let t = e?.location ?? "useNitroProgramReward",
        n = (0, a.DK)(s.W.NITRO, t),
        {
            isReady: o,
            programReward: c,
            totalDays: u
        } = (0, r.cf)([l.A], () => ({
            isReady: l.A.isReady(),
            programReward: l.A.getRewardForProgram(s.W.NITRO),
            totalDays: l.A.getTotalDaysInDuration(s.W.NITRO)
        })),
        m = (0, i.q)(),
        h = (0, d.Q)(c, n),
        x = (0, d.Y)(c, u, n);
    return {
        isEligible: n,
        isReady: o,
        passesGeneralUIInvariant: h,
        passesProgressBarInvariant: x,
        programReward: c,
        shouldFetch: m,
        totalDays: u
    }
}