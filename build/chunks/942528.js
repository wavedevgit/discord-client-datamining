/** chunk id: 942528, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => p
});
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(311907),
    o = i(397927),
    c = i(734057),
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
        customCTA: E,
        popoutClassname: I,
        popoutPosition: _ = "right"
    } = e, N = l.useRef(null), C = (0, r.bG)([d.A, c.A], () => c.A.getChannel(d.A.getChannelId())), T = (0, r.bG)([u.default], () => u.default.getUser(t.author_id)), {
        nick: S,
        avatar: b
    } = l.useMemo(() => {
        let e = T?.getAvatarURL(C?.guild_id, 48, !1);
        return {
            nick: m.Ay.getName(C?.guild_id, C?.id, T),
            avatar: e
        }
    }, [T, C]);
    return null == T ? null : (0, n.jsx)(o.YNO, {
        targetElementRef: N,
        position: _,
        renderPopout: e => {
            let {
                closePopout: l,
                updatePosition: s
            } = e;
            return (0, n.jsx)("div", {
                className: I,
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
        children: e => (0, n.jsx)(o.DUT, {
            innerRef: N,
            ...e,
            className: j.GA,
            children: (0, n.jsx)(o.vN3, {
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
                            userName: S
                        })
                    }), (0, n.jsx)("div", {
                        className: j.Su,
                        children: (0, n.jsxs)("div", {
                            className: s()(v.fi, v.Kt),
                            children: [(0, n.jsx)(o.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                lineClamp: 1,
                                children: S
                            }), (0, n.jsx)(h.mG, {
                                location: h.N5.APP_LAUNCHER,
                                children: g.n.map((e, i) => (0, n.jsx)(e, {
                                    entry: t
                                }, i))
                            })]
                        })
                    }), null != E ? E : (0, n.jsx)("div", {
                        className: j.Br,
                        children: (0, n.jsx)(o.W4J, {
                            size: "sm"
                        })
                    })]
                })
            })
        })
    })
}