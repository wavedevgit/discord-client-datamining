/** chunk id: 61916, original params: e,t,r (module,exports,require) **/
r.d(t, {
    s: () => k
});
var n = r(627968),
    l = r(64700),
    s = r(503698),
    i = r.n(s),
    a = r(989349),
    u = r.n(a),
    o = r(837381),
    c = r(311907),
    A = r(397927),
    f = r(966327),
    h = r(629357),
    d = r(47167),
    b = r(598104),
    _ = r(255266),
    p = r(72563),
    y = r(223863),
    O = r(734057),
    E = r(71393),
    I = r(290863),
    L = r(222823),
    g = r(994500),
    m = r(287809),
    P = r(405269),
    N = r(403362),
    j = r(427262),
    C = r(513480),
    x = r(790782),
    S = r(967789);

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        })
    }
    return e
}

function D(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
        }
        return r
    })(Object(t)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
    }), e
}

function G(e, t) {
    if (null == e) return {};
    var r, n, l, s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
        return s
    }
    if (s = function(e, t) {
            if (null == e) return {};
            var r, n, l = {},
                s = Object.getOwnPropertyNames(e);
            for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
    return s
}

function T(e) {
    let {
        destination: t,
        icon: r,
        label: s,
        subLabel: a,
        selected: u,
        disabled: c,
        onPressDestination: f,
        "aria-setsize": h,
        "aria-posinset": d,
        className: b
    } = e, _ = (0, o.rm)(t.id), p = l.useCallback(() => {
        null == f || f(t)
    }, [f, t]);
    return (0, n.jsxs)(A.DUT, D(v({
        className: i()(S.HP, b, {
            [S.r9]: c
        }),
        onClick: c ? void 0 : p,
        "aria-selected": u,
        "aria-setsize": h,
        "aria-posinset": d
    }, _), {
        children: [(0, n.jsxs)("div", {
            className: S.D_,
            children: [(0, n.jsx)("div", {
                className: S.P0,
                children: r
            }), (0, n.jsxs)("div", {
                className: S.WD,
                children: [(0, n.jsx)(A.Text, {
                    tag: "strong",
                    color: c ? "text-muted" : void 0,
                    variant: "text-md/semibold",
                    lineClamp: 1,
                    children: s
                }), (0, n.jsx)(A.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: a
                })]
            })]
        }), (0, n.jsx)("div", {
            className: S.kv,
            children: (0, n.jsx)(A.P7L, {
                checked: !!u,
                disabled: c
            })
        })]
    }))
}

function F(e) {
    let {
        user: t,
        subLabel: r
    } = e, l = G(e, ["user", "subLabel"]), s = j.Ay.useName(t), i = j.Ay.useUserTag(t, {
        decoration: "never"
    }), a = (0, c.bG)([g.A], () => g.A.getNickname(t.id)), u = (0, c.bG)([I.A], () => I.A.getStatus(t.id));
    return (0, n.jsx)(T, D(v({}, l), {
        icon: (0, n.jsx)(f.A, {
            "aria-hidden": !0,
            size: A._3J.SIZE_32,
            user: t,
            status: u
        }),
        label: null != a ? a : s,
        subLabel: null != r ? r : i
    }))
}

function w(e) {
    let {
        channel: t,
        subLabel: r
    } = e, l = G(e, ["channel", "subLabel"]), s = (0, d.Ay)(t), i = (0, p.i)(t);
    return (0, n.jsx)(T, D(v({}, l), {
        icon: (0, n.jsx)(b.A, {
            "aria-hidden": !0,
            size: A._3J.SIZE_32,
            channel: t
        }),
        label: s,
        subLabel: null != r ? r : i
    }))
}

function W(e) {
    let {
        channel: t,
        subLabel: r
    } = e, l = G(e, ["channel", "subLabel"]), s = (0, c.bG)([E.A], () => E.A.getGuild(null == t ? void 0 : t.guild_id)), i = (0, d.Ay)(t), a = (0, c.bG)([O.A, m.default, g.A], () => {
        let e = O.A.getChannel(t.parent_id);
        return null == e ? null : (0, d.m1)(e, m.default, g.A, !1)
    }), o = (0, c.bG)([L.Ay], () => L.Ay.lastMessageTimestamp(t.id, x.P.CHANNEL)), f = null == s ? void 0 : s.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? A.bSJ : A.N$i;
        f = (0, n.jsxs)("div", {
            className: S.vr,
            children: [(0, n.jsx)(e, {
                color: A.LU0.colors.TEXT_SUBTLE,
                className: S.Q9
            }), (0, n.jsx)(A.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                lineClamp: 1,
                children: a
            }), null != o ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(A.Text, {
                    className: S.Ql,
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: "•"
                }), (0, n.jsx)(A.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: (0, P.Fe)(u()(o))
                })]
            }) : null]
        })
    }
    return (0, n.jsx)(T, D(v({}, l), {
        icon: (0, n.jsx)(_.A, {
            size: _.q.SMALL_32,
            guild: s,
            channel: t
        }),
        label: i,
        subLabel: null != r ? r : f
    }))
}

function k(e) {
    let {
        rowData: t,
        message: r,
        originChannel: s,
        selectedDestinations: i,
        handleToggleDestination: a,
        disableSelection: u,
        rowClassName: o,
        validateDestination: c
    } = e, A = l.useMemo(() => {
        var e;
        return null != (e = null == i ? void 0 : i.map(y.I)) ? e : []
    }, [i]), f = l.useCallback(e => {
        let {
            section: l,
            row: i
        } = e;
        if (l > 0) return;
        let {
            type: f,
            record: d
        } = t[i];
        if (f === h.rD.HEADER) return;
        let b = f === h.rD.USER ? {
                type: "user",
                id: d.id
            } : {
                type: "channel",
                id: d.id
            },
            _ = (0, y.I)(b),
            p = (0, C.pE)(r, s, d, c),
            O = A.includes(_),
            E = {
                key: _,
                message: r,
                destination: b,
                subLabel: null != p ? p.label : void 0,
                disabled: u && !O || null != p,
                selected: O,
                onPressDestination: a,
                "aria-posinset": i + 1,
                "aria-setsize": t.length,
                className: o
            };
        return f === h.rD.USER ? (0, n.jsx)(F, v({
            user: d
        }, E)) : f === h.rD.GROUP_DM ? (0, n.jsx)(w, v({
            channel: d
        }, E)) : f === h.rD.TEXT_CHANNEL || f === h.rD.VOICE_CHANNEL ? (0, n.jsx)(W, v({
            channel: d
        }, E)) : void(0, N.xb)(f)
    }, [u, a, r, s, t, A, o, c]);
    return {
        sections: [t.length],
        sectionHeight: 0,
        rowHeight: 48,
        renderRow: f
    }
}