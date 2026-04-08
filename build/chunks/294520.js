/** chunk id: 294520 params = (module,exports,require) **/
t.d(a, {
    K6: () => C,
    eJ: () => E,
    iW: () => A,
    rx: () => I,
    sC: () => p,
    tt: () => T
}), t(938796);
var n = t(665260),
    c = t(417597),
    l = t(930125),
    r = t(338717),
    i = t(282108),
    s = t(256265),
    o = t(253932),
    u = t(576705),
    d = t(863439),
    _ = t(652215),
    m = t(985018);
let A = (e, a) => {
        let {
            spoiler: t,
            flags: c = 0
        } = e, s = (0, i.b)({
            type: l.D.Attachment,
            media: e
        }, a), o = (0, i.$V)({
            type: l.D.Attachment,
            media: e
        }, a);
        return s.length > 0 ? s[0] : o ? r.Oc.POTENTIAL_EXPLICIT_CONTENT : t || (0, n.Lt)(c, _.sbO.IS_SPOILER) ? r.Oc.SPOILER : null
    },
    p = (e, a, t, n) => {
        let c = (0, i.b)({
                type: l.D.Embed,
                media: e
            }, n),
            s = !a.author.bot && (0, i.$V)({
                type: l.D.Embed,
                media: e
            }, n);
        return c.length > 0 ? c[0] : s ? r.Oc.POTENTIAL_EXPLICIT_CONTENT : t ? r.Oc.SPOILER : null
    },
    T = function(e, a) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            c = (0, i.b)({
                type: l.D.GenericMedia,
                media: e
            }, a),
            s = !n && (0, i.$V)({
                type: l.D.GenericMedia,
                media: e
            }, a);
        return c.includes(r.Oc.EXPLICIT_CONTENT) ? r.Oc.EXPLICIT_CONTENT : c.includes(r.Oc.GORE_CONTENT) ? r.Oc.GORE_CONTENT : c.includes(r.Oc.SELF_HARM_CONTENT) ? r.Oc.SELF_HARM_CONTENT : s ? r.Oc.POTENTIAL_EXPLICIT_CONTENT : t ? r.Oc.SPOILER : null
    };

function C(e, a, t) {
    if (null == e) return [!1, void 0];
    let n = function(e) {
        switch (e.type) {
            case s.vV.EMBED:
                return {
                    type: l.D.Embed, media: e
                };
            case s.vV.ATTACHMENT:
                return {
                    type: l.D.Attachment, media: e
                };
            case s.vV.COMPONENT:
                return {
                    type: l.D.GenericMedia, media: e.srcUnfurledMediaItem
                };
            default:
                return null
        }
    }(e);
    if (null == n) return [!1, void 0];
    let c = (0, i.b)(n, t),
        o = (0, i.$V)(n, t);
    return c.length > 0 ? [!0, c[0]] : o ? [!0, r.Oc.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [a, r.Oc.SPOILER] : [!1, void 0]
}

function E(e) {
    let {
        channel: a,
        media: t
    } = e, n = (0, c.bG)([u.A], () => null != a && u.A.can(_.xBc.MANAGE_MESSAGES, a)), r = o.gs.useSetting(), s = (0, i.O8)(l.v.GUILD);
    return C(t, !(0, d.A)(r, n), s)
}
let I = e => {
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