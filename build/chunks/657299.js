/** chunk id: 657299, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(73153),
    r = n(954571),
    l = n(652215);
let o = {
    dismissForApplicationId(e) {
        i.h.dispatch({
            type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
            key: e,
            value: !0
        }), r.default.track(l.HAw.CLOSE_TUTORIAL, {
            tutorial: "activity-invite-nux-inline",
            application_id: e,
            acknowledged: !0
        })
    }
}