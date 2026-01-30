/** chunk id: 56754, original params: t,e,n (module,exports,require) **/
n.d(e, {
    L: () => i
}), n(896048);
var l = n(311907),
    r = n(469778);

function i(t) {
    return (0, l.bG)([r.A], () => {
        let e = r.A.getForSku(t);
        if (null == e) return !1;
        let n = 0;
        for (let t of e) {
            var l, i;
            let e = null != (l = null == (i = t.endsAt) ? void 0 : i.getTime()) ? l : 1 / 0;
            e >= n && (n = e)
        }
        return n > new Date().getTime()
    }, [t])
}