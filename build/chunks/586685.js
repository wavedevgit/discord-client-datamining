/** chunk id: 586685, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => p,
    SB: () => A,
    VD: () => m,
    b0: () => h
});
var i = n(627968);
n(64700);
var s = n(820284),
    l = n(793574),
    a = n(688810),
    r = n(459793),
    o = n(980545),
    d = n(195043),
    c = n(326911),
    u = n(265729),
    _ = n(531525),
    g = n(652215);

function m() {
    return (0, i.jsx)(s.A, {
        section: g.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
        children: (0, i.jsx)(c.A, {})
    })
}

function A(e) {
    let {
        inOldSettings: t = !1
    } = e;
    return (0, i.jsx)(s.A, {
        section: g.JJy.QUESTS,
        children: (0, i.jsx)(o.A, {
            inOldSettings: t
        })
    })
}

function h(e) {
    let {
        inOldSettings: t = !1
    } = e;
    return (0, i.jsx)(s.A, {
        section: g.JJy.LIBRARY_INVENTORY_GIFTS_LIST,
        children: (0, i.jsx)(u.A, {
            inOldSettings: t
        })
    })
}

function p() {
    let {
        analyticsLocations: e
    } = (0, a.Ay)(l.A.USER_SETTINGS_GIFT_INVENTORY);
    return (0, i.jsxs)(a.f5, {
        value: e,
        children: [(0, i.jsx)(d.x, {
            setting: _.H.GIFT_CODE_REDEMPTION,
            children: (0, i.jsx)(m, {})
        }), (0, i.jsx)(d.x, {
            setting: _.H.GIFT_INVENTORY_QUESTS,
            children: (0, i.jsx)(A, {
                inOldSettings: !0
            })
        }), (0, i.jsx)(d.x, {
            setting: _.H.GIFT_INVENTORY_LIST,
            children: (0, i.jsx)(h, {
                inOldSettings: !0
            })
        }), (0, i.jsx)(d.x, {
            setting: _.H.GIFT_BLOCKED_PAYMENTS,
            children: (0, i.jsx)(r.uK, {})
        })]
    })
}