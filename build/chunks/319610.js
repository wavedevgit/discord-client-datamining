/** chunk id: 319610, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968),
    l = n(64700),
    i = n(417597),
    s = n(397927),
    a = n(318937),
    o = n(533117),
    c = n(134753),
    u = n(246356),
    d = n(709562),
    p = n(912276),
    h = n(60504),
    g = n(985018);

function f(e) {
    let {
        channel: t
    } = e, n = (0, i.bG)([o.A], () => o.A.getDrawMode()), f = (null == n ? void 0 : n.type) === c.Z.EMOJI_HOSE, m = l.useRef(null), b = (e, t) => {
        null != e ? (0, a.Ol)({
            type: c.Z.EMOJI_HOSE,
            emojiName: e.name,
            emojiId: e.id
        }) : f && (0, a.Ol)(null), null == t || t()
    };
    return (0, r.jsx)(h.A, {
        renderPopout: e => {
            let {
                closePopout: n,
                onFocus: l
            } = e;
            return (0, r.jsx)(u.A, {
                children: (0, r.jsx)(p.A, {
                    title: g.intl.string(g.t.XYLOyF),
                    channel: t,
                    closePopout: n,
                    onFocus: l,
                    onSelectEmoji: e => b(e, n)
                })
            })
        },
        popoutTargetRef: m,
        children: e => {
            var t, n;
            return (0, r.jsx)(d.A, (t = function(e) {
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
            }({}, e), n = n = {
                buttonRef: m,
                iconComponent: s.VRj,
                isActive: f || e.isActive,
                onClick: t => {
                    b(null), e.onClick(t)
                }
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
        }
    })
}