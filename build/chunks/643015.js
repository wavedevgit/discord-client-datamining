/** chunk id: 643015 params = (module,exports,require) **/
i.d(e, {
    A: () => d
});
var n = i(64700),
    l = i(311907),
    r = i(287809),
    s = i(966107),
    a = i(380335);
let o = new Set(["GB"]);

function d() {
    let t = (0, l.bG)([a.A], () => a.A.getUserCountryCode()),
        e = !1 === (0, l.bG)([r.default], () => r.default.getCurrentUser()?.nsfwAllowed);
    return n.useEffect(() => {
        null == t && (0, s.xf)()
    }, [t]), null != t && !!o.has(t.alpha2) && !!e
}