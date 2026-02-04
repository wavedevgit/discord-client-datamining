/** chunk id: 509295, original params: e,t,n (module,exports,require) **/
n.d(t, {
    k: () => i
});
var l = n(73153),
    r = n(576420);
async function i(e) {
    let {
        tab: t,
        targetId: n,
        isFavorite: i
    } = e;
    await l.h.dispatch({
        type: "OVERLAY_FRIENDS_WIDGET_SET_FAVORITE",
        tab: t,
        targetId: n,
        isFavorite: i,
        addedTimestampMs: i ? Date.now() : void 0
    }), i ? (r.Ay.getState().setActiveTab(t), r.Ay.getState().markFavoriteAdded(n)) : r.Ay.getState().clearFavoriteAdded(n)
}