/** chunk id: 495273 params = (module,exports,require) **/
n.d(t, {
    Ae: () => H,
    B4: () => R,
    C$: () => M,
    D4: () => W,
    Lq: () => b,
    M2: () => _,
    N8: () => I,
    Vl: () => y,
    Wi: () => L,
    es: () => B,
    ld: () => V,
    n0: () => z,
    rT: () => O,
    ro: () => U,
    tP: () => x,
    uB: () => k,
    uX: () => C,
    uh: () => m,
    vV: () => G
}), n(321073);
var r = n(136722),
    i = n(702805),
    l = n(155718),
    s = n(95701),
    a = n(260509),
    o = n(34457),
    u = n(696451),
    c = n(287809),
    d = n(147036),
    h = n(403362),
    p = n(7864),
    f = n(488926),
    g = n(661191),
    E = n(427262),
    T = n(737045),
    A = n(652215),
    N = n(985018);

function S(e) {
    return (0, o._m)(e, A.xBc.ADMINISTRATOR)
}

function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = S(e) ? T.T6.ADMINISTRATOR : T.T6.ROLE;
    return {
        rowType: n,
        colorString: e.colorString ?? A.TpD,
        name: e.name,
        id: e.id,
        disabled: S(e) || t,
        key: `${n}:${e.id}`,
        tags: e.tags
    }
}

function m(e, t) {
    let n = +!S(e),
        r = +!S(t);
    return n !== r ? n - r : (0, p.AT)(e, t)
}

function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.intl.string(N.t["gnsna/"]);
    return [{
        rowType: T.T6.EMPTY_STATE,
        colorString: A.TpD,
        name: e,
        disabled: !0,
        id: "EMPTY_STATE"
    }]
}

function v(e, t, n, i) {
    let l = c.default.getCurrentUser();
    if (null == l) return !1;
    if (null == e) return l.id !== t;
    let s = e.permissionOverwrites[t];
    return i?.[t] != null && (s = i[t]), null == s || !r.zy(s.allow, n)
}

function I(e, t) {
    return g.default.castGuildIdAsEveryoneGuildRoleId(e) === t
}

function O(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return t.filter(e => !S(e) && v(n, e.id, r) && !(0, o.Oy)(e) && i(e.name)).sort(m).map(e => R(e))
}

function _(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return t.filter(e => !S(e) && v(n, e.id, r) && !(0, o.Oy)(e) && i(e.name)).sort(m).map(e => R(e, (0, o._m)(e, r)))
}

function C(e, t, n, r, i) {
    let l = [];
    return 0 === (l = t.filter(e => S(e) || !v(n, e.id, r, i) && !(0, o.Oy)(e)).sort(m).map(e => R(e))).length ? y(N.intl.string(N.t.nZfHsf)) : l
}

function M(e, t, n, i, l) {
    let s = [];
    return 0 === (s = t.filter(e => S(e) || !v(n, e.id, i, l) && !(0, o.Oy)(e) || r.zy(r.kg(e.permissions, n.permissionOverwrites[e.id]?.allow), i)).sort(m).map(e => R(e, (0, o._m)(e, i)))).length ? y(N.intl.string(N.t.nZfHsf)) : s
}

function D(e, t) {
    return u.Ay.getNick(t.id, e.id) ?? E.Ay.getName(e)
}

function w(e, t) {
    let n = (0, a.bM)(t, e) ? T.T6.OWNER : T.T6.MEMBER;
    return {
        rowType: n,
        name: D(e, t),
        username: E.Ay.getUserTag(e),
        id: e.id,
        avatarURL: e.getAvatarURL(t.id, 24),
        bot: e.bot,
        verifiedBot: e.isVerifiedBot(),
        disabled: (0, a.bM)(t, e),
        key: `${n}:${e.id}`
    }
}

function P(e, t) {
    return e.rowType !== t.rowType ? e.rowType - t.rowType : e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase())
}

