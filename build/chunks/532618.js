/** chunk id: 532618, original params: e,t,n (module,exports,require) **/
let r = n(864886);
e.exports = (e, t, n = !1) => {
    if (e instanceof r) return e;
    try {
        return new r(e, t)
    } catch (e) {
        if (!n) return null;
        throw e
    }
}