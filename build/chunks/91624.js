/** Chunk was on 97492 **/
/** chunk id: 91624, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(938796), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(665260),
    s = n(311907),
    a = n(843472),
    o = n(155718),
    c = n(355622),
    u = n(133343),
    d = n(961350),
    p = n(580745),
    h = n(71393),
    f = n(576705),
    g = n(203982),
    m = n(460350),
    b = n(145530),
    A = n(291812),
    y = n(205120),
    _ = n(652215);
n(294920);
var O = n(119907);

function j(e) {
    let {
        value: t,
        channel: n
    } = e;
    return (0, m.i)({
        type: c.oU.EDIT,
        content: t,
        channel: n,
        restrictMentions: !1,
        respectCooldown: !1
    })
}

function v(e) {
    let {
        channel: t,
        message: n
    } = e, {
        id: c
    } = t, {
        id: u
    } = n, g = t.getGuildId(), m = (0, s.bG)([h.A], () => h.A.getGuild(g), [g]), A = t.type === _.rbe.GUILD_ANNOUNCEMENT, v = null != m && m.features.has(_.GuildFeatures.NEWS), E = A && v, {
        editingMessage: C,
        editingTextValue: S,
        editingRichValue: I
    } = (0, s.cf)([p.A], () => ({
        editingMessage: p.A.getEditingMessage(c),
        editingTextValue: p.A.getEditingTextValue(c),
        editingRichValue: p.A.getEditingRichValue(c)
    }), [c]), N = (0, s.bG)([d.default], () => d.default.getId()), T = l.useCallback((e, r, l) => {
        let {
            content: s
        } = l, c = f.A.can(_.xBc.MANAGE_MESSAGES, t), u = null != C && null != C.author ? C.author.id : null, d = E && (u === N || c), p = {
            content: s,
            components: void 0
        };
        if (n.hasFlag(_.pr7.IS_COMPONENTS_V2)) {
            var h;
            let e = (null == (h = n.components[0]) ? void 0 : h.type) === o.I5.MEDIA_GALLERY,
                t = n.components.filter(e => e.type !== o.I5.TEXT_DISPLAY);
            t.splice(+!!e, 0, {
                type: o.I5.TEXT_DISPLAY,
                content: s,
                id: "".concat(82744)
            }), p.content = "", p.components = t
        }
        return d && null != C && (0, i.Lt)(C.flags, _.pr7.CROSSPOSTED) ? b.A.confirmEdit(e, r, p) : a.A.editMessage(e, r, p), Promise.resolve()
    }, [C, E, N, t, n]), P = l.useCallback(e => {
        var t, n;
        return (0, l.createElement)(x, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({}, e), n = n = {
            className: O.gM,
            key: u
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
    }, [u]);
    return null != S && null != I ? (0, r.jsx)(y.A, {
        ref: void 0,
        channel: t,
        message: n,
        textValue: S,
        richValue: I,
        onCancel: a.A.endEditMessage,
        onChange: a.A.updateEditMessage,
        onConfirmDelete: b.A.confirmDelete,
        saveMessage: T,
        validateEdit: j,
        children: P
    }) : null
}

function x(e) {
    let {
        textValue: t,
        richValue: n,
        message: i,
        channel: s,
        onChange: a,
        onSubmit: o,
        onKeyDown: d,
        renderLeftAccessories: p
    } = e, [h, f] = l.useState(!0), m = l.useCallback(() => f(!0), []), b = l.useCallback(() => f(!1), []);
    return l.useEffect(() => (g._.subscribe(_.jej.TEXTAREA_FOCUS, m), g._.subscribe(_.jej.TEXTAREA_BLUR, b), () => {
        g._.unsubscribe(_.jej.TEXTAREA_FOCUS, m), g._.unsubscribe(_.jej.TEXTAREA_BLUR, b)
    }), [m, b]), (0, r.jsx)(u.Ay, {
        className: O.gM,
        textValue: t,
        richValue: n,
        channel: s,
        type: c.oU.EDIT,
        onChange: a,
        onSubmit: e => {
            let {
                value: t
            } = e;
            return o(t)
        },
        onKeyDown: d,
        focused: h,
        onFocus: m,
        onBlur: b,
        renderLeftAccessories: p
    }, i.id)
}

function E(e, t, n) {
    let {
        message: l,
        channel: i,
        compact: s
    } = e;
    return n ? (0, r.jsx)(v, {
        channel: i,
        message: l
    }) : (0, r.jsx)(A.Ay, {
        message: l,
        content: t,
        compact: null != s && s
    })
}