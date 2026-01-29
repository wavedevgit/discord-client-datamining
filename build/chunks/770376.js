/** Chunk was on 24848 **/
/** chunk id: 770376, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => u,
    f: () => a
});
var n = r(554146),
    o = r(506774),
    c = r(367727),
    i = r(927813),
    l = r(49999);
let s = "doNotShowReorderModal";

function a() {
    (0, c.uh)(n.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
        dismissAction: l.i.USER_DISMISS
    })
}

function u() {
    null != o.w.get(s) && o.w.remove(s);
    let {
        isDismissed: e
    } = (0, c.FZ)(n.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
        cooldownDurationMs: i.A.Millis.WEEK
    });
    return !e
}