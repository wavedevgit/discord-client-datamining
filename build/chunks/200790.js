/** Chunk was on web.js **/
/** chunk id: 200790, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(421380),
    o = n(397927),
    l = n(688810),
    c = n(507698),
    u = n(954921),
    d = n(354328),
    f = n(405810),
    p = n(919395),
    _ = n(128450),
    h = n(985018),
    m = n(223772);

function g(e) {
    let {
        user: t,
        guild: n,
        className: i,
        sectionTitle: f,
        forcedDivider: g = !1,
        withTutorial: E = !1
    } = e, {
        analyticsLocations: b
    } = (0, l.Ay)(), O = (0, d.A)("enable_avatar_decoration_uploads"), v = (0, p.a4)({
        user: t,
        guildId: null == n ? void 0 : n.id
    }), {
        pendingAvatarDecoration: A,
        errors: I
    } = (0, p.CP)(null == n ? void 0 : n.id), S = void 0 === A ? null != v : null != A, T = () => {
        (0, u.L)({
            analyticsLocations: b,
            guild: n
        })
    }, C = () => {
        (0, p.Dx)(null, null == n ? void 0 : n.id)
    }, N = E ? o.wLn : s.$n;
    return (0, r.jsxs)(_.A, {
        className: i,
        forcedDivider: g,
        hasBackground: !0,
        title: f,
        errors: I,
        children: [(0, r.jsxs)("div", {
            className: m.NC,
            children: [(0, r.jsx)(N, {
                size: s.$n.Sizes.SMALL,
                onClick: T,
                className: a()({
                    [m.yj]: E
                }),
                children: h.intl.string(h.t.BVcYCx)
            }), S && (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: m.DT,
                children: (0, r.jsx)(o.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: (0, c.uZ)(t, n) ? h.intl.string(h.t.CHf9iJ) : h.intl.string(h.t.OrokWm),
                    onClick: C
                })
            })]
        }), t.isStaff() && O && (0, r.jsx)(y, {
            user: t
        })]
    })
}
let E = "PALUE000000001",
    y = e => {
        let {
            user: t
        } = e;
        return (0, r.jsxs)("div", {
            className: m.J_,
            children: [(0, r.jsx)(o.Text, {
                variant: "text-xs/bold",
                children: "STAFF ONLY and Experimental. Upload a decoration to view throughout the app."
            }), (0, r.jsx)(f.A, {
                onChange: e => {
                    null != e && (t.avatarDecoration = {
                        asset: e,
                        skuID: E
                    })
                },
                size: "sm",
                variant: "primary",
                text: h.intl.string(h.t.a9F1Qu)
            })]
        })
    }