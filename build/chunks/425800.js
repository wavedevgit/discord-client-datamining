/** chunk id: 425800, original params: e,t,n (module,exports,require) **/
let r = n(864886),
    i = n(74509);
e.exports = (e, t, n) => {
    let a = null,
        o = null,
        s = null;
    try {
        s = new i(t, n)
    } catch (e) {
        return null
    }
    return e.forEach(e => {
        s.test(e) && (!a || 1 === o.compare(e)) && (o = new r(a = e, n))
    }), a
}