/** chunk id: 422258, original params: e,t,n (module,exports,require) **/
n.d(t, {
    JD: () => y,
    Jz: () => T,
    Qh: () => N,
    S_: () => S,
    fv: () => R,
    i_: () => I,
    od: () => b,
    p0: () => O,
    w6: () => m
});
var i = n(735438),
    r = n.n(i),
    l = n(873298),
    a = n(406935),
    o = n(157559),
    s = n(594061),
    d = n(734057),
    u = n(576705),
    c = n(661191),
    A = n(181079),
    E = n(349828),
    f = n(818348),
    h = n(985018);

function p() {
    let e = A.A.getFavoriteChannels(),
        t = 1;
    for (let n in e) t = Math.max(t, e[n].order);
    return t + 1
}

function _(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue
        }
        if (n.type === l.Ip.CATEGORY) continue;
        let i = d.A.getChannel(t);
        if (null == i || !i.isPrivate() && !u.A.can(f.xB.VIEW_CHANNEL, i)) {
            delete e[t];
            continue
        }
    }
}

function g(e, t) {
    let n = e[t];
    if (null == n || n.parentId === E.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== l.Ip.CATEGORY) && (n.parentId = E.O8)
}

function C(e) {
    return _(e), r().size(e) >= E.lj
}

function v() {
    o.A.show({
        title: h.intl.string(h.t["+XYXtZ"]),
        body: h.intl.formatToPlainString(h.t.JaIyFi, {
            count: E.lj
        })
    })
}

function T(e, t) {
    A.A.isFavorite(e) || s.wc.updateAsync("favorites", n => {
        if (C(n.favoriteChannels)) return v(), !1;
        n.favoriteChannels[e] = l.wL.create({
            nickname: "",
            type: l.Ip.REFERENCE_ORIGINAL,
            position: p(),
            parentId: t ?? E.O8
        }), _(n.favoriteChannels), g(n.favoriteChannels, e)
    }, s.Sb.FREQUENT_USER_ACTION)
}

function I(e) {
    let t = A.A.getFavorite(e);
    null != t && s.wc.updateAsync("favorites", n => {
        if (delete n.favoriteChannels[e], t.type === l.Ip.CATEGORY)
            for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = E.O8);
        _(n.favoriteChannels)
    }, s.Sb.INFREQUENT_USER_ACTION)
}

function m(e, t) {
    A.A.isFavorite(e) && s.wc.updateAsync("favorites", n => {
        n.favoriteChannels[e].nickname = t ?? ""
    }, s.Sb.INFREQUENT_USER_ACTION)
}

function b(e) {
    let t = c.default.fromTimestamp(Date.now());
    s.wc.updateAsync("favorites", n => {
        if (C(n.favoriteChannels)) return v(), !1;
        n.favoriteChannels[t] = l.wL.create({
            nickname: e,
            type: l.Ip.CATEGORY,
            position: p(),
            parentId: E.O8
        })
    }, s.Sb.FREQUENT_USER_ACTION)
}

function R(e) {
    I(e)
}

function S(e) {
    s.wc.updateAsync("favorites", t => {
        for (let n of e) {
            let e = n.id;
            null != n.position && (t.favoriteChannels[e].position = n.position), void 0 !== n.parent_id && (t.favoriteChannels[e].parentId = n.parent_id ?? E.O8, g(t.favoriteChannels, e))
        }
    }, s.Sb.FREQUENT_USER_ACTION)
}

function y(e, t) {
    s.wc.updateAsync("favorites", n => {
        n.favoriteChannels[e].parentId = t ?? E.O8, g(n.favoriteChannels, e)
    }, s.Sb.FREQUENT_USER_ACTION)
}

function O() {
    s.wc.updateAsync("favorites", e => {
        e.muted = !e.muted
    }, s.Sb.INFREQUENT_USER_ACTION)
}

function N(e) {
    s.wc.updateAsync("favorites", t => {
        t.guildVisible = a._t.create({
            value: e
        })
    }, s.Sb.INFREQUENT_USER_ACTION)
}