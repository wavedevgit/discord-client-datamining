/** chunk id: 586685, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => b,
    SB: () => f,
    VD: () => g,
    b0: () => m
});
var r = n(627968);
n(64700);
var l = n(820284),
    i = n(793574),
    s = n(688810),
    a = n(459793),
    o = n(980545),
    c = n(195043),
    u = n(326911),
    d = n(265729),
    p = n(531525),
    h = n(652215);

function g() {
    return (0, r.jsx)(l.A, {
        section: h.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
        children: (0, r.jsx)(u.A, {})
    })
}

function f(e) {
    let {
        inOldSettings: t = !1
    } = e;
    return (0, r.jsx)(l.A, {
        section: h.JJy.QUESTS,
        children: (0, r.jsx)(o.A, {
            inOldSettings: t
        })
    })
}

function m(e) {
    let {
        inOldSettings: t = !1
    } = e;
    return (0, r.jsx)(l.A, {
        section: h.JJy.LIBRARY_INVENTORY_GIFTS_LIST,
        children: (0, r.jsx)(d.A, {
            inOldSettings: t
        })
    })
}

function b() {
    let {
        analyticsLocations: e
    } = (0, s.Ay)(i.A.USER_SETTINGS_GIFT_INVENTORY);
    return (0, r.jsxs)(s.f5, {
        value: e,
        children: [(0, r.jsx)(c.x, {
            setting: p.H.GIFT_CODE_REDEMPTION,
            children: (0, r.jsx)(g, {})
        }), (0, r.jsx)(c.x, {
            setting: p.H.GIFT_INVENTORY_QUESTS,
            children: (0, r.jsx)(f, {
                inOldSettings: !0
            })
        }), (0, r.jsx)(c.x, {
            setting: p.H.GIFT_INVENTORY_LIST,
            children: (0, r.jsx)(m, {
                inOldSettings: !0
            })
        }), (0, r.jsx)(c.x, {
            setting: p.H.GIFT_BLOCKED_PAYMENTS,
            children: (0, r.jsx)(a.uK, {})
        })]
    })
}