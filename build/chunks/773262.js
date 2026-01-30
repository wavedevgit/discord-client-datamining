/** chunk id: 773262, original params: e,t,r (module,exports,require) **/
r.r(t), r.d(t, {
    default: () => O
});
var n = r(627968),
    o = r(64700),
    c = r(158954),
    l = r(311907),
    s = r(397927),
    a = r(162605),
    i = r(798286),
    u = r(814278),
    p = r(998759),
    d = r(75811),
    f = r(930840);
r(603266);
var b = r(985018),
    y = r(42768);
let O = function(e) {
    var t, r;
    let {
        transitionState: O,
        streamKey: j,
        channelId: m,
        onClose: g
    } = e, h = (0, l.bG)([a.A], () => {
        var e;
        return null == (e = a.A.getSecureFramesState(j)) ? void 0 : e.epochAuthenticator
    }), v = (0, p.z)({
        fingerprintBase64: h,
        chunkSize: 5,
        desiredLength: 30
    }), x = o.useCallback(() => {
        (0, i.y5)({
            channelId: m
        })
    }, [m]), w = {
        transitionState: O,
        title: b.intl.string(b.t.QogHld),
        subtitle: b.intl.string(b.t.qODBkW)
    }, _ = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)("div", {
            className: y.Ot,
            children: [(0, n.jsxs)("div", {
                className: y.wx,
                children: [(0, n.jsx)(s.Heading, {
                    variant: "text-sm/bold",
                    color: "text-strong",
                    children: b.intl.string(b.t.cgBTyO)
                }), null != v && (0, n.jsx)(f.c, {
                    className: y.nJ,
                    chunks: v,
                    color: s.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                    onCopy: x
                })]
            }), (0, n.jsx)(d.j, {
                className: y.aY,
                chunks: v,
                columns: 3
            })]
        }), (0, n.jsx)(s.Text, {
            className: y.qr,
            variant: "text-sm/normal",
            color: "text-muted",
            children: b.intl.format(b.t["H3+ktv"], {
                helpArticle: (0, u.aW)()
            })
        })]
    });
    return (0, n.jsx)(c.Modal, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            })
        }
        return e
    }({}, w), r = r = {
        onClose: g,
        actions: [],
        children: _
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
        }
        return r
    })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))
}