/** Chunk was on 91798 **/
/** chunk id: 376310, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => C,
    q: () => w
}), a(896048);
var n, l = a(627968),
    r = a(64700),
    i = a(503698),
    o = a.n(i),
    s = a(837381),
    c = a(311907),
    u = a(990078),
    d = a(397927),
    b = a(442433),
    f = a(565645),
    p = a(775602),
    _ = a(508675),
    g = a(253932),
    h = a(957565),
    m = a(985018),
    y = a(576140);

function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable
        }))), n.forEach(function(t) {
            var n;
            n = a[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        })
    }
    return e
}

function v(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            a.push.apply(a, n)
        }
        return a
    })(Object(t)).forEach(function(a) {
        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
    }), e
}
var j = ((n = j || {})[n.SMALL = 0] = "SMALL", n[n.MEDIUM = 1] = "MEDIUM", n);

function C(e) {
    let {
        tag: t,
        size: n = 1,
        disabled: i,
        className: u,
        onClick: j,
        onRemove: C,
        selected: w,
        ariaLabel: A
    } = e, {
        name: E,
        emojiId: O,
        emojiName: T
    } = t, I = null != C, [M, S] = r.useState(!1), P = (0, c.bG)([_.Ay], () => null != O ? _.Ay.getUsableCustomEmojiById(O) : null), k = I || null != j, L = (!I || !M) && (null != O || null != T), N = 0 === n, D = r.useRef(null), F = (0, c.bG)([p.A], () => p.A.keyboardModeEnabled), B = (0, l.jsxs)(l.Fragment, {
        children: [L ? (0, l.jsx)(f.A, {
            className: o()(y.emoji, {
                [y.small]: N
            }),
            emojiId: O,
            emojiName: T,
            animated: !!(null == P ? void 0 : P.animated),
            size: "reaction"
        }) : null, M && I && (0, l.jsx)("div", {
            className: y.closeCircle,
            children: (0, l.jsx)(d.PGe, {
                size: "md",
                color: "currentColor",
                className: y.close
            })
        }), (0, l.jsx)(d.Text, {
            variant: N ? "text-xs/semibold" : "text-sm/semibold",
            lineClamp: 1,
            color: "currentColor",
            children: E
        })]
    }), G = {
        key: t.id,
        className: o()(y.pill, {
            [y.disabled]: i,
            [y.clickable]: k,
            [y.small]: N,
            [y.selected]: w,
            [y[t.color]]: null != t.color && !k
        }, u),
        onClick: e => {
            null == j || j(e), null == C || C(t), F || null == D.current || D.current.blur()
        },
        onContextMenu: e => {
            let n;
            return n = g.Q_.getSetting(), void(h.p5 && n && (0, b.L3)(e, async () => {
                let {
                    default: e
                } = await a.e("32612").then(a.bind(a, 960015));
                return a => (0, l.jsx)(e, v(x({}, a), {
                    tag: t
                }))
            }))
        },
        onMouseEnter: () => I && S(!0),
        onMouseLeave: () => I && S(!1)
    }, U = (0, s.rm)("forum-tag-".concat(t.id));
    return k ? (0, l.jsx)(d.DUT, v(x(v(x({}, U), {
        innerRef: D,
        focusProps: {
            ringTarget: D
        },
        "aria-label": null != A ? A : m.intl.formatToPlainString(m.t.iyRTLm, {
            tagName: E
        }),
        role: "button",
        "aria-pressed": w
    }), G), {
        children: B
    })) : (0, l.jsx)("div", v(x({}, G), {
        children: B
    }))
}

function w(e) {
    let {
        tags: t,
        count: a,
        size: n = 1
    } = e, r = 0 === n;
    return (0, l.jsx)(u.m, {
        "aria-label": m.intl.string(m.t["P/y+sj"]),
        __unsupportedReactNodeAsText: (0, l.jsx)(l.Fragment, {
            children: t.map(e => (0, l.jsx)(C, {
                tag: e,
                className: y.tooltipPill,
                size: C.Sizes.SMALL
            }, e.id))
        }),
        children: (0, l.jsx)("div", {
            className: o()(y.pill, {
                [y.small]: r
            }),
            children: (0, l.jsxs)(d.Text, {
                variant: r ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", a]
            })
        })
    })
}
C.Sizes = j