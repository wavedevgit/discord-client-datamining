/** chunk id: 422258 params = (module,exports,require) **/
n.d(e, {
    JD: () => D,
    Jz: () => m,
    S_: () => T,
    fv: () => L,
    i_: () => S,
    od: () => y,
    tV: () => F,
    w6: () => G,
    zN: () => U
});
var i = n(735438),
    a = n.n(i),
    l = n(873298),
    r = n(406935),
    o = n(157559),
    d = n(594061),
    u = n(734057),
    s = n(576705),
    c = n(661191),
    f = n(181079),
    h = n(668267),
    _ = n(349828),
    A = n(818348),
    v = n(985018);

function p(t) {
    let e = 0;
    for (let n in t) {
        let i = t[n];
        null != i && null != i.position && (e = Math.max(e, i.position))
    }
    return e + 1
}

function b(t) {
    for (let e in t) {
        let n = t[e];
        if (null == n) {
            delete t[e];
            continue
        }
        if (n.type === l.Ip.CATEGORY) continue;
        let i = u.A.getChannel(e);
        if (null == i || !i.isPrivate() && !s.A.can(A.xB.VIEW_CHANNEL, i)) {
            delete t[e];
            continue
        }
    }
}

function E(t, e) {
    let n = t[e];
    if (null == n || n.parentId === _.O8) return;
    let i = null != n.parentId ? t[n.parentId] : null;
    (null == i || i.type !== l.Ip.CATEGORY) && (n.parentId = _.O8)
}

function C(t) {
    return b(t), a().size(t) >= _.lj
}

function g() {
    o.A.show({
        title: v.intl.string(v.t["+XYXtZ"]),
        body: v.intl.formatToPlainString(v.t.JaIyFi, {
            count: _.lj
        })
    })
}

function O() {
    o.A.show({
        title: v.intl.string(v.t.iufib1),
        body: v.intl.string(v.t.eAn6z2),
        onCloseCallback: () => {
            window.location.reload()
        }
    })
}

function I(t) {
    return Object.keys(t).length
}

function R(t, e) {
    return e === l.Ip.CATEGORY ? null : u.A.getChannel(t)?.type ?? null
}

function m(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu";
    T([t], e, n)
}

function T(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "channel_context_menu",
        i = t.filter(t => !f.A.isFavorite(t));
    0 !== i.length && d.wc.updateAsync("favorites", t => {
        let a = !1;
        for (let r of i) {
            if (C(t.favoriteChannels)) {
                if (g(), !a) return !1;
                break
            }
            t.favoriteChannels[r] = l.wL.create({
                nickname: "",
                type: l.Ip.REFERENCE_ORIGINAL,
                position: p(t.favoriteChannels),
                parentId: e ?? _.O8
            }), b(t.favoriteChannels), E(t.favoriteChannels, r), a = !0, (0, h.LO)(n, R(r, l.Ip.REFERENCE_ORIGINAL), I(t.favoriteChannels))
        }
    }, d.Sb.FREQUENT_USER_ACTION, O)
}

function S(t) {
    let {
        trackAnalytics: e = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = f.A.getFavorite(t);
    if (null == n) return;
    let i = e ? R(t, n.type) : null;
    d.wc.updateAsync("favorites", a => {
        if (delete a.favoriteChannels[t], n.type === l.Ip.CATEGORY)
            for (let e in a.favoriteChannels) a.favoriteChannels[e].parentId === t && (a.favoriteChannels[e].parentId = _.O8);
        b(a.favoriteChannels), e && (0, h.TX)(i, I(a.favoriteChannels))
    }, d.Sb.INFREQUENT_USER_ACTION, O)
}

function G(t, e) {
    f.A.isFavorite(t) && d.wc.updateAsync("favorites", n => {
        n.favoriteChannels[t].nickname = e ?? ""
    }, d.Sb.INFREQUENT_USER_ACTION, O)
}

function y(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
        n = c.default.fromTimestamp(Date.now());
    d.wc.updateAsync("favorites", i => {
        if (C(i.favoriteChannels)) return g(), !1;
        i.favoriteChannels[n] = l.wL.create({
            nickname: t,
            type: l.Ip.CATEGORY,
            position: p(i.favoriteChannels),
            parentId: _.O8
        }), (0, h.LO)(e, R(n, l.Ip.CATEGORY), I(i.favoriteChannels))
    }, d.Sb.FREQUENT_USER_ACTION, O)
}

function L(t) {
    S(t)
}

function U(t) {
    0 !== t.length && d.wc.updateAsync("favorites", e => {
        for (let n of t) {
            let t = n.id;
            null != n.position && (e.favoriteChannels[t].position = n.position), void 0 !== n.parent_id && (e.favoriteChannels[t].parentId = n.parent_id ?? _.O8, E(e.favoriteChannels, t))
        }(0, h.P)()
    }, d.Sb.FREQUENT_USER_ACTION, O)
}

function D(t, e) {
    d.wc.updateAsync("favorites", n => {
        n.favoriteChannels[t].parentId = e ?? _.O8, E(n.favoriteChannels, t)
    }, d.Sb.FREQUENT_USER_ACTION, O)
}

function F(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    d.wc.updateAsync("favorites", n => {
        n.guildVisible = r._t.create({
            value: t
        }), (0, h.uS)(e, t)
    }, d.Sb.INFREQUENT_USER_ACTION, O)
}