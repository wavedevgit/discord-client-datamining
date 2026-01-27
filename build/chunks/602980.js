/** Chunk was on web.js **/
/** chunk id: 602980, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ec: () => l,
    LQ: () => s,
    Ss: () => o
}), n(896048);
var r = n(627968);
n(64700);
var i = n(899343),
    a = n(796012);

function o(e) {
    let {
        currentStep: t,
        purchaseState: n,
        className: o,
        pause: s
    } = e, [l, c] = (0, i.f)({
        purchaseState: n,
        currentStep: t,
        initialScene: a.yh.Scenes.NORMAL,
        purchaseScene: a.yh.Scenes.SPEED_START,
        errorScene: a.yh.Scenes.NORMAL,
        successScene: a.yh.Scenes.FINISH
    });
    return (0, r.jsx)(a.yh, {
        className: o,
        nextScene: l,
        onScenePlay: e => c(a.yh.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: s
    })
}

function s(e) {
    let {
        currentStep: t,
        purchaseState: n,
        className: o,
        pause: s
    } = e, [l, c] = (0, i.f)({
        purchaseState: n,
        currentStep: t,
        initialScene: a.rF.Scenes.NORMAL,
        purchaseScene: a.rF.Scenes.SPEED_START,
        errorScene: a.rF.Scenes.NORMAL,
        successScene: a.rF.Scenes.FINISH
    });
    return (0, r.jsx)(a.rF, {
        className: o,
        nextScene: l,
        onScenePlay: e => c(a.rF.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: s
    })
}

function l(e) {
    let {
        currentStep: t,
        purchaseState: n,
        className: o,
        pause: s
    } = e, [l, c] = (0, i.f)({
        purchaseState: n,
        currentStep: t,
        initialScene: a.yC.Scenes.IDLE_ENTRY,
        purchaseScene: a.yC.Scenes.BOOST_START,
        errorScene: a.yC.Scenes.ERROR,
        successScene: a.yC.Scenes.BOOST_END
    });
    return (0, r.jsx)(a.yC, {
        className: o,
        nextScene: l,
        onScenePlay: e => c(a.yC.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: s
    })
}