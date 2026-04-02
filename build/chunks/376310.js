/** chunk id: 376310 params = (module,exports,require) **/
n.d(t, {
    A: () => T,
    q: () => C
});
var a, i = n(627968),
    r = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(837381),
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
    A = n(602358),
    x = ((a = x || {})[a.SMALL = 0] = "SMALL", a[a.MEDIUM = 1] = "MEDIUM", a);

function T(e) {
    let {
        tag: t,
        size: a = 1,
        disabled: s,
        className: d,
        onClick: x,
        onRemove: T,
        selected: C,
        ariaLabel: I
    } = e, {
        name: S,
        emojiId: E,
        emojiName: y
    } = t, v = null != T, [j, R] = r.useState(!1), M = (0, c.bG)([f.Ay], () => null != E ? f.Ay.getUsableCustomEmojiById(E) : null), N = v || null != x, w = (!v || !j) && (null != E || null != y), O = 0 === a, k = r.useRef(null), D = (0, c.bG)([p.A], () => p.A.keyboardModeEnabled), G = (0, i.jsxs)(i.Fragment, {
        children: [w ? (0, i.jsx)(m.A, {
            className: o()(A.emoji, {
                [A.small]: O
            }),
            emojiId: E,
            emojiName: y,
            animated: !!M?.animated,
            size: "reaction"
        }) : null, j && v && (0, i.jsx)("div", {
            className: A.closeCircle,
            children: (0, i.jsx)(u.PGe, {
                size: "md",
                color: "currentColor",
                className: A.close
            })
        }), (0, i.jsx)(u.Text, {
            variant: O ? "text-xs/semibold" : "text-sm/semibold",
            lineClamp: 1,
            color: "currentColor",
            children: S
        })]
    }), L = {
        key: t.id,
        className: o()(A.pill, {
            [A.disabled]: s,
            [A.clickable]: N,
            [A.small]: O,
            [A.selected]: C,
            [A[t.color]]: null != t.color && !N
        }, d),
        onClick: e => {
            x?.(e), T?.(t), D || null == k.current || k.current.blur()
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
        onMouseEnter: () => v && R(!0),
        onMouseLeave: () => v && R(!1)
    }, U = (0, l.rm)(`forum-tag-${t.id}`);
    return N ? (0, i.jsx)(u.DUT, {
        ...U,
        innerRef: k,
        focusProps: {
            ringTarget: k
        },
        "aria-label": null != I ? I : g.intl.formatToPlainString(g.t.iyRTLm, {
            tagName: S
        }),
        role: "button",
        "aria-pressed": C,
        ...L,
        children: G
    }) : (0, i.jsx)("div", {
        ...L,
        children: G
    })
}

function C(e) {
    let {
        tags: t,
        count: n,
        size: a = 1
    } = e, r = 0 === a;
    return (0, i.jsx)(d.m, {
        "aria-label": g.intl.string(g.t["P/y+sj"]),
        __unsupportedReactNodeAsText: (0, i.jsx)(i.Fragment, {
            children: t.map(e => (0, i.jsx)(T, {
                tag: e,
                className: A.tooltipPill,
                size: T.Sizes.SMALL
            }, e.id))
        }),
        children: (0, i.jsx)("div", {
            className: o()(A.pill, {
                [A.small]: r
            }),
            children: (0, i.jsxs)(u.Text, {
                variant: r ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", n]
            })
        })
    })
}
T.Sizes = x