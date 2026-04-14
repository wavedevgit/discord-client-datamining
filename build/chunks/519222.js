/** chunk id: 519222 params = (module,exports,require) **/
n.d(t, {
    $b: () => N,
    DT: () => v,
    Io: () => C,
    Le: () => O,
    Nw: () => G,
    RC: () => D,
    S: () => b,
    Z4: () => U,
    cl: () => M,
    mF: () => R,
    r7: () => P,
    rS: () => j,
    u_: () => x,
    vc: () => I,
    wF: () => L
}), n(627968), n(64700), n(397927);
var i = n(687709),
    l = n(843472),
    a = n(419056),
    r = n(294454),
    s = n(997509);
n(928658);
var o = n(118517),
    d = n(164684),
    c = n(747926),
    u = n(961350),
    g = n(734057),
    A = n(954571),
    p = n(147036),
    m = n(957565),
    f = n(203982),
    y = n(661191),
    h = n(965407),
    E = n(439147),
    S = n(249700),
    _ = n(145530),
    T = n(652215);

function I(e) {
    let t = e.getGuildId();
    null != t && s.A.open(t, T.BEX.ENGAGEMENT)
}

function v(e, t, n) {
    (0, m.C)(n.shiftKey ? `${t.channel_id}-${t.id}` : t.id)
}

function b(e, t) {
    A.default.track(T.HAw.MESSAGE_LINK_COPIED, {
        message_id: t.id,
        channel: t.channel_id
    }), (0, m.C)((0, p.n)(e.guild_id, e.id, t.id))
}

function D(e, t, n) {
    t.state === T.cmJ.SEND_FAILED || n.shiftKey ? l.A.deleteMessage(e.id, t.id, t.state === T.cmJ.SEND_FAILED) : _.A.confirmDelete(e, t)
}

function x(e, t) {
    l.A.startEditMessageRecord(e.id, t)
}

function M(e, t) {
    (0, E.A)(e.id, t.id)
}

function j(e, t, n) {
    !1 === t.pinned ? n.shiftKey ? i.A.pinMessage(e, t.id) : _.A.confirmPin(e, t) : n.shiftKey ? i.A.unpinMessage(e, t.id) : _.A.confirmUnpin(e, t)
}

function O(e, t) {
    (0, a.A)(e.id, t.id)
}

function C(e, t) {
    (0, S.A)(e, t, void 0, h.A.getOptions(t.id))
}

function N(e, t, n) {
    let i = e.isPrivate(),
        l = t.author.id === u.default.getId();
    (0, o.Yf)({
        channel: e,
        message: t,
        shouldMention: !n.shiftKey && !l,
        showMentionToggle: !i && !l
    }), f._.dispatch(T.jej.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: e.id
    })
}

function G(e, t) {
    (0, c.Tv)(e, t, "Message")
}

function R(e, t) {
    let n = g.A.getChannel(y.default.castMessageIdAsChannelId(t.id));
    null != n && (0, c.JA)(n)
}

function L(e, t) {
    (0, d.Y)({
        channelId: e.id,
        messageId: t.id
    })
}

function P(e, t) {
    (0, d.x)({
        channelId: e.id,
        messageId: t.id
    })
}

function U(e, t) {
    (0, r.fO)({
        message: t,
        source: "message-actions"
    })
}