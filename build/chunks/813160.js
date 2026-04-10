/** chunk id: 813160 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(607399),
    l = n(311907),
    r = n(73153);
let a = !1;
class s extends l.Ay.Store {
    static displayName = "MobileWebSidebarStore";
    getIsOpen() {
        return !i.Fr || a
    }
}
let o = new s(r.h, {
    MOBILE_WEB_SIDEBAR_OPEN: function() {
        a = !0
    },
    MOBILE_WEB_SIDEBAR_CLOSE: function() {
        a = !1
    }
})