/** chunk id: 24215 params = (module,exports,require) **/
i.d(t, {
    L: () => A
});
var l = i(627968),
    n = i(64700),
    a = i(397927),
    s = i(539895),
    r = i(844330),
    o = i(253932),
    d = i(650832),
    c = i(954571),
    u = i(960736),
    m = i(652215),
    x = i(985018),
    g = i(117081);
let h = () => (0, l.jsx)("div", {
    className: g.m
});

function _(e) {
    let {
        label: t,
        children: i
    } = e;
    return (0, l.jsxs)(a.BJc, {
        direction: "vertical",
        gap: 4,
        children: [(0, l.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: t
        }), i]
    })
}

function p(e) {
    let {
        label: t,
        checked: i,
        onChange: n
    } = e;
    return (0, l.jsxs)(a.BJc, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [(0, l.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: t
        }), (0, l.jsx)(d.Ay, {
            value: i,
            onChange: n,
            title: ""
        })]
    })
}
let A = () => {
    let e = o.tz.useSetting(),
        {
            nickname: t,
            dmsAllowed: i,
            showActivity: d,
            setNickname: g,
            setDmsAllowed: A,
            setShowActivity: j,
            guildId: E,
            inviteCode: v
        } = (0, u.lD)(),
        I = s.A.getProps().invite?.is_nickname_changeable,
        f = n.useCallback(() => {
            c.default.track(m.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                guild_id: E,
                invite_code: v
            })
        }, [E, v]);
    return (0, l.jsxs)(r.A, {
        icon: (0, l.jsx)(a.Zes, {
            size: "refresh_sm"
        }),
        title: x.intl.string(x.t["A5wHQ/"]),
        subtitle: x.intl.string(x.t.UKCSEd),
        onOpen: f,
        maxHeight: I ? 220 : 130,
        children: [I && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(_, {
                label: x.intl.string(x.t.me1lRk),
                children: (0, l.jsx)(a.ksK, {
                    placeholder: x.intl.string(x.t["09Q8yp"]),
                    maxLength: m.d0r,
                    value: t,
                    onChange: g
                })
            }), (0, l.jsx)(h, {})]
        }), (0, l.jsx)(p, {
            label: x.intl.string(x.t["/2ed37"]),
            checked: i,
            onChange: A
        }), (0, l.jsx)(h, {}), e && (0, l.jsx)(p, {
            label: x.intl.string(x.t.bN4m1G),
            checked: d,
            onChange: j
        })]
    })
}