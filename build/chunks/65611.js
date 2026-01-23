/** Chunk was on 97492 **/
/** chunk id: 65611, original params: e,t,n (module,exports,require) **/
n.d(t, {
    eW: () => f,
    em: () => p,
    oi: () => h,
    wN: () => d
}), n(896048);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(827734),
    a = n(397927),
    o = n(513461),
    c = n(791606),
    u = n(283237);

function d(e, t, n) {
    return (0, r.jsx)(a.hVq, {
        count: e,
        color: t,
        "aria-hidden": n
    })
}

function p() {
    return (0, r.jsx)(a.fkz, {
        icon: (0, a.kHD)(c.A),
        disableColor: !0,
        className: u.yk
    })
}

function h(e) {
    let t, {
        audio: n,
        video: r,
        screenshare: l,
        isCurrentUserConnected: i,
        liveStage: s,
        activeEvent: o,
        activity: c
    } = e;
    if (o) t = a.CTc;
    else if (s) t = a.qux;
    else if (l) t = a.kN9;
    else if (r) t = a.npA;
    else if (n) t = a.HKD;
    else {
        if (!c) return null;
        t = a.bxf
    }
    return g({
        icon: t,
        isCurrentUserConnected: i
    })
}

function f(e) {
    let {
        guildJoinRequestStatus: t
    } = e, [n, r] = function(e) {
        switch (e) {
            case o.B5.SUBMITTED:
                return [void 0, a.O4];
            case o.B5.REJECTED:
                return [s.A.unsafe_rawColors.RED_400.css, a.PGe];
            case o.B5.APPROVED:
                return [s.A.unsafe_rawColors.GREEN_360.css, a.A9s];
            default:
                return [void 0, a.R2l]
        }
    }(t);
    return g({
        icon: r,
        color: n
    })
}

function g(e) {
    let {
        icon: t,
        color: n,
        isCurrentUserConnected: l
    } = e;
    return (0, r.jsx)(a.fkz, function(e) {
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
        icon: t,
        className: i()(u.bG, {
            [u.gB]: l
        })
    }, null == n ? {
        disableColor: !0
    } : {
        color: n
    }))
}