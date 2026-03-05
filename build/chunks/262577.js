/** chunk id: 262577 params = (module,exports,require) **/
n.d(e, {
    A: () => o
});
var a = n(989349),
    i = n.n(a),
    l = n(686956);
let o = {
    async setCommunicationDisabledDuration(t, e, n, a, o, s) {
        let r = null != n ? i()().add(n, "s").toISOString() : null;
        await l.A.setCommunicationDisabledUntil({
            guildId: t,
            userId: e,
            communicationDisabledUntilTimestamp: r,
            duration: n,
            reason: a,
            location: o,
            moderatorReportId: s
        })
    }
}