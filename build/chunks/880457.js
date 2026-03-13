/** chunk id: 880457 params = (module,exports,require) **/
n.d(t, {
    A: () => p,
    P: () => h
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(397927),
    s = n(404374),
    o = n(966597),
    d = n(164684),
    c = n(704456),
    u = n(85109),
    g = n(226017),
    A = n(49678),
    m = n(927813),
    f = n(985018);

function p(e) {
    let {
        enabled: t
    } = o.A.useConfig({
        location: "LongPressMessageActionSheet"
    }), n = (0, r.bG)([u.A], () => u.A.getSavedMessage(e.channel_id, e.id)), l = h({
        message: e,
        savedMessage: n
    });
    return t ? null != n || (0, g.A)() ? (0, i.jsxs)(a.Drp, {
        id: "save-for-later",
        label: f.intl.string(f.t.tpxJto),
        leadingAccessory: {
            type: "icon",
            icon: null != n ? a.cFy : a.c$8
        },
        action: () => null == n ? (0, d.Y)({
            channelId: e.channel_id,
            messageId: e.id,
            displayToast: !0
        }) : (0, d.x)({
            channelId: e.channel_id,
            messageId: e.id,
            dueAt: n.saveData.dueAt,
            displayToast: !0
        }),
        children: [null != n ? (0, i.jsx)(a.Drp, {
            id: "remove-from-for-later",
            label: f.intl.string(f.t.SvXS1Z),
            leadingAccessory: {
                type: "icon",
                icon: a.cFy
            },
            icon: a.cFy,
            action: () => (0, d.x)({
                channelId: e.channel_id,
                messageId: e.id,
                dueAt: n.saveData.dueAt,
                displayToast: !0
            })
        }) : (0, i.jsx)(a.Drp, {
            id: "create-bookmark",
            label: f.intl.string(f.t["9p3D9p"]),
            leadingAccessory: {
                type: "icon",
                icon: a.c$8
            },
            icon: a.c$8,
            action: () => (0, d.Y)({
                channelId: e.channel_id,
                messageId: e.id,
                displayToast: !0
            })
        }), (0, i.jsx)(a.bXX, {}), l]
    }) : (0, i.jsx)(a.Drp, {
        id: "save-for-later-upsell",
        label: f.intl.string(f.t.tpxJto),
        leadingAccessory: {
            type: "icon",
            icon: a.tvc,
            color: s.k0.PREMIUM_TIER_2
        },
        icon: a.tvc,
        iconProps: {
            color: s.k0.PREMIUM_TIER_2
        },
        action: () => (0, d.Y)({
            channelId: e.channel_id,
            messageId: e.id,
            displayToast: !0
        })
    }) : null
}

function h(e) {
    let {
        message: t,
        savedMessage: n
    } = e, [r, s] = l.useState(new Date);
    l.useEffect(() => {
        let e = setInterval(() => s(new Date), m.A.Millis.MINUTE);
        return () => {
            clearInterval(e)
        }
    }, []);
    let o = l.useCallback(e => (0, d.Y)({
            channelId: t.channel_id,
            messageId: t.id,
            dueAt: e,
            displayToast: !0
        }), [t.channel_id, t.id]),
        u = (0, A.S)({
            createReminder: o
        }),
        {
            dueInText: g
        } = (0, c.Ce)({
            dueAt: n?.saveData.dueAt,
            now: r,
            type: c.kh.LONG
        });
    return n?.saveData.dueAt == null ? (0, i.jsx)(a.rXV, {
        label: f.intl.string(f.t.roMu1H),
        children: u
    }) : (0, i.jsxs)(a.rXV, {
        label: g,
        children: [(0, i.jsx)(a.Drp, {
            id: "mark-complete",
            label: f.intl.string(f.t.yjGtdJ),
            leadingAccessory: {
                type: "icon",
                icon: a.Uzd
            },
            icon: a.Uzd,
            action: () => (0, d.Y)({
                channelId: t.channel_id,
                messageId: t.id,
                dueAt: void 0
            })
        }), (0, i.jsx)(a.Drp, {
            id: "edit-reminder",
            label: f.intl.string(f.t.vrbqs1),
            children: u
        })]
    })
}