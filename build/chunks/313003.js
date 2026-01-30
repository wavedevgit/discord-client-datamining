/** chunk id: 313003, original params: t,e,r (module,exports,require) **/
r.d(e, {
    default: () => d
}), r(896048);
var n = r(627968),
    a = r(64700),
    i = r(397927),
    o = r(198982),
    c = r(997509),
    l = r(809505),
    s = r(242273),
    u = r(652215),
    b = r(985018);

function d(t) {
    var e, r;
    let {
        guild: d,
        onClose: p,
        hideColors: y
    } = t, [f, _] = a.useState(d.verificationLevel), [g, O] = a.useState(null), v = d.features.has(u.GuildFeatures.COMMUNITY), j = (0, l.vd)(v, y).filter(t => !t.disabled), h = a.useCallback(async () => {
        null != g && O(null);
        try {
            await c.A.saveGuild(d.id, {
                verificationLevel: f
            }), c.A.updateGuild({
                verificationLevel: f
            }), p()
        } catch (t) {
            O(new o.LG(t).getAnyErrorMessage())
        }
    }, [g, d.id, f, p]);
    return (0, n.jsx)(s.A, (e = function(t) {
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
    }({}, t), r = r = {
        title: b.intl.string(b.t.DpRdYK),
        description: b.intl.format(b.t.iuRk2j, {}),
        errorText: g,
        onConfirm: h,
        onCancel: p,
        children: (0, n.jsx)(i.z6M, {
            value: f,
            options: j,
            onChange: t => _(t)
        })
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