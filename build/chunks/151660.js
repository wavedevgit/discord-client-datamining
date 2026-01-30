/** chunk id: 151660, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(896048), n(864466), n(443073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(888675),
    u = n(118517),
    d = n(679382),
    p = n(148355),
    m = n(954571),
    f = n(203982),
    g = n(420208),
    _ = n(652215),
    h = n(985018),
    b = n(173990);

function A(e) {
    let {
        message: t,
        channel: l,
        compact: A
    } = e, y = (0, s.yK)([d.A], () => Array.from(d.A.getAllGuildStickers().values()).flat()).slice(0, 20), [v, x] = i.useState(null);
    return (i.useEffect(() => {
        let e = setInterval(() => {
            y.length > 0 && x(y[Math.floor(Math.random() * y.length)])
        }, 500);
        return () => clearInterval(e)
    }, [y]), null == l.guild_id) ? null : (0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.A, {
            className: a()(b.r, {
                [b.o]: A
            }),
            icon: n(394803),
            compact: A,
            children: (0, r.jsx)("div", {
                className: a()({
                    [b.o]: A
                }),
                children: (0, r.jsx)("div", {
                    className: a()({
                        [b.o]: A
                    }),
                    children: "" !== t.content ? t.content : h.intl.string(h.t.wnn1Dc)
                })
            })
        }), (0, r.jsxs)(o.ButtonGroup, {
            children: [(0, r.jsx)(o.Button, {
                variant: "secondary",
                text: h.intl.string(h.t.ASZTf3),
                icon: o.XGR,
                onClick: () => {
                    m.default.track(_.HAw.CHANNEL_PROMPT_ACTION_CLICKED, {
                        message_id: t.id,
                        channel_id: l.id,
                        guild_id: l.guild_id,
                        action_type: "upload_file"
                    }), f._.dispatch(_.jej.UPLOAD_FILE, {
                        channelId: l.id
                    }), (0, u.Yf)({
                        message: t,
                        channel: l,
                        shouldMention: !0
                    })
                }
            }), (0, r.jsx)(o.Button, {
                variant: "secondary",
                text: h.intl.string(h.t.gbrrAz),
                icon: null != v ? {
                    type: "sticker",
                    asset: v,
                    component: p.A
                } : o.nm2,
                onClick: () => {
                    m.default.track(_.HAw.CHANNEL_PROMPT_ACTION_CLICKED, {
                        message_id: t.id,
                        channel_id: l.id,
                        guild_id: l.guild_id,
                        action_type: "sticker"
                    }), (0, g.Q)(t.id, l)
                }
            })]
        })]
    })
}