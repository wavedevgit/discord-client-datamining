/** chunk id: 294520, original params: e,t,n (module,exports,require) **/
n.d(t, {
    K6: () => h,
    eJ: () => E,
    iW: () => f,
    rx: () => I,
    sC: () => m,
    tt: () => g
}), n(938796);
var r = n(665260),
    i = n(417597),
    o = n(930125),
    a = n(338717),
    l = n(282108),
    c = n(256265),
    _ = n(253932),
    s = n(576705),
    d = n(863439),
    u = n(652215),
    p = n(985018);
let f = (e, t) => {
        let {
            spoiler: n,
            flags: i = 0
        } = e, c = (0, l.b)({
            type: o.D.Attachment,
            media: e
        }, t), _ = (0, l.$V)({
            type: o.D.Attachment,
            media: e
        }, t);
        return c.length > 0 ? c[0] : _ ? a.Oc.POTENTIAL_EXPLICIT_CONTENT : n || (0, r.Lt)(i, u.sbO.IS_SPOILER) ? a.Oc.SPOILER : null
    },
    m = (e, t, n, r) => {
        let i = (0, l.b)({
                type: o.D.Embed,
                media: e
            }, r),
            c = !t.author.bot && (0, l.$V)({
                type: o.D.Embed,
                media: e
            }, r);
        return i.length > 0 ? i[0] : c ? a.Oc.POTENTIAL_EXPLICIT_CONTENT : n ? a.Oc.SPOILER : null
    },
    g = function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = (0, l.b)({
                type: o.D.GenericMedia,
                media: e
            }, t),
            c = !r && (0, l.$V)({
                type: o.D.GenericMedia,
                media: e
            }, t);
        return i.includes(a.Oc.EXPLICIT_CONTENT) ? a.Oc.EXPLICIT_CONTENT : i.includes(a.Oc.GORE_CONTENT) ? a.Oc.GORE_CONTENT : i.includes(a.Oc.SELF_HARM_CONTENT) ? a.Oc.SELF_HARM_CONTENT : c ? a.Oc.POTENTIAL_EXPLICIT_CONTENT : n ? a.Oc.SPOILER : null
    };

function h(e, t, n) {
    if (null == e) return [!1, void 0];
    let r = function(e) {
        switch (e.type) {
            case c.vV.EMBED:
                return {
                    type: o.D.Embed, media: e
                };
            case c.vV.ATTACHMENT:
                return {
                    type: o.D.Attachment, media: e
                };
            case c.vV.COMPONENT:
                return {
                    type: o.D.GenericMedia, media: e.srcUnfurledMediaItem
                };
            default:
                return null
        }
    }(e);
    if (null == r) return [!1, void 0];
    let i = (0, l.b)(r, n),
        _ = (0, l.$V)(r, n);
    return i.length > 0 ? [!0, i[0]] : _ ? [!0, a.Oc.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [t, a.Oc.SPOILER] : [!1, void 0]
}

function E(e) {
    let {
        channel: t,
        media: n
    } = e, r = (0, i.bG)([s.A], () => null != t && s.A.can(u.xBc.MANAGE_MESSAGES, t)), a = _.gs.useSetting(), c = (0, l.O8)(o.v.GUILD);
    return h(n, !(0, d.A)(a, r), c)
}
let I = e => {
    switch (e) {
        case a.Oc.EXPLICIT_CONTENT:
        case a.Oc.GORE_CONTENT:
        case a.Oc.SELF_HARM_CONTENT:
            return p.intl.string(p.t.SEgHFh);
        case a.Oc.SPOILER:
            return p.intl.string(p.t["XpfDH+"]);
        default:
            return
    }
}