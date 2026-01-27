/** Chunk was on web.js **/
/** chunk id: 918831, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(361926),
    i = n(207371),
    a = n(177640);

function o(e) {
    let {
        context: t,
        application: n,
        botUserId: o
    } = e, s = (0, i.e)(n), l = (0, r.Vr)({
        context: t,
        applicationId: n.id,
        botUserId: o
    }), c = (0, a.A)("channel" === t.type ? t.channel : void 0);
    return !s && l && null != o && !c
}