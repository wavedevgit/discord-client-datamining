/** chunk id: 643015 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(64700),
    l = n(311907),
    s = n(287809),
    a = n(966107),
    r = n(380335);
let o = new Set(["GB"]);

function c() {
    let e = (0, l.bG)([r.A], () => r.A.getUserCountryCode()),
        t = !1 === (0, l.bG)([s.default], () => s.default.getCurrentUser()?.nsfwAllowed);
    return i.useEffect(() => {
        null == e && (0, a.xf)()
    }, [e]), null != e && !!o.has(e.alpha2) && !!t
}