/** chunk id: 14059 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var a = n(311907),
    i = n(73153);
let l = {};
class s extends a.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
        return l[e] ?? !1
    }
}
let r = new s(i.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function(e) {
        let {
            tutorialKey: t
        } = e;
        l[t] = !0
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function(e) {
        let {
            tutorialKey: t
        } = e;
        l[t] = !1
    }
})