/** chunk id: 939940, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => j
}), n(896048);
var i = n(627968),
    l = n(64700),
    o = n(158954),
    r = n(397927),
    a = n(435183),
    s = n(937773),
    c = n(235640),
    d = n(307731),
    u = n(985018),
    m = n(507753);
let j = t => {
    var e, n, j, b, p, x, v;
    let {
        channel: f,
        onClose: h,
        transitionState: g
    } = t, [y, O] = l.useState(null != (e = f.defaultReactionEmoji) ? e : null), [N, w] = l.useState(!1), [E, k] = l.useState(!1), P = l.useRef(null), _ = (null != (n = null == (x = f.defaultReactionEmoji) ? void 0 : x.emojiId) ? n : null) !== (null != (j = null == y ? void 0 : y.emojiId) ? j : null), C = (null != (b = null == (v = f.defaultReactionEmoji) ? void 0 : v.emojiName) ? b : null) !== (null != (p = null == y ? void 0 : y.emojiName) ? p : null), B = _ || C, I = t => {
        O(null == t ? null : (null == t ? void 0 : t.id) != null ? {
            emojiId: t.id
        } : {
            emojiName: t.optionallyDiverseSequence
        })
    }, R = async () => {
        if (B) {
            w(!0), k(!1);
            try {
                await (0, a.RT)(f.id, {
                    defaultReactionEmoji: y
                }), h()
            } catch (t) {
                k(!0)
            } finally {
                w(!1)
            }
        }
    };
    return (0, i.jsxs)(o.Modal, {
        title: u.intl.string(u.t.XlDE3k),
        subtitle: u.intl.string(u.t.lVqhdd),
        transitionState: g,
        onClose: h,
        actions: [{
            variant: "secondary",
            text: u.intl.string(u.t["ETE/oC"]),
            onClick: h
        }, {
            variant: "primary",
            text: u.intl.string(u.t["R3BPH+"]),
            loading: N,
            disabled: !B,
            onClick: R,
            autoFocus: !0
        }],
        children: [(0, i.jsx)(c.A, {
            reactionEmoji: y
        }), (0, i.jsxs)(r.ButtonGroup, {
            size: "sm",
            className: m.v,
            children: [(0, i.jsx)(r.YNO, {
                targetElementRef: P,
                renderPopout: t => {
                    let {
                        closePopout: e
                    } = t;
                    return (0, i.jsx)(s.A, {
                        guildId: null == f ? void 0 : f.guild_id,
                        closePopout: e,
                        onSelectEmoji: t => {
                            let {
                                emoji: n,
                                willClose: i
                            } = t;
                            I(n), i && e()
                        },
                        pickerIntention: d.b_.COMMUNITY_CONTENT,
                        channel: f
                    })
                },
                position: "right",
                animation: r.YNO.Animation.NONE,
                align: "center",
                children: t => {
                    var e, n;
                    return (0, i.jsx)(r.Button, (e = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))), i.forEach(function(e) {
                                var i;
                                i = n[e], e in t ? Object.defineProperty(t, e, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[e] = i
                            })
                        }
                        return t
                    }({}, t), n = n = {
                        buttonRef: P,
                        text: u.intl.string(u.t["59QgaD"]),
                        variant: "primary",
                        onClick: e => {
                            var n;
                            null == (n = t.onClick) || n.call(t, e)
                        }
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            n.push.apply(n, i)
                        }
                        return n
                    })(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }), e))
                }
            }), null != y && (0, i.jsx)(r.Button, {
                text: u.intl.string(u.t.N86XcP),
                variant: "critical-secondary",
                onClick: () => I(null)
            })]
        }), E ? (0, i.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            children: u.intl.string(u.t.F75nNl)
        }) : null]
    })
}