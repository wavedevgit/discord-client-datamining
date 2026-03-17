/** chunk id: 133025 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var s = n(311907),
    i = n(73153);

function l(e, t) {
    if (0 === e.length) throw Error("No user IDs provided");
    return [...e, ...t].join(",")
}
let r = {};
class o extends s.Ay.Store {
    getRecommendations(e, t) {
        if (0 !== e.length && 0 !== t.length) return r[l(e, t)]
    }
}
let u = new o(i.h, {
    LOGOUT: function() {
        r = {}
    },
    WISHLIST_RECOMMENDATIONS_FETCH_START: function(e) {
        let {
            userIds: t,
            applicationIds: n
        } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let s = l(t, n);
        r = {
            ...r,
            [s]: {
                state: "loading"
            }
        }
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function(e) {
        let {
            userIds: t,
            applicationIds: n,
            data: s
        } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let i = l(t, n);
        r = {
            ...r,
            [i]: {
                state: "success",
                data: s,
                fetchedAt: Date.now()
            }
        }
    },
    WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function(e) {
        let {
            userIds: t,
            applicationIds: n
        } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let s = l(t, n);
        if (r[s]?.state === "success") return !1;
        r = {
            ...r,
            [s]: {
                state: "error",
                fetchedAt: Date.now()
            }
        }
    }
})