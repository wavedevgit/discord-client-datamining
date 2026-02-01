/** chunk id: 643015, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(896048);
var r = n(64700),
    l = n(311907),
    i = n(287809),
    a = n(966107),
    s = n(380335);
let o = new Set(["GB"]);

function c() {
    let e = (0, l.bG)([s.A], () => s.A.getUserCountryCode()),
        t = !1 === (0, l.bG)([i.default], () => {
            var e;
            return null == (e = i.default.getCurrentUser()) ? void 0 : e.nsfwAllowed
        });
    return r.useEffect(() => {
        null == e && (0, a.xf)()
    }, [e]), null != e && !!o.has(e.alpha2) && !!t
}