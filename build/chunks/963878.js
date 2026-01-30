/** chunk id: 963878, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => I
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(554146),
    c = n(827734),
    d = n(397927),
    u = n(726249),
    h = n(826673),
    p = n(742589),
    f = n(637248),
    _ = n(760207),
    m = n(454058),
    g = n(761640),
    x = n(71393),
    b = n(202776),
    A = n(659069),
    C = n(539916),
    j = n(746080),
    O = n(49999),
    v = n(985018),
    y = n(682628),
    N = n(638990);

function w(e) {
    let {
        guild: t
    } = e, n = (0, b.A)(t);
    r.useEffect(() => {
        (0, h.Dr)(o.M.CHANNEL_BROWSER_NEW_BADGE_NUX, {
            dismissAction: O.i.DISMISS
        })
    });
    let i = n ? v.intl.formatToPlainString(v.t.uqZgYe, {
            guildName: t.name
        }) : v.intl.formatToPlainString(v.t.velJea, {
            guildName: t.name
        }),
        a = n ? v.intl.string(v.t.h9mGOP) : v.intl.string(v.t.et6wav);
    return (0, u.HU)({
        location: i
    }), (0, l.jsxs)(p.A, {
        className: y.wx,
        innerClassname: y.MU,
        hideSearch: !0,
        channelId: j.VV.CUSTOMIZE_COMMUNITY,
        guildId: t.id,
        children: [(0, l.jsx)(p.A.Icon, {
            icon: d.kiI,
            "aria-hidden": !0
        }), (0, l.jsx)(p.A.Title, {
            children: a
        })]
    })
}

function I(e) {
    let {
        guildId: t,
        selectedSection: n
    } = e, i = (0, s.bG)([x.A], () => x.A.getGuild(t)), o = (0, b.A)(i), [u, h] = r.useState(null != n ? n : C.qC.CUSTOMIZE);
    r.useEffect(() => {
        null != n && h(n)
    }, [n]), r.useEffect(() => {
        o || u !== C.qC.CUSTOMIZE || h(C.qC.BROWSE)
    }, [o, u]);
    let p = (0, s.bG)([g.Ay], () => g.Ay.getCurrentSidebarChannelId(j.VV.CHANNEL_BROWSER)),
        O = null != p && u === C.qC.BROWSE,
        I = (0, s.bG)([m.A], () => m.A.getNewChannelIds(t).size > 0),
        S = (0, f.RD)(t);
    return null == i ? null : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
            className: a()(N.TE, {
                [N.js]: O
            }),
            children: [(0, l.jsx)(w, {
                guild: i
            }), (0, l.jsxs)("div", {
                className: a()(N.Qs, y.kL),
                children: [o && (0, l.jsxs)(d.VQ0, {
                    className: y.$H,
                    type: "top",
                    look: "brand",
                    selectedItem: u,
                    onItemSelect: e => h(e),
                    children: [(0, l.jsx)(d.VQ0.Item, {
                        className: y.YU,
                        id: C.qC.CUSTOMIZE,
                        children: v.intl.string(v.t.H2cICW)
                    }, C.qC.CUSTOMIZE), (0, l.jsxs)(d.VQ0.Item, {
                        className: y.YU,
                        id: C.qC.BROWSE,
                        "aria-label": v.intl.string(v.t.et6wav),
                        children: [v.intl.string(v.t.et6wav), (0, l.jsx)(d.LpS, {
                            text: I ? v.intl.string(v.t.psHMa6) : S,
                            color: I ? c.A.unsafe_rawColors.BRAND_260.css : c.A.colors.BACKGROUND_MOD_STRONG.css,
                            className: a()({
                                [y.Ad]: I
                            })
                        })]
                    }, C.qC.BROWSE)]
                }), (() => {
                    switch (u) {
                        case C.qC.CUSTOMIZE:
                            return (0, l.jsx)(A.A, {
                                guildId: t,
                                onBrowseChannels: () => h(C.qC.BROWSE)
                            });
                        case C.qC.BROWSE:
                        default:
                            return (0, l.jsx)(_.A, {
                                guildId: t
                            })
                    }
                })()]
            })]
        }), O && (0, l.jsx)(_.W, {
            channelId: p
        })]
    })
}