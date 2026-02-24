/** chunk id: 617086, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    l = n(205184),
    a = n(287809),
    s = n(403362),
    r = n(939496);

function o(e) {
    let {
        userId: t
    } = (0, r.E)(), n = (0, l.s)(e);
    return (0, i.yK)([a.default], () => {
        let e = a.default.getCurrentUser(),
            i = new Set;
        return n.forEach(e => {
            i.add(e.author_id), e.participants.forEach(e => {
                i.add(e)
            })
        }), Array.from(i).filter(n => n !== e?.id && n !== t).map(e => a.default.getUser(e)).filter(s.Vq)
    }, [n, t])
}