/** chunk id: 294520 params = (module,exports,require) **/
a.d(t, {
    K6: () => C,
    eJ: () => g,
    iW: () => p,
    rx: () => I,
    sC: () => f,
    tt: () => b
}), a(938796);
var n = a(665260),
    r = a(417597),
    i = a(930125),
    o = a(338717),
    l = a(282108),
    _ = a(256265),
    c = a(253932),
    s = a(576705),
    d = a(863439),
    u = a(652215),
    m = a(985018);
let p = (e, t) => {
        let {
            spoiler: a,
            flags: r = 0
        } = e, _ = (0, l.b)({
            type: i.D.Attachment,
            media: e
        }, t), c = (0, l.$V)({
            type: i.D.Attachment,
            media: e
        }, t);
        return _.length > 0 ? _[0] : c ? o.Oc.POTENTIAL_EXPLICIT_CONTENT : a || (0, n.Lt)(r, u.sbO.IS_SPOILER) ? o.Oc.SPOILER : null
    },
    f = (e, t, a, n) => {
        let r = (0, l.b)({
                type: i.D.Embed,
                media: e
            }, n),
            _ = !t.author.bot && (0, l.$V)({
                type: i.D.Embed,
                media: e
            }, n);
        return r.length > 0 ? r[0] : _ ? o.Oc.POTENTIAL_EXPLICIT_CONTENT : a ? o.Oc.SPOILER : null
    },
    b = function(e, t) {
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = (0, l.b)({
                type: i.D.GenericMedia,
                media: e
            }, t),
            _ = !n && (0, l.$V)({
                type: i.D.GenericMedia,
                media: e
            }, t);
        return r.includes(o.Oc.EXPLICIT_CONTENT) ? o.Oc.EXPLICIT_CONTENT : r.includes(o.Oc.GORE_CONTENT) ? o.Oc.GORE_CONTENT : r.includes(o.Oc.SELF_HARM_CONTENT) ? o.Oc.SELF_HARM_CONTENT : _ ? o.Oc.POTENTIAL_EXPLICIT_CONTENT : a ? o.Oc.SPOILER : null
    };

function C(e, t, a) {
    if (null == e) return [!1, void 0];
    let n = function(e) {
        switch (e.type) {
            case _.vV.EMBED:
                return {
                    type: i.D.Embed, media: e
                };
            case _.vV.ATTACHMENT:
                return {
                    type: i.D.Attachment, media: e
                };
            case _.vV.COMPONENT:
                return {
                    type: i.D.GenericMedia, media: e.srcUnfurledMediaItem
                };
            default:
                return null
        }
    }(e);
    if (null == n) return [!1, void 0];
    let r = (0, l.b)(n, a),
        c = (0, l.$V)(n, a);
    return r.length > 0 ? [!0, r[0]] : c ? [!0, o.Oc.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [t, o.Oc.SPOILER] : [!1, void 0]
}

function g(e) {
    let {
        channel: t,
        media: a
    } = e, n = (0, r.bG)([s.A], () => null != t && s.A.can(u.xBc.MANAGE_MESSAGES, t)), o = c.gs.useSetting(), _ = (0, l.O8)(i.v.GUILD);
    return C(a, !(0, d.A)(o, n), _)
}
let I = e => {
    switch (e) {
        case o.Oc.EXPLICIT_CONTENT:
        case o.Oc.GORE_CONTENT:
        case o.Oc.SELF_HARM_CONTENT:
            return m.intl.string(m.t.SEgHFh);
        case o.Oc.SPOILER:
            return m.intl.string(m.t["XpfDH+"]);
        default:
            return
    }
}