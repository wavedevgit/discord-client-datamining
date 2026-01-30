/** chunk id: 47167, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => g,
    Eq: () => h,
    Jo: () => d,
    LG: () => m,
    e5: () => p,
    ks: () => f,
    m1: () => _
}), n(896048), n(747238), n(812715);
var r = n(311907),
    i = n(49463),
    a = n(994500),
    o = n(287809),
    s = n(403362),
    l = n(427262),
    c = n(652215),
    u = n(985018);

function d(e, t, n) {
    let r = e.map(t.getUser).filter(s.Vq).map(e => {
        var t;
        return null != (t = n.getNickname(e.id)) ? t : l.Ay.getName(e)
    });
    return r.length > 0 ? r.join(", ") : u.intl.formatToPlainString(u.t["9Uk8PF"], {
        name: l.Ay.getName(t.getCurrentUser())
    })
}

function f(e, t, n) {
    return d(e.recipients, t, n)
}

function p(e) {
    return (0, r.bG)([o.default, a.A], () => null != e && e.isMultiUserDM() ? f(e, o.default, a.A) : null)
}

function _(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (e.isObfuscated()) return u.intl.string(u.t["/YzI63"]);
    switch (e.type) {
        case c.rbe.DM:
            var a;
            let [o] = e.recipients.map(t.getUser).filter(s.Vq);
            if (null == o) return "???";
            if (o.isProvisional && null != o.globalName) return o.globalName;
            let d = n.getNickname(o.id),
                p = null != (a = null != d ? d : l.Ay.getName(o)) ? a : "???";
            return r ? "@".concat(p) : p;
        case c.rbe.GROUP_DM:
            if ("" !== e.name) return e.name;
            return f(e, t, n);
        case c.rbe.GUILD_ANNOUNCEMENT:
        case c.rbe.GUILD_TEXT:
        case c.rbe.GUILD_FORUM:
        case c.rbe.GUILD_MEDIA:
            if (r) return "#".concat(e.name);
            return e.name;
        case c.rbe.PUBLIC_THREAD:
        case c.rbe.PRIVATE_THREAD:
        case c.rbe.ANNOUNCEMENT_THREAD:
        case c.rbe.GUILD_VOICE:
        case c.rbe.GUILD_STAGE_VOICE:
        case c.rbe.GUILD_CATEGORY:
            if (i) return '#"'.concat(h(e.name), '"');
            if (r && e.isThread()) return '"'.concat(e.name, '"');
            return e.name;
        default:
            return e.name
    }
}

function h(e) {
    return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
}

function m(e) {
    return e.replace(/\\"/g, '"').replace(/\\\\/g, "\\")
}

function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, r.bG)([o.default, i.A, a.A], () => null == e ? null : _(e, o.default, a.A, t))
}