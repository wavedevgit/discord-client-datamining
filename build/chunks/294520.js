/** chunk id: 294520 params = (module,exports,require) **/
"use strict";
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
    s = a(282108),
    c = a(256265),
    l = a(253932),
    _ = a(576705),
    d = a(863439),
    u = a(652215),
    m = a(985018);
let p = (e, t) => {
        let {
            spoiler: a,
            flags: r = 0
        } = e, c = (0, s.b)({
            type: i.D.Attachment,
            media: e
        }, t), l = (0, s.$V)({
            type: i.D.Attachment,
            media: e
        }, t);
        return c.length > 0 ? c[0] : l ? o.Oc.POTENTIAL_EXPLICIT_CONTENT : a || (0, n.Lt)(r, u.sbO.IS_SPOILER) ? o.Oc.SPOILER : null
    },
    f = (e, t, a, n) => {
        let r = (0, s.b)({
                type: i.D.Embed,
                media: e
            }, n),
            c = !t.author.bot && (0, s.$V)({
                type: i.D.Embed,
                media: e
            }, n);
        return r.length > 0 ? r[0] : c ? o.Oc.POTENTIAL_EXPLICIT_CONTENT : a ? o.Oc.SPOILER : null
    },
    b = function(e, t) {
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = (0, s.b)({
                type: i.D.GenericMedia,
                media: e
            }, t),
            c = !n && (0, s.$V)({
                type: i.D.GenericMedia,
                media: e
            }, t);
        return r.includes(o.Oc.EXPLICIT_CONTENT) ? o.Oc.EXPLICIT_CONTENT : r.includes(o.Oc.GORE_CONTENT) ? o.Oc.GORE_CONTENT : r.includes(o.Oc.SELF_HARM_CONTENT) ? o.Oc.SELF_HARM_CONTENT : c ? o.Oc.POTENTIAL_EXPLICIT_CONTENT : a ? o.Oc.SPOILER : null
    };

function C(e, t, a) {
    if (null == e) return [!1, void 0];
    let n = function(e) {
        switch (e.type) {
            case c.vV.EMBED:
                return {
                    type: i.D.Embed, media: e
                };
            case c.vV.ATTACHMENT:
                return {
                    type: i.D.Attachment, media: e
                };
            case c.vV.COMPONENT:
                return {
                    type: i.D.GenericMedia, media: e.srcUnfurledMediaItem
                };
            default:
                return null
        }
    }(e);
    if (null == n) return [!1, void 0];
    let r = (0, s.b)(n, a),
        l = (0, s.$V)(n, a);
    return r.length > 0 ? [!0, r[0]] : l ? [!0, o.Oc.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [t, o.Oc.SPOILER] : [!1, void 0]
}

function g(e) {
    let {
        channel: t,
        media: a
    } = e, n = (0, r.bG)([_.A], () => null != t && _.A.can(u.xBc.MANAGE_MESSAGES, t)), o = l.gs.useSetting(), c = (0, s.O8)(i.v.GUILD);
    return C(a, !(0, d.A)(o, n), c)
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