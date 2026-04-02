/** chunk id: 504982 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(954571),
    a = n(237774),
    l = n(862927),
    r = n(652215);

function s(e) {
    let {
        tab_opened: t,
        source: n
    } = e, s = (0, l.A)();
    i.default.track(r.HAw.FRIENDS_LIST_VIEWED, {
        tab_opened: t,
        source: n,
        ...s
    }), (0, a.k)(r.HAw.FRIENDS_LIST_VIEWED_CLICKSTREAM, {
        tab_opened: t ?? "tabless",
        num_friends: s.num_friends ?? 0,
        now_playing_visible: s.now_playing_visible ?? !1,
        now_playing_num_cards: s.now_playing_num_cards ?? 0
    })
}