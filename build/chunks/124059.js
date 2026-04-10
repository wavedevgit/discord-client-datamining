/** chunk id: 124059 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(91871),
    s = n.n(i),
    l = n(397927),
    r = n(963935);

function a(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = new Set,
        a = function(e) {
            let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                c = e.usePredicate?.() === !1 && !n || o,
                u = function(e, t, n) {
                    if (e.type === r.Z6.SECTION && e.hoisted) return !0;
                    if (e.type === r.Z6.TAB_ITEM) return !1;
                    let i = "useTitle" in e ? e.useTitle?.(!1) : void 0,
                        a = "useSearchTerms" in e ? e.useSearchTerms?.() : void 0;
                    if (n || null == i && null == a) return !1;
                    if ("" === t) return !0;
                    if (e.type === r.Z6.STATIC) return !1;
                    let o = t.toLowerCase();
                    for (let e of a ?? [])
                        if (s()(o, e.toLowerCase())) return !0;
                    let d = !1;
                    if (null != i) {
                        let e = (0, l.Oer)(i)?.toLowerCase();
                        null != e && (d = s()(o, e))
                    }
                    return d
                }(e, t, c) || d,
                m = !1;
            if ((0, r.nW)(e))
                for (let t of e.layout) m = a(t, c, u) || m;
            return !c && (u || m) && i.add(e.key), u || m
        };
    return a(e), i
}