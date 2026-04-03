/** chunk id: 320118 params = (module,exports,require) **/
r.d(t, {
    F: () => o
});
var n = r(311907),
    a = r(895944),
    i = r(649032),
    s = r(26508),
    l = r(673608),
    d = r(861495);

function o(e) {
    let t = e?.location ?? "useNitroProgramReward",
        r = (0, s.DK)(i.W.NITRO, t),
        {
            isReady: o,
            programReward: c,
            totalDays: u
        } = (0, n.cf)([a.A], () => ({
            isReady: a.A.isReady(),
            programReward: a.A.getRewardForProgram(i.W.NITRO),
            totalDays: a.A.getTotalDaysInDuration(i.W.NITRO)
        })),
        m = (0, l.q)(),
        _ = (0, d.Q)(c, r),
        p = (0, d.Y)(c, u, r);
    return {
        isEligible: r,
        isReady: o,
        passesGeneralUIInvariant: _,
        passesProgressBarInvariant: p,
        programReward: c,
        shouldFetch: m,
        totalDays: u
    }
}