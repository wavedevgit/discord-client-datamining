/** chunk id: 519222 params = (module,exports,require) **/
n.d(t, {
    $b: () => O,
    DT: () => x,
    Io: () => N,
    Le: () => C,
    Nw: () => R,
    RC: () => j,
    S: () => I,
    Z4: () => P,
    cl: () => D,
    mF: () => G,
    r7: () => w,
    rS: () => M,
    u_: () => T,
    vc: () => v,
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
    h = n(661191),
    y = n(965407),
    E = n(439147),
    _ = n(249700),
    S = n(145530),
    b = n(652215);

function v(e) {
    let t = e.getGuildId();
    null != t && s.A.open(t, b.BEX.ENGAGEMENT)
}

function x(e, t, n) {
    (0, m.C)(n.shiftKey ? `${t.channel_id}-${t.id}` : t.id)
}

function I(e, t) {
    A.default.track(b.HAw.MESSAGE_LINK_COPIED, {
        message_id: t.id,
        channel: t.channel_id
    }), (0, m.C)((0, p.n)(e.guild_id, e.id, t.id))
}

function j(e, t, n) {
    t.state === b.cmJ.SEND_FAILED || n.shiftKey ? l.A.deleteMessage(e.id, t.id, t.state === b.cmJ.SEND_FAILED) : S.A.confirmDelete(e, t)
}

function T(e, t) {
    l.A.startEditMessageRecord(e.id, t)
}

function D(e, t) {
    (0, E.A)(e.id, t.id)
}

function M(e, t, n) {
    !1 === t.pinned ? n.shiftKey ? i.A.pinMessage(e, t.id) : S.A.confirmPin(e, t) : n.shiftKey ? i.A.unpinMessage(e, t.id) : S.A.confirmUnpin(e, t)
}

function C(e, t) {
    (0, a.A)(e.id, t.id)
}

function N(e, t) {
    (0, _.A)(e, t, void 0, y.A.getOptions(t.id))
}

function O(e, t, n) {
    let i = e.isPrivate(),
        l = t.author.id === u.default.getId();
    (0, o.Yf)({
        channel: e,
        message: t,
        shouldMention: !n.shiftKey && !l,
        showMentionToggle: !i && !l
    }), f._.dispatch(b.jej.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: e.id
    })
}

function R(e, t) {
    (0, c.Tv)(e, t, "Message")
}

function G(e, t) {
    let n = g.A.getChannel(h.default.castMessageIdAsChannelId(t.id));
    null != n && (0, c.JA)(n)
}

function L(e, t) {
    (0, d.Y)({
        channelId: e.id,
        messageId: t.id
    })
}

function w(e, t) {
    (0, d.x)({
        channelId: e.id,
        messageId: t.id
    })
}

function P(e, t) {
    (0, r.fO)({
        message: t,
        source: "message-actions"
    })
}