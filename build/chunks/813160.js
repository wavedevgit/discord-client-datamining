/** chunk id: 813160 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(607399),
    a = n(311907),
    l = n(73153);
let r = !1;
class s extends a.Ay.Store {
    static displayName = "MobileWebSidebarStore";
    getIsOpen() {
        return !i.Fr || r
    }
}
let o = new s(l.h, {
    MOBILE_WEB_SIDEBAR_OPEN: function() {
        r = !0
    },
    MOBILE_WEB_SIDEBAR_CLOSE: function() {
        r = !1
    }
})