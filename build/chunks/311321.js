/** Chunk was on 33563 **/
/** chunk id: 311321, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => p
});
var l = t(627968);
t(64700);
var r = t(665260),
    i = t(397927),
    s = t(652215),
    u = t(985018),
    o = t(638329);

function a(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), l.forEach(function(n) {
            var l;
            l = t[n], n in e ? Object.defineProperty(e, n, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = l
        })
    }
    return e
}

function c(e, n) {
    return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            t.push.apply(t, l)
        }
        return t
    })(Object(n)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    }), e
}
let d = {
    size: "md",
    color: i.LU0.colors.INTERACTIVE_TEXT_DEFAULT
};

function p(e) {
    let {
        subscriptions: n,
        color: t = "text-default"
    } = e, p = n.some(e => (0, r.Lt)(e.skuFlags, s.d68.APPLICATION_GUILD_SUBSCRIPTION));
    return (0, l.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        color: t,
        className: o.R,
        children: p ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(i.RR9, c(a({}, d), {
                color: "currentColor"
            })), u.intl.string(u.t.XIhSoj)]
        }) : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(i.nys, c(a({}, d), {
                color: "currentColor"
            })), u.intl.string(u.t.dxfZph)]
        })
    })
}