/** chunk id: 595953, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => N
});
var n = i(627968),
    l = i(64700),
    s = i(311907),
    a = i(827734),
    r = i(397927),
    u = i(565645),
    o = i(287809),
    d = i(927578),
    A = i(536432),
    T = i(792348),
    S = i(674168),
    E = i(989799),
    g = i(69217),
    c = i(985018),
    _ = i(443669);

function I(t) {
    let {
        onSelect: e
    } = t, [i, a] = l.useState(!1), u = (0, s.bG)([o.default], () => o.default.getCurrentUser()), A = d.Ay.canUseCustomCallSounds(u), T = l.useRef(null);

    function I(t) {
        A && (a(!1), e?.(t))
    }
    return (0, n.jsx)(r.YNO, {
        targetElementRef: T,
        shouldShow: i,
        position: "left",
        onRequestClose: () => a(!1),
        renderPopout: t => {
            let {
                closePopout: e
            } = t;
            return (0, n.jsx)(r.lGe, {
                children: (0, n.jsx)(E.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: e,
                    onSelect: I,
                    gridNotice: A ? null : (0, n.jsx)(S.m, {}),
                    analyticsSource: "call sounds edit setting"
                })
            })
        },
        children: t => (0, n.jsx)(g.dT, {
            ...t,
            ref: T,
            onClick: () => {
                a(!i)
            },
            text: c.intl.string(c.t.uOe0Az),
            children: (0, n.jsx)(r.R2l, {
                size: "md",
                color: "currentColor",
                className: _.Wo
            })
        })
    })
}

function C(t) {
    let {
        sound: e
    } = t, {
        previewSound: i
    } = (0, T.A)(e, null), l = 0 === (0, A.wH)() ? c.intl.string(c.t.OASXjt) : c.intl.formatToPlainString(c.t["/8fYO5"], {
        emojiName: e.emojiName,
        soundName: e.name
    });
    return (0, n.jsx)(g.dT, {
        onClick: i,
        text: l,
        children: (0, n.jsx)(r.HKD, {
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
    } = t, s = null != e, o = e?.emojiId, d = e?.emojiName, A = s && (null != d || null != o);
    return (0, n.jsxs)("div", {
        className: _.D6,
        children: [(0, n.jsxs)("div", {
            className: _.kL,
            children: [A && (0, n.jsx)(u.A, {
                emojiId: o,
                emojiName: d,
                className: _.Zg
            }), (0, n.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-strong",
                className: _.dj,
                children: null == e ? c.intl.string(c.t.PoWNfe) : i ? c.intl.format(c.t.B6HU6O, {
                    soundName: e.name,
                    subtextHook: t => (0, n.jsx)(r.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        tag: "span",
                        children: t
                    })
                }) : e.name
            }), s ? (0, n.jsx)(C, {
                sound: e
            }) : (0, n.jsx)(r.HKD, {
                size: "md",
                color: "currentColor",
                className: _.Gk
            })]
        }), (0, n.jsxs)("div", {
            className: _.kL,
            children: [(0, n.jsx)(I, {
                onSelect: l
            }), s && !i && (0, n.jsx)(g.dT, {
                onClick: () => l(null),
                text: c.intl.string(c.t.jmtcGA),
                children: (0, n.jsx)(r.ucK, {
                    size: "md",
                    color: a.A.unsafe_rawColors.RED_400.css,
                    className: _.Wo
                })
            })]
        })]
    })
}