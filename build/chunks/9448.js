/** chunk id: 9448, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    WN: () => a,
    dy: () => c,
    k5: () => l,
    oF: () => s
});
var r = n(734057),
    i = n(988794);

function a(e) {
    let t, {
        entity_type: n,
        channel_id: a
    } = e;
    if (n in i.om && null != a) {
        var o;
        t = null != (o = r.A.getChannel(e.channel_id)) ? o : void 0
    }
    return t
}

function o(e, t) {
    let n = null;
    return e === i.Ps.EXTERNAL && null != t && "location" in t && (n = t.location), n
}

function s(e) {
    let {
        entity_type: t,
        entity_metadata: n
    } = e;
    return o(t, n)
}

function l(e) {
    let {
        entityType: t,
        entityMetadata: n
    } = e;
    return o(t, n)
}

function c(e) {
    return e === i.Ps.VOICE || e === i.Ps.STAGE_INSTANCE ? i.om[e] : void 0
}