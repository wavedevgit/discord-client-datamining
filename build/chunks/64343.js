/** chunk id: 64343, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var a = n(627968),
    i = n(554146),
    s = n(397927),
    l = n(771781),
    r = n(739560),
    o = n(963763);

function d(e) {
    let {
        searchQuery: t = ""
    } = e, n = (0, l.Ay)(e => e.recentlyShown), [d, c] = (0, r.A)(), u = d.filter(e => e.toLowerCase().includes(t.toLowerCase())).filter(e => !n.includes(i.M[e])).slice(0, 3);
    return 0 === u.length ? null : (0, a.jsx)(s.nVY, {
        label: "Recent Overrides",
        children: (0, a.jsx)(o.A, {
            items: u
        })
    })
}