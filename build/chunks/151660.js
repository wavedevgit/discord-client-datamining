/** chunk id: 151660, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(397927),
    c = n(888675),
    d = n(118517),
    u = n(679382),
    m = n(148355),
    _ = n(954571),
    A = n(203982),
    f = n(420208),
    h = n(652215),
    g = n(985018),
    E = n(608696);

function p(e) {
    let {
        message: t,
        channel: a,
        compact: p
    } = e, x = (0, s.yK)([u.A], () => Array.from(u.A.getAllGuildStickers().values()).flat()).slice(0, 20), [C, I] = l.useState(null);
    return (l.useEffect(() => {
        let e = setInterval(() => {
            x.length > 0 && I(x[Math.floor(Math.random() * x.length)])
        }, 500);
        return () => clearInterval(e)
    }, [x]), null == a.guild_id) ? null : (0, i.jsxs)("div", {
        children: [(0, i.jsx)(c.A, {
            className: r()(E.r, {
                [E.o]: p
            }),
            icon: n(617184),
            compact: p,
            children: (0, i.jsx)("div", {
                className: r()({
                    [E.o]: p
                }),
                children: (0, i.jsx)("div", {
                    className: r()({
                        [E.o]: p
                    }),
                    children: "" !== t.content ? t.content : g.intl.string(g.t.wnn1Dc)
                })
            })
        }), (0, i.jsxs)(o.ButtonGroup, {
            children: [(0, i.jsx)(o.Button, {
                variant: "secondary",
                text: g.intl.string(g.t.ASZTf3),
                icon: o.XGR,
                onClick: () => {
                    _.default.track(h.HAw.CHANNEL_PROMPT_ACTION_CLICKED, {
                        message_id: t.id,
                        channel_id: a.id,
                        guild_id: a.guild_id,
                        action_type: "upload_file"
                    }), A._.dispatch(h.jej.UPLOAD_FILE, {
                        channelId: a.id
                    }), (0, d.Yf)({
                        message: t,
                        channel: a,
                        shouldMention: !0
                    })
                }
            }), (0, i.jsx)(o.Button, {
                variant: "secondary",
                text: g.intl.string(g.t.gbrrAz),
                icon: null != C ? {
                    type: "sticker",
                    asset: C,
                    component: m.A
                } : o.nm2,
                onClick: () => {
                    _.default.track(h.HAw.CHANNEL_PROMPT_ACTION_CLICKED, {
                        message_id: t.id,
                        channel_id: a.id,
                        guild_id: a.guild_id,
                        action_type: "sticker"
                    }), (0, f.Q)(t.id, a)
                }
            })]
        })]
    })
}