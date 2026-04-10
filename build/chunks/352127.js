/** chunk id: 352127 params = (module,exports,require) **/
n.d(t, {
    Cf: () => s,
    WD: () => l,
    X9: () => o,
    lP: () => d,
    xF: () => a
});
var i = n(954571),
    r = n(652215);

function a(e) {
    let {
        targetUserId: t,
        tab: n
    } = e;
    i.default.track(r.HAw.FRIENDS_LIST_ITEM_CLICKED, {
        target_user_id: t,
        tab: n
    })
}

function l(e) {
    let {
        targetUserId: t,
        tab: n
    } = e;
    i.default.track(r.HAw.FRIENDS_LIST_ITEM_MESSAGE_CLICKED, {
        target_user_id: t,
        tab: n
    })
}

function s(e) {
    let {
        targetUserId: t,
        tab: n
    } = e;
    i.default.track(r.HAw.FRIENDS_LIST_ITEM_VIDEO_CALL_CLICKED, {
        target_user_id: t,
        tab: n
    })
}

function o(e) {
    let {
        targetUserId: t,
        tab: n
    } = e;
    i.default.track(r.HAw.FRIENDS_LIST_ITEM_VOICE_CALL_CLICKED, {
        target_user_id: t,
        tab: n
    })
}

function d(e) {
    let {
        targetUserId: t,
        tab: n
    } = e;
    i.default.track(r.HAw.FRIENDS_LIST_ITEM_REMOVE_FRIEND_CLICKED, {
        target_user_id: t,
        tab: n
    })
}