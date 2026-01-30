/** chunk id: 399777, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $: () => p,
    W: () => A
}), n(747238), n(896048);
var r = n(735438),
    i = n(629357),
    a = n(374803),
    o = n(498642),
    s = n(320501),
    l = n(248465),
    c = n(968011),
    u = n(236899);
let d = {
        startIndex: 0,
        query: "",
        prefix: "",
        suffix: ""
    },
    f = {
        results: {
            suggestions: [],
            queryInfo: d
        }
    },
    p = 3,
    _ = 5,
    h = 100,
    m = 200,
    g = /\w/,
    E = /[^\w\s]/;

function y(e, t) {
    if (t < 0 || t > e.length) return d;
    let n = t;
    for (; n > 0 && E.test(e[n - 1]);) n--;
    let r = n;
    for (; n > 0 && g.test(e[n - 1]);) n--;
    for (; r < e.length && g.test(e[r]);) r++;
    let i = e.substring(n, r),
        a = e.substring(0, n);
    return {
        startIndex: n,
        query: i,
        prefix: a,
        suffix: e.substring(r, e.length)
    }
}

function b(e, t, n, r) {
    var d, g;
    let {
        isIdle: E,
        currentAutocompleteType: b
    } = r;
    if (0 === t.length) return f;
    let {
        onlyExactMatch: O,
        eagerRecentSenders: v,
        largeGuildExactMatchRecentSenders: A
    } = (0, c.sA)("getMentionSuggestions", {
        autoTrackExposure: !1
    }), I = y(t, n), {
        query: S
    } = I;
    if (S.length < p || u.A.getMaxWordCount() < h || u.A.isFrequentlyUsedWord(S)) return f;
    let T = (0, l.X3)(i.rD.USER),
        C = s.A.getMessages(e.id).toArray(),
        N = new Set;
    for (let e = 0; e < C.length; e++) {
        let t = C[e];
        T[t.author.id] = (null != (d = T[t.author.id]) ? d : 1) + (C.length - e) / C.length, N.add(t.author.id)
    }
    let w = !1;
    A && (w = null != e.guild_id && (null != (g = o.A.getMemberCount(e.guild_id)) ? g : 0) > m);
    let R = l.Ay.queryMentionSuggestionResults({
        query: S,
        channel: e,
        boosters: T,
        onlyExactMatch: O && (!v || w)
    });
    return (w ? R = R.filter(e => N.has(e.user.id)) : v && (R = R.filter(e => "exact" === e.matchType || N.has(e.user.id))), E || b === a.DB.MENTION_SUGGESTIONS || !(S.length < _) || R.some(e => "exact" === e.matchType || v && N.has(e.user.id))) ? {
        results: {
            suggestions: R,
            queryInfo: I
        }
    } : f
}
let O = (0, r.memoize)(b, (e, t, n, r) => "".concat(e.id, "-").concat(r.isIdle, "-").concat(r.currentAutocompleteType, "-").concat(t, "-").concat(n)),
    v = null;

function A(e, t, n, r) {
    return null == v && (v = setTimeout(() => {
        var e, t;
        null == (e = (t = O.cache).clear) || e.call(t), v = null
    }, 0)), O(e, t, n, r)
}