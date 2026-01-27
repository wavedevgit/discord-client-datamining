/** Chunk was on web.js **/
/** chunk id: 147472, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    lG: () => C
}), n(638769);
var r = n(91871),
    i = n.n(r),
    a = n(111956),
    o = n.n(a),
    s = n(508675),
    l = n(7584),
    c = n(954571),
    u = n(536432),
    d = n(652215);
let f = 100,
    p = 8,
    _ = 7,
    h = 6,
    m = 5,
    g = 4,
    E = 3,
    y = 2,
    b = 1,
    O = 350,
    v = o()(I, O),
    A = o()(S, O);

function I(e, t) {
    c.default.track(d.HAw.SEARCH_STARTED, {
        channel_id: t,
        search_type: d.I4_.SOUNDBOARD,
        location_stack: e
    })
}

function S(e, t, n, r) {
    c.default.track(d.HAw.SEARCH_RESULT_VIEWED, {
        search_type: d.I4_.SOUNDBOARD,
        channel_id: n,
        query: r,
        total_results: e.length,
        location_stack: t
    })
}

function T(e, t, n, r) {
    var a;
    let o = 0,
        c = t.name.toLocaleLowerCase(),
        d = null != t.emojiId ? s.Ay.getCustomEmojiById(t.emojiId) : null,
        O = null != t.emojiName ? l.Ay.convertSurrogateToName(t.emojiName, !1) : null,
        v = null != O ? l.Ay.getByName(O) : null,
        A = null != d ? [d.name] : null != (a = null == v ? void 0 : v.names) ? a : [];
    return e === c && (o += p), A.includes(e) && (o += _), c.startsWith(e) && (o += h), A.some(t => t.startsWith(e)) && (o += m), c.endsWith(e) && (o += g), A.some(t => t.endsWith(e)) && (o += E), i()(e, t.name.toLocaleLowerCase()) && (o += y), A.some(t => i()(e, t)) && (o += b), o > 0 && (0, u.Ir)(n, t, r) && (o += f), o
}

function C(e, t, n, r, i) {
    let a = t.reduce((t, a) => (v(i, null == r ? void 0 : r.id), t[a.soundId] = T(e.toLocaleLowerCase(), a, n, r), t), {}),
        o = t.filter(e => a[e.soundId] > 0).sort((e, t) => a[t.soundId] - a[e.soundId]);
    return A(o, i, null == r ? void 0 : r.id, e), o
}