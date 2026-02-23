/** chunk id: 977347, original params: e,t,n (module,exports,require) **/
n.d(t, {
    D: () => s
});
var i = n(311907),
    l = n(320501);

function s(e, t) {
    return (0, i.bG)([l.A], () => {
        if (null == t) return;
        let n = l.A.getMessages(e),
            i = n.findOldest(e => e.author.id === t);
        if (null != i) {
            for (let e of n.toArray()) {
                if (e.author.id !== t) break;
                e.content.length > i?.content.length && (i = e)
            }
            return i
        }
    }, [e, t])
}