/** Chunk was on 92917 **/
/** chunk id: 483660, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968),
    i = n(64700),
    l = n(158954),
    a = n(956793),
    s = n(265422),
    o = n(986268),
    c = n(529200),
    u = n(309010),
    d = n(967198),
    p = n(954571),
    m = n(652215),
    f = n(985018),
    g = n(563111);

function h(e) {
    let {
        guild: t,
        channel: n,
        message: h
    } = e, _ = d.A.getGuildId(), b = u.A.getChannelId(_), A = i.useCallback(() => {
        var e;
        p.default.track(m.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
            author_id: null == (e = h.author) ? void 0 : e.id,
            link_guild_id: t.id,
            link_channel_id: n.id,
            link_channel_type: n.type,
            guild_id: _,
            channel_id: b
        }), (0, s.i)(t.id, n.id), a.default.selectVoiceChannel(n.id)
    }, [h, t, n, _, b]), y = (0, r.jsx)(c.A.Channel, {
        channel: n
    });
    return (0, r.jsx)(c.A, {
        children: (0, r.jsxs)(c.A.Body, {
            children: [(0, r.jsxs)("div", {
                className: g.iH,
                children: [(0, r.jsx)(c.A.Icon, {
                    guild: t
                }), (0, r.jsx)(c.A.Info, {
                    title: y,
                    onClick: A,
                    children: (0, r.jsxs)("span", {
                        className: g.FA,
                        children: [f.intl.format(f.t["2wimj5"], {
                            guildName: t.name
                        }), (0, r.jsx)("span", {
                            className: g.E3,
                            children: (0, r.jsx)(o.A, {
                                guild: t,
                                isBannerVisible: !1
                            })
                        })]
                    })
                })]
            }), (0, r.jsx)("div", {
                className: g.UD,
                children: (0, r.jsx)(l.$nd, {
                    fullWidth: !0,
                    onClick: A,
                    variant: "active",
                    text: n.isGuildStageVoice() ? f.intl.string(f.t["7vb2cc"]) : f.intl.string(f.t["96ANUN"])
                })
            })]
        })
    })
}