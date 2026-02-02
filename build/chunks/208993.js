/** chunk id: 208993, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => u
});
var n = r(627968);
r(64700);
var l = r(397927),
    o = r(283900),
    i = r(475833),
    c = r(842130),
    s = r(985018),
    a = r(195357);
let d = e => {
    var t, r;
    let {
        children: o,
        className: i
    } = e, c = function(e, t) {
        if (null == e) return {};
        var r, n, l, o = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            return o
        }
        if (o = function(e, t) {
                if (null == e) return {};
                var r, n, l = {},
                    o = Object.getOwnPropertyNames(e);
                for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
        return o
    }(e, ["children", "className"]);
    return (0, n.jsx)(l.EOs, (t = function(e) {
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
    }({
        "data-migration-pending": !0,
        className: i
    }, c), r = r = {
        parentComponent: "FamilyCenterCommonModal",
        children: o
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
};
d.ButtonFooter = e => {
    let {
        children: t
    } = e;
    return (0, n.jsx)("div", {
        className: a.qr,
        children: t
    })
}, d.Header = e => {
    let {
        icon: t,
        currentUser: r,
        otherUser: c,
        header: s
    } = e;
    return (0, n.jsxs)("div", {
        className: a.wx,
        children: [(0, n.jsx)(o.A, {
            currentUser: r,
            otherUser: c,
            children: t
        }), (0, n.jsxs)("div", {
            className: a.R_,
            children: [(0, n.jsx)(l.Heading, {
                variant: "text-lg/bold",
                children: s
            }), (0, n.jsx)(i.A, {
                user: c
            })]
        })]
    })
}, d.Content = e => {
    let {
        children: t
    } = e;
    return (0, n.jsx)("div", {
        className: a.Qs,
        children: t
    })
}, d.Notice = e => {
    let {
        notice: t
    } = e;
    return (0, n.jsxs)("div", {
        className: a.lm,
        children: [(0, n.jsx)(l.Text, {
            variant: "eyebrow",
            color: "text-strong",
            children: s.intl.string(c.default.cXgKMD)
        }), (0, n.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: t
        })]
    })
};
let u = d