/** chunk id: 657299 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(73153),
    l = n(954571),
    s = n(652215);
let a = {
    dismissForApplicationId(e) {
        i.h.dispatch({
            type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
            key: e,
            value: !0
        }), l.default.track(s.HAw.CLOSE_TUTORIAL, {
            tutorial: "activity-invite-nux-inline",
            application_id: e,
            acknowledged: !0
        })
    }
}