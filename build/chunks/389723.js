/** Chunk was on web.js **/
/** chunk id: 389723, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    X2: () => k,
    a3: () => j,
    iS: () => L
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(896170),
    l = n(612324),
    c = n(452027),
    u = n(15626),
    d = n(540637),
    f = n(992251),
    p = n(158954),
    _ = n(827734),
    h = n(292666),
    m = n(397927),
    g = n(296898),
    E = n(332661),
    y = n(154385),
    b = n(430858),
    O = n(376811),
    v = n(641487),
    A = n(763600),
    I = n(985018),
    S = n(526008),
    T = n(100624);

function C(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            C(e, t, n[t])
        })
    }
    return e
}

function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function R(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function P(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = D(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function D(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let x = {
    keys: ["label"]
};

function L(e) {
    let {
        children: t,
        isCollapsible: n = !1,
        maxOptionsVisible: a = 5,
        isOpen: s,
        setIsOpen: l,
        options: c
    } = e, u = P(e, ["children", "isCollapsible", "maxOptionsVisible", "isOpen", "setIsOpen", "options"]), {
        selectionMode: d,
        disabled: f,
        readOnly: p,
        closeOnSelect: _,
        formatOption: h,
        onSelectionChange: m,
        value: g,
        customMatchSorter: E,
        matchSorterOptions: b,
        required: v
    } = u, A = i.useId(), I = i.useRef(null), [S, T] = i.useState(null), [C, w] = i.useState(!1), [R, D] = i.useState(""), [L, j] = i.useState(""), {
        options: M,
        loading: k,
        onQueryChange: U
    } = (0, O.K)({
        active: null == s || s,
        options: c,
        renderOption: h
    }), G = i.useCallback((e, t) => {
        j(e), D(null != t ? t : e)
    }, []);
    i.useEffect(() => {
        U(R)
    }, [U, R]);
    let V = i.useMemo(() => "" === R ? M : null != E ? E(M, R) : (0, o.Ht)(M, R, null != b ? b : x), [M, R, E, b]),
        F = i.useRef(void 0),
        B = i.useMemo(() => ("single" === d ? F.current = M.find(e => e.value === g) : F.current = void 0, null == g || Array.isArray(g) && 0 === g.length) ? [] : (Array.isArray(g) ? g : [g]).map(e => M.find(t => t.value === e)).filter(e => null != e), [g, M, d]);
    i.useEffect(() => {
        if (!C && "single" === d) {
            var e, t;
            G(null != (e = null == (t = F.current) ? void 0 : t.label) ? e : "", "")
        }
    }, [G, B, d, C]), i.useEffect(() => {
        if (s && null != F.current) {
            let e = V.findIndex(e => {
                var t;
                return e.value === (null == (t = F.current) ? void 0 : t.value)
            });
            T(-1 !== e ? e : null)
        }
    }, [s, T, V]);
    let H = f || p,
        Y = i.useCallback(e => {
            if (H || v && 0 === e.length) return;
            let t = Array.from(e);
            if ("multiple" === d && t.length < 1) m([]);
            else if ("multiple" === d) m(t.map(e => e.value));
            else {
                var n;
                m(null == (n = t[0]) ? void 0 : n.value)
            }
            _ && s && (null == l || l(!1)), w(!1)
        }, [H, d, m, _, s, l, v]),
        W = B.length > 0;
    return (0, r.jsx)(y.C.Provider, {
        value: N({
            activeDescendantIndex: S,
            setActiveDescendantIndex: T,
            listBoxId: A,
            inputFieldRef: I,
            isInert: H,
            isCollapsible: n,
            hasValue: W,
            value: g,
            options: M,
            filteredOptions: V,
            selectedOptions: B,
            maxOptionsVisible: a,
            query: L,
            setQuery: G,
            loading: k,
            handleSelectionChange: Y,
            isOpen: s,
            setIsOpen: l,
            isEditing: C,
            setIsEditing: w
        }, u),
        children: t
    })
}

function j(e) {
    let {
        ref: t
    } = e, n = P(e, ["ref"]), {
        fieldProps: a,
        props: s
    } = (0, c.n)(n), o = (0, m.rdh)(_.A.modules.select.MAX_WIDTH), l = i.useMemo(() => ({
        horizontalControlColumnWidth: "minmax(".concat(o, "px, auto)")
    }), [o]);
    return (0, r.jsx)(c.D, R(N({}, a), {
        "data-mana-component": "combobox",
        layoutConfig: l,
        children: (0, r.jsx)(M, R(N({}, s), {
            ref: t
        }))
    }))
}

function M(e) {
    let {
        id: t,
        autoFocus: n,
        placeholder: a = I.intl.string(A.default["A+pfVR"]),
        hideTags: o,
        name: c,
        form: d,
        showChevronButton: f = !1,
        onQueryChange: _,
        onFocus: m,
        onBlur: O,
        onKeyDown: C,
        wrapTags: w,
        ref: P
    } = e, D = i.useRef(null), x = i.useRef(null), L = i.useRef(null), j = i.useContext(u._), {
        activeDescendantIndex: M,
        setActiveDescendantIndex: k,
        selectionMode: U,
        disabled: G,
        readOnly: V,
        loading: F,
        clearable: B,
        required: H,
        listBoxId: Y,
        inputFieldRef: W,
        shouldFocusWrap: K,
        isInert: z,
        isCollapsible: q,
        hasValue: Z,
        handleSelectionChange: X,
        onSelectionChange: Q,
        isOpen: J,
        setIsOpen: $,
        options: ee,
        selectedOptions: et,
        filteredOptions: en,
        query: er,
        setQuery: ei,
        isEditing: ea,
        setIsEditing: es
    } = (0, y.h)(), eo = "multiple" === U && Z, el = null != M ? (0, v.ZN)(Y, M) : void 0, ec = i.useCallback(() => {
        z || null == $ || $(!J)
    }, [z, J, $]), eu = i.useCallback(() => {
        var e;
        !0 === B && ("multiple" === U ? Q([]) : Q(null), ei(""), null == (e = x.current) || e.focus())
    }, [Q, U, B, ei]), ed = i.useCallback(e => {
        var t, n, r;
        es(!0), null == m || m(e), null == (r = x.current) || r.setSelectionRange(null != (t = null == er ? void 0 : er.length) ? t : 0, null != (n = null == er ? void 0 : er.length) ? n : 0)
    }, [m, es, er]), ef = i.useCallback(() => {
        z || null == $ || $(!0)
    }, [$, z]), ep = i.useCallback(e => {
        var t;
        (null == (t = e.relatedTarget) ? void 0 : t.closest('[data-list-id="'.concat(Y, '"]'))) == null && (es(!1), null == $ || $(!1), null == O || O(e))
    }, [O, $, Y, es]);
    i.useEffect(() => {
        eo && !w && (L.current = setTimeout(() => {
            var e;
            null == (e = x.current) || e.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }, 10))
    }, [et, eo, w]);
    let e_ = i.useCallback(() => {
            var e;
            z || (null == $ || $(!0), null == (e = x.current) || e.focus())
        }, [$, z]),
        eh = i.useCallback(() => {
            var e;
            null == (e = x.current) || e.select()
        }, []),
        em = i.useCallback(e => {
            if (z) return;
            let t = Array.from(e)[0];
            X(et.filter(e => e.id !== t))
        }, [X, et, z]),
        eg = i.useCallback(e => {
            let t = en.length,
                n = 1;
            switch (null == C || C(e), e.key) {
                case "ArrowDown":
                case "PageDown":
                    if (n = "PageDown" === e.key ? 10 : 1, 0 === t || (e.preventDefault(), null == $ || $(!0), e.altKey || !J)) return;
                    k(e => {
                        if (null === e) return 0;
                        let r = e + n;
                        return r >= t && K ? 0 : Math.min(r, t - 1)
                    });
                    break;
                case "ArrowUp":
                case "PageUp":
                    if (n = "PageUp" === e.key ? 10 : 1, 0 === t) return;
                    e.preventDefault(), k(e => {
                        if (null === e) return 0;
                        let r = e - n;
                        return r < 0 && K ? t - 1 : Math.max(r, 0)
                    }), null == $ || $(!0);
                    break;
                case "Enter":
                    if (e.preventDefault(), e.stopPropagation(), !J || null == M || t - 1 < M) return;
                    let r = en[M];
                    if (null == r || !0 === r.disabled) return;
                    if (H && 1 === et.length && et.includes(r)) return void X(et);
                    X("single" === U ? [r] : (0, v.qH)(U, et, r));
                    break;
                case "Backspace":
                    if ("multiple" === U && "" === er && et.length > 0 && null != D.current) {
                        var i;
                        e.preventDefault(), e.stopPropagation(), null == (i = D.current.lastChild) || i.focus()
                    }
                    break;
                case "Escape":
                    Z && B && (e.preventDefault(), e.stopPropagation(), eu());
                    break;
                case "Home":
                    if (e.preventDefault(), 0 === t) return;
                    k(0);
                    break;
                case "End":
                    if (e.preventDefault(), 0 === t) return;
                    k(t - 1)
            }
        }, [U, H, B, Z, K, J, C, eu, X, et, er, $, en, M, k]),
        eE = i.useCallback(e => {
            es(!0), ei(e.target.value), null == $ || $(!0), null == _ || _(e), k(null)
        }, [_, es, ei, $, k]),
        ey = i.useMemo(() => {
            if (0 === et.length) return null;
            if ("single" === U) {
                if (ea) return null;
                let e = Array.from(et)[0];
                return (0, r.jsx)("div", {
                    className: S.OS,
                    children: (0, r.jsx)(E.c, R(N({}, e), {
                        onClick: eh,
                        "aria-hidden": !0,
                        inInput: !0
                    }))
                })
            }
            if (o) return null;
            let e = Array.from(et).map(e => {
                let t;
                return null != e.leading && (t = e.leading), {
                    id: e.id,
                    label: e.label,
                    icon: t,
                    isDisabled: G || e.disabled,
                    accessibilityHint: I.intl.string(A.default["/Y7vRd"])
                }
            });
            return (0, r.jsx)(p.CR_, {
                listRef: D,
                label: I.intl.string(A.default.VMNfsY),
                items: e,
                layout: "inline",
                onRemove: em
            })
        }, [U, G, eh, em, ea, et, o]),
        eb = (0, l.A)(W, P);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(b.p, {
            ref: eb,
            disabled: G,
            readOnly: V,
            loading: F,
            clearable: B,
            fullWidth: !0,
            showChevronButton: f,
            isOpen: !!J,
            isInert: z,
            hasValue: Z,
            hasError: (null == j ? void 0 : j.errorMessageId) != null,
            handleToggle: ec,
            handleClear: eu,
            children: (0, r.jsx)("div", {
                className: s()(S._U, {
                    [S.kS]: eo,
                    [S.kj]: eo && w
                }),
                onClick: e_,
                children: (0, r.jsxs)("div", {
                    className: S.P$,
                    children: [ey, (0, r.jsx)(p.vN3, {
                        ringTarget: W,
                        children: (0, r.jsx)(h.p, {
                            ref: x,
                            id: t,
                            className: s()(T.input, S.kk, {
                                [S.kK]: "single" === U && Z && !ea
                            }),
                            autoFocus: n,
                            placeholder: a,
                            role: "combobox",
                            disabled: G,
                            readOnly: V,
                            "aria-haspopup": "listbox",
                            "aria-autocomplete": "list",
                            "aria-busy": F,
                            "aria-controls": Y,
                            "aria-expanded": !q || J,
                            "aria-activedescendant": el,
                            "aria-labelledby": "".concat(null == j ? void 0 : j.labelId),
                            "aria-describedby": "".concat(null == j ? void 0 : j.describedById),
                            "aria-errormessage": null == j ? void 0 : j.errorMessageId,
                            "aria-invalid": (null == j ? void 0 : j.errorMessageId) != null,
                            value: null != er ? er : "",
                            onChange: eE,
                            onFocus: ed,
                            onBlur: ep,
                            onKeyDown: eg,
                            onClick: ef
                        })
                    })]
                })
            })
        }), (0, r.jsx)(g.H, {
            name: c,
            form: d,
            disabled: z,
            selectionMode: U,
            selectedItems: et,
            onSelectionChange: X,
            listItems: ee
        })]
    })
}

function k(e) {
    let {
        renderListItem: t,
        renderEmptyState: n,
        maxVisibleItems: a = 5
    } = e, {
        filteredOptions: s,
        selectedOptions: o,
        options: l,
        activeDescendantIndex: c,
        selectionMode: u,
        listBoxId: _,
        required: h,
        disabled: m,
        handleSelectionChange: g,
        query: E,
        loading: b
    } = (0, y.h)(), {
        i18n: O
    } = i.useContext(p.VOr);
    return (0, r.jsx)(d.q, {
        id: _,
        required: h,
        disabled: m,
        items: null != s ? s : l,
        tabIndex: -1,
        selectionMode: u,
        selectedItems: o,
        onSelectionChange: g,
        activeDescendantIndex: c,
        renderListItem: t,
        renderEmptyState: null != n ? n : () => (0, r.jsx)(f.o, {
            message: null == E || "" === E ? O.LISTBOX_EMPTY_STATE : O.LISTBOX_EMPTY_STATE_WITH_QUERY(E)
        }),
        maxVisibleItems: a,
        loading: b
    })
}