function b(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return e.map(c.default.getUser).filter(h.Vq).filter(e => !(0, a.bM)(n, e) && v(t, e.id, r) && (i(D(e, n)) || i(e.username) || i(e.discriminator))).map(e => w(e, n)).sort(P)
}

function L(e, t, n, r, i) {
    return e.map(c.default.getUser).filter(h.Vq).filter(e => !v(t, e.id, r, i) || (0, a.bM)(n, e)).map(e => w(e, n)).sort(P)
}

function G(e, t) {
    switch (e) {
        case T.T6.ROLE:
            return N.intl.string(N.t.ZxoFOG);
        case T.T6.OWNER:
            return N.intl.string(N.t.NWhYJg);
        case T.T6.ADMINISTRATOR:
            return N.intl.string(N.t["dwlcc+"]);
        case T.T6.MEMBER:
            return t ? N.intl.string(N.t.UAJxZi) : null;
        case T.T6.USER:
            return N.intl.string(N.t.KD6OJJ);
        case T.T6.GUILD:
            return N.intl.string(N.t["5qyruI"]);
        case T.T6.EMPTY_STATE:
            return null
    }
}

function U(e) {
    switch (e) {
        case T.T6.ROLE:
            return N.intl.string(N.t["Gzc/a8"]);
        case T.T6.OWNER:
            return N.intl.string(N.t.icuNBM);
        case T.T6.ADMINISTRATOR:
            return N.intl.string(N.t.eTmN5a);
        case T.T6.MEMBER:
            return N.intl.string(N.t["Gzc/a8"]);
        case T.T6.EMPTY_STATE:
        default:
            return null
    }
}

function B(e, t, n) {
    let i = e.permissionOverwrites[e.guild_id];
    null == i && (i = f.xT(e.guild_id));
    let l = {
        ...i
    };
    return l.deny = r.TF(l.deny, t), l.allow = r.TF(l.allow, t), n || (l.deny = r.WQ(l.deny, t)), l
}

function k(e, t, n) {
    let r = B(e, t, n);
    (0, i.LA)(e, r.id, r.allow, r.deny)
}

function x(e, t) {
    let n = c.default.getCurrentUser();
    if (null == n) return;
    let s = e.permissionOverwrites[n.id];
    if (null == s) {
        let s = {
            id: n.id,
            type: l.r2.MEMBER,
            allow: r.WQ(f.x3, t),
            deny: f.x3
        };
        return (0, i.R$)(e.id, [s], !0)
    } {
        let {
            allow: n,
            deny: l
        } = s;
        return n = r.WQ(n, t), (0, i.LA)(e, s.id, n, l)
    }
}

function H(e, t) {
    if (null == e) return !1;
    let n = e.permissionOverwrites[e.guild_id];
    return t?.[e.guild_id] != null && (n = t[e.guild_id]), null != n && r.zy(n.deny, e.accessPermissions)
}

function z(e, t, n) {
    return e === A.rbe.GUILD_TEXT || e === A.rbe.GUILD_ANNOUNCEMENT ? t : !(0, s.ay)(e) && e !== A.rbe.GUILD_CATEGORY || t && n
}

function V(e) {
    switch (e) {
        case A.rbe.GUILD_TEXT:
        case A.rbe.GUILD_ANNOUNCEMENT:
            return N.intl.format(N.t.ZDtA0T, {});
        case A.rbe.GUILD_VOICE:
            return N.intl.format(N.t.iZAMty, {});
        case A.rbe.GUILD_CATEGORY:
            return N.intl.format(N.t.PhnARV, {});
        default:
            return null
    }
}

function W(e, t) {
    let n = [];
    return Object.values(e).forEach(e => {
        let {
            row: r
        } = e;
        null != r.id && "" !== r.id && (r.rowType === T.T6.ROLE ? n.push((0, d.we)(r.id, t)) : r.rowType === T.T6.MEMBER && n.push((0, d.n3)(r.id, t)))
    }), n
}