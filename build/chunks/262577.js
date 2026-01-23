/** Chunk was on 94390 **/
/** chunk id: 262577, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => o
});
var l = n(989349),
    a = n.n(l),
    i = n(686956);
let o = {
    async setCommunicationDisabledDuration(t, e, n, l, o, r) {
        let u = null != n ? a()().add(n, "s").toISOString() : null;
        await i.A.setCommunicationDisabledUntil({
            guildId: t,
            userId: e,
            communicationDisabledUntilTimestamp: u,
            duration: n,
            reason: l,
            location: o,
            moderatorReportId: r
        })
    }
}