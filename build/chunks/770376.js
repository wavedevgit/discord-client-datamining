/** chunk id: 770376, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => u,
    f: () => c
});
var i = n(554146),
    o = n(506774),
    r = n(367727),
    l = n(927813),
    s = n(49999);
let a = "doNotShowReorderModal";

function c() {
    (0, r.uh)(i.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
        dismissAction: s.i.USER_DISMISS
    })
}

function u() {
    null != o.w.get(a) && o.w.remove(a);
    let {
        isDismissed: t
    } = (0, r.FZ)(i.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
        cooldownDurationMs: l.A.Millis.WEEK
    });
    return !t
}