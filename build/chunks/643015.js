/** Chunk was on 2827 **/
/** chunk id: 643015, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(896048);
var r = n(64700),
    i = n(311907),
    l = n(287809),
    s = n(966107),
    a = n(380335);
let o = new Set(["GB"]);

function c() {
    let e = (0, i.bG)([a.A], () => a.A.getUserCountryCode()),
        t = !1 === (0, i.bG)([l.default], () => {
            var e;
            return null == (e = l.default.getCurrentUser()) ? void 0 : e.nsfwAllowed
        });
    return r.useEffect(() => {
        null == e && (0, s.xf)()
    }, [e]), null != e && !!o.has(e.alpha2) && !!t
}