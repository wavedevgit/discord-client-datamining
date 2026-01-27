/** Chunk was on web.js **/
/** chunk id: 439626, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A0: () => W,
    BF: () => X,
    VP: () => q,
    XI: () => F,
    fI: () => $,
    fh: () => et
});
var r = n(650682),
    i = n(257537),
    a = n(241634),
    o = n(825913),
    s = n(20280),
    l = n(123375),
    c = n(357710),
    u = n(178375),
    d = n(59845),
    f = n(183590),
    p = n(136193),
    _ = n(36310),
    h = n(634107),
    m = n(872219),
    g = n(138026),
    E = n(498430),
    y = n(13163),
    b = n(803082),
    O = n(173547),
    v = n(967158),
    A = n(134584),
    I = n(625736),
    S = n(481638),
    T = n(298377),
    C = n(126031),
    N = n(982439),
    w = n(533715),
    R = n(561514),
    P = n(290424),
    D = n(6494),
    L = n(216055),
    x = n(64700);
n(340287);
class M extends u.Wk {
    addNode(e) {
        super.addNode(e), this.columnsDirty || (this.columnsDirty = "column" === e.type), "tableheader" === e.type && (this.head = e), "tablebody" === e.type && (this.body = e)
    }
    commit(e, t, n = !1) {
        for (let e of (this.updateColumns(n), this.rows = [], this.getChildren(this.body.key))) {
            let t = e.lastChildKey;
            if (null != t) {
                var r, i;
                let e = this.getItem(t),
                    a = (null != (r = e.colIndex) ? r : e.index) + (null != (i = e.colSpan) ? i : 1);
                if (a !== this.columns.length && !n) throw Error(`Cell count must match column count. Found ${a} cells and ${this.columns.length} columns.`)
            }
            this.rows.push(e)
        }
        super.commit(e, t, n)
    }
    updateColumns(e) {
        if (!this.columnsDirty) return;
        this.rowHeaderColumnKeys = new Set, this.columns = [];
        let t = new Map,
            n = e => {
                for (let r of ("column" === e.type && (t.set(e.key, e), !e.hasChildNodes && (e.index = this.columns.length, this.columns.push(e), e.props.isRowHeader && this.rowHeaderColumnKeys.add(e.key))), this.getChildren(e.key))) n(r)
            };
        for (let e of this.getChildren(this.head.key)) n(e);
        if (this.headerRows = (0, p.n)(t, this.columns), this.columnsDirty = !1, 0 === this.rowHeaderColumnKeys.size && this.columns.length > 0 && !e) throw Error("A table must have at least one Column with the isRowHeader prop set to true")
    }
    get columnCount() {
        return this.columns.length
    }*[Symbol.iterator]() {
        -1 !== this.head.key && (yield this.head, yield this.body)
    }
    getFirstKey() {
        return this.body.firstChildKey
    }
    getLastKey() {
        return this.body.lastChildKey
    }
    getKeyAfter(e) {
        var t;
        let n = this.getItem(e);
        return (null == n ? void 0 : n.type) === "column" ? null != (t = n.nextKey) ? t : null : super.getKeyAfter(e)
    }
    getKeyBefore(e) {
        var t, n;
        let r = this.getItem(e);
        if ((null == r ? void 0 : r.type) === "column") return null != (n = r.prevKey) ? n : null;
        let i = super.getKeyBefore(e);
        return null != i && (null == (t = this.getItem(i)) ? void 0 : t.type) === "tablebody" ? null : i
    }
    getChildren(e) {
        if (!this.getItem(e)) {
            for (let t of this.headerRows)
                if (t.key === e) return t.childNodes
        }
        return super.getChildren(e)
    }
    clone() {
        let e = super.clone();
        return e.headerRows = this.headerRows, e.columns = this.columns, e.rowHeaderColumnKeys = this.rowHeaderColumnKeys, e.head = this.head, e.body = this.body, e
    }
    getTextValue(e) {
        let t = this.getItem(e);
        if (!t) return "";
        if (t.textValue) return t.textValue;
        let n = this.rowHeaderColumnKeys,
            r = [];
        for (let t of this.getChildren(e)) {
            let e = this.columns[t.index];
            if (n.has(e.key) && t.textValue && r.push(t.textValue), r.length === n.size) break
        }
        return r.join(" ")
    }
    constructor(...e) {
        super(...e), this.headerRows = [], this.columns = [], this.rows = [], this.rowHeaderColumnKeys = new Set, this.head = new Y(-1), this.body = new Q(-2), this.columnsDirty = !0
    }
}
let j = (0, x.createContext)(null),
    k = (0, x.createContext)(null),
    U = (0, x.createContext)(null),
    G = (0, x.createContext)(null),
    F = (0, x.forwardRef)(function(e, t) {
        var n;
        [e, t] = (0, o.JT)(e, t, k);
        let r = (0, _.R)(e),
            {
                selectionBehavior: i,
                selectionMode: a,
                disallowEmptySelection: s
            } = r,
            l = !!(null == (n = e.dragAndDropHooks) ? void 0 : n.useDraggableCollectionState),
            c = (0, x.useMemo)(() => ({
                selectionBehavior: "none" === a ? null : i,
                selectionMode: a,
                disallowEmptySelection: s,
                allowsDragging: l
            }), [i, a, s, l]),
            u = x.createElement(H.Provider, {
                value: c
            }, x.createElement(d.pM, e));
        return x.createElement(d.GQ, {
            content: u,
            createCollection: () => new M
        }, n => x.createElement(V, {
            props: e,
            forwardedRef: t,
            selectionState: r,
            collection: n
        }))
    });

function V({
    props: e,
    forwardedRef: t,
    selectionState: n,
    collection: r
}) {
    var l;
    let u, d, f;
    [e, t] = (0, o.JT)(e, t, i.Co);
    let {
        shouldUseVirtualFocus: p,
        disallowTypeAhead: _,
        filter: O,
        ...v
    } = e, A = (0, x.useContext)(j);
    t = (0, w.U)((0, x.useMemo)(() => (0, R.P)(t, null == A ? void 0 : A.tableRef), [t, null == A ? void 0 : A.tableRef]));
    let I = (0, h.j)({
            ...v,
            collection: r,
            children: void 0,
            UNSAFE_selectionState: n
        }),
        S = (0, h.B)(I, O),
        {
            isVirtualized: T,
            layoutDelegate: C,
            dropTargetDelegate: N,
            CollectionRoot: D
        } = (0, x.useContext)(a.zL),
        {
            dragAndDropHooks: L
        } = e,
        {
            gridProps: M
        } = (0, m.K)({
            ...v,
            layoutDelegate: C,
            isVirtualized: T
        }, S, t),
        k = S.selectionManager,
        F = !!(null == L ? void 0 : L.useDraggableCollectionState),
        V = !!(null == L ? void 0 : L.useDroppableCollectionState);
    (0, x.useRef)(F), (0, x.useRef)(V), (0, x.useEffect)(() => {}, [F, V]);
    let H = !1,
        Y = null,
        W = (0, x.useRef)(null);
    if (F && L) {
        u = L.useDraggableCollectionState({
            collection: S.collection,
            selectionManager: k,
            preview: L.renderDragPreview ? W : void 0
        }), L.useDraggableCollection({}, u, t);
        let e = L.DragPreview;
        Y = L.renderDragPreview ? x.createElement(e, {
            ref: W
        }, L.renderDragPreview) : null
    }
    if (V && L) {
        d = L.useDroppableCollectionState({
            collection: S.collection,
            selectionManager: k
        });
        let e = new(0, g.n)({
                collection: S.collection,
                disabledKeys: k.disabledKeys,
                disabledBehavior: k.disabledBehavior,
                ref: t,
                layoutDelegate: C
            }),
            n = L.dropTargetDelegate || N || new L.ListDropTargetDelegate(r.rows, t);
        f = L.useDroppableCollection({
            keyboardDelegate: e,
            dropTargetDelegate: n
        }, d, t), H = d.isDropTarget({
            type: "root"
        })
    }
    let {
        focusProps: K,
        isFocused: z,
        isFocusVisible: q
    } = (0, E.o)(), Z = (0, o.Sl)({
        className: e.className,
        style: e.style,
        defaultClassName: "react-aria-Table",
        values: {
            isDropTarget: H,
            isFocused: z,
            isFocusVisible: q,
            state: S
        }
    }), Q = !!(F && !(null == u ? void 0 : u.isDisabled)), X = Z.style, J = null;
    A && (J = A.useTableColumnResizeState({
        tableWidth: A.tableWidth
    }, S), T || (X = {
        ...X,
        tableLayout: "fixed",
        width: "fit-content"
    }));
    let $ = B("table"),
        ee = (0, P.$)(e, {
            global: !0
        });
    return x.createElement(o.Kq, {
        values: [
            [U, S],
            [G, J],
            [s.Ux, {
                dragAndDropHooks: L,
                dragState: u,
                dropState: d
            }],
            [s.U5, {
                render: en
            }],
            [i.Co, null],
            [i.wv, null]
        ]
    }, x.createElement(y.n1, null, x.createElement($, {
        ...(0, b.v)(ee, Z, M, K, null == f ? void 0 : f.collectionProps),
        style: X,
        ref: t,
        slot: e.slot || void 0,
        onScroll: e.onScroll,
        "data-allows-dragging": Q || void 0,
        "data-drop-target": H || void 0,
        "data-focused": z || void 0,
        "data-focus-visible": q || void 0
    }, x.createElement(c.D, null, x.createElement(D, {
        collection: S.collection,
        scrollRef: null != (l = null == A ? void 0 : A.scrollRef) ? l : t,
        persistedKeys: (0, s.XW)(k, L, d)
    })))), Y)
}

function B(e) {
    let {
        isVirtualized: t
    } = (0, x.useContext)(a.zL);
    return t ? "div" : e
}
let H = (0, x.createContext)(null);
class Y extends u.Pt {}
Y.type = "tableheader";
let W = (0, d.yq)(Y, (e, t) => {
    let n = (0, x.useContext)(U).collection,
        r = (0, f.p)({
            items: n.headerRows,
            children: (0, x.useCallback)(e => {
                if ("headerrow" === e.type) return x.createElement(K, {
                    item: e
                });
                throw Error("Unsupported node type in TableHeader: " + e.type)
            }, [])
        }),
        i = B("thead"),
        {
            rowGroupProps: a
        } = (0, O.rs)(),
        {
            hoverProps: s,
            isHovered: l
        } = (0, v.M)({
            onHoverStart: e.onHoverStart,
            onHoverChange: e.onHoverChange,
            onHoverEnd: e.onHoverEnd
        }),
        c = (0, o.Sl)({
            className: e.className,
            style: e.style,
            defaultClassName: "react-aria-TableHeader",
            values: {
                isHovered: l
            }
        });
    return x.createElement(i, {
        ...(0, b.v)((0, P.$)(e, {
            global: !0
        }), a, s),
        ...c,
        ref: t,
        "data-hovered": l || void 0
    }, r)
}, e => x.createElement(d.pM, {
    dependencies: e.dependencies,
    items: e.columns
}, e.children));

function K({
    item: e
}) {
    let t = (0, x.useRef)(null),
        n = (0, x.useContext)(U),
        {
            isVirtualized: r,
            CollectionBranch: s
        } = (0, x.useContext)(a.zL),
        {
            rowProps: l
        } = (0, A.x)({
            node: e,
            isVirtualized: r
        }, n, t),
        {
            checkboxProps: c
        } = (0, I.q)(n),
        u = B("tr");
    return x.createElement(u, {
        ...l,
        ref: t
    }, x.createElement(o.Kq, {
        values: [
            [i.BP, {
                slots: {
                    selection: c
                }
            }]
        ]
    }, x.createElement(s, {
        collection: n.collection,
        parent: e
    })))
}
class z extends u.Pt {}
z.type = "column";
let q = (0, d.KU)(z, (e, t, n) => {
        var r, i;
        let s = (0, w.U)(t),
            l = (0, x.useContext)(U),
            {
                isVirtualized: c
            } = (0, x.useContext)(a.zL),
            {
                columnHeaderProps: u
            } = (0, S.f)({
                node: n,
                isVirtualized: c
            }, l, s),
            {
                isFocused: d,
                isFocusVisible: f,
                focusProps: p
            } = (0, E.o)(),
            _ = (0, x.useContext)(G),
            h = !1;
        _ && (h = _.resizingColumn === n.key);
        let {
            hoverProps: m,
            isHovered: g
        } = (0, v.M)({
            isDisabled: !e.allowsSorting
        }), y = (0, o.Sl)({
            ...e,
            id: void 0,
            children: n.rendered,
            defaultClassName: "react-aria-Column",
            values: {
                isHovered: g,
                isFocused: d,
                isFocusVisible: f,
                allowsSorting: n.props.allowsSorting,
                sortDirection: (null == (r = l.sortDescriptor) ? void 0 : r.column) === n.key ? l.sortDescriptor.direction : void 0,
                isResizing: h,
                startResize: () => {
                    if (_) _.startResize(n.key), l.setKeyboardNavigationDisabled(!0);
                    else throw Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing")
                },
                sort: e => {
                    l.sort(n.key, e)
                }
            }
        }), O = y.style;
        _ && (O = {
            ...O,
            width: _.getColumnWidth(n.key)
        });
        let A = B("th"),
            I = (0, P.$)(e, {
                global: !0
            });
        return delete I.id, x.createElement(A, {
            ...(0, b.v)(I, u, p, m),
            ...y,
            style: O,
            ref: s,
            "data-hovered": g || void 0,
            "data-focused": d || void 0,
            "data-focus-visible": f || void 0,
            "data-resizing": h || void 0,
            "data-allows-sorting": n.props.allowsSorting || void 0,
            "data-sort-direction": (null == (i = l.sortDescriptor) ? void 0 : i.column) === n.key ? l.sortDescriptor.direction : void 0
        }, x.createElement(o.Kq, {
            values: [
                [Z, {
                    column: n,
                    triggerRef: s
                }],
                [a.zL, a.N]
            ]
        }, y.children))
    }),
    Z = (0, x.createContext)(null);
class Q extends u.ru {}
Q.type = "tablebody";
let X = (0, d.yq)(Q, (e, t) => {
    var n;
    let r, i = (0, x.useContext)(U),
        {
            isVirtualized: l
        } = (0, x.useContext)(a.zL),
        c = i.collection,
        {
            CollectionBranch: u
        } = (0, x.useContext)(a.zL),
        {
            dragAndDropHooks: d,
            dropState: f
        } = (0, x.useContext)(s.Ux),
        p = !!(null == d ? void 0 : d.useDroppableCollectionState) && !(null == f ? void 0 : f.isDisabled),
        _ = p && !!f && null != (n = f.isDropTarget({
            type: "root"
        })) && n,
        h = 0 === c.size,
        m = {
            isDropTarget: _,
            isEmpty: h
        },
        g = (0, o.Sl)({
            ...e,
            id: void 0,
            children: void 0,
            defaultClassName: "react-aria-TableBody",
            values: m
        }),
        E = B("tr"),
        y = B("td"),
        v = c.columnCount;
    if (h && e.renderEmptyState && i) {
        let t = {},
            n = {},
            i = {};
        l ? (n["aria-colspan"] = v, i = {
            display: "contents"
        }) : n.colSpan = v, r = x.createElement(E, {
            role: "row",
            ...t,
            style: i
        }, x.createElement(y, {
            role: "rowheader",
            ...n,
            style: i
        }, e.renderEmptyState(m)))
    }
    let {
        rowGroupProps: A
    } = (0, O.rs)(), I = B("tbody"), S = (0, P.$)(e, {
        global: !0
    });
    return x.createElement(I, {
        ...(0, b.v)(S, g, A),
        ref: t,
        "data-empty": h || void 0
    }, p && x.createElement(ea, null), x.createElement(u, {
        collection: c,
        parent: c.body,
        renderDropIndicator: (0, s.oC)(d, f)
    }), r)
});
class J extends u.Pt {
    filter(e, t, n) {
        for (let r of e.getChildren(this.key))
            if (n(r.textValue, r)) {
                let n = this.clone();
                return t.addDescendants(n, e), n
            } return null
    }
}
J.type = "item";
let $ = (0, d.yq)(J, (e, t, n) => {
    let c, u, d = (0, w.U)(t),
        f = (0, x.useContext)(U),
        {
            dragAndDropHooks: p,
            dragState: _,
            dropState: h
        } = (0, x.useContext)(s.Ux),
        {
            isVirtualized: m,
            CollectionBranch: g
        } = (0, x.useContext)(a.zL),
        {
            rowProps: y,
            ...O
        } = (0, T.A)({
            node: n,
            shouldSelectOnPressUp: !!_,
            isVirtualized: m
        }, f, d),
        {
            isFocused: A,
            isFocusVisible: S,
            focusProps: N
        } = (0, E.o)(),
        {
            isFocusVisible: R,
            focusProps: D
        } = (0, E.o)({
            within: !0
        }),
        {
            hoverProps: L,
            isHovered: M
        } = (0, v.M)({
            isDisabled: !O.allowsSelection && !O.hasAction,
            onHoverStart: e.onHoverStart,
            onHoverChange: e.onHoverChange,
            onHoverEnd: e.onHoverEnd
        }),
        {
            checkboxProps: j
        } = (0, I.B)({
            key: n.key
        }, f);
    _ && p && (c = p.useDraggableItem({
        key: n.key,
        hasDragButton: !0
    }, _));
    let k = (0, x.useRef)(null),
        {
            visuallyHiddenProps: G
        } = (0, C.B)();
    h && p && (u = p.useDropIndicator({
        target: {
            type: "item",
            key: n.key,
            dropPosition: "on"
        }
    }, h, k));
    let F = (0, x.useRef)(null);
    (0, x.useEffect)(() => {
        _ && F.current
    }, []);
    let V = _ && _.isDragging(n.key),
        {
            children: H,
            ...Y
        } = e,
        W = (0, o.Sl)({
            ...Y,
            id: void 0,
            defaultClassName: "react-aria-Row",
            values: {
                ...O,
                isHovered: M,
                isFocused: A,
                isFocusVisible: S,
                selectionMode: f.selectionManager.selectionMode,
                selectionBehavior: f.selectionManager.selectionBehavior,
                isDragging: V,
                isDropTarget: null == u ? void 0 : u.isDropTarget,
                isFocusVisibleWithin: R,
                id: n.key
            }
        }),
        K = B("tr"),
        z = B("td"),
        q = (0, P.$)(e, {
            global: !0
        });
    return delete q.id, delete q.onClick, x.createElement(x.Fragment, null, u && !u.isHidden && x.createElement(K, {
        role: "row",
        style: {
            height: 0
        }
    }, x.createElement(z, {
        role: "gridcell",
        colSpan: f.collection.columnCount,
        style: {
            padding: 0
        }
    }, x.createElement("div", {
        role: "button",
        ...G,
        ...u.dropIndicatorProps,
        ref: k
    }))), x.createElement(K, {
        ...(0, b.v)(q, W, y, N, L, null == c ? void 0 : c.dragProps, D),
        ref: d,
        "data-disabled": O.isDisabled || void 0,
        "data-selected": O.isSelected || void 0,
        "data-hovered": M || void 0,
        "data-focused": O.isFocused || void 0,
        "data-focus-visible": S || void 0,
        "data-pressed": O.isPressed || void 0,
        "data-dragging": V || void 0,
        "data-drop-target": (null == u ? void 0 : u.isDropTarget) || void 0,
        "data-selection-mode": "none" === f.selectionManager.selectionMode ? void 0 : f.selectionManager.selectionMode,
        "data-focus-visible-within": R || void 0
    }, x.createElement(o.Kq, {
        values: [
            [i.BP, {
                slots: {
                    [o.P_]: {},
                    selection: j
                }
            }],
            [r.k, {
                slots: {
                    [o.P_]: {},
                    drag: {
                        ...null == c ? void 0 : c.dragButtonProps,
                        ref: F,
                        style: {
                            pointerEvents: "none"
                        }
                    }
                }
            }],
            [l.r, {
                isSelected: O.isSelected
            }]
        ]
    }, x.createElement(g, {
        collection: f.collection,
        parent: n
    }))))
}, e => {
    if (null == e.id && "function" == typeof e.children) throw Error("No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.");
    let t = [e.value].concat(e.dependencies);
    return x.createElement(d.pM, {
        dependencies: t,
        items: e.columns,
        idScope: e.id
    }, e.children)
});
class ee extends u.Pt {}
ee.type = "cell";
let et = (0, d.KU)(ee, (e, t, n) => {
    let r = (0, w.U)(t),
        i = (0, x.useContext)(U),
        {
            dragState: l
        } = (0, x.useContext)(s.Ux),
        {
            isVirtualized: c
        } = (0, x.useContext)(a.zL);
    n.column = i.collection.columns[n.index];
    let {
        gridCellProps: u,
        isPressed: d
    } = (0, N.a)({
        node: n,
        shouldSelectOnPressUp: !!l,
        isVirtualized: c
    }, i, r), {
        isFocused: f,
        isFocusVisible: p,
        focusProps: _
    } = (0, E.o)(), {
        hoverProps: h,
        isHovered: m
    } = (0, v.M)({}), g = (0, o.Sl)({
        ...e,
        id: void 0,
        defaultClassName: "react-aria-Cell",
        values: {
            isFocused: f,
            isFocusVisible: p,
            isPressed: d,
            isHovered: m,
            id: n.key
        }
    }), y = B("td"), O = (0, P.$)(e, {
        global: !0
    });
    return delete O.id, x.createElement(y, {
        ...(0, b.v)(O, g, u, _, h),
        ref: r,
        "data-focused": f || void 0,
        "data-focus-visible": p || void 0,
        "data-pressed": d || void 0
    }, x.createElement(a.zL.Provider, {
        value: a.N
    }, g.children))
});

function en(e, t) {
    t = (0, w.U)(t);
    let {
        dragAndDropHooks: n,
        dropState: r
    } = (0, x.useContext)(s.Ux), i = (0, x.useRef)(null), {
        dropIndicatorProps: a,
        isHidden: o,
        isDropTarget: l
    } = n.useDropIndicator(e, r, i);
    return o ? null : x.createElement(ei, {
        ...e,
        dropIndicatorProps: a,
        isDropTarget: l,
        buttonRef: i,
        ref: t
    })
}

function er(e, t) {
    let {
        dropIndicatorProps: n,
        isDropTarget: r,
        buttonRef: i,
        ...a
    } = e, s = (0, x.useContext)(U), {
        visuallyHiddenProps: l
    } = (0, C.B)(), c = (0, o.Sl)({
        ...a,
        defaultClassName: "react-aria-DropIndicator",
        values: {
            isDropTarget: r
        }
    }), u = B("tr"), d = B("td");
    return x.createElement(u, {
        ...(0, P.$)(e, {
            global: !0
        }),
        ...c,
        role: "row",
        ref: t,
        "data-drop-target": r || void 0
    }, x.createElement(d, {
        role: "gridcell",
        colSpan: s.collection.columnCount,
        style: {
            padding: 0
        }
    }, x.createElement("div", {
        ...l,
        role: "button",
        ...n,
        ref: i
    }), c.children))
}
let ei = (0, x.forwardRef)(er);

function ea() {
    let e = (0, x.useContext)(U),
        {
            dragAndDropHooks: t,
            dropState: n
        } = (0, x.useContext)(s.Ux),
        r = (0, x.useRef)(null),
        {
            dropIndicatorProps: i
        } = t.useDropIndicator({
            target: {
                type: "root"
            }
        }, n, r),
        a = n.isDropTarget({
            type: "root"
        }),
        {
            visuallyHiddenProps: o
        } = (0, C.B)(),
        l = B("tr"),
        c = B("td");
    return !a && i["aria-hidden"] ? null : x.createElement(l, {
        role: "row",
        "aria-hidden": i["aria-hidden"],
        style: {
            height: 0
        }
    }, x.createElement(c, {
        role: "gridcell",
        colSpan: e.collection.columnCount,
        style: {
            padding: 0
        }
    }, x.createElement("div", {
        role: "button",
        ...o,
        ...i,
        ref: r
    })))
}(0, d.KU)(u.OJ, function(e, t, n) {
    let r = (0, x.useContext)(U),
        {
            isVirtualized: i
        } = (0, x.useContext)(a.zL),
        {
            isLoading: s,
            onLoadMore: l,
            scrollOffset: c,
            ...u
        } = e,
        d = r.collection.columns.length,
        f = (0, x.useRef)(null),
        p = (0, x.useMemo)(() => ({
            onLoadMore: l,
            collection: null == r ? void 0 : r.collection,
            sentinelRef: f,
            scrollOffset: c
        }), [l, c, null == r ? void 0 : r.collection]);
    (0, D.n)(p, f);
    let _ = (0, o.Sl)({
            ...u,
            id: void 0,
            children: n.rendered,
            defaultClassName: "react-aria-TableLoadingIndicator",
            values: null
        }),
        h = B("tr"),
        m = B("td"),
        g = {},
        E = {},
        y = {};
    return i ? (E["aria-colspan"] = d, y = {
        display: "contents"
    }) : E.colSpan = d, x.createElement(x.Fragment, null, x.createElement(h, {
        style: {
            height: 0
        },
        inert: (0, L.Y)(!0)
    }, x.createElement(m, {
        style: {
            padding: 0,
            border: 0
        }
    }, x.createElement("div", {
        "data-testid": "loadMoreSentinel",
        ref: f,
        style: {
            position: "relative",
            height: 1,
            width: 1
        }
    }))), s && _.children && x.createElement(h, {
        ...(0, b.v)((0, P.$)(e, {
            global: !0
        }), g),
        ..._,
        role: "row",
        ref: t
    }, x.createElement(m, {
        role: "rowheader",
        ...E,
        style: y
    }, _.children)))
})