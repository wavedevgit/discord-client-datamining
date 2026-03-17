/** chunk id: 376310 params = (module,exports,require) **/
n.d(t, {
    A: () => T,
    q: () => v
});
var l, i = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(837381),
    u = n(311907),
    c = n(990078),
    d = n(397927),
    h = n(442433),
    g = n(565645),
    f = n(775602),
    m = n(508675),
    p = n(253932),
    E = n(957565),
    N = n(985018),
    A = n(576140),
    x = ((l = x || {})[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM", l);

function T(e) {
    let {
        tag: t,
        size: l = 1,
        disabled: s,
        className: c,
        onClick: x,
        onRemove: T,
        selected: v,
        ariaLabel: b
    } = e, {
        name: S,
        emojiId: R,
        emojiName: D
    } = t, y = null != T, [C, M] = a.useState(!1), j = (0, u.bG)([m.Ay], () => null != R ? m.Ay.getUsableCustomEmojiById(R) : null), I = y || null != x, _ = (!y || !C) && (null != R || null != D), L = 0 === l, w = a.useRef(null), O = (0, u.bG)([f.A], () => f.A.keyboardModeEnabled), G = (0, i.jsxs)(i.Fragment, {
        children: [_ ? (0, i.jsx)(g.A, {
            className: r()(A.emoji, {
                [A.small]: L
            }),
            emojiId: R,
            emojiName: D,
            animated: !!j?.animated,
            size: "reaction"
        }) : null, C && y && (0, i.jsx)("div", {
            className: A.closeCircle,
            children: (0, i.jsx)(d.PGe, {
                size: "md",
                color: "currentColor",
                className: A.close
            })
        }), (0, i.jsx)(d.Text, {
            variant: L ? "text-xs/semibold" : "text-sm/semibold",
            lineClamp: 1,
            color: "currentColor",
            children: S
        })]
    }), P = {
        key: t.id,
        className: r()(A.pill, {
            [A.disabled]: s,
            [A.clickable]: I,
            [A.small]: L,
            [A.selected]: v,
            [A[t.color]]: null != t.color && !I
        }, c),
        onClick: e => {
            x?.(e), T?.(t), O || null == w.current || w.current.blur()
        },
        onContextMenu: e => {
            let l;
            return l = p.Q_.getSetting(), void(E.p5 && l && (0, h.L3)(e, async () => {
                let {
                    default: e
                } = await n.e("32612").then(n.bind(n, 960015));
                return n => (0, i.jsx)(e, {
                    ...n,
                    tag: t
                })
            }))
        },
        onMouseEnter: () => y && M(!0),
        onMouseLeave: () => y && M(!1)
    }, k = (0, o.rm)(`forum-tag-${t.id}`);
    return I ? (0, i.jsx)(d.DUT, {
        ...k,
        innerRef: w,
        focusProps: {
            ringTarget: w
        },
        "aria-label": null != b ? b : N.intl.formatToPlainString(N.t.iyRTLm, {
            tagName: S
        }),
        role: "button",
        "aria-pressed": v,
        ...P,
        children: G
    }) : (0, i.jsx)("div", {
        ...P,
        children: G
    })
}

function v(e) {
    let {
        tags: t,
        count: n,
        size: l = 1
    } = e, a = 0 === l;
    return (0, i.jsx)(c.m, {
        "aria-label": N.intl.string(N.t["P/y+sj"]),
        __unsupportedReactNodeAsText: (0, i.jsx)(i.Fragment, {
            children: t.map(e => (0, i.jsx)(T, {
                tag: e,
                className: A.tooltipPill,
                size: T.Sizes.SMALL
            }, e.id))
        }),
        children: (0, i.jsx)("div", {
            className: r()(A.pill, {
                [A.small]: a
            }),
            children: (0, i.jsxs)(d.Text, {
                variant: a ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", n]
            })
        })
    })
}
T.Sizes = x