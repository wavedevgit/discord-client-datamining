/** chunk id: 860227 params = (module,exports,require) **/
t.d(a, {
    CJ: () => o,
    JH: () => l,
    XL: () => d,
    ZD: () => E,
    d$: () => _,
    fF: () => C,
    nS: () => c,
    xl: () => i
});
var n = t(264927),
    r = t(143413),
    s = t(652215);

function o(e) {
    return `message-content-${e.id}`
}

function c(e) {
    return `message-reply-context-${e.id}`
}

function _(e, a) {
    let t = a ?? e.id;
    return `message-username-${t}`
}

function i(e) {
    return `message-timestamp-${e.id}`
}

function l(e) {
    return `message-reactions-${e.id}`
}

function d(e) {
    return `message-accessories-${e.id}`
}

function C(e, a, t) {
    let l = e.type === s.lAJ.REPLY && null != e.messageReference,
        C = e.embeds.length > 0,
        E = e.attachments.length > 0,
        A = e.stickerItems.length > 0,
        u = e.codedLinks.length > 0,
        N = e.components.length > 0,
        m = e.hasFlag(s.pr7.HAS_THREAD),
        O = C || E || A || u || m || N || e.type === s.lAJ.THREAD_CREATED,
        T = C && e.content === e.embeds[0].url && e.embeds[0].type === s.Auw.GIFV,
        I = e.type !== s.lAJ.DEFAULT || !T && "" !== e.content,
        R = (0, r.A)(e),
        p = !R && t?.hasTimestamp !== !1,
        f = _(e, a),
        P = c(e),
        h = R ? "" : `${l?P:f} ${n.lW}`;
    if (I) {
        let a = o(e);
        h += ` ${a}`
    }
    if (O) {
        let a = d(e);
        h += ` ${a}`
    }
    if (p) {
        let a = i(e);
        h += ` ${n.l6} ${a}`
    }
    return h.trim()
}

function E(e) {
    if (0 === e.reactions.length) return;
    let a = l(e);
    return `${n.oz} ${a}`
}