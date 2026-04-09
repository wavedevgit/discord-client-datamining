/** chunk id: 376310 params = (module,exports,require) **/
n.d(t, {
    A: () => x,
    q: () => I
});
var a, i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(837381),
    c = n(311907),
    d = n(990078),
    u = n(397927),
    m = n(442433),
    p = n(565645),
    _ = n(775602),
    h = n(508675),
    A = n(253932),
    g = n(957565),
    f = n(985018),
    b = n(441585),
    T = ((a = T || {})[a.SMALL = 0] = "SMALL", a[a.MEDIUM = 1] = "MEDIUM", a);

function x(e) {
    let {
        tag: t,
        size: a = 1,
        disabled: s,
        className: d,
        onClick: T,
        onRemove: x,
        selected: I,
        ariaLabel: C
    } = e, {
        name: y,
        emojiId: E,
        emojiName: S
    } = t, v = null != x, [M, N] = l.useState(!1), j = (0, c.bG)([h.Ay], () => null != E ? h.Ay.getUsableCustomEmojiById(E) : null), R = v || null != T, O = (!v || !M) && (null != E || null != S), D = 0 === a, w = l.useRef(null), U = (0, c.bG)([_.A], () => _.A.keyboardModeEnabled), G = (0, i.jsxs)(i.Fragment, {
        children: [O ? (0, i.jsx)(p.A, {
            className: r()(b.emoji, {
                [b.small]: D
            }),
            emojiId: E,
            emojiName: S,
            animated: !!j?.animated,
            size: "reaction"
        }) : null, M && v && (0, i.jsx)("div", {
            className: b.closeCircle,
            children: (0, i.jsx)(u.PGe, {
                size: "md",
                color: "currentColor",
                className: b.close
            })
        }), (0, i.jsx)(u.Text, {
            variant: D ? "text-xs/semibold" : "text-sm/semibold",
            lineClamp: 1,
            color: "currentColor",
            children: y
        })]
    }), L = {
        key: t.id,
        className: r()(b.pill, {
            [b.disabled]: s,
            [b.clickable]: R,
            [b.small]: D,
            [b.selected]: I,
            [b[t.color]]: null != t.color && !R
        }, d),
        onClick: e => {
            T?.(e), x?.(t), U || null == w.current || w.current.blur()
        },
        onContextMenu: e => {
            let a;
            return a = A.Q_.getSetting(), void(g.p5 && a && (0, m.L3)(e, async () => {
                let {
                    default: e
                } = await n.e("32612").then(n.bind(n, 960015));
                return n => (0, i.jsx)(e, {
                    ...n,
                    tag: t
                })
            }))
        },
        onMouseEnter: () => v && N(!0),
        onMouseLeave: () => v && N(!1)
    }, F = (0, o.rm)(`forum-tag-${t.id}`);
    return R ? (0, i.jsx)(u.DUT, {
        ...F,
        innerRef: w,
        focusProps: {
            ringTarget: w
        },
        "aria-label": null != C ? C : f.intl.formatToPlainString(f.t.iyRTLm, {
            tagName: y
        }),
        role: "button",
        "aria-pressed": I,
        ...L,
        children: G
    }) : (0, i.jsx)("div", {
        ...L,
        children: G
    })
}

function I(e) {
    let {
        tags: t,
        count: n,
        size: a = 1
    } = e, l = 0 === a;
    return (0, i.jsx)(d.m, {
        "aria-label": f.intl.string(f.t["P/y+sj"]),
        __unsupportedReactNodeAsText: (0, i.jsx)(i.Fragment, {
            children: t.map(e => (0, i.jsx)(x, {
                tag: e,
                className: b.tooltipPill,
                size: x.Sizes.SMALL
            }, e.id))
        }),
        children: (0, i.jsx)("div", {
            className: r()(b.pill, {
                [b.small]: l
            }),
            children: (0, i.jsxs)(u.Text, {
                variant: l ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", n]
            })
        })
    })
}
x.Sizes = T