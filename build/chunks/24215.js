/** chunk id: 24215, original params: e,l,t (module,exports,require) **/
t.d(l, {
    L: () => j
});
var n = t(627968),
    i = t(64700),
    s = t(397927),
    a = t(539895),
    r = t(844330),
    c = t(253932),
    u = t(578746),
    d = t(954571),
    o = t(960736),
    m = t(652215),
    x = t(985018),
    g = t(210505);
let h = () => (0, n.jsx)("div", {
    className: g.m
});

function _(e) {
    let {
        label: l,
        children: t
    } = e;
    return (0, n.jsxs)(s.BJc, {
        direction: "vertical",
        gap: 4,
        children: [(0, n.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: l
        }), t]
    })
}

function E(e) {
    let {
        label: l,
        checked: t,
        onChange: i
    } = e;
    return (0, n.jsxs)(s.BJc, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [(0, n.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: l
        }), (0, n.jsx)(u.Ay, {
            value: t,
            onChange: i,
            title: ""
        })]
    })
}
let j = () => {
    let e = c.tz.useSetting(),
        {
            nickname: l,
            dmsAllowed: t,
            showActivity: u,
            setNickname: g,
            setDmsAllowed: j,
            setShowActivity: A,
            guildId: I,
            inviteCode: N
        } = (0, o.lD)(),
        f = a.A.getProps().invite?.is_nickname_changeable,
        v = i.useCallback(() => {
            d.default.track(m.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                guild_id: I,
                invite_code: N
            })
        }, [I, N]);
    return (0, n.jsxs)(r.A, {
        icon: (0, n.jsx)(s.Zes, {
            size: "refresh_sm"
        }),
        title: x.intl.string(x.t["A5wHQ/"]),
        subtitle: x.intl.string(x.t.UKCSEd),
        onOpen: v,
        maxHeight: f ? 220 : 130,
        children: [f && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(_, {
                label: x.intl.string(x.t.me1lRk),
                children: (0, n.jsx)(s.ksK, {
                    placeholder: x.intl.string(x.t["09Q8yp"]),
                    maxLength: m.d0r,
                    value: l,
                    onChange: g
                })
            }), (0, n.jsx)(h, {})]
        }), (0, n.jsx)(E, {
            label: x.intl.string(x.t["/2ed37"]),
            checked: t,
            onChange: j
        }), (0, n.jsx)(h, {}), e && (0, n.jsx)(E, {
            label: x.intl.string(x.t.bN4m1G),
            checked: u,
            onChange: A
        })]
    })
}