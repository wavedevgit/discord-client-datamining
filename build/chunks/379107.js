/** Chunk was on 49559 **/
/** chunk id: 379107, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(228524), n(896048);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    o = n(284009),
    s = n.n(o),
    c = n(843282),
    u = n(565645),
    d = n(155718),
    p = n(594808),
    m = n(207963),
    f = n(489414),
    O = n(814890),
    b = n(979811);

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function h(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function j(e) {
    let {
        emoji: t,
        label: n,
        description: l,
        isDisabled: a,
        isOffset: o
    } = e, s = i()(b._A, {
        [b.r9]: a,
        [b.cY]: null == t && o
    });
    return (0, r.jsxs)("div", {
        className: b.uK,
        children: [null != t ? (0, r.jsx)(u.A, {
            className: b.Zg,
            emojiId: t.id,
            emojiName: t.name,
            animated: t.animated
        }) : null, (0, r.jsxs)("div", {
            className: s,
            children: [(0, r.jsx)("strong", {
                className: b.Pf,
                children: n
            }), null != l ? (0, r.jsx)("span", {
                className: b.h_,
                children: l
            }) : null]
        })]
    })
}

function g(e) {
    let {
        emoji: t,
        label: n
    } = e;
    return (0, r.jsx)("div", {
        className: b.uK,
        children: (0, r.jsxs)("div", {
            className: i()(b.Uq, b.u9),
            children: [null != t ? (0, r.jsx)(u.A, {
                className: b.Zg,
                src: t.src,
                emojiId: t.id,
                emojiName: t.name,
                animated: t.animated
            }) : null, (0, r.jsx)("span", {
                className: b.oX,
                children: n
            })]
        })
    })
}

function A(e) {
    let {
        options: t
    } = e;
    return (0, r.jsx)("div", {
        className: b.uK,
        children: (0, r.jsx)("div", {
            className: b.Uq,
            children: t.map((e, t) => (0, r.jsxs)("div", {
                className: b.mK,
                children: [null != e.emoji ? (0, r.jsx)(u.A, {
                    className: b.eh,
                    src: e.emoji.src,
                    emojiId: e.emoji.id,
                    emojiName: e.emoji.name,
                    animated: e.emoji.animated
                }) : null, (0, r.jsx)("span", {
                    className: b.Tc,
                    children: e.label
                }, e.value)]
            }, t))
        })
    })
}

function v(e) {
    let {
        type: t,
        options: n,
        id: a,
        maxValues: o,
        minValues: u,
        disabled: v
    } = e, E = (0, O.c7)(e), C = l.useMemo(() => n.filter(e => e.default).map(e => e.value), [n]), x = (0, m.jc)();
    s()(null != x, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
        state: N,
        executeStateUpdate: I,
        visualState: P,
        isDisabled: S,
        error: _
    } = x.useComponentState(e, C.length > 0 ? {
        type: t,
        values: C
    } : void 0), T = null != x.modal, R = o > 1, w = P === f.BB.LOADING, [D, L] = l.useState(!1), [k, U] = l.useState(() => new Set(n.filter(e => e.default).map(e => e.value))), [M, H] = l.useState(k), K = l.useMemo(() => n.some(e => null != e.emoji), [n]);
    l.useEffect(() => {
        if ((null == N ? void 0 : N.type) === d.I5.STRING_SELECT) {
            let e = new Set(N.values);
            U(e), H(e)
        } else {
            let e = new Set(C);
            U(e), H(e)
        }
    }, [a, C, N]);
    let F = l.useCallback(() => {
        M !== k && I({
            type: d.I5.STRING_SELECT,
            values: Array.from(k)
        }) && H(k)
    }, [k, M, H, I]);
    l.useEffect(() => {
        D || k.size === M.size && Array.from(M).every(e => k.has(e)) || F()
    }, [D, k, M, F]);
    let G = c.lS;
    R ? G = c.M8 : 0 === u && (G = c.$l);
    let B = (0, c.Ev)({
        value: k,
        onChange: e => U(e),
        onSelectInteraction: G
    });
    return (0, r.jsxs)(l.Fragment, {
        children: [(0, r.jsx)("div", {
            className: b.kL,
            children: (0, r.jsx)(c.Pw, h(y({
                isProcessing: w,
                isDisabled: v || P === f.BB.DISABLED || S,
                className: i()(b.Lt, {
                    [b.zE]: T
                }),
                options: n.map(e => h(y({}, e), {
                    disabled: R && !k.has(e.value) && k.size === o
                })),
                placeholder: E,
                onClose: () => L(!1),
                onOpen: () => L(!0),
                maxVisibleItems: 5,
                closeOnSelect: !R,
                optionClassName: b.MT,
                renderOptionLabel: e => (0, r.jsx)(j, h(y({}, e), {
                    isDisabled: R && !k.has(e.value) && k.size === o,
                    isOffset: K
                })),
                renderOptionValue: e => R ? (0, r.jsx)(A, {
                    options: e
                }) : (0, r.jsx)(g, y({}, e[0]))
            }, B), {
                "data-migration-pending": !0
            }))
        }), null == _ || T ? null : (0, r.jsx)(p.S0, h(y({}, (0, p.PS)(_)), {
            className: b.z3
        }))]
    })
}