/** chunk id: 294520, original params: e,t,n (module,exports,require) **/
n.d(t, {
    K6: () => E,
    eJ: () => I,
    iW: () => p,
    rx: () => T,
    sC: () => f,
    tt: () => h
}), n(938796);
var r = n(665260),
    i = n(417597),
    a = n(930125),
    o = n(338717),
    l = n(282108),
    _ = n(256265),
    s = n(253932),
    c = n(576705),
    d = n(863439),
    u = n(652215),
    m = n(985018);
let p = (e, t) => {
        let {
            spoiler: n,
            flags: i = 0
        } = e, _ = (0, l.b)({
            type: a.D.Attachment,
            media: e
        }, t), s = (0, l.$V)({
            type: a.D.Attachment,
            media: e
        }, t);
        return _.length > 0 ? _[0] : s ? o.Oc.POTENTIAL_EXPLICIT_CONTENT : n || (0, r.Lt)(i, u.sbO.IS_SPOILER) ? o.Oc.SPOILER : null
    },
    f = (e, t, n, r) => {
        let i = (0, l.b)({
                type: a.D.Embed,
                media: e
            }, r),
            _ = !t.author.bot && (0, l.$V)({
                type: a.D.Embed,
                media: e
            }, r);
        return i.length > 0 ? i[0] : _ ? o.Oc.POTENTIAL_EXPLICIT_CONTENT : n ? o.Oc.SPOILER : null
    },
    h = function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = (0, l.b)({
                type: a.D.GenericMedia,
                media: e
            }, t),
            _ = !r && (0, l.$V)({
                type: a.D.GenericMedia,
                media: e
            }, t);
        return i.includes(o.Oc.EXPLICIT_CONTENT) ? o.Oc.EXPLICIT_CONTENT : i.includes(o.Oc.GORE_CONTENT) ? o.Oc.GORE_CONTENT : i.includes(o.Oc.SELF_HARM_CONTENT) ? o.Oc.SELF_HARM_CONTENT : _ ? o.Oc.POTENTIAL_EXPLICIT_CONTENT : n ? o.Oc.SPOILER : null
    };

function E(e, t, n) {
    if (null == e) return [!1, void 0];
    let r = function(e) {
        switch (e.type) {
            case _.vV.EMBED:
                return {
                    type: a.D.Embed, media: e
                };
            case _.vV.ATTACHMENT:
                return {
                    type: a.D.Attachment, media: e
                };
            case _.vV.COMPONENT:
                return {
                    type: a.D.GenericMedia, media: e.srcUnfurledMediaItem
                };
            default:
                return null
        }
    }(e);
    if (null == r) return [!1, void 0];
    let i = (0, l.b)(r, n),
        s = (0, l.$V)(r, n);
    return i.length > 0 ? [!0, i[0]] : s ? [!0, o.Oc.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [t, o.Oc.SPOILER] : [!1, void 0]
}

function I(e) {
    let {
        channel: t,
        media: n
    } = e, r = (0, i.bG)([c.A], () => null != t && c.A.can(u.xBc.MANAGE_MESSAGES, t)), o = s.gs.useSetting(), _ = (0, l.O8)(a.v.GUILD);
    return E(n, !(0, d.A)(o, r), _)
}
let T = e => {
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