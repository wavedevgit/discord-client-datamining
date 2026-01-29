/** Chunk was on 4670 **/
/** chunk id: 595953, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => C
}), i(896048);
var n = i(627968),
    l = i(64700),
    s = i(311907),
    r = i(827734),
    a = i(397927),
    u = i(565645),
    o = i(287809),
    d = i(927578),
    T = i(536432),
    c = i(792348),
    A = i(674168),
    S = i(989799),
    _ = i(69217),
    E = i(985018),
    g = i(443669);

function I(e) {
    let {
        onSelect: t
    } = e, [i, r] = l.useState(!1), u = (0, s.bG)([o.default], () => o.default.getCurrentUser()), T = d.Ay.canUseCustomCallSounds(u), c = l.useRef(null);

    function I(e) {
        T && (r(!1), null == t || t(e))
    }
    return (0, n.jsx)(a.YNO, {
        targetElementRef: c,
        shouldShow: i,
        position: "left",
        onRequestClose: () => r(!1),
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, n.jsx)(a.lGe, {
                children: (0, n.jsx)(S.A, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: I,
                    gridNotice: T ? null : (0, n.jsx)(A.m, {}),
                    analyticsSource: "call sounds edit setting"
                })
            })
        },
        children: e => {
            var t, l;
            return (0, n.jsx)(_.dT, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(i, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = i[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }({}, e), l = l = {
                ref: c,
                onClick: () => {
                    r(!i)
                },
                text: E.intl.string(E.t.uOe0Az),
                children: (0, n.jsx)(a.R2l, {
                    size: "md",
                    color: "currentColor",
                    className: g.Wo
                })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    i.push.apply(i, n)
                }
                return i
            })(Object(l)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
            }), t))
        }
    })
}

function O(e) {
    let {
        sound: t
    } = e, {
        previewSound: i
    } = (0, c.A)(t, null), l = 0 === (0, T.wH)() ? E.intl.string(E.t.OASXjt) : E.intl.formatToPlainString(E.t["/8fYO5"], {
        emojiName: t.emojiName,
        soundName: t.name
    });
    return (0, n.jsx)(_.dT, {
        onClick: i,
        text: l,
        children: (0, n.jsx)(a.HKD, {
            size: "md",
            color: "currentColor",
            className: g.wg
        })
    })
}

function C(e) {
    let {
        sound: t,
        isGlobal: i,
        onSelect: l
    } = e, s = null != t, o = null == t ? void 0 : t.emojiId, d = null == t ? void 0 : t.emojiName, T = s && (null != d || null != o);
    return (0, n.jsxs)("div", {
        className: g.D6,
        children: [(0, n.jsxs)("div", {
            className: g.kL,
            children: [T && (0, n.jsx)(u.A, {
                emojiId: o,
                emojiName: d,
                className: g.Zg
            }), (0, n.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-strong",
                className: g.dj,
                children: null == t ? E.intl.string(E.t.PoWNfe) : i ? E.intl.format(E.t.B6HU6O, {
                    soundName: t.name,
                    subtextHook: e => (0, n.jsx)(a.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        tag: "span",
                        children: e
                    })
                }) : t.name
            }), s ? (0, n.jsx)(O, {
                sound: t
            }) : (0, n.jsx)(a.HKD, {
                size: "md",
                color: "currentColor",
                className: g.Gk
            })]
        }), (0, n.jsxs)("div", {
            className: g.kL,
            children: [(0, n.jsx)(I, {
                onSelect: l
            }), s && !i && (0, n.jsx)(_.dT, {
                onClick: () => l(null),
                text: E.intl.string(E.t.jmtcGA),
                children: (0, n.jsx)(a.ucK, {
                    size: "md",
                    color: r.A.unsafe_rawColors.RED_400.css,
                    className: g.Wo
                })
            })]
        })]
    })
}