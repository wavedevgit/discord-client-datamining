/** Chunk was on 49559 **/
/** chunk id: 769840, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    o = n(342952),
    s = n(397927),
    c = n(562153),
    u = n(576757),
    d = n(291594),
    p = n(22869),
    m = n(959),
    f = n(985018),
    O = n(199830);

function b(e) {
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

function y(e, t) {
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

function h(e) {
    let {
        entry: t,
        channel: n,
        className: a
    } = e, h = l.useRef(null), j = l.useRef(null), {
        displayParticipants: g,
        participant1: A,
        participant2: v,
        numOtherParticipants: E,
        orderedParticipants: C
    } = (0, u.A)(t), x = [A, v];
    return (0, r.jsxs)("div", {
        className: i()(O.kL, a),
        children: [g.length > 0 ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(m.A, {
                targetElementRef: h,
                participants: C,
                channel: n,
                children: e => (0, r.jsx)(s.DUT, y(b({
                    innerRef: h,
                    className: O.vk
                }, e), {
                    children: (0, r.jsx)(o.A, {
                        maxUsers: 3,
                        users: g,
                        size: s._3J.SIZE_20,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0
                    })
                }))
            }), (0, r.jsx)(s.hKd, {
                size: 6,
                horizontal: !0
            })]
        }) : null, (0, r.jsx)(s.Heading, {
            variant: "text-sm/semibold",
            color: "text-subtle",
            className: i()(O.IY, O.Io),
            scaleFontToUserSetting: !0,
            children: f.intl.format(f.t.rH95Gu, {
                user0: c.Ay.getName(n.guild_id, n.id, x[0]),
                user1: c.Ay.getName(n.guild_id, n.id, x[1]),
                countOthers: E,
                name0Hook: (e, t) => (0, r.jsx)(p.A, {
                    text: e,
                    user: x[0],
                    channel: n
                }, t),
                name1Hook: (e, t) => (0, r.jsx)(p.A, {
                    text: e,
                    user: x[1],
                    channel: n
                }, t),
                countOthersHook: (e, t) => (0, r.jsx)(m.A, {
                    targetElementRef: j,
                    participants: C,
                    channel: n,
                    children: t => (0, r.jsx)(d.A, y(b({}, t), {
                        tag: "span",
                        children: (0, r.jsx)(s.Text, {
                            ref: j,
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            scaleFontToUserSetting: !0,
                            children: e
                        })
                    }))
                }, t)
            })
        })]
    })
}