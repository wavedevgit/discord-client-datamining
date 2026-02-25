/** chunk id: 133025, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => a
});
var n = i(311907),
    s = i(73153);

function l(e, t) {
    if (0 === e.length) throw Error("No user IDs provided");
    return [...e, ...t].join(",")
}
let r = {};
class o extends n.Ay.Store {
    getRecommendations(e, t) {
        if (0 !== e.length && 0 !== t.length) return r[l(e, t)]
    }
}
let a = new o(s.h, {
    LOGOUT: function() {
        r = {}
    },
    WISHLIST_RECOMMENDATIONS_FETCH_START: function(e) {
        let {
            userIds: t,
            applicationIds: i
        } = e;
        if (0 === t.length || 0 === i.length) return !1;
        let n = l(t, i);
        r = {
            ...r,
            [n]: {
                state: "loading"
            }
        }
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function(e) {
        let {
            userIds: t,
            applicationIds: i,
            data: n
        } = e;
        if (0 === t.length || 0 === i.length) return !1;
        let s = l(t, i);
        r = {
            ...r,
            [s]: {
                state: "success",
                data: n,
                fetchedAt: Date.now()
            }
        }
    },
    WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function(e) {
        let {
            userIds: t,
            applicationIds: i
        } = e;
        if (0 === t.length || 0 === i.length) return !1;
        let n = l(t, i);
        if (r[n]?.state === "success") return !1;
        r = {
            ...r,
            [n]: {
                state: "error",
                fetchedAt: Date.now()
            }
        }
    }
})