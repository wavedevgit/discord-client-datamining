/** chunk id: 320118, original params: e,t,r (module,exports,require) **/
r.d(t, {
    F: () => u
});
var n = r(311907),
    a = r(895944),
    l = r(649032),
    s = r(26508),
    i = r(673608),
    d = r(861495);

function u(e) {
    let t = e?.location ?? "useNitroProgramReward",
        r = (0, s.DK)(l.W.NITRO, t),
        {
            isReady: u,
            programReward: o,
            totalDays: c
        } = (0, n.cf)([a.A], () => ({
            isReady: a.A.isReady(),
            programReward: a.A.getRewardForProgram(l.W.NITRO),
            totalDays: a.A.getTotalDaysInDuration(l.W.NITRO)
        })),
        m = (0, i.q)(),
        _ = (0, d.Q)(o, r),
        R = (0, d.Y)(o, c, r);
    return {
        isEligible: r,
        isReady: u,
        passesGeneralUIInvariant: _,
        passesProgressBarInvariant: R,
        programReward: o,
        shouldFetch: m,
        totalDays: c
    }
}