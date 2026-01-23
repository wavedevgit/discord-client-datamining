/** Chunk was on 58652 **/
/** chunk id: 216033, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(627968),
    r = n(64700),
    i = n(397927),
    a = n(46054),
    s = n(861662),
    o = n(232409);

function d(e) {
    let {
        element: {
            data: {
                header: t,
                body: n,
                is_localized: d
            }
        }
    } = e, c = r.useMemo(() => {
        var e, t;
        return a.A.reactParserFor((e = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), l.forEach(function(t) {
                    var l;
                    l = n[t], t in e ? Object.defineProperty(e, t, {
                        value: l,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = l
                })
            }
            return e
        }({}, a.A.defaultRules), t = t = {
            link: s.B
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                n.push.apply(n, l)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e))
    }, []);
    return d && (null != t || null != n) ? (0, l.jsxs)("div", {
        children: [null != t && (0, l.jsx)(i.Heading, {
            variant: "heading-sm/semibold",
            color: "text-default",
            className: o.w,
            children: t
        }), null != n && (0, l.jsx)(i.Text, {
            variant: "text-sm/normal",
            className: o.r,
            children: c(n)
        })]
    }) : null
}