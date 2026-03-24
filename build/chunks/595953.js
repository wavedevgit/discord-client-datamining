/** chunk id: 595953 params = (module,exports,require) **/
n.d(t, {
    A: () => T
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
    m = n(792348),
    _ = n(674168),
    g = n(989799),
    x = n(69217),
    A = n(985018),
    h = n(443669);

function p(e) {
    let {
        onSelect: t
    } = e, [n, a] = s.useState(!1), o = (0, l.bG)([d.default], () => d.default.getCurrentUser()), u = c.Ay.canUseCustomCallSounds(o), m = s.useRef(null);

    function p(e) {
        u && (a(!1), t?.(e))
    }
    return (0, i.jsx)(r.YNO, {
        targetElementRef: m,
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
                    gridNotice: u ? null : (0, i.jsx)(_.m, {}),
                    analyticsSource: "call sounds edit setting"
                })
            })
        },
        children: e => (0, i.jsx)(x.dT, {
            ...e,
            ref: m,
            onClick: () => {
                a(!n)
            },
            text: A.intl.string(A.t.uOe0Az),
            children: (0, i.jsx)(r.R2l, {
                size: "md",
                color: "currentColor",
                className: h.Wo
            })
        })
    })
}

function f(e) {
    let {
        sound: t
    } = e, {
        previewSound: n
    } = (0, m.A)(t, null), s = 0 === (0, u.wH)() ? A.intl.string(A.t.OASXjt) : A.intl.formatToPlainString(A.t["/8fYO5"], {
        emojiName: t.emojiName,
        soundName: t.name
    });
    return (0, i.jsx)(x.dT, {
        onClick: n,
        text: s,
        children: (0, i.jsx)(r.HKD, {
            size: "md",
            color: "currentColor",
            className: h.wg
        })
    })
}

function T(e) {
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
                children: null == t ? A.intl.string(A.t.PoWNfe) : n ? A.intl.format(A.t.B6HU6O, {
                    soundName: t.name,
                    subtextHook: e => (0, i.jsx)(r.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        tag: "span",
                        children: e
                    })
                }) : t.name
            }), l ? (0, i.jsx)(f, {
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
            }), l && !n && (0, i.jsx)(x.dT, {
                onClick: () => s(null),
                text: A.intl.string(A.t.jmtcGA),
                children: (0, i.jsx)(r.ucK, {
                    size: "md",
                    color: a.A.unsafe_rawColors.RED_400.css,
                    className: h.Wo
                })
            })]
        })]
    })
}