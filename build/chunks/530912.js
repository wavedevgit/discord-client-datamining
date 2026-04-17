/** chunk id: 530912 params = (module,exports,require) **/
n.d(t, {
    Jf: () => _,
    TA: () => u,
    VF: () => h,
    hH: () => d,
    nL: () => m,
    pp: () => c
});
var l = n(64700),
    a = n(735438),
    s = n(58149),
    i = n(734057),
    r = n(954571),
    o = n(652215);

function c(e, t, n) {
    r.default.track(o.HAw.FORWARD_MESSAGE_STARTED, {
        channel_id: e,
        message_id: t,
        source: n
    })
}

function d(e) {
    let {
        channelId: t,
        messageId: n,
        numDestinationChanges: l,
        numQueryChanges: a
    } = e;
    r.default.track(o.HAw.FORWARD_MESSAGE_CANCELLED, {
        channel_id: t,
        message_id: n,
        num_destination_changes: l,
        num_query_changes: a
    })
}

function u(e) {
    let {
        channelId: t,
        messageId: n,
        hasError: l,
        hasContextMessage: a,
        numDestinations: c,
        numDestinationChanges: d,
        numQueryChanges: u,
        anyDestinationHasSlowmode: _,
        source: m
    } = e;
    if (r.default.track(o.HAw.FORWARD_MESSAGE_SENT, {
            channel_id: t,
            message_id: n,
            has_error: l,
            has_context_message: a,
            num_destinations: c,
            num_destination_changes: d,
            num_query_changes: u,
            any_destination_has_slowmode: _
        }), "message-shortcut" === m) {
        let e = i.A.getChannel(t);
        r.default.track(o.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: n,
            ...(0, s.H$)(e?.guild_id),
            ...(0, s.dI)(e)
        })
    }
}

function _() {
    return l.useMemo(() => (0, a.once)((e, t, n) => {
        r.default.track(o.HAw.FORWARD_ADD_RECIPIENT, {
            channel_id: e,
            message_id: t,
            has_query: n
        })
    }), [])
}

function m() {
    return l.useMemo(() => (0, a.once)((e, t) => {
        r.default.track(o.HAw.FORWARD_EDIT_SEARCH, {
            channel_id: e,
            message_id: t
        })
    }), [])
}

function h() {
    return l.useMemo(() => (0, a.once)((e, t) => {
        r.default.track(o.HAw.FORWARD_EDIT_CONTEXT_MESSAGE, {
            channel_id: e,
            message_id: t
        })
    }), [])
}