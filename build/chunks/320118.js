/** chunk id: 320118 params = (module,exports,require) **/
a.d(t, {
    F: () => o
});
var r = a(311907),
    n = a(895944),
    s = a(649032),
    i = a(26508),
    l = a(673608),
    d = a(861495);

function o(e) {
    let t = e?.location ?? "useNitroProgramReward",
        a = (0, i.DK)(s.W.NITRO, t),
        {
            isReady: o,
            programReward: c,
            totalDays: u
        } = (0, r.cf)([n.A], () => ({
            isReady: n.A.isReady(),
            programReward: n.A.getRewardForProgram(s.W.NITRO),
            totalDays: n.A.getTotalDaysInDuration(s.W.NITRO)
        })),
        _ = (0, l.q)(),
        m = (0, d.Q)(c, a),
        p = (0, d.Y)(c, u, a);
    return {
        isEligible: a,
        isReady: o,
        passesGeneralUIInvariant: m,
        passesProgressBarInvariant: p,
        programReward: c,
        shouldFetch: _,
        totalDays: u
    }
}