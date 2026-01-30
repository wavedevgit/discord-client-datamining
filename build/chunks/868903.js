/** chunk id: 868903, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    CR: () => S,
    LY: () => C,
    vw: () => w
});
var r = n(650682),
    i = n(241634),
    a = n(825913),
    o = n(129844),
    s = n(447509),
    l = n(257537),
    c = n(123375),
    u = n(357710),
    d = n(193523),
    f = n(567359),
    p = n(498430),
    _ = n(27270),
    h = n(967158),
    m = n(59845),
    g = n(178375),
    E = n(290424),
    y = n(803082),
    b = n(533715),
    O = n(565801),
    v = n(64700);
let A = (0, v.createContext)(null),
    I = (0, v.createContext)(null),
    S = (0, v.forwardRef)(function(e, t) {
        return [e, t] = (0, a.JT)(e, t, A), v.createElement(s.DN.Provider, {
            value: null
        }, v.createElement(m.GQ, {
            content: e.children
        }, n => v.createElement(T, {
            props: e,
            forwardedRef: t,
            collection: n
        })))
    });

function T({
    props: e,
    forwardedRef: t,
    collection: n
}) {
    var r;
    let i = (0, v.useRef)(null),
        {
            id: c,
            ...u
        } = e;
    [u, i] = (0, a.JT)(u, i, l.Co);
    let {
        filter: p,
        shouldUseVirtualFocus: _,
        ...h
    } = u, [m, g] = (0, a._E)(!e["aria-label"] && !e["aria-labelledby"]), y = (0, O.p)({
        ...h,
        children: void 0,
        collection: n
    }), b = (0, O.Z)(y, p), A = (0, E.$)(u, {
        global: !0
    }), S = Object.fromEntries(Object.entries(A).map(([e, t]) => [e, "id" === e ? t : void 0])), {
        gridProps: T,
        labelProps: C,
        descriptionProps: N,
        errorMessageProps: w
    } = (0, f.n)({
        ...h,
        ...S,
        label: g
    }, b, i);
    return v.createElement("div", {
        ...A,
        id: c,
        ref: t,
        slot: e.slot || void 0,
        className: null != (r = e.className) ? r : "react-aria-TagGroup",
        style: e.style
    }, v.createElement(a.Kq, {
        values: [
            [o.I, {
                ...C,
                elementType: "span",
                ref: m
            }],
            [I, {
                ...T,
                ref: i
            }],
            [s.DN, b],
            [d.h, {
                slots: {
                    description: N,
                    errorMessage: w
                }
            }]
        ]
    }, e.children))
}
let C = (0, v.forwardRef)(function(e, t) {
    return (0, v.useContext)(s.DN) ? v.createElement(N, {
        props: e,
        forwardedRef: t
    }) : v.createElement(m.pM, e)
});

function N({
    props: e,
    forwardedRef: t
}) {
    let n = (0, v.useContext)(s.DN),
        {
            CollectionRoot: r
        } = (0, v.useContext)(i.zL),
        [o, l] = (0, a.JT)({}, t, I),
        {
            focusProps: c,
            isFocused: d,
            isFocusVisible: f
        } = (0, p.o)(),
        _ = {
            isEmpty: 0 === n.collection.size,
            isFocused: d,
            isFocusVisible: f,
            state: n
        },
        h = (0, a.Sl)({
            className: e.className,
            style: e.style,
            defaultClassName: "react-aria-TagList",
            values: _
        }),
        m = (0, i.l2)(n.selectionManager.focusedKey),
        g = (0, E.$)(e, {
            global: !0
        });
    return v.createElement("div", {
        ...(0, y.v)(g, h, o, c),
        ref: l,
        "data-empty": 0 === n.collection.size || void 0,
        "data-focused": d || void 0,
        "data-focus-visible": f || void 0
    }, v.createElement(u.D, null, 0 === n.collection.size && e.renderEmptyState ? e.renderEmptyState(_) : v.createElement(r, {
        collection: n.collection,
        persistedKeys: m
    })))
}
let w = (0, m.KU)(g._B, (e, t, n) => {
    let o = (0, v.useContext)(s.DN),
        l = (0, b.U)(t),
        {
            focusProps: u,
            isFocusVisible: d
        } = (0, p.o)({
            within: !1
        }),
        {
            rowProps: f,
            gridCellProps: m,
            removeButtonProps: g,
            ...O
        } = (0, _.O)({
            item: n
        }, o, l),
        {
            hoverProps: A,
            isHovered: I
        } = (0, h.M)({
            isDisabled: !O.allowsSelection,
            onHoverStart: n.props.onHoverStart,
            onHoverChange: n.props.onHoverChange,
            onHoverEnd: n.props.onHoverEnd
        }),
        S = (0, a.Sl)({
            ...e,
            id: void 0,
            children: n.rendered,
            defaultClassName: "react-aria-Tag",
            values: {
                ...O,
                isFocusVisible: d,
                isHovered: I,
                selectionMode: o.selectionManager.selectionMode,
                selectionBehavior: o.selectionManager.selectionBehavior
            }
        });
    (0, v.useEffect)(() => {
        n.textValue
    }, [n.textValue]);
    let T = (0, E.$)(e, {
        global: !0
    });
    return delete T.id, delete T.onClick, v.createElement("div", {
        ref: l,
        ...(0, y.v)(T, S, f, u, A),
        "data-selected": O.isSelected || void 0,
        "data-disabled": O.isDisabled || void 0,
        "data-hovered": I || void 0,
        "data-focused": O.isFocused || void 0,
        "data-focus-visible": d || void 0,
        "data-pressed": O.isPressed || void 0,
        "data-allows-removing": O.allowsRemoving || void 0,
        "data-selection-mode": "none" === o.selectionManager.selectionMode ? void 0 : o.selectionManager.selectionMode
    }, v.createElement("div", {
        ...m,
        style: {
            display: "contents"
        }
    }, v.createElement(a.Kq, {
        values: [
            [r.k, {
                slots: {
                    remove: g
                }
            }],
            [i.zL, i.N],
            [c.r, {
                isSelected: O.isSelected
            }]
        ]
    }, S.children)))
})