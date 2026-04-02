/** chunk id: 448836 params = (module,exports,require) **/
s.d(t, {
    A: () => c
});
var n = s(627968);
s(64700);
var a = s(503698),
    r = s.n(a),
    l = s(438874),
    i = s(722523),
    o = s(439156),
    d = s(730064);

function c(e) {
    let {
        className: t,
        guildId: s,
        powerup: a,
        expressiveCta: c,
        onError: u
    } = e, {
        showToggleButton: m,
        showConfigureButton: _
    } = (0, l.A)(s, a), x = !_;
    return (0, n.jsxs)("div", {
        className: r()(d.k, t),
        children: [m && (0, n.jsx)(o.A, {
            guildId: s,
            powerup: a,
            onError: u,
            grow: x,
            compact: !x,
            expressiveCta: c
        }), _ && (0, n.jsx)(i.GU, {
            guildId: s,
            powerup: a
        })]
    })
}