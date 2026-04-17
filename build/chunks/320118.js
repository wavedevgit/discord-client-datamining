/** chunk id: 320118 params = (module,exports,require) **/
n.d(t, {
    F: () => o
});
var s = n(311907),
    r = n(895944),
    a = n(649032),
    l = n(26508),
    i = n(673608),
    d = n(861495);

function o(e) {
    let t = e?.location ?? "useNitroProgramReward",
        n = (0, l.DK)(a.W.NITRO, t),
        {
            isReady: o,
            programReward: c,
            totalDays: u
        } = (0, s.cf)([r.A], () => ({
            isReady: r.A.isReady(),
            programReward: r.A.getRewardForProgram(a.W.NITRO),
            totalDays: r.A.getTotalDaysInDuration(a.W.NITRO)
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