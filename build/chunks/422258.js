/** chunk id: 422258, original params: t,n,e (module,exports,require) **/
e.d(n, {
    JD: () => T,
    Jz: () => C,
    S_: () => y,
    fv: () => j,
    i_: () => _,
    od: () => E,
    p0: () => O,
    w6: () => I
});
var i = e(735438),
    a = e.n(i),
    l = e(873298),
    r = e(157559),
    s = e(594061),
    d = e(734057),
    o = e(576705),
    u = e(661191),
    c = e(181079),
    A = e(349828),
    h = e(818348),
    f = e(985018);

function g() {
    let t = c.A.getFavoriteChannels(),
        n = 1;
    for (let e in t) n = Math.max(n, t[e].order);
    return n + 1
}

function p(t) {
    for (let n in t) {
        let e = t[n];
        if (null == e) {
            delete t[n];
            continue
        }
        if (e.type === l.Ip.CATEGORY) continue;
        let i = d.A.getChannel(n);
        if (null == i || !i.isPrivate() && !o.A.can(h.xB.VIEW_CHANNEL, i)) {
            delete t[n];
            continue
        }
    }
}

function v(t, n) {
    let e = t[n];
    if (null == e || e.parentId === A.O8) return;
    let i = null != e.parentId ? t[e.parentId] : null;
    (null == i || i.type !== l.Ip.CATEGORY) && (e.parentId = A.O8)
}

function b(t) {
    return p(t), a().size(t) >= A.lj
}

function m() {
    r.A.show({
        title: f.intl.string(f.t["+XYXtZ"]),
        body: f.intl.formatToPlainString(f.t.JaIyFi, {
            count: A.lj
        })
    })
}

function C(t, n) {
    c.A.isFavorite(t) || s.wc.updateAsync("favorites", e => {
        if (b(e.favoriteChannels)) return m(), !1;
        e.favoriteChannels[t] = l.wL.create({
            nickname: "",
            type: l.Ip.REFERENCE_ORIGINAL,
            position: g(),
            parentId: n ?? A.O8
        }), p(e.favoriteChannels), v(e.favoriteChannels, t)
    }, s.Sb.FREQUENT_USER_ACTION)
}

function _(t) {
    let n = c.A.getFavorite(t);
    null != n && s.wc.updateAsync("favorites", e => {
        if (delete e.favoriteChannels[t], n.type === l.Ip.CATEGORY)
            for (let n in e.favoriteChannels) e.favoriteChannels[n].parentId === t && (e.favoriteChannels[n].parentId = A.O8);
        p(e.favoriteChannels)
    }, s.Sb.INFREQUENT_USER_ACTION)
}

function I(t, n) {
    c.A.isFavorite(t) && s.wc.updateAsync("favorites", e => {
        e.favoriteChannels[t].nickname = n ?? ""
    }, s.Sb.INFREQUENT_USER_ACTION)
}

function E(t) {
    let n = u.default.fromTimestamp(Date.now());
    s.wc.updateAsync("favorites", e => {
        if (b(e.favoriteChannels)) return m(), !1;
        e.favoriteChannels[n] = l.wL.create({
            nickname: t,
            type: l.Ip.CATEGORY,
            position: g(),
            parentId: A.O8
        })
    }, s.Sb.FREQUENT_USER_ACTION)
}

function j(t) {
    _(t)
}

function y(t) {
    s.wc.updateAsync("favorites", n => {
        for (let e of t) {
            let t = e.id;
            null != e.position && (n.favoriteChannels[t].position = e.position), void 0 !== e.parent_id && (n.favoriteChannels[t].parentId = e.parent_id ?? A.O8, v(n.favoriteChannels, t))
        }
    }, s.Sb.FREQUENT_USER_ACTION)
}

function T(t, n) {
    s.wc.updateAsync("favorites", e => {
        e.favoriteChannels[t].parentId = n ?? A.O8, v(e.favoriteChannels, t)
    }, s.Sb.FREQUENT_USER_ACTION)
}

function O() {
    s.wc.updateAsync("favorites", t => {
        t.muted = !t.muted
    }, s.Sb.INFREQUENT_USER_ACTION)
}