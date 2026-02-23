/** chunk id: 422258, original params: e,t,n (module,exports,require) **/
n.d(t, {
    JD: () => S,
    Jz: () => v,
    S_: () => R,
    fv: () => b,
    i_: () => T,
    od: () => m,
    p0: () => y,
    w6: () => I
});
var i = n(735438),
    r = n.n(i),
    l = n(873298),
    a = n(157559),
    o = n(594061),
    s = n(734057),
    d = n(576705),
    u = n(661191),
    c = n(181079),
    A = n(349828),
    f = n(818348),
    E = n(985018);

function h() {
    let e = c.A.getFavoriteChannels(),
        t = 1;
    for (let n in e) t = Math.max(t, e[n].order);
    return t + 1
}

function p(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue
        }
        if (n.type === l.Ip.CATEGORY) continue;
        let i = s.A.getChannel(t);
        if (null == i || !i.isPrivate() && !d.A.can(f.xB.VIEW_CHANNEL, i)) {
            delete e[t];
            continue
        }
    }
}

function _(e, t) {
    let n = e[t];
    if (null == n || n.parentId === A.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== l.Ip.CATEGORY) && (n.parentId = A.O8)
}

function g(e) {
    return p(e), r().size(e) >= A.lj
}

function C() {
    a.A.show({
        title: E.intl.string(E.t["+XYXtZ"]),
        body: E.intl.formatToPlainString(E.t.JaIyFi, {
            count: A.lj
        })
    })
}

function v(e, t) {
    c.A.isFavorite(e) || o.wc.updateAsync("favorites", n => {
        if (g(n.favoriteChannels)) return C(), !1;
        n.favoriteChannels[e] = l.wL.create({
            nickname: "",
            type: l.Ip.REFERENCE_ORIGINAL,
            position: h(),
            parentId: t ?? A.O8
        }), p(n.favoriteChannels), _(n.favoriteChannels, e)
    }, o.Sb.FREQUENT_USER_ACTION)
}

function T(e) {
    let t = c.A.getFavorite(e);
    null != t && o.wc.updateAsync("favorites", n => {
        if (delete n.favoriteChannels[e], t.type === l.Ip.CATEGORY)
            for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = A.O8);
        p(n.favoriteChannels)
    }, o.Sb.INFREQUENT_USER_ACTION)
}

function I(e, t) {
    c.A.isFavorite(e) && o.wc.updateAsync("favorites", n => {
        n.favoriteChannels[e].nickname = t ?? ""
    }, o.Sb.INFREQUENT_USER_ACTION)
}

function m(e) {
    let t = u.default.fromTimestamp(Date.now());
    o.wc.updateAsync("favorites", n => {
        if (g(n.favoriteChannels)) return C(), !1;
        n.favoriteChannels[t] = l.wL.create({
            nickname: e,
            type: l.Ip.CATEGORY,
            position: h(),
            parentId: A.O8
        })
    }, o.Sb.FREQUENT_USER_ACTION)
}

function b(e) {
    T(e)
}

function R(e) {
    o.wc.updateAsync("favorites", t => {
        for (let n of e) {
            let e = n.id;
            null != n.position && (t.favoriteChannels[e].position = n.position), void 0 !== n.parent_id && (t.favoriteChannels[e].parentId = n.parent_id ?? A.O8, _(t.favoriteChannels, e))
        }
    }, o.Sb.FREQUENT_USER_ACTION)
}

function S(e, t) {
    o.wc.updateAsync("favorites", n => {
        n.favoriteChannels[e].parentId = t ?? A.O8, _(n.favoriteChannels, e)
    }, o.Sb.FREQUENT_USER_ACTION)
}

function y() {
    o.wc.updateAsync("favorites", e => {
        e.muted = !e.muted
    }, o.Sb.INFREQUENT_USER_ACTION)
}