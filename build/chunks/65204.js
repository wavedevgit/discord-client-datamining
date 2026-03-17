/** chunk id: 65204 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(311907),
    s = n(73153);
let l = {};
class r extends i.Ay.Store {
    static displayName = "ApplicationBranchStore";
    getBranches(e) {
        return l[e] ?? []
    }
}
let a = new r(s.h, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function(e) {
        let {
            applicationId: t,
            branches: n
        } = e;
        l[t] = n
    },
    LOGOUT: function() {
        l = {}
    }
})