/** chunk id: 977347, original params: e,t,n (module,exports,require) **/
n.d(t, {
    D: () => i
}), n(896048);
var l = n(311907),
    r = n(320501);

function i(e, t) {
    return (0, l.bG)([r.A], () => {
        if (null == t) return;
        let n = r.A.getMessages(e),
            l = n.findOldest(e => e.author.id === t);
        if (null != l) {
            for (let e of n.toArray()) {
                if (e.author.id !== t) break;
                e.content.length > (null == l ? void 0 : l.content.length) && (l = e)
            }
            return l
        }
    }, [e, t])
}