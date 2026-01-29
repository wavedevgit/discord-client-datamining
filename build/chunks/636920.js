/** Chunk was on 47995 **/
/** chunk id: 636920, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Z: () => j
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(435371),
    s = n(397927),
    o = n(956793),
    c = n(576705),
    u = n(309010),
    d = n(954571),
    p = n(69555),
    f = n(886019),
    m = n(846218),
    g = n(806246),
    y = n(358957),
    b = n(559405),
    _ = n(708455),
    A = n(652215),
    h = n(985018),
    v = n(334994);

function O(e) {
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

function S(e, t) {
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

function j(e) {
    let {
        hangStatusActivity: t,
        channel: n,
        userId: j,
        isSelf: x = !1,
        analyticsSource: I,
        onAction: P,
        className: E,
        iconClassName: T,
        textClassName: N
    } = e, w = (0, i.bG)([u.A], () => u.A.getVoiceChannelId() === n.id, [n]), C = (0, i.bG)([c.A], () => c.A.can(A.xBc.CONNECT, n), [n]), L = null == t.emoji || (0, m.n)(t.emoji, n);
    l.useEffect(() => {
        d.default.track(A.HAw.VIEW_HANG_STATUS, O({
            source: I,
            other_user_id: j
        }, (0, g.A)(n.id)))
    }, [I, n.id, j]);
    let D = l.useCallback(() => {
            !w && C && (o.default.selectVoiceChannel(n.id), null == P || P(), d.default.track(A.HAw.HANG_STATUS_CTA_CLICKED, S(O({
                source: I
            }, (0, g.A)(n.id)), {
                other_user_id: j,
                cta_type: "join"
            })))
        }, [w, C, n.id, j, I, P]),
        k = l.useCallback(() => {
            if (!w || !L || null == t.state) return;
            let [e] = (0, y.e)(j, t.state);
            if (null != e) {
                if (e === _.Kk.CUSTOM) {
                    if (null == t.details || null == t.emoji) return;
                    (0, p.hS)(t.details, t.emoji, !0)
                } else(0, p.Iq)(e, !0);
                null == P || P(), d.default.track(A.HAw.HANG_STATUS_CTA_CLICKED, S(O({
                    source: I
                }, (0, g.A)(n.id)), {
                    other_user_id: j,
                    cta_type: "swipe"
                }))
            }
        }, [w, L, t, n.id, j, I, P]);
    return (0, r.jsxs)("div", {
        className: null != E ? E : v.kL,
        children: [(0, r.jsx)(b.A, {
            userId: j,
            size: 32,
            className: null != T ? T : v.Kk,
            hangStatusActivity: t
        }), (0, r.jsx)(s.Text, {
            variant: "text-md/medium",
            className: null != N ? N : v.qS,
            children: (0, f.Au)(j, t)
        }), w && !x ? (0, r.jsx)(a.m_, {
            text: L ? void 0 : h.intl.string(h.t["0LMpW+"]),
            children: (0, r.jsx)("div", {
                children: (0, r.jsx)(s.Button, {
                    size: "sm",
                    variant: "secondary",
                    text: h.intl.string(h.t["0eHzpm"]),
                    onClick: k,
                    disabled: !L
                })
            })
        }) : !x && C && (0, r.jsx)(s.Button, {
            size: "sm",
            variant: "secondary",
            text: h.intl.string(h.t["B/dHXL"]),
            onClick: D
        })]
    })
}