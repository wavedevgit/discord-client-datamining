/** chunk id: 530912 params = (module,exports,require) **/
n.d(t, {
    Jf: () => _,
    TA: () => u,
    VF: () => p,
    hH: () => d,
    nL: () => m,
    pp: () => c
});
var a = n(64700),
    i = n(735438),
    r = n(58149),
    o = n(734057),
    l = n(954571),
    s = n(652215);

function c(e, t, n) {
    l.default.track(s.HAw.FORWARD_MESSAGE_STARTED, {
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
        numQueryChanges: i
    } = e;
    l.default.track(s.HAw.FORWARD_MESSAGE_CANCELLED, {
        channel_id: t,
        message_id: n,
        num_destination_changes: a,
        num_query_changes: i
    })
}

function u(e) {
    let {
        channelId: t,
        messageId: n,
        hasError: a,
        hasContextMessage: i,
        numDestinations: c,
        numDestinationChanges: d,
        numQueryChanges: u,
        anyDestinationHasSlowmode: _,
        source: m
    } = e;
    if (l.default.track(s.HAw.FORWARD_MESSAGE_SENT, {
            channel_id: t,
            message_id: n,
            has_error: a,
            has_context_message: i,
            num_destinations: c,
            num_destination_changes: d,
            num_query_changes: u,
            any_destination_has_slowmode: _
        }), "message-shortcut" === m) {
        let e = o.A.getChannel(t);
        l.default.track(s.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: n,
            ...(0, r.H$)(e?.guild_id),
            ...(0, r.dI)(e)
        })
    }
}

function _() {
    return a.useMemo(() => (0, i.once)((e, t, n) => {
        l.default.track(s.HAw.FORWARD_ADD_RECIPIENT, {
            channel_id: e,
            message_id: t,
            has_query: n
        })
    }), [])
}

function m() {
    return a.useMemo(() => (0, i.once)((e, t) => {
        l.default.track(s.HAw.FORWARD_EDIT_SEARCH, {
            channel_id: e,
            message_id: t
        })
    }), [])
}

function p() {
    return a.useMemo(() => (0, i.once)((e, t) => {
        l.default.track(s.HAw.FORWARD_EDIT_CONTEXT_MESSAGE, {
            channel_id: e,
            message_id: t
        })
    }), [])
}