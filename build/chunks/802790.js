/** Chunk was on 24665 **/
/** chunk id: 802790, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => p
}), t(896048);
var l = t(627968);
t(64700);
var i = t(311907),
    r = t(397927),
    a = t(775602),
    s = t(235986),
    o = t(899343),
    c = t(796012),
    u = t(752472);

function p(e) {
    let {
        purchaseState: n,
        currentStep: t,
        onClose: p
    } = e, [d, _] = (0, o.f)({
        purchaseState: n,
        currentStep: t,
        initialScene: c.V1.Scenes.ENTRY,
        purchaseScene: c.V1.Scenes.STARS,
        errorScene: c.V1.Scenes.ERROR,
        successScene: c.V1.Scenes.SUCCESS
    }), m = (0, i.bG)([a.A], () => a.A.useReducedMotion);
    return (0, l.jsxs)(r.rQ0, {
        "data-migration-pending": !0,
        align: s.A.Align.START,
        className: u.wx,
        separator: !1,
        children: [(0, l.jsx)(c.V1, {
            className: u.lY,
            nextScene: d,
            onScenePlay: e => _(c.V1.getNextScene(e)),
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