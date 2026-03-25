/** chunk id: 475889 params = (module,exports,require) **/
"use strict";
n.d(t, {
    H: () => c
});
var l = n(64700),
    i = n(574381),
    s = n(311907),
    r = n(858466),
    a = n(725613),
    o = n(661470),
    u = n(652215);

function c(e) {
    let {
        hasRequestedStartTimes: t,
        startTime: n
    } = (0, s.cf)([a.A], () => ({
        hasRequestedStartTimes: a.A.hasRequestedStartTimes(e.guild_id),
        startTime: a.A.getStartTime(e)
    })), c = (0, o.a)(e.guild_id, "useStartTime"), d = ((0, i.un)() || (0, i.m0)()) && !c, m = e.type === u.rbe.GUILD_VOICE;
    return l.useEffect(() => {
        t || !m || d || (0, r.U)(e.guild_id)
    }, [m, e.guild_id, t, d]), n
}