/** chunk id: 997954, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(397927),
    s = n(442433),
    l = n(975807),
    c = n(235393),
    u = n(332173),
    d = n(202803),
    f = n(365526),
    p = n(652215),
    _ = n(446440),
    h = n(800344);

function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            m(e, t, n[t])
        })
    }
    return e
}

function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function y(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function b(e) {
    return {
        react(t, i, m) {
            let E = m.noStyleAndInteraction ? void 0 : async n => {
                let r = await (0, d.AN)(t.attachmentUrl);
                e.shouldStopPropagation && (null == n || n.stopPropagation()), c.A.trackLinkClicked(r), e.shouldCloseDefaultModals && (0, o.s7G)(), (0, l.A)(r)
            }, b = m.noStyleAndInteraction ? p.tEg : e => {
                (0, s.L3)(e, async () => {
                    let {
                        default: e
                    } = await n.e("62529").then(n.bind(n, 740024));
                    return n => (0, r.jsx)(e, y(g({}, n), {
                        attachmentUrl: t.attachmentUrl,
                        attachmentName: t.attachmentName
                    }))
                })
            };
            return (0, r.jsxs)(u.A, {
                role: "link",
                href: t.attachmentUrl,
                onClick: E,
                onContextMenu: b,
                className: "attachmentLink",
                children: [(0, r.jsx)(o.PtA, {
                    size: "xs",
                    className: a()(h.Kk, _.K),
                    color: "currentColor"
                }), (0, f.t)(t, i, m)]
            }, m.key)
        }
    }
}