/** chunk id: 914835 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(442433),
    d = n(793574),
    u = n(688810),
    h = n(713654),
    m = n(967144),
    A = n(342296),
    g = n(696451),
    p = n(287809),
    f = n(427262),
    _ = n(314307),
    E = n(652215),
    x = n(985018),
    C = n(790687);

function S(e) {
    let {
        userId: t,
        channel: s
    } = e, h = l.useRef(null), {
        analyticsLocations: _
    } = (0, u.Ay)(d.A.USERNAME), E = (0, r.bG)([p.default], () => p.default.getUser(t)), x = (0, r.bG)([g.Ay], () => null != t ? g.Ay.getMember(s.guild_id, t) : null), S = (0, m.gn)(s.guild_id, t ?? void 0, x?.colorStrings ?? null);

    function T(e) {
        if (null == E) return null;
        (0, c.L3)(e, async () => {
            let {
                default: e
            } = await Promise.all([n.e("97262"), n.e("67447"), n.e("82793")]).then(n.bind(n, 708202));
            return t => (0, i.jsx)(e, {
                ...t,
                user: E,
                guildId: s.guild_id,
                channel: s
            })
        })
    }
    let I = x?.nick ?? f.Ay.getName(E) ?? "???",
        N = x?.colorString;
    return null == E ? (0, i.jsx)("span", {
        className: a()(C.eM, C.sL),
        children: I
    }) : (0, i.jsx)(u.f5, {
        value: _,
        children: (0, i.jsx)(A.A, {
            targetElementRef: h,
            user: E,
            guildId: s.guild_id,
            channelId: s.id,
            roleId: x?.colorRoleId,
            clickTrap: !0,
            children: e => (0, i.jsx)(o.DUT, {
                ...e,
                innerRef: h,
                tag: "span",
                className: C.eM,
                onContextMenu: T,
                children: (0, i.jsx)(o.gyj, {
                    name: I,
                    colorString: N ?? null,
                    colorStrings: S
                })
            })
        })
    })
}

function T(e) {
    let {
        channel: t
    } = e, {
        threadMetadata: n
    } = t;
    return null == n ? (0, i.jsx)("div", {
        style: {
            marginTop: -8
        }
    }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: (0, i.jsx)("div", {
                className: C.VA,
                children: x.intl.format(x.t.imPXd5, {
                    usernameHook: (e, n) => (0, i.jsx)(S, {
                        userId: t.ownerId,
                        channel: t
                    }, n)
                })
            })
        }), t.type === E.rbe.PRIVATE_THREAD ? (0, i.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: x.intl.string(x.t["1awbZG"])
        }) : null]
    })
}

function I(e) {
    let {
        channel: t
    } = e, n = (0, h.gU)(t) ?? o.ysw;
    return (0, i.jsxs)(_.Ay, {
        channelId: t.id,
        children: [(0, i.jsx)("div", {
            className: C.P0,
            children: (0, i.jsx)(n, {
                className: C.Kk
            })
        }), (0, i.jsx)(_.cr, {
            children: t.name
        }), (0, i.jsx)(T, {
            channel: t
        })]
    })
}