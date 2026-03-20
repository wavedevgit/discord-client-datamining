/** chunk id: 823162 params = (module,exports,require) **/
n.d(t, {
    A: () => K
}), n(667532);
var i = n(989349),
    a = n.n(i),
    r = n(73153),
    l = n(11057),
    s = n(100767),
    o = n(47167),
    d = n(379418),
    c = n(9842),
    u = n(773669),
    A = n(253932),
    h = n(961350),
    _ = n(761640),
    m = n(734057),
    g = n(696451),
    p = n(317525),
    E = n(71393),
    I = n(430452),
    f = n(803224),
    C = n(994500),
    T = n(309010),
    N = n(543465),
    S = n(287809),
    x = n(427262),
    y = n(54570),
    v = n(8880);
n(75804);
var b = n(652215),
    O = n(985018);
let L = [],
    R = null,
    P = null,
    D = null,
    M = /\|\|([\s\S]+?)\|\|/g;

function j(e, t, n, i) {
    let r = E.A.getGuild(n),
        l = e.replace(M, O.intl.string(O.t["F+x38C"])).replace(/<@!?(\d+)>/g, (e, t) => {
            let i = S.default.getUser(t);
            return null == i ? e : g.Ay.getNick(n, i.id) ?? x.Ay.getName(i)
        }).replace(/<@&?(\d+)>/g, (e, t) => {
            let n = null != r ? p.A.getRole(r.id, t) : null;
            return null != n && null != n.name ? n.name : O.intl.string(O.t.dRcLA2)
        }).replace(/<#(\d+)>/g, (e, t) => {
            let n = m.A.getChannel(t);
            return null == n ? e : (0, o.m1)(n, S.default, C.A)
        }).replace(/<a?:(\w+):(\d+)>/g, (e, t) => `${O.intl.string(O.t.sMOuuS)} ${t}`).replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => `/${t}`).replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
            let i = d.kx[n],
                r = 1e3 * parseInt(t, 10),
                l = a()(r);
            return null != i ? i(l) : l.format()
        });
    return null == i ? O.intl.formatToPlainString(O.t["uIj77/"], {
        username: t,
        body: l
    }) : O.intl.formatToPlainString(O.t["Ix4H+j"], {
        username: t,
        body: l,
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
async function U(e, t, n, i, a) {
    let r = s.aW(e, n);
    null !== r && (null == P && w(), t ? await (0, y.pr)() : R?.removeEventListener("end", y.pr), r.addEventListener("end", y.pr), null != i && r.addEventListener("start", i), null != a && r.addEventListener("end", a), R = r, s.wz(r, P))
}

function G(e, t, n, i, a) {
    U(e, t, a, () => {
        (0, y.kC)(n, i)
    })
}

function k(e) {
    let {
        text: t,
        interrupt: n,
        maxLength: i,
        onStart: a,
        onEnd: r
    } = e;
    U(t, n, i, a, r)
}

function V() {
    return null !== R && R.removeEventListener("end", y.pr), s._X(), R = null, !0
}

function B(e) {
    let {
        message: t,
        channel: n
    } = e, i = t.type === b.lAJ.REPLY ? c.A.getMessageByReference(t.messageReference) : null, a = i?.state === c.a.LOADED ? i?.message?.author : null, r = null != a ? g.Ay.getNick(n.guild_id, a?.id) ?? x.Ay.getName(a) : null, l = n.getGuildId(), s = g.Ay.getNick(l, t.author.id) ?? x.Ay.getName(t.author);
    return G(j(t.content, s, l, r), !0, n.id, t.id), !0
}

function H(e) {
    let {
        channelId: t,
        message: n,
        optimistic: i
    } = e;
    if (i || I.Ay.isSelfDeaf()) return !1;
    let a = m.A.getChannel(t);
    if (null == a) return !1;
    let r = T.A.getChannelId(),
        l = _.Ay.getCurrentSidebarChannelId(r),
        s = t === r || t === l,
        o = A.on.getSetting() && n.tts && s,
        d = f.A.getTTSType(),
        c = n.author?.id !== h.default.getId() && (d === b.aVn.ALL_CHANNELS || d === b.aVn.SELECTED_CHANNEL && s);
    if ((o || c) && !C.A.isBlockedOrIgnoredForMessage(n)) {
        if (L.indexOf(n.id) >= 0) return !1;
        L.unshift(n.id) > 10 && L.pop();
        let e = a.getGuildId();
        if (null != e && N.Ay.getMutedChannels(e).has(t)) return !1;
        let i = g.Ay.getNick(e, n.author?.id) ?? x.Ay.getName(n.author) ?? "",
            r = n.type === b.lAJ.REPLY ? n.referenced_message?.author : null,
            l = null != r ? g.Ay.getNick(e, r?.id) ?? x.Ay.getName(r) : null;
        G(j(n.content, i, e, l), !1, a.id, n.id, 200)
    }
    return !1
}

function F(e) {
    let {
        id: t,
        channelId: n
    } = e, i = v.A.currentMessage;
    return null != i && t === i.messageId && n === i.channelId && ((0, y.pr)(), !0)
}

function Y() {
    I.Ay.isSelfDeaf() && s._X()
}

function W(e) {
    let {
        channelId: t
    } = e, n = v.A.currentMessage;
    null != n && n.channelId !== t && (0, y.pr)()
}
let K = {
    init() {
        r.h.subscribe("SPEAK_TEXT", k), r.h.subscribe("SPEAK_MESSAGE", B), r.h.subscribe("STOP_SPEAKING", V), r.h.subscribe("MESSAGE_CREATE", H), r.h.subscribe("MESSAGE_DELETE", F), r.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", Y), r.h.subscribe("CHANNEL_SELECT", W), r.h.subscribe("USER_SETTINGS_PROTO_UPDATE", w), (0, l.I)(w)
    }
}