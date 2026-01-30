/** Chunk was on 49559 **/
/** chunk id: 367232, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
});
var r = n(627968),
    l = n(64700),
    a = n(397927),
    i = n(297413),
    o = n(376304),
    s = n(201275),
    c = n(386784),
    u = n(657048),
    d = n(734057),
    p = n(317525),
    m = n(71393),
    f = n(290863),
    O = n(287809),
    b = n(207963),
    y = n(489414),
    h = n(289770),
    j = n(247818),
    g = n(652215),
    A = n(794998);

function v(e) {
    let t = (0, b.jc)(),
        n = null == t ? void 0 : t.channelId,
        v = d.A.getChannel(n),
        E = m.A.getGuild(null == v ? void 0 : v.getGuildId()),
        C = (0, c.A)(null == E ? void 0 : E.id, h.S$),
        x = l.useMemo(() => (0, h.iA)(e.defaultValues, null == E ? void 0 : E.id), [e.defaultValues, E]);
    return (0, r.jsx)(j.Ay, {
        selectActionComponent: e,
        queryOptions: t => (0, h.YV)(e.type, t, n),
        renderIcon: (e, t) => {
            let n = t === j.p6.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === y.iw.USER) {
                let l = O.default.getUser(e.value);
                if (null == l) return;
                return (0, r.jsx)(a.euF, {
                    size: n ? a._3J.SIZE_16 : a._3J.SIZE_24,
                    src: l.getAvatarURL(null == E ? void 0 : E.id, t),
                    status: n ? null : f.A.getStatus(l.id),
                    "aria-hidden": !0
                })
            }
            if ((null == e ? void 0 : e.type) === y.iw.ROLE) {
                var l;
                let n = null != E ? p.A.getRole(E.id, e.value) : void 0;
                if (null == n || null == E) return;
                let i = (0, o.fm)(E, n) ? (0, s.ox)(n, t) : null;
                return null != i ? (0, r.jsx)(u.A, function(e) {
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
                }({}, i)) : (0, r.jsx)(a.iTF, {
                    size: "custom",
                    color: null != (l = n.colorString) ? l : g.TpD,
                    height: t,
                    width: t
                })
            }
        },
        renderOptionLabel: e => {
            let t = null;
            if (e.type === y.iw.USER) {
                let n = O.default.getUser(e.value);
                null != n && (t = (0, r.jsx)(i.A, {
                    className: A.Tc,
                    usernameClass: A.Xh,
                    discriminatorClass: A.D2,
                    botClass: A.Od,
                    user: n,
                    forceUsername: !0
                }))
            } else if (e.type === y.iw.ROLE) {
                let n = null != E ? p.A.getRole(E.id, e.value) : void 0,
                    l = null == n ? null : null == C ? void 0 : C[n.id];
                null != l && (t = (0, r.jsxs)("div", {
                    className: A.Ly,
                    children: [(0, r.jsx)(a.nys, {
                        size: "sm",
                        color: "currentColor",
                        className: A.jh
                    }), (0, r.jsx)("span", {
                        className: A.NT,
                        children: l
                    })]
                }))
            }
            return (0, r.jsxs)("span", {
                className: A.Pf,
                children: [(0, r.jsx)("span", {
                    className: A.QK,
                    children: e.label
                }), t]
            })
        },
        defaultValues: x
    })
}