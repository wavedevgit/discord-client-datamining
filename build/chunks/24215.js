/** chunk id: 24215, original params: e,t,i (module,exports,require) **/
i.d(t, {
    L: () => E
});
var l = i(627968),
    n = i(64700),
    a = i(397927),
    s = i(539895),
    r = i(844330),
    d = i(253932),
    c = i(578746),
    o = i(954571),
    u = i(960736),
    m = i(652215),
    x = i(985018),
    _ = i(210505);
let h = () => (0, l.jsx)("div", {
    className: _.m
});

function g(e) {
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

function A(e) {
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
        }), (0, l.jsx)(c.Ay, {
            value: i,
            onChange: n,
            title: ""
        })]
    })
}
let E = () => {
    let e = d.tz.useSetting(),
        {
            nickname: t,
            dmsAllowed: i,
            showActivity: c,
            setNickname: _,
            setDmsAllowed: E,
            setShowActivity: p,
            guildId: j,
            inviteCode: I
        } = (0, u.lD)(),
        v = s.A.getProps().invite?.is_nickname_changeable,
        T = n.useCallback(() => {
            o.default.track(m.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                guild_id: j,
                invite_code: I
            })
        }, [j, I]);
    return (0, l.jsxs)(r.A, {
        icon: (0, l.jsx)(a.Zes, {
            size: "refresh_sm"
        }),
        title: x.intl.string(x.t["A5wHQ/"]),
        subtitle: x.intl.string(x.t.UKCSEd),
        onOpen: T,
        maxHeight: v ? 220 : 130,
        children: [v && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(g, {
                label: x.intl.string(x.t.me1lRk),
                children: (0, l.jsx)(a.ksK, {
                    placeholder: x.intl.string(x.t["09Q8yp"]),
                    maxLength: m.d0r,
                    value: t,
                    onChange: _
                })
            }), (0, l.jsx)(h, {})]
        }), (0, l.jsx)(A, {
            label: x.intl.string(x.t["/2ed37"]),
            checked: i,
            onChange: E
        }), (0, l.jsx)(h, {}), e && (0, l.jsx)(A, {
            label: x.intl.string(x.t.bN4m1G),
            checked: c,
            onChange: p
        })]
    })
}