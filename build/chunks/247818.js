/** Chunk was on web.js **/
/** chunk id: 247818, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => A,
    p6: () => v
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(444550),
    u = n(155718),
    d = n(594808),
    f = n(207963),
    p = n(489414),
    _ = n(814890),
    h = n(57856),
    m = n(979811);

function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            g(e, t, n[t])
        })
    }
    return e
}

function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function b(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function O(e) {
    let {
        icon: t,
        iconSize: n
    } = e;
    return (0, r.jsx)("div", {
        className: h.zc,
        style: {
            height: n,
            width: n
        },
        children: t
    })
}
var v = function(e) {
    return e[e.PILL_ICON_SIZE = 16] = "PILL_ICON_SIZE", e[e.ROW_ICON_SIZE = 24] = "ROW_ICON_SIZE", e
}({});

function A(e) {
    let {
        selectActionComponent: t,
        queryOptions: n,
        renderIcon: a,
        renderOptionLabel: o,
        defaultValues: g
    } = e, {
        type: y,
        maxValues: v,
        disabled: A
    } = t, I = (0, _.c7)(t), [S, T] = i.useState(!1), [C, N] = i.useState(!1), [w, R] = i.useState(new Map(null == g ? void 0 : g.map(e => [e.value, e]))), [P, D] = i.useState(new Set(w.keys())), [x, L] = i.useState(() => (null != g ? g : []).map(e => e.value)), [j, M] = i.useState(0);
    i.useEffect(() => {
        let e = (null != g ? g : []).map(e => e.value);
        if (e.every(e => x.includes(e)) && x.every(t => e.includes(t))) return;
        L(e);
        let t = new Map(null == g ? void 0 : g.map(e => [e.value, e]));
        R(t), D(new Set(t.keys())), M(e => e + 1)
    }, [g, x]);
    let k = (0, f.jc)();
    l()(null != k, "SearchableSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
        state: U,
        executeStateUpdate: G,
        visualState: V,
        isDisabled: F,
        error: B
    } = k.useComponentState(t, w.size > 0 ? {
        type: y,
        selectedOptions: Array.from(w.values())
    } : void 0), H = null != k.modal, Y = v > 1, W = V === p.BB.LOADING;
    i.useEffect(() => {
        if ((null == U ? void 0 : U.type) === u.I5.USER_SELECT || (null == U ? void 0 : U.type) === u.I5.ROLE_SELECT || (null == U ? void 0 : U.type) === u.I5.MENTIONABLE_SELECT || (null == U ? void 0 : U.type) === u.I5.CHANNEL_SELECT) {
            let e = new Map(U.selectedOptions.map(e => [e.value, e]));
            R(e), D(new Set(e.keys()))
        }
    }, [U]);
    let K = i.useCallback(() => {
        G({
            type: y,
            selectedOptions: Array.from(w.values())
        }) && D(new Set(w.keys()))
    }, [G, y, w]);
    i.useEffect(() => {
        S || C || w.size === P.size && Array.from(w.keys()).every(e => P.has(e)) || K()
    }, [S, C, P, w, K]);
    let z = e => {
            S || N(!0), R(new Map(e.map(e => [e.value, e])))
        },
        q = e => R(null != e ? new Map([
            [e.value, e]
        ]) : new Map),
        Z = e => new Promise(t => {
            t(n(e))
        }),
        X = (e, t) => {
            let {
                inPill: n
            } = t, i = n ? 16 : 24, s = a(e, i);
            return null != s ? (0, r.jsx)(O, {
                icon: s,
                iconSize: i
            }) : null
        },
        Q = 0 === w.size || S,
        J = {
            isProcessing: W,
            isDisabled: A || V === p.BB.DISABLED || F,
            wrapperClassName: s()(h.Lt, {
                [h.zE]: H
            }),
            options: Z,
            placeholder: Q ? I : void 0,
            onClose: () => T(!1),
            onOpen: () => T(!0),
            onBlur: () => N(!1),
            maxVisibleItems: 5,
            renderOptionPrefix: X,
            renderOptionLabel: o
        };
    return (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)("div", {
            className: h.kL,
            children: Y ? (0, r.jsx)(c.p, b(E({
                value: Array.from(w.values()),
                onChange: z,
                multi: !0,
                inputClassNames: s()({
                    [h.R]: !Q
                }),
                closeOnSelect: !1
            }, J), {
                "data-migration-pending": !0
            }), j) : (0, r.jsx)(c.p, b(E({
                value: [...w.values()][0],
                onChange: q,
                clearable: !0
            }, J), {
                "data-migration-pending": !0
            }), j)
        }), null == B || H ? null : (0, r.jsx)(d.S0, b(E({}, (0, d.PS)(B)), {
            className: m.z3
        }))]
    })
}