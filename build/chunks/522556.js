/** Chunk was on 97492 **/
/** chunk id: 522556, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(686956),
    c = n(935649),
    u = n(847599),
    d = n(323073),
    p = n(506164),
    h = n(985018),
    f = n(635510);

function g(e) {
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
    var t, n;
    let {
        guild: i,
        channelId: s
    } = e, a = (0, d.k$)(i), {
        modalType: f
    } = a, m = function(e, t) {
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
    }(a, ["modalType"]), b = l.useCallback(() => {
        null != i && o.A.nsfwReturnToSafety(i.id)
    }, [i]), A = l.useCallback(() => {
        null != i && o.A.nsfwAgree(i.id)
    }, [i]), y = l.useCallback(() => {
        c.A.showAgeVerificationGetStartedModal({
            entryPoint: u.q1.NSFW_GUILD
        })
    }, []), _ = (t = g({}, m), n = n = {
        guildId: null == i ? void 0 : i.id,
        channelId: s,
        disagreement: h.intl.string(h.t["/g10LC"])
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t);
    switch (f) {
        case u.A5.NSFW_CHANNEL_AGE_VERIFY:
        case u.A5.GUILD_LARGE_SERVER:
            return (0, r.jsx)(p.A, g({
                onAgree: y,
                onDisagree: b,
                modalType: f
            }, _));
        default:
            return (0, r.jsx)(p.A, g({
                onAgree: A,
                onDisagree: b,
                modalType: f
            }, _))
    }
}
let b = function(e) {
    let {
        guild: t,
        channelId: n,
        className: i
    } = e, o = l.useRef(null);
    return l.useEffect(() => {
        let {
            current: e
        } = o;
        null == e || e.scrollToBottom()
    }, []), (0, r.jsx)(a.T7Y, {
        ref: o,
        className: f.X,
        children: (0, r.jsx)("div", {
            className: s()(i, f.i),
            children: (0, r.jsx)(m, {
                guild: t,
                channelId: n
            })
        })
    })
}