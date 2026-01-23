/** Chunk was on 47841 **/
/** chunk id: 435732, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var r = n(627968),
    i = n(64700),
    l = n(417597),
    s = n(397927),
    a = n(219504),
    o = n(374084),
    c = n(199940),
    d = n(132514),
    u = n(520761),
    g = n(985018),
    m = n(659233);

function p(e) {
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

function f(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let b = [],
    h = function(e) {
        let {
            guildId: t
        } = e, h = (0, l.yK)([d.A], () => {
            var e;
            return null != (e = d.A.getSettings().resourceChannels) ? e : b
        }), x = i.useMemo(() => h.map(e => f(p({}, e), {
            id: e.channelId
        })), [h]), {
            handleDragStart: j,
            handleDragReset: _,
            handleDragComplete: O
        } = (0, a.A)(x, c.WA), v = i.useCallback((e, n) => {
            let r = d.A.getSettings();
            null != r && ((0, c.px)(e), (0, c.W5)(t, r).then(() => {
                (0, c.E0)(t, e.channelId, n)
            }))
        }, [t]), y = i.useCallback(() => {
            if (null != t) return (0, s.mMO)(async () => {
                let {
                    default: e
                } = await n.e("36354").then(n.bind(n, 983161));
                return n => (0, r.jsx)(e, f(p({}, n), {
                    guildId: t,
                    onSave: c.px,
                    onIconUpload: v
                }))
            })
        }, [t, v]);
        return (0, r.jsxs)("div", {
            className: m.C5,
            children: [h.map((e, n) => (0, r.jsx)(u.A, {
                guildId: t,
                resourceChannel: e,
                index: n,
                onDragStart: j,
                onDragReset: _,
                onDragComplete: O
            }, e.channelId)), h.length < o.CW && (0, r.jsxs)(s.DUT, {
                className: m.Bw,
                onClick: y,
                children: [(0, r.jsx)(s.U1e, {
                    size: "xs",
                    color: "currentColor"
                }), (0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    children: g.intl.string(g.t["w9/qGY"])
                })]
            })]
        })
    }