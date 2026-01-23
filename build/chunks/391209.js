/** Chunk was on 96914 **/
/** chunk id: 391209, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => O
}), r(896048);
var n = r(627968),
    o = r(64700),
    a = r(503698),
    s = r.n(a),
    c = r(397927),
    i = r(503852),
    l = r(363487),
    d = r(998418),
    u = r(193157),
    p = r(439156),
    b = r(568065),
    f = r(985018),
    m = r(750845),
    _ = r(107836);

function O(e) {
    var t, r;
    let {
        guildId: a,
        powerup: O,
        onClose: I
    } = e, k = function(e, t) {
        if (null == e) return {};
        var r, n, o, a = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            return a
        }
        if (a = function(e, t) {
                if (null == e) return {};
                var r, n, o = {},
                    a = Object.getOwnPropertyNames(e);
                for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                return o
            }(e, t), Object.getOwnPropertySymbols)
            for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
        return a
    }(e, ["guildId", "powerup", "onClose"]), [y, j] = o.useState(void 0), T = (0, d.Ay)(a, O), g = T.type === b.b_.TIER_OVERRIDE_ACTIVATED, P = (0, l.A)(a), E = null == T.sourceEntitlement || !P;
    return (0, i.Z)(a, O, i.q.DETAIL), (0, n.jsxs)(c.EOs, (t = function(e) {
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
        className: m.yl,
        size: c.rIJ.DYNAMIC
    }, k), r = r = {
        parentComponent: "GuildPowerupLevelModal",
        children: [(0, n.jsxs)(c.$mQ, {
            "data-migration-pending": !0,
            className: m._F,
            scrollbarType: "none",
            children: [(0, n.jsx)("img", {
                alt: "",
                src: _,
                className: m.v5
            }), (0, n.jsxs)("div", {
                className: m.hQ,
                children: [(0, n.jsx)(c.Heading, {
                    variant: "heading-xl/extrabold",
                    children: O.title
                }), (0, n.jsx)(u.A, {
                    powerup: O
                }), null != y && (0, n.jsx)(c.Text, {
                    color: "text-feedback-critical",
                    variant: "text-sm/semibold",
                    children: y
                }), (0, n.jsxs)("div", {
                    className: s()(m.qr, {
                        [m.r9]: E
                    }),
                    children: [!g && P && (0, n.jsx)(p.A, {
                        guildId: a,
                        powerup: O,
                        onError: j,
                        grow: !1,
                        compact: !E
                    }), (0, n.jsx)(c.Button, {
                        variant: E ? "secondary" : "primary",
                        onClick: I,
                        text: f.intl.string(f.t.cpT0Cq)
                    })]
                })]
            })]
        }), (0, n.jsx)(c.s_y, {
            "data-migration-pending": !0,
            className: m.VN,
            onClick: I
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
}