/** Chunk was on web.js **/
/** chunk id: 367232, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(297413),
    o = n(376304),
    l = n(201275),
    c = n(386784),
    u = n(657048),
    d = n(734057),
    f = n(317525),
    p = n(71393),
    _ = n(290863),
    h = n(287809),
    m = n(207963),
    g = n(489414),
    E = n(289770),
    y = n(247818),
    b = n(652215),
    O = n(794998);

function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            v(e, t, n[t])
        })
    }
    return e
}

function I(e) {
    let t = (0, m.jc)(),
        n = null == t ? void 0 : t.channelId,
        v = d.A.getChannel(n),
        I = p.A.getGuild(null == v ? void 0 : v.getGuildId()),
        S = (0, c.A)(null == I ? void 0 : I.id, E.S$),
        T = t => (0, E.YV)(e.type, t, n),
        C = (e, t) => {
            let n = t === y.p6.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === g.iw.USER) {
                let i = h.default.getUser(e.value);
                if (null == i) return;
                return (0, r.jsx)(a.euF, {
                    size: n ? a._3J.SIZE_16 : a._3J.SIZE_24,
                    src: i.getAvatarURL(null == I ? void 0 : I.id, t),
                    status: n ? null : _.A.getStatus(i.id),
                    "aria-hidden": !0
                })
            }
            if ((null == e ? void 0 : e.type) === g.iw.ROLE) {
                var i;
                let n = null != I ? f.A.getRole(I.id, e.value) : void 0;
                if (null == n || null == I) return;
                let s = (0, o.fm)(I, n) ? (0, l.ox)(n, t) : null;
                return null != s ? (0, r.jsx)(u.A, A({}, s)) : (0, r.jsx)(a.iTF, {
                    size: "custom",
                    color: null != (i = n.colorString) ? i : b.TpD,
                    height: t,
                    width: t
                })
            }
        },
        N = e => {
            let t = null;
            if (e.type === g.iw.USER) {
                let n = h.default.getUser(e.value);
                null != n && (t = (0, r.jsx)(s.A, {
                    className: O.Tc,
                    usernameClass: O.Xh,
                    discriminatorClass: O.D2,
                    botClass: O.Od,
                    user: n,
                    forceUsername: !0
                }))
            } else if (e.type === g.iw.ROLE) {
                let n = null != I ? f.A.getRole(I.id, e.value) : void 0,
                    i = null == n ? null : null == S ? void 0 : S[n.id];
                null != i && (t = (0, r.jsxs)("div", {
                    className: O.Ly,
                    children: [(0, r.jsx)(a.nys, {
                        size: "sm",
                        color: "currentColor",
                        className: O.jh
                    }), (0, r.jsx)("span", {
                        className: O.NT,
                        children: i
                    })]
                }))
            }
            return (0, r.jsxs)("span", {
                className: O.Pf,
                children: [(0, r.jsx)("span", {
                    className: O.QK,
                    children: e.label
                }), t]
            })
        },
        w = i.useMemo(() => (0, E.iA)(e.defaultValues, null == I ? void 0 : I.id), [e.defaultValues, I]);
    return (0, r.jsx)(y.Ay, {
        selectActionComponent: e,
        queryOptions: T,
        renderIcon: C,
        renderOptionLabel: N,
        defaultValues: w
    })
}