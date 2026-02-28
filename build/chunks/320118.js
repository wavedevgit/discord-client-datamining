/** chunk id: 320118, original params: e,t,n (module,exports,require) **/
n.d(t, {
    F: () => u
});
var r = n(311907),
    a = n(895944),
    s = n(649032),
    l = n(26508),
    i = n(673608),
    d = n(861495);

function u(e) {
    let t = e?.location ?? "useNitroProgramReward",
        n = (0, l.DK)(s.W.NITRO, t),
        {
            isReady: u,
            programReward: o,
            totalDays: c
        } = (0, r.cf)([a.A], () => ({
            isReady: a.A.isReady(),
            programReward: a.A.getRewardForProgram(s.W.NITRO),
            totalDays: a.A.getTotalDaysInDuration(s.W.NITRO)
        })),
        m = (0, i.q)(),
        _ = (0, d.Q)(o, n),
        R = (0, d.Y)(o, c, n);
    return {
        isEligible: n,
        isReady: u,
        passesGeneralUIInvariant: _,
        passesProgressBarInvariant: R,
        programReward: o,
        shouldFetch: m,
        totalDays: c
    }
}