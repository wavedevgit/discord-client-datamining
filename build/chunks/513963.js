/** Chunk was on 78238 **/
/** chunk id: 513963, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => u
}), r(896048);
var n = r(627968),
    o = r(64700),
    i = r(732955),
    l = r(817281),
    a = r(951829),
    c = r(985018);

function u(e) {
    let {
        type: t,
        onConfirm: r,
        onClose: u
    } = e, s = function(e, t) {
        if (null == e) return {};
        var r, n, o, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var r, n, o = {},
                    i = Object.getOwnPropertyNames(e);
                for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                return o
            }(e, t), Object.getOwnPropertySymbols)
            for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
    }(e, ["type", "onConfirm", "onClose"]), [b, f] = o.useState(!1), p = o.useCallback(() => {
        b && l.Ay.updatedUnsyncedSettings({
            disableHideSelfStreamAndVideoConfirmationAlert: !0
        }), r(), u()
    }, [r, b, u]), y = t === a.f.STREAM ? c.intl.string(c.t["/lFMWr"]) : c.intl.string(c.t.xzxhZS), O = t === a.f.STREAM ? c.intl.string(c.t.xaOX7d) : c.intl.string(c.t.oU1p9O);
    return (0, n.jsx)(i.aFV, function(e) {
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
        size: "md",
        actionBarInput: (0, n.jsx)(i.Sc0, {
            checked: b,
            onChange: e => f(e),
            label: c.intl.string(c.t["JdIQ/Y"]),
            labelType: "secondary"
        }),
        actions: [{
            variant: "secondary",
            text: c.intl.string(c.t["ETE/oC"]),
            onClick: u
        }, {
            variant: "primary",
            text: c.intl.string(c.t.BddRzS),
            onClick: p
        }],
        title: y,
        subtitle: O,
        onClose: u
    }, s))
}