/** chunk id: 320118 params = (module,exports,require) **/
a.d(t, {
    F: () => o
});
var n = a(311907),
    r = a(895944),
    s = a(649032),
    i = a(26508),
    d = a(673608),
    l = a(861495);

function o(e) {
    let t = e?.location ?? "useNitroProgramReward",
        a = (0, i.DK)(s.W.NITRO, t),
        {
            isReady: o,
            programReward: c,
            totalDays: u
        } = (0, n.cf)([r.A], () => ({
            isReady: r.A.isReady(),
            programReward: r.A.getRewardForProgram(s.W.NITRO),
            totalDays: r.A.getTotalDaysInDuration(s.W.NITRO)
        })),
        _ = (0, d.q)(),
        m = (0, l.Q)(c, a),
        p = (0, l.Y)(c, u, a);
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