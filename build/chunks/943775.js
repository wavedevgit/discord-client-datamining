/** chunk id: 943775, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => r
});
var l = n(998218);

function r(t, e) {
    let n = t.getIconSource(e);
    if (null != n && "number" != typeof n) {
        let t;
        if (Array.isArray(n) ? n.length > 0 && (t = n[0].uri) : t = n.uri, null != t) {
            var r;
            return null != (r = l.A.toURLSafe(t)) ? r : void 0
        }
    }
}