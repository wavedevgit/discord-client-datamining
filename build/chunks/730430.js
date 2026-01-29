/** Chunk was on 47995 **/
/** chunk id: 730430, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(956793),
    s = n(806246),
    o = n(378570),
    c = n(383501),
    u = n(954571),
    d = n(652215),
    p = n(985018);

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function m(e) {
    let {
        variant: t = "active",
        size: n = "sm",
        hangStatusChannel: m,
        onAction: g,
        userId: y
    } = e, b = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                    i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }(e, ["variant", "size", "hangStatusChannel", "onAction", "userId"]), _ = (0, l.bG)([c.A], () => c.A.getChannelId() === m.id);
    return (0, r.jsx)(i.Button, f({
        text: _ ? p.intl.string(p.t.BXxdl7) : p.intl.string(p.t["9C444m"]),
        onClick: () => {
            var e, t;
            null == g || g(), a.default.selectVoiceChannel(m.id), (0, o.iN)(m.id), u.default.track(d.HAw.HANG_STATUS_CTA_CLICKED, (e = f({
                source: "UserProfilePopout"
            }, (0, s.A)(m.id)), t = t = {
                other_user_id: y,
                cta_type: _ ? "open" : "join"
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }), e))
        },
        variant: t,
        size: n,
        fullWidth: !0
    }, b))
}