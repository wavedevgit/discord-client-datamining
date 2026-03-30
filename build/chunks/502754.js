/** chunk id: 502754 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => T
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(989349),
    a = n.n(l),
    r = n(837381),
    o = n(397927),
    c = n(559149),
    d = n(857069),
    u = n(694318),
    h = n(813516),
    A = n(906141),
    m = n(253932),
    _ = n(961350),
    g = n(287809),
    p = n(405269),
    f = n(576456),
    x = n(712209),
    E = n(652215),
    C = n(985018),
    I = n(915613);
let N = {
        left: 4,
        right: -12
    },
    S = [E.lAJ.THREAD_CREATED];

function b(e) {
    let {
        channel: t,
        message: n,
        compact: l,
        isGroupStart: a,
        treatSpam: c,
        gotoChannel: d
    } = e, u = (0, r.rm)(n.id ?? ""), h = s.useCallback(e => {
        "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus()
    }, [t.id]), m = S.includes(n.type);
    return (0, i.jsx)(o.vN3, {
        offset: N,
        children: (0, i.jsxs)("div", {
            className: I.zC,
            onKeyDown: h,
            ...u,
            children: [!m && (0, i.jsx)(f.A, {
                className: I.nn,
                onJump: e => d(e, n.id)
            }), (0, i.jsx)(A.A, {
                id: n.id,
                message: n,
                channel: t,
                className: I.iU,
                compact: l,
                animateAvatar: !1,
                isGroupStart: a,
                onKeyDown: h,
                treatSpam: c
            })]
        }, n.id)
    })
}

function T(e) {
    let {
        channel: t,
        channelRecord: n,
        gotoChannel: s
    } = e, {
        enabled: l
    } = c.A.useExperiment({
        location: "20e3b0_1"
    }, {
        autoTrackExposure: !1
    }), r = m.hH.useSetting(), A = (0, u.iJ)(n), f = !1, N = 0 === t.messages.length || a()(t.messages[0].timestamp).isSame(a()(), "day"), S = g.default.getUser(_.default.getId())?.hasFlag(E.nhx.SPAMMER) ?? !1, T = [];
    if (!t.collapsed) {
        let e = null,
            c = null,
            m = t.messages.slice(0, x.sz);
        m.forEach(t => {
            if (!N && (null == e || !e.isSame(t.timestamp, "day"))) {
                let n = (0, p.i$)(t.timestamp, "LL");
                T.push((0, i.jsx)(h.A, {
                    className: I.yF,
                    children: n
                }, n)), e = a()(t.timestamp)
            }
            let o = null == c || (0, d.A)(n, c, t);
            c = t, f = f || (0, u.kf)(t), T.push((0, i.jsx)(b, {
                channel: n,
                message: t,
                compact: r,
                isGroupStart: o,
                treatSpam: !S && l && (0, u.kf)(t) && A,
                gotoChannel: s
            }, t.id))
        }), t.messages.length >= x.sz && T.push((0, i.jsx)("div", {
            className: I.Gr,
            children: (0, i.jsx)(o.QWc, {
                variant: "primary",
                text: `${C.intl.string(C.t["9OB9hq"])} \u203A`,
                onClick: e => s(e, m[m.length - 1].id)
            })
        }, "view-all")), 0 === T.length && (T = [(0, i.jsx)(o.y$y, {}, "spinner")])
    }
    return f && A && c.A.trackExposure({
        location: "20e3b0_2"
    }), (0, i.jsx)("div", {
        className: I.DZ,
        children: T
    })
}