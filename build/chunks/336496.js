/** chunk id: 336496 params = (module,exports,require) **/
l.d(t, {
    default: () => x
});
var n = l(627968),
    s = l(64700),
    i = l(158954),
    a = l(397927),
    r = l(58149),
    d = l(615550),
    o = l(652215),
    c = l(985018),
    u = l(181667);

function x(e) {
    let {
        guildId: t,
        transitionState: l,
        onClose: x
    } = e, [m, h] = s.useState([]), [j, _] = s.useState(), g = [{
        label: c.intl.string(c.t["//3pvi"]),
        value: d.n7.DM_SPAM
    }, {
        label: c.intl.string(c.t.SdVsip),
        value: d.n7.MENTION_SPAM
    }, {
        label: c.intl.string(c.t.uTiSVL),
        value: d.n7.CHANNEL_SPAM
    }, {
        label: c.intl.string(c.t.GQczU8),
        value: d.n7.SUS_NEW_MEMBERS
    }, {
        label: c.intl.string(c.t.AAgqy3),
        value: d.n7.CHANGING_SETTINGS
    }, {
        label: c.intl.string(c.t.ryPKb7),
        value: d.n7.OTHER
    }], A = s.useCallback(e => {
        h(e)
    }, []);
    return null == t ? (x(), null) : (0, n.jsx)(i.Modal, {
        transitionState: l,
        title: c.intl.string(c.t.f5hd9P),
        actions: [{
            text: c.intl.string(c.t["ETE/oC"]),
            onClick: x,
            variant: "secondary"
        }, {
            text: c.intl.string(c.t.nAt0rE),
            onClick: function() {
                (0, r.zV)(o.HAw.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                    raid_lockdown_feedback_type: m,
                    raid_lockdown_feedback_other_reason: j,
                    guild_id: t
                }), x()
            },
            disabled: 0 === m.length
        }],
        onClose: x,
        children: (0, n.jsxs)(a.BJc, {
            gap: 8,
            children: [(0, n.jsx)(a.$QX, {
                selectedValues: m,
                onChange: A,
                options: g
            }), m.includes(d.n7.OTHER) && (0, n.jsx)("div", {
                className: u.Q8,
                children: (0, n.jsx)(a.fs1, {
                    placeholder: c.intl.string(c.t["PAM+JR"]),
                    onChange: _,
                    value: j,
                    autoFocus: !0
                })
            })]
        })
    })
}