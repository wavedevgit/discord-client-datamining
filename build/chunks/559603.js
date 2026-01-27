/** Chunk was on 39048 **/
/** chunk id: 559603, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(627968),
    i = n(64700),
    l = n(858229),
    s = n(99787),
    a = n(491032),
    o = n(391958),
    c = n(255354),
    d = n(957300),
    u = n(378427),
    g = n(411335),
    m = n(985018),
    p = n(578551);

function f(e) {
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

function h(e, t) {
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

function b(e) {
    var t, n, b, x, j, _;
    let {
        rule: O,
        onChangeRule: v
    } = e, y = i.useCallback(e => {
        v(h(f({}, O), {
            triggerMetadata: h(f({}, O.triggerMetadata), {
                keywordFilter: e
            })
        }))
    }, [v, O]), A = i.useCallback(e => {
        v(h(f({}, O), {
            triggerMetadata: h(f({}, O.triggerMetadata), {
                allowList: e
            })
        }))
    }, [v, O]);
    return (0, r.jsxs)("div", {
        className: p.sp,
        children: [(0, r.jsxs)(d.A, {
            step: 1,
            header: m.intl.string(m.t["ue+tnb"]),
            children: [(0, r.jsx)(o.A, {
                onChangeText: y,
                maxWordCount: g.bV,
                initialValue: null == (t = O.triggerMetadata) ? void 0 : t.keywordFilter
            }), (0, r.jsx)(a.A, {
                rule: O,
                onChangeRule: v,
                collapsed: (null == O || null == (n = O.triggerMetadata) ? void 0 : n.regexPatterns) == null || (null == O || null == (b = O.triggerMetadata) ? void 0 : b.regexPatterns.length) === 0
            }), (0, r.jsx)(l.A, {
                onChange: A,
                initialValue: null == (x = O.triggerMetadata) ? void 0 : x.allowList,
                maxWordCount: g.UW,
                collapsed: (null == (j = O.triggerMetadata) ? void 0 : j.allowList) == null || (null == (_ = O.triggerMetadata) ? void 0 : _.allowList.length) === 0
            })]
        }), (0, r.jsx)(u.A, {
            type: u.A.Type.ARROW_DOWN
        }), (0, r.jsx)(d.A, {
            step: 2,
            header: m.intl.string(m.t["18TOiQ"]),
            children: (0, r.jsx)(s.A, {
                rule: O,
                onChangeRule: v
            })
        }), (0, r.jsx)(u.A, {
            type: u.A.Type.CROSS
        }), (0, r.jsx)(d.A, {
            step: 3,
            header: m.intl.string(m.t.eq3gjh),
            children: (0, r.jsx)(c.A, {
                rule: O,
                onChangeRule: v
            })
        })]
    })
}