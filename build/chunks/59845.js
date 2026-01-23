/** Chunk was on web.js **/
/** chunk id: 59845, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    GQ: () => _,
    KU: () => v,
    pM: () => T,
    yq: () => A
});
var r = n(178375),
    i = n(392223),
    a = n(183590),
    s = n(564004),
    o = n(340287),
    l = n(946020),
    c = n(64700),
    u = n(341221),
    d = n(524519);
let f = (0, c.createContext)(!1),
    p = (0, c.createContext)(null);

function _(e) {
    if ((0, c.useContext)(p)) return e.content;
    let {
        collection: t,
        document: n
    } = E(e.createCollection);
    return c.createElement(c.Fragment, null, c.createElement(s.jZ, null, c.createElement(p.Provider, {
        value: n
    }, e.content)), c.createElement(h, {
        render: e.children,
        collection: t
    }))
}

function h({
    collection: e,
    render: t
}) {
    return t(e)
}

function m(e, t, n) {
    let r = (0, u.wR)(),
        i = (0, c.useRef)(r);
    i.current = r;
    let a = (0, c.useCallback)(() => i.current ? n() : t(), [t, n]);
    return (0, d.useSyncExternalStore)(e, a)
}
let g = "function" == typeof c.useSyncExternalStore ? c.useSyncExternalStore : m;

function E(e) {
    let [t] = (0, c.useState)(() => new(0, i.yo)((null == e ? void 0 : e()) || new(0, r.Wk)));
    return {
        collection: g((0, c.useCallback)(e => t.subscribe(e), [t]), (0, c.useCallback)(() => {
            let e = t.getCollection();
            return t.isSSR && t.resetAfterSSR(), e
        }, [t]), (0, c.useCallback)(() => (t.isSSR = !0, t.getCollection()), [t])),
        document: t
    }
}
let y = (0, c.createContext)(null);

function b(e) {
    var t;
    return (t = class extends r.Pt {}).type = e, t
}

function O(e, t, n, r, i, a) {
    "string" == typeof e && (e = b(e));
    let s = (0, c.useCallback)(i => {
            null == i || i.setProps(t, n, e, r, a)
        }, [t, n, r, a, e]),
        o = (0, c.useContext)(y);
    if (o) {
        let s = o.ownerDocument.nodesByProps.get(t);
        return s || ((s = o.ownerDocument.createElement(e.type)).setProps(t, n, e, r, a), o.appendChild(s), o.ownerDocument.updateCollection(), o.ownerDocument.nodesByProps.set(t, s)), i ? c.createElement(y.Provider, {
            value: s
        }, i) : null
    }
    return c.createElement(e.type, {
        ref: s
    }, i)
}

function v(e, t) {
    let n = ({
            node: e
        }) => t(e.props, e.props.ref, e),
        r = (0, c.forwardRef)((r, i) => {
            let a = (0, c.useContext)(l.gY);
            if (!(0, c.useContext)(f)) {
                if (t.length >= 3) throw Error(t.name + " cannot be rendered outside a collection.");
                return t(r, i)
            }
            return O(e, r, i, "children" in r ? r.children : null, null, e => c.createElement(l.gY.Provider, {
                value: a
            }, c.createElement(n, {
                node: e
            })))
        });
    return r.displayName = t.name, r
}

function A(e, t, n = I) {
    let r = ({
            node: e
        }) => t(e.props, e.props.ref, e),
        i = (0, c.forwardRef)((t, i) => {
            var a;
            let s = n(t);
            return null != (a = O(e, t, i, null, s, e => c.createElement(r, {
                node: e
            }))) ? a : c.createElement(c.Fragment, null)
        });
    return i.displayName = t.name, i
}

function I(e) {
    return (0, a.p)({
        ...e,
        addIdAndValue: !0
    })
}
let S = (0, c.createContext)(null);

function T(e) {
    let t = (0, c.useContext)(S),
        n = ((null == t ? void 0 : t.dependencies) || []).concat(e.dependencies),
        r = e.idScope || (null == t ? void 0 : t.idScope),
        i = I({
            ...e,
            idScope: r,
            dependencies: n
        });
    return (0, c.useContext)(p) && (i = c.createElement(C, null, i)), t = (0, c.useMemo)(() => ({
        dependencies: n,
        idScope: r
    }), [r, ...n]), c.createElement(S.Provider, {
        value: t
    }, i)
}

function C({
    children: e
}) {
    let t = (0, c.useContext)(p),
        n = (0, c.useMemo)(() => c.createElement(p.Provider, {
            value: null
        }, c.createElement(f.Provider, {
            value: !0
        }, e)), [e]);
    return (0, u.wR)() ? c.createElement(y.Provider, {
        value: t
    }, n) : (0, o.createPortal)(n, t)
}