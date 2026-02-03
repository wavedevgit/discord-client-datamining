/** chunk id: 564949, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    y: () => v
});
var r = n(869795),
    i = n(292841),
    a = n(132716),
    o = n(2799),
    s = n(401705),
    l = n(248215),
    c = n(400606),
    u = n(827211),
    d = n(959462),
    f = n(241827),
    p = n(862535),
    _ = n(803082),
    h = n(13163),
    m = n(862836),
    g = n(340287),
    E = n(64700),
    y = n(885714),
    b = n(805447),
    O = n(853590);

function v(e) {
    let t, {
            selectionManager: n,
            keyboardDelegate: v,
            ref: A,
            autoFocus: I = !1,
            shouldFocusWrap: S = !1,
            disallowEmptySelection: T = !1,
            disallowSelectAll: C = !1,
            escapeKeyBehavior: N = "clearSelection",
            selectOnFocus: w = "replace" === n.selectionBehavior,
            disallowTypeAhead: R = !1,
            shouldUseVirtualFocus: P,
            allowsTabNavigation: D = !1,
            isVirtualized: L,
            scrollRef: x = A,
            linkBehavior: M = "action"
        } = e,
        {
            direction: j
        } = (0, O.Y)(),
        k = (0, a.rd)(),
        U = e => {
            var t, i, a, l, c, u, d, f, p, _, m, E, y;
            if (e.altKey && "Tab" === e.key && e.preventDefault(), !(null == (t = A.current) ? void 0 : t.contains(e.target))) return;
            let b = (t, i) => {
                if (null != t) {
                    if (n.isLink(t) && "selection" === M && w && !(0, r.N9)(e)) {
                        (0, g.flushSync)(() => {
                            n.setFocusedKey(t, i)
                        });
                        let a = (0, r.au)(A, t),
                            o = n.getItemProps(t);
                        a && k.open(a, e, o.href, o.routerOptions);
                        return
                    }
                    n.setFocusedKey(t, i), n.isLink(t) && "override" === M || (e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : w && !(0, r.N9)(e) && n.replaceSelection(t))
                }
            };
            switch (e.key) {
                case "ArrowDown":
                    if (v.getKeyBelow) {
                        let t = null != n.focusedKey ? null == (i = v.getKeyBelow) ? void 0 : i.call(v, n.focusedKey) : null == (a = v.getFirstKey) ? void 0 : a.call(v);
                        null == t && S && (t = null == (l = v.getFirstKey) ? void 0 : l.call(v, n.focusedKey)), null != t && (e.preventDefault(), b(t))
                    }
                    break;
                case "ArrowUp":
                    if (v.getKeyAbove) {
                        let t = null != n.focusedKey ? null == (c = v.getKeyAbove) ? void 0 : c.call(v, n.focusedKey) : null == (u = v.getLastKey) ? void 0 : u.call(v);
                        null == t && S && (t = null == (d = v.getLastKey) ? void 0 : d.call(v, n.focusedKey)), null != t && (e.preventDefault(), b(t))
                    }
                    break;
                case "ArrowLeft":
                    if (v.getKeyLeftOf) {
                        let t = null != n.focusedKey ? null == (f = v.getKeyLeftOf) ? void 0 : f.call(v, n.focusedKey) : null;
                        null == t && S && (t = "rtl" === j ? null == (p = v.getFirstKey) ? void 0 : p.call(v, n.focusedKey) : null == (_ = v.getLastKey) ? void 0 : _.call(v, n.focusedKey)), null != t && (e.preventDefault(), b(t, "rtl" === j ? "first" : "last"))
                    }
                    break;
                case "ArrowRight":
                    if (v.getKeyRightOf) {
                        let t = null != n.focusedKey ? null == (m = v.getKeyRightOf) ? void 0 : m.call(v, n.focusedKey) : null;
                        null == t && S && (t = "rtl" === j ? null == (E = v.getLastKey) ? void 0 : E.call(v, n.focusedKey) : null == (y = v.getFirstKey) ? void 0 : y.call(v, n.focusedKey)), null != t && (e.preventDefault(), b(t, "rtl" === j ? "last" : "first"))
                    }
                    break;
                case "Home":
                    if (v.getFirstKey) {
                        if (null === n.focusedKey && e.shiftKey) return;
                        e.preventDefault();
                        let t = v.getFirstKey(n.focusedKey, (0, o.B)(e));
                        n.setFocusedKey(t), null != t && ((0, o.B)(e) && e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : w && n.replaceSelection(t))
                    }
                    break;
                case "End":
                    if (v.getLastKey) {
                        if (null === n.focusedKey && e.shiftKey) return;
                        e.preventDefault();
                        let t = v.getLastKey(n.focusedKey, (0, o.B)(e));
                        n.setFocusedKey(t), null != t && ((0, o.B)(e) && e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : w && n.replaceSelection(t))
                    }
                    break;
                case "PageDown":
                    if (v.getKeyPageBelow && null != n.focusedKey) {
                        let t = v.getKeyPageBelow(n.focusedKey);
                        null != t && (e.preventDefault(), b(t))
                    }
                    break;
                case "PageUp":
                    if (v.getKeyPageAbove && null != n.focusedKey) {
                        let t = v.getKeyPageAbove(n.focusedKey);
                        null != t && (e.preventDefault(), b(t))
                    }
                    break;
                case "a":
                    (0, o.B)(e) && "multiple" === n.selectionMode && !0 !== C && (e.preventDefault(), n.selectAll());
                    break;
                case "Escape":
                    "clearSelection" !== N || T || 0 === n.selectedKeys.size || (e.stopPropagation(), e.preventDefault(), n.clearSelection());
                    break;
                case "Tab":
                    if (!D)
                        if (e.shiftKey) A.current.focus();
                        else {
                            let e, t, n = (0, h.N$)(A.current, {
                                tabbable: !0
                            });
                            do(t = n.lastChild()) && (e = t); while (t);
                            e && !e.contains(document.activeElement) && (0, s.e)(e)
                        }
            }
        },
        G = (0, E.useRef)({
            top: 0,
            left: 0
        });
    (0, l._)(x, "scroll", L ? void 0 : () => {
        var e, t, n, r;
        G.current = {
            top: null != (n = null == (e = x.current) ? void 0 : e.scrollTop) ? n : 0,
            left: null != (r = null == (t = x.current) ? void 0 : t.scrollLeft) ? r : 0
        }
    });
    let F = e => {
            if (n.isFocused) {
                e.currentTarget.contains(e.target) || n.setFocused(!1);
                return
            }
            if (e.currentTarget.contains(e.target)) {
                if (n.setFocused(!0), null == n.focusedKey) {
                    var t, i, a, o;
                    let r = e => {
                            null != e && (n.setFocusedKey(e), w && !n.isSelected(e) && n.replaceSelection(e))
                        },
                        s = e.relatedTarget;
                    s && e.currentTarget.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING ? r(null != (a = n.lastSelectedKey) ? a : null == (t = v.getLastKey) ? void 0 : t.call(v)) : r(null != (o = n.firstSelectedKey) ? o : null == (i = v.getFirstKey) ? void 0 : i.call(v))
                } else !L && x.current && (x.current.scrollTop = G.current.top, x.current.scrollLeft = G.current.left);
                if (null != n.focusedKey && x.current) {
                    let e = (0, r.au)(A, n.focusedKey);
                    e instanceof HTMLElement && (e.contains(document.activeElement) || P || (0, s.e)(e), "keyboard" === (0, y.ME)() && (0, c.o)(e, {
                        containingElement: A.current
                    }))
                }
            }
        },
        V = e => {
            e.currentTarget.contains(e.relatedTarget) || n.setFocused(!1)
        },
        B = (0, E.useRef)(!1);
    (0, l._)(A, u.C, P ? e => {
        let {
            detail: t
        } = e;
        e.stopPropagation(), n.setFocused(!0), (null == t ? void 0 : t.focusStrategy) === "first" && (B.current = !0)
    } : void 0);
    let H = (0, d.J)(() => {
        var e, t;
        let r = null != (t = null == (e = v.getFirstKey) ? void 0 : e.call(v)) ? t : null;
        if (null == r) {
            let e = (0, f.bq)();
            (0, m.vX)(A.current), (0, m.Ig)(e, null), n.collection.size > 0 && (B.current = !1)
        } else n.setFocusedKey(r), B.current = !1
    });
    (0, p.K)(() => {
        B.current && H()
    }, [n.collection, H]);
    let Y = (0, d.J)(() => {
        n.collection.size > 0 && (B.current = !1)
    });
    (0, p.K)(() => {
        Y()
    }, [n.focusedKey, Y]), (0, l._)(A, u.m, P ? e => {
        var t;
        e.stopPropagation(), n.setFocused(!1), (null == (t = e.detail) ? void 0 : t.clearFocusKey) && n.setFocusedKey(null)
    } : void 0);
    let W = (0, E.useRef)(I),
        K = (0, E.useRef)(!1);
    (0, E.useEffect)(() => {
        if (W.current) {
            var e, t, r, i;
            let a = null;
            "first" === I && (a = null != (r = null == (e = v.getFirstKey) ? void 0 : e.call(v)) ? r : null), "last" === I && (a = null != (i = null == (t = v.getLastKey) ? void 0 : t.call(v)) ? i : null);
            let o = n.selectedKeys;
            if (o.size) {
                for (let e of o)
                    if (n.canSelectItem(e)) {
                        a = e;
                        break
                    }
            }
            n.setFocused(!0), n.setFocusedKey(a), null == a && !P && A.current && (0, b.l)(A.current), n.collection.size > 0 && (W.current = !1, K.current = !0)
        }
    });
    let z = (0, E.useRef)(n.focusedKey),
        q = (0, E.useRef)(null);
    (0, E.useEffect)(() => {
        if (n.isFocused && null != n.focusedKey && (n.focusedKey !== z.current || K.current) && x.current && A.current) {
            let e = (0, y.ME)(),
                t = (0, r.au)(A, n.focusedKey);
            if (!(t instanceof HTMLElement)) return;
            ("keyboard" === e || K.current) && (q.current && cancelAnimationFrame(q.current), q.current = requestAnimationFrame(() => {
                x.current && ((0, c.R)(x.current, t), "virtual" !== e && (0, c.o)(t, {
                    containingElement: A.current
                }))
            }))
        }!P && n.isFocused && null == n.focusedKey && null != z.current && A.current && (0, b.l)(A.current), z.current = n.focusedKey, K.current = !1
    }), (0, E.useEffect)(() => () => {
        q.current && cancelAnimationFrame(q.current)
    }, []), (0, l._)(A, "react-aria-focus-scope-restore", e => {
        e.preventDefault(), n.setFocused(!0)
    });
    let Z = {
            onKeyDown: U,
            onFocus: F,
            onBlur: V,
            onMouseDown(e) {
                x.current === e.target && e.preventDefault()
            }
        },
        {
            typeSelectProps: Q
        } = (0, i.I)({
            keyboardDelegate: v,
            selectionManager: n
        });
    R || (Z = (0, _.v)(Q, Z)), P || (t = null == n.focusedKey ? 0 : -1);
    let X = (0, r.j5)(n.collection);
    return {
        collectionProps: (0, _.v)(Z, {
            tabIndex: t,
            "data-collection": X
        })
    }
}