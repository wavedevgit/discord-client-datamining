/** Chunk was on web.js **/
/** chunk id: 389723, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    X2: () => k,
    a3: () => M,
    iS: () => x
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(896170),
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
let L = {
    keys: ["label"]
};

function x(e) {
    let {
        children: t,
        isCollapsible: n = !1,
        maxOptionsVisible: a = 5,
        isOpen: o,
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
    } = u, A = i.useId(), I = i.useRef(null), [S, T] = i.useState(null), [C, w] = i.useState(!1), [R, D] = i.useState(""), [x, M] = i.useState(""), {
        options: j,
        loading: k,
        onQueryChange: U
    } = (0, O.K)({
        active: null == o || o,
        options: c,
        renderOption: h
    }), G = i.useCallback((e, t) => {
        M(e), D(null != t ? t : e)
    }, []);
    i.useEffect(() => {
        U(R)
    }, [U, R]);
    let F = i.useMemo(() => "" === R ? j : null != E ? E(j, R) : (0, s.Ht)(j, R, null != b ? b : L), [j, R, E, b]),
        V = i.useRef(void 0),
        B = i.useMemo(() => ("single" === d ? V.current = j.find(e => e.value === g) : V.current = void 0, null == g || Array.isArray(g) && 0 === g.length) ? [] : (Array.isArray(g) ? g : [g]).map(e => j.find(t => t.value === e)).filter(e => null != e), [g, j, d]);
    i.useEffect(() => {
        if (!C && "single" === d) {
            var e, t;
            G(null != (e = null == (t = V.current) ? void 0 : t.label) ? e : "", "")
        }
    }, [G, B, d, C]), i.useEffect(() => {
        if (o && null != V.current) {
            let e = F.findIndex(e => {
                var t;
                return e.value === (null == (t = V.current) ? void 0 : t.value)
            });
            T(-1 !== e ? e : null)
        }
    }, [o, T, F]);
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
            _ && o && (null == l || l(!1)), w(!1)
        }, [H, d, m, _, o, l, v]),
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
            options: j,
            filteredOptions: F,
            selectedOptions: B,
            maxOptionsVisible: a,
            query: x,
            setQuery: G,
            loading: k,
            handleSelectionChange: Y,
            isOpen: o,
            setIsOpen: l,
            isEditing: C,
            setIsEditing: w
        }, u),
        children: t
    })
}

function M(e) {
    let {
        ref: t
    } = e, n = P(e, ["ref"]), {
        fieldProps: a,
        props: o
    } = (0, c.n)(n), s = (0, m.rdh)(_.A.modules.select.MAX_WIDTH), l = i.useMemo(() => ({
        horizontalControlColumnWidth: "minmax(".concat(s, "px, auto)")
    }), [s]);
    return (0, r.jsx)(c.D, R(N({}, a), {
        "data-mana-component": "combobox",
        layoutConfig: l,
        children: (0, r.jsx)(j, R(N({}, o), {
            ref: t
        }))
    }))
}

function j(e) {
    let {
        id: t,
        autoFocus: n,
        placeholder: a = I.intl.string(A.default["A+pfVR"]),
        hideTags: s,
        name: c,
        form: d,
        showChevronButton: f = !1,
        onQueryChange: _,
        onFocus: m,
        onBlur: O,
        onKeyDown: C,
        wrapTags: w,
        ref: P
    } = e, D = i.useRef(null), L = i.useRef(null), x = i.useRef(null), M = i.useContext(u._), {
        activeDescendantIndex: j,
        setActiveDescendantIndex: k,
        selectionMode: U,
        disabled: G,
        readOnly: F,
        loading: V,
        clearable: B,
        required: H,
        listBoxId: Y,
        inputFieldRef: W,
        shouldFocusWrap: K,
        isInert: z,
        isCollapsible: q,
        hasValue: Z,
        handleSelectionChange: Q,
        onSelectionChange: X,
        isOpen: J,
        setIsOpen: $,
        options: ee,
        selectedOptions: et,
        filteredOptions: en,
        query: er,
        setQuery: ei,
        isEditing: ea,
        setIsEditing: eo
    } = (0, y.h)(), es = "multiple" === U && Z, el = null != j ? (0, v.ZN)(Y, j) : void 0, ec = i.useCallback(() => {
        z || null == $ || $(!J)
    }, [z, J, $]), eu = i.useCallback(() => {
        var e;
        !0 === B && ("multiple" === U ? X([]) : X(null), ei(""), null == (e = L.current) || e.focus())
    }, [X, U, B, ei]), ed = i.useCallback(e => {
        var t, n, r;
        eo(!0), null == m || m(e), null == (r = L.current) || r.setSelectionRange(null != (t = null == er ? void 0 : er.length) ? t : 0, null != (n = null == er ? void 0 : er.length) ? n : 0)
    }, [m, eo, er]), ef = i.useCallback(() => {
        z || null == $ || $(!0)
    }, [$, z]), ep = i.useCallback(e => {
        var t;
        (null == (t = e.relatedTarget) ? void 0 : t.closest('[data-list-id="'.concat(Y, '"]'))) == null && (eo(!1), null == $ || $(!1), null == O || O(e))
    }, [O, $, Y, eo]);
    i.useEffect(() => {
        es && !w && (x.current = setTimeout(() => {
            var e;
            null == (e = L.current) || e.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }, 10))
    }, [et, es, w]);
    let e_ = i.useCallback(() => {
            var e;
            z || (null == $ || $(!0), null == (e = L.current) || e.focus())
        }, [$, z]),
        eh = i.useCallback(() => {
            var e;
            null == (e = L.current) || e.select()
        }, []),
        em = i.useCallback(e => {
            if (z) return;
            let t = Array.from(e)[0];
            Q(et.filter(e => e.id !== t))
        }, [Q, et, z]),
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
                    if (e.preventDefault(), e.stopPropagation(), !J || null == j || t - 1 < j) return;
                    let r = en[j];
                    if (null == r || !0 === r.disabled) return;
                    if (H && 1 === et.length && et.includes(r)) return void Q(et);
                    Q("single" === U ? [r] : (0, v.qH)(U, et, r));
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
        }, [U, H, B, Z, K, J, C, eu, Q, et, er, $, en, j, k]),
        eE = i.useCallback(e => {
            eo(!0), ei(e.target.value), null == $ || $(!0), null == _ || _(e), k(null)
        }, [_, eo, ei, $, k]),
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
            if (s) return null;
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
        }, [U, G, eh, em, ea, et, s]),
        eb = (0, l.A)(W, P);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(b.p, {
            ref: eb,
            disabled: G,
            readOnly: F,
            loading: V,
            clearable: B,
            fullWidth: !0,
            showChevronButton: f,
            isOpen: !!J,
            isInert: z,
            hasValue: Z,
            hasError: (null == M ? void 0 : M.errorMessageId) != null,
            handleToggle: ec,
            handleClear: eu,
            children: (0, r.jsx)("div", {
                className: o()(S._U, {
                    [S.kS]: es,
                    [S.kj]: es && w
                }),
                onClick: e_,
                children: (0, r.jsxs)("div", {
                    className: S.P$,
                    children: [ey, (0, r.jsx)(p.vN3, {
                        ringTarget: W,
                        children: (0, r.jsx)(h.p, {
                            ref: L,
                            id: t,
                            className: o()(T.input, S.kk, {
                                [S.kK]: "single" === U && Z && !ea
                            }),
                            autoFocus: n,
                            placeholder: a,
                            role: "combobox",
                            disabled: G,
                            readOnly: F,
                            "aria-haspopup": "listbox",
                            "aria-autocomplete": "list",
                            "aria-busy": V,
                            "aria-controls": Y,
                            "aria-expanded": !q || J,
                            "aria-activedescendant": el,
                            "aria-labelledby": "".concat(null == M ? void 0 : M.labelId),
                            "aria-describedby": "".concat(null == M ? void 0 : M.describedById),
                            "aria-errormessage": null == M ? void 0 : M.errorMessageId,
                            "aria-invalid": (null == M ? void 0 : M.errorMessageId) != null,
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
            onSelectionChange: Q,
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
        filteredOptions: o,
        selectedOptions: s,
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
        items: null != o ? o : l,
        tabIndex: -1,
        selectionMode: u,
        selectedItems: s,
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