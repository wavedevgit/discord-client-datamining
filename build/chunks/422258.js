/** chunk id: 422258, original params: t,e,n (module,exports,require) **/
n.d(e, {
    JD: () => T,
    Jz: () => E,
    S_: () => p,
    fv: () => h,
    i_: () => A,
    od: () => f,
    p0: () => v,
    w6: () => _
}), n(896048);
var r = n(873298),
    i = n(594061),
    a = n(734057),
    l = n(576705),
    o = n(661191),
    u = n(181079),
    d = n(818348);

function s() {
    let t = u.A.getFavoriteChannels(),
        e = 1;
    for (let n in t) e = Math.max(e, t[n].order);
    return e + 1
}

function c(t) {
    for (let e in t) {
        let n = t[e];
        if (null == n) {
            delete t[e];
            continue
        }
        if (n.type === r.Ip.CATEGORY) continue;
        let i = a.A.getChannel(e);
        if (null == i || !i.isPrivate() && !l.A.can(d.xB.VIEW_CHANNEL, i)) {
            delete t[e];
            continue
        }
    }
}

function E(t, e) {
    u.A.isFavorite(t) || i.wc.updateAsync("favorites", n => {
        n.favoriteChannels[t] = r.wL.create({
            nickname: "",
            type: r.Ip.REFERENCE_ORIGINAL,
            position: s(),
            parentId: null != e ? e : "0"
        }), c(n.favoriteChannels)
    }, i.Sb.FREQUENT_USER_ACTION)
}

function A(t) {
    let e = u.A.getFavorite(t);
    null != e && i.wc.updateAsync("favorites", n => {
        if (delete n.favoriteChannels[t], e.type === r.Ip.CATEGORY)
            for (let e in n.favoriteChannels) n.favoriteChannels[e].parentId === t && (n.favoriteChannels[e].parentId = "0");
        c(n.favoriteChannels)
    }, i.Sb.INFREQUENT_USER_ACTION)
}

function _(t, e) {
    u.A.isFavorite(t) && i.wc.updateAsync("favorites", n => {
        n.favoriteChannels[t].nickname = null != e ? e : ""
    }, i.Sb.INFREQUENT_USER_ACTION)
}

function f(t) {
    let e = o.default.fromTimestamp(Date.now());
    i.wc.updateAsync("favorites", n => {
        n.favoriteChannels[e] = r.wL.create({
            nickname: t,
            type: r.Ip.CATEGORY,
            position: s(),
            parentId: "0"
        })
    }, i.Sb.FREQUENT_USER_ACTION)
}

function h(t) {
    A(t)
}

function p(t) {
    i.wc.updateAsync("favorites", e => {
        for (let r of t)
            if (null != r.position && (e.favoriteChannels[r.id].position = r.position), void 0 !== r.parent_id) {
                var n;
                e.favoriteChannels[r.id].parentId = null != (n = r.parent_id) ? n : "0"
            }
    }, i.Sb.FREQUENT_USER_ACTION)
}

function T(t, e) {
    i.wc.updateAsync("favorites", n => {
        n.favoriteChannels[t].parentId = null != e ? e : "0"
    }, i.Sb.FREQUENT_USER_ACTION)
}

function v() {
    i.wc.updateAsync("favorites", t => {
        t.muted = !t.muted
    }, i.Sb.INFREQUENT_USER_ACTION)
}