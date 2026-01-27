/** Chunk was on web.js **/
/** chunk id: 868065, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Hp: () => v,
    UA: () => b,
    ZB: () => A,
    Zp: () => y,
    dM: () => I,
    eG: () => E,
    ik: () => S
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(311907),
    s = n(397927),
    l = n(573435),
    c = n(73392),
    u = n(967144),
    d = n(696451),
    f = n(317525),
    p = n(287809),
    _ = n(562153),
    h = n(576757),
    m = n(985018),
    g = n(332225);

function E() {
    return (0, r.jsx)("div", {
        className: g.kL,
        "aria-hidden": !0
    })
}

function y(e) {
    let {
        children: t,
        selected: n,
        className: i,
        usesCardRows: o = !1
    } = e;
    return (0, r.jsx)("div", {
        className: a()(g.kL, g.fi, {
            [g.wH]: n,
            [g._V]: o
        }, i),
        children: t
    })
}

function b(e) {
    let {
        children: t
    } = e;
    return (0, r.jsx)("div", {
        className: g.iY,
        children: t
    })
}

function O(e) {
    let {
        users: t,
        guildId: n,
        "aria-hidden": i
    } = e;
    return (0, r.jsx)("div", {
        className: g.wn,
        children: t.map((e, a) => {
            let o = (0, r.jsx)(s.euF, {
                src: e.getAvatarURL(n, 80),
                size: s._3J.SIZE_16,
                "aria-label": i ? void 0 : e.username,
                "aria-hidden": i
            });
            return a === t.length - 1 ? (0, r.jsx)("div", {
                className: g.tr,
                children: o
            }, e.id) : (0, r.jsx)(l.Ay, {
                width: 16,
                height: 16,
                className: g.tr,
                mask: l.Ay.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                children: o
            }, e.id)
        })
    })
}

function v(e) {
    var t;
    let {
        guildId: n,
        channelId: i,
        entry: a,
        maxAvatars: l = 3
    } = e, E = a.author_id, y = (0, o.bG)([p.default], () => p.default.getUser(E)), {
        displayParticipants: b,
        participant1: v,
        participant2: A,
        numOtherParticipants: I
    } = (0, h.A)(a, l), S = (0, o.bG)([d.Ay], () => d.Ay.getMember(n, E)), T = (0, c.a)({
        displayNameStyles: null == y ? void 0 : y.displayNameStyles
    }), C = (0, o.bG)([f.A], () => {
        var e;
        return (null == S ? void 0 : S.colorRoleId) != null ? null == (e = f.A.getRole(n, S.colorRoleId)) ? void 0 : e.name : void 0
    }, [n, S]), N = (0, u.gn)(n, E, null != (t = null == S ? void 0 : S.colorStrings) ? t : null);
    if (null == y) return null;
    let w = null == S ? void 0 : S.colorString,
        R = _.Ay.getName(n, i, y);
    return (0, r.jsxs)("div", {
        className: g.dw,
        children: [(0, r.jsx)(O, {
            users: b,
            guildId: n,
            "aria-hidden": !0
        }), (0, r.jsx)(s.gyj, {
            colorString: null != w ? w : null,
            roleName: C,
            colorStrings: N,
            name: R,
            className: g.nT,
            displayNameStylesFont: T,
            "aria-hidden": !0
        }), I > 0 ? (0, r.jsx)("div", {
            className: g.kx,
            "aria-hidden": !0,
            children: (0, r.jsxs)(s.Text, {
                variant: "text-xxs/medium",
                color: "text-default",
                className: g.b4,
                children: ["+", I]
            })
        }) : null, (0, r.jsx)(s.AC4, {
            children: m.intl.format(m.t.rH95Gu, {
                user0: _.Ay.getName(n, i, v),
                user1: _.Ay.getName(n, i, A),
                countOthers: I,
                name0Hook: (e, t) => (0, r.jsx)("span", {
                    children: e
                }, t),
                name1Hook: (e, t) => (0, r.jsx)("span", {
                    children: e
                }, t),
                countOthersHook: (e, t) => (0, r.jsx)("span", {
                    children: e
                }, t)
            })
        })]
    })
}

function A(e) {
    let {
        children: t
    } = e;
    return (0, r.jsx)(s.Heading, {
        color: "text-default",
        variant: "heading-sm/medium",
        className: g.eu,
        lineClamp: 1,
        children: t
    })
}

function I(e) {
    let {
        children: t,
        className: n,
        ref: i
    } = e;
    return (0, r.jsx)("div", {
        className: a()(g.RA, n),
        ref: i,
        children: t
    })
}

function S() {
    return (0, r.jsx)("div", {
        className: g.yF
    })
}