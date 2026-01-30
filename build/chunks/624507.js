/** chunk id: 624507, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(747238), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(158954),
    a = n(314116),
    s = n(397927),
    o = n(157559),
    c = n(282956),
    d = n(824953),
    u = n(147925),
    p = n(486020),
    m = n(447066),
    g = n(652215),
    b = n(985018),
    f = n(58339);

function h(e) {
    let {
        webhook: t,
        editedWebhook: n,
        channelOptions: h,
        isExpanded: x,
        errors: j,
        onToggleExpand: O
    } = e, y = r.useMemo(() => {
        var e;
        return null != (e = t.avatar) && /^data:/.test(e) ? e : (0, p.ku)({
            id: t.id,
            avatar: e,
            discriminator: g.h3J
        })
    }, [t]), A = r.useCallback(() => {
        (0, a.A)({
            title: b.intl.formatToPlainString(b.t.gBKqZ0, {
                name: t.name
            }),
            subtitle: b.intl.string(b.t.zO9jrD),
            confirmText: b.intl.string(b.t.CMy0Cj),
            onConfirm: () => {
                d.A.delete(t.guild_id, t.id).catch(() => {
                    o.A.show({
                        title: b.intl.string(b.t.LpbaFV),
                        body: b.intl.string(b.t["/4TwKf"])
                    })
                })
            }
        })
    }, [t.guild_id, t.id, t.name]), v = [];
    null != t.source_channel && null != t.source_guild && (v.push({
        icon: s.koX,
        text: t.source_channel.name
    }), v.push({
        text: (0, i.jsx)("span", {
            className: f.lM,
            children: b.intl.format(b.t["H/jJ6R"], {
                guildHook: () => (0, i.jsx)("span", {
                    className: f.VZ,
                    children: t.source_guild.name
                }, t.id)
            })
        }, "guild-source")
    }));
    let _ = null;
    return x && null != n && (_ = (0, i.jsxs)("div", {
        className: f.rf,
        children: [(0, i.jsx)(s.cGx, {
            className: f.fV
        }), (0, i.jsxs)(s.BJc, {
            gap: 24,
            children: [(0, i.jsxs)(s.BJc, {
                direction: "horizontal",
                gap: 16,
                children: [(0, i.jsx)(s.ksK, {
                    label: b.intl.string(b.t.I1o5gV),
                    value: n.name,
                    onChange: e => {
                        c.A.updateWebhook({
                            name: e
                        })
                    },
                    maxLength: 80,
                    error: j.name
                }), (0, i.jsx)(s.l6P, {
                    label: b.intl.string(b.t["4TuWfc"]),
                    value: n.channel_id,
                    options: h,
                    onSelectionChange: e => {
                        c.A.updateWebhook({
                            channelId: e
                        })
                    },
                    selectionMode: "single",
                    fullWidth: !0
                })]
            }), (0, i.jsx)(s.cGx, {
                className: f.Bd
            }), (0, i.jsx)(l.QWc, {
                onClick: A,
                size: "sm",
                variant: "critical",
                text: b.intl.string(b.t.CMy0Cj)
            })]
        })]
    })), (0, i.jsx)(s.ZpM, {
        editable: !0,
        className: f.Nr,
        children: (0, i.jsxs)(s.BJc, {
            children: [(0, i.jsx)(s.DUT, {
                className: f.wx,
                "aria-expanded": x,
                onClick: O,
                children: (0, i.jsxs)(s.BJc, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "center",
                    children: [(0, i.jsx)(m.A, {
                        name: t.name,
                        imageSrc: y,
                        details: v
                    }), (0, i.jsx)(u.A, {
                        className: f.eO,
                        expanded: x,
                        "aria-hidden": !0
                    })]
                })
            }), _]
        })
    })
}