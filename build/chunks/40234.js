/** chunk id: 40234, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968);
n(64700);
var i = n(377802),
    l = n(956793),
    a = n(688810),
    s = n(384059),
    o = n(707592),
    c = n(132860),
    u = n(993838),
    d = n(106044),
    p = n(42473),
    h = n(985018);

function g(e) {
    var t, n;
    let {
        tooltipText: l,
        onClick: o
    } = e, {
        parentAnalyticsLocation: c
    } = (0, a.Ay)(), {
        events: u,
        Component: d
    } = (0, i.O)();
    return (0, r.jsx)(p.A, (t = function(e) {
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
    }({
        tooltipText: l,
        onClick: () => {
            (0, s.X)(c, s.O.DISCONNECT), o()
        }
    }, u), n = n = {
        icon: (0, r.jsx)(d, {
            size: "refresh_sm"
        })
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

function f(e) {
    let {
        channel: t
    } = e;
    return (0, r.jsx)(g, {
        tooltipText: h.intl.string(h.t.SMKyih),
        onClick: () => {
            (0, d.A)(t) ? (0, u.j3)(t) : l.default.disconnect()
        }
    })
}

function m(e) {
    let {
        channel: t
    } = e;
    return (0, r.jsx)(g, {
        tooltipText: h.intl.string(h.t["6vrfgt"]),
        onClick: () => {
            (0, c.A)(t) ? (0, o.Py)(t) : l.default.disconnect()
        }
    })
}

function A(e) {
    let {
        channel: t
    } = e;
    return t.isGuildStageVoice() ? (0, r.jsx)(f, {
        channel: t
    }) : (0, r.jsx)(m, {
        channel: t
    })
}