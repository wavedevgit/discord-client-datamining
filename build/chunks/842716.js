/** chunk id: 842716, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => d
}), r(667532);
var n = r(311907),
    s = r(506774),
    l = r(73153),
    a = r(768570);
let i = a.nC,
    o = !1,
    c = {};
class u extends n.Ay.Store {
    static displayName = a.yQ;
    initialize() {
        var e;
        let t = s.w.get(i);
        t?.history != null && (Object.keys(e = t.history).forEach(t => {
            Array.isArray(e[t]) && (e[t] = e[t].filter(e => "string" == typeof e && e.trim())), Array.isArray(e[t]) && 0 !== e[t].length || delete e[t]
        }), c = e), o = !!s.w.get("tokenized")
    }
    isTokenized() {
        return o
    }
    getHistory(e) {
        return c[e]
    }
}
let d = new u(l.h, {
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: function(e) {
        let {
            id: t
        } = e;
        delete c[t], s.w.set(a.nC, {
            history: c
        })
    },
    SEARCH_HISTORY_WEB_REMOVE_ITEM: function(e) {
        let {
            id: t,
            query: r
        } = e;
        null != c[t] && (c[t] = c[t].filter(e => e !== r), s.w.set(a.nC, {
            history: c
        }))
    },
    SEARCH_HISTORY_WEB_ADD_ITEM: function(e) {
        let {
            id: t,
            query: r
        } = e;
        if ("string" != typeof r || "" === (r = r.trim())) return;
        let n = c[t] = c[t] ?? [],
            l = n.indexOf(r); - 1 !== l ? (n.splice(l, 1), n.unshift(r)) : null != n[0] && "" !== n[0] && r.startsWith(n[0]) ? n[0] = r : l < 0 && n.unshift(r), n.length > 5 && n.splice(5, n.length), s.w.set(a.nC, {
            history: c
        })
    },
    LOGOUT: function() {
        s.w.remove(a.nC), c = {}
    }
})