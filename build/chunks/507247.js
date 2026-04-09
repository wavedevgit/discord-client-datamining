/** chunk id: 507247 params = (module,exports,require) **/
i.d(t, {
    A: () => l
});
var n = i(627968);
i(64700);
var s = i(421674);

function l(e) {
    let {
        games: t,
        renderGame: i
    } = e;
    return (0, n.jsx)("ul", {
        className: s.V,
        children: t.map((e, t) => (0, n.jsx)("li", {
            children: i(e, t)
        }, e.applicationId))
    })
}