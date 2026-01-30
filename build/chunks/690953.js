/** Chunk was on 93952 **/
/** chunk id: 690953, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
});
var r = n(627968);
n(64700);
var l = n(417597),
    i = n(397927),
    u = n(882997),
    a = n(731474),
    o = n(383501),
    c = n(977997),
    d = n(458829),
    s = n(857253),
    A = n(694967),
    f = n(431516),
    E = n(652215),
    y = n(985018);

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

function p(e, t) {
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

function O(e) {
    let t = (0, l.bG)([o.A], () => o.A.getChannelId() === e.id),
        O = (0, s.A)(),
        v = (null == O ? void 0 : O.channelId) === e.id,
        b = (0, a.J)(e) && !e.isPrivate(),
        h = (0, a.A)(e),
        N = !(0, l.bG)([c.A], () => c.A.isInChannel(e.id)) && h || b,
        _ = (0, A.A)();
    if (!v && 0 === _.length) return null;
    let G = (0, f.A)(void 0);
    return v ? (0, r.jsx)(i.Drp, {
        label: y.intl.string(y.t.PlwgdU),
        id: "handoff",
        action: () => {
            (0, d.x)(O)
        },
        icon: G,
        leadingAccessory: {
            type: "icon",
            icon: G
        },
        disabled: N
    }) : _.map(l => {
        var a, o;
        let c = (0, f.A)(l.type);
        return (0, r.jsx)(i.Drp, {
            id: "transfer-".concat(l.type, "-").concat(l.id),
            label: (a = l.type, o = t, a === E.fg2.XBOX ? o ? y.intl.string(y.t["qVE/VF"]) : y.intl.string(y.t.E8euSk) : a === E.fg2.PLAYSTATION ? o ? y.intl.string(y.t.vzfxmY) : y.intl.string(y.t.QxEYDj) : a === E.fg2.PLAYSTATION_STAGING ? o ? y.intl.string(y.t.BDiXtV) : y.intl.string(y.t["bhdB9+"]) : void 0),
            action: () => {
                !l.twoWayLink || l.revoked ? (0, u.A)({
                    platformType: l.type,
                    location: "Console Transfer Item"
                }) : l.type === E.fg2.XBOX ? (0, i.mMO)(async () => {
                    let {
                        default: t
                    } = await Promise.all([n.e("83393"), n.e("67670")]).then(n.bind(n, 188072));
                    return n => (0, r.jsx)(t, p(g({}, n), {
                        channel: e
                    }))
                }) : (l.type === E.fg2.PLAYSTATION || l.type === E.fg2.PLAYSTATION_STAGING) && (0, i.mMO)(async () => {
                    let {
                        default: t
                    } = await n.e("71282").then(n.bind(n, 315337));
                    return n => (0, r.jsx)(t, p(g({}, n), {
                        platform: l.type,
                        channel: e
                    }))
                })
            },
            icon: c,
            leadingAccessory: {
                type: "icon",
                icon: c
            },
            disabled: N
        }, l.id)
    })
}