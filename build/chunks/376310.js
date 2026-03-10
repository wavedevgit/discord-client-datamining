/** chunk id: 376310 params = (module,exports,require) **/
n.d(t, {
    A: () => x,
    q: () => I
});
var a, i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(837381),
    c = n(311907),
    d = n(990078),
    u = n(397927),
    _ = n(442433),
    m = n(565645),
    p = n(775602),
    f = n(508675),
    b = n(253932),
    h = n(957565),
    g = n(985018),
    A = n(576140),
    T = ((a = T || {})[a.SMALL = 0] = "SMALL", a[a.MEDIUM = 1] = "MEDIUM", a);

function x(e) {
    let {
        tag: t,
        size: a = 1,
        disabled: r,
        className: d,
        onClick: T,
        onRemove: x,
        selected: I,
        ariaLabel: C
    } = e, {
        name: E,
        emojiId: S,
        emojiName: y
    } = t, v = null != x, [j, M] = l.useState(!1), R = (0, c.bG)([f.Ay], () => null != S ? f.Ay.getUsableCustomEmojiById(S) : null), N = v || null != T, O = (!v || !j) && (null != S || null != y), w = 0 === a, D = l.useRef(null), k = (0, c.bG)([p.A], () => p.A.keyboardModeEnabled), U = (0, i.jsxs)(i.Fragment, {
        children: [O ? (0, i.jsx)(m.A, {
            className: s()(A.emoji, {
                [A.small]: w
            }),
            emojiId: S,
            emojiName: y,
            animated: !!R?.animated,
            size: "reaction"
        }) : null, j && v && (0, i.jsx)("div", {
            className: A.closeCircle,
            children: (0, i.jsx)(u.PGe, {
                size: "md",
                color: "currentColor",
                className: A.close
            })
        }), (0, i.jsx)(u.Text, {
            variant: w ? "text-xs/semibold" : "text-sm/semibold",
            lineClamp: 1,
            color: "currentColor",
            children: E
        })]
    }), G = {
        key: t.id,
        className: s()(A.pill, {
            [A.disabled]: r,
            [A.clickable]: N,
            [A.small]: w,
            [A.selected]: I,
            [A[t.color]]: null != t.color && !N
        }, d),
        onClick: e => {
            T?.(e), x?.(t), k || null == D.current || D.current.blur()
        },
        onContextMenu: e => {
            let a;
            return a = b.Q_.getSetting(), void(h.p5 && a && (0, _.L3)(e, async () => {
                let {
                    default: e
                } = await n.e("32612").then(n.bind(n, 960015));
                return n => (0, i.jsx)(e, {
                    ...n,
                    tag: t
                })
            }))
        },
        onMouseEnter: () => v && M(!0),
        onMouseLeave: () => v && M(!1)
    }, L = (0, o.rm)(`forum-tag-${t.id}`);
    return N ? (0, i.jsx)(u.DUT, {
        ...L,
        innerRef: D,
        focusProps: {
            ringTarget: D
        },
        "aria-label": null != C ? C : g.intl.formatToPlainString(g.t.iyRTLm, {
            tagName: E
        }),
        role: "button",
        "aria-pressed": I,
        ...G,
        children: U
    }) : (0, i.jsx)("div", {
        ...G,
        children: U
    })
}

function I(e) {
    let {
        tags: t,
        count: n,
        size: a = 1
    } = e, l = 0 === a;
    return (0, i.jsx)(d.m, {
        "aria-label": g.intl.string(g.t["P/y+sj"]),
        __unsupportedReactNodeAsText: (0, i.jsx)(i.Fragment, {
            children: t.map(e => (0, i.jsx)(x, {
                tag: e,
                className: A.tooltipPill,
                size: x.Sizes.SMALL
            }, e.id))
        }),
        children: (0, i.jsx)("div", {
            className: s()(A.pill, {
                [A.small]: l
            }),
            children: (0, i.jsxs)(u.Text, {
                variant: l ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", n]
            })
        })
    })
}
x.Sizes = T