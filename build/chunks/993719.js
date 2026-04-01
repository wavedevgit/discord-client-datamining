/** chunk id: 993719 params = (module,exports,require) **/
n.d(e, {
    N: () => h,
    O: () => d
});
var i = n(73153);

function d(t) {
    i.h.dispatch({
        type: "CALL_FEEDBACK_TUTORIAL_SHOW",
        tutorialKey: t
    })
}

function h(t) {
    i.h.dispatch({
        type: "CALL_FEEDBACK_TUTORIAL_DISMISS",
        tutorialKey: t
    })
}