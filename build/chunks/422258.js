/** chunk id: 422258 params = (module,exports,require) **/
n.d(e, {
    JD: () => N,
    Jz: () => R,
    S_: () => T,
    fv: () => L,
    i_: () => G,
    od: () => y,
    tV: () => U,
    w6: () => S,
    zN: () => D
});
var i = n(735438),
    l = n.n(i),
    a = n(873298),
    r = n(406935),
    d = n(157559),
    o = n(594061),
    u = n(734057),
    s = n(576705),
    c = n(661191),
    f = n(181079),
    A = n(668267),
    h = n(349828),
    v = n(818348),
    _ = n(985018);

function b(t) {
    let e = 0;
    for (let n in t) {
        let i = t[n];
        null != i && null != i.position && (e = Math.max(e, i.position))
    }
    return e + 1
}

function p(t) {
    for (let e in t) {
        let n = t[e];
        if (null == n) {
            delete t[e];
            continue
        }
        if (n.type === a.Ip.CATEGORY) continue;
        let i = u.A.getChannel(e);
        if (null == i || !i.isPrivate() && !s.A.can(v.xB.VIEW_CHANNEL, i)) {
            delete t[e];
            continue
        }
    }
}

function E(t, e) {
    let n = t[e];
    if (null == n || n.parentId === h.O8) return;
    let i = null != n.parentId ? t[n.parentId] : null;
    (null == i || i.type !== a.Ip.CATEGORY) && (n.parentId = h.O8)
}

function C(t) {
    return p(t), l().size(t) >= h.lj
}

function g() {
    d.A.show({
        title: _.intl.string(_.t["+XYXtZ"]),
        body: _.intl.formatToPlainString(_.t.JaIyFi, {
            count: h.lj
        })
    })
}

function O() {
    d.A.show({
        title: _.intl.string(_.t.iufib1),
        body: _.intl.string(_.t.eAn6z2),
        onCloseCallback: () => {
            window.location.reload()
        }
    })
}

function I(t) {
    return Object.keys(t).length
}

function m(t, e) {
    return e === a.Ip.CATEGORY ? null : u.A.getChannel(t)?.type ?? null
}

function R(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    T([t], e, n)
}

function T(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = t.filter(t => !f.A.isFavorite(t));
    0 !== i.length && o.wc.updateAsync("favorites", t => {
        let l = !1;
        for (let r of i) {
            if (C(t.favoriteChannels)) {
                if (g(), !l) return !1;
                break
            }
            t.favoriteChannels[r] = a.wL.create({
                nickname: "",
                type: a.Ip.REFERENCE_ORIGINAL,
                position: b(t.favoriteChannels),
                parentId: e ?? h.O8
            }), p(t.favoriteChannels), E(t.favoriteChannels, r), l = !0, (0, A.LO)(n, m(r, a.Ip.REFERENCE_ORIGINAL), I(t.favoriteChannels))
        }
    }, o.Sb.FREQUENT_USER_ACTION, O)
}

function G(t) {
    let {
        trackAnalytics: e = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = f.A.getFavorite(t);
    if (null == n) return;
    let i = e ? m(t, n.type) : null;
    o.wc.updateAsync("favorites", l => {
        if (delete l.favoriteChannels[t], n.type === a.Ip.CATEGORY)
            for (let e in l.favoriteChannels) l.favoriteChannels[e].parentId === t && (l.favoriteChannels[e].parentId = h.O8);
        p(l.favoriteChannels), e && (0, A.TX)(i, I(l.favoriteChannels))
    }, o.Sb.INFREQUENT_USER_ACTION, O)
}

function S(t, e) {
    f.A.isFavorite(t) && o.wc.updateAsync("favorites", n => {
        n.favoriteChannels[t].nickname = e ?? ""
    }, o.Sb.INFREQUENT_USER_ACTION, O)
}

function y(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
        n = c.default.fromTimestamp(Date.now());
    o.wc.updateAsync("favorites", i => {
        if (C(i.favoriteChannels)) return g(), !1;
        i.favoriteChannels[n] = a.wL.create({
            nickname: t,
            type: a.Ip.CATEGORY,
            position: b(i.favoriteChannels),
            parentId: h.O8
        }), (0, A.LO)(e, m(n, a.Ip.CATEGORY), I(i.favoriteChannels))
    }, o.Sb.FREQUENT_USER_ACTION, O)
}

function L(t) {
    G(t)
}

function D(t) {
    0 !== t.length && o.wc.updateAsync("favorites", e => {
        for (let n of t) {
            let t = n.id;
            null != n.position && (e.favoriteChannels[t].position = n.position), void 0 !== n.parent_id && (e.favoriteChannels[t].parentId = n.parent_id ?? h.O8, E(e.favoriteChannels, t))
        }(0, A.P)()
    }, o.Sb.FREQUENT_USER_ACTION, O)
}

function N(t, e) {
    o.wc.updateAsync("favorites", n => {
        n.favoriteChannels[t].parentId = e ?? h.O8, E(n.favoriteChannels, t)
    }, o.Sb.FREQUENT_USER_ACTION, O)
}

function U(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    o.wc.updateAsync("favorites", n => {
        n.guildVisible = r._t.create({
            value: t
        }), (0, A.uS)(e, t)
    }, o.Sb.INFREQUENT_USER_ACTION, O)
}