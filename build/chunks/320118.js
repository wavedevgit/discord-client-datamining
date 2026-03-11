/** chunk id: 320118 params = (module,exports,require) **/
a.d(t, {
    F: () => o
});
var n = a(311907),
    r = a(895944),
    s = a(649032),
    l = a(26508),
    i = a(673608),
    d = a(861495);

function o(e) {
    let t = e?.location ?? "useNitroProgramReward",
        a = (0, l.DK)(s.W.NITRO, t),
        {
            isReady: o,
            programReward: c,
            totalDays: u
        } = (0, n.cf)([r.A], () => ({
            isReady: r.A.isReady(),
            programReward: r.A.getRewardForProgram(s.W.NITRO),
            totalDays: r.A.getTotalDaysInDuration(s.W.NITRO)
        })),
        m = (0, i.q)(),
        p = (0, d.Q)(c, a),
        f = (0, d.Y)(c, u, a);
    return {
        isEligible: a,
        isReady: o,
        passesGeneralUIInvariant: p,
        passesProgressBarInvariant: f,
        programReward: c,
        shouldFetch: m,
        totalDays: u
    }
}