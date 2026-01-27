/** Chunk was on web.js **/
/** chunk id: 815807, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    b3: () => u,
    i6: () => p,
    jq: () => f,
    mb: () => d,
    n4: () => m,
    sn: () => _,
    vp: () => h
}), n(747238), n(812715), n(733351);
var r = n(7584),
    i = n(253932),
    a = n(961350),
    o = n(954571),
    s = n(652215),
    l = n(406535),
    c = n(985018);

function u(e) {
    return null == e.id ? r.Ay.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
}

function d(e, t, n, r) {
    var i, a, o;
    let s;
    return s = r ? e ? c.t.i9DXqM : c.t["Z/l+qu"] : e ? c.t.CLuzw5 : c.t.PirBBE, c.intl.formatToPlainString(s, {
        reactions: t,
        emojiName: null != (i = null == (o = u(n)) || null == (a = o.replace(/[:_]/g, " ")) ? void 0 : a.trim()) ? i : ""
    })
}

function f(e) {
    var t, n, r;
    return {
        id: null != (t = e.id) ? t : null,
        name: null != (n = null != (r = null != e.id ? e.name : e.optionallyDiverseSequence) ? r : e.name) ? n : "",
        animated: !!e.animated
    }
}

function p(e, t) {
    if (null != t.id) {
        let n = null != e.id ? "".concat(e.id) : e.id;
        return "".concat(t.id) === n
    }
    return null == e.id && t.name === e.name
}

function _(e) {
    return e.isThread() ? s.JJy.THREAD_TEXT_AREA : e.isForumPost() ? s.JJy.FORUM_CHANNEL_TEXT_AREA : e.isGuildVocal() ? s.JJy.TEXT_IN_VOICE : s.JJy.CHANNEL_TEXT_AREA
}

function h(e) {
    let {
        userId: t,
        optimistic: n
    } = e, r = a.default.getId() === t;
    return !n || !!r
}

function m(e, t) {
    i.Zp.updateSetting(e), o.default.track(s.HAw.NOTIFICATION_SETTINGS_UPDATED, {
        update_type: l.Y.ACCOUNT,
        reaction_notifications: e,
        reaction_notifications_old: t
    })
}