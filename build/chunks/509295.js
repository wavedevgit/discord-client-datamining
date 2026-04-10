/** chunk id: 509295 params = (module,exports,require) **/
n.d(t, {
    k: () => r
});
var i = n(73153),
    l = n(576420);
async function r(e) {
    let {
        tab: t,
        targetId: n,
        isFavorite: r
    } = e;
    await i.h.dispatch({
        type: "OVERLAY_FRIENDS_WIDGET_SET_FAVORITE",
        tab: t,
        targetId: n,
        isFavorite: r,
        addedTimestampMs: r ? Date.now() : void 0
    }), r ? (l.Ay.getState().setActiveTab(t), l.Ay.getState().markFavoriteAdded(n)) : l.Ay.getState().clearFavoriteAdded(n)
}