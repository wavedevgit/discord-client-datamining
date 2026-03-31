/** chunk id: 842716 params = (module,exports,require) **/
r.d(t, {
    A: () => h
}), r(667532);
var n = r(311907),
    s = r(506774),
    l = r(73153),
    a = r(768570);
let i = a.nC,
    u = !1,
    o = {};
class c extends n.Ay.Store {
    static displayName = a.yQ;
    initialize() {
        var e;
        let t = s.w.get(i);
        t?.history != null && (Object.keys(e = t.history).forEach(t => {
            Array.isArray(e[t]) && (e[t] = e[t].filter(e => "string" == typeof e && e.trim())), Array.isArray(e[t]) && 0 !== e[t].length || delete e[t]
        }), o = e), u = !!s.w.get("tokenized")
    }
    isTokenized() {
        return u
    }
    getHistory(e) {
        return o[e]
    }
}
let h = new c(l.h, {
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: function(e) {
        let {
            id: t
        } = e;
        delete o[t], s.w.set(a.nC, {
            history: o
        })
    },
    SEARCH_HISTORY_WEB_REMOVE_ITEM: function(e) {
        let {
            id: t,
            query: r
        } = e;
        null != o[t] && (o[t] = o[t].filter(e => e !== r), s.w.set(a.nC, {
            history: o
        }))
    },
    SEARCH_HISTORY_WEB_ADD_ITEM: function(e) {
        let {
            id: t,
            query: r
        } = e;
        if ("string" != typeof r || "" === (r = r.trim())) return;
        let n = o[t] = o[t] ?? [],
            l = n.indexOf(r); - 1 !== l ? (n.splice(l, 1), n.unshift(r)) : null != n[0] && "" !== n[0] && r.startsWith(n[0]) ? n[0] = r : l < 0 && n.unshift(r), n.length > 5 && n.splice(5, n.length), s.w.set(a.nC, {
            history: o
        })
    },
    LOGOUT: function() {
        s.w.remove(a.nC), o = {}
    }
})