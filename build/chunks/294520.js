/** chunk id: 294520, original params: e,a,t (module,exports,require) **/
t.d(a, {
    K6: () => I,
    eJ: () => g,
    iW: () => p,
    rx: () => C,
    sC: () => f,
    tt: () => A
}), t(938796);
var n = t(665260),
    i = t(417597),
    o = t(930125),
    r = t(338717),
    c = t(282108),
    l = t(256265),
    s = t(253932),
    _ = t(576705),
    d = t(863439),
    u = t(652215),
    m = t(985018);
let p = (e, a) => {
        let {
            spoiler: t,
            flags: i = 0
        } = e, l = (0, c.b)({
            type: o.D.Attachment,
            media: e
        }, a), s = (0, c.$V)({
            type: o.D.Attachment,
            media: e
        }, a);
        return l.length > 0 ? l[0] : s ? r.Oc.POTENTIAL_EXPLICIT_CONTENT : t || (0, n.Lt)(i, u.sbO.IS_SPOILER) ? r.Oc.SPOILER : null
    },
    f = (e, a, t, n) => {
        let i = (0, c.b)({
                type: o.D.Embed,
                media: e
            }, n),
            l = !a.author.bot && (0, c.$V)({
                type: o.D.Embed,
                media: e
            }, n);
        return i.length > 0 ? i[0] : l ? r.Oc.POTENTIAL_EXPLICIT_CONTENT : t ? r.Oc.SPOILER : null
    },
    A = function(e, a) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = (0, c.b)({
                type: o.D.GenericMedia,
                media: e
            }, a),
            l = !n && (0, c.$V)({
                type: o.D.GenericMedia,
                media: e
            }, a);
        return i.includes(r.Oc.EXPLICIT_CONTENT) ? r.Oc.EXPLICIT_CONTENT : i.includes(r.Oc.GORE_CONTENT) ? r.Oc.GORE_CONTENT : i.includes(r.Oc.SELF_HARM_CONTENT) ? r.Oc.SELF_HARM_CONTENT : l ? r.Oc.POTENTIAL_EXPLICIT_CONTENT : t ? r.Oc.SPOILER : null
    };

function I(e, a, t) {
    if (null == e) return [!1, void 0];
    let n = function(e) {
        switch (e.type) {
            case l.vV.EMBED:
                return {
                    type: o.D.Embed, media: e
                };
            case l.vV.ATTACHMENT:
                return {
                    type: o.D.Attachment, media: e
                };
            case l.vV.COMPONENT:
                return {
                    type: o.D.GenericMedia, media: e.srcUnfurledMediaItem
                };
            default:
                return null
        }
    }(e);
    if (null == n) return [!1, void 0];
    let i = (0, c.b)(n, t),
        s = (0, c.$V)(n, t);
    return i.length > 0 ? [!0, i[0]] : s ? [!0, r.Oc.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [a, r.Oc.SPOILER] : [!1, void 0]
}

function g(e) {
    let {
        channel: a,
        media: t
    } = e, n = (0, i.bG)([_.A], () => null != a && _.A.can(u.xBc.MANAGE_MESSAGES, a)), r = s.gs.useSetting(), l = (0, c.O8)(o.v.GUILD);
    return I(t, !(0, d.A)(r, n), l)
}
let C = e => {
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