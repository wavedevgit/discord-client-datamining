/** chunk id: 942528, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => p
});
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(311907),
    c = i(397927),
    o = i(734057),
    d = i(309010),
    u = i(287809),
    m = i(562153),
    x = i(420706),
    g = i(322789),
    h = i(506326),
    f = i(985018),
    j = i(505502),
    v = i(851822);
let p = e => {
    let {
        entry: t,
        onClose: i,
        onReaction: a,
        onRequestOpen: p,
        disableActivityProfileLinks: A,
        customCTA: I,
        popoutClassname: _,
        popoutPosition: N = "right"
    } = e, E = l.useRef(null), S = (0, r.bG)([d.A, o.A], () => o.A.getChannel(d.A.getChannelId())), T = (0, r.bG)([u.default], () => u.default.getUser(t.author_id)), {
        nick: C,
        avatar: b
    } = l.useMemo(() => {
        let e = T?.getAvatarURL(S?.guild_id, 48, !1);
        return {
            nick: m.Ay.getName(S?.guild_id, S?.id, T),
            avatar: e
        }
    }, [T, S]);
    return null == T ? null : (0, n.jsx)(c.YNO, {
        targetElementRef: E,
        position: N,
        renderPopout: e => {
            let {
                closePopout: l,
                updatePosition: s
            } = e;
            return (0, n.jsx)("div", {
                className: _,
                children: (0, n.jsx)(x.Oo, {
                    entry: t,
                    closePopout: l,
                    updatePopoutPosition: s,
                    onReaction: () => {
                        a?.(), i(), l()
                    },
                    onUserPopoutClosed: () => l(),
                    disableGameProfileLinks: !0,
                    disableActivityProfileLinks: A
                })
            })
        },
        positionKey: `'content-entry-${t.id}`,
        onRequestOpen: () => {
            p?.()
        },
        children: e => (0, n.jsx)(c.DUT, {
            innerRef: E,
            ...e,
            className: j.GA,
            children: (0, n.jsx)(c.vN3, {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: 4,
                    right: 4
                },
                children: (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("img", {
                        className: j.my,
                        src: b,
                        alt: f.intl.formatToPlainString(f.t.IzVXxY, {
                            userName: C
                        })
                    }), (0, n.jsx)("div", {
                        className: j.Su,
                        children: (0, n.jsxs)("div", {
                            className: s()(v.fi, v.Kt),
                            children: [(0, n.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                lineClamp: 1,
                                children: C
                            }), (0, n.jsx)(h.mG, {
                                location: h.N5.APP_LAUNCHER,
                                children: g.n.map((e, i) => (0, n.jsx)(e, {
                                    entry: t
                                }, i))
                            })]
                        })
                    }), null != I ? I : (0, n.jsx)("div", {
                        className: j.Br,
                        children: (0, n.jsx)(c.W4J, {
                            size: "sm"
                        })
                    })]
                })
            })
        })
    })
}