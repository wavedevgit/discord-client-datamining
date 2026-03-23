/** chunk id: 595953 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(827734),
    r = n(397927),
    o = n(565645),
    d = n(287809),
    c = n(927578),
    u = n(536432),
    _ = n(792348),
    m = n(674168),
    g = n(989799),
    A = n(69217),
    x = n(985018),
    h = n(443669);

function p(e) {
    let {
        onSelect: t
    } = e, [n, a] = s.useState(!1), o = (0, l.bG)([d.default], () => d.default.getCurrentUser()), u = c.Ay.canUseCustomCallSounds(o), _ = s.useRef(null);

    function p(e) {
        u && (a(!1), t?.(e))
    }
    return (0, i.jsx)(r.YNO, {
        targetElementRef: _,
        shouldShow: n,
        position: "left",
        onRequestClose: () => a(!1),
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(r.lGe, {
                children: (0, i.jsx)(g.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: p,
                    gridNotice: u ? null : (0, i.jsx)(m.m, {}),
                    analyticsSource: "call sounds edit setting"
                })
            })
        },
        children: e => (0, i.jsx)(A.dT, {
            ...e,
            ref: _,
            onClick: () => {
                a(!n)
            },
            text: x.intl.string(x.t.uOe0Az),
            children: (0, i.jsx)(r.R2l, {
                size: "md",
                color: "currentColor",
                className: h.Wo
            })
        })
    })
}

function T(e) {
    let {
        sound: t
    } = e, {
        previewSound: n
    } = (0, _.A)(t, null), s = 0 === (0, u.wH)() ? x.intl.string(x.t.OASXjt) : x.intl.formatToPlainString(x.t["/8fYO5"], {
        emojiName: t.emojiName,
        soundName: t.name
    });
    return (0, i.jsx)(A.dT, {
        onClick: n,
        text: s,
        children: (0, i.jsx)(r.HKD, {
            size: "md",
            color: "currentColor",
            className: h.wg
        })
    })
}

function E(e) {
    let {
        sound: t,
        isGlobal: n,
        onSelect: s
    } = e, l = null != t, d = t?.emojiId, c = t?.emojiName, u = l && (null != c || null != d);
    return (0, i.jsxs)("div", {
        className: h.D6,
        children: [(0, i.jsxs)("div", {
            className: h.kL,
            children: [u && (0, i.jsx)(o.A, {
                emojiId: d,
                emojiName: c,
                className: h.Zg
            }), (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-strong",
                className: h.dj,
                children: null == t ? x.intl.string(x.t.PoWNfe) : n ? x.intl.format(x.t.B6HU6O, {
                    soundName: t.name,
                    subtextHook: e => (0, i.jsx)(r.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        tag: "span",
                        children: e
                    })
                }) : t.name
            }), l ? (0, i.jsx)(T, {
                sound: t
            }) : (0, i.jsx)(r.HKD, {
                size: "md",
                color: "currentColor",
                className: h.Gk
            })]
        }), (0, i.jsxs)("div", {
            className: h.kL,
            children: [(0, i.jsx)(p, {
                onSelect: s
            }), l && !n && (0, i.jsx)(A.dT, {
                onClick: () => s(null),
                text: x.intl.string(x.t.jmtcGA),
                children: (0, i.jsx)(r.ucK, {
                    size: "md",
                    color: a.A.unsafe_rawColors.RED_400.css,
                    className: h.Wo
                })
            })]
        })]
    })
}