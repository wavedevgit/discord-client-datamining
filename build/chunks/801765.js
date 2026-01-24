/** Chunk was on web.js **/
/** chunk id: 801765, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    x: () => o,
    y: () => l
});
var r = n(761799),
    i = n(668459),
    a = n(105423);
let s = {
    1: i.A.getByteAt,
    2: i.A.getAsciiAt,
    3: i.A.getShortAt,
    4: i.A.getLongAt,
    5: i.A.getRationalAt,
    7: i.A.getUndefinedAt,
    9: i.A.getSlongAt,
    10: i.A.getSrationalAt,
    13: i.A.getIfdPointerAt
};

function o(e, t, n) {
    return t + i.A.getLongAt(e, t + 4, n)
}

function l(e, t, n, s, o, d) {
    let f = i.A.getTypeSize("SHORT"),
        p = 12,
        _ = {},
        h = c(e, s, o);
    s += f;
    for (let r = 0; r < h && !(s + p > e.byteLength); r++) {
        let r = u(e, t, n, s, o, d);
        void 0 !== r && (_[r.name] = {
            id: r.id,
            value: r.value,
            description: r.description
        }, ("MakerNote" === r.name || t === a.SI && "LevelInfo" === r.name) && (_[r.name].__offset = r.__offset)), s += p
    }
    if (r.A.USE_THUMBNAIL && s < e.byteLength - i.A.getTypeSize("LONG")) {
        let r = i.A.getLongAt(e, s, o);
        0 !== r && t === a.eY && (_.Thumbnail = l(e, a.Qb, n, n + r, o, d))
    }
    return _
}

function c(e, t, n) {
    return t + i.A.getTypeSize("SHORT") <= e.byteLength ? i.A.getShortAt(e, t, n) : 0
}

function u(e, t, n, r, s, o) {
    let l, c, u = 33723,
        g = i.A.getTypeSize("SHORT"),
        E = g + i.A.getTypeSize("SHORT"),
        y = E + i.A.getTypeSize("LONG"),
        b = i.A.getShortAt(e, r, s),
        O = i.A.getShortAt(e, r + g, s),
        v = i.A.getLongAt(e, r + E, s);
    if (void 0 === i.A.typeSizes[O] || !o && void 0 === a.Ay[t][b]) return;
    d(O, v) ? l = f(e, c = r + y, O, v, s) : (c = i.A.getLongAt(e, r + y, s), l = p(e, n, c, O, v) ? f(e, n + c, O, v, s, b === u) : "<faulty value>"), O === i.A.tagTypes.ASCII && (l = h(l = _(l)));
    let A = `undefined-${b}`,
        I = l;
    if (void 0 !== a.Ay[t][b])
        if (void 0 !== a.Ay[t][b].name && void 0 !== a.Ay[t][b].description) {
            A = a.Ay[t][b].name;
            try {
                I = a.Ay[t][b].description(l)
            } catch (e) {
                I = m(l)
            }
        } else O === i.A.tagTypes.RATIONAL || O === i.A.tagTypes.SRATIONAL ? (A = a.Ay[t][b], I = "" + l[0] / l[1]) : (A = a.Ay[t][b], I = m(l));
    return {
        id: b,
        name: A,
        value: l,
        description: I,
        __offset: c
    }
}

function d(e, t) {
    return i.A.typeSizes[e] * t <= i.A.getTypeSize("LONG")
}

function f(e, t, n, r, a, o = !1) {
    let l = [];
    o && (r *= i.A.typeSizes[n], n = i.A.tagTypes.BYTE);
    for (let o = 0; o < r; o++) l.push(s[n](e, t, a)), t += i.A.typeSizes[n];
    return n === i.A.tagTypes.ASCII ? l = i.A.getAsciiValue(l) : 1 === l.length && (l = l[0]), l
}

function p(e, t, n, r, a) {
    return t + n + i.A.typeSizes[r] * a <= e.byteLength
}

function _(e) {
    let t = [],
        n = 0;
    for (let r = 0; r < e.length; r++) {
        if ("\0" === e[r]) {
            n++;
            continue
        }
        void 0 === t[n] && (t[n] = ""), t[n] += e[r]
    }
    return t
}

function h(e) {
    try {
        return e.map(e => decodeURIComponent(escape(e)))
    } catch (t) {
        return e
    }
}

function m(e) {
    return e instanceof Array ? e.join(", ") : e
}