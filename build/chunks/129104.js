/** Chunk was on 78528 **/
/** chunk id: 129104, original params: e,t,n (module,exports,require) **/
n.d(t, {
    R: () => b
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(565645),
    o = n(375499),
    c = n(937773),
    u = n(961350),
    d = n(734057),
    p = n(309010),
    h = n(559405),
    f = n(652215),
    g = n(307731),
    m = n(680930);

function b(e) {
    let {
        customStatusEmoji: t,
        setCustomStatusEmoji: n,
        selectedDefaultStatus: b,
        setIsEmojiPickerOpen: A,
        defaultStatusVariant: y
    } = e, _ = l.useRef(null), O = (0, i.bG)([p.A, d.A], () => d.A.getChannel(p.A.getVoiceChannelId())), j = l.useCallback(() => null != t ? (0, r.jsx)(a.A, {
        emojiId: t.id,
        emojiName: t.name,
        animated: !!t.animated
    }) : null != b ? (0, r.jsx)(h.A, {
        className: m.Kk,
        userId: u.default.getId(),
        size: 20,
        hangStatusActivity: {
            type: f.$pd.HANG_STATUS,
            state: b
        },
        fallbackVariant: y
    }) : null, [t, y, b]);
    return (0, r.jsx)(s.YNO, {
        targetElementRef: _,
        onRequestOpen: () => A(!0),
        onRequestClose: () => A(!1),
        renderPopout: e => {
            var t;
            let {
                closePopout: l
            } = e;
            return (0, r.jsx)(c.A, {
                channel: O,
                guildId: null != (t = null == O ? void 0 : O.guild_id) ? t : void 0,
                closePopout: l,
                onSelectEmoji: e => {
                    var t;
                    let {
                        emoji: r,
                        willClose: i
                    } = e;
                    null == r ? n(null) : n(null != r.id ? {
                        id: r.id,
                        name: r.name,
                        animated: r.animated
                    } : {
                        id: null,
                        name: null != (t = r.optionallyDiverseSequence) ? t : "",
                        animated: !1
                    }), i && l()
                },
                pickerIntention: g.b_.STATUS
            })
        },
        position: "left",
        animation: s.YNO.Animation.NONE,
        align: "top",
        children: (e, n) => {
            var l, i;
            let {
                isShown: s
            } = n;
            return (0, r.jsx)(o.A, (l = function(e) {
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
            }({}, e), i = i = {
                ref: _,
                active: s,
                tabIndex: 0,
                renderButtonContents: null == t && null == b ? null : j
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(i)).forEach(function(e) {
                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
            }), l))
        }
    })
}