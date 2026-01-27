/** Chunk was on 80717 **/
/** chunk id: 294520, original params: e,t,n (module,exports,require) **/
n.d(t, {
    K6: () => h,
    eJ: () => E,
    iW: () => f,
    rx: () => _,
    sC: () => g,
    tt: () => O
}), n(938796);
var r = n(665260),
    i = n(417597),
    l = n(930125),
    o = n(338717),
    a = n(282108),
    s = n(256265),
    c = n(253932),
    u = n(576705),
    d = n(863439),
    p = n(652215),
    m = n(985018);
let f = (e, t) => {
        let {
            spoiler: n,
            flags: i = 0
        } = e, s = (0, a.b)({
            type: l.D.Attachment,
            media: e
        }, t), c = (0, a.$V)({
            type: l.D.Attachment,
            media: e
        }, t);
        return s.length > 0 ? s[0] : c ? o.Oc.POTENTIAL_EXPLICIT_CONTENT : n || (0, r.Lt)(i, p.sbO.IS_SPOILER) ? o.Oc.SPOILER : null
    },
    g = (e, t, n, r) => {
        let i = (0, a.b)({
                type: l.D.Embed,
                media: e
            }, r),
            s = !t.author.bot && (0, a.$V)({
                type: l.D.Embed,
                media: e
            }, r);
        return i.length > 0 ? i[0] : s ? o.Oc.POTENTIAL_EXPLICIT_CONTENT : n ? o.Oc.SPOILER : null
    },
    O = function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = (0, a.b)({
                type: l.D.GenericMedia,
                media: e
            }, t),
            s = !r && (0, a.$V)({
                type: l.D.GenericMedia,
                media: e
            }, t);
        return i.includes(o.Oc.EXPLICIT_CONTENT) ? o.Oc.EXPLICIT_CONTENT : i.includes(o.Oc.GORE_CONTENT) ? o.Oc.GORE_CONTENT : i.includes(o.Oc.SELF_HARM_CONTENT) ? o.Oc.SELF_HARM_CONTENT : s ? o.Oc.POTENTIAL_EXPLICIT_CONTENT : n ? o.Oc.SPOILER : null
    };

function h(e, t, n) {
    if (null == e) return [!1, void 0];
    let r = function(e) {
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
    if (null == r) return [!1, void 0];
    let i = (0, a.b)(r, n),
        c = (0, a.$V)(r, n);
    return i.length > 0 ? [!0, i[0]] : c ? [!0, o.Oc.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [t, o.Oc.SPOILER] : [!1, void 0]
}

function E(e) {
    let {
        channel: t,
        media: n
    } = e, r = (0, i.bG)([u.A], () => null != t && u.A.can(p.xBc.MANAGE_MESSAGES, t)), o = c.gs.useSetting(), s = (0, a.O8)(l.v.GUILD);
    return h(n, !(0, d.A)(o, r), s)
}
let _ = e => {
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