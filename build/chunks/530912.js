/** chunk id: 530912, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Jf: () => _,
    TA: () => c,
    VF: () => m,
    hH: () => d,
    nL: () => h,
    pp: () => u
});
var a = n(64700),
    s = n(735438),
    i = n(58149),
    r = n(734057),
    l = n(954571),
    o = n(652215);

function u(e, t, n) {
    l.default.track(o.HAw.FORWARD_MESSAGE_STARTED, {
        channel_id: e,
        message_id: t,
        source: n
    })
}

function d(e) {
    let {
        channelId: t,
        messageId: n,
        numDestinationChanges: a,
        numQueryChanges: s
    } = e;
    l.default.track(o.HAw.FORWARD_MESSAGE_CANCELLED, {
        channel_id: t,
        message_id: n,
        num_destination_changes: a,
        num_query_changes: s
    })
}

function c(e) {
    let {
        channelId: t,
        messageId: n,
        hasError: a,
        hasContextMessage: s,
        numDestinations: u,
        numDestinationChanges: d,
        numQueryChanges: c,
        anyDestinationHasSlowmode: _,
        source: h
    } = e;
    if (l.default.track(o.HAw.FORWARD_MESSAGE_SENT, {
            channel_id: t,
            message_id: n,
            has_error: a,
            has_context_message: s,
            num_destinations: u,
            num_destination_changes: d,
            num_query_changes: c,
            any_destination_has_slowmode: _
        }), "message-shortcut" === h) {
        let e = r.A.getChannel(t);
        l.default.track(o.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: n,
            ...(0, i.H$)(e?.guild_id),
            ...(0, i.dI)(e)
        })
    }
}

function _() {
    return a.useMemo(() => (0, s.once)((e, t, n) => {
        l.default.track(o.HAw.FORWARD_ADD_RECIPIENT, {
            channel_id: e,
            message_id: t,
            has_query: n
        })
    }), [])
}

function h() {
    return a.useMemo(() => (0, s.once)((e, t) => {
        l.default.track(o.HAw.FORWARD_EDIT_SEARCH, {
            channel_id: e,
            message_id: t
        })
    }), [])
}

function m() {
    return a.useMemo(() => (0, s.once)((e, t) => {
        l.default.track(o.HAw.FORWARD_EDIT_CONTEXT_MESSAGE, {
            channel_id: e,
            message_id: t
        })
    }), [])
}