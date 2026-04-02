/** chunk id: 963878 params = (module,exports,require) **/
t.r(n), t.d(n, {
    default: () => w
});
var l = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(311907),
    d = t(554146),
    c = t(827734),
    o = t(397927),
    u = t(726249),
    _ = t(826673),
    h = t(742589),
    x = t(637248),
    m = t(760207),
    g = t(454058),
    A = t(761640),
    C = t(71393),
    f = t(202776),
    p = t(659069),
    N = t(539916),
    j = t(746080),
    v = t(49999),
    b = t(985018),
    I = t(324010),
    E = t(358943);

function S(e) {
    let {
        guild: n
    } = e, t = (0, f.A)(n);
    i.useEffect(() => {
        (0, _.Dr)(d.M.CHANNEL_BROWSER_NEW_BADGE_NUX, {
            dismissAction: v.i.DISMISS
        })
    });
    let s = t ? b.intl.formatToPlainString(b.t.uqZgYe, {
            guildName: n.name
        }) : b.intl.formatToPlainString(b.t.velJea, {
            guildName: n.name
        }),
        a = t ? b.intl.string(b.t.h9mGOP) : b.intl.string(b.t.et6wav);
    return (0, u.HU)({
        location: s
    }), (0, l.jsxs)(h.A, {
        className: I.wx,
        innerClassname: I.MU,
        hideSearch: !0,
        channelId: j.VV.CUSTOMIZE_COMMUNITY,
        guildId: n.id,
        children: [(0, l.jsx)(h.A.Icon, {
            icon: o.kiI,
            "aria-hidden": !0
        }), (0, l.jsx)(h.A.Title, {
            children: a
        })]
    })
}

function w(e) {
    let {
        guildId: n,
        selectedSection: t
    } = e, s = (0, r.bG)([C.A], () => C.A.getGuild(n)), d = (0, f.A)(s), [u, _] = i.useState(t ?? N.qC.CUSTOMIZE);
    i.useEffect(() => {
        null != t && _(t)
    }, [t]), i.useEffect(() => {
        d || u !== N.qC.CUSTOMIZE || _(N.qC.BROWSE)
    }, [d, u]);
    let h = (0, r.bG)([A.Ay], () => A.Ay.getCurrentSidebarChannelId(j.VV.CHANNEL_BROWSER)),
        v = null != h && u === N.qC.BROWSE,
        w = (0, r.bG)([g.A], () => g.A.getNewChannelIds(n).size > 0),
        y = (0, x.RD)(n);
    return null == s ? null : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
            className: a()(E.TE, {
                [E.js]: v
            }),
            children: [(0, l.jsx)(S, {
                guild: s
            }), (0, l.jsxs)("div", {
                className: a()(E.Qs, I.kL),
                children: [d && (0, l.jsxs)(o.VQ0, {
                    className: I.$H,
                    type: "top",
                    look: "brand",
                    selectedItem: u,
                    onItemSelect: e => _(e),
                    children: [(0, l.jsx)(o.VQ0.Item, {
                        className: I.YU,
                        id: N.qC.CUSTOMIZE,
                        children: b.intl.string(b.t.H2cICW)
                    }, N.qC.CUSTOMIZE), (0, l.jsxs)(o.VQ0.Item, {
                        className: I.YU,
                        id: N.qC.BROWSE,
                        "aria-label": b.intl.string(b.t.et6wav),
                        children: [b.intl.string(b.t.et6wav), (0, l.jsx)(o.LpS, {
                            text: w ? b.intl.string(b.t.psHMa6) : y,
                            color: w ? c.A.unsafe_rawColors.BRAND_260.css : c.A.colors.BACKGROUND_MOD_STRONG.css,
                            className: a()({
                                [I.Ad]: w
                            })
                        })]
                    }, N.qC.BROWSE)]
                }), (() => {
                    switch (u) {
                        case N.qC.CUSTOMIZE:
                            return (0, l.jsx)(p.A, {
                                guildId: n,
                                onBrowseChannels: () => _(N.qC.BROWSE)
                            });
                        case N.qC.BROWSE:
                        default:
                            return (0, l.jsx)(m.A, {
                                guildId: n
                            })
                    }
                })()]
            })]
        }), v && (0, l.jsx)(m.W, {
            channelId: h
        })]
    })
}