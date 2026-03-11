/** chunk id: 422258 params = (module,exports,require) **/
n.d(t, {
    JD: () => S,
    Jz: () => m,
    S_: () => g,
    fv: () => y,
    i_: () => O,
    od: () => I,
    tV: () => G,
    w6: () => R,
    zN: () => T
});
var i = n(735438),
    r = n.n(i),
    a = n(873298),
    l = n(406935),
    d = n(157559),
    o = n(594061),
    u = n(734057),
    s = n(576705),
    f = n(661191),
    c = n(181079),
    h = n(349828),
    v = n(818348),
    A = n(985018);

function b(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position))
    }
    return t + 1
}

function p(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue
        }
        if (n.type === a.Ip.CATEGORY) continue;
        let i = u.A.getChannel(t);
        if (null == i || !i.isPrivate() && !s.A.can(v.xB.VIEW_CHANNEL, i)) {
            delete e[t];
            continue
        }
    }
}

function C(e, t) {
    let n = e[t];
    if (null == n || n.parentId === h.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== a.Ip.CATEGORY) && (n.parentId = h.O8)
}

function E(e) {
    return p(e), r().size(e) >= h.lj
}

function _() {
    d.A.show({
        title: A.intl.string(A.t["+XYXtZ"]),
        body: A.intl.formatToPlainString(A.t.JaIyFi, {
            count: h.lj
        })
    })
}

function m(e, t) {
    g([e], t)
}

function g(e, t) {
    let n = e.filter(e => !c.A.isFavorite(e));
    0 !== n.length && o.wc.updateAsync("favorites", e => {
        let i = !1;
        for (let r of n) {
            if (E(e.favoriteChannels)) {
                if (_(), !i) return !1;
                break
            }
            e.favoriteChannels[r] = a.wL.create({
                nickname: "",
                type: a.Ip.REFERENCE_ORIGINAL,
                position: b(e.favoriteChannels),
                parentId: t ?? h.O8
            }), p(e.favoriteChannels), C(e.favoriteChannels, r), i = !0
        }
    }, o.Sb.FREQUENT_USER_ACTION)
}

function O(e) {
    let t = c.A.getFavorite(e);
    null != t && o.wc.updateAsync("favorites", n => {
        if (delete n.favoriteChannels[e], t.type === a.Ip.CATEGORY)
            for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = h.O8);
        p(n.favoriteChannels)
    }, o.Sb.INFREQUENT_USER_ACTION)
}

function R(e, t) {
    c.A.isFavorite(e) && o.wc.updateAsync("favorites", n => {
        n.favoriteChannels[e].nickname = t ?? ""
    }, o.Sb.INFREQUENT_USER_ACTION)
}

function I(e) {
    let t = f.default.fromTimestamp(Date.now());
    o.wc.updateAsync("favorites", n => {
        if (E(n.favoriteChannels)) return _(), !1;
        n.favoriteChannels[t] = a.wL.create({
            nickname: e,
            type: a.Ip.CATEGORY,
            position: b(n.favoriteChannels),
            parentId: h.O8
        })
    }, o.Sb.FREQUENT_USER_ACTION)
}

function y(e) {
    O(e)
}

function T(e) {
    o.wc.updateAsync("favorites", t => {
        for (let n of e) {
            let e = n.id;
            null != n.position && (t.favoriteChannels[e].position = n.position), void 0 !== n.parent_id && (t.favoriteChannels[e].parentId = n.parent_id ?? h.O8, C(t.favoriteChannels, e))
        }
    }, o.Sb.FREQUENT_USER_ACTION)
}

function S(e, t) {
    o.wc.updateAsync("favorites", n => {
        n.favoriteChannels[e].parentId = t ?? h.O8, C(n.favoriteChannels, e)
    }, o.Sb.FREQUENT_USER_ACTION)
}

function G(e) {
    o.wc.updateAsync("favorites", t => {
        t.guildVisible = l._t.create({
            value: e
        })
    }, o.Sb.INFREQUENT_USER_ACTION)
}