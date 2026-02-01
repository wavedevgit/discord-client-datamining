/** chunk id: 174768, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    A: () => el
}), n(321073), n(896048), n(264879), n(667532), n(733351), n(747238);
var i, a = n(735438),
    o = n.n(a),
    s = n(311907),
    l = n(506774),
    c = n(73153),
    u = n(629357),
    d = n(280157),
    f = n(455234),
    p = n(863005),
    _ = n(544028),
    h = n(961350),
    m = n(734057),
    g = n(31717),
    E = n(808728),
    y = n(696451),
    b = n(71393),
    O = n(576705),
    v = n(222823),
    A = n(309010),
    I = n(967198),
    S = n(543465),
    T = n(248465),
    C = n(403362),
    N = n(652215),
    w = n(985018);

function R(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let P = "seenQSTutorial",
    D = 5,
    L = 7,
    x = 3,
    M = 100,
    j = [u.rD.USER, u.rD.GROUP_DM, u.rD.TEXT_CHANNEL, u.rD.GUILD, u.rD.APPLICATION, u.rD.LINK, u.rD.IN_APP_NAVIGATION],
    k = 0,
    U = !1,
    G = !1,
    V = null,
    F = [],
    B = null,
    H = 0,
    Y = [],
    W = [],
    K = null;

function z() {
    G = b.A.getGuildCount() >= 3 || o().size(m.A.getMutablePrivateChannels()) >= 20, Y = []
}

function q(e) {
    let t = [];
    return g.A.getRecentlyEditedDrafts(g.C.ChannelMessage).forEach(n => {
        let {
            channelId: r
        } = n;
        if (e(r)) return;
        let i = Z(r);
        if (null != i) {
            let e = {
                record: i,
                channelId: r
            };
            t.push(e)
        }
    }), t
}

function Z(e) {
    let t = (0, d.A)(e);
    return null == t || null != V && V !== t.type ? null : t
}

function Q() {
    var e, t;
    let n = null != (e = I.A.getGuildId()) ? e : void 0,
        r = null != (t = A.A.getChannelId()) ? t : void 0;
    switch (V) {
        case u.rD.USER: {
            let e = h.default.getId();
            return T.Ay.getRecentlyTalked(r, 100).filter(t => {
                let {
                    record: n
                } = t;
                return n.id !== e
            })
        }
        case u.rD.APPLICATION:
            return T.Ay.queryApplications({
                query: "",
                limit: 100,
                fuzzy: !0
            });
        case u.rD.GUILD:
            return T.Ay.queryGuilds({
                query: "",
                limit: 100,
                fuzzy: !0
            });
        case u.rD.TEXT_CHANNEL:
            return T.Ay.queryChannels({
                query: "",
                guildId: I.A.getGuildId(),
                limit: 100,
                fuzzy: !0,
                allowEmptyQueries: !0
            });
        case u.rD.VOICE_CHANNEL:
            return T.Ay.queryChannels({
                query: "",
                guildId: I.A.getGuildId(),
                limit: 100,
                fuzzy: !0,
                filter: () => !0,
                type: E.vM,
                allowEmptyQueries: !0
            })
    }
    let i = [],
        a = new Set,
        o = q(e => e === r || W.includes(e) || a.has(e));
    if (o.length > 0)
        for (let e of (i.push((0, u.jF)(w.intl.string(w.t["4B63jZ"]))), o)) a.add(e.channelId), i.push(e.record);
    let s = v.Ay.getMentionChannelIds().filter(e => e !== r && !W.includes(e) && !a.has(e)).map(e => Z(e)).filter(C.Vq).reverse();
    if (s.length > 0)
        for (let e of (i.push((0, u.jF)(w.intl.string(w.t["61Df13"]))), s)) a.add(e.record.id), i.push(e);
    if (null != n) {
        let e = E.Ay.getSelectableChannelIds(n).filter(e => {
            let t = m.A.getChannel(e);
            return !(null == t || e === r || W.includes(e) || a.has(e) || S.Ay.isChannelMuted(t.guild_id, e) || null != t.parent_id && S.Ay.isChannelMuted(t.guild_id, t.parent_id)) && (0, f.Y)(t)
        }).map(e => Z(e)).filter(e => e);
        Object.values(p.A.getActiveJoinedUnreadThreadsForGuild(n)).forEach(t => {
            for (let n in t) {
                let t = Z(n);
                null == t || a.has(t.record.id) || W.includes(n) || e.push(t)
            }
        }), e.length > 0 && (i.push((0, u.jF)(w.intl.string(w.t.ieCAhD))), i = i.concat(e))
    }
    let l = Math.min((i.length > 0 ? x : L) + 1, W.length),
        c = [];
    for (let e = 1; e < l; e += 1) {
        let t = Z(W[e]);
        null != t && (t.type !== u.rD.TEXT_CHANNEL && t.type !== u.rD.VOICE_CHANNEL || O.A.can(N.xBc.VIEW_CHANNEL, t.record)) && (c.push(t), a.add(t.record.id))
    }
    return c.length > 0 && (i = [(0, u.jF)(w.intl.string(w.t["80lOZ1"])), ...c, ...i]), i
}

function X(e, t) {
    switch (V) {
        case u.rD.USER: {
            let t = b.A.getGuild(I.A.getGuildId());
            e.unshift((0, u.jF)(null != t ? w.intl.formatToPlainString(w.t.FREzQs, {
                name: t.name
            }) : w.intl.string(w.t.XFYW1o))), F = e;
            break
        }
        case u.rD.TEXT_CHANNEL:
            e.unshift((0, u.jF)(w.intl.string(w.t.W26k4V))), F = e;
            break;
        case u.rD.VOICE_CHANNEL:
            e.unshift((0, u.jF)(w.intl.string(w.t.zUoI5C))), F = e;
            break;
        case u.rD.GUILD:
            e.unshift((0, u.jF)(w.intl.string(w.t.olADPs))), F = e;
            break;
        case u.rD.APPLICATION:
            e.unshift((0, u.jF)(w.intl.string(w.t.VwK1ld))), F = e;
            break;
        default:
            F = e
    }
    if (t !== B) B = t, H = Math.max(t.length, H), k = (0, u.Vv)(u.vB.DOWN, -1, F);
    else {
        let e = F[k];
        null != e && e.type === u.rD.HEADER && (k = (0, u.Vv)(u.vB.DOWN, k, F))
    }
    es.emitChange()
}

function J(e) {
    var t;
    let {
        query: n,
        queryMode: i
    } = e, a = n.trim(), o = null != (t = I.A.getGuildId()) ? t : void 0, s = new Set(["user:".concat(h.default.getId())]);
    null != o && s.add("guild:".concat(o)), K = Date.now(), r = null != r ? r : new u.Ay(et, j, null != i ? M : D, {
        frecencyBoosters: !0,
        blacklist: s,
        allowSnowflake: !0
    }, M), B = null, H = a.length, V = i, r.search(a)
}

function $(e) {
    let {
        channelId: t
    } = e;
    if (null == t) return !1;
    (W = W.filter(e => e !== t)).unshift(t), W.length > L + 1 && (W.length = L + 1)
}

function ee(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) {
        let r = e[n],
            i = t[n];
        if (r.record.id !== i.record.id) return !1
    }
    return !0
}

function et(e, t) {
    ee(e = "" === (t = t.trim()).trim() ? Q() : e, Y) || (Y = e, X(e, t))
}

function en() {
    B = null, H = 0, Y = [], null != r && (r.destroy(), r = null)
}

function er(e) {
    var t, n;
    let {
        query: i,
        queryMode: a
    } = e, o = i.trim();
    if (null == r) return !1;
    if (V !== a) {
        r.setResultTypes(null != a ? [a] : j), r.setLimit(null != a ? M : D);
        let e = null != (t = I.A.getGuildId()) ? t : void 0;
        a === u.rD.USER && null != e ? r.setOptions({
            userFilters: {
                guild: e,
                friends: !0
            }
        }, !0) : a === u.rD.VOICE_CHANNEL ? r.setOptions({
            voiceChannelGuildFilter: null
        }, !0) : r.setOptions({
            userFilters: null,
            voiceChannelGuildFilter: void 0
        }, !0)
    }
    if ((V = a) === u.rD.USER) {
        let e = null != (n = I.A.getGuildId()) ? n : null;
        r.search(o, e)
    } else r.search(o, void 0)
}

function ei(e) {
    k = e.selectedIndex
}

function ea() {
    if (U) return !1;
    U = !0, l.w.set(P, !0)
}
class eo extends(i = s.Ay.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(p.A, h.default, m.A, g.A, E.Ay, y.Ay, b.A, O.A, v.Ay, A.A, I.A, _.A, S.Ay), this.syncWith([_.A], () => !0), U = l.w.get(P) || !1, W = null != (t = null == e ? void 0 : e.channelHistory) ? t : []
    }
    getState() {
        return {
            channelHistory: W
        }
    }
    isOpen() {
        return null != r
    }
    getResultTotals(e) {
        return null == r ? 0 : null == e ? r.results.reduce((e, t) => t.type !== u.rD.HEADER ? e + 1 : e, 0) : r.results.reduce((t, n) => n.type === e ? t + 1 : t, 0)
    }
    channelNoticePredicate(e, t) {
        let n = Date.now() - t >= N.D2K;
        return G && n
    }
    getFrequentGuilds() {
        return null != r ? r.queryGuilds("", 100) : null
    }
    getFrequentGuildsLength() {
        return null != r ? r.queryGuilds("", 100).length : 0
    }
    getChannelHistory() {
        return W
    }
    getLastShowTimestamp() {
        return K
    }
    getProps() {
        return {
            theme: _.A.theme,
            query: null != r ? r.query : "",
            queryMode: V,
            results: F,
            selectedIndex: k,
            seenTutorial: U,
            maxQueryLength: H
        }
    }
}
R(eo, "displayName", "QuickSwitcherStore"), R(eo, "persistKey", "QuickSwitcherStore");
let es = new eo(c.h, {
        CONNECTION_OPEN: z,
        CONNECTION_OPEN_SUPPLEMENTAL: z,
        QUICKSWITCHER_SHOW: J,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: J,
        QUICKSWITCHER_HIDE: en,
        OVERLAY_SET_INPUT_LOCKED: en,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: en,
        QUICKSWITCHER_SEARCH: er,
        QUICKSWITCHER_SELECT: ei,
        QUICKSWITCHER_SWITCH_TO: ea,
        CHANNEL_SELECT: $
    }),
    el = es