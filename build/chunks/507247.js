/** chunk id: 507247 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(627968);
n(64700);
var a = n(421674);

function l(e) {
    let {
        games: t,
        renderGame: n
    } = e;
    return (0, i.jsx)("ul", {
        className: a.V,
        children: t.map((e, t) => (0, i.jsx)("li", {
            children: n(e, t)
        }, e.applicationId))
    })
}