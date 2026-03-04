/** chunk id: 942528, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => v
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
    p = i(851822);
let v = e => {
    let {
        entry: t,
        onClose: i,
        onReaction: a,
        onRequestOpen: v,
        disableActivityProfileLinks: A,
        customCTA: E,
        popoutClassname: I,
        popoutPosition: _ = "right"
    } = e, N = l.useRef(null), T = (0, r.bG)([d.A, o.A], () => o.A.getChannel(d.A.getChannelId())), C = (0, r.bG)([u.default], () => u.default.getUser(t.author_id)), {
        nick: S,
        avatar: b
    } = l.useMemo(() => {
        let e = C?.getAvatarURL(T?.guild_id, 48, !1);
        return {
            nick: m.Ay.getName(T?.guild_id, T?.id, C),
            avatar: e
        }
    }, [C, T]);
    return null == C ? null : (0, n.jsx)(c.YNO, {
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
            v?.()
        },
        children: e => (0, n.jsx)(c.DUT, {
            innerRef: N,
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
                            userName: S
                        })
                    }), (0, n.jsx)("div", {
                        className: j.Su,
                        children: (0, n.jsxs)("div", {
                            className: s()(p.fi, p.Kt),
                            children: [(0, n.jsx)(c.Text, {
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
                        children: (0, n.jsx)(c.W4J, {
                            size: "sm"
                        })
                    })]
                })
            })
        })
    })
}