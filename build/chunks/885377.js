/** chunk id: 885377, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => u
}), r(321073);
var n, i = r(627968),
    a = r(64700),
    l = r(158954),
    c = r(672709),
    o = ((n = o || {}).UPGRADE = "UPGRADE", n.CANCEL = "CANCEL", n.UNVERIFIED = "UNVERIFIED", n.UNCLAIMED = "UNCLAIMED", n.GRANDFATHERED = "GRANDFATHERED", n);
let s = {
        UPGRADE: "imageUpgrade",
        CANCEL: "imageCancel",
        UNVERIFIED: "imageUnverified",
        UNCLAIMED: "imageUnclaimed",
        GRANDFATHERED: "imageCancel"
    },
    p = e => {
        var t, r;
        let {
            children: n,
            premiumModalType: o,
            primary: p,
            secondary: u
        } = e, b = function(e, t) {
            if (null == e) return {};
            var r, n, i, a = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, r = Reflect.ownKeys(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                return a
            }
            if (a = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        a = Object.getOwnPropertyNames(e);
                    for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                    return i
                }(e, t), Object.getOwnPropertySymbols)
                for (i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            return a
        }(e, ["children", "premiumModalType", "primary", "secondary"]), m = a.useMemo(() => {
            let e = [];
            return null != u && e.push({
                variant: "secondary",
                text: u.label,
                onClick: u.onClick
            }), null != p && e.push({
                variant: "primary",
                text: p.label,
                onClick: p.onClick
            }), e
        }, [p, u]);
        return (0, i.jsxs)(l.Modal, (t = function(e) {
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
        }({}, b), r = r = {
            actions: m,
            children: [(0, i.jsx)("div", {
                className: c[s[o]]
            }), (0, i.jsx)("div", {
                className: c.message,
                children: n
            })]
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
p.Types = o;
let u = p