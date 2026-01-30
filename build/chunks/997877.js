/** chunk id: 997877, original params: e,t,n (module,exports,require) **/
n.d(t, {
    x: () => q
});
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(989349),
    u = n.n(i),
    o = n(837381),
    c = n(311907),
    d = n(397927),
    f = n(966327),
    b = n(928039),
    p = n(629357),
    m = n(47167),
    g = n(598104),
    h = n(255266),
    y = n(72563),
    x = n(223863),
    j = n(95701),
    A = n(734057),
    v = n(71393),
    O = n(576705),
    S = n(290863),
    _ = n(222823),
    P = n(994500),
    T = n(287809),
    w = n(405269),
    E = n(403362),
    C = n(427262),
    L = n(652215),
    N = n(790782),
    k = n(985018),
    D = n(667052);

function R(e) {
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

function I(e, t) {
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

function M(e, t) {
    if (null == e) return {};
    var n, r, l, s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
        return s
    }
    if (s = function(e, t) {
            if (null == e) return {};
            var n, r, l = {},
                s = Object.getOwnPropertyNames(e);
            for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
    return s
}

function G(e) {
    let {
        destination: t,
        icon: n,
        label: s,
        subLabel: i,
        selected: u,
        disabled: c,
        onPressDestination: f,
        "aria-setsize": b,
        "aria-posinset": p
    } = e, m = (0, o.rm)(t.id), g = l.useCallback(() => {
        c || null == f || f(t)
    }, [f, c, t]);
    return (0, r.jsxs)(d.DUT, I(R({
        className: a()(D.HP, {
            [D.r9]: c
        }),
        onClick: g,
        "aria-selected": u,
        "aria-setsize": b,
        "aria-posinset": p
    }, m), {
        children: [(0, r.jsxs)("div", {
            className: D.D_,
            children: [(0, r.jsx)("div", {
                className: D.P0,
                children: n
            }), (0, r.jsxs)("div", {
                className: D.WD,
                children: [(0, r.jsx)(d.Text, {
                    tag: "strong",
                    className: D.Pf,
                    variant: "text-md/semibold",
                    lineClamp: 1,
                    children: s
                }), (0, r.jsx)(d.Text, {
                    className: D.J2,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: i
                })]
            })]
        }), (0, r.jsx)("div", {
            className: D.kv,
            children: (0, r.jsx)(d.P7L, {
                checked: u
            })
        })]
    }))
}

function U(e) {
    let {
        user: t,
        subLabel: n
    } = e, l = M(e, ["user", "subLabel"]), s = C.Ay.useName(t), a = C.Ay.useUserTag(t, {
        decoration: "never"
    }), i = (0, c.bG)([P.A], () => P.A.getNickname(t.id)), u = (0, c.bG)([S.A], () => S.A.getStatus(t.id));
    return (0, r.jsx)(G, I(R({}, l), {
        icon: (0, r.jsx)(f.A, {
            "aria-hidden": !0,
            size: d._3J.SIZE_32,
            user: t,
            status: u
        }),
        label: null != i ? i : s,
        subLabel: null != n ? n : a
    }))
}

function H(e) {
    let {
        channel: t,
        subLabel: n
    } = e, l = M(e, ["channel", "subLabel"]), s = (0, m.Ay)(t), a = (0, y.i)(t);
    return (0, r.jsx)(G, I(R({}, l), {
        icon: (0, r.jsx)(g.A, {
            "aria-hidden": !0,
            size: d._3J.SIZE_32,
            channel: t
        }),
        label: s,
        subLabel: null != n ? n : a
    }))
}

function V(e) {
    let {
        channel: t,
        subLabel: n
    } = e, l = M(e, ["channel", "subLabel"]), s = (0, c.bG)([v.A], () => v.A.getGuild(null == t ? void 0 : t.guild_id)), a = (0, m.Ay)(t), i = (0, c.bG)([A.A, T.default, P.A], () => {
        let e = A.A.getChannel(t.parent_id);
        return null == e ? null : (0, m.m1)(e, T.default, P.A, !1)
    }), o = (0, c.bG)([_.Ay], () => _.Ay.lastMessageTimestamp(t.id, N.P.CHANNEL)), f = null == s ? void 0 : s.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? d.bSJ : d.N$i;
        f = (0, r.jsxs)("div", {
            className: D.vr,
            children: [(0, r.jsx)(e, {
                color: d.LU0.colors.TEXT_SUBTLE,
                className: D.Q9
            }), (0, r.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                lineClamp: 1,
                children: i
            }), null != o ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(d.Text, {
                    className: D.Ql,
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: "•"
                }), (0, r.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: (0, w.Fe)(u()(o))
                })]
            }) : null]
        })
    }
    return (0, r.jsx)(G, I(R({}, l), {
        icon: (0, r.jsx)(h.A, {
            size: h.q.SMALL_32,
            guild: s,
            channel: t
        }),
        label: a,
        subLabel: null != n ? n : f
    }))
}

function q(e) {
    let {
        rowData: t,
        selectedDestinations: n,
        handleToggleDestination: s,
        disableSelection: a
    } = e, i = M(e, ["rowData", "selectedDestinations", "handleToggleDestination", "disableSelection"]), u = l.useMemo(() => [t.length], [t.length]), c = l.useCallback(() => 48, []), f = l.useMemo(() => {
        var e;
        return null != (e = null == n ? void 0 : n.map(x.I)) ? e : []
    }, [n]), m = l.useCallback(e => {
        let {
            section: n,
            row: l
        } = e;
        if (n > 0) return;
        let {
            type: i,
            record: u
        } = t[l];
        if (i === p.rD.HEADER) return;
        let o = i === p.rD.USER ? {
                type: "user",
                id: u.id
            } : {
                type: "channel",
                id: u.id
            },
            c = (0, x.I)(o),
            d = function(e) {
                if (e instanceof j.YB && (0, j.zy)(e.type) && null != e.rateLimitPerUser && e.rateLimitPerUser > 0 && !(O.A.can(L.xBc.MANAGE_CHANNELS, e) || O.A.can(L.xBc.MANAGE_MESSAGES, e))) return {
                    label: k.intl.string(k.t.Icu3bf)
                }
            }(u),
            b = f.includes(c),
            m = {
                key: c,
                destination: o,
                subLabel: null != d ? d.label : void 0,
                disabled: a && !b || null != d,
                selected: b,
                onPressDestination: s,
                "aria-posinset": l + 1,
                "aria-setsize": t.length
            };
        return i === p.rD.USER ? (0, r.jsx)(U, R({
            user: u
        }, m)) : i === p.rD.GROUP_DM ? (0, r.jsx)(H, R({
            channel: u
        }, m)) : i === p.rD.TEXT_CHANNEL || i === p.rD.VOICE_CHANNEL ? (0, r.jsx)(V, R({
            channel: u
        }, m)) : void(0, E.xb)(i)
    }, [a, s, t, f]), g = l.useRef(null), h = (0, b.A)("share-command-modal", g);
    return (0, r.jsx)(o.hD, {
        navigator: h,
        children: (0, r.jsx)(o.PR, {
            children: e => {
                let {
                    ref: t
                } = e, n = M(e, ["ref"]);
                return (0, r.jsx)(d.OZj, I(R({
                    ref: e => {
                        var n;
                        g.current = e, t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null
                    }
                }, n, i), {
                    sections: u,
                    sectionHeight: 0,
                    renderRow: m,
                    rowHeight: c
                }))
            }
        })
    })
}