/** Chunk was on 65298 **/
/** chunk id: 64343, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(896048);
var a = n(627968),
    l = n(554146),
    r = n(397927),
    i = n(771781),
    s = n(739560),
    o = n(963763);

function c(e) {
    let {
        searchQuery: t = ""
    } = e, n = (0, i.Ay)(e => e.recentlyShown), [c, d] = (0, s.A)(), u = c.filter(e => e.toLowerCase().includes(t.toLowerCase())).filter(e => !n.includes(l.M[e])).slice(0, 3);
    return 0 === u.length ? null : (0, a.jsx)(r.nVY, {
        label: "Recent Overrides",
        children: (0, a.jsx)(o.A, {
            items: u
        })
    })
}