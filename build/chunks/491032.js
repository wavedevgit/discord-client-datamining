/** Chunk was on 47841 **/
/** chunk id: 491032, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(878701),
    a = n(754513),
    o = n(985018),
    c = n(410478);

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function u(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function g(e) {
    var t;
    let {
        rule: n,
        onChangeRule: g,
        collapsed: m = !1
    } = e, [p, f] = i.useState(!m), b = i.useCallback(() => {
        f(!p)
    }, [p, f]), h = i.useCallback(e => {
        g(u(d({}, n), {
            triggerMetadata: u(d({}, n.triggerMetadata), {
                regexPatterns: e
            })
        }))
    }, [g, n]);
    return (0, s.u)(n.triggerType) ? (0, r.jsx)(l.Nt8, {
        isExpanded: p,
        collapsibleContent: (0, r.jsx)(a.A, {
            rule: n,
            onChangeText: h,
            className: c.kS,
            initialValue: null == (t = n.triggerMetadata) ? void 0 : t.regexPatterns
        }),
        className: c.uR,
        children: e => {
            let {
                onClick: t
            } = e;
            return (0, r.jsx)(l.DUT, {
                onClick: e => {
                    b(), t(e)
                },
                children: (0, r.jsxs)("div", {
                    className: c.wx,
                    children: [(0, r.jsx)(l.Heading, {
                        variant: "text-sm/medium",
                        children: o.intl.string(o.t["dnunm+"])
                    }), p ? (0, r.jsx)(l.tN5, {
                        size: "md",
                        color: "currentColor",
                        className: c.UE
                    }) : (0, r.jsx)(l.abt, {
                        size: "md",
                        color: "currentColor",
                        className: c.UE
                    })]
                })
            })
        }
    }) : null
}