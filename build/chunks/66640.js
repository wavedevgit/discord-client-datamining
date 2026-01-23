/** Chunk was on 47841 **/
/** chunk id: 66640, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(627968),
    i = n(64700),
    l = n(858229),
    s = n(702942),
    a = n(99787),
    o = n(255354),
    c = n(957300),
    d = n(378427),
    u = n(411335),
    g = n(985018),
    m = n(578551);

function p(e) {
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

function f(e, t) {
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
    var t, n, b;
    let {
        rule: h,
        onChangeRule: x
    } = e, j = i.useCallback(e => {
        x(f(p({}, h), {
            triggerMetadata: f(p({}, h.triggerMetadata), {
                allowList: e
            })
        }))
    }, [x, h]);
    return (0, r.jsxs)("div", {
        className: m.sp,
        children: [(0, r.jsxs)(c.A, {
            step: 1,
            header: g.intl.string(g.t.CX5Yfc),
            children: [(0, r.jsx)(s.A, {
                rule: h,
                onChangeRule: x
            }), (0, r.jsx)(l.A, {
                onChange: j,
                initialValue: null == (t = h.triggerMetadata) ? void 0 : t.allowList,
                maxWordCount: u.hG,
                collapsed: (null == (n = h.triggerMetadata) ? void 0 : n.allowList) == null || (null == (b = h.triggerMetadata) ? void 0 : b.allowList.length) === 0
            })]
        }), (0, r.jsx)(d.A, {
            type: d.A.Type.ARROW_DOWN
        }), (0, r.jsx)(c.A, {
            step: 2,
            header: g.intl.string(g.t["18TOiQ"]),
            children: (0, r.jsx)(a.A, {
                rule: h,
                onChangeRule: x
            })
        }), (0, r.jsx)(d.A, {
            type: d.A.Type.CROSS
        }), (0, r.jsx)(c.A, {
            step: 3,
            header: g.intl.string(g.t.eq3gjh),
            children: (0, r.jsx)(o.A, {
                rule: h,
                onChangeRule: x
            })
        })]
    })
}