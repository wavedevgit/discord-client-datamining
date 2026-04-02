/** chunk id: 320118 params = (module,exports,require) **/
r.d(t, {
    F: () => d
});
var a = r(311907),
    n = r(895944),
    i = r(649032),
    s = r(26508),
    l = r(673608),
    o = r(861495);

function d(e) {
    let t = e?.location ?? "useNitroProgramReward",
        r = (0, s.DK)(i.W.NITRO, t),
        {
            isReady: d,
            programReward: c,
            totalDays: u
        } = (0, a.cf)([n.A], () => ({
            isReady: n.A.isReady(),
            programReward: n.A.getRewardForProgram(i.W.NITRO),
            totalDays: n.A.getTotalDaysInDuration(i.W.NITRO)
        })),
        m = (0, l.q)(),
        _ = (0, o.Q)(c, r),
        p = (0, o.Y)(c, u, r);
    return {
        isEligible: r,
        isReady: d,
        passesGeneralUIInvariant: _,
        passesProgressBarInvariant: p,
        programReward: c,
        shouldFetch: m,
        totalDays: u
    }
}