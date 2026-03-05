/** chunk id: 132860, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var i = n(961350),
    s = n(576705),
    l = n(607567),
    a = n(488926),
    r = n(698441),
    o = n(219935);

function c(e) {
    if (!e.isGuildVoice() || r.Ay.getGuildScheduledEventsByIndex(r.ej.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 || !s.A.can(o.EN, e)) return !1;
    let t = new Set(l.Ay.getVoiceStatesForChannel(e).map(e => e.user.id)),
        n = i.default.getId();
    for (let i of t)
        if (i !== n && a.$3({
                permission: o.EN,
                user: i,
                context: e
            })) return !1;
    return !0
}