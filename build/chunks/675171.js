/** Chunk was on 41727 **/
/** chunk id: 675171, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(417597),
    l = n(933958),
    i = n(969151),
    s = n(108959),
    a = n(734057),
    o = n(626360),
    c = n(5867);
let u = "no_text_activity",
    d = {
        [u]: [o.i.NEW_MESSAGES, o.i.OPT_IN_CHANNEL, o.i.SUMMARIES],
        [c.Gd.DISCONNECTED]: [o.i.NEW_MESSAGES, o.i.OPT_IN_CHANNEL, o.i.SUMMARIES],
        [c.Gd.LAUNCHING_WITH_ORIENTATION_CHANGE]: [o.i.NEW_MESSAGES, o.i.OPT_IN_CHANNEL, o.i.SUMMARIES],
        [c.Gd.PANEL]: [],
        [c.Gd.PIP]: [o.i.NEW_MESSAGES, o.i.OPT_IN_CHANNEL, o.i.SUMMARIES],
        [c.Gd.ACTIVITY_POPOUT_WINDOW]: [o.i.NEW_MESSAGES, o.i.OPT_IN_CHANNEL, o.i.SUMMARIES]
    };

function p() {
    let e = (0, r.bG)([l.Ay], () => l.Ay.getCurrentEmbeddedActivity()),
        t = (0, r.bG)([l.Ay], () => l.Ay.getActivityPanelMode()),
        n = (0, i.H)(null == e ? void 0 : e.location);
    return void 0 === e || (0, s.A)(n, a.A) ? d[u] : d[t]
}