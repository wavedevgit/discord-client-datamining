/** chunk id: 821052 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(627968),
    i = n(554146),
    s = n(397927),
    l = n(771781),
    r = n(963763);

function o(e) {
    let {
        searchQuery: t = ""
    } = e, n = (0, l.Ay)(e => e.recentlyShown).map(e => i.M[e]).filter(e => e.toLowerCase().includes(t.toLowerCase())).slice(0, 3);
    return 0 === n.length ? null : (0, a.jsx)(s.nVY, {
        label: "Recently Shown",
        children: (0, a.jsx)(r.A, {
            items: n
        })
    })
}