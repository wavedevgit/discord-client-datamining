/** Chunk was on web.js **/
/** chunk id: 969632, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $m: () => F,
    G8: () => x,
    Gh: () => N,
    I7: () => w,
    Il: () => j,
    Kj: () => C,
    ND: () => P,
    VD: () => D,
    Wn: () => R,
    YP: () => S,
    aw: () => k
}), n(747238), n(812715), n(896048), n(733351);
var r = n(735438),
    i = n.n(r),
    a = n(835245),
    o = n(23339),
    s = n(311907),
    l = n(695870),
    c = n(505527),
    u = n(763754),
    d = n(734057),
    f = n(956703),
    p = n(320501),
    _ = n(576705),
    h = n(994500),
    m = n(927813),
    g = n(562153),
    E = n(412136),
    y = n(652215),
    b = n(985018);

function O(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            O(e, t, n[t])
        })
    }
    return e
}

function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function I(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function S() {
    return {
        text: void 0,
        image: void 0,
        localCreationAnswerId: T()
    }
}

function T() {
    return (0, a.A)()
}

function C(e) {
    let t = /\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i;
    return e.replace(t, "")
}

function N(e) {
    for (let t of e.reactions)
        if (null == t.me_vote) return !0;
    return !1
}

function w(e) {
    return (0, s.bG)([_.A], () => null != e && e.id !== l.E && !!y.kvI.POLLS.has(e.type) && (!!e.isPrivate() || _.A.can(y.xBc.SEND_MESSAGES, e) && _.A.can(y.xBc.SEND_POLLS, e)))
}

function R(e, t) {
    return 0 === e.length && null == t.find(e => P(e))
}

function P(e) {
    var t;
    let n = null == (t = e.text) ? void 0 : t.trim();
    return null != n && n.length > 0
}

function D(e) {
    var t;
    let n = null == (t = e.text) ? void 0 : t.trim();
    return null != e.image && (null == n || 0 === n.length)
}

function L(e) {
    return new Date(Date.now() + e * m.A.Millis.HOUR).toISOString()
}

function x(e) {
    var t;
    if (null == e) return;
    let n = null == e || null == (t = e.answers) ? void 0 : t.map((e, t) => {
            var n, r;
            let i = null == (r = e.poll_media) ? void 0 : r.emoji,
                a = I(v({}, e.poll_media), {
                    emoji: null != i ? {
                        id: i.id,
                        name: null != (n = i.name) ? n : ""
                    } : void 0
                });
            return I(v({}, e), {
                answer_id: t + 1,
                poll_media: a
            })
        }),
        r = (null == e ? void 0 : e.duration) != null ? L(e.duration) : "0";
    return I(v({}, e), {
        expiry: r,
        answers: n
    })
}

function M(e, t) {
    var n, r, i, a;
    let s = null != (n = null == (a = e.embeds[0]) || null == (i = a.fields) || null == (r = i.find(e => "poll_question_text" === e.rawName)) ? void 0 : r.rawValue) ? n : "";
    return null != t ? (0, o.EJ)(s, t) : s
}

function j(e) {
    let t = (0, u.p_)(e),
        n = M(e, E.TU);
    return b.intl.format(b.t.Vn97Ka, {
        username: t.nick,
        title: n
    })
}

function k(e) {
    return e.reduce((e, t) => {
        var n, r;
        return e + (null != (n = null == (r = t.count_details) ? void 0 : r.vote) ? n : 0)
    }, 0)
}

function U(e, t) {
    var n;
    let r = {
            id: t,
            name: "",
            animated: !1
        },
        a = e.getChannelId(),
        o = f.A.getReactions(a, e.id, r, E.kx, c.v.VOTE),
        s = d.A.getChannel(a),
        l = null == s || s.isPrivate() ? null : s.getGuildId();
    return i()(Array.from(null != (n = null == o ? void 0 : o.values()) ? n : [])).reject(e => h.A.isBlockedOrIgnored(e.id)).take(E.kx).map(e => g.Ay.getName(l, null == s ? void 0 : s.id, e)).value()
}

function G(e, t) {
    let n = Math.max(0, t - e.length);
    if (1 === e.length)
        if (n > 0) return b.intl.formatToPlainString(b.t["SV/iZn"], {
            a: e[0],
            n: n
        });
        else return e[0];
    if (2 === e.length)
        if (n > 0) return b.intl.formatToPlainString(b.t.YBnZK0, {
            a: e[0],
            b: e[1],
            n: n
        });
        else return b.intl.formatToPlainString(b.t["O5+f5c"], {
            a: e[0],
            b: e[1]
        });
    return 3 !== e.length ? b.intl.formatToPlainString(b.t.yVX6kE, {
        n: n
    }) : n > 0 ? b.intl.formatToPlainString(b.t["ThXp+N"], {
        a: e[0],
        b: e[1],
        c: e[2],
        n: n
    }) : b.intl.formatToPlainString(b.t["0UzBM3"], {
        a: e[0],
        b: e[1],
        c: e[2]
    })
}

function F(e, t, n) {
    var r, i;
    let a = p.A.getMessage(t, e);
    if (null == a) return "";
    let o = a.getReaction({
            id: n,
            name: "",
            animated: !1
        }),
        s = null != (r = null == o || null == (i = o.count_details) ? void 0 : i.vote) ? r : 0,
        l = U(a, n);
    return 0 === l.length ? "" : G(l, s)
}