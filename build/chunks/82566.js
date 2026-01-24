/** Chunk was on 47841 **/
/** chunk id: 82566, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
}), n(321073), n(638769);
var r = n(311907),
    i = n(112389),
    l = n(777705),
    s = n(734057),
    a = n(652215);

function o(e) {
    return (0, r.yK)([l.A, s.A], () => {
        var t;
        let n = (null != (t = l.A.getTopChannelIds(e.id)) ? t : []).map(e => s.A.getChannel(e)).filter(t => null == t || t.id !== e.rulesChannelId),
            r = [],
            o = 0;
        return n.forEach(e => {
            if (e.type === a.rbe.GUILD_ANNOUNCEMENT) {
                if (o >= 2) return;
                o++
            }
            r.length < 5 && !r.includes(e) && r.push(e)
        }), r.sort((t, n) => !!(0, i.S)(e.id, n.id) - !!(0, i.S)(e.id, t.id)), r
    })
}