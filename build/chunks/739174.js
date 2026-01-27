/** Chunk was on 21968 **/
/** chunk id: 739174, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(284009),
    o = n.n(s),
    c = n(311907),
    d = n(990078),
    u = n(397927),
    p = n(442433),
    m = n(392054),
    g = n(168186),
    b = n(713654),
    f = n(201275),
    h = n(657048),
    x = n(734057),
    j = n(696451),
    O = n(317525),
    y = n(351906),
    A = n(287809),
    v = n(427262),
    _ = n(652215),
    N = n(985018),
    w = n(393800);

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i
        })
    }
    return e
}

function T(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function C(e) {
    let {
        guild: t,
        id: l,
        type: a,
        isLocked: s,
        lockTooltipText: c
    } = e, d = !s || null != c;
    o()(d, "No lockTooltipText provided while isLocked=true");
    let u = r.useCallback(e => {
        (0, p.L3)(e, async () => {
            let {
                default: e
            } = await n.e("15687").then(n.bind(n, 646938));
            return t => (0, i.jsx)(e, T(E({}, t), {
                id: l,
                label: N.intl.string(N.t.oJ1Muw)
            }))
        })
    }, [l]);
    switch (a) {
        case m.RA.CHANNEL:
            return (0, i.jsx)(S, {
                guild: t,
                id: l,
                isLocked: s,
                lockTooltipText: c,
                openEntryContextMenu: u
            });
        case m.RA.ROLE:
            return (0, i.jsx)(I, {
                guild: t,
                id: l,
                isLocked: s,
                lockTooltipText: c,
                openEntryContextMenu: u
            });
        case m.RA.USER:
            return (0, i.jsx)(P, {
                guild: t,
                id: l,
                isLocked: s,
                lockTooltipText: c,
                openEntryContextMenu: u
            })
    }
}

function S(e) {
    let {
        guild: t,
        id: n,
        isLocked: l,
        lockTooltipText: s,
        openEntryContextMenu: o
    } = e, d = (0, g.Ap)(t.id), {
        icon: p,
        name: m,
        categoryName: f
    } = (0, c.cf)([x.A], () => {
        if (d === n) return {
            name: N.intl.string(N.t["7YqSGx"]),
            icon: u.N$i
        };
        let e = x.A.getChannel(n),
            i = (null == e ? void 0 : e.parent_id) != null ? x.A.getChannel(e.parent_id) : null;
        return {
            icon: null != e ? (0, b.gU)(e, t) : null,
            name: null == e ? void 0 : e.name,
            categoryName: null == i ? void 0 : i.name
        }
    }, [d, t, n]), h = r.useCallback(e => {
        n !== d && o(e)
    }, [d, n, o]);
    return null == p || null == m ? null : (0, i.jsxs)("div", {
        onContextMenu: h,
        className: w.Cv,
        children: [(0, i.jsx)(p, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: a()(w.p, w.Sl)
        }), (0, i.jsx)(u.Text, {
            className: w.S3,
            color: "text-strong",
            variant: "text-md/normal",
            children: m
        }), null != f ? (0, i.jsxs)(u.Text, {
            className: w.Tc,
            variant: "text-sm/normal",
            children: ["(", f, ")"]
        }) : null, l ? (0, i.jsx)(k, {
            tooltipText: s
        }) : null]
    })
}

function I(e) {
    var t;
    let {
        guild: l,
        id: s,
        isLocked: o,
        lockTooltipText: d
    } = e, m = (0, c.bG)([O.A], () => O.A.getRole(l.id, s)), g = (0, f.$7)({
        guildId: l.id,
        roleId: s,
        size: 24
    }), b = r.useCallback(e => {
        null != l && null != m && (0, p.L3)(e, async () => {
            let {
                default: e
            } = await n.e("41072").then(n.bind(n, 165747));
            return t => (0, i.jsx)(e, T(E({}, t), {
                guild: l,
                role: m
            }))
        })
    }, [l, m]);
    return (null == m ? void 0 : m.name) == null ? null : (0, i.jsxs)("div", {
        onContextMenu: b,
        className: w.Cv,
        children: [null != g ? (0, i.jsx)(h.A, E({
            className: a()(w.__invalid_icon, w.Sl)
        }, g)) : (0, i.jsx)(u.iTF, {
            size: "custom",
            width: 23,
            height: 23,
            className: a()(w.a, w.Sl),
            color: null != (t = m.colorString) ? t : _.TpD
        }), (0, i.jsx)(u.Text, {
            className: w.S3,
            color: "text-strong",
            variant: "text-md/normal",
            children: m.name
        }), o ? (0, i.jsx)(k, {
            tooltipText: d
        }) : null]
    })
}

function P(e) {
    let {
        guild: t,
        id: n,
        isLocked: r,
        lockTooltipText: l,
        openEntryContextMenu: a
    } = e, s = (0, c.bG)([A.default], () => A.default.getUser(n)), o = (0, c.bG)([j.Ay], () => {
        var e;
        return null == (e = j.Ay.getMember(t.id, n)) ? void 0 : e.nick
    }, [t.id, n]), d = (0, c.bG)([y.A], () => y.A.hidePersonalInformation);
    return null == s ? null : (0, i.jsxs)("div", {
        onContextMenu: a,
        className: w.Cv,
        children: [(0, i.jsx)(u.euF, {
            className: w.Sl,
            src: s.getAvatarURL(t.id, 24),
            "aria-label": s.username,
            size: u._3J.SIZE_24
        }), (0, i.jsx)(u.Text, {
            className: w.S3,
            color: "text-strong",
            variant: "text-md/normal",
            children: null != o ? o : s.username
        }), d ? null : (0, i.jsx)(u.Text, {
            className: w.Tc,
            variant: "text-sm/normal",
            children: v.Ay.getUserTag(s)
        }), r ? (0, i.jsx)(k, {
            tooltipText: l
        }) : null]
    })
}

function k(e) {
    let {
        tooltipText: t
    } = e;
    return (0, i.jsx)(d.m, {
        text: t,
        children: (0, i.jsx)("div", {
            className: w.hz,
            children: (0, i.jsx)(u.XAi, {
                size: "xs",
                color: "currentColor"
            })
        })
    })
}