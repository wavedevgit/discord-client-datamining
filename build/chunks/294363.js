/** Chunk was on 47841 **/
/** chunk id: 294363, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => T,
    b: () => C
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(478437),
    o = n(311907),
    c = n(397927),
    d = n(58149),
    u = n(47167),
    g = n(554113),
    m = n(974103),
    p = n(978956),
    f = n(615550),
    b = n(419707),
    h = n(734057),
    x = n(808728),
    j = n(576705),
    _ = n(994500),
    O = n(287809),
    v = n(997509),
    y = n(600955),
    A = n(652215),
    E = n(985018),
    N = n(690450);

function S(e) {
    let {
        guild: t,
        isExpanded: n,
        selectedChannelId: l,
        className: a
    } = e, b = (0, m.w)(t), x = (0, p.A)(t), [j, _] = i.useState(x), O = (0, o.bG)([h.A], () => h.A.getChannel(l), [l]), v = (0, u.Ay)(O), S = async () => {
        _(!j);
        try {
            var e;
            await (0, g.jB)(t, !x);
            let n = null != (e = null != l ? l : t.safetyAlertsChannelId) ? e : null;
            if (null != n) {
                let e = {
                    raid_alert_type: f.TF.JOIN_RAID,
                    enabled: !x,
                    raid_alert_channel_id: n,
                    guild_id: t.id,
                    channel_id: n
                };
                (0, d.zV)(A.HAw.GUILD_RAID_ALERTS_SETUP, e)
            }
        } catch (e) {
            (0, c.showToast)((0, c.createToast)(E.intl.string(E.t["46Rs3v"]), c.ToastType.FAILURE)), _(!x)
        }
    };
    return (0, r.jsxs)("div", {
        className: s()(N.D5, a),
        children: [(0, r.jsxs)("div", {
            className: N.Ly,
            children: [(0, r.jsx)(c.Heading, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: E.intl.string(E.t.Qp98s9)
            }), (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: E.intl.string(E.t.Mg843t)
            }), n || null == l ? null : (0, r.jsxs)(c.Text, {
                color: "interactive-text-default",
                variant: "text-xs/medium",
                className: N.Lp,
                children: [(0, r.jsx)(c.N$i, {
                    size: "xxs",
                    color: "currentColor"
                }), " ", v]
            })]
        }), (0, r.jsx)(y.A, {
            checked: j,
            onChange: S,
            disabled: !b || null == l
        })]
    })
}

function I(e) {
    var t;
    let {
        guild: n,
        selectedChannelId: i,
        setSelectedChannelId: l,
        className: g
    } = e, m = null != (t = n.safetyAlertsChannelId) ? t : null, b = (0, o.yK)([x.Ay, O.default, _.A, j.A], () => {
        let e = x.Ay.getChannels(n.id)[x.I6].filter(e => {
            let {
                channel: t
            } = e;
            return t.type === a.r.GUILD_TEXT && j.A.can(A.xBc.SEND_MESSAGES, t)
        }).map(e => {
            let {
                channel: t
            } = e;
            return {
                id: t.id,
                value: t.id,
                label: (0, u.m1)(t, O.default, _.A, !0)
            }
        });
        return null != m ? e : [...e]
    }, [n.id, m]), h = async e => {
        l(e);
        try {
            if (e !== m && (await v.A.saveGuild(n.id, {
                    safetyAlertsChannelId: e
                }, {
                    throwErr: !0
                }), v.A.updateGuild({
                    safetyAlertsChannelId: e
                })), null != e) {
                let t = {
                    raid_alert_type: f.TF.JOIN_RAID,
                    enabled: (0, p.A)(n),
                    raid_alert_channel_id: e,
                    guild_id: n.id,
                    channel_id: e
                };
                (0, d.zV)(A.HAw.GUILD_RAID_ALERTS_SETUP, t)
            }
        } catch (e) {
            (0, c.showToast)((0, c.createToast)(E.intl.string(E.t["46Rs3v"]), c.ToastType.FAILURE)), l(m)
        }
    };
    return (0, r.jsx)("div", {
        className: s()(N.ho, g),
        children: (0, r.jsx)("div", {
            className: N.U,
            children: (0, r.jsx)(c.ZiE, {
                selectionMode: "single",
                label: E.intl.string(E.t.sMkYE8),
                helperText: E.intl.string(E.t["1QxN9N"]),
                options: b,
                onSelectionChange: h,
                value: i,
                maxOptionsVisible: 5
            })
        })
    })
}

function T(e) {
    var t, n;
    let {
        guild: l
    } = e, [s, a] = i.useState(!1), o = null != (t = l.safetyAlertsChannelId) ? t : null, [c, d] = i.useState(null != o ? o : null != (n = null == l ? void 0 : l.publicUpdatesChannelId) ? n : null);
    return (0, r.jsx)(b.A, {
        renderHeader: (0, r.jsx)(S, {
            isExpanded: s,
            guild: l,
            selectedChannelId: c
        }),
        isExpanded: s,
        onExpand: () => a(!s),
        children: (0, r.jsx)(I, {
            guild: l,
            selectedChannelId: c,
            setSelectedChannelId: d
        })
    })
}

function C(e) {
    var t, n;
    let {
        guild: l
    } = e, s = null != (t = l.safetyAlertsChannelId) ? t : null, [a, o] = i.useState(null != s ? s : null != (n = null == l ? void 0 : l.publicUpdatesChannelId) ? n : null);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(S, {
            isExpanded: !0,
            guild: l,
            selectedChannelId: a,
            className: N.pN
        }), (0, r.jsx)(I, {
            guild: l,
            selectedChannelId: a,
            setSelectedChannelId: o,
            className: N.pN
        })]
    })
}