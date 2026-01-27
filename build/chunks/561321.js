/** Chunk was on 39048 **/
/** chunk id: 561321, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Rg: () => d,
    eK: () => u,
    fS: () => m,
    v: () => g
});
var r = n(311907),
    i = n(734057),
    l = n(71393),
    s = n(488926),
    a = n(863694),
    o = n(652215),
    c = n(985018);

function d(e, t) {
    return (0, r.bG)([a.A], () => a.A.editedDefaultChannelIds.has(e) || null != t && a.A.editedDefaultChannelIds.has(t))
}

function u(e, t) {
    return (0, r.bG)([a.A], () => e === t || null != t && a.A.editedDefaultChannelIds.has(t))
}

function g(e, t) {
    return (0, r.bG)([a.A, i.A], () => null != t && a.A.editedDefaultChannelIds.has(t) ? c.intl.string(c.t.Lz94y1) : s.MJ(o.xBc.VIEW_CHANNEL, i.A.getChannel(e)) ? void 0 : c.intl.string(c.t["031cXt"]))
}

function m(e, t) {
    let n = (0, r.bG)([l.A], () => {
            var n;
            return (null == (n = l.A.getGuild(e)) ? void 0 : n.rulesChannelId) === t
        }),
        s = (0, r.bG)([i.A], () => {
            var e;
            return null == (e = i.A.getChannel(t)) ? void 0 : e.isGuildVocal()
        });
    return n ? c.intl.string(c.t["2XWEK9"]) : s ? c.intl.string(c.t.t6iJLY) : void 0
}