/** chunk id: 802790 params = (module,exports,require) **/
t.d(n, {
    A: () => p
});
var l = t(627968);
t(64700);
var i = t(311907),
    r = t(397927),
    s = t(775602),
    a = t(235986),
    o = t(899343),
    c = t(796012),
    u = t(855206);

function p(e) {
    let {
        purchaseState: n,
        currentStep: t,
        onClose: p
    } = e, [_, d] = (0, o.f)({
        purchaseState: n,
        currentStep: t,
        initialScene: c.V1.Scenes.ENTRY,
        purchaseScene: c.V1.Scenes.STARS,
        errorScene: c.V1.Scenes.ERROR,
        successScene: c.V1.Scenes.SUCCESS
    }), m = (0, i.bG)([s.A], () => s.A.useReducedMotion);
    return (0, l.jsxs)(r.rQ0, {
        "data-migration-pending": !0,
        align: a.A.Align.START,
        className: u.wx,
        separator: !1,
        children: [(0, l.jsx)(c.V1, {
            className: u.lY,
            nextScene: _,
            onScenePlay: e => d(c.V1.getNextScene(e)),
            pauseWhileUnfocused: !1,
            pause: m
        }), (0, l.jsx)("div", {
            className: u.qd
        }), (0, l.jsx)(r.s_y, {
            "data-migration-pending": !0,
            onClick: p,
            className: u.b
        })]
    })
}