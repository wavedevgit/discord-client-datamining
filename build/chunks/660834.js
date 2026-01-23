/** Chunk was on 47841 **/
/** chunk id: 660834, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => x,
    N8: () => b,
    Q$: () => h
});
var r = n(627968);
n(64700);
var i = n(735438),
    l = n(311907),
    s = n(397927),
    a = n(134413),
    o = n(221950),
    c = n(179534),
    d = n(997509),
    u = n(555337),
    g = n(652215),
    m = n(985018),
    p = n(118856);

function f(e) {
    if (null == e) return !1;
    let t = e.features.has(g.GuildFeatures.COMMUNITY),
        n = e.features.has(g.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    return t || n
}

function b() {
    let e = u.A.getProps().guild;
    null != e && (f(e) ? (d.A.close(), (0, o.aZ)(e.id)) : d.A.open(e.id, g.BEX.MEMBERS))
}

function h() {
    let e = f((0, l.bG)([u.A], () => u.A.getProps().guild, []));
    return (0, r.jsxs)("div", {
        className: p.q,
        children: [(0, r.jsx)("div", {
            children: m.intl.string(m.t["9Oq93m"])
        }), e && (0, r.jsx)(s.tfB, {
            size: "xs",
            color: "currentColor",
            className: p.w
        })]
    })
}

function x() {
    var e;
    let {
        guild: t
    } = (0, l.bG)([u.A], () => u.A.getProps(), [], i.isEqual), n = null != (e = null == t ? void 0 : t.id) ? e : g.dJq;
    return (0, a.fw)(n) ? (0, r.jsx)(c.A, {
        guildId: n
    }) : null
}