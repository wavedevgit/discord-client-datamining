/** chunk id: 943775 params = (module,exports,require) **/
e.d(i, {
    A: () => l
});
var n = e(998218);

function l(t, i) {
    let e = t.getIconSource(i);
    if (null != e && "number" != typeof e) {
        let t;
        if (Array.isArray(e) ? e.length > 0 && (t = e[0].uri) : t = e.uri, null != t) return n.A.toURLSafe(t) ?? void 0
    }
}