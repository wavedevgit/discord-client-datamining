/** Chunk was on 1113 **/
/** chunk id: 475889, original params: e,t,n (module,exports,require) **/
n.d(t, {
    H: () => u
});
var r = n(64700),
    l = n(574381),
    i = n(311907),
    s = n(858466),
    a = n(725613),
    o = n(661470),
    c = n(652215);

function u(e) {
    let {
        hasRequestedStartTimes: t,
        startTime: n
    } = (0, i.cf)([a.A], () => ({
        hasRequestedStartTimes: a.A.hasRequestedStartTimes(e.guild_id),
        startTime: a.A.getStartTime(e)
    })), u = (0, o.a)(e.guild_id, "useStartTime"), d = ((0, l.un)() || (0, l.m0)()) && !u, h = e.type === c.rbe.GUILD_VOICE;
    return r.useEffect(() => {
        t || !h || d || (0, s.U)(e.guild_id)
    }, [h, e.guild_id, t, d]), n
}