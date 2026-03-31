/** chunk id: 56754 params = (module,exports,require) **/
e.d(i, {
    L: () => s
});
var n = e(311907),
    l = e(469778);

function s(t) {
    return (0, n.bG)([l.A], () => {
        let i = l.A.getForSku(t);
        if (null == i) return !1;
        let e = 0;
        for (let t of i) {
            let i = t.endsAt?.getTime() ?? 1 / 0;
            i >= e && (e = i)
        }
        return e > new Date().getTime()
    }, [t])
}