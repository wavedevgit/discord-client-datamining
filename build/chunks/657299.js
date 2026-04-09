/** chunk id: 657299 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(73153),
    i = n(954571),
    l = n(652215);
let s = {
    dismissForApplicationId(e) {
        a.h.dispatch({
            type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
            key: e,
            value: !0
        }), i.default.track(l.HAw.CLOSE_TUTORIAL, {
            tutorial: "activity-invite-nux-inline",
            application_id: e,
            acknowledged: !0
        })
    }
}