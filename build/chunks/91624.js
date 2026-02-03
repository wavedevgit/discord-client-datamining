/** chunk id: 91624, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
}), n(938796), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(665260),
    a = n(311907),
    s = n(843472),
    o = n(155718),
    c = n(355622),
    u = n(133343),
    d = n(961350),
    h = n(580745),
    p = n(71393),
    f = n(576705),
    m = n(203982),
    g = n(460350),
    A = n(145530),
    b = n(291812),
    _ = n(205120),
    y = n(652215);
n(294920);
var v = n(119907);

function E(e) {
    let {
        value: t,
        channel: n
    } = e;
    return (0, g.i)({
        type: c.oU.EDIT,
        content: t,
        channel: n,
        restrictMentions: !1,
        respectCooldown: !1
    })
}

function O(e) {
    let {
        channel: t,
        message: n
    } = e, {
        id: c
    } = t, {
        id: u
    } = n, m = t.getGuildId(), g = (0, a.bG)([p.A], () => p.A.getGuild(m), [m]), b = t.type === y.rbe.GUILD_ANNOUNCEMENT, O = null != g && g.features.has(y.GuildFeatures.NEWS), S = b && O, {
        editingMessage: x,
        editingTextValue: j,
        editingRichValue: I
    } = (0, a.cf)([h.A], () => ({
        editingMessage: h.A.getEditingMessage(c),
        editingTextValue: h.A.getEditingTextValue(c),
        editingRichValue: h.A.getEditingRichValue(c)
    }), [c]), T = (0, a.bG)([d.default], () => d.default.getId()), N = r.useCallback((e, l, r) => {
        let {
            content: a
        } = r, c = f.A.can(y.xBc.MANAGE_MESSAGES, t), u = null != x && null != x.author ? x.author.id : null, d = S && (u === T || c), h = {
            content: a,
            components: void 0
        };
        if (n.hasFlag(y.pr7.IS_COMPONENTS_V2)) {
            var p;
            let e = (null == (p = n.components[0]) ? void 0 : p.type) === o.I5.MEDIA_GALLERY,
                t = n.components.filter(e => e.type !== o.I5.TEXT_DISPLAY);
            t.splice(+!!e, 0, {
                type: o.I5.TEXT_DISPLAY,
                content: a,
                id: "".concat(82744)
            }), h.content = "", h.components = t
        }
        return d && null != x && (0, i.Lt)(x.flags, y.pr7.CROSSPOSTED) ? A.A.confirmEdit(e, l, h) : s.A.editMessage(e, l, h), Promise.resolve()
    }, [x, S, T, t, n]), P = r.useCallback(e => {
        var t, n;
        return (0, r.createElement)(C, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), l.forEach(function(t) {
                    var l;
                    l = n[t], t in e ? Object.defineProperty(e, t, {
                        value: l,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = l
                })
            }
            return e
        }({}, e), n = n = {
            className: v.gM,
            key: u
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                n.push.apply(n, l)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
    }, [u]);
    return null != j && null != I ? (0, l.jsx)(_.A, {
        ref: void 0,
        channel: t,
        message: n,
        textValue: j,
        richValue: I,
        onCancel: s.A.endEditMessage,
        onChange: s.A.updateEditMessage,
        onConfirmDelete: A.A.confirmDelete,
        saveMessage: N,
        validateEdit: E,
        children: P
    }) : null
}

function C(e) {
    let {
        textValue: t,
        richValue: n,
        message: i,
        channel: a,
        onChange: s,
        onSubmit: o,
        onKeyDown: d,
        renderLeftAccessories: h
    } = e, [p, f] = r.useState(!0), g = r.useCallback(() => f(!0), []), A = r.useCallback(() => f(!1), []);
    return r.useEffect(() => (m._.subscribe(y.jej.TEXTAREA_FOCUS, g), m._.subscribe(y.jej.TEXTAREA_BLUR, A), () => {
        m._.unsubscribe(y.jej.TEXTAREA_FOCUS, g), m._.unsubscribe(y.jej.TEXTAREA_BLUR, A)
    }), [g, A]), (0, l.jsx)(u.Ay, {
        className: v.gM,
        textValue: t,
        richValue: n,
        channel: a,
        type: c.oU.EDIT,
        onChange: s,
        onSubmit: e => {
            let {
                value: t
            } = e;
            return o(t)
        },
        onKeyDown: d,
        focused: p,
        onFocus: g,
        onBlur: A,
        renderLeftAccessories: h
    }, i.id)
}

function S(e, t, n) {
    let {
        message: r,
        channel: i,
        compact: a
    } = e;
    return n ? (0, l.jsx)(O, {
        channel: i,
        message: r
    }) : (0, l.jsx)(b.Ay, {
        message: r,
        content: t,
        compact: null != a && a
    })
}