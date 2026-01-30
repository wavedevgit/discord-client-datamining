/** chunk id: 586685, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => A,
    SB: () => p,
    VD: () => x,
    b0: () => m
});
var i = n(627968);
n(64700);
var l = n(820284),
    s = n(793574),
    r = n(688810),
    a = n(459793),
    o = n(980545),
    c = n(195043),
    d = n(326911),
    u = n(265729),
    h = n(531525),
    g = n(652215);

function x() {
    return (0, i.jsx)(l.A, {
        section: g.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
        children: (0, i.jsx)(d.A, {})
    })
}

function p(e) {
    let {
        inOldSettings: t = !1
    } = e;
    return (0, i.jsx)(l.A, {
        section: g.JJy.QUESTS,
        children: (0, i.jsx)(o.A, {
            inOldSettings: t
        })
    })
}

function m(e) {
    let {
        inOldSettings: t = !1
    } = e;
    return (0, i.jsx)(l.A, {
        section: g.JJy.LIBRARY_INVENTORY_GIFTS_LIST,
        children: (0, i.jsx)(u.A, {
            inOldSettings: t
        })
    })
}

function A() {
    let {
        analyticsLocations: e
    } = (0, r.Ay)(s.A.USER_SETTINGS_GIFT_INVENTORY);
    return (0, i.jsxs)(r.f5, {
        value: e,
        children: [(0, i.jsx)(c.x, {
            setting: h.H.GIFT_CODE_REDEMPTION,
            children: (0, i.jsx)(x, {})
        }), (0, i.jsx)(c.x, {
            setting: h.H.GIFT_INVENTORY_QUESTS,
            children: (0, i.jsx)(p, {
                inOldSettings: !0
            })
        }), (0, i.jsx)(c.x, {
            setting: h.H.GIFT_INVENTORY_LIST,
            children: (0, i.jsx)(m, {
                inOldSettings: !0
            })
        }), (0, i.jsx)(c.x, {
            setting: h.H.GIFT_BLOCKED_PAYMENTS,
            children: (0, i.jsx)(a.uK, {})
        })]
    })
}