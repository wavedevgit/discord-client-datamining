/** Chunk was on 41727 **/
/** chunk id: 770376, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u,
    f: () => c
});
var r = n(554146),
    l = n(506774),
    i = n(367727),
    s = n(927813),
    a = n(49999);
let o = "doNotShowReorderModal";

function c() {
    (0, i.uh)(r.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
        dismissAction: a.i.USER_DISMISS
    })
}

function u() {
    null != l.w.get(o) && l.w.remove(o);
    let {
        isDismissed: e
    } = (0, i.FZ)(r.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
        cooldownDurationMs: s.A.Millis.WEEK
    });
    return !e
}