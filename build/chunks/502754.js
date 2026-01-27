/** Chunk was on 77870 **/
/** chunk id: 502754, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
}), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(989349),
    s = n.n(i),
    a = n(837381),
    o = n(397927),
    c = n(559149),
    u = n(857069),
    d = n(694318),
    p = n(813516),
    h = n(906141),
    f = n(253932),
    g = n(961350),
    m = n(287809),
    b = n(405269),
    A = n(576456),
    y = n(712209),
    _ = n(652215),
    O = n(985018),
    j = n(359884);
let v = {
        left: 4,
        right: -12
    },
    x = [_.lAJ.THREAD_CREATED];

function E(e) {
    var t, n, i;
    let {
        channel: s,
        message: c,
        compact: u,
        isGroupStart: d,
        treatSpam: p,
        gotoChannel: f
    } = e, g = (0, a.rm)(null != (t = c.id) ? t : ""), m = l.useCallback(e => {
        if ("ArrowLeft" === e.key) {
            var t;
            null == (t = document.querySelector('[data-recents-channel="'.concat(s.id, '"]'))) || t.focus()
        }
    }, [s.id]), b = x.includes(c.type);
    return (0, r.jsx)(o.vN3, {
        offset: v,
        children: (0, r.jsxs)("div", (n = function(e) {
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
            className: j.zC,
            onKeyDown: m
        }, g), i = i = {
            children: [!b && (0, r.jsx)(A.A, {
                className: j.nn,
                onJump: e => f(e, c.id)
            }), (0, r.jsx)(h.A, {
                id: c.id,
                message: c,
                channel: s,
                className: j.iU,
                compact: u,
                animateAvatar: !1,
                isGroupStart: d,
                onKeyDown: m,
                treatSpam: p
            })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n), c.id)
    })
}

function C(e) {
    var t, n;
    let {
        channel: l,
        channelRecord: i,
        gotoChannel: a
    } = e, {
        enabled: h
    } = c.A.useExperiment({
        location: "20e3b0_1"
    }, {
        autoTrackExposure: !1
    }), A = f.hH.useSetting(), v = (0, d.iJ)(i), x = !1, C = 0 === l.messages.length || s()(l.messages[0].timestamp).isSame(s()(), "day"), S = null != (t = null == (n = m.default.getUser(g.default.getId())) ? void 0 : n.hasFlag(_.nhx.SPAMMER)) && t, I = [];
    if (!l.collapsed) {
        let e = null,
            t = null,
            n = l.messages.slice(0, y.sz);
        n.forEach(n => {
            if (!C && (null == e || !e.isSame(n.timestamp, "day"))) {
                let t = (0, b.i$)(n.timestamp, "LL");
                I.push((0, r.jsx)(p.A, {
                    className: j.yF,
                    children: t
                }, t)), e = s()(n.timestamp)
            }
            let l = null == t || (0, u.A)(i, t, n);
            t = n, x = x || (0, d.kf)(n), I.push((0, r.jsx)(E, {
                channel: i,
                message: n,
                compact: A,
                isGroupStart: l,
                treatSpam: !S && h && (0, d.kf)(n) && v,
                gotoChannel: a
            }, n.id))
        }), l.messages.length >= y.sz && I.push((0, r.jsx)("div", {
            className: j.Gr,
            children: (0, r.jsx)(o.QWc, {
                variant: "primary",
                text: "".concat(O.intl.string(O.t["9OB9hq"]), " ›"),
                onClick: e => a(e, n[n.length - 1].id)
            })
        }, "view-all")), 0 === I.length && (I = [(0, r.jsx)(o.y$y, {}, "spinner")])
    }
    return x && v && c.A.trackExposure({
        location: "20e3b0_2"
    }), (0, r.jsx)("div", {
        className: j.DZ,
        children: I
    })
}