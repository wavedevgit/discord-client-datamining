/** chunk id: 942528, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(397927),
    c = n(734057),
    d = n(309010),
    u = n(287809),
    m = n(562153),
    x = n(420706),
    g = n(322789),
    h = n(506326),
    f = n(985018),
    j = n(505502),
    p = n(851822);
let _ = e => {
    let {
        entry: t,
        onClose: n,
        onReaction: a,
        onRequestOpen: _,
        disableActivityProfileLinks: I,
        customCTA: v,
        popoutClassname: E,
        popoutPosition: A = "right"
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
    return null == T ? null : (0, i.jsx)(o.YNO, {
        targetElementRef: N,
        position: A,
        renderPopout: e => {
            let {
                closePopout: l,
                updatePosition: s
            } = e;
            return (0, i.jsx)("div", {
                className: E,
                children: (0, i.jsx)(x.Oo, {
                    entry: t,
                    closePopout: l,
                    updatePopoutPosition: s,
                    onReaction: () => {
                        a?.(), n(), l()
                    },
                    onUserPopoutClosed: () => l(),
                    disableGameProfileLinks: !0,
                    disableActivityProfileLinks: I
                })
            })
        },
        positionKey: `'content-entry-${t.id}`,
        onRequestOpen: () => {
            _?.()
        },
        children: e => (0, i.jsx)(o.DUT, {
            innerRef: N,
            ...e,
            className: j.GA,
            children: (0, i.jsx)(o.vN3, {
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
                            userName: S
                        })
                    }), (0, i.jsx)("div", {
                        className: j.Su,
                        children: (0, i.jsxs)("div", {
                            className: s()(p.fi, p.Kt),
                            children: [(0, i.jsx)(o.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                lineClamp: 1,
                                children: S
                            }), (0, i.jsx)(h.mG, {
                                location: h.N5.APP_LAUNCHER,
                                children: g.n.map((e, n) => (0, i.jsx)(e, {
                                    entry: t
                                }, n))
                            })]
                        })
                    }), null != v ? v : (0, i.jsx)("div", {
                        className: j.Br,
                        children: (0, i.jsx)(o.W4J, {
                            size: "sm"
                        })
                    })]
                })
            })
        })
    })
}