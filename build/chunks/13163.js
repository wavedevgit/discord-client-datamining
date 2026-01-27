/** Chunk was on web.js **/
/** chunk id: 13163, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    C7: () => x,
    N$: () => L,
    n1: () => h
});
var r = n(3388),
    i = n(241827),
    a = n(297987),
    o = n(408713),
    s = n(883768),
    l = n(621158),
    c = n(885714),
    u = n(805447),
    d = n(64700);
let f = d.createContext(null),
    p = "react-aria-focus-scope-restore",
    _ = null;

function h(e) {
    let {
        children: t,
        contain: n,
        restoreFocus: o,
        autoFocus: s
    } = e, l = (0, d.useRef)(null), c = (0, d.useRef)(null), u = (0, d.useRef)([]), {
        parentNode: h
    } = (0, d.useContext)(f) || {}, g = (0, d.useMemo)(() => new k({
        scopeRef: u
    }), [u]);
    (0, r.N)(() => {
        let e = h || U.root;
        if (U.getTreeNode(e.scopeRef) && _ && !I(_, e.scopeRef)) {
            let t = U.getTreeNode(_);
            t && (e = t)
        }
        e.addChild(g), U.addNode(g)
    }, [g, h]), (0, r.N)(() => {
        let e = U.getTreeNode(u);
        e && (e.contain = !!n)
    }, [n]), (0, r.N)(() => {
        var e;
        let t = null == (e = l.current) ? void 0 : e.nextSibling,
            n = [],
            r = e => e.stopPropagation();
        for (; t && t !== c.current;) n.push(t), t.addEventListener(p, r), t = t.nextSibling;
        return u.current = n, () => {
            for (let e of n) e.removeEventListener(p, r)
        }
    }, [t]), w(u, o, n), b(u, n), P(u, o, n), N(u, s), (0, d.useEffect)(() => {
        let e = (0, i.bq)((0, a.TW)(u.current ? u.current[0] : void 0)),
            t = null;
        if (v(e, u.current)) {
            for (let n of U.traverse()) n.scopeRef && v(e, n.scopeRef.current) && (t = n);
            t === U.getTreeNode(u) && (_ = t.scopeRef)
        }
    }, [u]), (0, r.N)(() => () => {
        var e, t, n;
        let r = null != (n = null == (t = U.getTreeNode(u)) || null == (e = t.parent) ? void 0 : e.scopeRef) ? n : null;
        (u === _ || I(u, _)) && (!r || U.getTreeNode(r)) && (_ = r), U.removeTreeNode(u)
    }, [u]);
    let E = (0, d.useMemo)(() => m(u), []),
        y = (0, d.useMemo)(() => ({
            focusManager: E,
            parentNode: g
        }), [g, E]);
    return d.createElement(f.Provider, {
        value: y
    }, d.createElement("span", {
        "data-focus-scope-start": !0,
        hidden: !0,
        ref: l
    }), t, d.createElement("span", {
        "data-focus-scope-end": !0,
        hidden: !0,
        ref: c
    }))
}

function m(e) {
    return {
        focusNext(t = {}) {
            var n;
            let r = e.current,
                {
                    from: o,
                    tabbable: s,
                    wrap: l,
                    accept: c
                } = t,
                u = o || (0, i.bq)((0, a.TW)(null != (n = r[0]) ? n : void 0)),
                d = r[0].previousElementSibling,
                f = L(g(r), {
                    tabbable: s,
                    accept: c
                }, r);
            f.currentNode = v(u, r) ? u : d;
            let p = f.nextNode();
            return !p && l && (f.currentNode = d, p = f.nextNode()), p && S(p, !0), p
        },
        focusPrevious(t = {}) {
            var n;
            let r = e.current,
                {
                    from: o,
                    tabbable: s,
                    wrap: l,
                    accept: c
                } = t,
                u = o || (0, i.bq)((0, a.TW)(null != (n = r[0]) ? n : void 0)),
                d = r[r.length - 1].nextElementSibling,
                f = L(g(r), {
                    tabbable: s,
                    accept: c
                }, r);
            f.currentNode = v(u, r) ? u : d;
            let p = f.previousNode();
            return !p && l && (f.currentNode = d, p = f.previousNode()), p && S(p, !0), p
        },
        focusFirst(t = {}) {
            let n = e.current,
                {
                    tabbable: r,
                    accept: i
                } = t,
                a = L(g(n), {
                    tabbable: r,
                    accept: i
                }, n);
            a.currentNode = n[0].previousElementSibling;
            let o = a.nextNode();
            return o && S(o, !0), o
        },
        focusLast(t = {}) {
            let n = e.current,
                {
                    tabbable: r,
                    accept: i
                } = t,
                a = L(g(n), {
                    tabbable: r,
                    accept: i
                }, n);
            a.currentNode = n[n.length - 1].nextElementSibling;
            let o = a.previousNode();
            return o && S(o, !0), o
        }
    }
}

function g(e) {
    return e[0].parentElement
}

function E(e) {
    let t = U.getTreeNode(_);
    for (; t && t.scopeRef !== e;) {
        if (t.contain) return !1;
        t = t.parent
    }
    return !0
}

function y(e) {
    if (e.checked) return !0;
    let t = [];
    if (e.form) {
        var n, r;
        let i = null == (r = e.form) || null == (n = r.elements) ? void 0 : n.namedItem(e.name);
        t = [...null != i ? i : []]
    } else t = [...(0, a.TW)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(e => !e.form);
    return !!t && !t.some(e => e.checked)
}

function b(e, t) {
    let n = (0, d.useRef)(void 0),
        s = (0, d.useRef)(void 0);
    (0, r.N)(() => {
        let r = e.current;
        if (!t) {
            s.current && (cancelAnimationFrame(s.current), s.current = void 0);
            return
        }
        let l = (0, a.TW)(r ? r[0] : void 0),
            u = t => {
                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !E(e) || t.isComposing) return;
                let n = (0, i.bq)(l),
                    r = e.current;
                if (!r || !v(n, r)) return;
                let a = L(g(r), {
                    tabbable: !0
                }, r);
                if (!n) return;
                a.currentNode = n;
                let o = t.shiftKey ? a.previousNode() : a.nextNode();
                o || (a.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling, o = t.shiftKey ? a.previousNode() : a.nextNode()), t.preventDefault(), o && S(o, !0)
            },
            d = t => {
                (!_ || I(_, e)) && v((0, i.wt)(t), e.current) ? (_ = e, n.current = (0, i.wt)(t)) : E(e) && !A((0, i.wt)(t), e) ? n.current ? n.current.focus() : _ && _.current && C(_.current) : E(e) && (n.current = (0, i.wt)(t))
            },
            f = t => {
                s.current && cancelAnimationFrame(s.current), s.current = requestAnimationFrame(() => {
                    let r = (0, c.ME)(),
                        a = ("virtual" === r || null === r) && (0, o.m0)() && (0, o.H8)(),
                        s = (0, i.bq)(l);
                    if (!a && s && E(e) && !A(s, e)) {
                        _ = e;
                        let r = (0, i.wt)(t);
                        if (r && r.isConnected) {
                            var u;
                            n.current = r, null == (u = n.current) || u.focus()
                        } else _.current && C(_.current)
                    }
                })
            };
        return l.addEventListener("keydown", u, !1), l.addEventListener("focusin", d, !1), null == r || r.forEach(e => e.addEventListener("focusin", d, !1)), null == r || r.forEach(e => e.addEventListener("focusout", f, !1)), () => {
            l.removeEventListener("keydown", u, !1), l.removeEventListener("focusin", d, !1), null == r || r.forEach(e => e.removeEventListener("focusin", d, !1)), null == r || r.forEach(e => e.removeEventListener("focusout", f, !1))
        }
    }, [e, t]), (0, r.N)(() => () => {
        s.current && cancelAnimationFrame(s.current)
    }, [s])
}

function O(e) {
    return A(e)
}

function v(e, t) {
    return !!e && !!t && t.some(t => t.contains(e))
}

function A(e, t = null) {
    if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
    for (let {
            scopeRef: n
        }
        of U.traverse(U.getTreeNode(t)))
        if (n && v(e, n.current)) return !0;
    return !1
}

function I(e, t) {
    var n;
    let r = null == (n = U.getTreeNode(t)) ? void 0 : n.parent;
    for (; r;) {
        if (r.scopeRef === e) return !0;
        r = r.parent
    }
    return !1
}

function S(e, t = !1) {
    if (null == e || t) {
        if (null != e) try {
            e.focus()
        } catch {}
    } else try {
        (0, u.l)(e)
    } catch {}
}

function T(e, t = !0) {
    let n = e[0].previousElementSibling,
        r = g(e),
        i = L(r, {
            tabbable: t
        }, e);
    i.currentNode = n;
    let a = i.nextNode();
    return t && !a && ((i = L(r = g(e), {
        tabbable: !1
    }, e)).currentNode = n, a = i.nextNode()), a
}

function C(e, t = !0) {
    S(T(e, t))
}

function N(e, t) {
    let n = d.useRef(t);
    (0, d.useEffect)(() => {
        if (n.current) {
            _ = e;
            let t = (0, a.TW)(e.current ? e.current[0] : void 0);
            !v((0, i.bq)(t), _.current) && e.current && C(e.current)
        }
        n.current = !1
    }, [e])
}

function w(e, t, n) {
    (0, r.N)(() => {
        if (t || n) return;
        let r = e.current,
            o = (0, a.TW)(r ? r[0] : void 0),
            s = t => {
                let n = (0, i.wt)(t);
                v(n, e.current) ? _ = e : O(n) || (_ = null)
            };
        return o.addEventListener("focusin", s, !1), null == r || r.forEach(e => e.addEventListener("focusin", s, !1)), () => {
            o.removeEventListener("focusin", s, !1), null == r || r.forEach(e => e.removeEventListener("focusin", s, !1))
        }
    }, [e, t, n])
}

function R(e) {
    let t = U.getTreeNode(_);
    for (; t && t.scopeRef !== e;) {
        if (t.nodeToRestore) return !1;
        t = t.parent
    }
    return (null == t ? void 0 : t.scopeRef) === e
}

function P(e, t, n) {
    let o = (0, d.useRef)("u" > typeof document ? (0, i.bq)((0, a.TW)(e.current ? e.current[0] : void 0)) : null);
    (0, r.N)(() => {
        let r = e.current,
            o = (0, a.TW)(r ? r[0] : void 0);
        if (!t || n) return;
        let s = () => {
            (!_ || I(_, e)) && v((0, i.bq)(o), e.current) && (_ = e)
        };
        return o.addEventListener("focusin", s, !1), null == r || r.forEach(e => e.addEventListener("focusin", s, !1)), () => {
            o.removeEventListener("focusin", s, !1), null == r || r.forEach(e => e.removeEventListener("focusin", s, !1))
        }
    }, [e, n]), (0, r.N)(() => {
        let r = (0, a.TW)(e.current ? e.current[0] : void 0);
        if (!t) return;
        let i = t => {
            if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !E(e) || t.isComposing) return;
            let n = r.activeElement;
            if (!A(n, e) || !R(e)) return;
            let i = U.getTreeNode(e);
            if (!i) return;
            let a = i.nodeToRestore,
                o = L(r.body, {
                    tabbable: !0
                });
            o.currentNode = n;
            let s = t.shiftKey ? o.previousNode() : o.nextNode();
            if (a && a.isConnected && a !== r.body || (a = void 0, i.nodeToRestore = void 0), (!s || !A(s, e)) && a) {
                o.currentNode = a;
                do s = t.shiftKey ? o.previousNode() : o.nextNode(); while (A(s, e));
                t.preventDefault(), t.stopPropagation(), s ? S(s, !0) : O(a) ? S(a, !0) : n.blur()
            }
        };
        return n || r.addEventListener("keydown", i, !0), () => {
            n || r.removeEventListener("keydown", i, !0)
        }
    }, [e, t, n]), (0, r.N)(() => {
        var n;
        let r = (0, a.TW)(e.current ? e.current[0] : void 0);
        if (!t) return;
        let s = U.getTreeNode(e);
        if (s) return s.nodeToRestore = null != (n = o.current) ? n : void 0, () => {
            let n = U.getTreeNode(e);
            if (!n) return;
            let a = n.nodeToRestore,
                o = (0, i.bq)(r);
            if (t && a && (o && A(o, e) || o === r.body && R(e))) {
                let t = U.clone();
                requestAnimationFrame(() => {
                    if (r.activeElement === r.body) {
                        let n = t.getTreeNode(e);
                        for (; n;) {
                            if (n.nodeToRestore && n.nodeToRestore.isConnected) return void D(n.nodeToRestore);
                            n = n.parent
                        }
                        for (n = t.getTreeNode(e); n;) {
                            if (n.scopeRef && n.scopeRef.current && U.getTreeNode(n.scopeRef)) return void D(T(n.scopeRef.current, !0));
                            n = n.parent
                        }
                    }
                })
            }
        }
    }, [e, t])
}

function D(e) {
    e.dispatchEvent(new CustomEvent(p, {
        bubbles: !0,
        cancelable: !0
    })) && S(e)
}

function L(e, t, n) {
    let r = (null == t ? void 0 : t.tabbable) ? s.A : s.t,
        i = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
        o = (0, a.TW)(i),
        c = (0, l.H)(o, e || o, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
                var i;
                return (null == t || null == (i = t.from) ? void 0 : i.contains(e)) || (null == t ? void 0 : t.tabbable) && "INPUT" === e.tagName && "radio" === e.getAttribute("type") && (!y(e) || "INPUT" === c.currentNode.tagName && "radio" === c.currentNode.type && c.currentNode.name === e.name) ? NodeFilter.FILTER_REJECT : r(e) && (!n || v(e, n)) && (!(null == t ? void 0 : t.accept) || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    return (null == t ? void 0 : t.from) && (c.currentNode = t.from), c
}

function x(e, t = {}) {
    return {
        focusNext(n = {}) {
            let r = e.current;
            if (!r) return null;
            let {
                from: o,
                tabbable: s = t.tabbable,
                wrap: l = t.wrap,
                accept: c = t.accept
            } = n, u = o || (0, i.bq)((0, a.TW)(r)), d = L(r, {
                tabbable: s,
                accept: c
            });
            r.contains(u) && (d.currentNode = u);
            let f = d.nextNode();
            return !f && l && (d.currentNode = r, f = d.nextNode()), f && S(f, !0), f
        },
        focusPrevious(n = t) {
            let r = e.current;
            if (!r) return null;
            let {
                from: o,
                tabbable: s = t.tabbable,
                wrap: l = t.wrap,
                accept: c = t.accept
            } = n, u = o || (0, i.bq)((0, a.TW)(r)), d = L(r, {
                tabbable: s,
                accept: c
            });
            if (r.contains(u)) d.currentNode = u;
            else {
                let e = M(d);
                return e && S(e, !0), null != e ? e : null
            }
            let f = d.previousNode();
            if (!f && l) {
                d.currentNode = r;
                let e = M(d);
                if (!e) return null;
                f = e
            }
            return f && S(f, !0), null != f ? f : null
        },
        focusFirst(n = t) {
            let r = e.current;
            if (!r) return null;
            let {
                tabbable: i = t.tabbable,
                accept: a = t.accept
            } = n, o = L(r, {
                tabbable: i,
                accept: a
            }).nextNode();
            return o && S(o, !0), o
        },
        focusLast(n = t) {
            let r = e.current;
            if (!r) return null;
            let {
                tabbable: i = t.tabbable,
                accept: a = t.accept
            } = n, o = M(L(r, {
                tabbable: i,
                accept: a
            }));
            return o && S(o, !0), null != o ? o : null
        }
    }
}

function M(e) {
    let t, n;
    do(t = e.lastChild()) && (n = t); while (t);
    return n
}
class j {
    get size() {
        return this.fastMap.size
    }
    getTreeNode(e) {
        return this.fastMap.get(e)
    }
    addTreeNode(e, t, n) {
        let r = this.fastMap.get(null != t ? t : null);
        if (!r) return;
        let i = new k({
            scopeRef: e
        });
        r.addChild(i), i.parent = r, this.fastMap.set(e, i), n && (i.nodeToRestore = n)
    }
    addNode(e) {
        this.fastMap.set(e.scopeRef, e)
    }
    removeTreeNode(e) {
        if (null === e) return;
        let t = this.fastMap.get(e);
        if (!t) return;
        let n = t.parent;
        for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && v(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
        let r = t.children;
        n && (n.removeChild(t), r.size > 0 && r.forEach(e => n && n.addChild(e))), this.fastMap.delete(t.scopeRef)
    }* traverse(e = this.root) {
        if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
    }
    clone() {
        var e, t;
        let n = new j;
        for (let r of this.traverse()) n.addTreeNode(r.scopeRef, null != (t = null == (e = r.parent) ? void 0 : e.scopeRef) ? t : null, r.nodeToRestore);
        return n
    }
    constructor() {
        this.fastMap = new Map, this.root = new k({
            scopeRef: null
        }), this.fastMap.set(null, this.root)
    }
}
class k {
    addChild(e) {
        this.children.add(e), e.parent = this
    }
    removeChild(e) {
        this.children.delete(e), e.parent = void 0
    }
    constructor(e) {
        this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
    }
}
let U = new j