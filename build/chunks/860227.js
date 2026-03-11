/** chunk id: 860227 params = (module,exports,require) **/
t.d(a, {
    CJ: () => s,
    JH: () => l,
    XL: () => d,
    ZD: () => C,
    d$: () => c,
    fF: () => E,
    nS: () => _,
    xl: () => i
});
var n = t(264927),
    r = t(143413),
    o = t(652215);

function s(e) {
    return `message-content-${e.id}`
}

function _(e) {
    return `message-reply-context-${e.id}`
}

function c(e, a) {
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

function E(e, a, t) {
    let l = e.type === o.lAJ.REPLY && null != e.messageReference,
        E = e.embeds.length > 0,
        C = e.attachments.length > 0,
        A = e.stickerItems.length > 0,
        u = e.codedLinks.length > 0,
        N = e.components.length > 0,
        O = e.hasFlag(o.pr7.HAS_THREAD),
        m = E || C || A || u || O || N || e.type === o.lAJ.THREAD_CREATED,
        R = E && e.content === e.embeds[0].url && e.embeds[0].type === o.Auw.GIFV,
        T = e.type !== o.lAJ.DEFAULT || !R && "" !== e.content,
        I = (0, r.A)(e),
        p = !I && t?.hasTimestamp !== !1,
        P = c(e, a),
        f = _(e),
        S = I ? "" : `${l?f:P} ${n.lW}`;
    if (T) {
        let a = s(e);
        S += ` ${a}`
    }
    if (m) {
        let a = d(e);
        S += ` ${a}`
    }
    if (p) {
        let a = i(e);
        S += ` ${n.l6} ${a}`
    }
    return S.trim()
}

function C(e) {
    if (0 === e.reactions.length) return;
    let a = l(e);
    return `${n.oz} ${a}`
}