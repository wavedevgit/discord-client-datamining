/** chunk id: 860227, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    CJ: () => o,
    JH: () => u,
    XL: () => d,
    ZD: () => p,
    d$: () => l,
    fF: () => f,
    nS: () => s,
    xl: () => c
}), n(733351);
var r = n(264927),
    i = n(143413),
    a = n(652215);

function o(e) {
    return "message-content-".concat(e.id)
}

function s(e) {
    return "message-reply-context-".concat(e.id)
}

function l(e, t) {
    let n = null != t ? t : e.id;
    return "message-username-".concat(n)
}

function c(e) {
    return "message-timestamp-".concat(e.id)
}

function u(e) {
    return "message-reactions-".concat(e.id)
}

function d(e) {
    return "message-accessories-".concat(e.id)
}

function f(e, t, n) {
    let u = e.type === a.lAJ.REPLY && null != e.messageReference,
        f = e.embeds.length > 0,
        p = e.attachments.length > 0,
        _ = e.stickerItems.length > 0,
        h = e.codedLinks.length > 0,
        m = e.components.length > 0,
        g = e.hasFlag(a.pr7.HAS_THREAD),
        E = f || p || _ || h || g || m || e.type === a.lAJ.THREAD_CREATED,
        y = f && e.content === e.embeds[0].url && e.embeds[0].type === a.Auw.GIFV,
        b = e.type !== a.lAJ.DEFAULT || !y && "" !== e.content,
        O = (0, i.A)(e),
        v = !O && (null == n ? void 0 : n.hasTimestamp) !== !1,
        A = !O,
        I = l(e, t),
        S = s(e),
        T = u ? S : I,
        C = A ? "".concat(T, " ").concat(r.lW) : "";
    if (b) {
        let t = o(e);
        C += " ".concat(t)
    }
    if (E) {
        let t = d(e);
        C += " ".concat(t)
    }
    if (v) {
        let t = c(e);
        C += " ".concat(r.l6, " ").concat(t)
    }
    return C.trim()
}

function p(e) {
    if (0 === e.reactions.length) return;
    let t = u(e);
    return "".concat(r.oz, " ").concat(t)
}