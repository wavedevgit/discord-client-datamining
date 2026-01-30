/** chunk id: 932883, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    GM: () => h,
    Hi: () => I,
    Ml: () => b,
    P3: () => A,
    Ut: () => O,
    X8: () => y,
    op: () => m
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(835245),
    o = n(311907),
    s = n(964486),
    l = n(919796),
    c = n(954571),
    u = n(320697),
    d = n(394953),
    f = n(849077),
    p = n(652215);
let _ = i.createContext(""),
    h = e => {
        let {
            children: t
        } = e, [n] = i.useState(() => (0, a.A)());
        return (0, r.jsx)(_.Provider, {
            value: n,
            children: t
        })
    },
    m = () => i.useContext(_);

function g(e) {
    let {
        variant: t,
        viewId: n,
        entrypoint: r
    } = e;
    c.default.track(p.HAw.NOTIFICATIONS_INBOX_OPENED, {
        inbox_variant: t,
        inbox_entrypoint: r,
        view_id: n
    })
}

function E(e) {
    let {
        timeToLoad: t,
        unreadsCount: n,
        totalMessagesCount: r,
        viewId: i,
        unreadsBadgeMentionCount: a,
        unreadsBadgeChannelCount: o,
        unreadMessageItemsCount: s,
        unreadMentionsCount: l
    } = e;
    c.default.track(p.HAw.NOTIFICATIONS_INBOX_READY, {
        time_to_load: t,
        unreads_count: n,
        total_messages_count: r,
        view_id: i,
        unreads_badge_mention_count: a,
        unreads_badge_channel_count: o,
        unread_message_items_count: s,
        unread_mentions_count: l
    })
}
var y = function(e) {
    return e.CLICK = "click", e.CONTEXT_MENU = "context_menu", e.BOOKMARK = "bookmark", e.ACK = "ack", e.SETTINGS = "settings", e
}({});

function b(e) {
    var t, n;
    let {
        message: r,
        interactionType: i,
        viewId: a
    } = e;
    c.default.track(p.HAw.NOTIFICATIONS_INBOX_ITEM_INTERACTED, {
        interaction_type: i,
        message_id: r.id,
        channel_id: r.channel_id,
        author_id: r.author.id,
        message_type: r.type,
        view_id: a,
        mentioned_game_ids: null != (t = null == (n = r.mentionGames) ? void 0 : n.map(e => e.id)) ? t : []
    })
}

function O(e) {
    let {
        section: t,
        enabled: n,
        viewId: r
    } = e;
    c.default.track(p.HAw.NOTIFICATIONS_INBOX_SECTION_INTERACTED, {
        section: t,
        enabled: n,
        view_id: r
    })
}

function v(e) {
    let {
        unreadsCount: t,
        totalMessagesCount: n,
        unreadItemsCount: r,
        totalItemsCount: i,
        viewId: a
    } = e;
    c.default.track(p.HAw.NOTIFICATIONS_INBOX_UNMOUNTED, {
        unreads_count: t,
        total_messages_count: n,
        unread_items_count: r,
        total_items_count: i,
        view_id: a
    })
}

function A(e) {
    let {
        timeToLoad: t,
        messagesCount: n,
        unreadMessagesCount: r,
        channelsFetched: i,
        mentionsFetched: a,
        loadingTrigger: o,
        viewId: s
    } = e;
    c.default.track(p.HAw.NOTIFICATIONS_INBOX_DATA_LOADED, {
        time_to_load: t,
        messages_count: n,
        unread_messages_count: r,
        channels_fetched: i,
        mentions_fetched: a,
        loading_trigger: null != o ? o : f.VA.UNKNOWN,
        view_id: s
    })
}

function I(e) {
    let {
        notificationCenterVariant: t,
        entrypoint: n,
        messages: r,
        unreadMessages: a,
        viewId: c,
        messagesByCategory: p
    } = e, _ = i.useRef(null), h = i.useRef(!1), m = (0, o.bG)([u.A], () => u.A.isLoading), y = (0, l.A)(m), b = (0, o.bG)([u.A], () => {
        var e;
        return null != (e = u.A.currentRequestAnalyticsPayload) ? e : null
    }), {
        unreadRecentMentionsCount: O,
        unreadChannelIds: I
    } = (0, d.U4)();
    (0, s.Ay)(() => {
        g({
            variant: t,
            viewId: c,
            entrypoint: n
        }), _.current = Date.now()
    }), i.useEffect(() => {
        if (null != _.current && ((null == r ? void 0 : r.length) > 0 || (null == a ? void 0 : a.length) > 0) && !h.current) {
            let e = Date.now() - _.current;
            h.current = !0, E({
                timeToLoad: e,
                unreadsCount: a.length,
                totalMessagesCount: r.length,
                unreadsBadgeMentionCount: O,
                unreadsBadgeChannelCount: I.length,
                unreadMessageItemsCount: p.UNREAD.length,
                unreadMentionsCount: p.UNREAD.filter(e => e.every(e => e.kind === f.yL.MENTION)).length,
                viewId: c
            })
        }
    }, [r, a, c, I, O, p]), i.useEffect(() => {
        let e = (null == b ? void 0 : b.loadingTrigger) === f.VA.AUTO_LOAD;
        if (null != b && !0 === y && !1 === m && !e) {
            var t;
            A({
                timeToLoad: null == b ? void 0 : b.timeToLoad,
                messagesCount: r.length,
                unreadMessagesCount: a.length,
                loadingTrigger: null != (t = null == b ? void 0 : b.loadingTrigger) ? t : f.VA.UNKNOWN,
                viewId: null == b ? void 0 : b.viewId,
                channelsFetched: null == b ? void 0 : b.channelsFetched,
                mentionsFetched: null == b ? void 0 : b.mentionsFetched
            })
        }
    }, [m, r, a, c, y, b]), (0, s.l0)(() => {
        var e, t;
        v({
            unreadsCount: null != (e = null == a ? void 0 : a.length) ? e : 0,
            totalMessagesCount: null != (t = null == r ? void 0 : r.length) ? t : 0,
            unreadItemsCount: p.UNREAD.length,
            totalItemsCount: p.TODAY.length + p.YESTERDAY.length + p.OLDER.length,
            viewId: c
        })
    })
}