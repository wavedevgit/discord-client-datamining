/** chunk id: 914835, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(442433),
    u = n(793574),
    d = n(688810),
    h = n(713654),
    p = n(967144),
    f = n(342296),
    m = n(696451),
    g = n(287809),
    A = n(427262),
    b = n(314307),
    _ = n(652215),
    y = n(985018),
    v = n(790687);

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function O(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function C(e) {
    var t, i, h;
    let {
        userId: b,
        channel: _
    } = e, y = r.useRef(null), {
        analyticsLocations: C
    } = (0, d.Ay)(u.A.USERNAME), S = (0, s.bG)([g.default], () => g.default.getUser(b)), x = (0, s.bG)([m.Ay], () => null != b ? m.Ay.getMember(_.guild_id, b) : null), j = (0, p.gn)(_.guild_id, null != b ? b : void 0, null != (t = null == x ? void 0 : x.colorStrings) ? t : null);

    function I(e) {
        if (null == S) return null;
        (0, c.L3)(e, async () => {
            let {
                default: e
            } = await Promise.all([n.e("97262"), n.e("29534"), n.e("67447"), n.e("10905")]).then(n.bind(n, 708202));
            return t => (0, l.jsx)(e, O(E({}, t), {
                user: S,
                guildId: _.guild_id,
                channel: _
            }))
        })
    }
    let T = null != (i = null != (h = null == x ? void 0 : x.nick) ? h : A.Ay.getName(S)) ? i : "???",
        N = null == x ? void 0 : x.colorString;
    return null == S ? (0, l.jsx)("span", {
        className: a()(v.eM, v.sL),
        children: T
    }) : (0, l.jsx)(d.f5, {
        value: C,
        children: (0, l.jsx)(f.A, {
            targetElementRef: y,
            user: S,
            guildId: _.guild_id,
            channelId: _.id,
            roleId: null == x ? void 0 : x.colorRoleId,
            clickTrap: !0,
            children: e => (0, l.jsx)(o.DUT, O(E({}, e), {
                innerRef: y,
                tag: "span",
                className: v.eM,
                onContextMenu: I,
                children: (0, l.jsx)(o.gyj, {
                    name: T,
                    colorString: null != N ? N : null,
                    colorStrings: j
                })
            }))
        })
    })
}

function S(e) {
    let {
        channel: t
    } = e, {
        threadMetadata: n
    } = t;
    return null == n ? (0, l.jsx)("div", {
        style: {
            marginTop: -8
        }
    }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: (0, l.jsx)("div", {
                className: v.VA,
                children: y.intl.format(y.t.imPXd5, {
                    usernameHook: (e, n) => (0, l.jsx)(C, {
                        userId: t.ownerId,
                        channel: t
                    }, n)
                })
            })
        }), t.type === _.rbe.PRIVATE_THREAD ? (0, l.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: y.intl.string(y.t["1awbZG"])
        }) : null]
    })
}

function x(e) {
    var t;
    let {
        channel: n
    } = e, r = null != (t = (0, h.gU)(n)) ? t : o.ysw;
    return (0, l.jsxs)(b.Ay, {
        channelId: n.id,
        children: [(0, l.jsx)("div", {
            className: v.P0,
            children: (0, l.jsx)(r, {
                className: v.Kk
            })
        }), (0, l.jsx)(b.cr, {
            children: n.name
        }), (0, l.jsx)(S, {
            channel: n
        })]
    })
}