/** chunk id: 943775 params = (module,exports,require) **/
i.d(e, {
    A: () => l
});
var n = i(998218);

function l(t, e) {
    let i = t.getIconSource(e);
    if (null != i && "number" != typeof i) {
        let t;
        if (Array.isArray(i) ? i.length > 0 && (t = i[0].uri) : t = i.uri, null != t) return n.A.toURLSafe(t) ?? void 0
    }
}