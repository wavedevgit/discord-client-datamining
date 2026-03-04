/** chunk id: 942528, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    c = n(397927),
    o = n(734057),
    d = n(309010),
    u = n(287809),
    m = n(562153),
    x = n(420706),
    g = n(322789),
    h = n(506326),
    f = n(985018),
    j = n(505502),
    p = n(851822);
let I = e => {
    let {
        entry: t,
        onClose: n,
        onReaction: a,
        onRequestOpen: I,
        disableActivityProfileLinks: v,
        customCTA: E,
        popoutClassname: A,
        popoutPosition: _ = "right"
    } = e, N = l.useRef(null), T = (0, r.bG)([d.A, o.A], () => o.A.getChannel(d.A.getChannelId())), S = (0, r.bG)([u.default], () => u.default.getUser(t.author_id)), {
        nick: C,
        avatar: b
    } = l.useMemo(() => {
        let e = S?.getAvatarURL(T?.guild_id, 48, !1);
        return {
            nick: m.Ay.getName(T?.guild_id, T?.id, S),
            avatar: e
        }
    }, [S, T]);
    return null == S ? null : (0, i.jsx)(c.YNO, {
        targetElementRef: N,
        position: _,
        renderPopout: e => {
            let {
                closePopout: l,
                updatePosition: s
            } = e;
            return (0, i.jsx)("div", {
                className: A,
                children: (0, i.jsx)(x.Oo, {
                    entry: t,
                    closePopout: l,
                    updatePopoutPosition: s,
                    onReaction: () => {
                        a?.(), n(), l()
                    },
                    onUserPopoutClosed: () => l(),
                    disableGameProfileLinks: !0,
                    disableActivityProfileLinks: v
                })
            })
        },
        positionKey: `'content-entry-${t.id}`,
        onRequestOpen: () => {
            I?.()
        },
        children: e => (0, i.jsx)(c.DUT, {
            innerRef: N,
            ...e,
            className: j.GA,
            children: (0, i.jsx)(c.vN3, {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: 4,
                    right: 4
                },
                children: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("img", {
                        className: j.my,
                        src: b,
                        alt: f.intl.formatToPlainString(f.t.IzVXxY, {
                            userName: C
                        })
                    }), (0, i.jsx)("div", {
                        className: j.Su,
                        children: (0, i.jsxs)("div", {
                            className: s()(p.fi, p.Kt),
                            children: [(0, i.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                lineClamp: 1,
                                children: C
                            }), (0, i.jsx)(h.mG, {
                                location: h.N5.APP_LAUNCHER,
                                children: g.n.map((e, n) => (0, i.jsx)(e, {
                                    entry: t
                                }, n))
                            })]
                        })
                    }), null != E ? E : (0, i.jsx)("div", {
                        className: j.Br,
                        children: (0, i.jsx)(c.W4J, {
                            size: "sm"
                        })
                    })]
                })
            })
        })
    })
}