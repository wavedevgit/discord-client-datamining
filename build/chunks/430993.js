/** chunk id: 430993, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    c: () => O,
    y: () => y
}), n(896048), n(65821);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(879378),
    l = n.n(s),
    c = n(612324),
    u = n(707554),
    d = n(475825),
    f = n(599319),
    p = n(834730),
    _ = n(22789);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            h(e, t, n[t])
        })
    }
    return e
}

function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function E(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function y(e) {
    return i.Children.toArray(e).filter(Boolean).length > 0
}

function b(e) {
    return "string" == typeof e ? (0, r.jsx)(p.E, {
        variant: "text-md/normal",
        color: "text-subtle",
        children: e
    }) : e
}

function O(e) {
    let {
        controls: t,
        children: n,
        listProps: i,
        onScroll: a,
        scrollerRef: o
    } = e;
    if (!y(n) && null == t && null == i) return null;
    let s = b(n);
    return (0, r.jsx)(v, {
        controls: t,
        children: s,
        listProps: i,
        onScroll: a,
        scrollerRef: o
    })
}

function v(e) {
    var t, n;
    let {
        controls: a,
        children: s,
        listProps: p,
        onScroll: h,
        scrollerRef: g
    } = e, [y, b] = i.useState(!1), [O, v] = i.useState(null != p), A = i.useRef(null), I = (0, c.A)(A, null == p ? void 0 : p.ref, g), S = i.useRef(null), T = i.useRef(void 0);
    i.useEffect(() => (T.current = l()(() => {
        var e;
        (null == A ? void 0 : A.current) != null && null != a && b((null == (e = A.current) ? void 0 : e.getDistanceFromTop()) > 12)
    }, 200), () => {
        var e;
        null == (e = T.current) || e.cancel()
    }), [a]);
    let C = i.useCallback(() => {
            null != T.current && T.current(), null != h && h()
        }, [T, h]),
        N = null != p;
    return i.useLayoutEffect(() => {
        var e, t;
        let n = new ResizeObserver(() => {
                var e, t;
                if (N) return void v(!0);
                let n = null != (e = null == A || null == (t = A.current) ? void 0 : t.getScrollerNode()) ? e : null;
                if (null == n || (null == S ? void 0 : S.current) == null) return;
                let r = n.getBoundingClientRect();
                v(S.current.getBoundingClientRect().height > r.height)
            }),
            r = null != (e = null == A || null == (t = A.current) ? void 0 : t.getScrollerNode()) ? e : null;
        return null != r && n.observe(r), (null == S ? void 0 : S.current) != null && n.observe(S.current), () => n.disconnect()
    }, [N]), (0, r.jsxs)(u.F, {
        children: [(0, r.jsx)("div", {
            className: o()(_.bodySpacerTop, {
                [_.bodySpacerTopBorder]: O && null == a
            })
        }), null != a && (0, r.jsx)("header", {
            className: o()(_.bodyControls, {
                [_.bodyControlsWithFade]: y
            }),
            children: a
        }), null != p ? (0, r.jsx)(d.Ei, E(m({}, p), {
            className: _.bodyList,
            innerAriaOrientation: null != (t = p.innerAriaOrientation) ? t : "vertical",
            innerRole: null != (n = p.innerRole) ? n : "listbox",
            ref: I,
            onScroll: e => {
                var t;
                C(), null == (t = p.onScroll) || t.call(p, e)
            }
        })) : (0, r.jsx)(f.Gt, {
            ref: I,
            className: _.body,
            onScroll: C,
            disableFocusRingScope: !0,
            children: (0, r.jsx)("main", {
                ref: S,
                className: o()(_.bodyInner, {
                    [_.bodyInnerShouldScroll]: O
                }),
                children: s
            })
        }), (0, r.jsx)("div", {
            className: o()(_.bodySpacerBottom, {
                [_.bodySpacerBottomBorder]: O
            })
        })]
    })
}