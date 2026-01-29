/** Chunk was on 1113 **/
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
    h = n(580745),
    p = n(71393),
    g = n(576705),
    f = n(203982),
    m = n(460350),
    b = n(145530),
    A = n(291812),
    y = n(205120),
    O = n(652215);
n(294920);
var _ = n(119907);

function x(e) {
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

function j(e) {
    let {
        channel: t,
        message: n
    } = e, {
        id: c
    } = t, {
        id: u
    } = n, f = t.getGuildId(), m = (0, s.bG)([p.A], () => p.A.getGuild(f), [f]), A = t.type === O.rbe.GUILD_ANNOUNCEMENT, j = null != m && m.features.has(O.GuildFeatures.NEWS), E = A && j, {
        editingMessage: C,
        editingTextValue: S,
        editingRichValue: I
    } = (0, s.cf)([h.A], () => ({
        editingMessage: h.A.getEditingMessage(c),
        editingTextValue: h.A.getEditingTextValue(c),
        editingRichValue: h.A.getEditingRichValue(c)
    }), [c]), N = (0, s.bG)([d.default], () => d.default.getId()), T = l.useCallback((e, r, l) => {
        let {
            content: s
        } = l, c = g.A.can(O.xBc.MANAGE_MESSAGES, t), u = null != C && null != C.author ? C.author.id : null, d = E && (u === N || c), h = {
            content: s,
            components: void 0
        };
        if (n.hasFlag(O.pr7.IS_COMPONENTS_V2)) {
            var p;
            let e = (null == (p = n.components[0]) ? void 0 : p.type) === o.I5.MEDIA_GALLERY,
                t = n.components.filter(e => e.type !== o.I5.TEXT_DISPLAY);
            t.splice(+!!e, 0, {
                type: o.I5.TEXT_DISPLAY,
                content: s,
                id: "".concat(82744)
            }), h.content = "", h.components = t
        }
        return d && null != C && (0, i.Lt)(C.flags, O.pr7.CROSSPOSTED) ? b.A.confirmEdit(e, r, h) : a.A.editMessage(e, r, h), Promise.resolve()
    }, [C, E, N, t, n]), P = l.useCallback(e => {
        var t, n;
        return (0, l.createElement)(v, (t = function(e) {
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
            className: _.gM,
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
        validateEdit: x,
        children: P
    }) : null
}

function v(e) {
    let {
        textValue: t,
        richValue: n,
        message: i,
        channel: s,
        onChange: a,
        onSubmit: o,
        onKeyDown: d,
        renderLeftAccessories: h
    } = e, [p, g] = l.useState(!0), m = l.useCallback(() => g(!0), []), b = l.useCallback(() => g(!1), []);
    return l.useEffect(() => (f._.subscribe(O.jej.TEXTAREA_FOCUS, m), f._.subscribe(O.jej.TEXTAREA_BLUR, b), () => {
        f._.unsubscribe(O.jej.TEXTAREA_FOCUS, m), f._.unsubscribe(O.jej.TEXTAREA_BLUR, b)
    }), [m, b]), (0, r.jsx)(u.Ay, {
        className: _.gM,
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
        focused: p,
        onFocus: m,
        onBlur: b,
        renderLeftAccessories: h
    }, i.id)
}

function E(e, t, n) {
    let {
        message: l,
        channel: i,
        compact: s
    } = e;
    return n ? (0, r.jsx)(j, {
        channel: i,
        message: l
    }) : (0, r.jsx)(A.Ay, {
        message: l,
        content: t,
        compact: null != s && s
    })
}