/** chunk id: 448836 params = (module,exports,require) **/
s.d(a, {
    A: () => c
});
var r = s(627968);
s(64700);
var t = s(503698),
    n = s.n(t),
    o = s(438874),
    l = s(722523),
    i = s(439156),
    d = s(730064);

function c(e) {
    let {
        className: a,
        guildId: s,
        powerup: t,
        expressiveCta: c,
        onError: _
    } = e, {
        showToggleButton: m,
        showConfigureButton: u
    } = (0, o.A)(s, t), x = !u;
    return (0, r.jsxs)("div", {
        className: n()(d.k, a),
        children: [m && (0, r.jsx)(i.A, {
            guildId: s,
            powerup: t,
            onError: _,
            grow: x,
            compact: !x,
            expressiveCta: c
        }), u && (0, r.jsx)(l.GU, {
            guildId: s,
            powerup: t
        })]
    })
}