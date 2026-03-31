/** chunk id: 823162 params = (module,exports,require) **/
n.d(t, {
    A: () => K
}), n(667532);
var i = n(989349),
    l = n.n(i),
    a = n(73153),
    r = n(11057),
    s = n(100767),
    o = n(47167),
    d = n(379418),
    c = n(9842),
    u = n(773669),
    A = n(253932),
    h = n(961350),
    _ = n(761640),
    m = n(734057),
    p = n(696451),
    g = n(317525),
    E = n(71393),
    I = n(430452),
    f = n(803224),
    C = n(994500),
    T = n(309010),
    N = n(543465),
    S = n(287809),
    x = n(427262),
    v = n(54570),
    b = n(8880);
n(75804);
var y = n(652215),
    O = n(985018);
let L = [],
    R = null,
    P = null,
    D = null,
    M = /\|\|([\s\S]+?)\|\|/g;

function j(e, t, n, i) {
    let a = E.A.getGuild(n),
        r = e.replace(M, O.intl.string(O.t["F+x38C"])).replace(/<@!?(\d+)>/g, (e, t) => {
            let i = S.default.getUser(t);
            return null == i ? e : p.Ay.getNick(n, i.id) ?? x.Ay.getName(i)
        }).replace(/<@&?(\d+)>/g, (e, t) => {
            let n = null != a ? g.A.getRole(a.id, t) : null;
            return null != n && null != n.name ? n.name : O.intl.string(O.t.dRcLA2)
        }).replace(/<#(\d+)>/g, (e, t) => {
            let n = m.A.getChannel(t);
            return null == n ? e : (0, o.m1)(n, S.default, C.A)
        }).replace(/<a?:(\w+):(\d+)>/g, (e, t) => `${O.intl.string(O.t.sMOuuS)} ${t}`).replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => `/${t}`).replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
            let i = d.kx[n],
                a = 1e3 * parseInt(t, 10),
                r = l()(a);
            return null != i ? i(r) : r.format()
        });
    return null == i ? O.intl.formatToPlainString(O.t["uIj77/"], {
        username: t,
        body: r
    }) : O.intl.formatToPlainString(O.t["Ix4H+j"], {
        username: t,
        body: r,
        replyUsername: i
    })
}

function w() {
    if (!s.$j) return !1;
    let e = u.default.locale;
    null == D && (D = window.speechSynthesis?.getVoices());
    let t = D.filter(t => t.lang === e || t.lang.slice(0, e.length) === e);
    P = t.length > 0 ? t[0] : null
}
async function U(e, t, n, i, l) {
    let a = s.aW(e, n);
    null !== a && (null == P && w(), t ? await (0, v.pr)() : R?.removeEventListener("end", v.pr), a.addEventListener("end", v.pr), null != i && a.addEventListener("start", i), null != l && a.addEventListener("end", l), R = a, s.wz(a, P))
}

function G(e, t, n, i, l) {
    U(e, t, l, () => {
        (0, v.kC)(n, i)
    })
}

function k(e) {
    let {
        text: t,
        interrupt: n,
        maxLength: i,
        onStart: l,
        onEnd: a
    } = e;
    U(t, n, i, l, a)
}

function V() {
    return null !== R && R.removeEventListener("end", v.pr), s._X(), R = null, !0
}

function B(e) {
    let {
        message: t,
        channel: n
    } = e, i = t.type === y.lAJ.REPLY ? c.A.getMessageByReference(t.messageReference) : null, l = i?.state === c.a.LOADED ? i?.message?.author : null, a = null != l ? p.Ay.getNick(n.guild_id, l?.id) ?? x.Ay.getName(l) : null, r = n.getGuildId(), s = p.Ay.getNick(r, t.author.id) ?? x.Ay.getName(t.author);
    return G(j(t.content, s, r, a), !0, n.id, t.id), !0
}

function H(e) {
    let {
        channelId: t,
        message: n,
        optimistic: i
    } = e;
    if (i || I.Ay.isSelfDeaf()) return !1;
    let l = m.A.getChannel(t);
    if (null == l) return !1;
    let a = T.A.getChannelId(),
        r = _.Ay.getCurrentSidebarChannelId(a),
        s = t === a || t === r,
        o = A.on.getSetting() && n.tts && s,
        d = f.A.getTTSType(),
        c = n.author?.id !== h.default.getId() && (d === y.aVn.ALL_CHANNELS || d === y.aVn.SELECTED_CHANNEL && s);
    if ((o || c) && !C.A.isBlockedOrIgnoredForMessage(n)) {
        if (L.indexOf(n.id) >= 0) return !1;
        L.unshift(n.id) > 10 && L.pop();
        let e = l.getGuildId();
        if (null != e && N.Ay.getMutedChannels(e).has(t)) return !1;
        let i = p.Ay.getNick(e, n.author?.id) ?? x.Ay.getName(n.author) ?? "",
            a = n.type === y.lAJ.REPLY ? n.referenced_message?.author : null,
            r = null != a ? p.Ay.getNick(e, a?.id) ?? x.Ay.getName(a) : null;
        G(j(n.content, i, e, r), !1, l.id, n.id, 200)
    }
    return !1
}

function F(e) {
    let {
        id: t,
        channelId: n
    } = e, i = b.A.currentMessage;
    return null != i && t === i.messageId && n === i.channelId && ((0, v.pr)(), !0)
}

function Y() {
    I.Ay.isSelfDeaf() && s._X()
}

function W(e) {
    let {
        channelId: t
    } = e, n = b.A.currentMessage;
    null != n && n.channelId !== t && (0, v.pr)()
}
let K = {
    init() {
        a.h.subscribe("SPEAK_TEXT", k), a.h.subscribe("SPEAK_MESSAGE", B), a.h.subscribe("STOP_SPEAKING", V), a.h.subscribe("MESSAGE_CREATE", H), a.h.subscribe("MESSAGE_DELETE", F), a.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", Y), a.h.subscribe("CHANNEL_SELECT", W), a.h.subscribe("USER_SETTINGS_PROTO_UPDATE", w), (0, r.I)(w)
    }
}