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
    _ = n(792348),
    g = n(674168),
    m = n(989799),
    A = n(69217),
    h = n(985018),
    p = n(768271);

function x(e) {
    let {
        onSelect: t
    } = e, [n, a] = s.useState(!1), o = (0, l.bG)([d.default], () => d.default.getCurrentUser()), u = c.Ay.canUseCustomCallSounds(o), _ = s.useRef(null);

    function x(e) {
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
                children: (0, i.jsx)(m.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: x,
                    gridNotice: u ? null : (0, i.jsx)(g.m, {}),
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
            text: h.intl.string(h.t.uOe0Az),
            children: (0, i.jsx)(r.R2l, {
                size: "md",
                color: "currentColor",
                className: p.Wo
            })
        })
    })
}

function E(e) {
    let {
        sound: t
    } = e, {
        previewSound: n
    } = (0, _.A)(t, null), s = 0 === (0, u.wH)() ? h.intl.string(h.t.OASXjt) : h.intl.formatToPlainString(h.t["/8fYO5"], {
        emojiName: t.emojiName,
        soundName: t.name
    });
    return (0, i.jsx)(A.dT, {
        onClick: n,
        text: s,
        children: (0, i.jsx)(r.HKD, {
            size: "md",
            color: "currentColor",
            className: p.wg
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
        className: p.D6,
        children: [(0, i.jsxs)("div", {
            className: p.kL,
            children: [u && (0, i.jsx)(o.A, {
                emojiId: d,
                emojiName: c,
                className: p.Zg
            }), (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-strong",
                className: p.dj,
                children: null == t ? h.intl.string(h.t.PoWNfe) : n ? h.intl.format(h.t.B6HU6O, {
                    soundName: t.name,
                    subtextHook: e => (0, i.jsx)(r.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        tag: "span",
                        children: e
                    })
                }) : t.name
            }), l ? (0, i.jsx)(E, {
                sound: t
            }) : (0, i.jsx)(r.HKD, {
                size: "md",
                color: "currentColor",
                className: p.Gk
            })]
        }), (0, i.jsxs)("div", {
            className: p.kL,
            children: [(0, i.jsx)(x, {
                onSelect: s
            }), l && !n && (0, i.jsx)(A.dT, {
                onClick: () => s(null),
                text: h.intl.string(h.t.jmtcGA),
                children: (0, i.jsx)(r.ucK, {
                    size: "md",
                    color: a.A.unsafe_rawColors.RED_400.css,
                    className: p.Wo
                })
            })]
        })]
    })
}