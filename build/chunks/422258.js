/** chunk id: 422258, original params: e,t,n (module,exports,require) **/
n.d(t, {
    JD: () => y,
    Jz: () => g,
    S_: () => T,
    fv: () => I,
    i_: () => b,
    od: () => R,
    tV: () => N,
    w6: () => O,
    zE: () => S
});
var i = n(735438),
    a = n.n(i),
    r = n(873298),
    l = n(406935),
    u = n(157559),
    o = n(594061),
    d = n(734057),
    s = n(576705),
    c = n(661191),
    f = n(181079),
    A = n(349828),
    v = n(818348),
    p = n(985018);

function _() {
    let e = f.A.getFavoriteChannels(),
        t = 1;
    for (let n in e) t = Math.max(t, e[n].order);
    return t + 1
}

function C(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue
        }
        if (n.type === r.Ip.CATEGORY) continue;
        let i = d.A.getChannel(t);
        if (null == i || !i.isPrivate() && !s.A.can(v.xB.VIEW_CHANNEL, i)) {
            delete e[t];
            continue
        }
    }
}

function h(e, t) {
    let n = e[t];
    if (null == n || n.parentId === A.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== r.Ip.CATEGORY) && (n.parentId = A.O8)
}

function m(e) {
    return C(e), a().size(e) >= A.lj
}

function E() {
    u.A.show({
        title: p.intl.string(p.t["+XYXtZ"]),
        body: p.intl.formatToPlainString(p.t.JaIyFi, {
            count: A.lj
        })
    })
}

function g(e, t) {
    f.A.isFavorite(e) || o.wc.updateAsync("favorites", n => {
        if (m(n.favoriteChannels)) return E(), !1;
        n.favoriteChannels[e] = r.wL.create({
            nickname: "",
            type: r.Ip.REFERENCE_ORIGINAL,
            position: _(),
            parentId: t ?? A.O8
        }), C(n.favoriteChannels), h(n.favoriteChannels, e)
    }, o.Sb.FREQUENT_USER_ACTION)
}

function b(e) {
    let t = f.A.getFavorite(e);
    null != t && o.wc.updateAsync("favorites", n => {
        if (delete n.favoriteChannels[e], t.type === r.Ip.CATEGORY)
            for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = A.O8);
        C(n.favoriteChannels)
    }, o.Sb.INFREQUENT_USER_ACTION)
}

function O(e, t) {
    f.A.isFavorite(e) && o.wc.updateAsync("favorites", n => {
        n.favoriteChannels[e].nickname = t ?? ""
    }, o.Sb.INFREQUENT_USER_ACTION)
}

function R(e) {
    let t = c.default.fromTimestamp(Date.now());
    o.wc.updateAsync("favorites", n => {
        if (m(n.favoriteChannels)) return E(), !1;
        n.favoriteChannels[t] = r.wL.create({
            nickname: e,
            type: r.Ip.CATEGORY,
            position: _(),
            parentId: A.O8
        })
    }, o.Sb.FREQUENT_USER_ACTION)
}

function I(e) {
    b(e)
}

function T(e) {
    o.wc.updateAsync("favorites", t => {
        for (let n of e) {
            let e = n.id;
            null != n.position && (t.favoriteChannels[e].position = n.position), void 0 !== n.parent_id && (t.favoriteChannels[e].parentId = n.parent_id ?? A.O8, h(t.favoriteChannels, e))
        }
    }, o.Sb.FREQUENT_USER_ACTION)
}

function y(e, t) {
    o.wc.updateAsync("favorites", n => {
        n.favoriteChannels[e].parentId = t ?? A.O8, h(n.favoriteChannels, e)
    }, o.Sb.FREQUENT_USER_ACTION)
}

function S() {
    o.wc.updateAsync("favorites", e => {
        e.muted = !e.muted
    }, o.Sb.INFREQUENT_USER_ACTION)
}

function N(e) {
    o.wc.updateAsync("favorites", t => {
        t.guildVisible = l._t.create({
            value: e
        })
    }, o.Sb.INFREQUENT_USER_ACTION)
}