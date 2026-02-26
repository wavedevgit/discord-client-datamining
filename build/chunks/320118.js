/** chunk id: 320118, original params: e,t,n (module,exports,require) **/
n.d(t, {
    F: () => u
});
var r = n(311907),
    a = n(895944),
    l = n(649032),
    s = n(26508),
    i = n(673608),
    d = n(861495);

function u(e) {
    let t = e?.location ?? "useNitroProgramReward",
        n = (0, s.DK)(l.W.NITRO, t),
        {
            isReady: u,
            programReward: o,
            totalDays: c
        } = (0, r.cf)([a.A], () => ({
            isReady: a.A.isReady(),
            programReward: a.A.getRewardForProgram(l.W.NITRO),
            totalDays: a.A.getTotalDaysInDuration(l.W.NITRO)
        })),
        m = (0, i.q)(),
        h = (0, d.Q)(o, n),
        p = (0, d.Y)(o, c, n);
    return {
        isEligible: n,
        isReady: u,
        passesGeneralUIInvariant: h,
        passesProgressBarInvariant: p,
        programReward: o,
        shouldFetch: m,
        totalDays: c
    }
}