/** chunk id: 422258 params = (module,exports,require) **/
t.d(n, {
    JD: () => F,
    Jz: () => I,
    S_: () => R,
    fv: () => N,
    i_: () => y,
    od: () => S,
    tV: () => D,
    w6: () => G,
    zN: () => L
});
var i = t(735438),
    r = t.n(i),
    l = t(873298),
    a = t(406935),
    d = t(157559),
    o = t(594061),
    u = t(734057),
    s = t(576705),
    c = t(661191),
    f = t(181079),
    A = t(668267),
    h = t(349828),
    _ = t(818348),
    v = t(985018);

function E(e) {
    let n = 0;
    for (let t in e) {
        let i = e[t];
        null != i && null != i.position && (n = Math.max(n, i.position))
    }
    return n + 1
}

function p(e) {
    for (let n in e) {
        let t = e[n];
        if (null == t) {
            delete e[n];
            continue
        }
        if (t.type === l.Ip.CATEGORY) continue;
        let i = u.A.getChannel(n);
        if (null == i || !i.isPrivate() && !s.A.can(_.xB.VIEW_CHANNEL, i)) {
            delete e[n];
            continue
        }
    }
}

function b(e, n) {
    let t = e[n];
    if (null == t || t.parentId === h.O8) return;
    let i = null != t.parentId ? e[t.parentId] : null;
    (null == i || i.type !== l.Ip.CATEGORY) && (t.parentId = h.O8)
}

function C(e) {
    return p(e), r().size(e) >= h.lj
}

function m() {
    d.A.show({
        title: v.intl.string(v.t["+XYXtZ"]),
        body: v.intl.formatToPlainString(v.t.JaIyFi, {
            count: h.lj
        })
    })
}

function O() {
    d.A.show({
        title: v.intl.string(v.t.iufib1),
        body: v.intl.string(v.t.eAn6z2),
        onCloseCallback: () => {
            window.location.reload()
        }
    })
}

function g(e) {
    return Object.keys(e).length
}

function T(e, n) {
    return n === l.Ip.CATEGORY ? null : u.A.getChannel(e)?.type ?? null
}

function I(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    R([e], n, t)
}

function R(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = e.filter(e => !f.A.isFavorite(e));
    0 !== i.length && o.wc.updateAsync("favorites", e => {
        let r = !1;
        for (let a of i) {
            if (C(e.favoriteChannels)) {
                if (m(), !r) return !1;
                break
            }
            e.favoriteChannels[a] = l.wL.create({
                nickname: "",
                type: l.Ip.REFERENCE_ORIGINAL,
                position: E(e.favoriteChannels),
                parentId: n ?? h.O8
            }), p(e.favoriteChannels), b(e.favoriteChannels, a), r = !0, (0, A.LO)(t, T(a, l.Ip.REFERENCE_ORIGINAL), g(e.favoriteChannels))
        }
    }, o.Sb.FREQUENT_USER_ACTION, O)
}

function y(e) {
    let {
        trackAnalytics: n = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = f.A.getFavorite(e);
    if (null == t) return;
    let i = n ? T(e, t.type) : null;
    o.wc.updateAsync("favorites", r => {
        if (delete r.favoriteChannels[e], t.type === l.Ip.CATEGORY)
            for (let n in r.favoriteChannels) r.favoriteChannels[n].parentId === e && (r.favoriteChannels[n].parentId = h.O8);
        p(r.favoriteChannels), n && (0, A.TX)(i, g(r.favoriteChannels))
    }, o.Sb.INFREQUENT_USER_ACTION, O)
}

function G(e, n) {
    f.A.isFavorite(e) && o.wc.updateAsync("favorites", t => {
        t.favoriteChannels[e].nickname = n ?? ""
    }, o.Sb.INFREQUENT_USER_ACTION, O)
}

function S(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
        t = c.default.fromTimestamp(Date.now());
    o.wc.updateAsync("favorites", i => {
        if (C(i.favoriteChannels)) return m(), !1;
        i.favoriteChannels[t] = l.wL.create({
            nickname: e,
            type: l.Ip.CATEGORY,
            position: E(i.favoriteChannels),
            parentId: h.O8
        }), (0, A.LO)(n, T(t, l.Ip.CATEGORY), g(i.favoriteChannels))
    }, o.Sb.FREQUENT_USER_ACTION, O)
}

function N(e) {
    y(e)
}

function L(e) {
    0 !== e.length && o.wc.updateAsync("favorites", n => {
        for (let t of e) {
            let e = t.id;
            null != t.position && (n.favoriteChannels[e].position = t.position), void 0 !== t.parent_id && (n.favoriteChannels[e].parentId = t.parent_id ?? h.O8, b(n.favoriteChannels, e))
        }(0, A.P)()
    }, o.Sb.FREQUENT_USER_ACTION, O)
}

function F(e, n) {
    o.wc.updateAsync("favorites", t => {
        t.favoriteChannels[e].parentId = n ?? h.O8, b(t.favoriteChannels, e)
    }, o.Sb.FREQUENT_USER_ACTION, O)
}

function D(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    o.wc.updateAsync("favorites", t => {
        t.guildVisible = a._t.create({
            value: e
        }), (0, A.uS)(n, e)
    }, o.Sb.INFREQUENT_USER_ACTION, O)
}