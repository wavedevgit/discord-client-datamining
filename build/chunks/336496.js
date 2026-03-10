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
    c = l(652215),
    o = l(985018),
    u = l(48854);

function x(e) {
    let {
        guildId: t,
        transitionState: l,
        onClose: x
    } = e, [m, h] = s.useState([]), [j, _] = s.useState(), A = [{
        label: o.intl.string(o.t["//3pvi"]),
        value: d.n7.DM_SPAM
    }, {
        label: o.intl.string(o.t.SdVsip),
        value: d.n7.MENTION_SPAM
    }, {
        label: o.intl.string(o.t.uTiSVL),
        value: d.n7.CHANNEL_SPAM
    }, {
        label: o.intl.string(o.t.GQczU8),
        value: d.n7.SUS_NEW_MEMBERS
    }, {
        label: o.intl.string(o.t.AAgqy3),
        value: d.n7.CHANGING_SETTINGS
    }, {
        label: o.intl.string(o.t.ryPKb7),
        value: d.n7.OTHER
    }], g = s.useCallback(e => {
        h(e)
    }, []);
    return null == t ? (x(), null) : (0, n.jsx)(i.Modal, {
        transitionState: l,
        title: o.intl.string(o.t.f5hd9P),
        actions: [{
            text: o.intl.string(o.t["ETE/oC"]),
            onClick: x,
            variant: "secondary"
        }, {
            text: o.intl.string(o.t.nAt0rE),
            onClick: function() {
                (0, r.zV)(c.HAw.GUILD_RAID_LOCKDOWN_FEEDBACK, {
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
                onChange: g,
                options: A
            }), m.includes(d.n7.OTHER) && (0, n.jsx)("div", {
                className: u.Q8,
                children: (0, n.jsx)(a.fs1, {
                    placeholder: o.intl.string(o.t["PAM+JR"]),
                    onChange: _,
                    value: j,
                    autoFocus: !0
                })
            })]
        })
    })
}