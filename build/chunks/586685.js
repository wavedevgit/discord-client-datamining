/** Chunk was on 82575 **/
/** chunk id: 586685, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => m,
    SB: () => p,
    VD: () => x,
    b0: () => A
});
var i = n(627968);
n(64700);
var s = n(820284),
    l = n(793574),
    r = n(688810),
    a = n(459793),
    o = n(980545),
    c = n(195043),
    d = n(326911),
    u = n(265729),
    g = n(531525),
    h = n(652215);

function x() {
    return (0, i.jsx)(s.A, {
        section: h.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
        children: (0, i.jsx)(d.A, {})
    })
}

function p(e) {
    let {
        inOldSettings: t = !1
    } = e;
    return (0, i.jsx)(s.A, {
        section: h.JJy.QUESTS,
        children: (0, i.jsx)(o.A, {
            inOldSettings: t
        })
    })
}

function A(e) {
    let {
        inOldSettings: t = !1
    } = e;
    return (0, i.jsx)(s.A, {
        section: h.JJy.LIBRARY_INVENTORY_GIFTS_LIST,
        children: (0, i.jsx)(u.A, {
            inOldSettings: t
        })
    })
}

function m() {
    let {
        analyticsLocations: e
    } = (0, r.Ay)(l.A.USER_SETTINGS_GIFT_INVENTORY);
    return (0, i.jsxs)(r.f5, {
        value: e,
        children: [(0, i.jsx)(c.x, {
            setting: g.H.GIFT_CODE_REDEMPTION,
            children: (0, i.jsx)(x, {})
        }), (0, i.jsx)(c.x, {
            setting: g.H.GIFT_INVENTORY_QUESTS,
            children: (0, i.jsx)(p, {
                inOldSettings: !0
            })
        }), (0, i.jsx)(c.x, {
            setting: g.H.GIFT_INVENTORY_LIST,
            children: (0, i.jsx)(A, {
                inOldSettings: !0
            })
        }), (0, i.jsx)(c.x, {
            setting: g.H.GIFT_BLOCKED_PAYMENTS,
            children: (0, i.jsx)(a.uK, {})
        })]
    })
}