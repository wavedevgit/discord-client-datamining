/** chunk id: 667889, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => R
});
var r = n(627968),
    i = n(64700),
    a = n(621466),
    o = n(192308),
    s = n(397927),
    l = n(315246),
    c = n(750506),
    u = n(267102),
    d = n(712687),
    f = n(203982),
    p = n(211401),
    _ = n(500049),
    h = n(7691),
    m = n(699803),
    g = n(60809),
    E = n(652215),
    y = n(732139),
    b = n(985018),
    O = n(775269);

function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            v(e, t, n[t])
        })
    }
    return e
}

function I(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = S(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function S(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let T = {
    height: g.$V
};

function C(e) {
    let {
        positionTargetRef: t,
        align: n
    } = e, i = I(e, ["positionTargetRef", "align"]);
    return (0, r.jsx)("span", {
        style: g.sK,
        children: (0, r.jsx)(c.nE, {
            className: O.T,
            targetRef: t,
            position: "top",
            align: null != n ? n : "right",
            spacing: 24,
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            clickTrap: !0,
            children: e => {
                let {
                    isPositioned: t
                } = e;
                return (0, r.jsx)("section", {
                    className: O.V,
                    role: "dialog",
                    style: T,
                    "aria-label": b.intl.string(b.t["3CNGLK"]),
                    children: t && (0, r.jsx)(w, A({}, i))
                })
            }
        })
    })
}

function N() {
    p.k(_.Se.DISMISSED)
}

function w(e) {
    let {
        channel: t,
        closeOnModalOuterClick: n = !1,
        parentModalKey: c
    } = e, p = i.useRef(null), {
        renderWindow: b,
        windowDispatch: O
    } = i.useContext(u.Ay), v = null != c, A = (0, o.useIsModalAtTop)(null != c ? c : ""), I = i.useCallback(e => {
        var t;
        if (!v && (0, o.hasAnyModalOpen)() || v && !(A && n) || d.A.isOpen() || e.defaultPrevented) return;
        let {
            target: r
        } = e;
        if ((0, a.vq)(r) && null != r.closest("." + g.Wx)) return;
        for (;
            (0, a.vq)(r);) {
            if (r === p.current) return;
            if (r.classList.contains(g.KG) || r.classList.contains(g.Gu)) return void e.preventDefault();
            if (r.classList.contains(g.qp)) return;
            let t = [y.Do, l.n];
            if (r.classList.contains(g.TY) || t.includes(r.id)) return;
            r = r.parentNode
        }
        N();
        let i = null == (t = (0, a.BF)(e)) ? void 0 : t.activeElement;
        (null == i || "BODY" === i.tagName) && f._.dispatchToLastSubscribed(E.jej.TEXTAREA_FOCUS)
    }, [n, A, v]);
    i.useLayoutEffect(() => (b.addEventListener("mousedown", I), b.addEventListener("contextmenu", I), O.subscribe(E.jej.POPOUT_CLOSE, N), () => {
        b.removeEventListener("mousedown", I), b.removeEventListener("contextmenu", I), O.unsubscribe(E.jej.POPOUT_CLOSE, N)
    }), [I, b, O]), (0, s.tjt)(p), i.useEffect(() => {
        (!v && (0, o.hasAnyModalOpen)() || v && !A) && N()
    }, [A, v]);
    let S = (0, m.A)();
    return (0, r.jsx)(h.A, {
        ref: p,
        context: {
            channel: t,
            type: "channel"
        },
        entrypoint: _.s4.TEXT,
        initHistory: S
    })
}
let R = i.memo(C)