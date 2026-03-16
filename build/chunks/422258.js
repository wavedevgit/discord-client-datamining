/** chunk id: 422258 params = (module,exports,require) **/
t.d(n, {
    JD: () => N,
    Jz: () => g,
    S_: () => T,
    fv: () => I,
    i_: () => y,
    od: () => O,
    tV: () => S,
    w6: () => R,
    zN: () => G
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
    A = t(349828),
    h = t(818348),
    v = t(985018);

function b(e) {
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
        if (null == i || !i.isPrivate() && !s.A.can(h.xB.VIEW_CHANNEL, i)) {
            delete e[n];
            continue
        }
    }
}

function _(e, n) {
    let t = e[n];
    if (null == t || t.parentId === A.O8) return;
    let i = null != t.parentId ? e[t.parentId] : null;
    (null == i || i.type !== l.Ip.CATEGORY) && (t.parentId = A.O8)
}

function E(e) {
    return p(e), r().size(e) >= A.lj
}

function C() {
    d.A.show({
        title: v.intl.string(v.t["+XYXtZ"]),
        body: v.intl.formatToPlainString(v.t.JaIyFi, {
            count: A.lj
        })
    })
}

function m() {
    d.A.show({
        title: v.intl.string(v.t.iufib1),
        body: v.intl.string(v.t.eAn6z2),
        onCloseCallback: () => {
            window.location.reload()
        }
    })
}

function g(e, n) {
    T([e], n)
}

function T(e, n) {
    let t = e.filter(e => !f.A.isFavorite(e));
    0 !== t.length && o.wc.updateAsync("favorites", e => {
        let i = !1;
        for (let r of t) {
            if (E(e.favoriteChannels)) {
                if (C(), !i) return !1;
                break
            }
            e.favoriteChannels[r] = l.wL.create({
                nickname: "",
                type: l.Ip.REFERENCE_ORIGINAL,
                position: b(e.favoriteChannels),
                parentId: n ?? A.O8
            }), p(e.favoriteChannels), _(e.favoriteChannels, r), i = !0
        }
    }, o.Sb.FREQUENT_USER_ACTION, m)
}

function y(e) {
    let n = f.A.getFavorite(e);
    null != n && o.wc.updateAsync("favorites", t => {
        if (delete t.favoriteChannels[e], n.type === l.Ip.CATEGORY)
            for (let n in t.favoriteChannels) t.favoriteChannels[n].parentId === e && (t.favoriteChannels[n].parentId = A.O8);
        p(t.favoriteChannels)
    }, o.Sb.INFREQUENT_USER_ACTION, m)
}

function R(e, n) {
    f.A.isFavorite(e) && o.wc.updateAsync("favorites", t => {
        t.favoriteChannels[e].nickname = n ?? ""
    }, o.Sb.INFREQUENT_USER_ACTION, m)
}

function O(e) {
    let n = c.default.fromTimestamp(Date.now());
    o.wc.updateAsync("favorites", t => {
        if (E(t.favoriteChannels)) return C(), !1;
        t.favoriteChannels[n] = l.wL.create({
            nickname: e,
            type: l.Ip.CATEGORY,
            position: b(t.favoriteChannels),
            parentId: A.O8
        })
    }, o.Sb.FREQUENT_USER_ACTION, m)
}

function I(e) {
    y(e)
}

function G(e) {
    o.wc.updateAsync("favorites", n => {
        for (let t of e) {
            let e = t.id;
            null != t.position && (n.favoriteChannels[e].position = t.position), void 0 !== t.parent_id && (n.favoriteChannels[e].parentId = t.parent_id ?? A.O8, _(n.favoriteChannels, e))
        }
    }, o.Sb.FREQUENT_USER_ACTION, m)
}

function N(e, n) {
    o.wc.updateAsync("favorites", t => {
        t.favoriteChannels[e].parentId = n ?? A.O8, _(t.favoriteChannels, e)
    }, o.Sb.FREQUENT_USER_ACTION, m)
}

function S(e) {
    o.wc.updateAsync("favorites", n => {
        n.guildVisible = a._t.create({
            value: e
        })
    }, o.Sb.INFREQUENT_USER_ACTION, m)
}