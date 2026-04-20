/** chunk id: 294520 params = (module,exports,require) **/
a.d(t, {
    K6: () => h,
    eJ: () => g,
    iW: () => p,
    rx: () => f,
    sC: () => C,
    tt: () => b
}), a(938796);
var n = a(665260),
    o = a(417597),
    i = a(930125),
    r = a(338717),
    c = a(282108),
    l = a(256265),
    s = a(253932),
    _ = a(576705),
    d = a(863439),
    u = a(652215),
    m = a(985018);
let p = (e, t) => {
        let {
            spoiler: a,
            flags: o = 0
        } = e, l = (0, c.b)({
            type: i.D.Attachment,
            media: e
        }, t), s = (0, c.$V)({
            type: i.D.Attachment,
            media: e
        }, t);
        return l.length > 0 ? l[0] : s ? r.Oc.POTENTIAL_EXPLICIT_CONTENT : a || (0, n.Lt)(o, u.sbO.IS_SPOILER) ? r.Oc.SPOILER : null
    },
    C = (e, t, a, n) => {
        let o = (0, c.b)({
                type: i.D.Embed,
                media: e
            }, n),
            l = !t.author.bot && (0, c.$V)({
                type: i.D.Embed,
                media: e
            }, n);
        return o.length > 0 ? o[0] : l ? r.Oc.POTENTIAL_EXPLICIT_CONTENT : a ? r.Oc.SPOILER : null
    },
    b = function(e, t) {
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = (0, c.b)({
                type: i.D.GenericMedia,
                media: e
            }, t),
            l = !n && (0, c.$V)({
                type: i.D.GenericMedia,
                media: e
            }, t);
        return o.includes(r.Oc.EXPLICIT_CONTENT) ? r.Oc.EXPLICIT_CONTENT : o.includes(r.Oc.GORE_CONTENT) ? r.Oc.GORE_CONTENT : o.includes(r.Oc.SELF_HARM_CONTENT) ? r.Oc.SELF_HARM_CONTENT : l ? r.Oc.POTENTIAL_EXPLICIT_CONTENT : a ? r.Oc.SPOILER : null
    };

function h(e, t, a) {
    if (null == e) return [!1, void 0];
    let n = function(e) {
        switch (e.type) {
            case l.vV.EMBED:
                return {
                    type: i.D.Embed, media: e
                };
            case l.vV.ATTACHMENT:
                return {
                    type: i.D.Attachment, media: e
                };
            case l.vV.COMPONENT:
                return {
                    type: i.D.GenericMedia, media: e.srcUnfurledMediaItem
                };
            default:
                return null
        }
    }(e);
    if (null == n) return [!1, void 0];
    let o = (0, c.b)(n, a),
        s = (0, c.$V)(n, a);
    return o.length > 0 ? [!0, o[0]] : s ? [!0, r.Oc.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [t, r.Oc.SPOILER] : [!1, void 0]
}

function g(e) {
    let {
        channel: t,
        media: a
    } = e, n = (0, o.bG)([_.A], () => null != t && _.A.can(u.xBc.MANAGE_MESSAGES, t)), r = s.gs.useSetting(), l = (0, c.O8)(i.v.GUILD);
    return h(a, !(0, d.A)(r, n), l)
}
let f = e => {
    switch (e) {
        case r.Oc.EXPLICIT_CONTENT:
        case r.Oc.GORE_CONTENT:
        case r.Oc.SELF_HARM_CONTENT:
            return m.intl.string(m.t.SEgHFh);
        case r.Oc.SPOILER:
            return m.intl.string(m.t["XpfDH+"]);
        default:
            return
    }
}