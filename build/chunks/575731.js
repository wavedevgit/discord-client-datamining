/** Chunk was on web.js **/
/** chunk id: 575731, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(638769);
var r = n(311907),
    i = n(21119),
    a = n(153488),
    o = n(287809),
    s = n(607567),
    l = n(652215);

function c(e) {
    let t = (0, r.yK)([s.Ay], () => s.Ay.getVoiceStatesForChannelAlt(e.id, e.guild_id).map(e => {
            let {
                user: t
            } = e;
            return t.id
        }), [e.id, e.guild_id]),
        n = (0, r.bG)([i.A], () => i.A.getUserAffinitiesMap()),
        c = (0, r.bG)([a.A], () => a.A.hasConsented(l.YAq.PERSONALIZATION));
    return (0, r.yK)([o.default], () => (c ? t.sort((e, t) => {
        var r, i, a, o;
        return (null != (r = null == (a = n.get(t)) ? void 0 : a.vcProbability) ? r : 0) - (null != (i = null == (o = n.get(e)) ? void 0 : o.vcProbability) ? i : 0)
    }) : t).map(e => o.default.getUser(e)).filter(e => null != e), [c, n, t])
}