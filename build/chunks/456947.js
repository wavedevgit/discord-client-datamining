/** Chunk was on 56016 **/
/** chunk id: 456947, original params: t,e,r (module,exports,require) **/
r.d(e, {
    default: () => p
});
var n = r(627968);
r(64700);
var o = r(158954),
    c = r(397927),
    i = r(985018),
    l = r(212603),
    s = r(973324);
let a = t => {
    let {
        text: e,
        icon: r,
        foreground: o
    } = t;
    return (0, n.jsxs)("div", {
        className: l.OI,
        children: [(0, n.jsx)("div", {
            className: l.zc,
            children: (0, n.jsx)(r, {
                color: null != o ? o : "currentColor",
                className: l.kZ,
                size: "custom",
                height: 40,
                width: 40
            })
        }), (0, n.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "text-default",
            className: l.Ct,
            children: e
        })]
    })
};

function p(t) {
    var e, r;
    let {
        transitionState: l,
        onClose: p
    } = t, u = function(t, e) {
        if (null == t) return {};
        var r, n, o, c = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (o = 0, r = Reflect.ownKeys(t); o < r.length; o++) n = r[o], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (c[n] = t[n]);
            return c
        }
        if (c = function(t, e) {
                if (null == t) return {};
                var r, n, o = {},
                    c = Object.getOwnPropertyNames(t);
                for (n = 0; n < c.length; n++) r = c[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
                return o
            }(t, e), Object.getOwnPropertySymbols)
            for (o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++) n = r[o], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (c[n] = t[n]);
        return c
    }(t, ["transitionState", "onClose"]);
    return (0, n.jsxs)(o.ExpressiveModal, (e = function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {},
                n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
            }))), n.forEach(function(e) {
                var n;
                n = r[e], e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n
            })
        }
        return t
    }({}, u), r = r = {
        graphic: {
            type: "image",
            src: s.A
        },
        title: i.intl.string(i.t.UVuXCs),
        onClose: p,
        transitionState: l,
        actions: [{
            text: i.intl.string(i.t.obLqZ8),
            variant: "primary",
            onClick: p
        }],
        children: [(0, n.jsx)(a, {
            text: i.intl.string(i.t.sBDfo6),
            icon: c.z0P,
            foreground: "var(--icon-feedback-critical)"
        }), (0, n.jsx)(a, {
            text: i.intl.string(i.t.x58YtH),
            icon: c.zWQ
        }), (0, n.jsx)(a, {
            text: i.intl.string(i.t.XtVqla),
            icon: c.E7M
        })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            r.push.apply(r, n)
        }
        return r
    })(Object(r)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
    }), e))
}