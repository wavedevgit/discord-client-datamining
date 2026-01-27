/** Chunk was on 60667 **/
/** chunk id: 802790, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    s = n(775602),
    a = n(235986),
    o = n(899343),
    c = n(796012),
    d = n(752472);

function u(e) {
    let {
        purchaseState: t,
        currentStep: n,
        onClose: u
    } = e, [_, p] = (0, o.f)({
        purchaseState: t,
        currentStep: n,
        initialScene: c.V1.Scenes.ENTRY,
        purchaseScene: c.V1.Scenes.STARS,
        errorScene: c.V1.Scenes.ERROR,
        successScene: c.V1.Scenes.SUCCESS
    }), m = (0, i.bG)([s.A], () => s.A.useReducedMotion);
    return (0, r.jsxs)(l.rQ0, {
        "data-migration-pending": !0,
        align: a.A.Align.START,
        className: d.wx,
        separator: !1,
        children: [(0, r.jsx)(c.V1, {
            className: d.lY,
            nextScene: _,
            onScenePlay: e => p(c.V1.getNextScene(e)),
            pauseWhileUnfocused: !1,
            pause: m
        }), (0, r.jsx)("div", {
            className: d.qd
        }), (0, r.jsx)(l.s_y, {
            "data-migration-pending": !0,
            onClick: u,
            className: d.b
        })]
    })
}