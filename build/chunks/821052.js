/** Chunk was on 36054 **/
/** chunk id: 821052, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(627968),
    l = n(554146),
    r = n(397927),
    i = n(771781),
    s = n(963763);

function o(e) {
    let {
        searchQuery: t = ""
    } = e, n = (0, i.Ay)(e => e.recentlyShown).map(e => l.M[e]).filter(e => e.toLowerCase().includes(t.toLowerCase())).slice(0, 3);
    return 0 === n.length ? null : (0, a.jsx)(r.nVY, {
        label: "Recently Shown",
        children: (0, a.jsx)(s.A, {
            items: n
        })
    })
}