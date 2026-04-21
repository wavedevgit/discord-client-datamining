/** chunk id: 530912 params = (module,exports,require) **/
l.d(t, {
    Jf: () => _,
    TA: () => u,
    VF: () => h,
    hH: () => d,
    nL: () => m,
    pp: () => c
});
var n = l(64700),
    a = l(735438),
    s = l(58149),
    i = l(734057),
    r = l(954571),
    o = l(652215);

function c(e, t, l) {
    r.default.track(o.HAw.FORWARD_MESSAGE_STARTED, {
        channel_id: e,
        message_id: t,
        source: l
    })
}

function d(e) {
    let {
        channelId: t,
        messageId: l,
        numDestinationChanges: n,
        numQueryChanges: a
    } = e;
    r.default.track(o.HAw.FORWARD_MESSAGE_CANCELLED, {
        channel_id: t,
        message_id: l,
        num_destination_changes: n,
        num_query_changes: a
    })
}

function u(e) {
    let {
        channelId: t,
        messageId: l,
        hasError: n,
        hasContextMessage: a,
        numDestinations: c,
        numDestinationChanges: d,
        numQueryChanges: u,
        anyDestinationHasSlowmode: _,
        source: m
    } = e;
    if (r.default.track(o.HAw.FORWARD_MESSAGE_SENT, {
            channel_id: t,
            message_id: l,
            has_error: n,
            has_context_message: a,
            num_destinations: c,
            num_destination_changes: d,
            num_query_changes: u,
            any_destination_has_slowmode: _
        }), "message-shortcut" === m) {
        let e = i.A.getChannel(t);
        r.default.track(o.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: l,
            ...(0, s.H$)(e?.guild_id),
            ...(0, s.dI)(e)
        })
    }
}

function _() {
    return n.useMemo(() => (0, a.once)((e, t, l) => {
        r.default.track(o.HAw.FORWARD_ADD_RECIPIENT, {
            channel_id: e,
            message_id: t,
            has_query: l
        })
    }), [])
}

function m() {
    return n.useMemo(() => (0, a.once)((e, t) => {
        r.default.track(o.HAw.FORWARD_EDIT_SEARCH, {
            channel_id: e,
            message_id: t
        })
    }), [])
}

function h() {
    return n.useMemo(() => (0, a.once)((e, t) => {
        r.default.track(o.HAw.FORWARD_EDIT_CONTEXT_MESSAGE, {
            channel_id: e,
            message_id: t
        })
    }), [])
}