/** Chunk was on 1636 **/
/** chunk id: 519222, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $b: () => M,
    DT: () => E,
    Io: () => w,
    Le: () => x,
    Nw: () => C,
    RC: () => D,
    S: () => _,
    Z4: () => L,
    cl: () => I,
    mF: () => N,
    r7: () => G,
    rS: () => T,
    u_: () => P,
    vc: () => S,
    wF: () => R
}), n(627968), n(64700), n(397927);
var r = n(687709),
    i = n(843472),
    l = n(419056),
    a = n(294454),
    o = n(997509);
n(928658);
var c = n(118517),
    s = n(164684),
    d = n(747926),
    u = n(961350),
    g = n(734057),
    p = n(954571),
    f = n(147036),
    y = n(957565),
    b = n(203982),
    A = n(661191),
    m = n(965407),
    O = n(439147),
    v = n(249700),
    j = n(145530),
    h = n(652215);

function S(e) {
    let t = e.getGuildId();
    null != t && o.A.open(t, h.BEX.ENGAGEMENT)
}

function E(e, t, n) {
    (0, y.C)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
}

function _(e, t) {
    p.default.track(h.HAw.MESSAGE_LINK_COPIED, {
        message_id: t.id,
        channel: t.channel_id
    }), (0, y.C)((0, f.n)(e.guild_id, e.id, t.id))
}

function D(e, t, n) {
    t.state === h.cmJ.SEND_FAILED || n.shiftKey ? i.A.deleteMessage(e.id, t.id, t.state === h.cmJ.SEND_FAILED) : j.A.confirmDelete(e, t)
}

function P(e, t) {
    i.A.startEditMessageRecord(e.id, t)
}

function I(e, t) {
    (0, O.A)(e.id, t.id)
}

function T(e, t, n) {
    !1 === t.pinned ? n.shiftKey ? r.A.pinMessage(e, t.id) : j.A.confirmPin(e, t) : n.shiftKey ? r.A.unpinMessage(e, t.id) : j.A.confirmUnpin(e, t)
}

function x(e, t) {
    (0, l.A)(e.id, t.id)
}

function w(e, t) {
    (0, v.A)(e, t, void 0, m.A.getOptions(t.id))
}

function M(e, t, n) {
    let r = e.isPrivate(),
        i = t.author.id === u.default.getId();
    (0, c.Yf)({
        channel: e,
        message: t,
        shouldMention: !n.shiftKey && !i,
        showMentionToggle: !r && !i
    }), b._.dispatch(h.jej.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: e.id
    })
}

function C(e, t) {
    (0, d.Tv)(e, t, "Message")
}

function N(e, t) {
    let n = g.A.getChannel(A.default.castMessageIdAsChannelId(t.id));
    null != n && (0, d.JA)(n)
}

function R(e, t) {
    (0, s.Y)({
        channelId: e.id,
        messageId: t.id
    })
}

function G(e, t) {
    (0, s.x)({
        channelId: e.id,
        messageId: t.id
    })
}

function L(e, t) {
    (0, a.fO)({
        message: t,
        source: "message-actions"
    })
}