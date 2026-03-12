/** chunk id: 595953 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(827734),
    a = n(397927),
    o = n(565645),
    d = n(287809),
    c = n(927578),
    u = n(536432),
    _ = n(792348),
    m = n(674168),
    g = n(989799),
    A = n(69217),
    h = n(985018),
    x = n(768271);

function p(e) {
    let {
        onSelect: t
    } = e, [n, r] = s.useState(!1), o = (0, l.bG)([d.default], () => d.default.getCurrentUser()), u = c.Ay.canUseCustomCallSounds(o), _ = s.useRef(null);

    function p(e) {
        u && (r(!1), t?.(e))
    }
    return (0, i.jsx)(a.YNO, {
        targetElementRef: _,
        shouldShow: n,
        position: "left",
        onRequestClose: () => r(!1),
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(a.lGe, {
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
                r(!n)
            },
            text: h.intl.string(h.t.uOe0Az),
            children: (0, i.jsx)(a.R2l, {
                size: "md",
                color: "currentColor",
                className: x.Wo
            })
        })
    })
}

function T(e) {
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
        children: (0, i.jsx)(a.HKD, {
            size: "md",
            color: "currentColor",
            className: x.wg
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
        className: x.D6,
        children: [(0, i.jsxs)("div", {
            className: x.kL,
            children: [u && (0, i.jsx)(o.A, {
                emojiId: d,
                emojiName: c,
                className: x.Zg
            }), (0, i.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "text-strong",
                className: x.dj,
                children: null == t ? h.intl.string(h.t.PoWNfe) : n ? h.intl.format(h.t.B6HU6O, {
                    soundName: t.name,
                    subtextHook: e => (0, i.jsx)(a.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        tag: "span",
                        children: e
                    })
                }) : t.name
            }), l ? (0, i.jsx)(T, {
                sound: t
            }) : (0, i.jsx)(a.HKD, {
                size: "md",
                color: "currentColor",
                className: x.Gk
            })]
        }), (0, i.jsxs)("div", {
            className: x.kL,
            children: [(0, i.jsx)(p, {
                onSelect: s
            }), l && !n && (0, i.jsx)(A.dT, {
                onClick: () => s(null),
                text: h.intl.string(h.t.jmtcGA),
                children: (0, i.jsx)(a.ucK, {
                    size: "md",
                    color: r.A.unsafe_rawColors.RED_400.css,
                    className: x.Wo
                })
            })]
        })]
    })
}