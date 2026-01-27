/** Chunk was on web.js **/
/** chunk id: 861345, original params: e,t,n (module,exports,require) **/
let r = n(864886),
    i = n(46666),
    {
        ANY: a
    } = i,
    o = n(74509),
    s = n(4144),
    l = n(800670),
    c = n(596641),
    u = n(738018),
    d = n(569671);
e.exports = (e, t, n, f) => {
    let p, _, h, m, g;
    switch (e = new r(e, f), t = new o(t, f), n) {
        case ">":
            p = l, _ = u, h = c, m = ">", g = ">=";
            break;
        case "<":
            p = c, _ = d, h = l, m = "<", g = "<=";
            break;
        default:
            throw TypeError('Must provide a hilo val of "<" or ">"')
    }
    if (s(e, t, f)) return !1;
    for (let n = 0; n < t.set.length; ++n) {
        let r = t.set[n],
            o = null,
            s = null;
        if (r.forEach(e => {
                e.semver === a && (e = new i(">=0.0.0")), o = o || e, s = s || e, p(e.semver, o.semver, f) ? o = e : h(e.semver, s.semver, f) && (s = e)
            }), o.operator === m || o.operator === g || (!s.operator || s.operator === m) && _(e, s.semver) || s.operator === g && h(e, s.semver)) return !1
    }
    return !0
}