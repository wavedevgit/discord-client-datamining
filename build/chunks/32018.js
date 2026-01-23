/** Chunk was on web.js **/
/** chunk id: 32018, original params: e,t,n (module,exports,require) **/
let r = n(864886),
    i = n(74509);
e.exports = (e, t, n) => {
    let a = null,
        s = null,
        o = null;
    try {
        o = new i(t, n)
    } catch (e) {
        return null
    }
    return e.forEach(e => {
        o.test(e) && (!a || -1 === s.compare(e)) && (s = new r(a = e, n))
    }), a
}