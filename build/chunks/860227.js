/** chunk id: 860227 params = (module,exports,require) **/
n.d(t, {
    CJ: () => s,
    JH: () => d,
    XL: () => u,
    ZD: () => p,
    d$: () => o,
    fF: () => m,
    nS: () => r,
    xl: () => c
});
var a = n(264927),
    i = n(143413),
    l = n(652215);

function s(e) {
    return `message-content-${e.id}`
}

function r(e) {
    return `message-reply-context-${e.id}`
}

function o(e, t) {
    let n = t ?? e.id;
    return `message-username-${n}`
}

function c(e) {
    return `message-timestamp-${e.id}`
}

function d(e) {
    return `message-reactions-${e.id}`
}

function u(e) {
    return `message-accessories-${e.id}`
}

function m(e, t, n) {
    let d = e.type === l.lAJ.REPLY && null != e.messageReference,
        m = e.embeds.length > 0,
        p = e.attachments.length > 0,
        _ = e.stickerItems.length > 0,
        h = e.codedLinks.length > 0,
        A = e.components.length > 0,
        g = e.hasFlag(l.pr7.HAS_THREAD),
        f = m || p || _ || h || g || A || e.type === l.lAJ.THREAD_CREATED,
        b = m && e.content === e.embeds[0].url && e.embeds[0].type === l.Auw.GIFV,
        T = e.type !== l.lAJ.DEFAULT || !b && "" !== e.content,
        x = (0, i.A)(e),
        I = !x && n?.hasTimestamp !== !1,
        C = o(e, t),
        y = r(e),
        E = x ? "" : `${d?y:C} ${a.lW}`;
    if (T) {
        let t = s(e);
        E += ` ${t}`
    }
    if (f) {
        let t = u(e);
        E += ` ${t}`
    }
    if (I) {
        let t = c(e);
        E += ` ${a.l6} ${t}`
    }
    return E.trim()
}

function p(e) {
    if (0 === e.reactions.length) return;
    let t = d(e);
    return `${a.oz} ${t}`
}