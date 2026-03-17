/** chunk id: 813160 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(607399),
    a = n(311907),
    r = n(73153);
let l = !1;
class s extends a.Ay.Store {
    static displayName = "MobileWebSidebarStore";
    getIsOpen() {
        return !i.Fr || l
    }
}
let o = new s(r.h, {
    MOBILE_WEB_SIDEBAR_OPEN: function() {
        l = !0
    },
    MOBILE_WEB_SIDEBAR_CLOSE: function() {
        l = !1
    }
})