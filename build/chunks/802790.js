/** chunk id: 802790 params = (module,exports,require) **/
t.d(n, {
    A: () => d
});
var i = t(627968);
t(64700);
var l = t(311907),
    r = t(397927),
    s = t(775602),
    a = t(235986),
    o = t(899343),
    c = t(796012),
    u = t(654771);

function d(e) {
    let {
        purchaseState: n,
        currentStep: t,
        onClose: d
    } = e, [p, m] = (0, o.f)({
        purchaseState: n,
        currentStep: t,
        initialScene: c.V1.Scenes.ENTRY,
        purchaseScene: c.V1.Scenes.STARS,
        errorScene: c.V1.Scenes.ERROR,
        successScene: c.V1.Scenes.SUCCESS
    }), _ = (0, l.bG)([s.A], () => s.A.useReducedMotion);
    return (0, i.jsxs)(r.rQ0, {
        "data-migration-pending": !0,
        align: a.A.Align.START,
        className: u.wx,
        separator: !1,
        children: [(0, i.jsx)(c.V1, {
            className: u.lY,
            nextScene: p,
            onScenePlay: e => m(c.V1.getNextScene(e)),
            pauseWhileUnfocused: !1,
            pause: _
        }), (0, i.jsx)("div", {
            className: u.qd
        }), (0, i.jsx)(r.s_y, {
            "data-migration-pending": !0,
            onClick: d,
            className: u.b
        })]
    })
}