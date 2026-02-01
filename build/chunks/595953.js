/** chunk id: 595953, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => N
}), i(896048);
var n = i(627968),
    l = i(64700),
    s = i(311907),
    r = i(827734),
    u = i(397927),
    a = i(565645),
    o = i(287809),
    d = i(927578),
    T = i(536432),
    A = i(792348),
    S = i(674168),
    c = i(989799),
    E = i(69217),
    g = i(985018),
    _ = i(443669);

function I(t) {
    let {
        onSelect: e
    } = t, [i, r] = l.useState(!1), a = (0, s.bG)([o.default], () => o.default.getCurrentUser()), T = d.Ay.canUseCustomCallSounds(a), A = l.useRef(null);

    function I(t) {
        T && (r(!1), null == e || e(t))
    }
    return (0, n.jsx)(u.YNO, {
        targetElementRef: A,
        shouldShow: i,
        position: "left",
        onRequestClose: () => r(!1),
        renderPopout: t => {
            let {
                closePopout: e
            } = t;
            return (0, n.jsx)(u.lGe, {
                children: (0, n.jsx)(c.A, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: e,
                    onSelect: I,
                    gridNotice: T ? null : (0, n.jsx)(S.m, {}),
                    analyticsSource: "call sounds edit setting"
                })
            })
        },
        children: t => {
            var e, l;
            return (0, n.jsx)(E.dT, (e = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(i, t).enumerable
                    }))), n.forEach(function(e) {
                        var n;
                        n = i[e], e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n
                    })
                }
                return t
            }({}, t), l = l = {
                ref: A,
                onClick: () => {
                    r(!i)
                },
                text: g.intl.string(g.t.uOe0Az),
                children: (0, n.jsx)(u.R2l, {
                    size: "md",
                    color: "currentColor",
                    className: _.Wo
                })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : (function(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    i.push.apply(i, n)
                }
                return i
            })(Object(l)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
            }), e))
        }
    })
}

function O(t) {
    let {
        sound: e
    } = t, {
        previewSound: i
    } = (0, A.A)(e, null), l = 0 === (0, T.wH)() ? g.intl.string(g.t.OASXjt) : g.intl.formatToPlainString(g.t["/8fYO5"], {
        emojiName: e.emojiName,
        soundName: e.name
    });
    return (0, n.jsx)(E.dT, {
        onClick: i,
        text: l,
        children: (0, n.jsx)(u.HKD, {
            size: "md",
            color: "currentColor",
            className: _.wg
        })
    })
}

function N(t) {
    let {
        sound: e,
        isGlobal: i,
        onSelect: l
    } = t, s = null != e, o = null == e ? void 0 : e.emojiId, d = null == e ? void 0 : e.emojiName, T = s && (null != d || null != o);
    return (0, n.jsxs)("div", {
        className: _.D6,
        children: [(0, n.jsxs)("div", {
            className: _.kL,
            children: [T && (0, n.jsx)(a.A, {
                emojiId: o,
                emojiName: d,
                className: _.Zg
            }), (0, n.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "text-strong",
                className: _.dj,
                children: null == e ? g.intl.string(g.t.PoWNfe) : i ? g.intl.format(g.t.B6HU6O, {
                    soundName: e.name,
                    subtextHook: t => (0, n.jsx)(u.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        tag: "span",
                        children: t
                    })
                }) : e.name
            }), s ? (0, n.jsx)(O, {
                sound: e
            }) : (0, n.jsx)(u.HKD, {
                size: "md",
                color: "currentColor",
                className: _.Gk
            })]
        }), (0, n.jsxs)("div", {
            className: _.kL,
            children: [(0, n.jsx)(I, {
                onSelect: l
            }), s && !i && (0, n.jsx)(E.dT, {
                onClick: () => l(null),
                text: g.intl.string(g.t.jmtcGA),
                children: (0, n.jsx)(u.ucK, {
                    size: "md",
                    color: r.A.unsafe_rawColors.RED_400.css,
                    className: _.Wo
                })
            })]
        })]
    })
}