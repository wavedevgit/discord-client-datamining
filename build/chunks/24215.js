/** chunk id: 24215 params = (module,exports,require) **/
"use strict";
n.d(t, {
    L: () => f
});
var i = n(627968),
    s = n(64700),
    r = n(397927),
    l = n(539895),
    a = n(844330),
    o = n(253932),
    d = n(650832),
    c = n(954571),
    u = n(960736),
    h = n(652215),
    _ = n(985018),
    p = n(190359);
let g = () => (0, i.jsx)("div", {
    className: p.m
});

function m(e) {
    let {
        label: t,
        children: n
    } = e;
    return (0, i.jsxs)(r.BJc, {
        direction: "vertical",
        gap: 4,
        children: [(0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: t
        }), n]
    })
}

function A(e) {
    let {
        label: t,
        checked: n,
        onChange: s
    } = e;
    return (0, i.jsxs)(r.BJc, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [(0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: t
        }), (0, i.jsx)(d.Ay, {
            value: n,
            onChange: s,
            title: ""
        })]
    })
}
let f = () => {
    let e = o.tz.useSetting(),
        {
            nickname: t,
            dmsAllowed: n,
            showActivity: d,
            setNickname: p,
            setDmsAllowed: f,
            setShowActivity: E,
            guildId: x,
            inviteCode: I
        } = (0, u.lD)(),
        N = l.A.getProps().invite?.is_nickname_changeable,
        v = s.useCallback(() => {
            c.default.track(h.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                guild_id: x,
                invite_code: I
            })
        }, [x, I]);
    return (0, i.jsxs)(a.A, {
        icon: (0, i.jsx)(r.Zes, {
            size: "refresh_sm"
        }),
        title: _.intl.string(_.t["A5wHQ/"]),
        subtitle: _.intl.string(_.t.UKCSEd),
        onOpen: v,
        maxHeight: N ? 220 : 130,
        children: [N && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(m, {
                label: _.intl.string(_.t.me1lRk),
                children: (0, i.jsx)(r.ksK, {
                    placeholder: _.intl.string(_.t["09Q8yp"]),
                    maxLength: h.d0r,
                    value: t,
                    onChange: p
                })
            }), (0, i.jsx)(g, {})]
        }), (0, i.jsx)(A, {
            label: _.intl.string(_.t["/2ed37"]),
            checked: n,
            onChange: f
        }), (0, i.jsx)(g, {}), e && (0, i.jsx)(A, {
            label: _.intl.string(_.t.bN4m1G),
            checked: d,
            onChange: E
        })]
    })
}